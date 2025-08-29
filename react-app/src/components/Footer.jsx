export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container text-center">
        <h2 className="cta-heading">Let’s Connect</h2>
        <p className="cta-text">
          I'm a Computer Science student and junior UX/UI designer. I'd love to
          connect, collaborate, or chat about opportunities!
        </p>
        <a href="mailto:azitab@outlook.com" className="cta-link d-inline me-3">
          azitab@outlook.com
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <span className="footer-left">
              Designed and Coded by Azita Balsara &middot; 2025
            </span>
          </div>
          <div className="col-6 text-end">
            <a
              href="mailto:azitab@outlook.com"
              className="footer-link d-inline me-3"
            >
              azitab@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/azita-balsara/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-inline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
