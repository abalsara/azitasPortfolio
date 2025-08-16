import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function CaseStudyPage(props) {
  const [projectData, setProjectData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    import(`../data/${id}.json`)
      .then((module) => setProjectData(module.default))
      .catch((err) => console.error("Error loading JSON:", err));
  }, [id]);

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
      <img className="case-study-banner-image" src={img} />
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

      case "imageCarousel":
        return <ImageCarousel key={index} imgUrls={item.imgUrls} />;

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
  return (
    <div>
      <ul>{listItems}</ul>
      <br />
    </div>
  );
}

function ImageCarousel({ imgUrls }) {
  const carouselImages = CarouselImages({ imgUrls });
  let carouselButtons = CarouselButtons({ count: imgUrls.length });

  return (
    <div className="container mt-5">
      <div
        id="customCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {carouselImages}
        {carouselButtons}
      </div>
    </div>
  );
}

const CarouselImages = ({ imgUrls }) => {
  const carouselImages = imgUrls.map((url, index) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
      <img src={url} className="d-block w-100" alt={`Slide ${index}`} />
    </div>
  ));
  return <div className="carousel-inner">{carouselImages}</div>;
};

const CarouselButtons = ({ count }) => {
  return (
    <div className="carousel-indicators mt-3">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide-to={i}
          className={i === 0 ? "active" : ""}
          aria-current={i === 0 ? "true" : undefined}
          aria-label={`Slide ${i + 1}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
