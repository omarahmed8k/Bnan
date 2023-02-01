import React, { useState } from "react";
// import { ReactComponent as Arrow } from "../../assets/images/arrowIcon.svg";
import "./Sidebar.css";
export default function Sidebar() {
  const [opeSidebar, setOpeSidebar] = useState(false);
  return (
    <div className={`sidebar ${opeSidebar ? "active" : " "}`}>
      <button
        className="sidebar-button"
        onClick={() => setOpeSidebar(!opeSidebar)}
      >
        {/* <Arrow /> */}
      </button>
      <ul>
        <li className="sidebar-top">
          <img src="https://picsum.photos/200" alt="" />
          <h1>Web</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </li>
        <li className="sidebar-middle">
          <h5>Pages</h5>
          <ul>
            <li>Pages</li>
            <li>Pages</li>
            <li>Pages</li>
            <li>Pages</li>
            <li>Pages</li>
          </ul>
        </li>
        <li className="middel-bottom">
          <h5>Follow Us</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
