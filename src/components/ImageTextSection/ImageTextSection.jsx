import React from 'react'
import { useTranslation } from 'react-i18next';
import './ImageTextSection.css'

export default function ImageTextSection({ title, text, image, type = "column" }) {
    const { t } = useTranslation();
    return (
        <div className={`image-text-section ${type === "column" ? "column" : type === "row" ? "row" : type === "row-reverse" ? "row-reverse" : ""}`}>
            <div className="image">
                <img src={image} alt="Img" />
            </div>
            <div className="text">
                <h2>
                    {t(title)}
                </h2>
                <p>
                    {t(text)}
                </p>
            </div>
        </div >
    )
}
