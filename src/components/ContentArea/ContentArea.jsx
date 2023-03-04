import React from "react";
import { Outlet } from "react-router-dom";
import TopBackground from "../TopBackground/TopBackground";
import "./ContentArea.css";

function ContentArea({ title, text, children }) {
  return (
    <>
      <TopBackground title={title} text={text} />
      <div className="content-area">
        <Outlet />
      </div>
    </>
  );
}

export default ContentArea;
