import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/svgs/logo.svg";
import cloudImg from "../../assets/images/global/cloud.jpg";
import partnerImg from "../../assets/images/global/partners.jpg";
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
                  <Link to={`/`}>{t("header.home")}</Link>
                </li>
                <li>
                  <NavLink to={`/about`}>{t("header.about")}</NavLink>
                </li>
                <li className="has-menu">
                  <NavLink to={`/services-and-solutions`}>
                    {t("header.technologySolutions")}
                  </NavLink>
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <h4>
                          <NavLink to={`/services`}>
                            {t("header.services")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/services/it-support-system`}>
                          {t("header.itSupportSystem")}
                        </NavLink>
                        <NavLink to={`/services/professional-services`}>
                          {t("header.professionalServices")}
                        </NavLink>
                        <NavLink to={`/services/integration`}>
                          {t("header.integration")}
                        </NavLink>
                        <NavLink to={`/services/networking-security`}>
                          {t("header.networkingSecurity")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>
                          <NavLink to={`/solutions`}>
                            {t("header.solutions")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/solutions/core-infrastructure`}>
                          {t("header.infrastructure")}
                        </NavLink>
                        <NavLink to={`/solutions/systems`}>
                          {t("header.systems")}
                        </NavLink>
                        <NavLink to={`/solutions/cloud-computing`}>
                          {t("header.cloudComputing")}
                        </NavLink>
                        <NavLink to={`/solutions/data-center`}>
                          {t("header.dataCenter")}
                        </NavLink>
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
                        <h4>
                          <NavLink to={`/partners`}>
                            {t("header.partners")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/partners/it-service-management`}>
                          {t("header.itServiceManagement")}
                        </NavLink>
                        <NavLink to={`/partners/cloud-infrastructure`}>
                          {t("header.cloudInfrastructure")}
                        </NavLink>
                        <NavLink to={`/partners/it-security`}>
                          {t("header.iTSecurity")}
                        </NavLink>
                        <NavLink to={`/partners/business-application`}>
                          {t("header.businessApplication")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>
                          <br />
                        </h4>
                        <NavLink to={`/partners/backup-recovery`}>
                          {t("header.backupRecovery")}
                        </NavLink>
                        <NavLink to={`/partners/volume-licensing`}>
                          {t("header.volumeLicensing")}
                        </NavLink>
                        <NavLink to={`/partners/communication-collaboration`}>
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
              <Link to={`/contact`} className="main-btn">
                {t("header.requestAQuote")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
