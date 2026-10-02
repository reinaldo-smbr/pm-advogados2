export default function Benefit() {
  return (
    <>
      {/*Benefits One Start*/}
      <section className="benefits-one">
        <div className="benefits-one__shape-1">
          <div
            className="benefits-one__shape-bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/benefits-one-shape-bg.png)",
            }}
          />
        </div>
        <div
          className="benefits-one__bg-one"
          style={{
            backgroundImage:
              "url(assets/images/home/backfull_01.webp)",
          }}
        />
        <div className="benefits-one__overly" />
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="benefits-one__left">
                <div
                  className="benefits-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/home/img_pm_advogados_03.webp"                   
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="benefits-one__right">
                <div className="section-title text-left">
                  <h2 className="section-title__title">
                    Um escritório preparado para compreender o seu caso
                  </h2>
                </div>
                <p className="benefits-one__text">
                  A atuação jurídica exige mais do que conhecimento das normas. É necessário compreender o contexto, analisar documentos, identificar possibilidades e orientar o cliente de maneira clara.
               <br /><br />A Possidonio & Migliavacca foi fundada pelos sócios José Maria Possidonio de Souza e Thiago Rodrigues Migliavacca, profissionais com formação nas áreas jurídica e contábil e experiência acumulada ao longo de suas trajetórias profissionais.
                <br /><br />O escritório conta ainda com profissionais e consultores que contribuem para uma atuação multidisciplinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Benefits One End*/}
    </>
  );
}
