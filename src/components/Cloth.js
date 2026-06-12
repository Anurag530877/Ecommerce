import "./Cloth.css";

import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s4 from "../assets/s4.webp";
import { Link } from "react-router-dom";

export default function ClothSection() {
  const clothes = [
    { id: 1, name: "Men T-Shirt", price: "₹499", img: s1, path: "/s/1" },
    { id: 2, name: "Hoodie", price: "₹999", img: s2, path: "/s/2" },
    { id: 3, name: "Jacket", price: "₹1499", img: s4, path: "/s/4" },
  ];

  return (
    <div className="cloth-section">

      <h2>👕 Fashion Deals</h2>

      <div className="cloth-grid">

        {clothes.map((item) => (
          <Link to={item.path} key={item.id} className="cloth-card">

            <img src={item.img} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>

          </Link>
        ))}

      </div>

    </div>
  );
}