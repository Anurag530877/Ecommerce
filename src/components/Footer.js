import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>ABOUT</h3>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h3>HELP</h3>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">FAQ</a>
        </div>

        {/* POLICY */}
        <div className="footer-col">
          <h3>POLICY</h3>
          <a href="#">Return Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>SOCIAL</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 MyShop Clone | All Rights Reserved</p>
      </div>

    </footer>
  );
}