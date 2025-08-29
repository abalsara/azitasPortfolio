import { useState, useEffect } from "react";

export function HeroSection(props) {
  const images = [
    "/img/clear2nbg.png", // first image
    "/img/clear1nbg.png", // second image
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Animate to second image after 1 second
    const timeout1 = setTimeout(() => setCurrentImage(1), 1500);
    // Animate back to first image after 3 seconds
    const timeout2 = setTimeout(() => setCurrentImage(0), 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleMouseEnter = () => setCurrentImage(1);
  const handleMouseLeave = () => setCurrentImage(0);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-12 mb-4 mb-md-0">
            <img
              src={images[currentImage]}
              alt="Profile"
              className="profile-img"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "all 0.5s ease" }} // optional smooth fade
            />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <h1 className="hero-title">Hi, I'm Azita!</h1>
            <div className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
