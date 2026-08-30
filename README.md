# Bag Tag

Mobile-first PWA for luggage control. Track bags and boxes by tag number, weight, owner, and contents. Installable on Android and iOS home screens.

## Features

- Add, edit, and remove luggage items
- Fields: Tipo (Mala / Caixa), Numeração, Peso (kg), Responsável, Conteúdo
- Data persisted locally via `localStorage`
- Share the full list as formatted text (copy to clipboard for WhatsApp / email)
- Installable as a PWA — works offline after first load

## Tech stack

- React 19 + TypeScript
- Vite + `vite-plugin-pwa` (Workbox service worker)
- CSS Modules (no UI library)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the linter (oxlint) |

## Project structure

```
src/
  types/            # Shared TypeScript types (by category)
  constants/        # Shared constants (by category)
  hooks/            # Custom React hooks
  utils/            # Pure utility functions
  components/
    luggage-card/   # Card component + styles
    luggage-form/   # Add/edit form + styles
    luggage-list/   # List component + styles
    shared/         # Reusable form primitives (TextInput, NumberInput, TextArea, Dropdown)
  App.tsx
  main.tsx
  index.css         # Global reset + CSS variables only
```

## Deploying to Vercel

Push to GitHub and import the repository on [vercel.com](https://vercel.com). Vercel auto-detects Vite — no configuration needed.

```bash
# Or deploy via CLI
npx vercel
```

## PWA installation

- **Android (Chrome):** tap the "Add to Home Screen" banner or use the browser menu
- **iOS (Safari):** tap Share → Add to Home Screen
