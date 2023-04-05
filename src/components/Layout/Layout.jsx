import React from "react";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Language from "../Language/Language.jsx";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Language />
      {props.children}
      <Footer />
    </>
  );
}
