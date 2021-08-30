import React from "react";
import { NavBar, Logo, NavBarLink, NavItems } from "./style";

const Header = () => {
  return (
    <NavBar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/about">About</NavBarLink>
        <NavBarLink to="/services">Services</NavBarLink>
      </NavItems>
    </NavBar>
  );
};

export default Header;
