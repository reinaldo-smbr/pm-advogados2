import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="sobre-nos">Sobre nós</Link>
          <ul className="sub-menu">
            <li>
              <Link href="estrutura">Estrutura</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="atuacao">Áreas de Atuação</Link>
          <ul className="sub-menu">
            <li>
              <Link href="direito-do-consumidor">Direito do consumidor</Link>
            </li>
            <li>
              <Link href="inventario-judicial-ou-extrajudicial">Inventário - Judicial ou Extrajudicial</Link>
            </li>
            <li>
              <Link href="direito-securitario">Direito securitário</Link>
            </li>
            <li>
              <Link href="direito-civil">Direito Civil</Link>
            </li>
          </ul>      
        </li> 
        <li>
          <Link href="blog">Notícias</Link>
        </li>
        <li>
          <Link href="contato">Fale Conosco</Link>
        </li>
      </ul>
    </>
  );
}
