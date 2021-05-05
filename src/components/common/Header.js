import React from 'react';

/*
 * Header component
 */
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5 shadow-sm">
      <img
        src="/rabo_react_FE/rabobank_logo.png"
        style={{ height: 50 }}
        alt="Rabo bank Logo"
      ></img>
      <h3 className="p-2">RABO Bank login Page</h3>
    </nav>
  );
};
export default Header;
