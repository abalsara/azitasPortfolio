import { useState, useEffect } from "react";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header sticky-header ${hidden ? "hidden" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div>
              <a className="wordmark" href="/">
                <div className="wordmark-name">Azita Balsara</div>
                <div className="wordmark-title">UX/UI Designer</div>
              </a>
            </div>
          </div>
          <div className="col-6 text-end">
            <a href="/" className="nav-link d-inline me-3 header-small">
              Work
            </a>
            <a href="/about" className="nav-link d-inline me-3 header-small">
              About
            </a>
            <a href="/funstuff" className="nav-link d-inline me-3 header-small">
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
