# Nextor - Multi-Vertical Powerhouse Website

A modern, responsive website for Nextor showcasing their multi-vertical business including esports, cybersecurity, travel, marketing, and digital-first ecosystems.

## Project Structure

```
src/
├── assets/              # Static assets
│   └── images/         # Image files (logos, hero image, etc.)
├── components/          # React components
│   ├── About.tsx       # About section component
│   ├── Contact.tsx     # Contact form and information
│   ├── Footer.tsx      # Footer with links and newsletter
│   ├── Hero.tsx        # Hero section with main CTA
│   ├── Navigation.tsx   # Top navigation bar
│   ├── OurIPs.tsx      # Our IPs section (HackonX, Cafe Clutch)
│   ├── PartneredWith.tsx # Partner logos section
│   ├── Verticals.tsx   # Core verticals showcase
│   ├── figma/          # Figma-related components
│   └── ui/             # Reusable UI components (shadcn/ui)
├── styles/             # Global styles
│   └── globals.css
├── guidelines/         # Project guidelines
│   └── Guidelines.md
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Tailwind CSS generated styles
```

## Key Features

- **Multi-section Layout**: Home, About, Verticals, Our IPs, Contact
- **Smooth Scrolling Navigation**: Fixed navigation with active section highlighting
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Using shadcn/ui component library
- **Brand Colors**: Yellow (#ffff00) accent color on dark background

## Sections

1. **Hero**: Main landing section with hero image and CTAs
2. **Partnered With**: Partner logos (Hinterland Voyages, Cafe Clutch, Cyber Origins, Strike 1 Esports)
3. **About**: Company overview and statistics
4. **Verticals**: Core business verticals (7 verticals displayed)
5. **Our IPs**: Flagship brands (HackonX, Cafe Clutch)
6. **Contact**: Contact form and information

## Technology Stack

- React + TypeScript
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

## Color Scheme

- Background: `#0a0a0a` (very dark gray/black)
- Accent: `#ffff00` (yellow)
- Text: White with gray variations
- Borders: Gray-800 with opacity

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

