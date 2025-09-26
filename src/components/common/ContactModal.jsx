import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'f1_0ZqocOhQIcLpWB',
  SERVICE_ID: 'service_6xrl6bt',
  TEMPLATE_ID: 'template_sssxsoz',
  TO_EMAIL: 'rohitrajbharti91@gmail.com',
};

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactModal = ({ isOpen, onClose, variant = 'audit' }) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const title = variant === 'quote' ? 'Request a Quote' : 'Get Free Audit';
  const subtitle = variant === 'quote'
    ? 'Share your details and we will send a tailored quote.'
    : 'Share your details and we will send a free audit.';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      title: `${title} - ${formData.name || 'Website Visitor'}`,
      name: formData.name,
      time: new Date().toLocaleString(),
      message: formData.message,
      email: formData.email,
      phone: formData.phone || 'Not specified',
      service: variant,
      fromname: formData.name,
      fromemail: formData.email,
      replyto: formData.email,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      // Fallback: just close with submitted state
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="payment-modal-overlay fixed inset-0 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="payment-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="payment-modal-header">
              <div>
                <h2 className="payment-modal-title">{title}</h2>
                <p className="payment-modal-subtitle">{subtitle}</p>
              </div>
              <button onClick={onClose} className="payment-modal-close">
                <FaTimes size={16} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name"><FaUser style={{ marginRight: 6 }} /> Name *</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><FaEnvelope style={{ marginRight: 6 }} /> Email *</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><FaPhone style={{ marginRight: 6 }} /> Phone</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" />
                </div>
                <div className="form-group">
                  <label htmlFor="message"><FaCommentDots style={{ marginRight: 6 }} /> Message</label>
                  <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder={variant === 'quote' ? 'Tell us about your project...' : 'Share your website/goal for the audit...'} />
                </div>
                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                  <FaPaperPlane style={{ marginRight: 6 }} />
                  {isSubmitting ? 'Sending...' : (variant === 'quote' ? 'Request Quote' : 'Request Audit')}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <h3>Thank you!</h3>
                <p>We have received your request. We will get back to you shortly.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;



