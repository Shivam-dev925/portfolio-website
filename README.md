# Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and exceptional UX.

## Features

- **Responsive Design**: Looks great on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Built with Tailwind CSS
- **Interactive Elements**: Hover effects, scroll animations, and more
- **Contact Form**: Functional contact section
- **Project Showcase**: Beautiful project cards with filtering
- **Skills Display**: Animated skills section
- **Loading Animation**: Custom loading screen

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS 3
- Framer Motion
- React Icons
- React Intersection Observer

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username and repository name:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will build the project and push it to the `gh-pages` branch of your repository.

## Customization

- Update personal information in each component
- Replace placeholder images in `Projects.tsx`
- Update social media links in `Navigation.tsx` and `Contact.tsx`
- Modify color scheme in `tailwind.config.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Builds and deploys the app to GitHub Pages.

## License

MIT