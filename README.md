# Elderly Memory Guardian

A high-fidelity MVP showcase website for an AI emotional companion and family memory platform targeting Chinese-speaking elderly users.

## Features

- 🗣️ **AI Voice Companion** - Interactive chat interface with preset dialogues
- 🌳 **Family Memory Map** - Timeline visualization of recorded memories
- 💊 **Health Care** - Medicine reminders and emotion tracking
- 👨‍👩‍👧 **Family Dashboard** - View elderly status and emotion trends
- 🏢 **Institution Management** - Multi-user management for care centers
- 💰 **Pricing Plans** - Three-tier pricing model
- 🌐 **Bilingual Support** - Chinese/English language switching

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── ChatPage.tsx
│   ├── MemoryMapPage.tsx
│   ├── DashboardPage.tsx
│   └── PricingPage.tsx
├── context/
│   └── LanguageContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Design Principles

- **Elderly-Friendly**: Large fonts (18px+), high contrast, simple navigation
- **Warm & Emotional**: Soft colors, rounded corners, compassionate tone
- **Accessible**: WCAG AA compliant, keyboard navigation support
- **Responsive**: Desktop-first, mobile-friendly

## Color Scheme

- Primary: #FF8C42 (Warm Orange)
- Secondary: #4ECDC4 (Soft Teal)
- Background: #FFF8F0 (Cream)
- Text: #2D3436 (Dark Gray)

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

© 2025 Elderly Memory Guardian | Group 16
