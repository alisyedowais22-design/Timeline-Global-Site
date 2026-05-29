import React, { useEffect } from 'react';
import TopBar  from '../components/TopBar';
import Navbar  from '../components/Navbar';
import Contact from '../components/Contact';
import Footer  from '../components/Footer';

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '116px' }}>

        {/* Page hero */}
        <div style={{
          padding: '172px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block', background: 'rgba(232,49,42,0.15)', color: '#fca5a5',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '18px',
              fontFamily: 'Poppins, sans-serif',
            }}>
              Get In Touch
            </div>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff',
              lineHeight: 1.15, marginBottom: '16px',
            }}>
              Let's Talk About <br /><span style={{ color: '#E8312A' }}>Your Fleet</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
              Whether you're ready for a demo, need support, or just have questions — we're here. Our team responds within 24 hours.
            </p>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;