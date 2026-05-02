export default function Problem() {
  return (
    <div className="section-wrap">
      <section id="problem">
        <div className="section-label reveal">The Problem</div>

        <div className="problem-grid">
          <div>
            <h2 className="section-title reveal reveal-delay-1">
              Drug discovery is<br />
              <span className="t-light">slow, expensive,</span><br />
              <span className="t-italic">and not intentional.</span>
            </h2>
            <br />
            <p className="section-body reveal reveal-delay-2">
              The current gold standard for sickle cell disease — Hydroxyurea — was an accidental discovery
              originally developed for cancer. It took decades to reach SCD patients. We asked: what if this
              process were deliberate?
            </p>
          </div>

          <div>
            <div className="problem-stats-list">
              <div className="pstat reveal reveal-delay-2">
                <div className="pstat-num">20yr</div>
                <div className="pstat-text">
                  <strong>Average timeline</strong> from drug discovery to patient access — a timeline SCD
                  patients simply cannot afford.
                </div>
              </div>
              <div className="pstat reveal reveal-delay-3">
                <div className="pstat-num">$2.6B</div>
                <div className="pstat-text">
                  <strong>Average cost</strong> to bring a novel drug to market. Repurposing can cut this by up
                  to 60%.
                </div>
              </div>
              <div className="pstat reveal reveal-delay-4">
                <div className="pstat-num">&lt;25%</div>
                <div className="pstat-text">
                  <strong>Of affected patients</strong> are adequately served by current treatments due to
                  differential drug response.
                </div>
              </div>
              <div className="pstat reveal reveal-delay-5">
                <div className="pstat-num">#1</div>
                <div className="pstat-text">
                  <strong>Nigeria</strong> carries the highest global burden of SCD — and is at the centre of
                  our data strategy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
