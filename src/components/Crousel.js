
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";
import p5 from "../assets/p5.webp";
import p6 from "../assets/p6.webp";
import p7 from "../assets/p7.webp";

export default function HeroCarousel() {
  const images = [p1, p2, p3, p4, p5, p6, p7];

  const chunkSize = 3;
  const slides = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    slides.push(images.slice(i, i + chunkSize));
  }

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">

        {slides.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex gap-2 justify-content-center">

              {group.map((img, i) => (
                <img key={i} src={img} className="multi-img" w onClick={() => alert("Image clicked!")}  height="300px"/>
              ))
            }
            </div>
          </div>
        ))}

      </div>

      {/* 🔥 CONTROLS BUTTONS ADDED */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
}