import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
