import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
} from "../store/cartSlice";

export default function CartPage({ onNavigate }) {
  const cart = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="page">
        <Header onNavigate={onNavigate} currentPage="cart" />
        <main className="cart-main">
          <div className="empty-cart">
            <span className="empty-icon">🌱</span>
            <h2>Your cart is empty</h2>
            <p>Add some plants to get started!</p>
            <button
              className="continue-btn-standalone"
              onClick={() => onNavigate("products")}
            >
              Browse Plants
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header onNavigate={onNavigate} currentPage="cart" />
      <main className="cart-main">
        <h2 className="cart-title">Your Shopping Cart</h2>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Total Plants</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total Cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>

            {checkoutMsg && (
              <div className="checkout-msg">
                🎉 Coming Soon! Checkout is not yet available.
              </div>
            )}

            <button
              className="checkout-btn"
              onClick={() => setCheckoutMsg(true)}
            >
              Checkout
            </button>
            <button
              className="continue-shopping-btn"
              onClick={() => onNavigate("products")}
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
