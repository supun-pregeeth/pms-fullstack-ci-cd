import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-title">Ruhuna ProjectHUB</div>
          <div className="footer-sub">A student & mentor project collaboration platform.</div>
        </div>
        <div className="footer-right">© {new Date().getFullYear()} Ruhuna</div>
      </div>
    </footer>
  );
}
