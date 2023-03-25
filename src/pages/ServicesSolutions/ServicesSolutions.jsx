import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import { ReactComponent as FixedLogo } from "../../assets/images/svgs/fixed-logo.svg";
import TopBackground from "../../components/TopBackground/TopBackground";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection.jsx";
import vision from "../../assets/images/featured/featured1.jpg";
import mission from "../../assets/images/featured/featured2.jpg";
import values from "../../assets/images/featured/featured3.jpg";
import "./ServicesSolutions.css";


function ServicesSolutions() {
  const { t } = useTranslation();
  return (
    <div className="services-solutions-page">
      <TopBackground title="servicesSolutions.servicesSolutionsTitle" text="servicesSolutions.servicesSolutionsText" />
      <Fade bottom>
        <div className="services-solutions-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <h2 className="title">{t("servicesSolutions.title")}</h2>
            <p className="desc">{t("servicesSolutions.desc")}</p>
            <ImageTextSection type="row" title="servicesSolutions.servicesSolutions1Title" text="servicesSolutions.servicesSolutions1Desc" image={vision} />
            <ImageTextSection type="row-reverse" title="servicesSolutions.servicesSolutions2Title" text="servicesSolutions.servicesSolutions2Desc" image={mission} />
            <ImageTextSection type="row" title="servicesSolutions.servicesSolutions3Title" text="servicesSolutions.servicesSolutions3Desc" image={values} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ServicesSolutions;
