import React from "react";
import LOGO from "./logo.png";
const Navbar = () => {
  return (
    <nav className="container-fluid bg-white">
      <img src={LOGO} alt="logo" className="d-flex mx-auto py-3"></img>
    </nav>
  );
};

export default Navbar;
