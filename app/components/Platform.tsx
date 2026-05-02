export default function Platform() {
  return (
    <div className="section-wrap bg-cream" id="platform">
      <section>
        <div className="platform-header">
          <div>
            <div className="section-label reveal">The Platform</div>
            <h2 className="section-title reveal reveal-delay-1">
              Three layers.<br />
              <span className="t-italic">One map.</span>
            </h2>
          </div>
          <p className="section-body reveal reveal-delay-2">
            Syklomics integrates genomics, proteomics, and metabolomics into a unified biological map of
            hemoglobinopathy — then surfaces repurposing candidates with precision no single data
            source can match.
          </p>
        </div>

        <div className="platform-cards">
          <div className="pcard reveal reveal-delay-1">
            <div className="pcard-num">01</div>
            <div className="pcard-title">Drug Repurposing</div>
            <div className="pcard-body">
              Our core approach. We identify FDA-approved drugs whose mechanism of action overlaps with
              biological targets from our multi-omics data — compressing years of discovery into months.
            </div>
          </div>

          <div className="pcard reveal reveal-delay-2">
            <div className="pcard-num">02</div>
            <div className="pcard-title">Novel Drug Design</div>
            <div className="pcard-body">
              Where no suitable compound exists, generative models design new compounds for identified
              biological targets — extending the platform beyond the existing pharmacopoeia.
            </div>
          </div>

          <div className="pcard reveal reveal-delay-3">
            <div className="pcard-num">03</div>
            <div className="pcard-title">Biomarker Discovery</div>
            <div className="pcard-body">
              Our longitudinal patient dataset surfaces predictors of drug response and complication risk —
              creating licensing value for pharma partners and companion diagnostic developers.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
