import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PayPalButton from '../components/common/PayPalButton';
import { FaShieldAlt, FaLock, FaTimes } from 'react-icons/fa';

const PaymentPopup = () => {
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Get parameters from URL
  const planName = searchParams.get('plan') || 'Unknown Plan';
  const amount = parseFloat(searchParams.get('amount')) || 0;
  const currency = searchParams.get('currency') || 'USD';
  const description = searchParams.get('description') || '';

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful:', details);
    setPaymentStatus('success');
    
    // Send message to parent window
    if (window.opener) {
      window.opener.postMessage({
        type: 'PAYMENT_SUCCESS',
        data: { details, data, planName, amount }
      }, '*');
    }
    
    // Close popup after 3 seconds
    setTimeout(() => {
      window.close();
    }, 3000);
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    setPaymentStatus('error');
    
    // Send message to parent window
    if (window.opener) {
      window.opener.postMessage({
        type: 'PAYMENT_ERROR',
        data: { error, planName, amount }
      }, '*');
    }
  };

  const handlePaymentCancel = (data) => {
    console.log('Payment canceled:', data);
    setPaymentStatus('canceled');
    
    // Send message to parent window
    if (window.opener) {
      window.opener.postMessage({
        type: 'PAYMENT_CANCELED',
        data: { data, planName, amount }
      }, '*');
    }
    
    // Close popup after 2 seconds
    setTimeout(() => {
      window.close();
    }, 2000);
  };

  const handleClose = () => {
    window.close();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="payment-popup-container">
      {/* Header */}
      <div className="payment-popup-header">
        <div className="payment-popup-title-section">
          <h1 className="payment-popup-title">Complete Payment</h1>
          <p className="payment-popup-subtitle">Secure payment for your selected plan</p>
        </div>
        <button onClick={handleClose} className="payment-popup-close">
          <FaTimes size={16} />
        </button>
      </div>

      {/* Plan Summary */}
      <div className="payment-popup-plan-summary">
        <div className="payment-popup-plan-card">
          <h3 className="payment-popup-plan-name">{planName} Plan</h3>
          <div className="payment-popup-plan-details">
            <span className="payment-popup-plan-label">Total Amount:</span>
            <span className="payment-popup-plan-amount">{formatAmount(amount)}</span>
          </div>
          <p className="payment-popup-plan-description">{description}</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-popup-method-section">
        <h3 className="payment-popup-method-title">Payment Method</h3>
        
        <div className="payment-popup-method-info">
          <div className="payment-popup-method-option">
            <FaShieldAlt className="payment-popup-method-icon" />
            <div className="payment-popup-method-details">
              <h4>PayPal</h4>
              <p>Pay with PayPal account or credit card</p>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="payment-popup-security-badges">
          <div className="payment-popup-security-badge">
            <FaShieldAlt />
            <span>SSL Secured</span>
          </div>
          <div className="payment-popup-security-badge">
            <FaLock />
            <span>256-bit Encryption</span>
          </div>
        </div>

        {/* PayPal Payment Button */}
        <div className="payment-popup-paypal-container">
          <PayPalButton
            amount={amount}
            currency={currency}
            description={description || `${planName} Plan - ${formatAmount(amount)}`}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={handlePaymentCancel}
            className="payment-popup-paypal-button"
          />
          
        </div>
      </div>

      {/* Footer */}
      <div className="payment-popup-footer">
        <p>
          By completing this payment, you agree to our Terms of Service and Privacy Policy.
          Your payment is processed securely by PayPal.
        </p>
      </div>
    </div>
  );
};

export default PaymentPopup;
