import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './mobile.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatBar from './components/FloatBar';
import LeadPopup from './components/LeadPopup';
import ExitPopup from './components/ExitPopup';
import Chatbot from './components/Chatbot';
import NotFound from './pages/NotFound';

/* ── Lazy-load pages for code splitting ── */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Quality = lazy(() => import('./pages/Quality'));
const Blog = lazy(() => import('./pages/Blog'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

/* ── Loading spinner ── */
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: '3px solid var(--rule-lt)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

/* ── Structured Data (JSON-LD) for Google ── */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Bishwambhar Bharat Metals",
    "alternateName": "BBM",
    "url": "https://bishwambharbharatmetals.com",
    "logo": "https://bishwambharbharatmetals.com/logo.png",
    "image": "https://bishwambharbharatmetals.com/images/IMAGE_1___Hero_background.webp",
    "description": "Premium stainless steel kitchenware manufacturer based in Bihar, India. SS 202 & SS 304 plates, bowls, glasses for homes, hotels, and distributors.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buxar",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5645",
      "longitude": "83.9777"
    },
    "email": "bishwambharbharatmetals@gmail.com",
    "sameAs": [
      "https://www.instagram.com/bishwambharbharatmetals/",
      "https://www.facebook.com/profile.php?id=61590358276975",
      "https://x.com/bbharatmetals"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "₹₹",
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Plates (Thali)", "material": "SS 202 / SS 304" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Bowls (Katori)", "material": "SS 202 / SS 304" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Glasses (Tumbler)", "material": "SS 202 / SS 304" } }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <StructuredData />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatBar />
        <LeadPopup />
        <ExitPopup />
        <Chatbot />
      </BrowserRouter>
    </HelmetProvider>
  );
}
