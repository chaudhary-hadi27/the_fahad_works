# the\_fahad\_works /Next.js Website

Welcome to **the\_fahad\_works**, a modern, responsive, and animated website built on an accelerated timeline (completed in just 45–60 minutes) for my friend’s agency, showcasing various sections including navigation, discovery, services, experience, testimonials, contact, WhatsApp integration, and a footer. This project showcases various sections including navigation, discovery, services, experience, testimonials, contact, WhatsApp integration, and a footer.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
* [Component Overview](#component-overview)
* [Customization](#customization)
* [Accessibility & Performance](#accessibility--performance)
* [Contributing](#contributing)
* [License](#license)

---

## Demo

A live demo can be accessed at: [the-fahad-works.vercel.app](https://the-fahad-works.vercel.app/)  
_Tip: Ctrl/Cmd‑click or right‑click the link and choose “Open link in new tab” to keep this page open._


---

## Features

* Responsive, mobile-first design with Tailwind CSS
* Smooth scroll animations with Framer Motion
* Accessible navigation with keyboard focus management
* Data-driven components for Services and Experience sections
* Testimonials carousel with auto-advance and manual controls
* Contact section with mailto links
* Floating WhatsApp chat button for quick inquiries
* Dynamic `footer` displaying current year

---

## Tech Stack

* **Framework:** Next.js 13+ (App Router)
* **Language:** TypeScript & React
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons (WhatsApp)
* **Image Optimization:** Next.js `<Image>` component

---

## Prerequisites

* [Node.js](https://nodejs.org/) v14.x or higher
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/the_fahad_works.git
   cd the_fahad_works
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

```plaintext
/pages or /app
├── components
│   ├── Nav.tsx
│   ├── DiscoverUs.tsx
│   ├── Services.tsx
│   ├── Experience.tsx
│   ├── Testimonials.tsx
│   ├── ContactUs.tsx
│   ├── WhatsAppButton.tsx
│   └── Footer.tsx
├── public
│   ├── logo.png
│   └── images/...
├── styles
│   └── globals.css
└── README.md
```


---

## Available Scripts

In the project directory, you can run:

| Script   | Description                       |
| -------- | --------------------------------- |
| `dev`    | Runs the app in development mode. |
| `build`  | Builds the app for production.    |
| `start`  | Starts the production server.     |
| `lint`   | Runs ESLint checks.               |
| `format` | Formats code with Prettier.       |

---

## Component Overview

### 1. `Nav.tsx`

* Sticky, scroll-responsive navigation bar
* Mobile menu overlay with focus management
* Accessible with `aria-label` and keyboard support

### 2. `DiscoverUs.tsx`

* Introductory section with fade-in animation
* Responsive typography using `clamp()`

### 3. `Services.tsx`

* Data-driven service cards
* Staggered entrance animations via Framer Motion variants
* Next.js optimized images per card

### 4. `Experience.tsx`

* Timeline layout alternating left/right on desktop
* Responsive fallback for mobile screens
* Utilize ARIA roles for enhanced accessibility

### 5. `Testimonials.tsx`

* Carousel of client testimonials
* Auto-rotate and manual dot navigation
* AnimatePresence for enter/exit transitions

### 6. `ContactUs.tsx`

* Contact section with mailto buttons
* Styled with backdrop blur and gradient buttons

### 7. `WhatsAppButton.tsx`

* Floating WhatsApp chat button
* Opens chat link in a new tab securely

### 8. `Footer.tsx`

* Simple footer with dynamic current year
* Responsive text sizing

---

## Customization

* **Brands & Colors:** Modify Tailwind theme in `tailwind.config.js`.
* **Menu Items & Links:** Update `NAV_ITEMS` in `Nav.tsx`.
* **Testimonials Data:** Edit the `testimonials` array in `Testimonials.tsx`.
* **Services & Experience:** Adjust data arrays in their respective components.

---

## Accessibility & Performance

* All interactive elements include accessible roles, labels, and focus states.
* Images served via Next.js `<Image>` ensure lazy loading and optimized sizes.
* Consider code-splitting large sections using dynamic imports.
* Audit Lighthouse scores and tune animations for reduced motion preference.

---

## Project Background

This site was rapidly developed in under an hour as a high-fidelity prototype for a friend’s agency, demonstrating what can be achieved with efficient design and modern tooling.

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is licensed under the [MIT License](LICENSE).  
© 2025 the_fahad_works.
