'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import Blog from "@/components/sections/home1/Blog"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
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
    }



}
export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Experiência jurídica para diferentes necessidades">

        {/*Services Four Start*/}
        <section className="services-four services-five margin-top-estrutura">
            <div
            className="services-four__bg"
            style={{
                backgroundImage: "url(assets/images/backgrounds/services-four-bg.png)"
            }}
            />
            <div className="container">
            <div className="section-title text-center">
                <h2 className="section-title__title">Nossa Estrutura</h2>
                 <p className="services-four__text margin-top-10" >O escritório está localizado no Centro do Rio de Janeiro, em uma região estratégica e próxima aos Tribunais, oferecendo estrutura para atendimento aos clientes.
Também contamos com recursos tecnológicos voltados ao acompanhamento e gerenciamento das demandas, permitindo maior organização das informações e comunicação com os clientes.
<br />A tecnologia é utilizada como ferramenta de apoio à prestação dos serviços, contribuindo para um acompanhamento mais eficiente dos processos e das informações relacionadas a cada demanda.
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
                        Speed <br /> Optimization
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
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
                        Digital <br /> Marketing
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
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
                        Content <br /> Management
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
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
                        Content <br /> Marketing
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
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

        <section>
             <Cta/>
        </section>
       {/*Team Details Start */}
        <section className="team-details">
            <div className="team-details__shape-1 float-bob-y">
            <img src="assets/images/shapes/team-details-shape-1.png"  />
            </div>
            <div className="container">
                <div className="section-title text-center">
                <h2 className="section-title__title">Os Sócios</h2>
                </div>
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                    <div className="team-details__img">
                    <img src="assets/images/team/team-details-img-1.jpg"  />
                    <div className="team-details__content">
                        <h3>Robbie B Minick</h3>
                        <p>Senior Designer</p>
                    </div>
                    <div className="team-details__social-box">
                        <ul className="list-unstyled team-details__social">
                        <li>
                            <Link href="#">
                            <i className="fab fa-facebook-f" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-pinterest-p" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-linkedin-in" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fas fa-share-alt" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                    <h3 className="team-details__title">José Maria Possidonio de Souza</h3>
                    
                    <ul className="team-details__points list-unstyled margin-top-10">
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Advogado, Economista e Contador
                        </p>
                        </div>
                    </li>
                    <li>
                         
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Pós-graduado em Engenharia Econômica na Gama Filho
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Pós-graduação em Direito Tributário na Cândido Mendes
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Especialização em Auditoria na Drasser Corporation – Dallas – EUA
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                           Praticas Processuais Trabalhistas na Viveiros
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Treinamento e Consultoria
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Auditoria na Fundação Getúlio Vargas
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Perito Contábil do Tribunal de Justiça do Rio de Janeiro
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate eu
                            fugiat nulla
                        </p>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                </div>
            </div>
            <div className="row margin-top-10">
                <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                    <div className="team-details__img">
                    <img src="assets/images/team/team-details-img-1.jpg"  />
                    <div className="team-details__content">
                        <h3>Robbie B Minick</h3>
                        <p>Senior Designer</p>
                    </div>
                    <div className="team-details__social-box">
                        <ul className="list-unstyled team-details__social">
                        <li>
                            <Link href="#">
                            <i className="fab fa-facebook-f" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-pinterest-p" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fab fa-linkedin-in" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fas fa-share-alt" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                    <h3 className="team-details__title">Thiago Rodrigues Migliavacca</h3>
                    
                    <ul className="team-details__points list-unstyled margin-top-10">
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Advogado e Contador
                        </p>
                        </div>
                    </li>
                    <li>
                         
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Bacharel em Direito pela Pontífica Univ. Católica do Rio de Janeiro
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                           Pós Graduação em Direito Tibutário na Univ. Cândido Mendes
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Extensão em Direito Processual Civil na Univ. Cândido Mendes
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                           Práticas Processuais Trabalhistas na Viveiros
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Treinamento e Consultoria
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Treinamento e Consultoria
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Aperfeiçoamento em Direito na Utah State University – EUA
                        </p>
                        </div>
                    </li>
                     <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Bacharel Ciências Contábeis na Univ. Cândido Mendes
                        </p>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Team Details End */}

            <section>
                <Blog/>
            </section>
       

        </Layout>
        </>
    )
}