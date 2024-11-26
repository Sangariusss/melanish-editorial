# Melanish Editorial Landing Page

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup](#setup)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project is a landing page created using Tailwind CSS and SCSS, with modern web development practices. The project features a stylish and responsive design for an editorial portfolio or presentation. It leverages utility-first CSS from Tailwind and modular SCSS for better style organization.

## Technologies

- **HTML5**: Used to create the semantic structure of the webpage.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **SCSS**: Used for writing more maintainable and modular CSS with variables, mixins, and nesting.
- **JavaScript (ES6+)**: For interactivity and dynamic behaviors.
- **Vite**: A fast development environment for modern web projects.
- **pnpm**: A fast, disk space-efficient package manager.
- **Image Optimization**: Ensures high-quality and responsive images.

## Features

- **Responsive Design**: Fully responsive layout using Tailwind's grid and utility classes.
- **Custom Components**: Modular and reusable Tailwind-based components.
- **SCSS Modularity**: Organized SCSS files for better style management and maintainability.
- **Image Optimization**: Supports optimized images for better performance.
- **Utility-First Styling**: Leveraging Tailwind for consistent and maintainable styles.
- **Fast Development**: Set up with Vite for lightning-fast builds and live reloading.

## File Structure

```
index.html                   # Main landing page
src/                         # Source files
├── fonts/                   # Custom fonts (TTF, OTF)
├── images/                  # JPG, WebP, and SVG images
├── icons/                   # SVG icons
└── styles/                  # Tailwind CSS entry points and SCSS files
    └── main.scss            # Main SCSS entry file
public/                      # Public static files
└── favicon.ico              # Favicon
tailwind.config.js           # Tailwind CSS configuration
postcss.config.js            # PostCSS configuration
package.json                 # Project dependencies
```

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sangariusss/melanish-editorial.git
   cd melanish-editorial
   ```

2. **Install dependencies** (using pnpm):
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Build the project**:
   ```bash
   pnpm build
   ```

5. **Preview the build**:
   ```bash
   pnpm preview
   ```

6. Open `http://localhost:5173` in your browser to view the project.

## Contributions

Contributions are welcome! If you'd like to add features or fix issues, please open a pull request or file an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
