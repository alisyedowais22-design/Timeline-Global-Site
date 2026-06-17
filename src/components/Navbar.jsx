import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuIcon = () => <span style={{ fontSize: '24px' }}>☰</span>;
const CloseIcon = () => <span style={{ fontSize: '24px' }}>✕</span>;
const ChevronDown = () => <span style={{ fontSize: '12px', marginLeft: '4px' }}>▼</span>;

const DEVICES = [
  {
    category: 'Vehicle Trackers',
    desc: 'GPS tracking devices',
    items: [
      { label: 'GT06N 4G', desc: 'Classic Upgraded', to: '/products/gt06n-4g' },
      { label: 'VG03', desc: 'Discreet Tracking', to: '/products/vg03' },
      { label: 'VL103D', desc: 'Tiny Device', to: '/products/vl103d' },
      { label: 'VL103M', desc: 'Minimal Form', to: '/products/vl103m' },
      { label: 'VL110C', desc: 'Any Vehicle', to: '/products/vl110c' },
      { label: 'VL802', desc: 'More Visibility', to: '/products/vl802' },
      { label: 'VL808', desc: 'Intelligent Tracking', to: '/products/vl808' },
      { label: 'X3', desc: 'Voice Tracker', to: '/products/x3' },
      { label: 'GT06N', desc: 'The Classic', to: '/products/gt06n' },
    ],
  },
  {
    category: 'AI Dashcams',
    desc: 'ADAS & DMS cameras',
    items: [
      { label: 'JC371', desc: 'AI Dashcam with ADAS', to: '/products/jc371' },
      { label: 'JC450', desc: 'Multi-Channel AI Dashcam', to: '/products/jc450' },
      { label: 'JC261', desc: 'Dual Camera AI Dashcam', to: '/products/jc261' },
      { label: 'JC261P', desc: 'Pro AI Dashcam', to: '/products/jc261p' },
      { label: 'JC400D', desc: '4G AI Dashcam', to: '/products/jc400d' },
    ],
  },
  {
    category: 'CAN & OBD',
    desc: 'Vehicle data trackers',
    items: [
      { label: 'VL502', desc: 'Fleet CAN Tracker', to: '/products/vl502' },
    ],
  },
  {
    category: 'Asset Trackers',
    desc: 'Long-life asset devices',
    items: [
      { label: 'LL303PRO', desc: '5 Years Battery', to: '/products/ll303pro' },
      { label: 'LL301', desc: 'Silent Protector', to: '/products/ll301' },
    ],
  },
  {
    category: 'Personal Trackers',
    desc: 'Personal safety devices',
    items: [
      { label: 'PL200', desc: 'Silent Guardian', to: '/products/pl200' },
    ],
  },
  {
    category: 'Non-AI Dashcams',
    desc: 'Basic video recording',
    items: [
      { label: 'JC181', desc: 'Basic Dashcam', to: '/products/jc181' },
    ],
  },
  {
    category: 'Accessories',
    desc: 'Cables, cameras & sensors',
    items: [
      { label: 'All Accessories', desc: 'Cables, Cameras & Sensors', to: '/accessories' },
    ],
  },
  {
    category: 'AI DVR / NVR Systems',
    desc: 'Mobile DVR/NVR systems',
    items: [
      { label: 'AI 4G Dash Camera', desc: '2CH/4CH 1080P AI Camera', to: '/products/qh-ai-4g-dash-camera' },
      { label: 'MDVR8101S', desc: '1080P HD Mobile DVR', to: '/products/qh-mdvr8101s' },
      { label: 'MDVR101N', desc: '4G GPS SD Card Mobile DVR', to: '/products/qh-mdvr101n' },
      { label: 'Three SD Card AI DVR', desc: '8CH AI 1080P Mobile DVR', to: '/products/qh-three-sd-card-ai-mobile-dvr' },
      { label: 'AI HDD/SD Mobile DVR', desc: '8CH AI 4TB HDD/SSD', to: '/products/qh-ai-hdd-sd-mobile-dvr' },
      { label: 'Hybrid Mobile NVR', desc: '8CH AHD + 4CH IPC', to: '/products/qh-hybrid-mobile-nvr' },
      { label: 'Smallest Mobile DVR', desc: '1CH to 4CH Waterproof DVR', to: '/products/qh-smallest-mobile-dvr' },
      { label: '4CH Mobile DVR Kit', desc: '1080P Cameras + DVR', to: '/products/qh-4ch-mobile-dvr-system-kit' },
      { label: '8CH AHD Mobile DVR', desc: 'GPS 4G WiFi DVR System', to: '/products/qh-8ch-ahd-mobile-dvr-system' },
    ],
  },
  {
    category: 'AI Cameras',
    desc: 'DMS, counting & recognition',
    items: [
      { label: 'QH-MC810IP', desc: 'AI People Counting Camera', to: '/products/qh-mc810ip' },
      { label: 'Facial & Palmprint Camera', desc: 'Driver Authentication', to: '/products/qh-facial-palmprint-recognition-camera' },
      { label: 'AI Alcohol Detection', desc: 'Contactless Detection', to: '/products/qh-ai-alcohol-detection-camera' },
      { label: 'Starlight Camera', desc: 'Full-Color Night Vision', to: '/products/qh-starlight-camera' },
      { label: 'Dashboard DMS', desc: 'Driver Monitoring Camera', to: '/products/qh-dashboard-dms-camera' },
      { label: 'Side DMS', desc: 'Side Driver Monitoring', to: '/products/qh-side-dms-camera' },
      { label: 'Anti-Explosive DMS', desc: 'Oil/Gas & Truck Fleets', to: '/products/qh-anti-explosive-dms-camera' },
      { label: 'Facial Recognition Terminal', desc: 'Biometric Machine', to: '/products/qh-facial-recognition-terminal' },
      { label: 'Vehicle People Counting', desc: 'Passenger Counting', to: '/products/qh-vehicle-people-counting-camera' },
      { label: 'Dual Lens Vehicle Counting', desc: 'Passenger Flow Camera', to: '/products/qh-dual-lens-vehicle-counting-camera' },
      { label: 'Dual Lens Head Counting', desc: 'People Counting Camera', to: '/products/qh-dual-lens-head-counting-camera' },
    ],
  },
  {
    category: 'Vehicle Cameras',
    desc: 'Front, rear, side & dome',
    items: [
      { label: 'BB60V', desc: '1080P Anti-Explosive Camera', to: '/products/qh-bb60v' },
      { label: 'MC1205', desc: 'Bullet Front Road Camera', to: '/products/qh-mc1205' },
      { label: 'MC620', desc: 'Dual Lens Vehicle Camera', to: '/products/qh-mc620' },
      { label: 'MC200D', desc: '2MP Dual View IP Camera', to: '/products/qh-mc200d' },
      { label: 'Inside 140° Cabin Camera', desc: 'Wide Cabin View Camera', to: '/products/qh-inside-140-cabin-camera' },
      { label: 'MC018', desc: '18pcs LED Rear Camera', to: '/products/qh-mc018' },
      { label: 'MC076', desc: 'Mini IR Rear Camera', to: '/products/qh-mc076' },
      { label: 'MC512', desc: '12pcs IR Side IP Camera', to: '/products/qh-mc512' },
      { label: 'MC610', desc: 'Mini Vehicle Side Camera', to: '/products/qh-mc610' },
      { label: 'IPC011', desc: '1080P 2MP Mini IP Camera', to: '/products/qh-ipc011' },
      { label: 'MC710IP', desc: 'Waterproof Dome IP Camera', to: '/products/qh-mc710ip' },
      { label: 'MC015W', desc: 'IR Dome Bus Camera', to: '/products/qh-mc015w' },
      { label: 'MC524', desc: '24pcs IR Dome Bus Camera', to: '/products/qh-mc524' },
    ],
  },
  {
    category: 'Body Cameras',
    desc: 'Portable body cameras',
    items: [
      { label: 'AI 1080P Body Camera', desc: 'Face Recognition Camera', to: '/products/qh-ai-1080p-face-recognition-body-camera' },
      { label: '1080P Portable Body Camera', desc: 'Portable Body Camera', to: '/products/qh-1080p-portable-body-camera' },
      { label: '5G AI Body Camera', desc: 'Enhanced Imaging Camera', to: '/products/qh-5g-ai-body-camera' },
      { label: '4G AI Body Camera', desc: 'With 720P Mini Cam', to: '/products/qh-4g-ai-body-camera-mini-cam' },
      { label: 'Advanced HD Body Camera', desc: 'HD Recording Camera', to: '/products/qh-advanced-hd-body-camera' },
      { label: '720P Mini Cam', desc: 'Mini USB Digital Camera', to: '/products/qh-720p-mini-cam' },
    ],
  },
  {
    category: '360° / BSD Systems',
    desc: 'Surround & blind spot systems',
    items: [
      { label: '360° BSD System', desc: '10-inch 8CH BSD System', to: '/products/qh-360-bsd-system' },
      { label: '360° AI BSD Monitor', desc: '10-inch 5CH BSD System', to: '/products/qh-360-ai-bsd-monitor-system' },
      { label: 'DVS System', desc: 'Monitor + Radar + Camera', to: '/products/qh-dvs-system' },
      { label: '360° View System', desc: 'Truck & Specialty Vehicles', to: '/products/qh-360-view-system' },
    ],
  },
  {
    category: 'On-board Monitors',
    desc: 'Vehicle displays',
    items: [
      { label: '7inch 2CH Car Monitor', desc: '720P/1080P Monitor', to: '/products/qh-7inch-2ch-car-monitor' },
      { label: '12.3” TFT-LCD Monitor', desc: 'Wide Vehicle Monitor', to: '/products/qh-12-3-tft-lcd-car-monitor' },
      { label: '7inch SD Card Quad Monitor', desc: '720P HD Recording Monitor', to: '/products/qh-7inch-sd-card-quad-monitor' },
      { label: '7inch Waterproof Monitor', desc: 'IP65 Waterproof Monitor', to: '/products/qh-7inch-waterproof-car-monitor' },
      { label: 'Wireless Display System', desc: '7” Waterproof Display', to: '/products/qh-wireless-waterproof-display-system' },
      { label: 'Wireless Video Recorder', desc: '1080P Wireless Recorder', to: '/products/qh-wireless-video-recorder' },
    ],
  },
  {
    category: 'PTZ & Peripherals',
    desc: 'PTZ, TPMS & UPS battery',
    items: [
      { label: 'Thermal/Laser PTZ Camera', desc: 'Thermal & Laser PTZ', to: '/products/qh-thermal-laser-ptz-camera' },
      { label: 'Intelligent IR PTZ Camera', desc: 'High-Speed Infrared PTZ', to: '/products/qh-intelligent-ir-ptz-camera' },
      { label: 'Thermal Imaging Machine', desc: 'Dual-Light Fusion Machine', to: '/products/qh-thermal-imaging-dual-light-machine' },
      { label: 'UPS Battery', desc: 'Mobile DVR Backup Battery', to: '/products/qh-ups-battery' },
      { label: 'TPMS Monitoring System', desc: 'Tire Pressure Monitoring', to: '/products/qh-tire-pressure-monitoring-system' },
    ],
  },
];

