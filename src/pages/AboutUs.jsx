import Header from "../components/Header";

export default function AboutUs({ onNavigate }) {
  return (
    <div className="page">
      <Header onNavigate={onNavigate} currentPage="about" />

      <main className="about-main">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-overlay" />
          <div className="about-hero-content">
            <h1 className="about-hero-title">Our Story</h1>
            <p className="about-hero-sub">
              Rooted in passion, grown with love.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-badge">🌿 Who We Are</div>
            <h2 className="about-title">Welcome to Paradise Nursery</h2>
            <p className="about-text">
              Paradise Nursery was founded in 2024 with one simple belief —
              every home deserves a touch of nature. What started as a small
              passion project among plant lovers has grown into a thriving
              online nursery serving thousands of happy customers across the
              country.
            </p>
            <p className="about-text">
              We hand-select every plant in our collection, ensuring they are
              healthy, ethically sourced, and ready to thrive in your home.
              Whether you're a seasoned plant parent or just starting your
              green journey, we have the perfect plant for you.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-section">
          <div className="about-container">
            <div className="about-badge">💚 What We Stand For</div>
            <h2 className="about-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon">🌱</span>
                <h3>Sustainability</h3>
                <p>
                  All our plants are sustainably sourced from ethical growers
                  who share our commitment to the environment.
                </p>
              </div>
              <div className="value-card">
                <span className="value-icon">💛</span>
                <h3>Quality First</h3>
                <p>
                  Every plant is carefully inspected before shipping to ensure
                  it arrives healthy, vibrant, and ready to grow.
                </p>
              </div>
              <div className="value-card">
                <span className="value-icon">🤝</span>
                <h3>Community</h3>
                <p>
                  We believe in building a community of plant lovers. Our
                  experts are always available to help you care for your plants.
                </p>
              </div>
              <div className="value-card">
                <span className="value-icon">🚚</span>
                <h3>Free Delivery</h3>
                <p>
                  We offer free delivery on all orders so your plants arrive
                  safely at your doorstep without any extra cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-badge">👥 The People</div>
            <h2 className="about-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar">🧑‍🌾</div>
                <h3 className="team-name">Arjun Mehta</h3>
                <p className="team-role">Founder & Head Botanist</p>
                <p className="team-bio">
                  With over 15 years of experience in horticulture, Arjun
                  started Paradise Nursery to bring the joy of plants to
                  every household.
                </p>
              </div>
              <div className="team-card">
                <div className="team-avatar">👩‍💼</div>
                <h3 className="team-name">Priya Sharma</h3>
                <p className="team-role">Customer Experience Lead</p>
                <p className="team-bio">
                  Priya ensures every customer has a seamless experience from
                  browsing to delivery, with a smile at every step.
                </p>
              </div>
              <div className="team-card">
                <div className="team-avatar">👨‍💻</div>
                <h3 className="team-name">Rohan Verma</h3>
                <p className="team-role">Plant Care Specialist</p>
                <p className="team-bio">
                  Rohan is our in-house plant expert who curates our collection
                  and provides care tips to help your plants flourish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="about-container">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Plant Varieties</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Sustainably Sourced</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Customer Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-section">
          <div className="about-container about-contact">
            <div className="about-badge">📍 Find Us</div>
            <h2 className="about-title">Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@paradisenursery.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>12, Green Valley Road, Pune, Maharashtra - 411001</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="about-container" style={{ textAlign: "center" }}>
            <h2 className="about-cta-title">Ready to Start Your Plant Journey?</h2>
            <p className="about-cta-sub">
              Explore our collection and find the perfect plant for your home.
            </p>
            <button
              className="about-cta-btn"
              onClick={() => onNavigate("products")}
            >
              Shop Now 🌿
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
