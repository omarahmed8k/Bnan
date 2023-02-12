import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "./../../store/slices/toggleSlice";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import headerImg from "../../assets/images/about-bg.jpg";
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
                <li className="has-menu">
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                      </li>
                      <li>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                        <NavLink to={`/`}>{t("header.home")}</NavLink>
                      </li>
                      <li>
                        <img src={headerImg} alt="img" />
                      </li>
                    </ul>
                  </div>
                  <NavLink to={`/`}>{t("header.home")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`}>{t("header.about")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/services`}>{t("header.services")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/projects`}>{t("header.projects")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`}>{t("header.contact")}</NavLink>
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