const INDUSTRIES = [
  { label: 'Logistics & Courier', slug: 'logistics' },
  { label: 'Public Transport', slug: 'public-transport' },
  { label: 'Oil & Gas', slug: 'oil-gas' },
  { label: 'Construction', slug: 'construction' },
  { label: 'Healthcare', slug: 'healthcare' },
  { label: 'Government', slug: 'government' },
  { label: 'Agriculture', slug: 'agriculture' },
];

const VEHICLE_SOLUTIONS = [
  { label: 'Bus Monitoring Solution', slug: 'bus-monitoring-solution' },
  { label: 'Cargo Truck Solution', slug: 'cargo-truck-solution' },
  { label: 'Oil Truck Solution', slug: 'oil-truck-solution' },
  { label: 'School Bus Solution', slug: 'school-bus-solution' },
  { label: 'Train Monitoring Solution', slug: 'train-monitoring-solution' },
  { label: 'Police Car Solution', slug: 'police-car-solution' },
  { label: 'Police Car Solution System', slug: 'police-car-system' },
  { label: 'Private Car/SUV Solution', slug: 'private-car-suv-solution' },
  { label: 'Motorcycle Solution', slug: 'motorcycle-solution' },
  { label: 'Military Vehicle Solution', slug: 'military-vehicle-solution' },
  { label: 'Fire Truck Solution', slug: 'fire-truck-solution' },
];

