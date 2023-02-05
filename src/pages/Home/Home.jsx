import React, { useEffect } from "react";
import homeVideo from "../../assets/images/videos/video.mp4";
import "./Home.css";
export default function Home() {
  setTimeout(() => {
    const video = document.querySelector(".video");
    video.playbackRate = 3.0;
    console.log("video");
  }, 1000);

  return (
    <div className="home">
      <div className="video-section">
        <video loop autoPlay muted className="video">
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="container">
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptates, quia, voluptatibus quae quidem voluptatem
              consequuntur quos voluptatum quibusdam quas. Quisquam, quae.
              Quisquam quod, voluptates, quia, voluptatibus quae quidem
              voluptatem consequuntur quos voluptatum quibusdam quas. Quisquam,
              quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
