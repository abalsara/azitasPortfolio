import { Header } from "./Header.jsx";
import { HeroSection } from "./HeroSection.jsx";
import { ProjectsSection } from "./Projects.jsx";
import { CallToAction, Footer } from "./Footer.jsx";

export function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
