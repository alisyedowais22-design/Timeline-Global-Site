import React, { useEffect } from 'react';
import TopBar      from '../components/TopBar';
import Navbar      from '../components/Navbar';
import CaseStudies from '../components/CaseStudies';
import CTABanner   from '../components/CTABanner';
import Footer      from '../components/Footer';

const CaseStudiesPage = () => {
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
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block', background: 'rgba(232,49,42,0.15)', color: '#fca5a5',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '18px',
              fontFamily: 'Poppins, sans-serif',
            }}>
              Success Stories
            </div>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: '800',
              fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff',
              lineHeight: 1.15, marginBottom: '16px',
            }}>
              Real Results for <span style={{ color: '#E8312A' }}>Real Fleets</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
              From Karachi to Dubai to Frankfurt — see how we've transformed fleet operations for operators across Pakistan, the Middle East, and Europe.
            </p>
          </div>
        </div>

        <CaseStudies />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;