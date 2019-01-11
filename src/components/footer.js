import React from 'react';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__item footer__copyright">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
