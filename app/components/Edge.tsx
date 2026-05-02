export default function Edge() {
  return (
    <div className="section-wrap" id="differentiation">
      <section>
        <div className="section-label reveal">Our Edge</div>
        <h2 className="section-title reveal reveal-delay-1">
          What our competitors<br />
          <span className="t-italic">don&apos;t have.</span>
        </h2>

        <div className="diff-grid">
          <div className="diff-card featured reveal reveal-delay-1">
            <div className="diff-index">01</div>
            <div className="diff-title">Proprietary Longitudinal Dataset</div>
            <div className="diff-body">
              A fully integrated, multi-omics database built specifically for hemoglobinopathy — capturing
              clinical severity, longitudinal history, treatment response, and full omics profiles on the same
              patients. This dataset does not exist anywhere in the world today.
            </div>
            <div className="diff-vs">
              Healx, BenevolentAI, Recursion rely on public databases like GEO and UniProt — not
              disease-focused, lacking clinical depth.
            </div>
          </div>

          <div className="diff-card reveal reveal-delay-2">
            <div className="diff-index">02</div>
            <div className="diff-title">Multi-Omics, Not Just Genomics</div>
            <div className="diff-body">
              Genomics shows where a mutation is. It doesn&apos;t show how it translates into disease. Our
              proteomics and metabolomics add two additional biological layers — revealing targets invisible
              to single-omic approaches.
            </div>
            <div className="diff-vs">
              Most AI drug discovery companies are genomics-only. We go three layers deep.
            </div>
          </div>

          <div className="diff-card reveal reveal-delay-3">
            <div className="diff-index">03</div>
            <div className="diff-title">Repurposing First</div>
            <div className="diff-body">
              Novel drug design means a decade to market minimum. Our repurposing-first strategy leverages
              existing safety profiles, abbreviated Phase I trials, and the 505(b)(2) FDA pathway — putting
              validated candidates in patients&apos; hands years faster.
            </div>
            <div className="diff-vs">
              Recursion and BenevolentAI are racing on novel compounds. We&apos;re already on a shorter track.
            </div>
          </div>

          <div className="diff-card reveal reveal-delay-4">
            <div className="diff-index">04</div>
            <div className="diff-title">Disease-First Founder Perspective</div>
            <div className="diff-body">
              Our CEO has sickle cell disease and has spent a decade researching it. Our CTO brings the
              bioinformatics depth. The combination of lived experience, clinical research, and technical
              execution is extraordinarily rare in biotech.
            </div>
            <div className="diff-vs">
              The best drug for SCD shouldn&apos;t come from someone who has never met a patient with it.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
