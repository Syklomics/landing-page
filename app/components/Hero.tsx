import HeroCells from "./HeroCells";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <HeroCells />

      <div className="hero-rbc-large">
        <svg width="600" height="600" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="40" rx="32" ry="20" fill="url(#heroRbcG)" />
          <ellipse cx="40" cy="40" rx="14" ry="7" fill="rgba(30,5,12,0.4)" />
          <defs>
            <radialGradient id="heroRbcG" cx="38%" cy="36%" r="62%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C46F84" />
              <stop offset="100%" stopColor="#5C1A2E" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          Syklomics Biotechnology · Hemoglobinopathy · Drug Discovery
        </div>

        <h1 className="hero-headline">
          Drug discovery,<br />
          <span className="hl-thin">finally</span><br />
          <span className="hl-accent">intentional.</span>
        </h1>

        <p className="hero-sub">
          A multi-omics platform accelerating therapy development for sickle cell disease — built by
          someone who lives with it.
        </p>

        <div className="hero-actions">
          <a href="#platform" className="btn-primary">Explore the Platform</a>
          <a href="#science" className="btn-ghost">Our Science</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hs-num">100M+</div>
          <div className="hs-label">People with hemoglobinopathies</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">50M+</div>
          <div className="hs-label">Affected by sickle cell globally</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">3–5×</div>
          <div className="hs-label">Faster to market via repurposing</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">60%</div>
          <div className="hs-label">Cost reduction via repurposing</div>
        </div>
      </div>
    </header>
  );
}
