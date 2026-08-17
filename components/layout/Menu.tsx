import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li className="dropdown">
          <Link href="#">Sobre nós</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/sobre-nos">Estrutura</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Áreas de Atuação</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/direito-trabalhista">Direito Trabalhista</Link>
            </li>
            <li>
              <Link href="/direito-previdenciario">Direito Previdenciário</Link>
            </li>
            <li>
              <Link href="/servicos/direito-trabalhista">Direito Previdenciário</Link>
            </li>
          </ul>      
        </li> 
        <li>
          <Link href="noticias">Notícias</Link>
        </li>
        <li>
          <Link href="contact">Fale Conosco</Link>
        </li>
      </ul>
    </>
  );
}
