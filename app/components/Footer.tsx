export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo-area">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="40" cy="40" rx="32" ry="20" fill="url(#footG)" />
                <ellipse cx="40" cy="40" rx="14" ry="7" fill="rgba(30,5,12,0.55)" />
                <defs>
                  <radialGradient id="footG" cx="38%" cy="36%" r="62%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C46F84" />
                    <stop offset="100%" stopColor="#5C1A2E" />
                  </radialGradient>
                </defs>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div className="footer-wordmark">
                  <span className="fw-light">Sy</span>k<span className="fw-light">lo</span>
                  <span className="fw-semi">mics</span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 9,
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(245,221,227,0.3)",
                    lineHeight: 1,
                  }}
                >
                  Biotechnology
                </div>
              </div>
            </div>
            <div className="footer-tagline">
              Making drug discovery intentional — one omics layer at a time.
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#platform">Platform</a></li>
                <li><a href="#science">Science</a></li>
                <li><a href="#team">Founders</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Partners</h4>
              <ul>
                <li><a href="#contact">Pharma Co-Development</a></li>
                <li><a href="#contact">Data Licensing</a></li>
                <li><a href="#contact">Clinical Sites</a></li>
                <li><a href="#contact">Investors</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 Syklomics Biotechnology Ltd. All rights reserved. Incorporated in Nigeria.
          </div>
          <div className="footer-locs">Bristol, UK · Ibadan, Nigeria</div>
        </div>
      </div>
    </footer>
  );
}
