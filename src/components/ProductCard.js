import "./ProductCard.css";

import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";

import { Link } from "react-router-dom";

export default function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Luxury Watch",
      price: "₹4,999",
      img: g1,
      path: "/product/1",
    },
    {
      id: 2,
      name: "Smart Phone",
      price: "₹12,999",
      img: g2,
      path: "/product/2",
    },
    {
      id: 3,
      name: "Sport Watch",
      price: "₹3,499",
      img: g3,
      path: "/product/3",
    },
  ];

  return (
    <div className="product-section">

      <h2 className="title">🔥 Featured Products</h2>

      <div className="product-grid">

        {products.map((item) => (
          <Link to={item.path} key={item.id} className="product-card">

            <img src={item.img} alt={item.name} className="product-img" />

            <h3>{item.name}</h3>

            <p className="price">{item.price}</p>

          </Link>
        ))}

      </div>

    </div>
  );
}