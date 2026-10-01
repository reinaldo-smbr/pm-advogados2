"use client";
import { useState } from "react";
export default function Faq() {
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
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    Experiência jurídica para diferentes necessidades
                  </h2>
                </div>
                <p className="faq-one__text">
                  Cada questão jurídica possui suas particularidades. Por isso, nosso atendimento começa pela compreensão detalhada do caso e pela análise dos aspectos legais envolvidos.< br/><br/>
                  Atuamos em diferentes áreas do Direito, oferecendo orientação e acompanhamento jurídico de acordo com as necessidades de cada cliente.
                </p>
                <div className="faq-one__img-and-system">
                  <div className="faq-one__img">
                    <img src="assets/images/resources/faq-one-img.jpg"  />
                  </div>
                  <div className="faq-one__system">
                    <h3 className="faq-one__system-title">
                      Optimize It System
                    </h3>
                    <p className="faq-one__system-text">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum
                    </p>
                    <div className="faq-one__system-points">
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>The Perfect Business Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion"
                >
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>Direito do Consumidor</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Orientação e atuação em questões relacionadas às relações de consumo, incluindo problemas com produtos e serviços, cobranças indevidas, negativação indevida e outras situações previstas na legislação consumerista.
                        </p>
                        <div className="faq-one__system-text thm-btn"> Saiba Mais </div>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>Direito Civil</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Assessoria jurídica para questões relacionadas às relações civis, contratos, obrigações e demais situações que envolvam direitos e responsabilidades entre pessoas físicas e jurídicas.
                        </p>
                        <div className="faq-one__system-text thm-btn"> Saiba Mais </div>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>Direito Imobiliário</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Orientação jurídica em questões relacionadas a imóveis, contratos de compra e venda, locações, análise contratual e outras relações imobiliárias.
                        </p>
                        <div className="faq-one__system-text thm-btn"> Saiba Mais </div>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>
                        Direito Securitário
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Atuação em questões relacionadas a contratos de seguro, incluindo seguros de veículos, seguros de vida, cobertura para doenças graves e outros tipos de proteção securitária.
                        </p>
                        <div className="faq-one__system-text thm-btn"> Saiba Mais </div>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                       <div
                    className={
                      isActive.key == 5 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(5)}
                  >
                    <div className="accrodion-title">
                      <h4>
                        Inventário Judicial e Extrajudicial
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Orientação jurídica para a organização e condução de inventários, considerando as características de cada família e a possibilidade de realização pela via judicial ou extrajudicial, quando cabível.</p>
                        <div className="faq-one__system-text thm-btn"> Saiba Mais </div>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ One End*/}
    </>
  );
}
