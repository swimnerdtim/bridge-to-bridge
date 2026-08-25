import { WAIVER } from './waiver.js'

export default function Waiver() {
  return (
    <div className="waiver-page">
      <div className="container waiver-inner">
        <a href="#top" className="waiver-back" onClick={() => { window.location.hash = ''; }}>← Back to Event</a>

        <div className="waiver-head">
          <span className="eyebrow">Swimnerd Masters</span>
          <h1>{WAIVER.title}</h1>
          <p className="waiver-sub">{WAIVER.subtitle}</p>
        </div>

        <div className="waiver-meta">
          <div><span>Event</span>{WAIVER.eventLine}</div>
          <div><span>Course</span>{WAIVER.courseLine}</div>
        </div>

        <div className="waiver-callout">
          <strong>Please read carefully.</strong> This is a legal agreement. By registering and
          signing, you give up important legal rights. Open water swimming can result in serious
          injury or death. You will sign the official copy during registration or at check-in.
        </div>

        <p className="waiver-intro">{WAIVER.intro}</p>

        {WAIVER.sections.map((s) => (
          <section className="waiver-section" key={s.n}>
            <h2><span className="waiver-num">{s.n}</span>{s.h}</h2>
            {s.body?.map((p, i) => <p key={i}>{p}</p>)}
            {s.list && (
              <ul>
                {s.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            )}
            {s.after?.map((p, i) => <p key={`a${i}`}>{p}</p>)}
          </section>
        ))}

        <div className="waiver-callout minor">
          <strong>For participants under 18.</strong> {WAIVER.minorNote}
        </div>

        {/* Signature block (for printed / official copy) */}
        <div className="waiver-sign">
          <h3>Signature</h3>
          <p className="sign-note">Completed on the official registration copy.</p>
          <div className="sign-grid">
            <div className="sign-field"><span className="line"></span><label>Participant Signature</label></div>
            <div className="sign-field"><span className="line"></span><label>Printed Name</label></div>
            <div className="sign-field"><span className="line"></span><label>Date</label></div>
            <div className="sign-field"><span className="line"></span><label>Emergency Contact &amp; Phone</label></div>
          </div>
        </div>

        <div className="waiver-foot">
          <a href="#top" className="btn btn-ghost" onClick={() => { window.location.hash = ''; }}>← Back to Event</a>
          <button className="btn btn-primary" onClick={() => window.print()}>Print / Save PDF</button>
        </div>
      </div>
    </div>
  )
}
