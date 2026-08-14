import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Inicio </Link>
        </li>
        <li>
          <Link href="about">Sobre nós</Link>
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
          <Link href="about">Estrutura</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Blog</Link>
          <ul className="sub-menu">
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="blog-details">Blog details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact">Fale conosco</Link>
        </li>
      </ul>
    </>
  );
}
