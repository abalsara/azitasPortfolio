import { Routes, Route } from "react-router";
import { CaseStudyPage } from "./components/CaseStudyPage.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { GalleryPage } from "./components/GalleryPage.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";

export default function App(props) {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/case-study/:id" element={<CaseStudyPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
