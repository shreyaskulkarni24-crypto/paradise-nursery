import { useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} className="cart-img" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-unit-price">Unit price: ${item.price.toFixed(2)}</p>
        <div className="qty-controls">
          <button
            className="qty-btn"
            onClick={() => dispatch(decrementQuantity(item.id))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="qty-count">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => dispatch(incrementQuantity(item.id))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <p className="cart-subtotal">
          Subtotal: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </p>
      </div>
      <button
        className="delete-btn"
        onClick={() => dispatch(removeItem(item.id))}
        aria-label={`Remove ${item.name}`}
        title="Remove item"
      >
        🗑
      </button>
    </div>
  );
}
