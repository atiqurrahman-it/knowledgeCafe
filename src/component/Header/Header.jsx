import React from "react";
import logo from "../../assets/logo.jpg";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    // Link use korte hobe && to use kore link provide korte  hobe na hole page reload hobe
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-2xl font-bold">
            <NavLink to='/'> Knowledge Cafe</NavLink>
          </div>
        </div>
        <div className="flex-none">
          <ul className="navbar-ul">
            <li>
             
              <Link to="/sellProducts">Product</Link>
            </li>
            <li>
              
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

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
