
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import breadcrumb_contato from "@/components/layout/Breadcrumb_contato"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Fale Conosco">
     
            {/*Google Map Start*/}
            <section className="google-map-one">
                <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1747070512943!2d-43.17871212551449!3d-22.906926037874484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6075bea2e1%3A0x2d8ac172cc816402!2sPossidonio%20%26%20Migliavacca%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1793813571332!5m2!1spt-BR!2sbr"
                    className="google-map__one"
                    allowFullScreen=""
                />
                </div>
            </section>
            {/*Google Map End*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                    <div className="contact-page__left">
                        <h3 className="contact-page__title">Canais de atendimento</h3>
                        <ul className="contact-page__points list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-location" />
                            </div>
                            <div className="content">
                            <h3>Endereço</h3>
                            <p>
                                Rua México, 119 - Grupo 502<br /> Centro - Rio de Janeiro
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <span className="icon-telephone" />
                            </div>
                            <div className="content">
                            <h3>Telefone</h3>
                            <p>
                                <Link href="https://wa.me/552199898306?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"> (21) 9989-8306</Link>
                            </p>
                            <p>
                                <Link href="tel:552131783034">(21) 3178-3034 </Link>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <span className="icon-open-mail" />
                            </div>
                            <div className="content">
                            <h3>Emails</h3>
                            <p>
                                <Link href="mailto:p_madvogados@hotmail.com">
                                p_madvogados@hotmail.com
                                </Link>
                            </p>
                            <p>
                                <Link href="mailto:contato@pmadvogados.adv.br">
                                contato@pmadvogados.adv.br
                                </Link>
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                    <div className="contact-page__right">
                        <div className="contact-page__form-box">
                        <form
                            action="assets/inc/sendemail.php"
                            className="contact-page__form contact-form-validated"
                            noValidate="novalidate"
                        >
                            <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Nome Completo" name="name" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Telefone" name="phone" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Assunto" name="Subject" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-page__input-box text-message-box">
                                <textarea
                                    name="message"
                                    placeholder="Mensagem"
                                    defaultValue={""}
                                />
                                </div>
                                <div className="contact-page__btn-box">
                                <button type="submit" className="contact-page__btn">
                                    Enviar<span>+</span>
                                </button>
                                </div>
                            </div>
                            </div>
                        </form>
                        <div className="result" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*Contact Page End*/}
            

        </Layout>
        </>
    )
}