import React from "react";
import { useTranslation } from "react-i18next";

function TopBackground({ title, text }) {
  const { t } = useTranslation();
  return (
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
  );
}

export default TopBackground;
