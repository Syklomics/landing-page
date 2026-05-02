export default function Founders() {
  return (
    <div className="team-wrap" id="team">
      <div className="section-inner">
        <div className="section-label reveal">The Founders</div>
        <h2 className="section-title reveal reveal-delay-1">
          Built by people<br />
          <span className="t-italic">who live the mission.</span>
        </h2>

        <div className="founders-grid">
          <div className="founder-card reveal reveal-delay-2">
            <div className="founder-avatar">FO</div>
            <div className="founder-name">Fatima Oyawoye</div>
            <div className="founder-role">CEO · Co-founder</div>
            <div className="founder-bio">
              PhD researcher with nearly a decade of experience in omics landscapes and hemoglobinopathy drug
              discovery. Fatima has sickle cell disease — giving her a perspective as patient, researcher, and
              community advocate that shapes every decision Syklomics makes.
            </div>
            <div className="founder-quote">
              &ldquo;I know what it means to wait for a drug that doesn&apos;t serve you. That&apos;s not an
              abstract problem for me — it&apos;s Tuesday.&rdquo;
            </div>
          </div>

          <div className="founder-card reveal reveal-delay-3">
            <div className="founder-avatar">PI</div>
            <div className="founder-name">Pamilerin Idowu</div>
            <div className="founder-role">CTO · Co-founder</div>
            <div className="founder-bio">
              Full-stack bioinformatics engineer and the technical architect of Syklomics&apos; platform.
              Pamilerin leads all engineering — from the multi-omics pipeline to the knowledge graph and
              model development.
            </div>
            <div className="founder-quote">
              &ldquo;The science is ready. The data infrastructure is buildable. What&apos;s missing is
              intentionality. That&apos;s what we&apos;re building.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
