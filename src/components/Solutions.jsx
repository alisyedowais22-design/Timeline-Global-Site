import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  {
    slug: 'logistics',
    title: 'Logistics &\nCourier',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    slug: 'public-transport',
    title: 'Public\nTransport',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1584170554471-eef4977b1b74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="13" rx="2"/>
        <path d="M3 9h18"/>
        <circle cx="7.5" cy="19.5" r="2.5"/>
        <circle cx="16.5" cy="19.5" r="2.5"/>
        <path d="M7.5 17V16M16.5 17V16"/>
      </svg>
    ),
  },
  {
    slug: 'oil-gas',
    title: 'Oil &\nGas',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://plus.unsplash.com/premium_photo-1682148795124-dac95dd91fd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="18" rx="1"/>
        <rect x="14" y="8" width="7" height="13" rx="1"/>
        <path d="M10 6h4M10 10h4M10 14h4"/>
      </svg>
    ),
  },
  {
    slug: 'construction',
    title: 'Construction',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/>
        <path d="M6 20V10l6-7 6 7v10"/>
        <rect x="9" y="14" width="6" height="6"/>
      </svg>
    ),
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    slug: 'government',
    title: 'Government',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3"/>
        <rect x="5" y="10" width="3" height="11"/>
        <rect x="10.5" y="10" width="3" height="11"/>
        <rect x="16" y="10" width="3" height="11"/>
      </svg>
    ),
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    tagline: 'Maximize The Efficiency & Profitability Of Your Fleet',
    image: 'https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/>
        <path d="M12 2v10l7 4"/>
        <circle cx="4" cy="19" r="3"/>
      </svg>
    ),
  },
];

const Solutions = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: '#0a0a0a', padding: '0' }}>

      {/* Header */}
      <div style={{
        padding: '230px 24px 200px',
        textAlign: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.72)',
        }} />
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(232,49,42,0.15)', color: '#E8312A',
            fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
            letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px',
            border: '1px solid rgba(232,49,42,0.3)',
          }}>
            Industries We Serve
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '800', color: '#fff', marginBottom: '16px', lineHeight: '1.2',
          }}>
            Solutions For Every <span style={{ color: '#E8312A' }}>Industry</span>
          </h2>
          <p style={{ color: '#888', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            From logistics to healthcare, Timeline Telematics powers fleets across every sector with intelligent tracking solutions.
          </p>
        </div>
      </div>

      {/* Industry Cards — horizontal strips like the screenshot */}
      <div style={{
        display: 'flex',
        height: '480px',
        overflow: 'hidden',
      }}>
        {INDUSTRIES.map((ind, i) => {
          const isHovered = hovered === i;
          const anyHovered = hovered !== null;
          return (
            <div
              key={ind.slug}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: isHovered ? '3' : anyHovered ? '0.6' : '1',
                transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRight: i < INDUSTRIES.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              {/* Background image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${ind.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.6s ease',
              }} />

              {/* Dark overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isHovered
                  ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.3) 100%)',
                transition: 'background 0.4s ease',
              }} />

              {/* Red accent line at bottom on hover */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px',
                background: '#E8312A',
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left',
              }} />

              {/* Content */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '28px 20px',
              }}>
                {/* Icon circle */}
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  background: 'rgba(0,0,0,0.3)',
                  flexShrink: 0,
                }}>
                  {ind.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: isHovered ? '22px' : '15px',
                  fontWeight: '800',
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  lineHeight: '1.2',
                  marginBottom: '8px',
                  whiteSpace: 'pre-line',
                  transition: 'font-size 0.3s ease',
                }}>
                  {ind.title}
                </h3>

                {/* Tagline — only show when hovered */}
                <p style={{
                  color: '#ccc',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  maxWidth: '280px',
                }}>
                  {ind.tagline}
                </p>

                {/* Learn More link */}
                <Link
                  to={`/industries/${ind.slug}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: '#fff',
                    fontSize: '12px', fontWeight: '800',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
                    borderBottom: '2px solid #E8312A',
                    paddingBottom: '2px',
                    width: 'fit-content',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile grid (cards) — shown on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .industry-strip { display: none !important; }
          .industry-mobile { display: grid !important; }
        }
        .industry-strip { display: flex; }
        .industry-mobile { display: none; }
      `}</style>

      {/* Mobile fallback grid */}
      <div className="industry-mobile" style={{
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2px', background: '#000',
      }}>
        {INDUSTRIES.map((ind, i) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}`}
            style={{
              position: 'relative', height: '200px', overflow: 'hidden',
              textDecoration: 'none', display: 'block',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${ind.image})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '16px', left: '16px',
            }}>
              <div style={{ marginBottom: '8px' }}>{ind.icon}</div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', color: '#fff',
                fontSize: '13px', fontWeight: '800',
                textTransform: 'uppercase', letterSpacing: '0.5px',
                whiteSpace: 'pre-line', lineHeight: '1.2',
              }}>
                {ind.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export { INDUSTRIES };
export default Solutions;