import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "./../../store/slices/toggleSlice";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
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
                  <NavLink to={`/projects`}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`}>Contact Us</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="menu"
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                <Menu />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
