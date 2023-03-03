import React from "react";
import TopBackground from "../../components/TopBackground/TopBackground";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <TopBackground title="about.aboutTitle" text="about.aboutText" />
    </div>
  );
}
