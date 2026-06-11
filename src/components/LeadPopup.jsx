import React, { useState, useEffect } from 'react';
import './LeadPopup.css';

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (sessionStorage.getItem('popup_dismissed')) return;

    // Show after 30 seconds
    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !phone) return;
    setSending(true);

    // EmailJS — uses same keys as contact form
    const SERVICE_ID  = 'service_lqry8kn';
    const TEMPLATE_ID = 'template_6nbc1wm';
    const PUBLIC_KEY  = 'dK5VXP7qyhoST_w4z';

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:  SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id:     PUBLIC_KEY,
        template_params: {
          from_name:  name,
          phone:      phone,
          business:   '',
          email:      '',
          buyer_type: 'Catalogue request (popup)',
          product:    'Product catalogue',
          message:    `Catalogue request from website popup. Name: ${name}, Phone: ${phone}`,
          to_email:   'bishwambharbharatmetals@gmail.com',
        },
      }),
    })
      .then(() => {
        setSending(false);
        setDone(true);
        sessionStorage.setItem('popup_dismissed', 'true');
        setTimeout(() => setVisible(false), 3000);
      })
      .catch(() => {
        setSending(false);
        setDone(true);
        setTimeout(() => setVisible(false), 3000);
      });
  }

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={dismiss}>
      <div className="popup-box" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={dismiss}>×</button>

        <div className="popup-badge">Free catalogue</div>

        <h3 className="popup-title">Get our product catalogue — free</h3>
        <p className="popup-sub">
          Stainless steel plates, bowls, glasses and more — with sizes,
          grades, and pricing. Sent directly to your WhatsApp.
        </p>

        {done ? (
          <div className="popup-success">
            ✓ Thank you! We'll send the catalogue to your WhatsApp shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="popup-input"
            />
            <input
              type="tel"
              placeholder="WhatsApp number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              className="popup-input"
            />
            <button type="submit" className="popup-btn" disabled={sending}>
              {sending ? 'Sending...' : 'Send me the catalogue →'}
            </button>
          </form>
        )}

        <p className="popup-note">No spam. We only send what you ask for.</p>
      </div>
    </div>
  );
}
