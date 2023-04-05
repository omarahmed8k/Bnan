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
import "./Solutions.css";

function Solutions() {
  const { t } = useTranslation();
  return (
    <div className="solutions-page">
      <TopBackground title="solutions.solutionsTitle" text="solutions.solutionsText" />
      <Fade bottom>
        <div className="solutions-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <div className="cards-section">
              <div className="card">
                <Link className="title" to={`/solutions`}>{t('header.solutions')}</Link>
                <p className="desc">{t(`solutions.desc`)}</p>

                <div className="cards">
                  <div className="card-info" style={{
                    backgroundImage: `url(${values})`
                  }}>
                    <h3>{t("header.systems")}</h3>
                    <p>{t("servicesSolutions.card5Text")}</p>
                    <Link to={`/solutions/systems`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${vision})`
                  }}>
                    <h3>{t("header.cloudComputing")}</h3>
                    <p>{t("servicesSolutions.card6Text")}</p>
                    <Link to={`/solutions/cloud-computing`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div>
                  <div className="card-info" style={{
                    backgroundImage: `url(${mission})`
                  }}>
                    <h3>{t("header.dataCenter")}</h3>
                    <p>{t("servicesSolutions.card7Text")}</p>
                    <Link to={`/solutions/data-center`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div >
                  <div className="card-info" style={{
                    backgroundImage: `url(${values})`
                  }}>
                    <h3>{t("header.infrastructure")}</h3>
                    <p>{t("servicesSolutions.card8Text")}</p>
                    <Link to={`/solutions/core-infrastructure`} className="card-btn">
                      <Arrow />
                    </Link>
                  </div >
                </div >
              </div>
            </div >
          </div >
        </div >
      </Fade >
    </div >
  );
}

export default Solutions;
