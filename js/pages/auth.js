/* ============================================
   RASA NUSANTARA - AUTHENTICATION MODULE
   Mock API Authentication
   ============================================ */

// Mock API Configuration
const MOCK_API = {
    // Simulated API delay (in ms)
    delay: 800,
    
    // Mock user database
    users: [
        {
            username: 'admin',
            password: 'cirebon123',
            name: 'Admin Kuliner',
            role: 'admin'
        },
        {
            username: 'user',
            password: 'cirebon123',
            name: 'Pecinta Kuliner',
            role: 'user'
        }
    ]
};

// Authentication Manager
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.checkExistingSession();
    }

    // Check if user already logged in
    checkExistingSession() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            // If on login page and already logged in, redirect to dashboard
            if (window.location.pathname.includes('login.html')) {
                window.location.href = 'dashboard.html';
            }
        } else {
            // If not logged in and not on login page, redirect to login
            if (!window.location.pathname.includes('login.html') && 
                !window.location.pathname.includes('index.html')) {
                window.location.href = 'login.html';
            }
        }
    }

    // Simulate API login call
    async login(username, password) {
        // Show loading state
        this.showLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, MOCK_API.delay));

        // Find user in mock database
        const user = MOCK_API.users.find(
            u => u.username === username && u.password === password
        );

        this.showLoading(false);

        if (user) {
            // Success - save user data (without password)
            const userData = {
                username: user.username,
                name: user.name,
                role: user.role,
                loginTime: new Date().toISOString()
            };
            
            this.currentUser = userData;
            localStorage.setItem('currentUser', JSON.stringify(userData));
            
            return {
                success: true,
                message: `Selamat datang, ${user.name}!`,
                user: userData
            };
        } else {
            // Failed - invalid credentials
            return {
                success: false,
                message: 'Username atau password salah!'
            };
        }
    }

    // Logout user
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Show/hide loading state
    showLoading(isLoading) {
        const submitBtn = document.querySelector('.btn-login');
        if (submitBtn) {
            if (isLoading) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Memproses...</span>';
                submitBtn.style.opacity = '0.7';
            } else {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Masuk';
                submitBtn.style.opacity = '1';
            }
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Styling
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            fontWeight: '600',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        });

        // Type-specific styling
        if (type === 'success') {
            notification.style.background = '#4CAF50';
            notification.style.color = 'white';
        } else if (type === 'error') {
            notification.style.background = '#C41E3A';
            notification.style.color = 'white';
        } else {
            notification.style.background = '#FFC857';
            notification.style.color = '#2C1810';
        }

        // Add to page
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize Auth Manager
const authManager = new AuthManager();

// Login Form Handler
if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const demoLoginBtn = document.getElementById('demoLogin');

    // Toggle password visibility
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            togglePassword.querySelector('.eye-icon').textContent = 
                type === 'password' ? '👁️' : '🙈';
        });
    }

    // Handle login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Basic validation
        if (!username || !password) {
            authManager.showNotification('Username dan password harus diisi!', 'error');
            return;
        }

        // Attempt login
        const result = await authManager.login(username, password);

        if (result.success) {
            authManager.showNotification(result.message, 'success');
            
            // Save remember me preference
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }

            // Redirect to dashboard after short delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 800);
        } else {
            authManager.showNotification(result.message, 'error');
            // Clear password field
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    // Demo login button
    if (demoLoginBtn) {
        demoLoginBtn.addEventListener('click', async () => {
            // Auto-fill with demo credentials
            document.getElementById('username').value = 'admin';
            document.getElementById('password').value = 'cirebon123';
            
            // Show notification
            authManager.showNotification('Demo credentials terisi!', 'info');
            
            // Auto-submit after short delay
            setTimeout(() => {
                loginForm.dispatchEvent(new Event('submit'));
            }, 500);
        });
    }

    // Auto-focus on username field
    document.getElementById('username').focus();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { authManager, AuthManager };
}