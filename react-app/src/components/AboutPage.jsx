import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function AboutPage(props) {
  return (
    <div>
      <Header />
      <main className="placeholder-page">About Azita (coming soon)</main>
      <a
        href="Resume_Balsara_6_30_25.pdf"
        className="nav-link d-inline me-3 header-small"
        target="_blank"
      >
        Resume
      </a>
      <Footer />
    </div>
  );
}
