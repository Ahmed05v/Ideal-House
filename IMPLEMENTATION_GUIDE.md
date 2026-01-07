# 🛠️ Implementation Details & Code Snippets

## Overview

This document contains specific code examples and implementation patterns used in the redesign.

---

## 1. Gradient Effects

### Logo with Gradient Text

```tsx
<div className="text-4xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  Ideal House
</div>
```

### Gradient Button

```tsx
<button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
  Shop Now
</button>
```

### Gradient Price Display

```tsx
<span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  ${price}
</span>
```

### Gradient Background (Hero)

```tsx
<section className="bg-gradient-to-br from-dark via-gray-900 to-primary">
  {/* content */}
</section>
```

---

## 2. Shadow Effects

### Card Shadow Progression

```tsx
// Default state
<div className="bg-white rounded-xl shadow-lg">

// Hover state
<div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">

// Heavy emphasis
<div className="shadow-2xl">
```

### Multi-level Shadow System

```
shadow-md    - Light (subtle)
shadow-lg    - Medium (default)
shadow-xl    - Heavy (hover states)
shadow-2xl   - Maximum (special emphasis)
```

---

## 3. Group Hover Effects

### Product Card with Coordinated Hover

```tsx
<div className="group">
  <div className="relative h-72 overflow-hidden">
    <img className="group-hover:scale-110 transition duration-500" />
  </div>
  <div className="p-6">
    <h3 className="group-hover:text-primary transition duration-300">{name}</h3>
  </div>
</div>
```

How it works:

1. Parent div gets `group` class
2. Child elements use `group-hover:` prefix
3. All children respond to parent hover
4. Creates coordinated effects

---

## 4. Sticky Elements

### Sticky Filter Sidebar

```tsx
<div className="sticky top-24">{/* Filter content */}</div>
```

Key points:

- `sticky` - Sticks to viewport while scrolling
- `top-24` - 24px from top (account for header height)
- Parent must have `overflow: visible`

### Sticky Order Summary

```tsx
<div className="lg:col-span-1">
  <div className="sticky top-24">
    <h2>Order Summary</h2>
    {/* Summary content */}
  </div>
</div>
```

---

## 5. Responsive Grid Layouts

### Product Grid Progression

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

Breakpoints:

- `grid-cols-1` - Mobile (1 column)
- `md:grid-cols-2` - Tablet (2 columns, 768px+)
- `lg:grid-cols-3` - Desktop (3 columns, 1024px+)

### Feature Grid (Variable Columns)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((feature) => (
    <div key={feature}>{feature}</div>
  ))}
</div>
```

---

## 6. Form Input Styling

### Enhanced Form Input

```tsx
<input
  type="email"
  name="email"
  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 
             focus:outline-none focus:border-primary 
             transition duration-300 
             bg-gray-50 hover:bg-white"
  placeholder="you@example.com"
/>
```

Key features:

- `border-2` - Thicker border for emphasis
- `border-gray-200` - Subtle gray
- `focus:border-primary` - Color on focus
- `bg-gray-50 hover:bg-white` - Subtle hover effect
- `rounded-lg` - Modern appearance

---

## 7. Button Variations

### Primary Button

```tsx
<button
  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary 
                   text-white font-bold rounded-lg 
                   hover:shadow-2xl transition-all duration-300 
                   hover:scale-105"
>
  Action
</button>
```

### Secondary Button

```tsx
<button
  className="px-8 py-4 border-2 border-white text-white 
                   font-bold rounded-lg 
                   hover:bg-white hover:text-dark 
                   transition-all duration-300"
>
  Learn More
</button>
```

### Subtle Button

```tsx
<button
  className="px-4 py-2 text-gray-600 hover:text-gray-800 
                   hover:bg-gray-100 rounded-lg 
                   transition duration-300 font-medium"
>
  Link Button
