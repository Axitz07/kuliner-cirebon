/* ============================================
   RASA NUSANTARA - DASHBOARD MODULE
   ============================================ */

class DashboardManager {
    constructor() {
        this.currentFilter = 'semua';
        this.searchQuery = '';
        this.currentUser = null;

        this.initializeAuth();
        this.setupEventListeners();
    }

    initializeAuth() {
        const savedUser = localStorage.getItem('currentUser');
        if (!savedUser) {
            window.location.href = 'login.html';
            return;
        }
        this.currentUser = JSON.parse(savedUser);
        this.displayUserInfo();
    }

    displayUserInfo() {
        const el = document.getElementById('userName');
        if (el && this.currentUser) {
            el.textContent = this.currentUser.name || this.currentUser.username;
        }
    }

    setupEventListeners() {
        const logoutBtn = document.getElementById('logoutBtn');
        const logoutBtnMobile = document.getElementById('logoutBtnMobile');
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.logout());
        if (logoutBtnMobile) logoutBtnMobile.addEventListener('click', () => this.logout());

        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.style.display =
                    mobileMenu.style.display === 'block' ? 'none' : 'block';
            });
        }

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.filterAndRender();
            });
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.getAttribute('data-category');
                this.filterAndRender();
            });
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }

    filterAndRender() {
        let list = typeof foodsData !== 'undefined' ? foodsData : [];

        if (this.currentFilter !== 'semua') {
            list = list.filter(f => f.kategori === this.currentFilter);
        }

        if (this.searchQuery) {
            list = list.filter(f =>
                f.nama.toLowerCase().includes(this.searchQuery) ||
                f.deskripsi.toLowerCase().includes(this.searchQuery) ||
                f.lokasi.toLowerCase().includes(this.searchQuery)
            );
        }

        this.renderCards(list);
    }

    renderCards(list) {
        const grid = document.getElementById('foodGrid');
        const empty = document.getElementById('emptyState');
        if (!grid) return;

        grid.innerHTML = '';

        if (list.length === 0) {
            grid.style.display = 'none';
            if (empty) empty.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        if (empty) empty.style.display = 'none';

        list.forEach(food => grid.appendChild(this.createCard(food)));
    }

    createCard(food) {
        const categoryLabel = {
            'makanan-berat': 'Makanan Berat',
            'cemilan': 'Cemilan',
            'minuman': 'Minuman',
            'kue': 'Kue'
        };

        const card = document.createElement('article');
        card.className = 'food-card';
        card.innerHTML = `
            <img
                src="${food.gambar}"
                alt="${food.nama}"
                class="food-image"
                onerror="this.style.display='none'"
                loading="lazy"
            >
            <div class="food-content">
                <span class="food-category">${categoryLabel[food.kategori] || food.kategori}</span>
                <h3 class="food-title">${food.nama}</h3>
                <div class="food-location">
                    <span>${food.lokasi}</span>
                </div>
                <p class="food-description">${food.deskripsi}</p>
                <div class="food-footer">
                    <span class="food-history">${food.sejarah}</span>
                    <button class="btn-detail" data-id="${food.id}">Lihat detail</button>
                </div>
            </div>
        `;

        card.querySelector('.btn-detail').addEventListener('click', () => {
            this.showDetail(food.id);
        });

        return card;
    }

    showDetail(id) {
        const food = (typeof foodsData !== 'undefined' ? foodsData : []).find(f => f.id === id);
        if (!food) return;

        const lines = [
            food.nama,
            '',
            'Lokasi: ' + food.lokasi,
            '',
            food.deskripsi,
        ];

        if (food.asal_usul) {
            lines.push('', 'Asal Usul:', food.asal_usul);
        }

        if (food.harga) {
            lines.push('', 'Kisaran harga: ' + food.harga);
        }

        if (food.bahan_utama) {
            lines.push('', 'Bahan utama: ' + food.bahan_utama.join(', '));
        }

        alert(lines.join('\n'));
    }

    updateStats() {
        const el = document.getElementById('totalMakanan');
        if (el && typeof foodsData !== 'undefined') {
            el.textContent = foodsData.length;
        }
    }
}

const dashboardManager = new DashboardManager();
dashboardManager.updateStats();
dashboardManager.filterAndRender();
