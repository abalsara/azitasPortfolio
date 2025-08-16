export function HeroSection(props) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-12 mb-4 mb-md-0">
            <img
              src="/img/ProfilePic.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <h1 className="hero-title">Hi, I'm Azita! </h1>
            <div className="hero-description">
              I'm a UX designer with a background in software engineering,
              teaching and visual art. As a Computer Science student, I've
              learned to approach problems with structure and logic. But my
              lifelong love for art and my desire to solve human problems drew
              me to design. I am passionate about creating experiences that are
              not only functional, but also meaningful and delightful for the
              people who use them.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
