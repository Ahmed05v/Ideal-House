# Ideal House E-Commerce Website

## Project Overview
A fully functional e-commerce website for "Ideal House" - a premium furniture company. Built with Next.js 14, React, TypeScript, and Tailwind CSS. Includes complete authentication, shopping cart, checkout, and admin dashboard.

## Completed Features

### Pages and Routes
- Home page with hero section and featured products
- Products page with filtering and sorting
- Product detail pages
- Shopping cart management
- Multi-step checkout process
- User login and registration
- About page with company information
- Contact page with form
- Admin dashboard with analytics

### Core Functionality
- User authentication and authorization
- Shopping cart management with context API
- Product catalog with 6 sample furniture items
- Checkout flow (shipping, payment, review, confirmation)
- Admin panel for orders, products, and customers
- Responsive design for mobile and desktop

### Design
- Premium color scheme (brown/gold/cream)
- Beautiful typography (Playfair Display, Lato)
- Fully responsive Tailwind CSS layout
- Professional UI components

## Development Guidelines

### Working with Components
- All page components use 'use client' directive
- Context providers (Auth, Cart) wrap the entire app in layout.tsx
- Reusable components: Header, Footer, ProductCard

### State Management
- CartContext: Manages shopping cart state
- AuthContext: Manages user authentication state
- Both use React Context API

### Styling
- Tailwind CSS for all styling
- Custom CSS variables for fonts in globals.css
- Consistent spacing and colors throughout

### Adding Features
- New pages go in src/app/ directory
- New components go in src/components/
- Utility data in src/lib/
- Follow existing patterns for consistency

## Commands

```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

## Important Notes

- Admin access: Login with admin@idealhouse.com
- The app currently uses mock data and context for state
- For production, integrate with backend API and database
- Payment processing needs to be implemented with actual payment gateway

## Next Steps for Production

1. Set up backend API (Node.js/Express or Next.js API routes)
2. Connect database (MongoDB/PostgreSQL)
3. Implement real payment processing
4. Add email notifications
5. Set up proper authentication with JWT
6. Add user profiles and order history
7. Implement search and advanced filtering
8. Add product reviews and ratings
