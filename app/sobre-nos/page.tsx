"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 0,

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
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
    1350: {
      slidesPerView: 6,
    },
  },
};
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Experiência jurídica aliada a uma visão multidisciplinar">
           {/*experiência jurídica inicio */}
        <section className="team-details">
            <div className="team-details__shape-1 float-bob-y">
            <img src="assets/images/shapes/team-details-shape-1.png"  />
            </div>
            <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                    <div className="team-details__img">
                    <img src="assets/images/team/team-details-img-1.jpg"  />
                    </div>
                </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                    <h3 className="team-details__title">Gestão de Negócios e Consultores Jurídicos</h3>
                    <p className="team-details__text">
                    A Possidonio & Migliavacca é um escritório de advocacia e consultoria que atua na orientação e acompanhamento de questões jurídicas, oferecendo atendimento individualizado e soluções adequadas às necessidades de cada cliente.
                    </p>
                    <p className="team-details__text">
                    Fundado pelos sócios José Maria Possidonio de Souza e Thiago Rodrigues Migliavacca, o escritório reúne experiência nas áreas jurídica e contábil, proporcionando uma visão ampla para a análise de diferentes situações.
                    </p>
                    <p className="team-details__text">
                    Nossa atuação é baseada em conhecimento técnico, experiência profissional, comunicação clara e compreensão das particularidades de cada demanda.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*experiência juridica fim */}

       {/*conhecimento juridico inicio */}
        <section className="team-details">
            <div className="team-details__shape-1 float-bob-y">
            </div>
            <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                    <h3 className="team-details__title">Conhecimento jurídico e contábil</h3>
                    <p className="team-details__text">
                    A formação multidisciplinar dos sócios é um dos diferenciais da Possidonio & Migliavacca.
                    </p>
                    <p className="team-details__text">
                    A combinação entre conhecimentos jurídicos e contábeis permite uma análise mais abrangente de situações que envolvam patrimônio, contratos, relações civis, questões empresariais e outros aspectos que podem ultrapassar os limites de uma única área profissional.
                    </p>
                    <p className="team-details__text">
                    Além dos sócios, o escritório conta com advogados, consultores jurídicos, fiscais e contábeis, formando uma equipe preparada para atender diferentes necessidades.
                    </p>
                </div>
                </div>
                 <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                    <div className="team-details__img">
                    <img src="assets/images/team/team-details-img-1.jpg"  />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Tconhecimento juridico fim */}



        {/*Services Four Start*/}
        <section className="services-four">
          <div
            className="services-four__bg"
           
          />
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  
                </div>
                <p className="team-details__title color-black-0" >
                                    
                  
                  Uma atuação próxima e individualizada</p>
              </div>
              <p className="services-four__text margin-top-10" >Entendemos que cada pessoa, empresa ou situação possui características próprias.
Por isso, nosso trabalho começa pela compreensão do contexto apresentado pelo cliente, seguida da análise dos documentos e aspectos jurídicos envolvidos.
A partir dessa avaliação, buscamos apresentar informações claras sobre a situação e os caminhos jurídicos possíveis.
</p>
            </div>
            <div className="row">
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-web-page" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Análise <br />Individualizada
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Cada demanda é avaliada considerando suas características e particularidades.
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-money" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Conhecimento <br /> Técnico
                    </Link>
                  </h3>
                  <p className="services-four__text">
                   Atuação baseada na legislação aplicável e na experiência profissional da equipe.
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-content-management-1" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Visão <br /> Multidisciplinar
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Integração de conhecimentos jurídicos, contábeis e fiscais quando necessário.
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-project-management" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Comunicação <br /> Clara
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Informações objetivas para que o cliente compreenda sua situação jurídica
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
            </div>
          </div>
        </section>
        {/*Services Four End*/}

  



        {/*Blog One Start*/}
        <section className="blog-one">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">Our Blog</p>
              </div>
              <h2 className="section-title__title">
                Latest Articles &amp; Blogs
              </h2>
            </div>
            <div className="row">
              {/*Blog One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-1.jpg"  />
                    </div>
                    <div className="blog-one__date">
                      <p>
                        20
                        <br /> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <p>
                          <span className="fa fa-user" />
                          Admin
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-comments" />
                          02 Comment
                        </p>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href="blog-details">
                        Easy Yo Use our Software New Innovation
                      </Link>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__btn">
                      <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog One Single End*/}
              {/*Blog One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-2.jpg"  />
                    </div>
                    <div className="blog-one__date">
                      <p>
                        20
                        <br /> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <p>
                          <span className="fa fa-user" />
                          Admin
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-comments" />
                          02 Comment
                        </p>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href="blog-details">
                        Ipsum is simply is text used by copytyping
                      </Link>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__btn">
                      <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog One Single End*/}
              {/*Blog One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-3.jpg"  />
                    </div>
                    <div className="blog-one__date">
                      <p>
                        20
                        <br /> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <p>
                          <span className="fa fa-user" />
                          Admin
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-comments" />
                          02 Comment
                        </p>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href="blog-details">
                        Simply is text used by copytyping refreshing.
                      </Link>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__btn">
                      <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog One Single End*/}
            </div>
          </div>
        </section>
        {/*Blog One End*/}

      </Layout>
    </>
  );
}
