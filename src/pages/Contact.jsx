import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Contact() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true); setError(false);
    const form = e.target;
    const data = {
      from_name: form.from_name.value, business: form.business.value,
      phone: form.country_code.value + ' ' + form.phone.value,
      email: form.email.value, buyer_type: form.buyer_type.value,
      product: form.product.value, message: form.message.value,
      to_email: 'bishwambharbharatmetals@gmail.com',
    };
    const SERVICE_ID = 'service_lqry8kn';
    const TEMPLATE_ID = 'template_6nbc1wm';
    const PUBLIC_KEY = 'dK5VXP7qyhoST_w4z';
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_id: SERVICE_ID, template_id: TEMPLATE_ID, user_id: PUBLIC_KEY, template_params: data }),
    })
      .then(res => { setSending(false); if (res.ok) { setDone(true); form.reset(); setTimeout(() => setDone(false), 8000); } else setError(true); })
      .catch(() => { setSending(false); setError(true); });
  }

  const inputStyle = { border:'1.5px solid var(--rule-lt)',background:'var(--light)',padding:'11px 14px',fontSize:14,fontFamily:'Inter,sans-serif',color:'var(--navy)',borderRadius:2,outline:'none' };
  const labelStyle = { fontSize:10,fontWeight:700,color:'var(--text-mid)',letterSpacing:'0.1em',textTransform:'uppercase' };

  return (
    <div>
      <SEO title="Contact Us" description="Get in touch with Bishwambhar Bharat Metals — phone, WhatsApp, email, or enquiry form. We respond within 24 hours." path="/contact" />
      <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}><Link to="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link> › <span style={{ color: 'var(--sand)' }}>Contact</span></div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>Contact us</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>We respond to all enquiries within one business day.</p>
        </div>
      </div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="page-grid-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72, alignItems: 'start' }}>
            <div>
              <div className="lbl">Contact details</div><div className="accent-rule" />
              <h3 style={{ marginBottom: 8, color: 'var(--navy)' }}>We're easy to reach</h3>
              <p style={{ marginBottom: 24 }}>Phone, WhatsApp, or email — reach us however is easiest for you.</p>
              {[['📞','Phone','+91 XXXXX XXXXX'],['✉️','Email','bishwambharbharatmetals@gmail.com'],['📍','Address','[Factory Address], Bihar, India'],['🕐','Hours','Mon – Sat, 9:00 am – 6:00 pm IST']].map(([icon,label,val]) => (
                <div key={label} style={{ display:'flex',gap:14,padding:'18px 0',borderBottom:'1px solid var(--rule-lt)' }}>
                  <span style={{ fontSize:18,width:28,textAlign:'center',flexShrink:0,paddingTop:2 }}>{icon}</span>
                  <div>
                    <div style={{ ...labelStyle, marginBottom:4 }}>{label}</div>
                    <div style={{ fontSize:14,color:'var(--navy)',fontWeight:500 }}>{val}</div>
                  </div>
                </div>
              ))}
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ display:'flex',alignItems:'center',gap:12,background:'#1A7A40',color:'#fff',padding:'15px 22px',borderRadius:2,textDecoration:'none',marginTop:24,fontSize:14,fontWeight:600 }}>💬 Chat on WhatsApp — instant reply</a>
              <div style={{ marginTop: 24, marginBottom: 8 }}>
                <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-mid)',marginBottom:12 }}>Follow us</div>
                <div style={{ display:'flex',gap:8,flexWrap:'wrap' }}>
                  <a href="https://www.instagram.com/bishwambharbharatmetals/" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>📷 Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61590358276975" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>📘 Facebook</a>
                  <a href="https://x.com/bbharatmetals" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>🐦 X</a>
                </div>
              </div>
            </div>
            <div>
              <div className="lbl">Send a message</div><div className="accent-rule" />
              <h3 style={{ marginBottom: 20, color: 'var(--navy)' }}>Send an enquiry</h3>
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:14 }} className="form-row-2">
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}><label style={labelStyle}>Full name *</label><input name="from_name" required placeholder="Your name" style={inputStyle} /></div>
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}><label style={labelStyle}>Business name</label><input name="business" placeholder="If applicable" style={inputStyle} /></div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:14 }} className="form-row-2">
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                    <label style={labelStyle}>Mobile number *</label>
                    <div style={{ display:'flex', gap:6 }}>
                      <select name="country_code" defaultValue="+91" style={{ ...inputStyle, width:90,flexShrink:0,padding:'11px 8px',fontSize:13 }}>
                        <option value="+91">🇮🇳 +91</option><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option><option value="+966">🇸🇦 +966</option><option value="+977">🇳🇵 +977</option>
                        <option value="+880">🇧🇩 +880</option><option value="+61">🇦🇺 +61</option><option value="+65">🇸🇬 +65</option>
                      </select>
                      <input name="phone" type="tel" required placeholder="XXXXX XXXXX" style={{ ...inputStyle, flex:1 }} />
                    </div>
                  </div>
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}><label style={labelStyle}>Email</label><input name="email" type="email" placeholder="your@email.com" style={inputStyle} /></div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:14 }} className="form-row-2">
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                    <label style={labelStyle}>I am a *</label>
                    <select name="buyer_type" required style={inputStyle}><option value="">Select</option>
                      {['Home buyer','Restaurant / Hotel','School / Hostel / Canteen','Distributor / Wholesaler','Dealer / Retailer','Government / Institutional buyer','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                    <label style={labelStyle}>Product interest</label>
                    <select name="product" style={inputStyle}><option value="">Select</option>
                      {['Stainless steel plates','Stainless steel bowls','Stainless steel glasses','Full range / dinner set','Bulk / trade order','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                  <label style={labelStyle}>Your message</label>
                  <textarea name="message" rows={4} placeholder="Tell us what you need..." style={{ ...inputStyle, resize:'vertical' }} />
                </div>
                <div><button type="submit" className="btn-primary" disabled={sending}>{sending ? 'Sending...' : 'Send enquiry →'}</button></div>
                {done && <div style={{ background:'#EDF7ED',border:'1px solid #A8D5A8',padding:'13px 16px',fontSize:14,color:'#2E5E2E',borderRadius:2 }}>✓ Message received — we'll be in touch within one business day.</div>}
                {error && <div style={{ background:'#FDE8E8',border:'1px solid #F5A5A5',padding:'13px 16px',fontSize:14,color:'#7A2020',borderRadius:2 }}>⚠️ Something went wrong. Please try WhatsApp or call us directly.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
