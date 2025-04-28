import { memo } from "react";
import "../styles/Footer.css";

const Footer = memo(() => {
  return (
    <footer className="app-footer">
      <p>© 2025 Company Explorer</p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
