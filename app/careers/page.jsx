'use client'
import { useState } from 'react'

const perks = [
  {
    icon: '🎓',
    title: 'Trained by the Best',
    body: "Every stylist goes through Bambang Soteto's personal curriculum. You don't just learn techniques — you learn the standard behind them.",
  },
  {
    icon: '🌸',
    title: "Women-Only Floor",
    body: "You work in the same environment your clients enjoy. Comfortable, private, and built for focus.",
  },
  {
    icon: '📈',
    title: 'Room to Grow',
    body: "From junior stylist to senior to creative lead — there's a clear path, and we actively invest in helping you move along it.",
  },
  {
    icon: '💛',
    title: 'A Brand That Stands For Something',
    body: "Dashing Diva exists to serve a community that's underserved. When you work here, your work matters beyond the chair.",
  },
]

const openRoles = [
  {
    title: 'Junior Stylist',
    type: 'Full-time',
    location: 'Plaza Damas · Shah Alam · Damansara',
    description: "We're looking for a motivated junior stylist to join our floor. You'll work alongside senior stylists, build your client base, and grow your technical skills under Bambang's training system.",
    requirements: [
      'Certificate or diploma in hairdressing',
      'Passion for the craft and eagerness to learn',
      'Good communication and a client-first attitude',
      'Comfortable working in a women-only environment',
    ],
  },
  {
    title: 'Senior Stylist',
    type: 'Full-time',
    location: 'Plaza Damas · Shah Alam · Damansara',
    description: "An experienced stylist ready to take ownership of a full client book. You'll mentor juniors, lead on technical services, and represent the Dashing Diva standard.",
    requirements: [
      'Minimum 3 years salon experience',
      'Proficiency in colouring, cutting, and chemical treatments',
      'Experience mentoring or training others is a plus',
      'Strong interpersonal skills',
    ],
  },
  {
    title: 'Salon Coordinator',
    type: 'Full-time',
    location: 'Plaza Damas · Shah Alam · Damansara',
    description: "The person who keeps the salon running smoothly — managing bookings, greeting clients, handling day-to-day operations, and making sure every visit starts and ends well.",
    requirements: [
      'Experience in customer service or front-of-house roles',
      'Organised, proactive, and calm under pressure',
      'Familiar with booking systems (Fresha experience a plus)',
      'Friendly and professional manner',
    ],
  },
]

export default function CareersPage() {
  const [openRole, setOpenRole] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xrervlzj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'var(--warm-dark)',
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--r-sm)',
    padding: '12px 16px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'box-shadow 150ms, border-color 150ms',
  }

  const labelStyle = {
    fontFamily: 'var(--font-label)',
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--warm-mid)',
    display: 'block',
    marginBottom: '6px',
  }

  const focusInput = e => {
    e.target.style.boxShadow = '0 0 0 3px rgba(204,138,158,0.20)'
    e.target.style.borderColor = 'var(--pink-mid)'
  }
  const blurInput = e => {
    e.target.style.boxShadow = 'none'
    e.target.style.borderColor = 'var(--border)'
  }

  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="section-label">Join the Team</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 88px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginTop: '8px', marginBottom: '16px' }}>
          WORK AT<br /><span style={{ color: 'var(--pink-deep)' }}>DASHING DIVA</span>
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '480px' }}>
          We hire people who care about the craft and the community. If that sounds like you, read on.
        </p>
      </section>

      {/* ── WHY WORK HERE ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Why Us</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '40px' }}>
            What You Get
          </h2>
          <div className="rg-2" style={{ gap: '16px' }}>
            {perks.map((p) => (
              <div key={p.title} className="card" style={{ padding: '32px 28px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginBottom: '10px', lineHeight: 1.1 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--muted)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PHOTO ── */}
      <section className="sp" style={{ background: 'var(--cream)', paddingTop: 0, paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-soft)' }}>
            <img
              src="/images/team-photo.jpeg"
              alt="The Dashing Diva team"
              style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '520px', objectPosition: 'center top' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(42,21,32,0.72) 0%, transparent 60%)',
              padding: '48px 36px 28px',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                color: '#ffffff',
                lineHeight: 1.1,
              }}>
                The people you'd be working with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="sp" style={{ background: 'var(--cream-warm)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Open Positions</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '36px' }}>
            Current Roles
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {openRoles.map(role => {
              const isOpen = openRole === role.title
              return (
                <div key={role.title} className="card" style={{ overflow: 'hidden', padding: 0, transition: 'box-shadow 200ms' }}>
                  {/* Role header */}
                  <button
                    onClick={() => setOpenRole(isOpen ? null : role.title)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '24px 28px',
                      background: isOpen ? 'var(--warm-dark)' : 'var(--white)',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 200ms',
                    }}
                  >
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '0.02em', textTransform: 'uppercase', color: isOpen ? 'var(--pink)' : 'var(--warm-dark)', marginBottom: '4px', lineHeight: 1 }}>
                        {role.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '14px' }}>
                        <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: isOpen ? 'var(--pink-mid)' : 'var(--pink-deep)' }}>
                          {role.type}
                        </span>
                        <span style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: isOpen ? 'rgba(255,255,255,0.30)' : 'var(--muted-lt)' }}>
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '26px',
                      color: isOpen ? 'var(--pink)' : 'var(--warm-dark)',
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 200ms',
                      display: 'block',
                      flexShrink: 0,
                    }}>
                      +
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div style={{ padding: '0 28px 28px', background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
                      <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--warm-mid)', margin: '22px 0 18px' }}>
                        {role.description}
                      </p>
                      <p style={{ fontFamily: 'var(--font-label)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-dark)', marginBottom: '10px' }}>
                        What we're looking for
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px' }}>
                        {role.requirements.map(r => (
                          <li key={r} style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--pink-deep)', flexShrink: 0, marginTop: '2px' }}>→</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#apply"
                        onClick={() => setForm(f => ({ ...f, role: role.title }))}
                        className="btn btn-primary btn-sm"
                      >
                        Apply for this role →
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="sp" style={{ background: 'var(--blush)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="section-label">Open Application</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--warm-dark)', lineHeight: 0.93, marginBottom: '12px' }}>
            Don&rsquo;t See Your Role?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '36px' }}>
            We're always open to hearing from talented people. Send us a note and we'll be in touch if something fits.
          </p>

          {submitted ? (
            <div className="card" style={{ background: 'var(--warm-dark)', padding: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '36px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '12px' }}>
                Got It!
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                Thanks for reaching out. We read every application personally and will be in touch if there's a fit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card"
              style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
              <div>
                <label style={labelStyle}>Role You're Interested In</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focusInput}
                  onBlur={blurInput}
                >
                  <option value="">Select a role...</option>
                  {openRoles.map(r => (
                    <option key={r.title} value={r.title}>{r.title}</option>
                  ))}
                  <option value="Open Application">Open Application</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Tell Us About Yourself</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your experience, what you're looking for, why Dashing Diva..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Application
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
