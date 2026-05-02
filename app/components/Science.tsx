export default function Science() {
  return (
    <div className="science-wrap" id="science">
      <div className="science-inner">
        <div className="science-label reveal">The Science</div>
        <h2 className="science-title reveal reveal-delay-1">
          Beyond the mutation.<br />
          <span className="st-light">The full biological network.</span>
        </h2>

        <div className="omics-grid">
          <div className="omics-card reveal reveal-delay-1">
            <div className="omics-num">01</div>
            <div className="omics-title">Genomics</div>
            <div className="omics-body">
              Identifies not just the primary HBB mutation but genetic modifiers and variants that influence
              disease severity — the foundation of every patient profile.
            </div>
            <div className="omics-tag">HBB · Variants · Modifiers</div>
          </div>

          <div className="omics-card reveal reveal-delay-2">
            <div className="omics-num">02</div>
            <div className="omics-title">Proteomics</div>
            <div className="omics-body">
              Reveals how the mutation alters protein expression and interaction networks — exposing
              dysfunctional pathways that genomics alone cannot identify.
            </div>
            <div className="omics-tag">Protein networks · Pathways</div>
          </div>

          <div className="omics-card reveal reveal-delay-3">
            <div className="omics-num">03</div>
            <div className="omics-title">Metabolomics</div>
            <div className="omics-body">
              Captures the metabolic signature of the disease — oxidative stress markers, inflammatory
              mediators, and red blood cell energy metabolism between patients of different severity.
            </div>
            <div className="omics-tag">Metabolism · Inflammation</div>
          </div>
        </div>

        <div className="science-quote reveal">
          <p>
            &ldquo;Hydroxyurea took decades to reach SCD patients. It was an accidental discovery. Our platform
            exists to make that process deliberate, data-driven, and fast.&rdquo;
          </p>
          <cite>Fatima Oyawoye, CEO &amp; Co-founder</cite>
        </div>
      </div>
    </div>
  );
}
