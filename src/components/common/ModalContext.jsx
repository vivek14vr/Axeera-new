import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ContactModal from './ContactModal';

const ModalContext = createContext({
  openContactModal: (variant) => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactVariant, setContactVariant] = useState('audit');

  const openContactModal = useCallback((variant = 'audit') => {
    setContactVariant(variant);
    setIsContactOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  const value = useMemo(() => ({ openContactModal }), [openContactModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} variant={contactVariant} />
    </ModalContext.Provider>
  );
};

export default ModalContext;



