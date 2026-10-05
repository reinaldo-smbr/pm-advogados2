import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog One Start*/}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">             
            </div>
            <h2 className="section-title__title">
              Últimas Notícias
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
                    <img src="assets/images/blog/blog-01.webp"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> Abr
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Negativação indevida: o que fazer e quais são os direitos do consumidor?
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Teve o nome negativado indevidamente? Entenda seus direitos, o que fazer e quando procurar um advogado especializado em Direito do Consumidor.

                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Continue a ler
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
                    <img src="assets/images/blog/blog-02.webp"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> Mai
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      IInventário judicial ou extrajudicial: qual escolher e como funciona?
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Entenda a diferença entre inventário judicial e extrajudicial, quando cada modalidade pode ser utilizada e por que contar com orientação jurídica.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Continue a ler
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
                    <img src="assets/images/blog/blog-03.webp"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> Ago
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                     Seguro negado: o que fazer quando a seguradora recusa o pagamento?
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                   A seguradora negou seu pedido de indenização? Entenda o que pode ser analisado e quando procurar orientação jurídica.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Continue a ler
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
    </>
  );
}
