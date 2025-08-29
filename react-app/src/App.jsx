import { Routes, Route } from "react-router";
import { CaseStudyPage } from "./components/CaseStudyPage.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";

export default function App(props) {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/case-study/:id" element={<CaseStudyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
