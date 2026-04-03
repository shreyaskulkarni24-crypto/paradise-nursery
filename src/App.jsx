import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("landing");

  const navigate = (target) => setPage(target);

  return (
    <>
      {page === "landing" && <LandingPage onNavigate={navigate} />}
      {page === "products" && <ProductsPage onNavigate={navigate} />}
      {page === "cart" && <CartPage onNavigate={navigate} />}
      {page === "about" && <AboutUs onNavigate={navigate} />}
    </>
  );
}
