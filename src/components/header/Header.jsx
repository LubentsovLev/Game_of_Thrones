import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

let Header = () => {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="header__container">
        <NavLink
          className="btn btn-info"
          to="/Comment"
          activeClassName={"ln_active"}
        >
          form
        </NavLink>
        <NavLink
          className="btn btn-info"
          to="/Posts"
          activeClassName={"ln_active"}
        >
          Game Of Thrones
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
