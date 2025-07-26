# 🍽️ Restaurant Page
A dynamic restaurant website built with vanilla JavaScript and Webpack. This project demonstrates DOM manipulation by generating the entire website content dynamically through JavaScript modules and tabbed navigation.

---

## 🌟 Features
- **Dynamic Content Generation**: Entire page content created using JavaScript DOM manipulation
- **Tabbed Navigation**: Seamless switching between Home, Menu, and Contact pages
- **Modular Architecture**: Each page component is built as a separate module
- **Webpack Integration**: Modern build process with development server
- **Responsive Design**: Clean and intuitive restaurant website layout
- **No Static HTML Content**: All content dynamically generated (except basic template)

---

## 🛠️ Technologies Used
- HTML5 (minimal template only)
- CSS3
- Vanilla JavaScript
- DOM Manipulation
- ES6 Modules
- Webpack
- npm Package Management
- GitHub Pages Deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of JavaScript and Webpack

### Installation
1. Clone the repository
```bash
git clone https://github.com/Abdirazakf/restaurant-page.git
```

2. Navigate to the project directory
```bash
cd restaurant-page
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npx webpack serve
```

5. Open your browser and navigate to
```
http://localhost:8080
```

### Building for Production
```bash
npx webpack
```

---

## 📖 Usage
1. **Home Page**
   - Landing page with restaurant introduction
   - Welcome message and restaurant highlights
   - Appealing imagery and restaurant description

2. **Menu Page**
   - Navigate using the "Menu" tab in the header
   - Browse through food items and descriptions
   - View prices and meal categories

3. **Contact Page**
   - Access restaurant contact information
   - Find location details and hours
   - Get in touch information

---

## Project Structure
```
restaurant-page/
│
├── dist/                 # Built files (auto-generated)
├── src/
│   ├── index.js          # Main entry point & tab switching logic
│   ├── template.html     # Basic HTML template
│   ├── home.js          # Home page module
│   ├── menu.js          # Menu page module
│   ├── contact.js       # Contact page module
│   └── styles.css       # Stylesheet
├── webpack.config.js     # Webpack configuration
├── package.json         # Project dependencies
├── .gitignore           # Git ignore file
└── README.md            # Project documentation
```

---

## 💻 Code Overview

### Main Entry Point (index.js)
```javascript
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

// Tab switching logic with event listeners
```

### Module Structure
Each page module follows this pattern:
```javascript
export default function loadPageName() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    
    // Create and append page elements
    const pageDiv = document.createElement('div');
    // Add content dynamically...
    
    content.appendChild(pageDiv);
}
```

### Key Features
- **Dynamic DOM Creation**: All content elements created via `createElement()` and `appendChild()`
- **Modular Design**: Each page is a separate module with its own function
- **Event-Driven Navigation**: Header buttons trigger content switching
- **Webpack Bundling**: Modern build process for development and production

---

## 🌐 Deployment
This project is deployed using GitHub Pages with a custom `gh-pages` branch workflow:

1. Build the project: `npx webpack`
2. Deploy to GitHub Pages using the `dist` folder contents
3. Live site: `https://abdirazakf.github.io/restaurant-page/`

### Redeployment Steps
```bash
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

---

## 📚 Learning Objectives
This project reinforces:
- DOM manipulation with vanilla JavaScript
- ES6 module system and imports/exports
- Webpack configuration and build processes
- Event handling and dynamic content switching
- Separation of concerns in web development
- Modern JavaScript development workflow

---

## Contributing
1. Fork this repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:  
   ```bash
   git commit -m "Add new restaurant feature"
   ```
4. Push to your fork and open a pull request