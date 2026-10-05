"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 5,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
    },
  },
};
export default function Brands() {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-one">
         <div className="section-title text-center">
            <div className="section-title__tagline-box">             
            </div>
            <h2 className="section-title__title">
              Nossos Clientes
            </h2>
          </div>
        <div className="brand-one__inner">
          <Swiper
            {...swiperOptions}
            className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/home/teclift.webp"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/home/riolab_logo.webp"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/home/sanenco_logo.webp"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/home/thidel.webp"  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* If we need navigation buttons */}
        </div>
      </section>
      {/*Brand One End*/}
    </>
  );
}
