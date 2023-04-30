import React from "react";
import PropTypes from "prop-types";

export function Navbar({ title, links, className, style }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${className}`} style={style}>
      <a className="navbar-brand" href="#">
        {title}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={link.url}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  
};

// export default Navbar;
