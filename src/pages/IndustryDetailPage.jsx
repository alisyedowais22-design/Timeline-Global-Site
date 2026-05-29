import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Industry Data ─── */
const INDUSTRY_DATA = {
  'logistics': {
    title: 'Logistics & Courier',
    heroImage: 'https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Deliver More. Spend Less. Stress Never.',
    overview: 'The logistics and courier industry lives and dies by time. Late deliveries cost customers, wasted fuel costs profit, and idle drivers cost productivity. Timeline Telematics gives logistics operators complete real-time visibility over every vehicle, every route, and every driver — so you can make smarter decisions faster.',
    challenges: [
      'Unpredictable traffic causing late deliveries',
      'High fuel costs from inefficient routing',
      'Unauthorized vehicle use and theft risk',
      'Driver accountability and behavior issues',
      'Difficulty managing large, dispersed fleets',
    ],
    solutions: [
      {
        icon: '📍',
        title: 'Real-Time GPS Tracking',
        desc: 'Know exactly where every vehicle is at every moment. Share live ETAs with customers and dispatch smarter with full fleet visibility.',
      },
      {
        icon: '🗺️',
        title: 'Route Optimization',
        desc: 'Plan and replay routes to identify inefficiencies. Reduce kilometers driven, cut fuel consumption, and deliver more in less time.',
      },
      {
        icon: '⛽',
        title: 'Fuel Monitoring',
        desc: 'Track fuel consumption per vehicle, detect sudden drops that indicate theft, and reduce wasteful idling across your fleet.',
      },
      {
        icon: '🚨',
        title: 'Geofence Alerts',
        desc: 'Set virtual boundaries around depots, delivery zones, and restricted areas. Get instant alerts when vehicles enter or leave.',
      },
      {
        icon: '👤',
        title: 'Driver Behavior',
        desc: 'Monitor speeding, harsh braking, and rapid acceleration. Score drivers and reward safe behavior with data-backed reports.',
      },
      {
        icon: '📹',
        title: 'AI Dashcam',
        desc: 'Protect your drivers with video evidence. AI detects fatigue and distraction in real time to prevent accidents before they happen.',
      },
    ],
    benefits: [
      { stat: '25%', label: 'Reduction in Fuel Costs' },
      { stat: '30%', label: 'Faster Delivery Times' },
      { stat: '40%', label: 'Fewer Accidents' },
      { stat: '15%', label: 'Lower Operating Costs' },
    ],
    products: ['GT06N 4G', 'VL802', 'JC261', 'JC450'],
  },

  'public-transport': {
    title: 'Public Transport',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1400&q=80',
    tagline: 'Every Passenger. Every Route. On Time.',
    overview: 'Public transport operators face unique pressures — tight schedules, passenger safety obligations, regulatory compliance, and public accountability. Timeline Telematics helps bus and transit operators deliver reliable, safe, and efficient service while reducing operational costs.',
    challenges: [
      'Schedule adherence and on-time performance',
      'Passenger safety and driver accountability',
      'Fuel and maintenance cost management',
      'Regulatory compliance and reporting',
      'Coordinating large mixed-vehicle fleets',
    ],
    solutions: [
      {
        icon: '🕐',
        title: 'Schedule Adherence Monitoring',
        desc: 'Track buses against timetables in real time. Identify chronic delays, optimize routes, and report on-time performance automatically.',
      },
      {
        icon: '📹',
        title: 'Passenger & Cabin Monitoring',
        desc: 'AI dashcams monitor driver behavior and cabin conditions, ensuring passenger safety and providing evidence in incident disputes.',
      },
      {
        icon: '📊',
        title: 'Fleet Analytics Dashboard',
        desc: 'Central visibility across all vehicles, routes, and operators. Generate compliance reports with a single click.',
      },
      {
        icon: '⚠️',
        title: 'Driver Fatigue Detection',
        desc: 'DMS AI monitors driver eyes and head position to detect drowsiness and distraction, triggering immediate in-cab alerts.',
      },
      {
        icon: '🔧',
        title: 'Preventive Maintenance',
        desc: 'Track vehicle health data to schedule maintenance before breakdowns happen, reducing downtime and repair costs.',
      },
      {
        icon: '📍',
        title: 'Live Passenger Info',
        desc: 'Real-time location data enables live vehicle tracking apps for passengers, improving satisfaction and trust.',
      },
    ],
    benefits: [
      { stat: '20%', label: 'Improvement in On-Time Rates' },
      { stat: '35%', label: 'Reduction in Incidents' },
      { stat: '18%', label: 'Fuel Cost Savings' },
      { stat: '50%', label: 'Faster Incident Resolution' },
    ],
    products: ['JC371', 'JC450', 'VL802', 'VL110C'],
  },

  'oil-gas': {
    title: 'Oil & Gas',
    heroImage: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Precision Tracking for High-Stakes Operations.',
    overview: 'Oil and gas operations run in remote, hazardous, and high-value environments where vehicle tracking is not optional — it\'s critical. From field vehicles to tankers, Timeline Telematics gives operators complete command over their fleet with tools built for demanding industrial conditions.',
    challenges: [
      'Tracking vehicles in remote, off-grid locations',
      'Fuel theft and unauthorized vehicle use',
      'Driver safety in hazardous environments',
      'Compliance with strict HSE regulations',
      'High cost of unplanned vehicle downtime',
    ],
    solutions: [
      {
        icon: '🛰️',
        title: 'Remote Area Tracking',
        desc: 'GPS tracking with wide-band cellular coverage and satellite backup ensures vehicles are tracked even in the most remote field locations.',
      },
      {
        icon: '⛽',
        title: 'Fuel Theft Prevention',
        desc: 'Real-time fuel level monitoring with instant alerts for abnormal drops. CAN bus integration reads fuel data directly from the ECU.',
      },
      {
        icon: '🚨',
        title: 'SOS & Emergency Alerts',
        desc: 'Drivers can trigger silent SOS alerts instantly. Control rooms receive location, speed, and vehicle data automatically.',
      },
      {
        icon: '🌡️',
        title: 'Temperature Monitoring',
        desc: 'Monitor cargo temperature for chemical and petroleum product transport. Alerts trigger on out-of-range conditions.',
      },
      {
        icon: '📋',
        title: 'HSE Compliance Reporting',
        desc: 'Automated reports on driver hours, speeding events, and route compliance support HSE regulatory requirements.',
      },
      {
        icon: '🔒',
        title: 'Geofence Security Zones',
        desc: 'Define restricted zones around wellheads, refineries, and storage depots. Instant alerts on unauthorized access.',
      },
    ],
    benefits: [
      { stat: '30%', label: 'Reduction in Fuel Theft' },
      { stat: '45%', label: 'Improvement in HSE Compliance' },
      { stat: '20%', label: 'Lower Vehicle Downtime' },
      { stat: '100%', label: 'Remote Fleet Visibility' },
    ],
    products: ['VL110C', 'VL502', 'LL303PRO', 'VL808'],
  },

  'construction': {
    title: 'Construction',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
    tagline: 'Track Every Machine. Control Every Site.',
    overview: 'Construction fleets include everything from excavators and cranes to delivery trucks and supervisor vehicles — spread across multiple job sites. Timeline Telematics gives construction companies real-time control over equipment utilization, theft prevention, and operator accountability.',
    challenges: [
      'Equipment theft and unauthorized use',
      'Tracking assets across multiple job sites',
      'High fuel and equipment operating costs',
      'Operator accountability and safety compliance',
      'Delayed material deliveries impacting schedules',
    ],
    solutions: [
      {
        icon: '🏗️',
        title: 'Equipment Asset Tracking',
        desc: 'Track excavators, cranes, generators, and heavy machinery with battery-powered asset trackers that last years without charging.',
      },
      {
        icon: '🔐',
        title: 'Anti-Theft Geofencing',
        desc: 'Set security zones around job sites. Instantly alert when machinery moves outside defined boundaries — day or night.',
      },
      {
        icon: '⏱️',
        title: 'Engine Hours Monitoring',
        desc: 'Track actual machine runtime from the CAN bus. Schedule maintenance based on hours operated, not calendar dates.',
      },
      {
        icon: '🗺️',
        title: 'Multi-Site Fleet View',
        desc: 'Single dashboard shows all vehicles and equipment across all job sites. Assign, transfer, and track assets with ease.',
      },
      {
        icon: '⛽',
        title: 'Fuel & Idling Reports',
        desc: 'Identify machines left running unnecessarily. Reduce idle time, cut fuel waste, and lower carbon emissions across your fleet.',
      },
      {
        icon: '📹',
        title: 'Operator Monitoring',
        desc: 'AI dashcams on site vehicles monitor operator behavior, detect unsafe driving, and provide video evidence for incidents.',
      },
    ],
    benefits: [
      { stat: '60%', label: 'Reduction in Equipment Theft' },
      { stat: '22%', label: 'Lower Fuel Costs' },
      { stat: '35%', label: 'Better Asset Utilization' },
      { stat: '28%', label: 'Reduction in Downtime' },
    ],
    products: ['LL303PRO', 'LL301', 'VL110C', 'VL502'],
  },

  'healthcare': {
    title: 'Healthcare',
    heroImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=80',
    tagline: 'Every Second Counts. Track Every Vehicle.',
    overview: 'Healthcare fleets — ambulances, medical supply vehicles, blood bank transporters, and mobile clinics — operate under conditions where delays have life-or-death consequences. Timeline Telematics ensures healthcare operators have instant visibility, temperature-controlled cargo monitoring, and driver safety tools.',
    challenges: [
      'Response time optimization for emergency vehicles',
      'Temperature-sensitive medical supply integrity',
      'Driver fatigue in 24/7 emergency operations',
      'Vehicle availability and dispatch management',
      'Compliance with medical transport regulations',
    ],
    solutions: [
      {
        icon: '🚑',
        title: 'Emergency Dispatch Optimization',
        desc: 'Real-time location of all vehicles enables dispatchers to assign the nearest available unit instantly, cutting response times.',
      },
      {
        icon: '🌡️',
        title: 'Cold Chain Temperature Monitoring',
        desc: 'Monitor blood bank, vaccine, and pharmaceutical cargo temperatures in transit. Instant alerts on temperature excursions.',
      },
      {
        icon: '😴',
        title: 'Driver Fatigue Detection',
        desc: 'DMS AI monitors driver alertness and triggers warnings before fatigue causes accidents — critical for overnight shifts.',
      },
      {
        icon: '📍',
        title: 'Live Fleet Visibility',
        desc: 'Hospital dispatch sees every vehicle location, status, and ETA on a single screen for faster, smarter coordination.',
      },
      {
        icon: '📋',
        title: 'Compliance & Audit Trail',
        desc: 'Automatic logging of routes, times, temperatures, and driver behavior supports regulatory reporting and audits.',
      },
      {
        icon: '🔔',
        title: 'SOS & Panic Alerts',
        desc: 'Drivers can trigger SOS alerts silently. Dispatch receives immediate location and vehicle data for rapid response.',
      },
    ],
    benefits: [
      { stat: '40%', label: 'Faster Emergency Response' },
      { stat: '100%', label: 'Cold Chain Compliance' },
      { stat: '30%', label: 'Fewer Driver Incidents' },
      { stat: '25%', label: 'Reduction in Fuel Waste' },
    ],
    products: ['VL802', 'JC261', 'LL303PRO', 'GT06N 4G'],
  },

  'government': {
    title: 'Government',
    heroImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Accountable Fleets. Transparent Operations.',
    overview: 'Government fleet management demands transparency, accountability, and cost efficiency. From municipal vehicles to law enforcement fleets, Timeline Telematics provides the audit trail, compliance tools, and real-time visibility that government agencies need to operate responsibly.',
    challenges: [
      'Unauthorized use of government vehicles',
      'Lack of transparency and public accountability',
      'High fuel costs and budget pressures',
      'Compliance with government fleet regulations',
      'Difficulty managing multi-department fleets',
    ],
    solutions: [
      {
        icon: '📋',
        title: 'Full Audit Trail',
        desc: 'Every trip, driver, route, and event is logged automatically. Tamper-proof records support compliance audits and public accountability.',
      },
      {
        icon: '🔒',
        title: 'Unauthorized Use Detection',
        desc: 'After-hours movement alerts, ignition notifications, and driver ID tags ensure government vehicles are only used for official purposes.',
      },
      {
        icon: '💰',
        title: 'Cost Reduction Reports',
        desc: 'Identify fuel waste, excessive idling, and inefficient routing. Provide department heads with data to drive budget savings.',
      },
      {
        icon: '👤',
        title: 'Driver ID & Accountability',
        desc: 'RFID driver ID tags assign every trip to a specific driver. No shared vehicle confusion — complete individual accountability.',
      },
      {
        icon: '📊',
        title: 'Multi-Department Dashboard',
        desc: 'Manage police, municipal, utility, and administrative fleets from one platform with department-level access controls.',
      },
      {
        icon: '📍',
        title: 'Geofence Compliance Zones',
        desc: 'Define operational areas for different departments. Alert supervisors when vehicles operate outside authorized zones.',
      },
    ],
    benefits: [
      { stat: '35%', label: 'Reduction in Unauthorized Use' },
      { stat: '20%', label: 'Lower Fuel Expenditure' },
      { stat: '100%', label: 'Trip Audit Compliance' },
      { stat: '30%', label: 'Improved Accountability' },
    ],
    products: ['VL808', 'VL802', 'GT06N 4G', 'JC261'],
  },

  'agriculture': {
    title: 'Agriculture',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80',
    tagline: 'Smart Farming Starts with Smart Tracking.',
    overview: 'Agricultural operations involve tractors, harvesters, irrigation vehicles, and transport trucks spread across vast, often remote farmland. Timeline Telematics gives farm operators real-time visibility over their entire machinery fleet, helping reduce theft, optimize fuel use, and plan seasonal operations more efficiently.',
    challenges: [
      'Tracking machinery across vast remote farmland',
      'Equipment theft and unauthorized access',
      'High fuel consumption during peak seasons',
      'Maintenance scheduling for aging machinery',
      'Coordinating harvest transport and logistics',
    ],
    solutions: [
      {
        icon: '🚜',
        title: 'Farm Machinery Tracking',
        desc: 'Track tractors, harvesters, and sprayers across your entire farm. Know equipment location, status, and hours operated at all times.',
      },
      {
        icon: '🔐',
        title: 'Equipment Theft Prevention',
        desc: 'Long-life magnetic asset trackers attach to any machinery. Motion alerts and geofence notifications protect high-value equipment around the clock.',
      },
      {
        icon: '⛽',
        title: 'Fuel Usage Monitoring',
        desc: 'Monitor fuel consumption per machine and identify inefficiencies during plowing, harvesting, and transport operations.',
      },
      {
        icon: '🌡️',
        title: 'Temperature-Sensitive Transport',
        desc: 'Monitor refrigerated transport for perishable crops, dairy, and livestock. Ensure product quality from farm to market.',
      },
      {
        icon: '⏱️',
        title: 'Engine Hours & Maintenance',
        desc: 'Track actual machine runtime and schedule service at the right intervals — preventing costly breakdowns during critical harvest seasons.',
      },
      {
        icon: '🗺️',
        title: 'Seasonal Route Planning',
        desc: 'Optimize harvest transport routes, field access paths, and delivery schedules to maximize efficiency during peak seasons.',
      },
    ],
    benefits: [
      { stat: '50%', label: 'Reduction in Equipment Theft' },
      { stat: '20%', label: 'Lower Fuel Costs' },
      { stat: '30%', label: 'Better Machine Utilization' },
      { stat: '25%', label: 'Fewer Maintenance Breakdowns' },
    ],
    products: ['LL303PRO', 'LL301', 'VL110C', 'VG03'],
  },
};

