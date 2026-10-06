"use client";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Main Sllider Start */}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          <SwiperSlide>
            <div className="item main-slider__slide-1">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/banner-home/banner-01.webp)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                <img
                 // src="assets/images/shapes/main-slider-shape-2.png"
                  
                />
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img
                 // src="assets/images/shapes/main-slider-shape-3.png"
                  
                />
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">  
                    Assessoria jurídica para pessoas e empresas                 
                  </p>
                  <h2 className="main-slider__title">
                    Experiência, estratégia e atendimento próximo
                  </h2>
                  <p className="main-slider__text">
                    Atuação baseada em conhecimento técnico, <br />
                    análise individualizada e segurança jurídica.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="about" className="thm-btn main-slider__btn">
                      Fale Conosco
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider__slide-2">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/banner-home/banner-02.webp)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Preparados para compreender o seu caso
                  </p>
                  <h2 className="main-slider__title">
                    Digital Solution <br /> Business
                  </h2>
                  <p className="main-slider__text">
                    We're Best Consultant Agency In Market
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="about" className="thm-btn main-slider__btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider__slide-3">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/banner-home/banner-03.webp)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  //src="assets/images/shapes/main-slider-shape-2.png"
                  
                />
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img
                  //src="assets/images/shapes/main-slider-shape-3.png"
                  
                />
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Modern I Business I Consultan
                  </p>
                  <h2 className="main-slider__title">
                    Digital Solution <br /> Business
                  </h2>
                  <p className="main-slider__text">
                    We're Best Consultant Agency In Market
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="about" className="thm-btn main-slider__btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/*Main Sllider Start */}
    </>
  );
}
