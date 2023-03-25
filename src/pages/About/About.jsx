import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import { ReactComponent as FixedLogo } from "../../assets/images/svgs/fixed-logo.svg";
import TopBackground from "../../components/TopBackground/TopBackground";
import ImageTextSection from "../../components/ImageTextSection/ImageTextSection.jsx";
import vision from "../../assets/images/featured/featured1.jpg";
import mission from "../../assets/images/featured/featured2.jpg";
import values from "../../assets/images/featured/featured3.jpg";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <TopBackground title="about.aboutTitle" text="about.aboutText" />
      <Fade bottom>
        <div className="about-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <h2 className="title">{t("about.title")}</h2>
            <p className="desc">{t("about.desc")}</p>

            <ImageTextSection type="row" title="about.about1Title" text="about.about1Desc" image={vision} />

            <ImageTextSection type="row-reverse" title="about.about2Title" text="about.about2Desc" image={mission} />

            <ImageTextSection type="row" title="about.about3Title" text="about.about3Desc" image={values} />

          </div>

        </div>
      </Fade>

    </div>
  );
}
