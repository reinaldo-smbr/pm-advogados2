import Link from "next/link";
export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/about/just_01.webp"
                    
                  />
                  <div className="about-one__experience-text">
                    <p>12</p>
                  </div>
                  <div className="about-one__img-box">
                    <div className="about-one__img-2">
                      <img
                        src="assets/images/home/img_pm_advogados_02.webp"
                      /> 
                      <div className="about-one__shape-1" />
                    </div>
                  </div>
                  <div className="about-one__project-complete">
                    <div className="about-one__count count-box">
                      <h3 className="count-text">15</h3>
                      <span>+</span>
                    </div>
                    <p className="about-one__count-text">
                      Anos de
                      <br /> Atuação
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">                  
                  </div>
                  <h2 className="section-title__title">
                    Experiência jurídica para diferentes necessidades
                  </h2>
                </div>
                <p className="about-one__text">
                  Fundada pelos sócios José Maria Possidonio de Souza e Thiago Rodrigues Migliavacca, com formações acadêmicas em Universidades de renomada qualificação, agregando larga experiência jurídica e contábil,
com o desenvolvimento profissional.
                </p>
                <div className="about-one__it-solution">
                  <div className="about-one__it-solution-img">
                    <img
                      src="assets/images/home/selo_dedicacao_pm_advogados.png"               
                    />
                  </div>
                  <div className="about-one__it-solution-content">
                    <p>
                      Atendimento dedicado e ajustado de acordo com cada caso
                    </p>
                  </div>
                </div>
                <div className="about-one__btn-and-contact">
                  <div className="about-one__btn-box">
                    <Link href="about" className="about-one__btn thm-btn">
                      Fale Conosco
                      <span className="fa fa-plus" />
                    </Link>
                  </div>
                  <div className="about-one__contact-box">
                    <div className="about-one__contact-icon">
                      <span className="fab fa-whatsapp" />
                    </div>
                    <div className="about-one__contact">
                      <span>ligue agora</span>
                      <p>
                        <Link  href="https://wa.me/5521998998306?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.">+55(21)99899-8306</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
