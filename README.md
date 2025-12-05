# Docusaurus Blog Application

A modern blogging service built with Docusaurus v3, featuring a clean documentation interface combined with powerful blogging capabilities.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## 📁 Project Structure

```
blog-app/
├── blog/                      # Blog posts directory
├── docs/                      # Documentation pages
├── src/
│   ├── components/           # Custom React components
│   ├── css/                  # Global styles
│   └── pages/               # Custom pages
├── static/                   # Static assets
├── docusaurus.config.ts      # Main configuration
├── sidebars.ts               # Documentation sidebar
└── package.json              # Dependencies
```

## 📝 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the website for production
- `npm run serve` - Serves the built website locally
- `npm run deploy` - Deploys to GitHub Pages
- `npm run clear` - Clears the build cache
- `npm run swizzle` - Customizes Docusaurus components

## 🖊️ Creating Content

### Adding Blog Posts

Create a new markdown file in `blog/`:

```markdown
---
slug: my-first-post
title: My First Blog Post
authors: [author-name]
tags: [hello, blog]
date: 2024-12-05
---

Your blog content here...
```

### Adding Documentation

Create markdown files in `docs/` and update `sidebars.ts`.

## ⚙️ Build & Deploy

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploy

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If using GitHub Pages for hosting, this command builds the website and pushes to the `gh-pages` branch.

## 🎨 Features

- Full-featured blog system with author support and tags
- Documentation with sidebar navigation
- Full-text search capability
- Dark/Light mode support
- Mobile responsive design
- SEO optimized
- Static site generation for fast performance

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io)
- [Blog Plugin Guide](https://docusaurus.io/docs/blog)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Deployment Guide](https://docusaurus.io/docs/deployment)

## 📄 License

MIT License - Built with Docusaurus
