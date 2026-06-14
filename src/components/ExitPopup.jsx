import React, { useState, useEffect } from 'react';

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (localStorage.getItem('exit_popup_shown_v2')) return;

    // Desktop: detect mouse leaving viewport
    function handleMouseLeave(e) {
      if (e.clientY < 10 && !localStorage.getItem('exit_popup_shown_v2')) {
        setVisible(true);
        localStorage.setItem('exit_popup_shown_v2', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

    // Mobile: detect back button or tab switch (visibilitychange)
    function handleVisibility() {
      if (document.visibilityState === 'hidden' && !localStorage.getItem('exit_popup_shown_v2')) {
        localStorage.setItem('exit_popup_shown_v2', 'true');
      }
    }

    // Delay listener by 15 seconds so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibility);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  function dismiss() {
    setVisible(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!phone) return;

    // Open WhatsApp with pre-filled message
    const msg = encodeURIComponent(`Hi, I visited your website and I'd like to receive your wholesale price list. My number is ${phone}`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, '_blank');
    setDone(true);
    setTimeout(() => setVisible(false), 3000);
  }

  if (!visible) return null;

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', zIndex:700, display:'flex', alignItems:'center', justifyContent:'center', padding:20, animation:'fadeIn 0.3s ease' }} onClick={dismiss}>
      <div onClick={e => e.stopPropagation()} style={{ background:'#fff', maxWidth:440, width:'100%', position:'relative', overflow:'hidden', animation:'slideUp 0.3s ease' }}>

        {/* Top accent bar */}
        <div style={{ height:4, background:'var(--accent)' }} />

        {/* Close button */}
        <button onClick={dismiss} style={{ position:'absolute', top:12, right:16, background:'none', border:'none', fontSize:22, color:'var(--text-mid)', cursor:'pointer', lineHeight:1, zIndex:1 }}>×</button>

        {/* Content */}
        <div style={{ padding:'36px 32px 28px' }}>

          {/* Urgency badge */}
          <div style={{ display:'inline-block', background:'#FFF3E0', color:'var(--accent)', fontSize:10, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'4px 10px', borderRadius:2, marginBottom:16 }}>
            Wait — before you go
          </div>

          <h3 style={{ fontFamily:'Barlow Condensed, sans-serif', fontSize:28, fontWeight:800, textTransform:'uppercase', color:'var(--navy)', lineHeight:1.15, marginBottom:10 }}>
            Get our wholesale<br />price list — free
          </h3>

          <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.65, marginBottom:24 }}>
            SS plates, bowls, glasses — with sizes, grades, and trade pricing.
            Sent straight to your WhatsApp in 2 minutes.
          </p>

          {done ? (
            <div style={{ background:'#EDF7ED', border:'1px solid #A8D5A8', padding:'14px 16px', fontSize:14, color:'#2E5E2E', borderRadius:2, textAlign:'center' }}>
              ✓ Opening WhatsApp — we'll send the price list shortly!
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', gap:8 }}>
              <input
                type="tel"
                placeholder="Your WhatsApp number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                style={{ flex:1, border:'1.5px solid var(--rule-lt)', background:'var(--light)', padding:'12px 14px', fontSize:14, fontFamily:'Inter,sans-serif', color:'var(--navy)', borderRadius:2, outline:'none' }}
              />
              <button type="submit" style={{ background:'#1A7A40', color:'#fff', border:'none', padding:'12px 20px', fontSize:12, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, whiteSpace:'nowrap', fontFamily:'Inter,sans-serif' }}>
                💬 Send on WhatsApp
              </button>
            </form>
          )}

          {/* Trust line */}
          <div style={{ display:'flex', alignItems:'center', gap:20, marginTop:18, paddingTop:16, borderTop:'1px solid var(--rule-lt)' }}>
            {[['📦','500+ products'],['🏭','Made in India'],['📞','Reply in 2 min']].map(([icon, text]) => (
              <div key={text} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--muted)' }}>
                <span>{icon}</span>{text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div style={{ height:3, background:'linear-gradient(90deg, var(--accent), var(--sand))' }} />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }
      `}</style>
    </div>
  );
}
