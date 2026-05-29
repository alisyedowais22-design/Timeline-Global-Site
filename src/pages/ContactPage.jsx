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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