const HoverDropdown = ({ label, to, children, active }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const show = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => {
          setOpen(false);
          navigate(to);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '7px 14px',
          fontSize: '13.5px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
          color: open || active ? '#E8312A' : '#374151',
          borderRadius: '7px',
          background: 'none',
          border: 'none',
          borderBottom: active ? '2px solid #E8312A' : '2px solid transparent',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
      >
        {label} <ChevronDown />
      </button>

      {open && (
        <div
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
            border: '1px solid #f0f0f0',
            zIndex: 9999,
            animation: 'fadeDown 0.15s ease',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const ProductsDropdownContent = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = DEVICES[activeIndex];

  return (
    <div
      style={{
        width: 760,
        maxWidth: '92vw',
        height: 500,
        maxHeight: 'calc(100vh - 210px)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #f3f4f6',
          fontSize: '10.5px',
          fontWeight: '800',
          letterSpacing: '0.08em',
          color: '#9ca3af',
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'uppercase',
          height: 42,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Our Hardware Products
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          height: 'calc(100% - 92px)',
          minHeight: 0,
        }}
      >
        <div
          className="products-category-scroll"
          style={{
            borderRight: '1px solid #f3f4f6',
            padding: '8px',
            overflowY: 'auto',
            background: '#fff',
            minHeight: 0,
          }}
        >
          {DEVICES.map((cat, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={cat.category}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  background: active ? '#fef2f2' : 'transparent',
                  borderLeft: active ? '3px solid #E8312A' : '3px solid transparent',
                  padding: '8px 9px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  marginBottom: 3,
                  transition: 'all 0.15s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: active ? '#E8312A' : '#111827',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.22,
                  }}
                >
                  {cat.category}
                </div>

                <div
                  style={{
                    fontSize: '10px',
                    color: '#9ca3af',
                    marginTop: 2,
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.15,
                  }}
                >
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>

        <div
          className="products-items-scroll"
          style={{
            padding: '12px 16px',
            overflowY: 'auto',
            background: '#fff',
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              paddingBottom: 9,
              marginBottom: 8,
              borderBottom: '1px solid #f3f4f6',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: '900',
                  color: '#E8312A',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {activeCategory.category}
              </div>

              <div
                style={{
                  fontSize: '10.5px',
                  color: '#9ca3af',
                  marginTop: 2,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {activeCategory.items.length} products available
              </div>
            </div>

            <Link
              to="/products"
              onClick={onClose}
              style={{
                fontSize: '12px',
                fontWeight: '800',
                color: '#E8312A',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              View All →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: activeCategory.items.length > 8 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
              gap: '4px 12px',
            }}
          >
            {activeCategory.items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '7px 8px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fef2f2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: '800',
                    color: '#111827',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.25,
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontSize: '10.2px',
                    color: '#9ca3af',
                    marginTop: 2,
                    lineHeight: 1.22,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          height: 50,
          padding: '8px 16px',
          borderTop: '1px solid #f3f4f6',
          textAlign: 'center',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/products"
          onClick={onClose}
          style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#E8312A',
            fontFamily: 'Poppins, sans-serif',
            textDecoration: 'none',
          }}
        >
          View All Products →
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false);

  const location = useLocation();

  const isActive = (to) => location.pathname === to;

  const isSolutionsActive =
    location.pathname === '/solutions' ||
    location.pathname.startsWith('/vehicle-solutions') ||
    location.pathname.startsWith('/solutions/');

  const isIndustriesActive = location.pathname.startsWith('/industries');

  const isProductsActive =
    location.pathname === '/products' ||
    location.pathname.startsWith('/products') ||
    location.pathname === '/accessories';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProdOpen(false);
    setMobileSolOpen(false);
    setMobileIndOpen(false);
  }, [location.pathname]);

  const linkStyle = (to) => ({
    padding: '7px 14px',
    fontSize: '13.5px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    color: isActive(to) ? '#E8312A' : '#374151',
    borderRadius: '7px',
    textDecoration: 'none',
    transition: 'color 0.2s',
    borderBottom: isActive(to) ? '2px solid #E8312A' : '2px solid transparent',
  });

  const dropdownLinkStyle = {
    display: 'block',
    padding: '8px 9px',
    borderRadius: 8,
    textDecoration: 'none',
    transition: 'background 0.15s',
  };

  const dropdownTextStyle = {
    fontSize: '13px',
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '1.35',
  };

  const sectionHeadingStyle = {
    fontSize: '10.5px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    color: '#9ca3af',
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottom: '1px solid #f3f4f6',
  };

  const hoverBg = (e) => {
    e.currentTarget.style.background = '#fef2f2';
  };

  const leaveBg = (e) => {
    e.currentTarget.style.background = 'transparent';
  };

  return (
    <>
      <nav
        style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
          position: 'fixed',
          top: scrolled ? '0' : '40px',
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/Timelinelogo.png"
              alt="Timeline Telematics"
              style={{ height: '120px', width: '300px', paddingBottom: '15px' }}
            />
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            <Link
              to="/"
              style={linkStyle('/')}
              onMouseEnter={(e) => {
                if (!isActive('/')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) e.currentTarget.style.color = '#374151';
              }}
            >
              Home
            </Link>

            <HoverDropdown label="Solutions" to="/vehicle-solutions" active={isSolutionsActive}>
              <div style={{ padding: '14px 16px', width: 520, maxWidth: '92vw' }}>
                <div style={sectionHeadingStyle}>Vehicle Monitoring Systems</div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '3px 10px',
                  }}
                >
                  {VEHICLE_SOLUTIONS.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/vehicle-solutions/${item.slug}`}
                      style={dropdownLinkStyle}
                      onMouseEnter={hoverBg}
                      onMouseLeave={leaveBg}
                    >
                      <div style={dropdownTextStyle}>{item.label}</div>
                    </Link>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 10,
                    paddingTop: 10,
                    borderTop: '1px solid #f3f4f6',
                    textAlign: 'center',
                  }}
                >
                  <Link
                    to="/vehicle-solutions"
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '700',
                      color: '#E8312A',
                      fontFamily: 'Poppins, sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    View All Vehicle Solutions →
                  </Link>
                </div>
              </div>
            </HoverDropdown>

            <HoverDropdown label="Industries" to="/solutions" active={isIndustriesActive}>
              <div style={{ padding: '14px 16px', width: 280, maxWidth: '92vw' }}>
                <div style={sectionHeadingStyle}>Industries We Serve</div>

                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    style={dropdownLinkStyle}
                    onMouseEnter={hoverBg}
                    onMouseLeave={leaveBg}
                  >
                    <div style={dropdownTextStyle}>{ind.label}</div>
                  </Link>
                ))}

                <div
                  style={{
                    marginTop: 10,
                    paddingTop: 10,
                    borderTop: '1px solid #f3f4f6',
                    textAlign: 'center',
                  }}
                >
                  <Link
                    to="/solutions"
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '700',
                      color: '#E8312A',
                      fontFamily: 'Poppins, sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    View All Industries →
                  </Link>
                </div>
              </div>
            </HoverDropdown>

            <Link
              to="/case-studies"
              style={linkStyle('/case-studies')}
              onMouseEnter={(e) => {
                if (!isActive('/case-studies')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/case-studies')) e.currentTarget.style.color = '#374151';
              }}
            >
              Case Studies
            </Link>

            <HoverDropdown label="Products" to="/products" active={isProductsActive}>
              <ProductsDropdownContent />
            </HoverDropdown>

            <Link
              to="/about"
              style={linkStyle('/about')}
              onMouseEnter={(e) => {
                if (!isActive('/about')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/about')) e.currentTarget.style.color = '#374151';
              }}
            >
              About
            </Link>

            <Link
              to="/contact"
              style={linkStyle('/contact')}
              onMouseEnter={(e) => {
                if (!isActive('/contact')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/contact')) e.currentTarget.style.color = '#374151';
              }}
            >
              Contact
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link
              to="/contact"
              style={{
                background: '#E8312A',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c72a23';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E8312A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to Expert
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mob-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            style={{
              background: '#fff',
              borderTop: '1px solid #f3f4f6',
              padding: '12px 24px 20px',
              maxHeight: 'calc(100vh - 72px)',
              overflowY: 'auto',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
                color: isActive('/') ? '#E8312A' : '#374151',
                borderBottom: '1px solid #f3f4f6',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileSolOpen(!mobileSolOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  color: isSolutionsActive ? '#E8312A' : '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Solutions <ChevronDown />
              </button>

              {mobileSolOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {VEHICLE_SOLUTIONS.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/vehicle-solutions/${item.slug}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileSolOpen(false);
                      }}
                      style={{
                        display: 'block',
                        padding: '9px 0',
                        fontSize: '13.5px',
                        fontWeight: '600',
                        color: '#374151',
                        borderBottom: '1px solid #f9fafb',
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    to="/vehicle-solutions"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileSolOpen(false);
                    }}
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#E8312A',
                      textDecoration: 'none',
                    }}
                  >
                    View All Vehicle Solutions →
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileIndOpen(!mobileIndOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  color: isIndustriesActive ? '#E8312A' : '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Industries <ChevronDown />
              </button>

              {mobileIndOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={`/industries/${ind.slug}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileIndOpen(false);
                      }}
                      style={{
                        display: 'block',
                        padding: '9px 0',
                        fontSize: '13.5px',
                        fontWeight: '600',
                        color: '#374151',
                        borderBottom: '1px solid #f9fafb',
                        textDecoration: 'none',
                      }}
                    >
                      {ind.label}
                    </Link>
                  ))}

                  <Link
                    to="/solutions"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileIndOpen(false);
                    }}
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#E8312A',
                      textDecoration: 'none',
                    }}
                  >
                    View All Industries →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
                color: isActive('/case-studies') ? '#E8312A' : '#374151',
                borderBottom: '1px solid #f3f4f6',
                textDecoration: 'none',
              }}
            >
              Case Studies
            </Link>

            <div>
              <button
                onClick={() => setMobileProdOpen(!mobileProdOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  color: isProductsActive ? '#E8312A' : '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Products <ChevronDown />
              </button>

              {mobileProdOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {DEVICES.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: 10 }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#E8312A',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          padding: '8px 0 4px',
                        }}
                      >
                        {cat.category}
                      </div>

                      {cat.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileProdOpen(false);
                          }}
                          style={{
                            display: 'block',
                            padding: '8px 0',
                            borderBottom: '1px solid #f9fafb',
                            textDecoration: 'none',
                          }}
                        >
                          <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#111827' }}>
                            {item.label}
                          </div>

                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}

                  <Link
                    to="/products"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileProdOpen(false);
                    }}
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#E8312A',
                      textDecoration: 'none',
                    }}
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
                color: isActive('/about') ? '#E8312A' : '#374151',
                borderBottom: '1px solid #f3f4f6',
                textDecoration: 'none',
              }}
            >
              About
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
                color: isActive('/contact') ? '#E8312A' : '#374151',
                borderBottom: '1px solid #f3f4f6',
                textDecoration: 'none',
              }}
            >
              Contact
            </Link>
          </div>
        )}

        <style>{`
          @media(max-width:900px){
            .desktop-nav{display:none!important}
            .mob-btn{display:flex!important}
          }

          .products-category-scroll::-webkit-scrollbar,
          .products-items-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .products-category-scroll::-webkit-scrollbar-track,
          .products-items-scroll::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 999px;
          }

          .products-category-scroll::-webkit-scrollbar-thumb,
          .products-items-scroll::-webkit-scrollbar-thumb {
            background: #e5e7eb;
            border-radius: 999px;
          }

          .products-category-scroll::-webkit-scrollbar-thumb:hover,
          .products-items-scroll::-webkit-scrollbar-thumb:hover {
            background: #d1d5db;
          }

          @keyframes fadeDown {
            from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;