import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import StickyPayment from './StickyPayment';
import { ModalProvider } from './ModalContext';

const Layout = ({ children, heroMode = false }) => {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
};

export default Layout; 