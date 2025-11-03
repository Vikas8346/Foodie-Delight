// ===== Menu Data (Simulating MySQL Database) =====
const defaultMenuItems = [
    // Starters
    {
        id: 1,
        name: "Bruschetta",
        category: "starters",
        description: "Toasted bread topped with fresh tomatoes, basil, and garlic",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500"
    },
    {
        id: 2,
        name: "Crispy Calamari",
        category: "starters",
        description: "Lightly fried squid rings served with marinara sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500"
    },
    {
        id: 3,
        name: "Stuffed Mushrooms",
        category: "starters",
        description: "Mushroom caps filled with cheese and herbs",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?w=500"
    },
    {
        id: 4,
        name: "Caesar Salad",
        category: "starters",
        description: "Crisp romaine lettuce with parmesan cheese and croutons",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500"
    },
    
    // Main Courses
    {
        id: 5,
        name: "Grilled Salmon",
        category: "main-courses",
        description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500"
    },
    {
        id: 6,
        name: "Beef Tenderloin",
        category: "main-courses",
        description: "Premium beef with red wine reduction and seasonal vegetables",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500"
    },
    {
        id: 7,
        name: "Chicken Parmesan",
        category: "main-courses",
        description: "Breaded chicken breast with marinara and melted mozzarella",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500"
    },
    {
        id: 8,
        name: "Vegetable Risotto",
        category: "main-courses",
        description: "Creamy arborio rice with seasonal vegetables and parmesan",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1476124369491-c44baa5f944a?w=500"
    },
    {
        id: 9,
        name: "Lobster Pasta",
        category: "main-courses",
        description: "Fresh lobster with linguine in a creamy tomato sauce",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"
    },
    
    // Desserts
    {
        id: 10,
        name: "Tiramisu",
        category: "desserts",
        description: "Classic Italian dessert with coffee-soaked ladyfingers",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500"
    },
    {
        id: 11,
        name: "Chocolate Lava Cake",
        category: "desserts",
        description: "Warm chocolate cake with a molten center",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500"
    },
    {
        id: 12,
        name: "Crème Brûlée",
        category: "desserts",
        description: "Vanilla custard with caramelized sugar topping",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500"
    },
    {
        id: 13,
        name: "New York Cheesecake",
        category: "desserts",
        description: "Rich and creamy cheesecake with berry compote",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
    },
    
    // Beverages
    {
        id: 14,
        name: "Fresh Lemonade",
        category: "beverages",
        description: "Homemade lemonade with mint and fresh lemons",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=500"
    },
    {
        id: 15,
        name: "Cappuccino",
        category: "beverages",
        description: "Espresso with steamed milk and foam",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
    },
    {
        id: 16,
        name: "Iced Tea",
        category: "beverages",
        description: "Refreshing black tea served over ice with lemon",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"
    },
    {
        id: 17,
        name: "Fresh Orange Juice",
        category: "beverages",
        description: "Freshly squeezed orange juice",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"
    }
];

// ===== Initialize localStorage with default data =====
function initializeMenuData() {
    if (!localStorage.getItem('menuItems')) {
        localStorage.setItem('menuItems', JSON.stringify(defaultMenuItems));
    }
}

// ===== Get menu items from localStorage =====
function getMenuItems() {
    const items = localStorage.getItem('menuItems');
    return items ? JSON.parse(items) : defaultMenuItems;
}

// ===== Theme Toggle Functionality =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // Validate phone (optional but if provided, must be valid)
        if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
            isValid = false;
        }
        
        // Validate message
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// ===== Menu Page Functionality =====
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');

let currentFilter = 'all';
let searchQuery = '';

// Initialize menu data
initializeMenuData();

// Render menu items
function renderMenuItems(items = null) {
    if (!menuGrid) return;
    
    const menuItems = items || getMenuItems();
    
    // Filter by category
    let filteredItems = currentFilter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentFilter);
    
    // Filter by search query
    if (searchQuery) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    // Clear grid
    menuGrid.innerHTML = '';
    
    // Show/hide no results message
    if (filteredItems.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        if (noResults) noResults.style.display = 'none';
    }
    
    // Render items
    filteredItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
}

// Create menu card element
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-card-image">
        <div class="menu-card-content">
            <span class="menu-card-category">${formatCategory(item.category)}</span>
            <div class="menu-card-header">
                <h3 class="menu-card-title">${item.name}</h3>
                <span class="menu-card-price">$${item.price.toFixed(2)}</span>
            </div>
            <p class="menu-card-description">${item.description}</p>
        </div>
    `;
    return card;
}

// Format category for display
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Filter buttons event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update filter and render
        currentFilter = button.getAttribute('data-category');
        renderMenuItems();
    });
});

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMenuItems();
    });
}

// Initial render
if (menuGrid) {
    renderMenuItems();
}

// ===== Newsletter Form =====
document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .offer-card, .menu-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
