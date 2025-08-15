import { useState, useEffect } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

// useEffect(() => {
//   import(`../data/caseStudies/${id}.json`)
//     .then((module) => setData(module.default))
//     .catch((err) => console.error("Error loading JSON:", err));
// }, [id]);

export function CaseStudyPage(props) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    import(`../data/viata-onboarding.json`)
      .then((module) => setProjectData(module.default))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <CaseStudyBanner
          title={projectData.title}
          subtitle={projectData.subtitle}
          img={projectData.img}
        />
        <CaseStudyInfoTable infoTable={projectData.infoTable} />
        <CaseStudyContent sections={projectData.sections} />
      </main>
      <Footer />
    </div>
  );
}

function CaseStudyBanner({ title, subtitle, img }) {
  return (
    <section className="case-study-banner">
      <img
        className="case-study-banner-image"
        src={img}
        alt="Viata Onboarding Form Redesign"
      />
      <div className="case-study-banner-text">
        <h1 className="case-study-title">{title}</h1>
        <div className="case-study-subtitle">{subtitle}</div>
      </div>
    </section>
  );
}

function CaseStudyInfoTable({ infoTable }) {
  const infoTableXML = infoTable.map((row, index) => (
    <tr key={index}>
      <td className="label">{row.label}</td>
      <td className="value">{row.value}</td>
    </tr>
  ));

  return (
    <div className="case-study-info">
      <table className="info-table">
        <tbody>{infoTableXML}</tbody>
      </table>
    </div>
  );
}

function CaseStudyContent({ sections }) {
  const sectionComponents = sections.map((section, index) => {
    return <CaseStudySection key={index} {...section} />;
  });

  return (
    <section className="case-study-content">
      <div className="case-study-container">{sectionComponents}</div>
    </section>
  );
}

function CaseStudySection({ subSections, sectionTitle }) {
  const subSectionComponents = subSections ? (
    subSections.map((subSection, index) => {
      return <CaseStudySubsection key={index} {...subSection} />;
    })
  ) : (
    <div></div>
  );
  return (
    <div className="case-study-section">
      <div className="section-title">{sectionTitle}</div>
      {subSectionComponents}
    </div>
  );
}

function CaseStudySubsection({ subtitle, content }) {
  return (
    <div className="case-study-subsection">
      <div className="section-subtitle">{subtitle}</div>
      <ContentRenderer content={content} />
    </div>
  );
}

function ContentRenderer({ content }) {
  if (!content) return null;

  return content.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return <Paragraph key={index} text={item.text} />;

      case "bulletedList":
        return <BulletedList key={index} bullets={item.bullets} />;

      default:
        return <div>ERR: failed to render content of type: {item.type}</div>;
    }
  });
}

function Paragraph({ text }) {
  return (
    <div>
      <div>{text}</div>
      <br />
    </div>
  );
}

function BulletedList({ bullets }) {
  const listItems = bullets.map((bullet, index) => (
    <li key={index}>{bullet}</li>
  ));
  return <ul>{listItems}</ul>;
}

// function ImageCarousel() {
//   return (
//     <div className="container mt-5">
//       <div
//         id="customCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="img/OldForm1.png"
//               className="d-block w-100"
//               alt="Slide 1"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="img/OldForm2.png"
//               className="d-block w-100"
//               alt="Slide 2"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="img/OldForm3.png"
//               className="d-block w-100"
//               alt="Slide 3"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="img/OldForm4.png"
//               className="d-block w-100"
//               alt="Slide 4"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="img/OldForm5.png"
//               className="d-block w-100"
//               alt="Slide 5"
//             />
//           </div>
//         </div>

//         <div className="carousel-indicators mt-3">
//           <button
//             type="button"
//             data-bs-target="#customCarousel"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           >
//             1
//           </button>
//           <button
//             type="button"
//             data-bs-target="#customCarousel"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           >
//             2
//           </button>
//           <button
//             type="button"
//             data-bs-target="#customCarousel"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           >
//             3
//           </button>
//           <button
//             type="button"
//             data-bs-target="#customCarousel"
//             data-bs-slide-to="3"
//             aria-label="Slide 4"
//           >
//             4
//           </button>
//           <button
//             type="button"
//             data-bs-target="#customCarousel"
//             data-bs-slide-to="4"
//             aria-label="Slide 5"
//           >
//             5
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
