import { useState, useEffect } from 'react'
import heroImg from './assets/hero-bay-aerial.jpg'
import startImg from './assets/beach-startline.jpg'
import finishImg from './assets/cbbt-finish.jpg'
import mapImg from './assets/course-map.jpg'
import logoImg from './assets/swimnerd-logo.jpg'
import Waiver from './Waiver.jsx'

// ─── Event config (edit these when details are locked) ───────────────
const EVENT = {
  name: 'Bridge to Bridge',
  tagline: 'A 2-mile open water crossing of the Chesapeake Bay',
  date: 'Saturday, September 19, 2026',
  time: '9:00 AM',
  distance: '~2 Miles',
  start: 'Lesner Bridge',
  finish: 'Chesapeake Bay Bridge-Tunnel',
  registerUrl: '#register',       // scrolls to embedded Google Form
  googleFormUrl: '[GOOGLE_FORM_EMBED_URL]', // paste Google Form embed URL here
  price: '[PRICE TBD]',           // e.g. '$65'
  contactEmail: 'masters@swimnerd.com',
}

const NAV = [
  { href: '#about', label: 'The Swim' },
  { href: '#route', label: 'The Route' },
  { href: '#details', label: 'Details' },
  { href: '#faq', label: 'FAQ' },
  { href: '#waiver', label: 'Waiver' },
]

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', ''))
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', ''))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

