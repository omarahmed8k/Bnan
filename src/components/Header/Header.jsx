import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/svgs/logo.svg";
import cloudImg from "../../assets/images/cloud.jpg";
import partnerImg from "../../assets/images/partners.jpg";
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
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
                <li>
                  <NavLink to={`/`}>{t("header.home")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`}>{t("header.about")}</NavLink>
                </li>
                <li className="has-menu">
                  <NavLink to={`/solutions`}>
                    {t("header.technologySolutions")}
                  </NavLink>
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <h4>{t("header.services")}</h4>
                        <NavLink to={`/`}>
                          {t("header.itSupportSystem")}
                        </NavLink>
                        <NavLink to={`/`}>
                          {t("header.professionalServices")}
                        </NavLink>
                        <NavLink to={`/`}>{t("header.integration")}</NavLink>
                        <NavLink to={`/`}>
                          {t("header.networkingSecurity")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>{t("header.solutions")}</h4>
                        <NavLink to={`/`}>{t("header.infrastructure")}</NavLink>
                        <NavLink to={`/`}>{t("header.systems")}</NavLink>
                        <NavLink to={`/`}>{t("header.cloudComputing")}</NavLink>
                        <NavLink to={`/`}>{t("header.dataCenter")}</NavLink>
                      </li>
                      <li>
                        <img src={cloudImg} alt="cloudImg" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-menu">
                  <NavLink to={`/partners`}>{t("header.partners")}</NavLink>
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <h4>{t("header.partners")}</h4>
                        <NavLink to={`/`}>
                          {t("header.itServiceManagement")}
                        </NavLink>
                        <NavLink to={`/`}>
                          {t("header.cloudInfrastructure")}
                        </NavLink>
                        <NavLink to={`/`}>{t("header.iTSecurity")}</NavLink>
                        <NavLink to={`/`}>
                          {t("header.businessApplication")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>
                          <br />
                        </h4>
                        <NavLink to={`/`}>{t("header.backupRecovery")}</NavLink>
                        <NavLink to={`/`}>
                          {t("header.volumeLicensing")}
                        </NavLink>
                        <NavLink to={`/`}>
                          {t("header.communicationCollaboration")}
                        </NavLink>
                      </li>
                      <li>
                        <img src={partnerImg} alt="partnerImg" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink to={`/contact`}>{t("header.contact")}</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <button className="main-btn">{t("header.requestAQuote")}</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
