import "./Watch.css";
import { useRef } from "react";
import w1 from "../assets/w1.webp";
import w2 from "../assets/w2.webp";
import w3 from "../assets/w3.webp";
import p10 from "../assets/p10.webp";
import p11 from "../assets/p11.webp";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";

import { Link } from "react-router-dom";

export default function WatchSection() {
    const scrollRef = useRef(null);
  const watches = [
    { img: w1, name: "Luxury Watch", path: "/w/1", price:1000 },
    { img: w2, name: "Smart Watch", path: "/w/2", price:6000  },
    { img: w3, name: "Classic Watch", path: "/w/3",price:4000  },
    { img: p10, name: "Sport Watch", path: "/p/10",price:6700  },
    { img: p11, name: "Digital Watch", path: "/p/11",price:8900  },
      { img: p1, name: "Digital Watch", path: "/p/1",price:8900  },
        { img: p2, name: "Digital Watch", path: "/p/2",price:8900  },
          { img: p3, name: "Digital Watch", path: "/p/3",price:8900  },
            { img: p4, name: "Digital Watch", path: "/p/4",price:8900  },
  ];
 const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  };
  return (
    <div className="watch-section">

      <h2 className="title">Top Watches</h2>

      {/* SCROLL AREA */}
      <div className="watch-scroll" ref={scrollRef}></div>
      <div className="watch-scroll">

        {watches.map((item, index) => (
          <Link to={item.path} key={index} className="watch-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </Link>
         
        ))}

 
      </div>
     
    
    </div>
     
  );
}