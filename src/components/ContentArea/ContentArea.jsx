import React from "react";
import { Fade } from "react-reveal";
import TopBackground from "../TopBackground/TopBackground";
import "./ContentArea.css";

function ContentArea({ title, text, children }) {
  return (
    <>
      <TopBackground title={title} text={text} />
      <Fade bottom>
        <div className="content-area">{children}</div>
      </Fade>
    </>
  );
}

export default ContentArea;
