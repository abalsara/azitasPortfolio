import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { Header } from "./Header.jsx";
import { CallToAction, Footer } from "./Footer.jsx";

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
    <div className="case-study-page">
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
      <CallToAction />
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
      <td className="value">
        <ReactMarkdown>{row.value}</ReactMarkdown>
      </td>
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
  const contentArray = Array.isArray(content) ? content : [content];

  return contentArray.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return <Paragraph key={index} text={item.text} />;

      case "bulletedList":
        return <BulletedList key={index} bullets={item.bullets} />;

      case "imageCarousel":
        return <ImageCarousel key={index} imgUrls={item.imgUrls} />;

      case "cardList":
        return <CardList key={index} cards={item.cards} />;

      default:
        return (
          <div>
            <strong>
              Error: failed to render content of type: {item.type}
            </strong>
          </div>
        );
    }
  });
}

function Paragraph({ text }) {
  return <ReactMarkdown>{text}</ReactMarkdown>;
}

function BulletedList({ bullets }) {
  const listItems = bullets.map((bullet, index) => (
    <li key={index}>
      <ReactMarkdown>{bullet}</ReactMarkdown>
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
      <br />
    </div>
  );
}

function ImageCarousel({ imgUrls }) {
  const carouselId = `carousel-${Math.random().toString(36)}`;
  const carouselImages = CarouselImages({ imgUrls });
  let carouselButtons = CarouselButtons({
    count: imgUrls.length,
    carouselId: carouselId,
  });

  return (
    <div className="breakout-wrapper">
      <div id={carouselId} className="carousel">
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

const CarouselButtons = ({ count, carouselId }) => {
  return (
    <div className="carousel-indicators mt-3">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          data-bs-target={`#${carouselId}`}
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

function CardList({ cards = [] }) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="card-list-item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {card.label && <div className="card-list-label">{card.label}</div>}
          <h3 className="card-list-title">
            <ReactMarkdown>{card.title}</ReactMarkdown>
          </h3>
          <div className="card-list-body">
            <ReactMarkdown>{card.body}</ReactMarkdown>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