</button>
```

---

## 8. Mobile Navigation

### Hamburger Menu Implementation

```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return (
  <div>
    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-12">{/* Links */}</nav>

    {/* Mobile Button */}
    <button
      className="md:hidden"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      ☰
    </button>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <nav className="md:hidden pb-4 space-y-2">{/* Mobile Links */}</nav>
    )}
  </div>
);
```

---

## 9. Error Message Styling

### Enhanced Error Display

```tsx
{
  error && (
    <div
      className="bg-red-50 border-l-4 border-red-500 
                  text-red-700 px-4 py-4 rounded-lg 
                  mb-6 flex gap-3"
    >
      <span className="text-red-500 text-xl">⚠️</span>
      <div>
        <p className="font-bold text-sm">Error Title</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    </div>
  );
}
```

Features:

- Left border accent
- Icon indicator
- Title and description
- Better contrast
- Rounded corners

---

## 10. Trust Badge Patterns

### 3-Column Trust Badges

```tsx
<div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl">
  <div className="text-center">
    <div className="text-2xl mb-2">🚚</div>
    <p className="text-xs font-semibold text-gray-700">Free Shipping</p>
  </div>
  <div className="text-center">
    <div className="text-2xl mb-2">🛡️</div>
    <p className="text-xs font-semibold text-gray-700">5-Year Warranty</p>
  </div>
  <div className="text-center">
    <div className="text-2xl mb-2">↩️</div>
    <p className="text-xs font-semibold text-gray-700">30-Day Returns</p>
  </div>
</div>
```

### Trust Badges in List

```tsx
<ul className="space-y-3">
  <li className="flex items-center gap-3">
    <span className="text-secondary text-lg">✓</span>
    <span>Premium quality materials</span>
  </li>
  <li className="flex items-center gap-3">
    <span className="text-secondary text-lg">✓</span>
    <span>Handcrafted by skilled artisans</span>
  </li>
</ul>
```

---

## 11. Newsletter Section

### Newsletter Signup Form

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div>
    <h3 className="text-2xl font-serif font-bold mb-2">
      Subscribe to Our Newsletter
    </h3>
    <p className="text-gray-300">Get exclusive updates on new collections</p>
  </div>
  <form className="flex gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-3 rounded-lg bg-gray-700 
                 text-white placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
    <button
      type="submit"
      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary 
                 text-white font-bold rounded-lg 
                 hover:shadow-lg transition duration-300"
    >
      Subscribe
    </button>
  </form>
</div>
```

---

## 12. Testimonial Card

### Customer Testimonial

```tsx
<div
  className="bg-gray-800 p-8 rounded-xl border border-gray-700 
                hover:border-primary transition duration-300"
>
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-secondary text-xl">
        ★
      </span>
    ))}
  </div>
  <p className="text-gray-300 mb-6 leading-relaxed italic">
    "{testimonial.text}"
  </p>
  <div>
    <p className="font-bold text-white">{testimonial.name}</p>
    <p className="text-gray-400 text-sm">{testimonial.role}</p>
  </div>
</div>
```

---

## 13. Price Display Patterns

### Price with Label

```tsx
<div>
  <p className="text-sm text-gray-600 mb-1">Price</p>
  <span
    className="text-3xl font-bold bg-gradient-to-r 
                   from-primary to-secondary bg-clip-text 
                   text-transparent"
  >
    ${product.price}
  </span>
</div>
```

### Subtotal Calculation

```tsx
<div className="flex justify-between items-center">
  <span className="text-gray-700">Subtotal</span>
  <span className="font-bold text-dark">${total.toFixed(2)}</span>
</div>
```

---

## 14. Stock Status Display

### Color-Coded Stock Badge

