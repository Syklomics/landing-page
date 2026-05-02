export default function Roadmap() {
  return (
    <div className="section-wrap" id="roadmap">
      <section>
        <div className="section-label reveal">Roadmap</div>
        <h2 className="section-title reveal reveal-delay-1">
          From idea to<br />
          <span className="t-italic">first candidates.</span>
        </h2>

        <div className="timeline">
          <div className="t-event reveal">
            <div className="t-dot"></div>
            <div className="t-phase">Stage 1 · Months 1–6</div>
            <div className="t-title">Foundation &amp; Regulatory Groundwork</div>
            <div className="t-body">
              Ethics and IRB approval in Nigeria (NHREC), facility setup, patient recruitment protocols, and
              platform construction on public omics datasets. Goal: 200 patients recruited and bioinformatics
              pipelines validated.
            </div>
            <span className="t-cost">$300K – $400K</span>
          </div>

          <div className="t-event reveal">
            <div className="t-dot"></div>
            <div className="t-phase">Stage 2 · Months 7–18</div>
            <div className="t-title">Proprietary Data Generation &amp; Platform Training</div>
            <div className="t-body">
              Full multi-omics profiling of 200 patients. Genomic sequencing in-house; proteomics and
              metabolomics via CRO partners. Platform retrained on our proprietary dataset. Sample bank built
              toward 5,000 patient target.
            </div>
            <span className="t-cost">$450K – $600K</span>
          </div>

          <div className="t-event future reveal">
            <div className="t-dot"></div>
            <div className="t-phase">Stage 3 · Months 19–30</div>
            <div className="t-title">First Candidates, Validation &amp; Commercial Conversations</div>
            <div className="t-body">
              Platform produces first ranked repurposing candidates. In vitro validation of top candidates.
              First co-development partnerships with pharma initiated. Data licensing conversations begin.
            </div>
            <span className="t-cost">$350K – $450K</span>
          </div>
        </div>
      </section>
    </div>
  );
}
