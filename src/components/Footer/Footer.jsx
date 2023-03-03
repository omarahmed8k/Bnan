import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/svgs/logo.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-item">
            <Logo />
            <h3>{t("footer.title1")}</h3>
            <p>{t("footer.desc1")}</p>
          </div>
          <div className="footer-item">
            <h3>{t("footer.title2")}</h3>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
          </div>
          <div className="footer-item">
            <h3>{t("footer.title3")}</h3>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
            <Link to={"/about"} className="footer-link">
              {t("footer.about")}
            </Link>
          </div>
          <div className="footer-item">
            <h3>{t("footer.title4")}</h3>
            <p>{t("footer.addressDesc")}</p>
            <p>{t("footer.phoneDesc")}</p>
            <p>{t("footer.emailDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
