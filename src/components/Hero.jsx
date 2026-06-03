import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import globalHome from '../assets/global-home.png';
import globalSolutions from '../assets/global-solutions.png';
import globalCaseStudies from '../assets/global-case-studies.png';
import globalProducts from '../assets/global-products.png';
import globalAbout from '../assets/global-about.png';
import globalContact from '../assets/global-home.png';

const SLIDES = [
  {
    eyebrow: 'GLOBAL TELEMATICS INTELLIGENCE',
    title: 'End-to-End Global Visibility.\nSmarter Fleet Control.',
    desc: 'Timeline Telematics delivers intelligent tracking, IoT monitoring, asset visibility, and fleet intelligence solutions for global operations.',
    primaryText: 'Talk to Expert',
    primaryLink: '/contact',
    secondaryText: 'Explore Solutions',
    secondaryLink: '/solutions',
    img: globalHome,
  },
  {
    eyebrow: 'SOLUTIONS FOR EVERY INDUSTRY',
    title: 'Connected Solutions\nFor Modern Fleets.',
    desc: 'From logistics and transportation to enterprise fleets, assets, and field operations, our solutions help businesses improve visibility, safety, and performance.',
    primaryText: 'View Solutions',
    primaryLink: '/solutions',
    secondaryText: 'Talk to Sales',
    secondaryLink: '/contact',
    img: globalSolutions,
  },
  {
    eyebrow: 'REAL RESULTS. REAL IMPACT.',
    title: 'Proven Results\nAcross Global Operations.',
    desc: 'See how intelligent telematics, connected devices, and smart fleet data help companies optimize performance and make better operational decisions.',
    primaryText: 'View Case Studies',
    primaryLink: '/case-studies',
    secondaryText: 'Success Stories',
    secondaryLink: '/case-studies',
    img: globalCaseStudies,
  },
  {
    eyebrow: 'ADVANCED IOT PRODUCTS',
    title: 'Hardware Built\nFor Complete Visibility.',
    desc: 'Explore IoT gateways, asset trackers, smart cargo monitoring devices, fleet optimization hardware, and intelligent sensor-based products.',
    primaryText: 'View Products',
    primaryLink: '/products',
    secondaryText: 'Request Quote',
    secondaryLink: '/contact',
    img: globalProducts,
  },
  {
    eyebrow: 'ABOUT TIMELINE TELEMATICS',
    title: 'Global Expertise.\nReliable Technology.',
    desc: 'We combine telematics, IoT hardware, fleet intelligence, and connected platforms to help businesses operate smarter across regions and industries.',
    primaryText: 'About Us',
    primaryLink: '/about',
    secondaryText: 'Contact Team',
    secondaryLink: '/contact',
    img: globalAbout,
  },
  {
    eyebrow: 'LET’S BUILD SMARTER OPERATIONS',
    title: 'Ready To Transform\nYour Fleet Visibility?',
    desc: 'Connect with Timeline Telematics to discuss your tracking, fleet management, IoT, asset visibility, and enterprise mobility requirements.',
    primaryText: 'Contact Us',
    primaryLink: '/contact',
    secondaryText: 'Talk to Expert',
    secondaryLink: '/contact',
    img: globalContact,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="global-hero">
      {SLIDES.map((item, index) => (
        <div
          key={index}
          className={`global-hero-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.img})` }}
        />
      ))}

      <div className="global-hero-overlay" />

      <div className="global-hero-content" key={current}>
        <p className="global-hero-eyebrow">{slide.eyebrow}</p>

        <h1 className="global-hero-title">
          {slide.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== slide.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        <p className="global-hero-desc">{slide.desc}</p>

        <div className="global-hero-actions">
          <Link to={slide.primaryLink} className="global-hero-btn">
            {slide.primaryText}
          </Link>

          <Link to={slide.secondaryLink} className="global-hero-link">
            {slide.secondaryText}
          </Link>
        </div>

        <div className="global-hero-dots">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === current ? 'active' : ''}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;