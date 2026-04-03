export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing">
      <div className="landing-overlay" />
      <div className="landing-content">
        <div className="landing-badge">EST. 2024</div>
        <h1 className="landing-title">
          <span className="title-icon">🌿</span>
          Paradise<br />Nursery
        </h1>
        <div className="landing-divider" />
        <p className="landing-about">
          At Paradise Nursery, we believe every home deserves a touch of the living world.
          Our hand-selected collection of house plants — from air-purifying champions to
          fragrant blooms — transforms any space into a serene sanctuary. Each plant is
          nurtured with care so it arrives healthy, vibrant, and ready to thrive in your home.
        </p>
        <div className="landing-features">
          <div className="feat">🌱 <span>Sustainably Sourced</span></div>
          <div className="feat">🚚 <span>Free Delivery</span></div>
          <div className="feat">💚 <span>Expert Care Tips</span></div>
        </div>
        <button className="get-started-btn" onClick={() => onNavigate("products")}>
          Get Started
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
