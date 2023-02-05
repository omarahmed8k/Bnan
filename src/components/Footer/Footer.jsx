import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <p>{t("footer.title")}</p>
    </div>
  );
}
