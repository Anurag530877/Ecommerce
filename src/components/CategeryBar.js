import "./Categerybar.css";
import { Link } from "react-router-dom";
import {
  FaShoppingBasket,
  FaMobileAlt,
  FaTshirt,
  FaTv,
  FaHome,
  FaCar,
  FaHeartbeat,
  FaGamepad,
} from "react-icons/fa";
import { useRef } from "react";
export default function CategoryBar() {
    const scrollRef = useRef(null);
  const categories = [
    { name: "Grocery", icon: <FaShoppingBasket />, path: "/grocery" },
    { name: "Mobiles", icon: <FaMobileAlt />, path: "/mobiles" },
    { name: "Fashion", icon: <FaTshirt />, path: "/fashion" },
    { name: "Electronics", icon: <FaTv />, path: "/electronics" },
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "Automobile", icon: <FaCar />, path: "/automobile" },
    { name: "Health", icon: <FaHeartbeat />, path: "/health" },
    { name: "Gaming", icon: <FaGamepad />, path: "/gaming" },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="category-bar">

      {/* SCROLL AREA */}
      <div className="watch-scroll" ref={scrollRef}></div>
      {categories.map((item, index) => (
        <Link to={item.path} key={index} className="category-item">
          <div className="icon">{item.icon}</div>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}