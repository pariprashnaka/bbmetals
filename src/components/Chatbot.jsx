import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import './Chatbot.css';

// ── Quick reply suggestions ──
const QUICK_REPLIES = [
  'What products do you make?',
  'What is the price?',
  'What is the MOQ?',
  'Do you deliver pan India?',
  'How do I place an order?',
  'What steel grade do you use?',
  'Are you GST registered?',
  'I want to become a dealer',
];

// ── Find best matching answer from data ──
function findAnswer(question, data) {
  const q = question.toLowerCase().trim();

  // Search FAQs first
  let bestMatch = null;
  let bestScore = 0;

  for (const faq of data.faqs) {
    const faqQ = (faq.question || '').toLowerCase();
    const faqA = faq.answer || '';
    const keywords = faqQ.split(/\s+/);
    const score = keywords.filter(k => k.length > 3 && q.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faqA;
    }
  }

  if (bestScore >= 1) return { type: 'faq', text: bestMatch };

  // Search products
  for (const prod of data.products) {
    const name = (prod.name || '').toLowerCase();
    if (q.includes('plate') || q.includes('thali')) {
      if (name.includes('plate') || name.includes('thali')) {
        return { type: 'product', product: prod };
      }
    }
    if (q.includes('bowl') || q.includes('katori')) {
      if (name.includes('bowl') || name.includes('katori')) {
        return { type: 'product', product: prod };
      }
    }
    if (q.includes('glass') || q.includes('tumbler') || q.includes('cup')) {
      if (name.includes('glass') || name.includes('tumbler')) {
        return { type: 'product', product: prod };
      }
    }
  }

  // Keyword matches
  if (q.includes('product') || q.includes('make') || q.includes('manufacture') || q.includes('sell')) {
    return { type: 'products_list', products: data.products };
  }
  if (q.includes('address') || q.includes('location') || q.includes('where')) {
    return { type: 'company', field: 'Location / Address' };
  }
  if (q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('contact')) {
    return { type: 'contact' };
  }
  if (q.includes('whatsapp') || q.includes('chat') || q.includes('message')) {
    return { type: 'whatsapp' };
  }
  if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('timing')) {
    return { type: 'company', field: 'Business hours' };
  }
  if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('₹')) {
    return { type: 'products_list', products: data.products, showPrice: true };
  }
  if (q.includes('moq') || q.includes('minimum') || q.includes('min order')) {
    return { type: 'moq' };
  }
  if (q.includes('deliver') || q.includes('ship') || q.includes('dispatch')) {
    return { type: 'company', field: 'Delivery area' };
  }

  return { type: 'fallback' };
}

// ── Format answer into message ──
function formatAnswer(result, data) {
  if (result.type === 'faq') {
    return result.text;
  }

  if (result.type === 'product') {
    const p = result.product;
    return `*${p.name}*\n\n📦 Grade: ${p.grade}\n📐 Sizes: ${p.sizes}\n✨ Finish: ${p.finish}\n✅ Suitable for: ${p.suitableFor}\n💰 Price: ${p.price}\n📊 MOQ: ${p.moq}\n\n${p.notes}`;
  }

  if (result.type === 'products_list') {
    let msg = "Here's what we manufacture:\n\n";
    data.products.forEach(p => {
      msg += `• *${p.name}*`;
      if (result.showPrice) msg += ` — ${p.price}`;
      msg += '\n';
    });
    msg += '\nWould you like details on any specific product?';
    return msg;
  }

  if (result.type === 'contact') {
    const phone = data.company['Phone number'] || '+91 XXXXX XXXXX';
    const wa = data.company['WhatsApp number'] || phone;
    return `You can reach us at:\n\n📞 Phone: ${phone}\n💬 WhatsApp: ${wa}\n✉️ Email: ${data.company['Email'] || 'bishwambharbharatmetals@gmail.com'}\n\n⏰ ${data.company['Business hours'] || 'Mon–Sat, 9am–6pm IST'}`;
  }

  if (result.type === 'whatsapp') {
    const wa = data.company['WhatsApp number'] || '+91 XXXXX XXXXX';
    return `You can WhatsApp us directly at *${wa}* — we reply quickly!\n\nOr click the WhatsApp button at the bottom of the page for instant chat.`;
  }

  if (result.type === 'company') {
    const val = data.company[result.field];
    if (val) return val;
    return "Please contact us directly for this information.";
  }

  if (result.type === 'moq') {
    const moqFields = Object.entries(data.company).filter(([k]) => k.toLowerCase().includes('moq'));
    if (moqFields.length > 0) {
      let msg = "Our minimum order quantities:\n\n";
      moqFields.forEach(([k, v]) => {
        const label = k.replace('MOQ — ', '');
        msg += `• *${label}*: ${v}\n`;
      });
      return msg;
    }
    return "We accept orders from a single piece (retail) to large bulk orders. Contact us for wholesale and distributor MOQ and pricing.";
  }

  if (result.type === 'fallback') {
    return null;
  }
}

