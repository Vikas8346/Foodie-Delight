// ===== Admin Authentication =====
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

const loginForm = document.getElementById('loginForm');
const adminLogin = document.getElementById('adminLogin');
const adminDashboard = document.getElementById('adminDashboard');
const logoutBtn = document.getElementById('logoutBtn');

// Check if already logged in
if (sessionStorage.getItem('adminLoggedIn') === 'true') {
    showDashboard();
}

// Login form submission
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Invalid credentials! Please try again.\nDemo: admin / admin123');
        }
    });
}

// Logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('adminLoggedIn');
        location.reload();
    });
}

// Show/hide sections
function showDashboard() {
    if (adminLogin) adminLogin.style.display = 'none';
    if (adminDashboard) adminDashboard.style.display = 'block';
    loadDashboardData();
}

// ===== Dashboard Data Management =====
function getMenuItems() {
    const items = localStorage.getItem('menuItems');
    return items ? JSON.parse(items) : [];
}

function saveMenuItems(items) {
    localStorage.setItem('menuItems', JSON.stringify(items));
}

function loadDashboardData() {
    updateStats();
    renderAdminTable();
}

// Update statistics
function updateStats() {
    const items = getMenuItems();
    
    document.getElementById('totalItems').textContent = items.length;
    document.getElementById('startersCount').textContent = 
        items.filter(item => item.category === 'starters').length;
    document.getElementById('mainCoursesCount').textContent = 
        items.filter(item => item.category === 'main-courses').length;
    document.getElementById('dessertsCount').textContent = 
        items.filter(item => item.category === 'desserts').length;
    document.getElementById('beveragesCount').textContent = 
        items.filter(item => item.category === 'beverages').length;
}

// ===== Table Rendering =====
const menuTableBody = document.getElementById('menuTableBody');
let currentAdminFilter = 'all';

// Admin filter buttons
document.querySelectorAll('.admin-filter .filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.admin-filter .filter-btn').forEach(btn => 
            btn.classList.remove('active')
        );
        button.classList.add('active');
        currentAdminFilter = button.getAttribute('data-category');
        renderAdminTable();
    });
});

function renderAdminTable() {
    if (!menuTableBody) return;
    
    let items = getMenuItems();
    
    // Filter by category
    if (currentAdminFilter !== 'all') {
        items = items.filter(item => item.category === currentAdminFilter);
    }
    
    // Sort by category and name
    items.sort((a, b) => {
        if (a.category === b.category) {
            return a.name.localeCompare(b.name);
        }
        return a.category.localeCompare(b.category);
    });
    
    menuTableBody.innerHTML = '';
    
    if (items.length === 0) {
        menuTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2rem;">
                    No items found in this category
                </td>
            </tr>
        `;
        return;
    }
    
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" class="table-image"></td>
            <td>${item.name}</td>
            <td>${formatCategory(item.category)}</td>
            <td>${truncateText(item.description, 50)}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="editItem(${item.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-delete" onclick="deleteItem(${item.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        `;
        menuTableBody.appendChild(row);
    });
}

function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// ===== Modal Management =====
const itemModal = document.getElementById('itemModal');
const addItemBtn = document.getElementById('addItemBtn');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');

let editingItemId = null;

// Open modal for adding new item
if (addItemBtn) {
    addItemBtn.addEventListener('click', () => {
        editingItemId = null;
        modalTitle.textContent = 'Add New Item';
        itemForm.reset();
        openModal();
    });
}

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModalFunc);
}

// Close modal when clicking outside
itemModal?.addEventListener('click', (e) => {
    if (e.target === itemModal) {
        closeModalFunc();
    }
});

function openModal() {
    itemModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    itemModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    editingItemId = null;
}

// ===== CRUD Operations =====

// Edit item
window.editItem = function(id) {
    const items = getMenuItems();
    const item = items.find(i => i.id === id);
    
    if (!item) return;
    
    editingItemId = id;
    modalTitle.textContent = 'Edit Item';
    
    document.getElementById('itemId').value = item.id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemDescription').value = item.description;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemImage').value = item.image;
    
    openModal();
};

// Delete item
window.deleteItem = function(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    let items = getMenuItems();
    items = items.filter(item => item.id !== id);
    saveMenuItems(items);
    
    updateStats();
    renderAdminTable();
    
    alert('Item deleted successfully!');
};

// Form submission (Add/Edit)
if (itemForm) {
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('itemName').value.trim();
        const category = document.getElementById('itemCategory').value;
        const description = document.getElementById('itemDescription').value.trim();
        const price = parseFloat(document.getElementById('itemPrice').value);
        const image = document.getElementById('itemImage').value.trim();
        
        // Validation
        if (!name || !category || !description || !price || !image) {
            alert('Please fill in all fields');
            return;
        }
        
        if (price <= 0) {
            alert('Price must be greater than 0');
            return;
        }
        
        let items = getMenuItems();
        
        if (editingItemId) {
            // Update existing item
            const index = items.findIndex(item => item.id === editingItemId);
            if (index !== -1) {
                items[index] = {
                    ...items[index],
                    name,
                    category,
                    description,
                    price,
                    image
                };
                alert('Item updated successfully!');
            }
        } else {
            // Add new item
            const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
            const newItem = {
                id: newId,
                name,
                category,
                description,
                price,
                image
            };
            items.push(newItem);
            alert('Item added successfully!');
        }
        
        saveMenuItems(items);
        updateStats();
        renderAdminTable();
        closeModalFunc();
        itemForm.reset();
    });
}

// ===== Image Preview =====
const itemImageInput = document.getElementById('itemImage');
if (itemImageInput) {
    itemImageInput.addEventListener('change', (e) => {
        const url = e.target.value;
        if (url) {
            // You could add image preview functionality here
            console.log('Image URL:', url);
        }
    });
}

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && itemModal.classList.contains('active')) {
        closeModalFunc();
    }
    
    // Ctrl/Cmd + N to add new item (when logged in)
    if ((e.ctrlKey || e.metaKey) && e.key === 'n' && adminDashboard.style.display === 'block') {
        e.preventDefault();
        addItemBtn.click();
    }
});

// ===== Export/Import Functionality (Bonus) =====
function exportMenu() {
    const items = getMenuItems();
    const dataStr = JSON.stringify(items, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `menu-export-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importMenu(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const items = JSON.parse(e.target.result);
            if (confirm('This will replace all existing menu items. Continue?')) {
                saveMenuItems(items);
                loadDashboardData();
                alert('Menu imported successfully!');
            }
        } catch (error) {
            alert('Error importing menu: Invalid file format');
        }
    };
    reader.readAsText(file);
}

// ===== Initialize Dashboard =====
if (adminDashboard && adminDashboard.style.display === 'block') {
    loadDashboardData();
}
