import Link from "next/link"
export default function Footer1() {
    return (
        <>
           
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div
            className="site-footer__bg"
            style={{
                backgroundImage: "url(assets/images/footer/rodape01.webp)"
            }}
            ></div>
            <div className="site-footer__top">
            <div className="container">
                <div className="row">
                <div
                    className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                >
                    <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">About</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Causes</Link>
                        </li>
                        <li>
                        <Link href="about">About Us</Link>
                        </li>
                        <li>
                        <Link href="about">New Campaign</Link>
                        </li>
                        <li>
                        <Link href="about">Site Map</Link>
                        </li>
                        <li>
                        <Link href="about">New Events</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                
                <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                >
                    <div className="footer-widget__column footer-widget__links">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Areas de Atuação</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Direito do consumidor</Link>
                        </li>
                        <li>
                        <Link href="blog">Inventário - Judicial ou Extrajudicial</Link>
                        </li>
                        <li>
                        <Link href="services">Direito securitário</Link>
                        </li>
                        <li>
                        <Link href="about">Direito imobiliário</Link>
                        </li>
                        <li>
                        <Link href="about">Direito Civil</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                >
                    <div className="footer-widget__column footer-widget__blog">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Institucional</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Sobre Nós</Link>
                        </li>
                        <li>
                        <Link href="about">Estrutura</Link>
                        </li>
                        <li>
                        <Link href="about">Notícias</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="500ms"
                >
                    <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Contato</h3>
                    </div>
                    <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                        <p>Rua México, 119 -Grupo 502<br></br>
                        Centro - Rio de Janeiro - RJ<br></br>
                        CEP: 20031-144</p>
                        </li>
                        <li>
                        <Link href="mailto:p_madvogados@hotmail.com">p_madvogados@hotmail.com</Link>
                        </li>
                        <li>
                        <Link href="mailto:contato@pmadvogados.adv.br">contato@pmadvogados.adv.br</Link>
                        </li>
                        <li>
                        <Link href="tel:552131783034">(21) 3178-3034</Link>
                        </li>
                    </ul>
                    <div className="footer-widget__social">
                        <Link href="https://wa.me/5521998998306">
                        <span className="fab fa-whatsapp" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="site-footer__bottom">
            <div className="container">
                <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Possidonio & Migliavacca - Todos os direitos reservados.
                </p>
                <ul className="list-unstyled site-footer__bottom-links">
                    <li>
                    <Link href="https://www.agenciamaisresultado.com.br/" target="_blank">Desenvolvido pela Agência Mais Resultado. Empresa de Marketing Digital</Link>
                    </li>                   
                </ul>
                </div>
            </div>
            </div>
        </footer>
        {/*Site Footer End*/}
        
        </>
    )
}
