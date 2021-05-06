import React from 'react';

/*
 * Header component
 */
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5 shadow">
      <img
        src="/rabo_react_FE/rabobank_logo.png"
        className="logo "
        alt="Rabo bank Logo"
      ></img>
      <h3 className="p-2 d-none d-md-block ">RABO Bank sign-up</h3>
    </nav>
  );
};
export default Header;
