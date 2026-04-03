import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { plantCategories } from "../data/plants";

export default function ProductsPage({ onNavigate }) {
  return (
    <div className="page">
      <Header onNavigate={onNavigate} currentPage="products" />
      <main className="products-main">
        {plantCategories.map((category) => (
          <section key={category.id} className="category-section">
            <div className="category-header">
              <span className="category-emoji">{category.emoji}</span>
              <h2 className="category-title">{category.name}</h2>
            </div>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <PlantCard key={`${category.id}-${plant.id}`} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
