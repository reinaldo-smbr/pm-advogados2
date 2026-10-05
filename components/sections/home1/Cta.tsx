import Link from "next/link";
export default function Cta() {
  return (
    <>
      {/*CTA One Start*/}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner wow fadeInUp" data-wow-delay="300ms">
            <h3 className="cta-one__title">Fale com o nosso escritório</h3>
           <Link href="https://wa.me/5521998998306">
            <div className="cta-one__icon">
              <span className="icon-phone" />
            </div>
            </Link>
            <div className="cta-one__content">
              <p className="cta-one__text">Agende uma conversa</p>
              <p className="cta-one__number">
                <Link href="https://wa.me/5521998998306">+ 55 (21) 99899-8306</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*CTA One End*/}
    </>
  );
}
