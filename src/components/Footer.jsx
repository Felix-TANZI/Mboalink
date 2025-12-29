import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerLinks">
          <a href="#">Terms of Service</a>
          <span className="sep">|</span>
          <a href="#">Privacy Policy</a>
          <span className="sep">|</span>
          <a href="#">Help Desk</a>
        </div>
        <div className="footerCopy">© 2025 MboaLink. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
