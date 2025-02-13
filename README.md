# Portfolio Website

This is a **personal portfolio website** showcasing my skills, projects, and experience as a **Frontend Developer** specializing in **React.js, JavaScript, and Tailwind CSS**. The website includes sections like an **introduction, skills, projects, and contact information** with a **fully responsive design**.

## 🚀 Features

- **Hero Section**: Introduction with an animated text effect.
- **About Me**: A brief overview of my skills and experience.
- **Projects**: Displaying major projects with descriptions and live links.
- **Technologies**: List of technologies I work with.
- **Contact Section**: Social media links (LinkedIn, GitHub, Instagram, Indeed).
- **Dark Mode Support**: Styled for dark mode using Tailwind CSS.
- **Fully Responsive**: Optimized for **small, medium, and large devices**.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Development Tooling**: Vite.js for fast builds
- **Icons**: React Icons

## 🎨 Installation & Setup

Follow these steps to install and run the project locally:

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/Kunal182001/Portfolio.git
 cd Portfolio
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Install Tailwind CSS 4.0
```sh
 npm install tailwindcss @tailwindcss/vite
```

### 4️⃣ Configure Tailwind CSS in Vite
Edit **vite.config.js** and add the Tailwind plugin:
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

### 5️⃣ Import Tailwind CSS
In **index.css** or your main CSS file, add:
```css
@import "tailwindcss";
```

### 6️⃣ Run the Project
```sh
 npm run dev
```

## 📁 Folder Structure

```
Portfolio/
├── public/            # Static files
├── src/
│   ├── assets/        # Images and icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.js         # Main application entry
│   └── index.js       # Root file
└── README.md          # Documentation
```

## 📌 Live Preview

You can check out the live site **[here](https://portfolio-kunals-projects-f02b0111.vercel.app/)**.

## 📝 License

This project is **open-source**. Feel free to use it, but please give proper credit by linking back to this repository.
