import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/images/svgs/arrow.svg";
import { ReactComponent as FixedLogo } from "../../assets/images/svgs/fixed-logo.svg";
import TopBackground from "../../components/TopBackground/TopBackground";
import vision from "../../assets/images/featured/featured1.jpg";
import mission from "../../assets/images/featured/featured2.jpg";
import values from "../../assets/images/featured/featured3.jpg";
import "./Services.css";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="services-page">
      <TopBackground title="services.servicesTitle" text="services.servicesText" />
      <Fade bottom>
        <div className="services-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <div className="cards-section">
              <div className="card">
                <Link className="title" to={`/services`}>{t('header.services')}</Link>
                <p className="desc">{t(`services.desc`)}</p>

                <div className="cards">
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.itSupportSystem")}</h3>
                    <p>{t("servicesSolutions.card1Text")}</p>
                    <Link to={`/services/it-support-system`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${mission})`
                  }}>
                    <h3>{t("header.integration")}</h3>
                    <p>{t("servicesSolutions.card2Text")}</p>
                    <Link to={`/services/integration`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${values})`
                  }}>
                    <h3>{t("header.professionalServices")}</h3>
                    <p>{t("servicesSolutions.card3Text")}</p>
                    <Link to={`/services/professional-services`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.networkingSecurity")}</h3>
                    <p>{t("servicesSolutions.card4Text")}</p>
                    <Link to={`/services/networking-security`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </Fade >
    </div >
  );
}
