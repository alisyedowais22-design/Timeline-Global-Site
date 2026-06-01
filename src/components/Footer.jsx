import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const BRANCH_REGIONS = [
  { code: 'PK', name: 'Pakistan',    flag: '🇵🇰', href: 'https://website.teletix.pk/', status: 'live' },
  { code: 'ME', name: 'Middle East', flag: '🇦🇪', href: null,                           status: 'coming-soon' },
  { code: 'EU', name: 'Europe',      flag: '🇪🇺', href: null,                           status: 'coming-soon' },
];

const SOLUTIONS_LINKS = [
  { label: 'Logistics & Courier', to: '/solutions#logistics' },
  { label: 'Public Transport',    to: '/solutions#public-transport' },
  { label: 'Oil & Gas',           to: '/solutions#oil-gas' },
  { label: 'Construction',        to: '/solutions#construction' },
  { label: 'Healthcare',          to: '/solutions#healthcare' },
  { label: 'Government',          to: '/solutions#government' },
  { label: 'Agriculture',         to: '/solutions#agriculture' },
];

const Footer = () => (
  <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '72px 24px 0' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px', marginBottom: '56px',
      }}>

        {/* Brand */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <img src="/TimelineLogoWhite.png" alt="Timeline Telematics" style={{ height: '122px', width: 'auto' }} />
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '24px', color: '#64748b' }}>
            Vehicles. Assets. People. In motion, every second. Global fleet intelligence platform trusted by 25,000+ operators.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" style={{
                width: '36px', height: '36px', background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748b', transition: 'all 0.2s', textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,49,42,0.15)'; e.currentTarget.style.color = '#E8312A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#64748b'; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Solutions
          </h4>
          {SOLUTIONS_LINKS.map(s => (
            <Link key={s.label} to={s.to}
              style={{ display: 'block', color: '#64748b', fontSize: '14px', padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              {s.label}
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Quick Links
          </h4>
          {[
            { label: 'Home',         to: '/' },
            { label: 'About Us',     to: '/about' },
            { label: 'Our Products', to: '/our-products' },
            { label: 'Case Studies', to: '/case-studies' },
            { label: 'Contact',      to: '/contact' },
          ].map(item => (
            <Link key={item.label} to={item.to}
              style={{ display: 'block', color: '#64748b', fontSize: '14px', padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Regional + Contact */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Regional Sites
          </h4>
          {BRANCH_REGIONS.map(r => (
            r.status === 'live'
              ? <a key={r.code} href={r.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px', padding: '6px 0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <span>{r.flag}</span> {r.name}
                </a>
              : <div key={r.code} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px', padding: '6px 0', opacity: 0.5 }}>
                  <span>{r.flag}</span> {r.name}
                  <span style={{ fontSize: '9px', fontWeight: '700', background: 'rgba(251,191,36,0.15)', color: '#fbbf24', padding: '1px 6px', borderRadius: '999px', textTransform: 'uppercase' }}>Soon</span>
                </div>
          ))}

          <div style={{ marginTop: '28px' }}>
            <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Contact
            </h4>
            {[
              { Icon: Phone,  text: '+971 56 386 3615',              href: 'tel:+97156386361' },
              { Icon: Mail,   text: 'info@timelinetelematics.com', href: 'mailto:info@timelinetelematics.com' },
              { Icon: MapPin, text: 'Silicon Oasis, Business Center, Dubai, UAE',             href: '#' },
            ].map(({ Icon, text, href }) => (
              <a key={text} href={href}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13.5px', padding: '5px 0', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <Icon size={13} /> {text}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: '#475569' }}>
          © {new Date().getFullYear()} Timeline Telematics. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <a key={item} href="#"
              style={{ color: '#475569', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;