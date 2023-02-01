import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <ul>
          <li>
            <Link className="logo" to={`/`}>
              <Logo />
            </Link>
          </li>
          <li>
            <ul className="nav-links">
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/about`}>About</NavLink>
              </li>
              <li>
                <NavLink to={`/services`}>Services</NavLink>
              </li>
              <li>
                <NavLink to={`/projects`}>Projects Us</NavLink>
              </li>
              <li>
                <NavLink to={`/contact`}>Contact Us</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <div className="menu">
              <Menu />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