```tsx
<div
  className={`px-4 py-2 rounded-full font-semibold text-sm ${
    product.stock > 0
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {product.stock > 0 ? `✓ ${product.stock} in stock` : "✗ Out of stock"}
</div>
```

### Low Stock Warning

```tsx
{
  product.stock <= 5 && product.stock > 0 && (
    <div
      className="absolute top-4 right-4 bg-secondary text-white 
                  px-3 py-1 rounded-full text-sm font-semibold"
    >
      Only {product.stock} left
    </div>
  );
}
```

---

## 15. Quantity Control

### Enhanced Quantity Selector

```tsx
<div
  className="flex items-center border-2 border-gray-200 
                rounded-lg bg-gray-50 overflow-hidden"
>
  <button
    onClick={() => setQuantity(Math.max(1, quantity - 1))}
    className="px-6 py-4 text-gray-600 hover:bg-gray-100 
               font-bold text-lg transition duration-200"
  >
    −
  </button>
  <span
    className="px-6 py-4 font-bold text-lg 
                   border-r-2 border-l-2 border-gray-200"
  >
    {quantity}
  </span>
  <button
    onClick={() => setQuantity(quantity + 1)}
    className="px-6 py-4 text-gray-600 hover:bg-gray-100 
               font-bold text-lg transition duration-200"
  >
    +
  </button>
</div>
```

---

## 16. Breadcrumb Navigation

### Breadcrumb Path

```tsx
<div className="bg-gray-50 border-b">
  <div className="max-w-7xl mx-auto px-4 py-4">
    <a href="/products" className="text-primary hover:underline">
      Products
    </a>
    {" / "}
    <span className="text-gray-600">{product.name}</span>
  </div>
</div>
```

---

## 17. Empty State Pattern

### Empty Cart State

```tsx
<div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center py-16 px-4">
    <div className="text-7xl mb-6">🛒</div>
    <h1 className="text-4xl font-serif font-bold text-dark mb-4">
      Your cart is empty
    </h1>
    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
      Explore our premium furniture collection
    </p>
    <Link
      href="/products"
      className="inline-block px-8 py-4 
                     bg-gradient-to-r from-primary to-secondary 
                     text-white font-bold rounded-lg 
                     hover:shadow-xl transition-all duration-300 
                     hover:scale-105"
    >
      Start Shopping
    </Link>
  </div>
</div>
```

---

## 18. Color Transitions

### Link Hover Transition

```tsx
<a
  href="#"
  className="text-gray-700 font-medium 
                       hover:text-primary transition duration-300"
>
  Link
</a>
```

### Multiple Property Transition

```tsx
<button
  className="bg-gray-200 text-dark 
                   hover:bg-gray-300 hover:text-gray-900 
                   transition-all duration-300"
>
  Button
</button>
```

---

## 19. Animation Patterns

### Image Zoom Animation

```tsx
<img src={url} className="group-hover:scale-110 transition duration-500" />
```

### Button Bounce Effect

```tsx
<button className="hover:scale-105 transition-all duration-300">
  Click Me
</button>
```

### Icon Scale on Hover

```tsx
<div className="text-6xl transform group-hover:scale-125 transition duration-300">
  🎯
</div>
```

---

## 20. Layout Patterns

### Max Width Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Content */}</div>
```

### Centered Section

```tsx
<section className="text-center mb-16">
  <h2 className="text-5xl font-serif font-bold mb-4">Section Title</h2>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto">Description text</p>
</section>
```

### Two Column Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  <div>Left Column</div>
  <div>Right Column</div>
</div>
```

---

## 21. Performance Tips

### Efficient Transitions

```tsx
// ✅ Good - uses transform (GPU accelerated)
className = "hover:scale-105 transition duration-300";

// ❌ Avoid - repositioning (CPU intensive)
className = "hover:translate-x-2";
```

### Smooth Animations

```tsx
// ✅ Good - consistent 300ms
transition duration-300

// ✅ Also good - slower zoom
transition duration-500 (for images)
```

---

## 22. Accessibility Considerations

### Sufficient Color Contrast

```tsx
// ✅ Good - Dark text on light background
<div className="text-dark bg-white">

// ✅ Good - Light text on dark background
<div className="text-white bg-dark">
```

### Readable Font Sizes

```tsx
// ✅ Good - Larger body text
<p className="text-lg">

// ❌ Avoid - Too small
<p className="text-xs">
```

### Interactive Element Sizing

```tsx
// ✅ Good - Larger touch target
<button className="px-8 py-4">

// ✅ Also good - Adequate spacing
<button className="px-4 py-3">
```

---

## 23. Responsive Image Pattern

### Image with Aspect Ratio

```tsx
<div className="relative h-72 bg-gray-100 overflow-hidden">
  <img src={url} alt={alt} className="w-full h-full object-cover" />
</div>
```

---

## 24. Dark Mode Sections

### Dark Section

```tsx
<section className="bg-gradient-to-b from-dark to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-5xl font-serif font-bold mb-4">Section Title</h2>
    {/* Light text content */}
  </div>
</section>
```

---

## Summary

These code patterns are used consistently throughout the redesigned website to create:

- ✅ **Consistent styling** across all pages
- ✅ **Professional appearance** with gradients and shadows
- ✅ **Smooth interactions** with coordinated hover effects
- ✅ **Responsive design** that works on all devices
- ✅ **Better UX** with clear visual hierarchy
- ✅ **Performance** through efficient CSS
- ✅ **Accessibility** with proper contrast and sizing

All patterns use Tailwind CSS utilities for maximum maintainability!
