import React from "react";
import { useTranslation } from "react-i18next";
import ReactTyped from "react-typed";
import homeVideo from "../../assets/images/videos/video.mp4";
import "./Home.css";
export default function Home() {
  const { t } = useTranslation();

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
    </div>
  );
}
