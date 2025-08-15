export function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div>
              <a className="wordmark" href="index.html">
                <div className="wordmark-name">Azita Balsara</div>
                <div className="wordmark-title">UX/UI Designer</div>
              </a>
            </div>
          </div>
          <div className="col-6 text-end">
            <a
              href="index.html"
              className="nav-link d-inline me-3 header-small"
            >
              Work
            </a>
            <a
              href="Resume_Balsara_6_30_25.pdf"
              className="nav-link d-inline me-3 header-small"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="gallery.html"
              className="nav-link d-inline me-3 header-small"
              target="_blank"
            >
              Gallery
            </a>
            <a
              href="mailto:azitab@outlook.com"
              className="nav-link d-inline header-small"
            >
              azitab@outlook.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
