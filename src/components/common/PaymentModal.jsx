import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCreditCard, FaShieldAlt, FaLock } from 'react-icons/fa';
import PayPalButton from './PayPalButton';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  planName, 
  amount, 
  currency = 'USD',
  description,
  onPaymentSuccess 
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal');

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful:', details);
    if (onPaymentSuccess) {
      onPaymentSuccess(details, data, planName, amount);
    }
    onClose();
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    // You can add error handling here
  };

  const handlePaymentCancel = (data) => {
    console.log('Payment canceled:', data);
    // You can add cancel handling here
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="payment-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="payment-modal-header">
              <div>
                <h2 className="payment-modal-title">Complete Payment</h2>
                <p className="payment-modal-subtitle">Secure payment for your selected plan</p>
              </div>
              <button
                onClick={onClose}
                className="payment-modal-close"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Plan Summary */}
            <div className="payment-plan-summary">
              <div className="payment-plan-card">
                <h3 className="payment-plan-name">{planName} Plan</h3>
                <div className="payment-plan-details">
                  <span className="payment-plan-label">Total Amount:</span>
                  <span className="payment-plan-amount">{formatAmount(amount)}</span>
                </div>
                <p className="payment-plan-description">{description}</p>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="payment-method-section">
              <h3 className="payment-method-title">Choose Payment Method</h3>
              
              <div className="payment-method-options">
                <label className="payment-method-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={selectedPaymentMethod === 'paypal'}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />
                  <FaCreditCard className="payment-method-icon" />
                  <div className="payment-method-info">
                    <h4>PayPal</h4>
                    <p>Pay with PayPal account or credit card</p>
                  </div>
                </label>
              </div>

              {/* Security Badges */}
              <div className="payment-security-badges">
                <div className="payment-security-badge">
                  <FaShieldAlt />
                  <span>SSL Secured</span>
                </div>
                <div className="payment-security-badge">
                  <FaLock />
                  <span>256-bit Encryption</span>
                </div>
              </div>

              {/* PayPal Payment Button */}
              {selectedPaymentMethod === 'paypal' && (
                <div className="paypal-payment-container">
                  <PayPalButton
                    amount={amount}
                    currency={currency}
                    description={description || `${planName} Plan - ${formatAmount(amount)}`}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    onCancel={handlePaymentCancel}
                    className="w-full"
                  />
                </div>
              )}

              {/* Additional Payment Methods Placeholder */}
              {selectedPaymentMethod !== 'paypal' && (
                <div className="text-center py-8 text-gray-500">
                  <p>This payment method is coming soon!</p>
                  <p className="text-sm mt-2">Please select PayPal for now.</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="payment-modal-footer">
              <p>
                By completing this payment, you agree to our Terms of Service and Privacy Policy.
                Your payment is processed securely by PayPal.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
