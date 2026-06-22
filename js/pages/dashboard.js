/* ============================================
   RASA NUSANTARA - DASHBOARD MODULE
   Dashboard Functionality
   ============================================ */

// Import food data
let foodsData = [];

// Load food data
fetch('js/data/foods.js')
    .then(response => response.text())
    .then(text => {
        // Extract data from the module
        const match = text.match(/const foodsData = (\[[\s\S]*?\]);/);
        if (match) {
            foodsData = eval(match[1]);
            initializeDashboard();
        }
    })
    .catch(error => {
        console.error('Error loading food data:', error);
        // Use inline data as fallback
        useFallbackData();
    });

// Fallback data jika file tidak bisa dimuat
function useFallbackData() {
    foodsData = [
        {
            id: 1,
            nama: 'Nasi Jamblang',
            kategori: 'makanan-berat',
            daerah: 'Cirebon',
            lokasi: 'Mertapada, Cirebon',
            gambar: 'https://images.unsplash.com/photo-1596040033229-a0b40e4a8d5c?w=500',
            deskripsi: 'Nasi yang dibungkus daun jati dengan berbagai lauk khas Cirebon.',
            sejarah: 'Berasal dari desa Jamblang, Cirebon sejak tahun 1940-an'
        },
        {
            id: 2,
            nama: 'Empal Gentong',
            kategori: 'makanan-berat',
            daerah: 'Cirebon',
            lokasi: 'Battembat, Cirebon',
            gambar: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500',
            deskripsi: 'Gulai daging sapi dengan kuah santan gurih yang dimasak dalam gentong.',
            sejarah: 'Sudah ada sejak era Kesultanan Cirebon, abad ke-15'
        }
    ];
    initializeDashboard();
}

// Dashboard Manager
class DashboardManager {
    constructor() {
        this.currentFilter = 'semua';
        this.searchQuery = '';
        this.currentUser = null;
        
        this.initializeAuth();
        this.setupEventListeners();
    }

    // Initialize authentication
    initializeAuth() {
        const savedUser = localStorage.getItem('currentUser');
        if (!savedUser) {
            window.location.href = 'login.html';
            return;
        }
        
        this.currentUser = JSON.parse(savedUser);
        this.displayUserInfo();
    }

    // Display user information
    displayUserInfo() {
        const userNameElement = document.getElementById('userName');
        if (userNameElement && this.currentUser) {
            userNameElement.textContent = this.currentUser.name || this.currentUser.username;
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Logout buttons
        const logoutBtn = document.getElementById('logoutBtn');
        const logoutBtnMobile = document.getElementById('logoutBtnMobile');
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        
        if (logoutBtnMobile) {
            logoutBtnMobile.addEventListener('click', () => this.logout());
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.style.display = 
                    mobileMenu.style.display === 'block' ? 'none' : 'block';
            });
        }

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.filterAndDisplayFoods();
            });
        }

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Set current filter
                this.currentFilter = button.getAttribute('data-category');
                // Filter and display
                this.filterAndDisplayFoods();
            });
        });
    }

    // Logout function
    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }

    // Render food cards
    renderFoodCards(foods) {
        const foodGrid = document.getElementById('foodGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!foodGrid) return;

        // Clear existing cards
        foodGrid.innerHTML = '';

        // Check if no foods to display
        if (foods.length === 0) {
            foodGrid.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        // Show grid and hide empty state
        foodGrid.style.display = 'grid';
        if (emptyState) emptyState.style.display = 'none';

        // Render each food card
        foods.forEach(food => {
            const card = this.createFoodCard(food);
            foodGrid.appendChild(card);
        });
    }

    // Create individual food card
    createFoodCard(food) {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.setAttribute('data-id', food.id);

        // Category label mapping
        const categoryLabels = {
            'makanan-berat': 'Makanan Berat',
            'cemilan': 'Cemilan',
            'minuman': 'Minuman',
            'kue': 'Kue'
        };

        card.innerHTML = `
            <img src="${food.gambar}" alt="${food.nama}" class="food-image" onerror="this.src='https://via.placeholder.com/500x300?text=${encodeURIComponent(food.nama)}'">
            <div class="food-content">
                <span class="food-category">${categoryLabels[food.kategori] || food.kategori}</span>
                <h3 class="food-title">${food.nama}</h3>
                <div class="food-location">
                    <span>📍</span>
                    <span>${food.lokasi}</span>
                </div>
                <p class="food-description">${food.deskripsi}</p>
                <div class="food-footer">
                    <span class="food-history">📜 ${food.sejarah}</span>
                    <button class="btn-detail" onclick="dashboardManager.showFoodDetail(${food.id})">Detail</button>
                </div>
            </div>
        `;

        return card;
    }

    // Filter and display foods
    filterAndDisplayFoods() {
        let filteredFoods = foodsData;

        // Apply category filter
        if (this.currentFilter !== 'semua') {
            filteredFoods = filteredFoods.filter(
                food => food.kategori === this.currentFilter
            );
        }

        // Apply search filter
        if (this.searchQuery) {
            filteredFoods = filteredFoods.filter(food =>
                food.nama.toLowerCase().includes(this.searchQuery) ||
                food.deskripsi.toLowerCase().includes(this.searchQuery) ||
                food.lokasi.toLowerCase().includes(this.searchQuery)
            );
        }

        this.renderFoodCards(filteredFoods);
    }

    // Show food detail (untuk pengembangan selanjutnya)
    showFoodDetail(foodId) {
        const food = foodsData.find(f => f.id === foodId);
        if (!food) return;

        // Untuk saat ini, tampilkan alert sederhana
        // Nanti bisa dikembangkan jadi modal atau halaman detail
        let detailMessage = `
🍽️ ${food.nama}

📍 Lokasi: ${food.lokasi}

📖 Deskripsi:
${food.deskripsi}

📜 Sejarah:
${food.sejarah}
        `;

        if (food.asal_usul) {
            detailMessage += `\n\n🏛️ Asal Usul:\n${food.asal_usul}`;
        }

        if (food.harga) {
            detailMessage += `\n\n💰 Harga: ${food.harga}`;
        }

        if (food.bahan_utama) {
            detailMessage += `\n\n🥘 Bahan Utama:\n${food.bahan_utama.join(', ')}`;
        }

        alert(detailMessage);

        // TODO: Implement proper detail page/modal in future
        console.log('Food detail:', food);
    }

    // Update statistics
    updateStats() {
        const totalMakananElement = document.getElementById('totalMakanan');
        if (totalMakananElement) {
            totalMakananElement.textContent = foodsData.length;
        }
    }
}

// Initialize dashboard when data is loaded
let dashboardManager;

function initializeDashboard() {
    dashboardManager = new DashboardManager();
    dashboardManager.updateStats();
    dashboardManager.filterAndDisplayFoods();
}

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && dashboardManager) {
        // Refresh data when page becomes visible
        dashboardManager.initializeAuth();
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DashboardManager, dashboardManager };
}