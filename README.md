# LUMIERE - Fashion E-Commerce UI

A fully responsive fashion e-commerce web application built with React and Vite, inspired by the clean and minimal design aesthetic of high-end fashion retailers. This project was built as a personal portfolio project to demonstrate proficiency in modern front-end development, component-based architecture, state management, and Firebase integration.

---

## Live Demo

[https://lumiere-store.web.app](https://lumiere-store.web.app)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Pages](#pages)
- [State Management](#state-management)
- [Authentication](#authentication)
- [Styling Architecture](#styling-architecture)
- [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Resume Context](#resume-context)

---

## Overview

LUMIERE is a front-end e-commerce application that replicates the core shopping experience of a modern fashion retail website. The application includes a full product catalog with 54 items across multiple categories, a functional shopping cart, user authentication with Firebase, a live search system, a filter and sort sidebar, and a multi-level dropdown navigation menu. The project does not use a paid backend or image hosting service — all product data is served from a local JavaScript data file using Unsplash URLs for images.

---

## Tech Stack

- React 18 with Vite as the build tool
- React Router DOM v6 for client-side routing
- Context API for global cart and authentication state
- Firebase Authentication for email/password and Google login
- CSS3 with custom properties for theming
- Firebase Hosting for deployment

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductGrid.jsx
│   ├── CategoryBanner.jsx
│   ├── Footer.jsx
│   └── Toast.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Auth.jsx
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── data/
│   └── products.js
├── hooks/
│   └── useImageLoad.js
├── styles/
│   ├── index.css
│   ├── theme.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── ProductGrid.css
│   ├── CategoryBanner.css
│   ├── Footer.css
│   ├── Products.css
│   ├── ProductDetail.css
│   ├── Cart.css
│   └── Auth.css
├── firebase.js
└── main.jsx
```

---

## Features

**Navigation**
- Sticky navbar with desktop dropdown menus that reveal category columns on hover
- Mobile hamburger menu with expandable accordion sections for each category
- Live search that filters products by name, category, and type as the user types
- Search results appear as a dropdown with product image, name, category, and price
- Cart icon with a live item count badge

**Product Catalog**
- 54 products across Women, Men, and Sale categories
- Each product has a name, price, category, product type, collection, cut, description, available sizes, and image
- Product cards with hover zoom effect and a wishlist button that fades in on hover

**Filter and Sort Sidebar**
- Slides in from the right side of the screen
- Filter by Order By, Category, Product Type, Collection, Cut, and Price range
- Accordion sections that expand and collapse independently
- Active filter count displayed on the filter button
- Clear all filters with a single button
- Product count updates in real time as filters are applied

**Product Detail Page**
- Full-height sticky image on the left with product information on the right
- Size selector with active state highlighting
- Add to Cart button that validates size selection before adding
- Toast notification instead of browser alert when a product is added to cart
- Back to Products link

**Shopping Cart**
- Add, remove, and update quantity of items
- Cart persists across page navigation within the session
- Order summary with subtotal and total calculation
- Empty cart state with a link back to products

**Authentication**
- Single page with toggle between Sign In and Create Account
- Email and password login and signup
- Google sign in via Firebase popup
- Continue as Guest option
- Friendly error messages for common Firebase auth errors
- Navbar updates to show Sign Out when a user is logged in

**Performance and Polish**
- Page fade transition on route change
- Image fade-in on load using a custom React hook
- Toast notifications with slide-in animation and auto-dismiss after 3 seconds

---

## Pages

**Home (`/`)**
Full-page hero section with a call to action, a new arrivals product grid showing 6 products, a two-column editorial category banner for Women and Men, and a footer with navigation links, company information, and a newsletter signup field.

**Products (`/products`)**
Full product catalog in a four-column grid on desktop and two-column on mobile. Supports URL query parameters for category, type, and collection so that navbar dropdown links filter products directly. Filter and sort sidebar accessible via a button in the page header.

**Product Detail (`/product/:id`)**
Two-column layout with a sticky product image on the left and product details on the right. Includes size selection, add to cart functionality, and a toast notification on successful add.

**Cart (`/cart`)**
List of cart items with product image, name, size, price, and quantity controls. Sticky order summary panel on the right with subtotal, shipping, and total. Handles empty cart state.

**Auth (`/auth`)**
Split layout with a full-height editorial image on the left and a form on the right. Toggles between sign in and create account. Supports email/password and Google authentication.

---

## State Management

The project uses React Context API for two global state concerns.

**CartContext** manages the shopping cart state including the list of cart items, a function to add items with a product and selected size, a function to remove items by product ID and size, a function to update item quantity, and derived values for total item count and total price.

**AuthContext** wraps Firebase Authentication and exposes the current user object, a loading state that prevents the app from rendering before Firebase resolves the auth state, and functions for login, signup, Google login, and logout.

Both contexts are provided at the root level in `main.jsx` so they are accessible throughout the entire component tree.

---

## Authentication

Firebase Authentication is used with two providers enabled: Email/Password and Google. Environment variables are used to store all Firebase configuration values so that API keys are never committed to the repository. The `.env` file is listed in `.gitignore`.

The admin email is hardcoded in the application. Any user signing in with that email address is treated as an admin. This approach was chosen intentionally for a portfolio project to keep the implementation simple while still demonstrating awareness of role-based access patterns.

---

## Styling Architecture

All styles are written in plain CSS3 without any utility framework. The styling system is built around a central `theme.css` file that defines CSS custom properties for the entire application.

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #000000;
  --text-secondary: #555555;
  --text-muted: #999999;
  --accent-warm: #c8a882;
  --accent-nude: #e8e0d5;
  --border-color: #e0e0e0;
  --font-main: 'Inter', sans-serif;
}
```

Each component and page has its own dedicated CSS file. Global resets and the theme import are handled in `index.css`. This architecture makes it straightforward to update the color palette globally from a single file and keeps component styles scoped and easy to locate.

---

## Responsive Design

The application is designed mobile-first with breakpoints at 768px. Key responsive behaviors include:

- Desktop navbar links are hidden on mobile and replaced with a hamburger menu
- Product grids shift from four columns on desktop to two columns on mobile
- The Product Detail page stacks vertically on mobile instead of the two-column layout
- The Cart summary moves below the cart items on mobile
- The Auth page hides the left image panel on mobile and shows only the form
- The Category Banner shifts from two columns to a single column on mobile
- The Footer stacks its three-column layout vertically on mobile

---

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/lumiere-store.git
cd lumiere-store
npm install
```

Create a `.env` file in the root directory with your Firebase configuration:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Deployment

The application is deployed to Firebase Hosting. To deploy updates:

```bash
npm run build
firebase deploy
```

The `firebase.json` configuration includes a rewrite rule that directs all requests to `index.html`, which is required for React Router to handle client-side routing correctly on a static hosting provider.

---

## Resume Context

This project was built to demonstrate the following skills listed on my resume:

- Designed and deployed responsive website layouts using HTML5, CSS3, and JavaScript
- Created interactive UI components including dropdowns, sidebars, modals, and toast notifications
- Implemented client-facing product catalog with filtering, sorting, and search functionality
- Integrated third-party authentication service using Firebase
- Applied component-based architecture with React and managed application state using Context API
- Demonstrated real-time state management through cart quantity updates and live search results
- Built responsive layouts using CSS Grid, Flexbox, and media queries across all pages
