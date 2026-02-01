import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">© {new Date().getFullYear()} Ruhuna ProjectHUB</div>
        <div className="footer__right">Built for university collaboration</div>
      </div>
    </footer>
  );
}
