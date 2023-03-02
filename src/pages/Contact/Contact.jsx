import React from "react";
import { useTranslation } from "react-i18next";
import TopBackground from "../../components/TopBackground/TopBackground";
import phoneImg from "../../assets/images/featured/feature3.jpg";
import mailImg from "../../assets/images/featured/feature3.jpg";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <TopBackground title="contact.contactTitle" text="contact.contactText" />
      <div className="container content">
        <ul>
          <li>
            <div className="title-side">
              <p>{t("contact.contactTitle")}</p>
            </div>
          </li>
          <li>
            <h2>{t("contact.contactText")}</h2>
          </li>
          <li>
            <h2>{t("contact.contactDetails")}</h2>
          </li>
          <li>
            <a href="tel:+966 555 301 847" target="_blank" rel="noreferrer">
              <img src={phoneImg} alt="Phone" />
              <p>{t("contact.phone")}</p>
              <p>{t("contact.phoneNumber")}</p>
            </a>
            <a
              href="mailto:sales@constructiondigitalsolution.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mailImg} alt="email" />
              <p>{t("contact.email")}</p>
              <p>{t("contact.emailAddress")}</p>
            </a>
          </li>
        </ul>
        <form>
          <div className="form-input w-50">
            <input type="text" placeholder=" " required />
            <label>{t("contact.name")}</label>
          </div>
          <div className="form-input w-50">
            <input type="number" placeholder=" " required />
            <label>{t("contact.phone")}</label>
          </div>
          <div className="form-input w-100">
            <input type="text" placeholder=" " required />
            <label>{t("contact.email")}</label>
          </div>
          <div className="form-input w-100">
            <textarea placeholder=" " required></textarea>
            <label>{t("contact.message")}</label>
          </div>
          <div className="form-input w-100">
            <button className="second-btn" type="submit">
              {t("contact.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
