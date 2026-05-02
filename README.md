# Macchanu Racing Website

Official website for **Macchanu Racing**, a STEM racing team from Amnuay Silpa School.  
Built as a fast single-page React app to present the team, engineering work, and sponsorship materials.

## Tech Stack

- React 18 + Vite 5
- React Router
- Tailwind CSS
- Framer Motion

## Features

- Multi-page experience via client-side routing:
  - `/` Home
  - `/team`
  - `/engineering`
  - `/sponsorship`
  - `/sponsorship-prospectus`
- Animated UI with a custom black/gold/teal design system
- Sponsorship prospectus and presentation files served from `public/`
- Fully static frontend build, ready for deployment on any static host

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├─ public/                 # Static assets (PDFs, logos, images)
├─ src/
│  ├─ components/          # Shared UI (TopNavBar, Footer)
│  ├─ pages/               # Route pages
│  ├─ App.jsx              # Router and layout shell
│  ├─ index.css            # Tailwind layers + custom styles
│  └─ main.jsx             # App entry point
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## License

This project is licensed under the MIT License. See [LICENSE.md](./LICENSE.md).
