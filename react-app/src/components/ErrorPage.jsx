import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function ErrorPage(props) {
  return (
    <div>
      <Header />
      <main class="placeholder-page">Page Not Found</main>
      <Footer />
    </div>
  );
}
