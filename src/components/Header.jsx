import { useSelector } from "react-redux";
import { selectTotalItems } from "../store/cartSlice";

export default function Header({ onNavigate, currentPage }) {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="app-header">
      <button
        className="header-logo"
        onClick={() => onNavigate("landing")}
        aria-label="Go to landing page"
      >
        <span className="logo-icon">🌿</span>
        <span className="logo-text">Paradise Nursery</span>
      </button>

      <p className="header-tagline">Bringing Nature Into Your Home</p>

      <button
        className={`cart-btn ${currentPage === "cart" ? "active" : ""}`}
        onClick={() => onNavigate("cart")}
        aria-label={`Shopping cart, ${totalItems} items`}
      >
        <span className="cart-icon">🛒</span>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
    </header>
  );
}
