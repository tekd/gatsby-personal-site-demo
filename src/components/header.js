import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_logo">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
