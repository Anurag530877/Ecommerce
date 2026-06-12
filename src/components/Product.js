import "./Product.css";
import p8 from "../assets/p8.webp"
import p9 from "../assets/p9.webp"
import p10 from "../assets/p10.webp"
import p11 from "../assets/p11.webp"

export default function ProductSection() {
  return (
    <div className="product-section">

      <h2 className="section-title">Smart Collection</h2>
      <p className="section-subtitle">
        Watches & Phones – Latest Deals
      </p>

      <div className="product-grid">

        <div className="product-card">
          <img src={p8} alt="watch" />
          <h3>Smart Watch</h3>
        </div>

        <div className="product-card">
          <img src={p9} alt="phone" />
          <h3>5G Phone</h3>
        </div>

        <div className="product-card">
          <img src={p10} alt="watch" />
          <h3>Luxury Watch</h3>
        </div>

        <div className="product-card">
          <img src={p11} alt="phone" />
          <h3>Android Phone</h3>
        </div>

      </div>

    </div>
  );
}