import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import StickyPayment from './StickyPayment';

const Layout = ({ children, heroMode = false }) => {
  return (
    <div className="app-layout">
      {!heroMode && <Navbar />}
      <main className={heroMode ? '' : 'main-content'}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
      <StickyPayment />
    </div>
  );
};

export default Layout; 