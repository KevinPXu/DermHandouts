# DermHandouts

A React-based GitHub Pages site for dermatology patient handouts, hosted at [dermresources.com](https://dermresources.com).

## Project Structure

```
DermHandouts/
├── index.html                  # Vite entry point
├── package.json
├── vite.config.js
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions build & deploy
├── public/
│   ├── CNAME                   # Custom domain (dermresources.com)
│   ├── 404.html                # SPA redirect for GitHub Pages
│   └── images/                 # Handout card images
│       ├── acne.avif
│       └── accutane.webp
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Route definitions
    ├── components/
    │   ├── Layout.jsx          # Navbar + shared layout
    │   ├── Landing.jsx         # Home page with animated cards
    │   └── HandoutPage.jsx     # Renders a single handout
    ├── styles/
    │   ├── App.css             # Global styles & navbar
    │   ├── Landing.css         # Card animations & landing page
    │   └── HandoutPage.css     # Handout body, tables, callouts
    └── data/
        └── handouts.json       # All handout content
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

## Adding or Updating a Handout

1. **Edit handout content** — open `src/data/handouts.json` and add or modify an entry:

   ```json
   {
     "id": "your-handout-id",
     "title": "Handout Title",
     "description": "Short description for the landing card.",
     "content": "<h2>Section</h2><p>HTML content here...</p>"
   }
   ```

2. **Add a card image** — drop an image into `public/images/` and map it in `src/components/Landing.jsx`:

   ```js
   const imageMap = {
     acne: "/images/acne.avif",
     accutane: "/images/accutane.webp",
     "your-handout-id": "/images/your-image.jpg",
   };
   ```

3. The handout page is automatically available at `dermresources.com/your-handout-id` — no new route needed.

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

### First-time setup

1. Go to **GitHub repo → Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds with Vite and deploys to Pages

### Manual deploy

```bash
npm run build    # outputs to dist/
```

## Tech Stack

- **React 19** + **React Router 7** — SPA with clean URLs (`/acne`, `/accutane`)
- **React Bootstrap 2** — responsive layout and components
- **Vite 6** — fast builds and HMR
- **GitHub Actions** — CI/CD to GitHub Pages
