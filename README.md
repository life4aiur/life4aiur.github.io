# life4aiur.github.io

Personal portfolio website built with React, TypeScript, and Vite. Deployed to GitHub Pages at [https://life4aiur.github.io/](https://life4aiur.github.io/).

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **PrimeReact** - UI component library
- **Sass** - CSS preprocessing
- **GitHub Pages** - Hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

This project uses a two-branch deployment strategy:

- **`source` branch** - Contains the source code and development files
- **`main` branch** - Contains the built site served by GitHub Pages

### Automatic Deployment

A GitHub Actions workflow automatically builds and deploys the site when you push to the `source` branch.

### Manual Deployment

You can also deploy manually:

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to the `main` branch.

## Project Structure

- `src/components/` - React components (Hero, About, Skills, Experience, Education, Projects, Footer)
- `src/styles/` - Global styles and variables
- `public/themes/` - PrimeReact theme files
- `.github/workflows/` - GitHub Actions deployment workflow
