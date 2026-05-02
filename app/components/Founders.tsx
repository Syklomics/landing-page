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
              abstract problem for me.&rdquo;
            </div>
          </div>

          <div className="founder-card reveal reveal-delay-3">
            <div className="founder-avatar">PI</div>
            <div className="founder-name">Pamilerin Idowu</div>
            <div className="founder-role">CTO · Co-founder</div>
            <div className="founder-bio">
              Technical architect at Syklomics with over a decade of experience as a full-stack software engineer and a strong data engineering background. Pamilerin leads engineering across the entire platform — building the multi-omics data pipeline, the disease knowledge graph, and the AI models that surface drug candidates, alongside the application layer that makes it usable.
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
