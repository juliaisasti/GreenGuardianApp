import React from "react";
import Nav from "./Nav";
import logo from '../../assets/plant_icon.png'

const Header = () => {
  return (
    <section className="header_container" >
        <img src={logo} className="logo"/>
      <Nav />
    </section>
  );
};

export default Header;
