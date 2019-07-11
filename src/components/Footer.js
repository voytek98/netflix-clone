import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__description">
          I do not own Netflix brand, this website was created only to show my skills
          in creating web applications and will never be used for commercial
          purposes.
        </p>
        <div className="footer__social">
          <div className="footer__social__content">
            <p className="footer__description">Checkout source code on my GitHub</p>
            <a className="footer__icon" href="https://github.com/WojtasF"><i class="fab fa-github"></i></a>
          </div>
          <div className="footer__social__content">
            <p className="footer__description">and checkout my portfolio</p>
            <a className="footer__portfolio" href="https://wojciech.dev">Wojciech.dev</a>
          </div>
        </div>
        <hr className="footer__break" size="1"/>
        <p className="footer__description">Made by Wojciech Florczak | 2019</p>
      </div>
    </footer>
  );
};

export default Footer;