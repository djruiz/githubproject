import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder"
};

export default Navbar;
