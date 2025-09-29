# Amos Mwongela Portfolio

A modern, responsive portfolio website built with Next.js, featuring smooth animations and a clean design inspired by contemporary web design trends.

## Features

- **Modern Design**: Clean, professional layout with bold typography and striking visual elements
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: Expandable service sections, portfolio filters, and contact forms
- **Performance Optimized**: Built with Next.js for fast loading and SEO optimization
- **TypeScript**: Fully typed codebase for better development experience
- **Aliased Imports**: Clean import paths using `@/` aliases

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Services.tsx   # Services section
│   │   ├── Portfolio.tsx  # Portfolio showcase
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx    # Contact form and info
│   │   └── Footer.tsx     # Site footer
│   └── ui/                # Reusable UI components
│       └── Button.tsx     # Custom button component
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
    └── cn.ts             # Class name utility
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amos-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check

## Customization

### Personal Information
Update the following files with your personal information:

- `src/components/sections/Hero.tsx` - Name, title, and social links
- `src/components/sections/Services.tsx` - Skills and expertise
- `src/components/sections/Portfolio.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Site metadata

### Styling
- Colors and design tokens are defined in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.js`
- Custom animations and utilities are in the global CSS file

### Content
- Portfolio items in `src/components/sections/Portfolio.tsx`
- Services and skills in `src/components/sections/Services.tsx`
- Testimonials in `src/components/sections/Testimonials.tsx`

## Deployment

The project is ready to deploy to platforms like:

- **Vercel** (recommended for Next.js projects)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

For Vercel deployment:
1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **SEO Ready**: Meta tags and structured data included

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Amos Mwongela - [amosmwongelah@gmail.com](mailto:amosmwongelah@gmail.com)

Project Link: [https://github.com/amosmwongela/portfolio](https://github.com/amosmwongela/portfolio)