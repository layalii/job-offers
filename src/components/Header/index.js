import React from "react";
import { NavLink } from "react-router-dom";
import BG from "components/Header/header.png";

const Header = () => {
  return (
    <header
      className="container-fluid d-flex align-items-end pb-3"
      style={{
        backgroundImage: `url(${BG})`,
        height: 150
      }}
    >
      <div className="container lead font-weight-bold">
        <NavLink
          to="/home"
          className="text-white text-decoration-none mr-5 pb-1"
          activeStyle={{
            borderBottom: "2px solid white "
          }}
        >
          Liste des offres
        </NavLink>
        <NavLink
          to="/profile"
          className="text-white text-decoration-none pb-1"
          activeStyle={{
            borderBottom: "2px solid white "
          }}
        >
          Mon profil
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
