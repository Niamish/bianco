# Bianco

React landing page prepared for GitHub Pages hosting.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is written to `dist/`.

## GitHub Pages setup

1. Push this repository to GitHub as `bianco`.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to the `main` branch. The included workflow builds the app and deploys `dist/`.

The Vite base path is configured as `/bianco/` in `vite.config.js`, which matches the normal GitHub Project Pages URL:

```text
https://Niamish.github.io/bianco/
```
