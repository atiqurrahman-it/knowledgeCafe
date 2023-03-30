import React from "react";
import "./Header.css";
import logo from '../../assets/logo.jpg'
const Header = () => {
  return (
    <div>
      <nav>
        <h1>knowledge Cafe</h1>
        <img src={logo} alt="" />
      </nav>
    </div>
  );
};

export default Header;
