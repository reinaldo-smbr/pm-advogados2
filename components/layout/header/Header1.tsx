import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    return (
        <>

        <header className="main-header">
            <div className="main-header__top">
            <div className="main-header__top-inner">
                <ul className="list-unstyled main-header__contact-list">
                <li>
                    <div className="icon">
                    <i className="fas fa-map-marker" />
                    </div>
                    <div className="text">
                    <p>Rua México, 119 - Grupo 502 - Centro Rio de janeiro - RJ</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <i className="fas fa-envelope" />
                    </div>
                    <div className="text">
                    <p>
                        <Link href="mailto:contato@pmadvogados.adv.br">contato@pmadvogados.adv.br</Link>
                    </p>
                    </div>
                </li>
                </ul>
            </div>
            </div>
            <nav className="main-menu">
            <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                    <div className="main-menu__logo">
                    <Link href="/">
                        <img src="assets/images/resources/logo-1.png"  />
                    </Link>
                    </div>
                    <div className="main-menu__main-menu-box">
                    <Link onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                        <i className="fa fa-bars" />
                    </Link>
                    <Menu/>
                    </div>
                </div>
                <div className="main-menu__right">
                    <div className="main-menu__btn-box">
                    <Link href="https://wa.me/5521998998306?text=Olá,%20preciso%20de%20ajuda%20com%20questões%20trabalhistas/previdenciárias" className="main-menu__btn">
                        (21) 99899-8306 <i className="fab fa-whatsapp" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
            <div className="main-menu__wrapper">
                <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                    <div className="main-menu__logo">
                    <Link href="/">
                        <img src="assets/images/resources/logo-1.png"  />
                    </Link>
                    </div>
                    <div className="main-menu__main-menu-box">
                    <Link href="#" className="mobile-nav__toggler">
                        <i className="fa fa-bars" />
                    </Link>
                    <Menu/>
                    </div>
                </div>
                <div className="main-menu__right">
                    <div className="main-menu__btn-box">
                    <Link href="https://wa.me/5521998998306?text=Olá,%20preciso%20de%20ajuda%20com%20questões%20trabalhistas/previdenciárias" className="main-menu__btn">
                        (21) 99899-8306 <i className="fab fa-whatsapp" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            </div>
            
        </div>
        {/* /.stricky-header */}




        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
