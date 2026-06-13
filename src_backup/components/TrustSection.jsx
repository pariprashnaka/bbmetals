import React from 'react';

const STATS = [
  { number: '500+', label: 'Products manufactured', icon: '📦' },
  { number: '50+', label: 'Orders dispatched', icon: '🚚' },
  { number: '5', label: 'States served', icon: '🗺️' },
  { number: '24hr', label: 'Enquiry response time', icon: '⏱️' },
];

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'Hotel Owner, Patna',
    text: 'We ordered 200 plates and 300 bowls for our hotel. Quality was exactly as promised — mirror finish, no rough edges. Will order glasses next month.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Homemaker, Varanasi',
    text: 'Bought a dinner set for my kitchen. The steel quality is excellent — much better than what I was getting from local markets. Very happy with the purchase.',
    rating: 5,
  },
  {
    name: 'Mohammed Firoz',
    role: 'Distributor, Ranchi',
    text: 'I distribute utensils across Jharkhand. BBM gives consistent quality batch after batch — that reliability is rare. Pricing is competitive for 304 grade.',
    rating: 5,
  },
];

const TRUST_BADGES = [
  { label: 'GST Registered', icon: '✓' },
  { label: 'Udyam Certified', icon: '✓' },
  { label: 'GeM Listed', icon: '✓' },
  { label: 'Food-Grade Steel', icon: '✓' },
  { label: 'Pan India Delivery', icon: '✓' },
  { label: 'Bulk & Retail Orders', icon: '✓' },
];

export default function TrustSection() {
  return (
    <section style={{ background: '#fff', padding: 0 }}>

      {/* ── STATS BAR ── */}
      <div style={{ background: 'var(--navy)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }} className="trust-stats-grid">
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 36, fontWeight: 800, color: 'var(--sand)', lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ background: 'var(--light)', padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="lbl" style={{ justifyContent: 'center' }}>What our buyers say</div>
            <div className="accent-rule" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ color: 'var(--navy)' }}>Trusted by homes, hotels & distributors</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--rule-lt)', padding: '28px 24px', position: 'relative', borderTop: '3px solid var(--sand)' }}>
                {/* Quote mark */}
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 48, color: 'var(--sand)', lineHeight: 1, marginBottom: 8, opacity: 0.5 }}>"</div>

                {/* Stars */}
                <div style={{ marginBottom: 14 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#F5A623', fontSize: 16, marginRight: 2 }}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p style={{ fontSize: 14, color: 'var(--text-dark)', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>

                {/* Author */}
                <div style={{ borderTop: '1px solid var(--rule-lt)', paddingTop: 16 }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 15, fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-mid)', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST BADGES ── */}
      <div style={{ background: '#fff', padding: '40px 0', borderTop: '1px solid var(--rule-lt)', borderBottom: '1px solid var(--rule-lt)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            {TRUST_BADGES.map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '10px 18px', borderRadius: 2 }}>
                <span style={{ color: '#2E7D32', fontWeight: 700, fontSize: 14 }}>{b.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.04em' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          .trust-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
