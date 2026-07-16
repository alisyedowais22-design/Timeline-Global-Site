import './ProductsPage.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState([]);

  const qohoImg = (fileName) => `/products/qoho/${fileName}`;

  const categories = [
    {
      id: 'vehicle',
      label: 'Vehicle Trackers',
      desc: 'Real-time GPS trackers for all vehicle types',
      products: [
        { id: 'gt06n-4g', model: 'GT06N 4G', image: '/products/GT06N 4G.png', name: 'Classic, Reimagined in 4G' },
        { id: 'vg03', model: 'VG03', image: '/products/VG03.png', name: 'Discreet Tracking' },
        { id: 'vl103d', model: 'VL103D', image: '/products/VL103D.png', name: 'Tiny Device' },
        { id: 'vl103m', model: 'VL103M', image: '/products/VL103M.png', name: 'Minimal Form' },
        { id: 'vl110c', model: 'VL110C', image: '/products/VL110C.png', name: 'Any Vehicle' },
        { id: 'vl802', model: 'VL802', image: '/products/VL802.png', name: 'More Visibility' },
        { id: 'vl808', model: 'VL808', image: '/products/VL808.png', name: 'Intelligent Tracking' },
        { id: 'x3', model: 'X3', image: '/products/X3.png', name: 'Voice Tracker' },
        { id: 'gt06n', model: 'GT06N', image: '/products/GT06N.png', name: 'The Classic' },
      ],
    },
    {
      id: 'can_obd',
      label: 'CAN & OBD Trackers',
      desc: 'Deep vehicle data via CAN bus integration',
      products: [
        { id: 'vl502', model: 'VL502', image: '/products/VL502.png', name: 'Fleet CAN Tracker' },
      ],
    },
    {
      id: 'asset',
      label: 'Asset Trackers',
      desc: 'Long-life battery trackers for valuable assets',
      products: [
        { id: 'll303pro', model: 'LL303PRO', image: '/products/LL303PRO.png', name: '5 Years Battery' },
        { id: 'll301', model: 'LL301', image: '/products/LL301.png', name: 'Silent Protector' },
      ],
    },
    {
      id: 'personal',
      label: 'Personal Trackers',
      desc: 'Discreet safety trackers for individuals',
      products: [
        { id: 'pl200', model: 'PL200', image: '/products/PL200.png', name: 'Silent Guardian' },
      ],
    },
    {
      id: 'dashcam',
      label: 'AI Dashcams',
      desc: 'ADAS & DMS AI-powered dashcams for fleet safety',
      products: [
        { id: 'f5', model: 'F5', image: '/products/f5.png', name: 'ADAS + BSD DashCam' },
        { id: 'f7', model: 'F7', image: '/products/f7.png', name: 'ADAS + BSD DashCam' },
        { id: 'jc371', model: 'JC371', image: '/products/jc371.png', name: 'AI Dashcam with ADAS' },
        { id: 'jc450', model: 'JC450', image: '/products/jc450.png', name: 'Multi-Channel AI Dashcam' },
        { id: 'jc261', model: 'JC261', image: '/products/jc261.png', name: 'Dual Camera AI Dashcam' },
        { id: 'jc261p', model: 'JC261P', image: '/products/jc261p.png', name: 'Pro AI Dashcam' },
        { id: 'jc400d', model: 'JC400D', image: '/products/jc400d.png', name: '4G AI Dashcam' },
      ],
    },
    {
      id: 'nonAidashcam',
      label: 'Non-AI Dashcams',
      desc: 'Reliable standalone dashcams for basic recording',
      products: [
        { id: 'jc181', model: 'JC181', image: '/products/jc181.png', name: 'Basic Dashcam' },
      ],
    },

    /* ───────────────── QOHO PRODUCTS ───────────────── */

    {
      id: 'qoho-ai-dvr-nvr',
      label: 'AI DVR / NVR Systems',
      desc: 'AI-powered mobile DVR, NVR and smart dash camera systems',
      products: [
        { id: 'qh-ai-4g-dash-camera', model: 'AI 4G Dash Camera', image: qohoImg('AI 4G Dash Camera.png'), name: '2CH/4CH 1080P AI Camera with 4G GPS WiFi' },
        { id: 'qh-mdvr8101s', model: 'MDVR8101S', image: qohoImg('MDVR8101S.png'), name: '1080P HD Mobile DVR Camera' },
        { id: 'qh-mdvr101n', model: 'MDVR101N', image: qohoImg('MDVR101N.png'), name: '4G GPS SD Card Mobile DVR' },
        { id: 'qh-three-sd-card-ai-mobile-dvr', model: 'Three SD Card AI Mobile DVR', image: qohoImg('three-sd-card-ai-mobile-dvr.png'), name: '8CH AI 1080P Mobile DVR' },
        { id: 'qh-ai-hdd-sd-mobile-dvr', model: 'AI HDD/SD Mobile DVR', image: qohoImg('AI HDDSD MobileDVR.png'), name: '8CH AI 4TB HDD/SSD Mobile DVR' },
        { id: 'qh-hybrid-mobile-nvr', model: 'Hybrid Mobile NVR', image: qohoImg('Hybrid Mobile NVR.png'), name: '8CH AHD + 4CH IPC / 12CH IPC NVR' },
        { id: 'qh-smallest-mobile-dvr', model: 'Smallest Mobile DVR', image: qohoImg('Smallest Mobile DVR.png'), name: '1CH to 4CH Waterproof Mobile DVR' },
        { id: 'qh-4ch-mobile-dvr-system-kit', model: '4CH Mobile DVR System Kit', image: qohoImg('DVS System.png'), name: '1080P Cameras + Dual Lens DVR Camera' },
        //{ id: 'qh-8ch-ahd-mobile-dvr-system', model: '8CH AHD Mobile DVR System', image: qohoImg('360° View System.png'), name: 'GPS 4G WiFi AHD Mobile DVR System' },
      ],
    },
    {
      id: 'qoho-ai-cameras',
      label: 'AI Cameras',
      desc: 'DMS, ADAS, BSD, counting, recognition and alcohol detection cameras',
      products: [
        { id: 'qh-mc810ip', model: 'QH-MC810IP', image: qohoImg('QH-MC810IP.png'), name: 'AI Smart IP People Counting Camera' },
        { id: 'qh-facial-palmprint-recognition-camera', model: 'Facial & Palmprint Recognition Camera', image: qohoImg('Facial and palm recogntion camera.png'), name: 'Driver Authentication Camera' },
        { id: 'qh-ai-alcohol-detection-camera', model: 'AI Alcohol Detection Camera', image: qohoImg('alcohol detection camera.png'), name: 'Contactless Automatic Alcohol Detection' },
        { id: 'qh-starlight-camera', model: 'Starlight Camera', image: qohoImg('Starlight Camera.png'), name: 'AI Low-Light Full-Color Night Vision Camera' },
        { id: 'qh-dashboard-dms-camera', model: 'Dashboard Installation DMS', image: qohoImg('Dashboard Installation DMS.png'), name: 'Driver Monitoring System Camera' },
        { id: 'qh-side-dms-camera', model: 'Side Installation DMS', image: qohoImg('Side Installation DMS.png'), name: 'Side Driver Monitoring Camera' },
        { id: 'qh-anti-explosive-dms-camera', model: 'Anti-Explosive DMS Camera', image: qohoImg('Anti-explosive DMS Camera.png'), name: 'DMS Camera for Oil/Gas and Truck Fleets' },
        { id: 'qh-facial-recognition-terminal', model: 'Facial Recognition Terminal', image: qohoImg('Facial and palm recogntion camera.png'), name: 'Face Recognition Biometric Machine' },
        { id: 'qh-vehicle-people-counting-camera', model: 'Vehicle People Counting Camera', image: qohoImg('Dual Lens Vehicle Counting Camera.png'), name: 'Passenger Counting Camera' },
        { id: 'qh-dual-lens-vehicle-counting-camera', model: 'Dual Lens Vehicle Counting Camera', image: qohoImg('Dual Lens Vehicle Counting Camera.png'), name: 'Passenger Flow Counting Camera' },
        { id: 'qh-dual-lens-head-counting-camera', model: 'Dual Lens Head Counting Camera', image: qohoImg('Dual Lens Head Counting Camera for Establishments.png'), name: 'People Counting Camera for Establishments' },
      ],
    },
    {
      id: 'qoho-body-cameras',
      label: 'Body Cameras',
      desc: 'Portable 4G/5G body cameras for field security and law enforcement',
      products: [
        { id: 'qh-ai-1080p-face-recognition-body-camera', model: 'AI 1080P Face Recognition Body Camera', image: qohoImg('Advanced HD Body Camera.png'), name: 'AI Body Camera' },
        { id: 'qh-1080p-portable-body-camera', model: '1080P Portable Body Camera', image: qohoImg('1080P Portable Body Camera.png'), name: 'Portable Body Camera' },
        { id: 'qh-5g-ai-body-camera', model: '5G AI Body Camera', image: qohoImg('Advanced HD Body Camera.png'), name: '5G AI Enhanced Imaging Body Camera' },
        { id: 'qh-4g-ai-body-camera-mini-cam', model: '4G AI Body Camera with 720P Mini Cam', image: qohoImg('1080P Portable Body Camera.png'), name: '4G AI Imaging & Positioning Body Camera' },
        { id: 'qh-advanced-hd-body-camera', model: 'Advanced HD Body Camera', image: qohoImg('Advanced HD Body Camera.png'), name: 'HD Recording Body Camera' },
        { id: 'qh-720p-mini-cam', model: '720P Mini Cam', image: qohoImg('1080P Portable Body Camera.png'), name: 'Mini USB Digital Camera' },
      ],
    },
    {
      id: 'qoho-vehicle-cameras',
      label: 'Vehicle Cameras',
      desc: 'Front, rear, side, dome, IP and anti-explosive vehicle cameras',
      products: [
        { id: 'qh-bb60v', model: 'BB60V', image: qohoImg('BB60V.png'), name: '1080P Anti-Explosive Camera' },
        { id: 'qh-mc1205', model: 'MC1205', image: qohoImg('MC1205.png'), name: '1080P Bullet Front Road Camera' },
        { id: 'qh-mc620', model: 'MC620', image: qohoImg('MC620.png'), name: '1080P Dual Lens Vehicle Camera' },
        { id: 'qh-mc200d', model: 'MC200D', image: qohoImg('MC200D.png'), name: '2MP Dual View IP Camera' },
        { id: 'qh-inside-140-cabin-camera', model: 'Inside 140° Cabin Camera', image: qohoImg('MC610.png'), name: 'Wide View Cabin Camera' },
        { id: 'qh-mc018', model: 'MC018', image: qohoImg('MC018.png'), name: '1080P 18pcs LED Rear View Camera' },
        { id: 'qh-mc076', model: 'MC076', image: qohoImg('MC076.png'), name: '1080P Mini Vehicle IR Rear Camera' },
        { id: 'qh-mc512', model: 'MC512', image: qohoImg('MC512.png'), name: '1080P 12pcs IR Side IP Camera' },
        { id: 'qh-mc610', model: 'MC610', image: qohoImg('MC610.png'), name: '1080P Mini Vehicle Side Camera' },
        { id: 'qh-ipc011', model: 'IPC011', image: qohoImg('IPC011.png'), name: '1080P 2MP Mini IP Camera' },
        { id: 'qh-mc710ip', model: 'MC710IP', image: qohoImg('MC710IP.png'), name: 'Waterproof Vandalproof Dome IP Camera' },
        { id: 'qh-mc015w', model: 'MC015W', image: qohoImg('MC015W.png'), name: 'Vandal Proof IR Dome Bus Camera' },
        { id: 'qh-mc524', model: 'MC524', image: qohoImg('MC524.png'), name: '1080P 24pcs IR Dome Bus Camera' },
      ],
    },
    {
      id: 'qoho-360-bsd-systems',
      label: '360° / BSD Systems',
      desc: '360° surround view, BSD, DVS and radar monitoring systems',
      products: [
        //{ id: 'qh-360-bsd-system', model: '360° BSD System', image: qohoImg('360° BSD System.png'), name: '10-inch 8CH 360° BSD System' },
        { id: 'qh-360-ai-bsd-monitor-system', model: '360° AI BSD Monitor System', image: qohoImg('360° AI BSD Monitor System.png'), name: '10-inch 5CH 360° BSD System' },
        { id: 'qh-dvs-system', model: 'DVS System', image: qohoImg('DVS System.png'), name: '7-inch Monitor + Radar + Rear Camera' },
        { id: 'qh-360-view-system', model: '360° View System', image: qohoImg('360° View System.png'), name: 'Truck & Specialty Vehicle View System' },
      ],
    },
    {
      id: 'qoho-monitors',
      label: 'On-board Monitors',
      desc: 'Vehicle monitors, recording monitors and wireless display systems',
      products: [
        { id: 'qh-7inch-2ch-car-monitor', model: '7inch 2CH Car Monitor', image: qohoImg('360° BSD System.png'), name: '720P/1080P 2CH Car Monitor' },
        { id: 'qh-12-3-tft-lcd-car-monitor', model: '12.3” TFT-LCD Car Monitor', image: qohoImg('360° AI BSD Monitor System.png'), name: 'Wide TFT-LCD Vehicle Monitor' },
        { id: 'qh-7inch-sd-card-quad-monitor', model: '7inch SD Card Quad Monitor', image: qohoImg('SD card Recording Quad Monitor.png'), name: '720P HD Recording Quad Monitor' },
        { id: 'qh-7inch-waterproof-car-monitor', model: '7inch Waterproof Car Monitor', image: qohoImg('SD card Recording Quad Monitor.png'), name: 'IP65 Waterproof Car Monitor' },
        { id: 'qh-wireless-waterproof-display-system', model: '7” Wireless Waterproof Display System', image: qohoImg('360° BSD System.png'), name: 'Wireless Waterproof Display System' },
        { id: 'qh-wireless-video-recorder', model: '7” Wireless Video Recorder', image: qohoImg('SD card Recording Quad Monitor.png'), name: '1080P Wireless Video Recorder' },
      ],
    },
    {
      id: 'qoho-ptz-peripherals',
      label: 'PTZ & Peripherals',
      desc: 'PTZ cameras, thermal imaging, UPS battery and TPMS products',
      products: [
        { id: 'qh-thermal-laser-ptz-camera', model: 'Thermal/Laser PTZ Camera', image: qohoImg('Thermal Imaging Vehicle Dual-Light Fusion Integrated Machine.png'), name: 'Thermal & Laser PTZ Camera' },
        { id: 'qh-intelligent-ir-ptz-camera', model: 'Intelligent IR PTZ Camera', image: qohoImg('Intelligent high-speed infrared PTZ Camera.png'), name: 'High-Speed Infrared PTZ Camera' },
        { id: 'qh-thermal-imaging-dual-light-machine', model: 'Thermal Imaging Dual-Light Machine', image: qohoImg('Thermal Imaging Vehicle Dual-Light Fusion Integrated Machine.png'), name: 'Vehicle Dual-Light Fusion Machine' },
        { id: 'qh-ups-battery', model: 'UPS Battery', image: qohoImg('UPS Battery.png'), name: 'Mobile DVR Backup Battery' },
        { id: 'qh-tire-pressure-monitoring-system', model: 'Tire Pressure Monitoring System', image: qohoImg('Tire Pressure Monitoring System.png'), name: 'TPMS Monitoring System' },
      ],
    },
  ];

  const toggleFilter = (id) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const visibleCategories =
    activeFilters.length === 0
      ? categories
      : categories.filter((c) => activeFilters.includes(c.id));

  return (
    <div className="products-page">
      <TopBar />
      <Navbar />

      <section
        className="products-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('https://images.unsplash.com/photo-1602526432604-029a709e131c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <h1 className="products-hero-title">GPS Tracking Devices</h1>
          <p className="products-hero-subtitle">Intelligent Integrated Tracking Solutions</p>
          <p className="products-hero-desc">
            Timeline provides complete solutions for real-time GPS fleet management,
            vehicle security, personal tracking, asset monitoring, and AI-powered
            dashcams.
          </p>
        </div>
      </section>

      <div className="products-filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <span className="filter-bar-label">Filter by:</span>

            <div className="filter-bar-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-pill ${activeFilters.includes(cat.id) ? 'active' : ''}`}
                  onClick={() => toggleFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}

              {activeFilters.length > 0 && (
                <button
                  className="filter-pill filter-pill-reset"
                  onClick={() => setActiveFilters([])}
                >
                  ✕ Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="products-main">
        <div className="container">
          {visibleCategories.map((cat) => (
            <div key={cat.id} className="products-category-group">
              <div className="products-category-header">
                <div>
                  <h2 className="products-category-title">{cat.label}</h2>
                  <p className="products-category-desc">{cat.desc}</p>
                </div>

                <span className="products-category-count">
                  {cat.products.length} Product{cat.products.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="products-grid">
                {cat.products.map((product) => (
                  <div
                    key={product.id}
                    className="product-card"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <div className="product-image-wrapper">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.model}
                          className="product-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            minHeight: '120px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: '#dc2626',
                            fontWeight: 800,
                            fontSize: '18px',
                            lineHeight: 1.25,
                            padding: '12px',
                          }}
                        >
                          {product.model}
                        </div>
                      )}
                    </div>

                    <div className="product-info">
                      <h3 className="product-model">{product.model}</h3>
                      <p className="product-name-tag">{product.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Get Solution Now!</h2>
            <p className="cta-text">
              Contact us today to find the perfect GPS tracking solution for your fleet
            </p>
            <Link to="/contact" className="cta-btn">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;