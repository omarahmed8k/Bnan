import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import homeVideo from "../../assets/images/videos/video.mp4";
import aboutImg from "../../assets/images/about-bg.jpg";
import { ReactComponent as FixedLogo } from "../../assets/images/fixed-logo.svg";
import { ReactComponent as ServiceImg1 } from "../../assets/images/services/1.svg";
import { ReactComponent as ServiceImg2 } from "../../assets/images/services/2.svg";
import { ReactComponent as ServiceImg3 } from "../../assets/images/services/3.svg";
import { ReactComponent as ServiceImg4 } from "../../assets/images/services/4.svg";
import "./Home.css";
export default function Home() {
  const { t } = useTranslation();

  const collapseHandler = (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.parentElement
      .querySelectorAll(".about-collapse")
      .forEach((item) => {
        if (item !== e.target.parentElement) {
          item.classList.remove("active");
        }
      });
  };

  setTimeout(() => {
    document.querySelector(".video").playbackRate = 3;
  }, 5000);

  return (
    <div className="home">
      <div className="video-section">
        <video loop autoPlay muted className="video">
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="container">
            <h1>
              <ReactTyped
                className="typed"
                strings={[
                  t("home.background.title1"),
                  t("home.background.title2"),
                ]}
                backDelay={5000}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <p>{t("home.background.desc")}</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <FixedLogo className="fixed-logo" />
        <div className="container">
          <h2 className="title">{t("home.services.title")}</h2>
          <p className="desc">{t("home.services.desc")}</p>
          <div className="services-links">
            <Link to={"/service/network"} className="services-card">
              <div className="card-head">
                <ServiceImg1 />
                <h3>{t("home.services.card1Title")}</h3>
              </div>
              <p>{t("home.services.card1Desc")}</p>
            </Link>
            <Link to={"/service/network"} className="services-card">
              <div className="card-head">
                <ServiceImg2 />
                <h3>{t("home.services.card2Title")}</h3>
              </div>
              <p>{t("home.services.card2Desc")}</p>
            </Link>
            <Link to={"/service/network"} className="services-card">
              <div className="card-head">
                <ServiceImg3 />
                <h3>{t("home.services.card3Title")}</h3>
              </div>
              <p>{t("home.services.card3Desc")}</p>
            </Link>
            <Link to={"/service/network"} className="services-card">
              <div className="card-head">
                <ServiceImg4 />
                <h3>{t("home.services.card4Title")}</h3>
              </div>
              <p>{t("home.services.card4Desc")}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="about-flex">
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-content">
              <h2 className="title">{t("home.about.title")}</h2>
              <p className="desc">{t("home.about.desc")}</p>
              <div
                className="about-collapse active"
                onClick={(e) => {
                  collapseHandler(e);
                }}
              >
                <h4>{t("home.about.about1Title")}</h4>
                <h6>{t("home.about.about1Desc")}</h6>
              </div>
              <div
                className="about-collapse"
                onClick={(e) => {
                  collapseHandler(e);
                }}
              >
                <h4>{t("home.about.about2Title")}</h4>
                <h6>{t("home.about.about2Desc")}</h6>
              </div>
              <div
                className="about-collapse"
                onClick={(e) => {
                  collapseHandler(e);
                }}
              >
                <h4>{t("home.about.about3Title")}</h4>
                <h6>{t("home.about.about3Desc")}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