/* ─── Component ─── */
const IndustryDetailPage = () => {
  const { slug } = useParams();
  const industry = INDUSTRY_DATA[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!industry) {
    return (
      <div>
        <TopBar /><Navbar />
        <div style={{ padding: '200px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#111' }}>Industry Not Found</h2>
          <Link to="/solutions" style={{ color: '#E8312A' }}>Back to Solutions</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: '#fff' }}>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${industry.heroImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          paddingTop: '112px',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
              <Link to="/solutions" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none' }}>Solutions</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
              <span style={{ color: '#E8312A', fontSize: '13px' }}>{industry.title}</span>
            </div>
            <div style={{
              display: 'inline-block', background: 'rgba(232,49,42,0.2)', color: '#ff6b63',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px',
              border: '1px solid rgba(232,49,42,0.4)',
            }}>
              Industry Solution
            </div>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: '900', color: '#fff', lineHeight: '1.1',
              marginBottom: '16px', textTransform: 'uppercase',
            }}>
              {industry.title}
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.8)', fontSize: '18px',
              fontStyle: 'italic', fontFamily: 'Poppins, sans-serif',
            }}>
              {industry.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section style={{ background: '#f9fafb', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              The Challenge
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '32px',
              fontWeight: '800', color: '#111', marginBottom: '20px',
            }}>
              What the {industry.title} Industry Faces
            </h2>
            <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
              {industry.overview}
            </p>
          </div>
          <div>
            <div style={{
              background: '#fff', borderRadius: '16px', padding: '32px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: '700',
                color: '#111', marginBottom: '20px', fontSize: '16px',
              }}>
                Key Challenges
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {industry.challenges.map((c, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '12px 0',
                    borderBottom: i < industry.challenges.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: '#fef2f2', border: '2px solid #fca5a5',
                      flexShrink: 0, marginTop: '2px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8312A' }} />
                    </div>
                    <span style={{ color: '#374151', fontSize: '14.5px', lineHeight: '1.5' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Our Solution
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '36px',
              fontWeight: '800', color: '#111',
            }}>
              How Timeline Telematics Helps
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {industry.solutions.map((sol, i) => (
              <div key={i} style={{
                background: '#f9fafb', borderRadius: '16px', padding: '32px',
                border: '1px solid #e5e7eb', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#fca5a5';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(232,49,42,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#f9fafb';
                }}
              >
                <div style={{
                  width: '52px', height: '52px', background: '#fef2f2', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', marginBottom: '20px',
                }}>
                  {sol.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: '700',
                  fontSize: '17px', color: '#111', marginBottom: '10px',
                }}>
                  {sol.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '14.5px', lineHeight: '1.7' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#E8312A', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${industry.benefits.length}, 1fr)`,
            gap: '32px',
            textAlign: 'center',
          }}>
            {industry.benefits.map((b, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '900', color: '#fff', lineHeight: '1',
                  marginBottom: '8px',
                }}>
                  {b.stat}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '600' }}>
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Products ── */}
      <section style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Recommended Hardware
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '32px',
              fontWeight: '800', color: '#111',
            }}>
              Products for {industry.title}
            </h2>
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center',
            marginBottom: '40px',
          }}>
            {industry.products.map((p, i) => (
              <div key={i} style={{
                background: '#fff', border: '2px solid #e5e7eb', borderRadius: '12px',
                padding: '16px 28px', fontFamily: 'Poppins, sans-serif',
                fontWeight: '700', fontSize: '15px', color: '#111',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8312A'; e.currentTarget.style.color = '#E8312A'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#111'; }}
              >
                {p}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#E8312A', color: '#fff',
              padding: '14px 32px', borderRadius: '10px',
              fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#c72a23'}
              onMouseLeave={e => e.currentTarget.style.background = '#E8312A'}
            >
              View All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#111', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '36px',
            fontWeight: '800', color: '#fff', marginBottom: '16px',
          }}>
            Ready to Transform Your <span style={{ color: '#E8312A' }}>{industry.title}</span> Fleet?
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.7', marginBottom: '36px' }}>
            Talk to our solutions team and get a customized proposal for your operation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#E8312A', color: '#fff',
              padding: '14px 32px', borderRadius: '10px',
              fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px',
              textDecoration: 'none',
            }}>
              Get a Free Consultation
            </Link>
            <Link to="/products" style={{
              background: 'transparent', color: '#fff',
              padding: '14px 32px', borderRadius: '10px',
              fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px',
              textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)',
            }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryDetailPage;