# 🍽️ Foodie Delight - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript featuring dynamic menu management, interactive UI, and an admin dashboard.

![Foodie Delight](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop)

## 🌟 Features

### User Features
- **Homepage**: Attractive hero banner with smooth animations and call-to-action buttons
- **Dynamic Menu Page**: Browse dishes categorized as Starters, Main Courses, Desserts, and Beverages
- **Search & Filter**: Real-time search and category filtering for easy menu navigation
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Contact Form**: Validated contact form with real-time error checking
- **Theme Toggle**: Light/Dark mode support with persistent theme preference
- **Smooth Animations**: Scroll animations, hover effects, and smooth transitions throughout

### Admin Features
- **Secure Login**: Admin authentication system (Demo: username: `admin`, password: `admin123`)
- **Dashboard Statistics**: Real-time overview of menu items by category
- **CRUD Operations**: Add, edit, and delete menu items with a user-friendly interface
- **Modal Forms**: Clean popup modals for adding/editing items
- **Category Filtering**: Filter admin view by food categories
- **Data Persistence**: All changes saved to browser localStorage

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations, and CSS variables
- **JavaScript (Vanilla)**: No frameworks - pure JavaScript for all functionality
- **localStorage**: Client-side data persistence (simulates database)
- **Google Fonts**: Poppins font family for modern typography
- **Font Awesome**: Icon library for UI elements

## 📁 Project Structure

```
Foodie-Delight/
├── index.html          # Homepage
├── menu.html           # Menu page with all dishes
├── admin.html          # Admin dashboard
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── script.js       # Main JavaScript (menu, theme, forms)
│   └── admin.js        # Admin dashboard functionality
├── images/             # Image assets (placeholder)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser!

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/Vikas8346/Foodie-Delight.git
   cd Foodie-Delight
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Start exploring!**
   - Homepage: `index.html`
   - Menu: `menu.html`
   - Admin: `admin.html`

## 📖 Usage Guide

### For Visitors

1. **Browse the Website**
   - Navigate using the top navigation bar
   - Explore special offers and features on the homepage
   - View the complete menu with search and filter options

2. **Search Menu Items**
   - Use the search bar on the menu page
   - Type dish names or keywords from descriptions
   - Results update in real-time

3. **Filter by Category**
   - Click category buttons (All, Starters, Main Courses, Desserts, Beverages)
   - View only items from selected category

4. **Toggle Theme**
   - Click the sun/moon icon in the navigation bar
   - Theme preference is saved automatically

5. **Contact Form**
   - Fill in your details in the contact section
   - Form validates input before submission
   - Receive confirmation upon successful submission

### For Administrators

1. **Login to Admin Dashboard**
   - Navigate to `admin.html`
   - Use credentials: **username**: `admin`, **password**: `admin123`

2. **View Statistics**
   - Dashboard shows total items and breakdown by category
   - Updates automatically when items are added/deleted

3. **Add New Menu Item**
   - Click "Add New Item" button
   - Fill in all required fields:
     - Item Name
     - Category
     - Description
     - Price
     - Image URL (use Unsplash or placeholder URLs)
   - Click "Save Item"

4. **Edit Existing Item**
   - Click "Edit" button on any item in the table
   - Modify fields in the modal
   - Save changes

5. **Delete Item**
   - Click "Delete" button on any item
   - Confirm deletion
   - Item is permanently removed

6. **Filter Admin View**
   - Use category buttons to filter the table
   - View specific categories for easier management

## 🎨 Design Details

### Color Palette
- **Primary**: Gold (#d4af37) - Elegance and premium quality
- **Secondary**: Crimson Red (#c41e3a) - Energy and appetite appeal
- **Background**: White (#ffffff) / Dark (#1a1a1a) based on theme
- **Text**: Dark Gray (#2d2d2d) / Light (#f5f5f5) based on theme

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔑 Key Features Implementation

### Dynamic Menu Rendering
```javascript
// Menu items are stored in localStorage
// Rendered dynamically using JavaScript
// Supports search and filtering in real-time
```

### Theme System
```javascript
// CSS variables for easy theme switching
// Persistent storage using localStorage
// Smooth transitions between themes
```

### Admin Authentication
```javascript
// Session-based authentication
// Credentials stored in sessionStorage
// Auto-logout on browser close
```

### Data Persistence
```javascript
// All menu data stored in localStorage
// Simulates a real database
// Data persists across sessions
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly interface
- Optimized images
- Mobile-first approach
- Hamburger menu for navigation

## 🔒 Security Notes

⚠️ **Important**: This is a demo project with simplified authentication:
- Credentials are hardcoded for demonstration purposes
- sessionStorage is used for login state
- For production use, implement proper backend authentication
- Use HTTPS and secure password hashing

## 🚧 Future Enhancements

- [ ] Backend integration (Node.js/PHP)
- [ ] Real database (MySQL/MongoDB)
- [ ] Image upload functionality
- [ ] Online ordering system
- [ ] Customer reviews and ratings
- [ ] Reservation system
- [ ] Multiple admin roles
- [ ] Email notifications
- [ ] Payment integration
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

**Vikas8346**
- GitHub: [@Vikas8346](https://github.com/Vikas8346)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Contact via the website contact form

---

**Made with ❤️ by Vikas8346**

*Enjoy your Foodie Delight experience!* 🍕🍰☕