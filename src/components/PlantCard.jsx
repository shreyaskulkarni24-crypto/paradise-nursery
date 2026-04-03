import { useDispatch, useSelector } from "react-redux";
import { addItem, selectIsInCart } from "../store/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(selectIsInCart(plant.id));

  return (
    <div className="plant-card">
      <div className="plant-img-wrap">
        <img src={plant.image} alt={plant.name} className="plant-img" />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <p className="plant-desc">{plant.description}</p>
        <button
          className={`add-btn ${inCart ? "added" : ""}`}
          onClick={() => dispatch(addItem(plant))}
          disabled={inCart}
        >
          {inCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
