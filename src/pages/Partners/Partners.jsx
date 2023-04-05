import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import { ReactComponent as FixedLogo } from "../../assets/images/svgs/fixed-logo.svg";
import TopBackground from "../../components/TopBackground/TopBackground";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection.jsx";
import vision from "../../assets/images/featured/featured1.jpg";
import mission from "../../assets/images/featured/featured2.jpg";
import values from "../../assets/images/featured/featured3.jpg";
import { Outlet } from "react-router-dom";
import "./Partners.css";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className="partners-page">
      <TopBackground title="partners.partnersTitle" text="partners.partnersText" />
      <Outlet />
      <Fade bottom>
        <div className="partners-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <h2 className="title">{t("partners.title")}</h2>
            <p className="desc">{t("partners.desc")}</p>
            <ImageTextSection type="row" title="partners.partners1Title" text="partners.partners1Desc" image={vision} />
            <ImageTextSection type="row-reverse" title="partners.partners2Title" text="partners.partners2Desc" image={mission} />
            <ImageTextSection type="row" title="partners.partners3Title" text="partners.partners3Desc" image={values} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Partners;
