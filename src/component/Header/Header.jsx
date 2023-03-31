import React from "react";
import "./Header.css";
import logo from '../../assets/logo.jpg'
const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold" >Knowledge Cafe </a>
        </div>
        <div className="flex-none">
          <div className="">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
