import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import ReactTyped from "react-typed";
import { Fade } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import homeVideo from "../../assets/images/videos/video.mp4";
import exploreVideo from "../../assets/images/videos/explore.ogv";
import aboutImg from "../../assets/images/global/about-bg.jpg";
import featured1 from "../../assets/images/featured/featured1.jpg";
import featured2 from "../../assets/images/featured/featured2.jpg";
import featured3 from "../../assets/images/featured/featured3.jpg";
import profile from "../../assets/images/global/profile.png";
import { ReactComponent as FixedLogo } from "../../assets/images/svgs/fixed-logo.svg";
import { ReactComponent as ServiceImg1 } from "../../assets/images/services/1.svg";
import { ReactComponent as ServiceImg2 } from "../../assets/images/services/2.svg";
import { ReactComponent as ServiceImg3 } from "../../assets/images/services/3.svg";
import { ReactComponent as ServiceImg4 } from "../../assets/images/services/4.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Home.css";
export default function Home() {
  const { t } = useTranslation();

  const collapseHandler = (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.parentElement
      .querySelectorAll(".about-collapse")
      .forEach((item) => {
        if (item !== e.target.parentElement) {
          item.classList.remove("active");
        }
      });
  };

  return (
    <div className="home">
      <div className="video-section">
        <video loop autoPlay muted className="video">
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="container">
            <h1>
              <ReactTyped
                className="typed"
                strings={[
                  t("home.background.title1"),
                  t("home.background.title2"),
                ]}
                backDelay={5000}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <p>{t("home.background.desc")}</p>
          </div>
        </div>
      </div>

      <Fade bottom>
        <div className="services-section">
          <FixedLogo className="fixed-logo" />
          <div className="container">
            <h2 className="title">{t("home.services.title")}</h2>
            <p className="desc">{t("home.services.desc")}</p>
            <div className="services-links">
              <Link to={"/service/network"} className="services-card">
                <div className="card-head">
                  <ServiceImg1 />
                  <h3>{t("home.services.card1Title")}</h3>
                </div>
                <p>{t("home.services.card1Desc")}</p>
              </Link>
              <Link to={"/service/network"} className="services-card">
                <div className="card-head">
                  <ServiceImg2 />
                  <h3>{t("home.services.card2Title")}</h3>
                </div>
                <p>{t("home.services.card2Desc")}</p>
              </Link>
              <Link to={"/service/network"} className="services-card">
                <div className="card-head">
                  <ServiceImg3 />
                  <h3>{t("home.services.card3Title")}</h3>
                </div>
                <p>{t("home.services.card3Desc")}</p>
              </Link>
              <Link to={"/service/network"} className="services-card">
                <div className="card-head">
                  <ServiceImg4 />
                  <h3>{t("home.services.card4Title")}</h3>
                </div>
                <p>{t("home.services.card4Desc")}</p>
              </Link>
            </div>
          </div>
        </div>
      </Fade>

      <div className="bg-shape">
        <Fade bottom>
          <div className="about-section">
            <div className="container">
              <div className="about-flex">
                <div className="about-img">
                  <img src={aboutImg} alt="" />
                </div>
                <div className="about-content">
                  <h2 className="title">{t("home.about.title")}</h2>
                  <p className="desc">{t("home.about.desc")}</p>
                  <div
                    className="about-collapse active"
                    onClick={(e) => {
                      collapseHandler(e);
                    }}
                  >
                    <h4>{t("home.about.about1Title")}</h4>
                    <h6>{t("home.about.about1Desc")}</h6>
                  </div>
                  <div
                    className="about-collapse"
                    onClick={(e) => {
                      collapseHandler(e);
                    }}
                  >
                    <h4>{t("home.about.about2Title")}</h4>
                    <h6>{t("home.about.about2Desc")}</h6>
                  </div>
                  <div
                    className="about-collapse"
                    onClick={(e) => {
                      collapseHandler(e);
                    }}
                  >
                    <h4>{t("home.about.about3Title")}</h4>
                    <h6>{t("home.about.about3Desc")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="featured-section">
            <div className="container">
              <h2 className="title">{t("home.featured.title")}</h2>
              <p className="desc">{t("home.featured.desc")}</p>
              <ul className="featured-grid">
                <li className="featured-card">
                  <div className="featured-img">
                    <img src={featured1} alt="featured-img" />
                  </div>
                  <div className="featured-content">
                    <h4>{t("home.featured.card1Title")}</h4>
                    <p>{t("home.featured.card1Desc")}</p>
                    <Link to={"/services/it-support-system"} className="featured-btn">
                      {t("home.featured.cardBtn")}
                    </Link>
                  </div>
                </li>
                <li className="featured-card">
                  <div className="featured-img">
                    <img src={featured2} alt="featured-img" />
                  </div>
                  <div className="featured-content">
                    <h4>{t("home.featured.card2Title")}</h4>
                    <p>{t("home.featured.card2Desc")}</p>
                    <Link to={"/services/networking-security"} className="featured-btn">
                      {t("home.featured.cardBtn")}
                    </Link>
                  </div>
                </li>
                <li className="featured-card">
                  <div className="featured-img">
                    <img src={featured3} alt="featured-img" />
                  </div>
                  <div className="featured-content">
                    <h4>{t("home.featured.card3Title")}</h4>
                    <p>{t("home.featured.card3Desc")}</p>
                    <Link to={"/services/integration"} className="featured-btn">
                      {t("home.featured.cardBtn")}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>

      <Fade bottom>
        <div className="explore-section">
          <FixedLogo className="fixed-logo" />
          <video loop autoPlay muted>
            <source src={exploreVideo} type="video/mp4" />
          </video>
          <div className="content">
            <div className="container">
              <h1>
                <ReactTyped
                  className="typed"
                  strings={[
                    t("home.background.title1"),
                    t("home.background.title2"),
                  ]}
                  backDelay={5000}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </h1>
              <p>{t("home.background.desc")}</p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="testimonials-section">
          <FixedLogo className="fixed-logo fixed-right" />
          <div className="container">
            <h2 className="title">{t("home.testimonials.title")}</h2>
            <p className="desc">{t("home.testimonials.desc")}</p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay
              navigation
              loop={true}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, FreeMode, Pagination]}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <div className="swiper-card">
                  <img src={profile} alt="testimonial" />
                  <h4>{t("home.testimonials.card1Title")}</h4>
                  <p>{t("home.testimonials.card1Desc")}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <img src={profile} alt="testimonial" />
                  <h4>{t("home.testimonials.card2Title")}</h4>
                  <p>{t("home.testimonials.card2Desc")}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-card">
                  <img src={profile} alt="testimonial" />
                  <h4>{t("home.testimonials.card3Title")}</h4>
                  <p>{t("home.testimonials.card3Desc")}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <ContactForm />
      </Fade>
    </div>
  );
}
