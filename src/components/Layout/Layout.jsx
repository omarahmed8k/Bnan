import React, { useEffect } from "react";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Language from "../Language/Language.jsx";
import { useLocation } from "react-router-dom";


export default function Layout(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <>
      <Header />
      <Language />
      {props.children}
      <Footer />
    </>
  );
}