// ── Load and parse Excel ──
async function loadChatbotData() {
  try {
    const res = await fetch('/BBM_Chatbot_Data.xlsx');
    const buf = await res.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });

    // Products
    const prodSheet = wb.Sheets['Products'];
    const prodRows = XLSX.utils.sheet_to_json(prodSheet, { header: 1, defval: '' });
    const products = prodRows.slice(3).filter(r => r[0]).map(r => ({
      name: r[0], category: r[1], grade: r[2], sizes: r[3],
      finish: r[4], suitableFor: r[5], price: r[6], moq: r[7], notes: r[8],
    }));

    // FAQs
    const faqSheet = wb.Sheets['FAQs'];
    const faqRows = XLSX.utils.sheet_to_json(faqSheet, { header: 1, defval: '' });
    const faqs = faqRows.slice(3).filter(r => r[1]).map(r => ({
      category: r[0], question: r[1], answer: r[2],
    }));

    // Company
    const compSheet = wb.Sheets['Company Info'];
    const compRows = XLSX.utils.sheet_to_json(compSheet, { header: 1, defval: '' });
    const company = {};
    compRows.slice(3).filter(r => r[0]).forEach(r => { company[r[0]] = r[1]; });

    return { products, faqs, company };
  } catch (err) {
    console.error('Chatbot data load error:', err);
    return { products: [], faqs: [], company: {} };
  }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  // Load data on first open
  useEffect(() => {
    if (open && !data) {
      setLoading(true);
      loadChatbotData().then(d => {
        setData(d);
        setLoading(false);
        const name = d.company['Company name'] || 'Bishwambhar Bharat Metals';
        setMessages([{
          from: 'bot',
          text: `Hi! 👋 Welcome to *${name}*.\n\nI can help you with product information, pricing, orders, and more. What would you like to know?`,
          time: now(),
        }]);
      });
    }
  }, [open, data]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function now() {
    return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }

  function addBotMessage(text) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text, time: now() }]);
    }, 800 + Math.random() * 600);
  }

  function handleSend(text) {
    const q = (text || input).trim();
    if (!q || !data) return;
    setInput('');

    setMessages(prev => [...prev, { from: 'user', text: q, time: now() }]);

    const result = findAnswer(q, data);
    const answer = formatAnswer(result, data);

    if (answer) {
      addBotMessage(answer);
    } else {
      // Fallback — offer contact options
      const phone = data.company['Phone number'] || '+91 XXXXX XXXXX';
      const wa = data.company['WhatsApp number'] || phone;
      addBotMessage(
        `I'm not sure about that, but our team can help you directly!\n\n📞 *Call us:* ${phone}\n💬 *WhatsApp:* ${wa}\n✉️ *Email:* ${data.company['Email'] || 'bishwambharbharatmetals@gmail.com'}\n\nOr use the Contact form on this website and we'll reply within 24 hours.`
      );
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Format message text — bold *text*, newlines
  function formatText(text) {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/\*([^*]+)\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <>
      {/* Toggle button */}
      <button className={`chat-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Chat with us">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        )}
        {!open && <span className="chat-toggle-label">Chat with us</span>}
      </button>

      {/* Chat window */}
      {open && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">BBM</div>
              <div>
                <div className="chat-header-name">BBM Support</div>
                <div className="chat-header-status">🟢 Online — replies instantly</div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>×</button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {loading && (
              <div className="chat-loading">
                <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                <div className="chat-bubble">{formatText(msg.text)}</div>
                <div className="chat-time">{msg.time}</div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="chat-bubble typing">
                  <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && !typing && (
            <div className="chat-quick">
              {QUICK_REPLIES.map(q => (
                <button key={q} className="chat-quick-btn" onClick={() => handleSend(q)}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="chat-send" onClick={() => handleSend()} disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
