import React, { useState } from 'react';
import './index.css';
import './mobile.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatBar from './components/FloatBar';
import LeadPopup from './components/LeadPopup';
import ExitPopup from './components/ExitPopup';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import './pages/Home.css';
import { About, Products, Quality, Gallery, Contact } from './pages/Pages';
import Blog from './pages/Blog';

export default function App() {
  const [page, setPage] = useState('Home');

  function navigate(p) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPage() {
    switch (page) {
      case 'Home':        return <Home onNav={navigate} />;
      case 'About':       return <About onNav={navigate} />;
      case 'Products':    return <Products onNav={navigate} />;
      case 'Quality':     return <Quality />;
      case 'Blog':        return <Blog onNav={navigate} />;
      case 'Gallery':     return <Gallery />;
      case 'Contact':     return <Contact />;
      default:            return <Home onNav={navigate} />;
    }
  }

  return (
    <>
      <Navbar current={page} onNav={navigate} />
      <main>{renderPage()}</main>
      <Footer onNav={navigate} />
      <FloatBar onEnquire={() => navigate('Contact')} />
      <LeadPopup />
      <ExitPopup />
      <Chatbot />
    </>
  );
}
