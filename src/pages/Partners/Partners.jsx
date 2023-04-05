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
import "./Partners.css";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className="partners-page">
      <TopBackground title="partners.partnersTitle" text="partners.partnersText" />
      <Fade bottom>
        <div className="partners-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <div className="cards-section">
              <div className="card">
                <Link className="title" to={`/partners`}>{t('header.partners')}</Link>
                <p className="desc">{t(`partners.desc`)}</p>

                <div className="cards">
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.itServiceManagement")}</h3>
                    <p>{t("partners.card1Text")}</p>
                    <Link to={`/partners/it-support-system`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${mission})`
                  }}>
                    <h3>{t("header.cloudInfrastructure")}</h3>
                    <p>{t("partners.card2Text")}</p>
                    <Link to={`/partners/integration`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${values})`
                  }}>
                    <h3>{t("header.iTSecurity")}</h3>
                    <p>{t("partners.card3Text")}</p>
                    <Link to={`/partners/professional-partners`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.businessApplication")}</h3>
                    <p>{t("partners.card4Text")}</p>
                    <Link to={`/partners/networking-security`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.backupRecovery")}</h3>
                    <p>{t("partners.card5Text")}</p>
                    <Link to={`/partners/it-support-system`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${mission})`
                  }}>
                    <h3>{t("header.volumeLicensing")}</h3>
                    <p>{t("partners.card6Text")}</p>
                    <Link to={`/partners/integration`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${values})`
                  }}>
                    <h3>{t("header.communicationCollaboration")}</h3>
                    <p>{t("partners.card7Text")}</p>
                    <Link to={`/partners/professional-partners`} className="card-btn">
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

export default Partners;
