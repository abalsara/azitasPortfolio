import { Header } from "./Header.jsx";
import { HeroSection } from "./HeroSection.jsx";
import { ProjectsSection } from "./Projects.jsx";
import { Footer } from "./Footer.jsx";

export function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
