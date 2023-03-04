import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import "./TopBackground.css";

function TopBackground({ title, text }) {
  const { t } = useTranslation();
  return (
    <Fade bottom>
      <div className="bacground-top">
        <div className="container">
          <div className="background-content">
            <h4>{t(title)}</h4>
            <p>
              <span>{t(text)}</span>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default TopBackground;
