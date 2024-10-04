import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Logo from "../components/Logo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <header className="header">
        <Logo />
        <nav className="nav">
          <Link href={"/#home-section"} scroll={true} className="navOption">
            Home
          </Link>

          <Link href={"/#coaches-section"} scroll={false} className="navOption">
            Mentor
          </Link>
          <Link
            href={"/#material-section"}
            scroll={false}
            className="navOption"
          >
            Material
          </Link>
          <Link
            href={"/#partners-section"}
            scroll={false}
            className="navOption"
          >
            Partners
          </Link>
        </nav>
      </header>

      <footer className="footer">With 🤍 from Berlin</footer>
    </>
  );
}
