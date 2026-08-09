import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>BookMart</h2>
        <p>Buy and sell second-hand books easily.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Buy Books</p>
        <p>Sell Books</p>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: bookmart@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </footer>
  );
}

export default Footer;