const FAQS = [
  {
    q: 'Do I need to wear a wetsuit?',
    a: 'Wetsuits are optional — wear one if you want, but it’s not needed. Mid-September water in the Chesapeake Bay is warm, typically in the mid-to-upper 70s°F (around 75–78°F based on past years). Plenty comfortable for the crossing. Wear whatever keeps you confident over 2 miles.',
  },
  {
    q: 'Is there safety support on the water?',
    a: 'Yes — [SAFETY DETAILS TBD]. Kayak and paddleboard escorts shadow the field, with support boats on the course. Every swimmer is accounted for start to finish.',
  },
  {
    q: 'How fit do I need to be?',
    a: 'This is a masters open water swim of roughly 2 miles across open bay. You should be comfortable swimming continuously in open water. Not sure? Reach out and we\u2019ll talk it through.',
  },
  {
    q: 'What about currents and tides?',
    a: 'The route is timed around a favorable tide window. Full course briefing is provided before the start so you know exactly where to sight and how to work with the current.',
  },
  {
    q: 'What do I get for registering?',
    a: '[SWAG/PERKS TBD] \u2014 timing, finisher recognition, and the bragging rights of crossing the bay bridge to bridge.',
  },
]

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function App() {
  const scrolled = useScrolled()
  const [openFaq, setOpenFaq] = useState(0)
  const route = useHashRoute()

  // Dedicated waiver page route
  useEffect(() => {
    if (route === 'waiver') window.scrollTo(0, 0)
  }, [route])

  if (route === 'waiver') {
    return (
      <>
        <nav className="nav scrolled">
          <div className="container">
            <a href="#top" className="brand" onClick={() => { window.location.hash = '' }}>
              <span className="logo-pill"><img src={logoImg} alt="Swimnerd" /></span>
              <span className="brand-masters">Masters</span>
            </a>
            <div className="nav-links">
              <a href="#top" onClick={() => { window.location.hash = '' }}>Back to Event</a>
              <a href={EVENT.registerUrl} className="btn btn-primary nav-cta" onClick={() => { window.location.hash = '' }}>Register</a>
            </div>
          </div>
        </nav>
        <Waiver />
      </>
    )
  }

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#top" className="brand">
            <span className="logo-pill"><img src={logoImg} alt="Swimnerd" /></span>
            <span className="brand-masters">Masters</span>
          </a>
          <div className="nav-links">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
            <a href={EVENT.registerUrl} className="btn btn-primary nav-cta">Register</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-inner">
          <span className="eyebrow">Swimnerd Masters · Chesapeake Bay, VA</span>
          <h1>Bridge <span className="accent">to</span> Bridge</h1>
          <p className="sub">{EVENT.tagline} — from the {EVENT.start} to the {EVENT.finish}.</p>
          <div className="hero-cta">
            <a href={EVENT.registerUrl} className="btn btn-primary">Register Now</a>
            <a href="#route" className="btn btn-ghost">See the Route</a>
          </div>
          <div className="hero-facts">
            <div className="hero-fact">
              <div className="label">Distance</div>
              <div className="value">{EVENT.distance}</div>
            </div>
            <div className="hero-fact">
              <div className="label">Start</div>
              <div className="value">Lesner Bridge</div>
            </div>
            <div className="hero-fact">
              <div className="label">Finish</div>
              <div className="value">The CBBT</div>
            </div>
            <div className="hero-fact">
              <div className="label">Date</div>
              <div className="value">{EVENT.date}</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll ↓</div>
      </header>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">The Swim</span>
            <h2>Two Bridges. One Bay. You Against the Water.</h2>
            <p>
              The Swimnerd Masters Bridge to Bridge is a point-to-point open water
              swim across the Chesapeake Bay — starting beneath the Lesner Bridge
              at the mouth of the Lynnhaven and finishing at the iconic Chesapeake
              Bay Bridge-Tunnel on the horizon.
            </p>
            <p>
              Roughly two miles of open bay. Real current, real distance, real
              satisfaction when you touch the far bridge. Built for masters
              swimmers who want a challenge worth training for — and a finish line
              you can see from the start.
            </p>
            <p>
              Whether you\u2019re chasing a time or just chasing the crossing, this is
              open water swimming the way it should be: honest, beautiful, and
              a little bit epic.
            </p>
          </div>
          <div className="about-img">
            <img src={startImg} alt="The Chesapeake Bay shoreline at the start line" />
          </div>
        </div>
      </section>

      {/* ROUTE */}
      <section id="route" className="route">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Route</span>
            <h2>Lesner Bridge → CBBT</h2>
            <p>A straight shot across the bay, roughly two miles of open water with the far bridge in sight the whole way.</p>
          </div>
          <div className="route-map">
            <span className="route-badge">~2 Mile Course</span>
            <img src={mapImg} alt="Course map showing the route from the Lesner Bridge to the CBBT with mile markers" />
          </div>
          <div className="route-steps">
            <div className="route-step">
              <div className="num">01</div>
              <h3>The Start</h3>
              <p>Wade in near the Lesner Bridge at the mouth of the Lynnhaven Inlet. Course briefing, then you\u2019re off across the bay.</p>
            </div>
            <div className="route-step">
              <div className="num">02</div>
              <h3>The Crossing</h3>
              <p>Two miles of open Chesapeake Bay. Sight off the CBBT, settle into your stroke, and let the tide work with you.</p>
            </div>
            <div className="route-step">
              <div className="num">03</div>
              <h3>The Finish</h3>
              <p>Touch down at the Chesapeake Bay Bridge-Tunnel. Bridge to bridge, done. That\u2019s a crossing you\u2019ll never forget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="details">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Details</span>
            <h2>What You Need to Know</h2>
            <p>Everything below the waterline. Details firm up as the event nears — check back or register to get updates.</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="icon">📅</div>
              <h3>Date &amp; Time</h3>
              <p><span className="tbd">{EVENT.date}</span><br />Start: {EVENT.time}</p>
            </div>
            <div className="info-card">
              <div className="icon">📍</div>
              <h3>Start Line</h3>
              <p>Lesner Bridge, Lynnhaven Inlet<br />Virginia Beach, VA</p>
            </div>
            <div className="info-card">
              <div className="icon">🏁</div>
              <h3>Finish Line</h3>
              <p>Chesapeake Bay Bridge-Tunnel<br />~2 miles across the bay</p>
            </div>
            <div className="info-card">
              <div className="icon">🛟</div>
              <h3>Safety Support</h3>
              <p>Kayak &amp; boat escorts on course.<br /><span className="tbd">[Full safety plan TBD]</span></p>
            </div>
            <div className="info-card">
              <div className="icon">🌊</div>
              <h3>Conditions</h3>
              <p>Open bay, timed to the tide window.<br /><span className="tbd">[Water temp / wetsuit policy TBD]</span></p>
            </div>
            <div className="info-card">
              <div className="icon">🎟️</div>
              <h3>Entry</h3>
              <p><span className="tbd">{EVENT.price}</span> per swimmer<br />Limited field — register early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="register" style={{ backgroundImage: `url(${finishImg})` }}>
        <div className="container register-inner">
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Claim Your Spot</span>
          <h2>Ready to Cross the Bay?</h2>
          <p>Fields are limited and open water swims fill up. Fill out the form below to lock in your entry for the Bridge to Bridge.</p>

          {EVENT.googleFormUrl && !EVENT.googleFormUrl.startsWith('[') ? (
            <div className="form-embed">
              <iframe
                src={EVENT.googleFormUrl}
                title="Bridge to Bridge Registration"
                width="100%"
                height="920"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >Loading registration form…</iframe>
            </div>
          ) : (
            <div className="form-placeholder">
              <p style={{ marginBottom: 18 }}>Registration form is being finalized. Check back soon — or email us to reserve your spot now.</p>
              <a href={`mailto:${EVENT.contactEmail}?subject=Bridge%20to%20Bridge%20Registration`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 40px' }}>Reserve by Email</a>
            </div>
          )}

          <p style={{ marginTop: 24, fontSize: '0.95rem', opacity: 0.85 }}>
            All participants must sign the <a href="#waiver" style={{ color: 'var(--bay-light)', fontWeight: 600 }}>event waiver</a>.
            Questions? Email <a href={`mailto:${EVENT.contactEmail}`} style={{ color: 'var(--bay-light)', fontWeight: 600 }}>{EVENT.contactEmail}</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently Asked</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="brand footer-brand"><span className="logo-pill"><img src={logoImg} alt="Swimnerd" /></span><span className="brand-masters">Masters</span></div>
          <p>The Bridge to Bridge Swim · Chesapeake Bay, Virginia Beach, VA</p>
          <div className="links">
            <a href="#about">The Swim</a>
            <a href="#route">The Route</a>
            <a href="#details">Details</a>
            <a href="#waiver">Waiver</a>
            <a href={EVENT.registerUrl}>Register</a>
            <a href="https://swimnerd.com" target="_blank" rel="noreferrer">Swimnerd.com</a>
          </div>
          <p className="copy">© {new Date().getFullYear()} Swimnerd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
