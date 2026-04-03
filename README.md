# 🌿 Paradise Nursery - Shopping Application

A React-based e-commerce shopping application for house plants, built as a final project for the IBM Full Stack Development course.

## 🔗 Live Demo
[Paradise Nursery](#) <!-- add your deployed link here if available -->

## 📸 Screenshots
<!-- Add screenshots here if you have them -->

## 🛠️ Tech Stack
- **React 18** - Frontend UI library
- **Redux Toolkit** - Global state management
- **React Redux** - Redux bindings for React
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables

## ✨ Features
- 🏠 **Landing Page** - Engaging hero page with company info and Get Started button
- 🌱 **Product Listing Page** - Browse 9 unique house plants grouped into 3 categories
- 🛒 **Shopping Cart Page** - Full cart management with quantity controls
- 🔄 **Redux State Management** - Centralized store for cart operations

## 🌿 Plant Categories
1. **Air Purifying Plants** - Peace Lily, Spider Plant, Snake Plant
2. **Aromatic Plants** - Lavender, Jasmine, Mint
3. **Low Maintenance Plants** - Pothos, ZZ Plant, Aloe Vera

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

1. Clone the repository
```bash
   git clone https://github.com/shreyaskulkarni24-crypto/paradise-nursery.git
```

2. Navigate to the project folder
```bash
   cd paradise-nursery
```

3. Install dependencies
```bash
   npm install
```

4. Start the development server
```bash
   npm run dev
```

5. Open your browser and go to
http://localhost:5173

## 📁 Project Structure
paradise-nursery/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # Local plant images
│   ├── components/
│   │   ├── Header.jsx       # Shared header with cart icon
│   │   ├── PlantCard.jsx    # Product card component
│   │   └── CartItem.jsx     # Cart item card component
│   ├── context/
│   ├── data/
│   │   └── plants.js        # Plant data and categories
│   ├── pages/
│   │   ├── LandingPage.jsx  # Hero landing page
│   │   ├── ProductsPage.jsx # Product listing page
│   │   └── CartPage.jsx     # Shopping cart page
│   ├── store/
│   │   ├── store.js         # Redux store configuration
│   │   └── cartSlice.js     # Cart reducer and actions
│   ├── App.jsx              # Root component with routing
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point with Redux Provider
├── index.html
├── package.json
└── vite.config.js

## 🛒 Cart Features
- Add plants to cart (button disables after adding)
- Increase / Decrease quantity of each item
- Delete items from cart
- Live cart item count in header
- Subtotal per item
- Total item count and total cost
- Continue Shopping button
- Checkout button (Coming Soon)

## 📦 Redux Store
- **addItem** - Add a plant to the cart
- **removeItem** - Delete a plant from the cart
- **incrementQuantity** - Increase quantity by 1
- **decrementQuantity** - Decrease quantity by 1 (removes at 0)

## 👨‍💻 Author
**Shreyas Kulkarni**
- GitHub: [@shreyaskulkarni24-crypto](https://github.com/shreyaskulkarni24-crypto)

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
