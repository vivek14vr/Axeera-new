import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { motion } from 'framer-motion';
import { FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { PAYPAL_CONFIG, getPayPalScriptOptions, validatePayPalConfig } from '../../config/paypalConfig';

const PayPalButton = ({ 
  amount, 
  currency = 'USD', 
  description, 
  onSuccess, 
  onError, 
  onCancel,
  disabled = false,
  className = ''
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'error', 'canceled'

  // Validate PayPal configuration
  const isConfigValid = validatePayPalConfig();

  const handlePaymentSuccess = (details, data) => {
    setIsProcessing(false);
    setPaymentStatus('success');
    
    if (onSuccess) {
      onSuccess(details, data);
    }
  };

  const handlePaymentError = (err) => {
    setIsProcessing(false);
    setPaymentStatus('error');
    console.error('Payment error:', err);
    
    if (onError) {
      onError(err);
    }
  };

  const resetPaymentState = () => {
    setIsProcessing(false);
    setPaymentStatus(null);
  };

  const handlePaymentCancel = (data) => {
    setIsProcessing(false);
    setPaymentStatus('canceled');
    
    if (onCancel) {
      onCancel(data);
    }
  };

  const createOrder = (data, actions) => {
    setIsProcessing(true);
    setPaymentStatus(null);
    
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: currency
          },
          description: description || `Payment for ${amount} ${currency}`
        }
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    }).catch((error) => {
      console.error('Error creating PayPal order:', error);
      setIsProcessing(false);
      setPaymentStatus('error');
      throw error;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      handlePaymentSuccess(details, data);
    }).catch((error) => {
      console.error('Error capturing PayPal payment:', error);
      setIsProcessing(false);
      setPaymentStatus('error');
      if (onError) {
        onError(error);
      }
    });
  };

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'success':
        return <FaCheckCircle className="text-green-500" />;
      case 'error':
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusMessage = () => {
    switch (paymentStatus) {
      case 'success':
        return 'Payment completed successfully!';
      case 'error':
        return 'Payment failed. Please try again.';
      case 'canceled':
        return 'Payment was canceled.';
      default:
        return '';
    }
  };



  return (
    <div className={`paypal-payment-container ${className}`}>

      {paymentStatus && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`payment-status ${paymentStatus}`}
        >
          {getStatusIcon()}
          <span>{getStatusMessage()}</span>
        </motion.div>
      )}

      {isProcessing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="payment-processing"
        >
          <FaSpinner />
          <span>Processing payment...</span>
        </motion.div>
      )}

      {!isConfigValid ? (
        <div className="payment-status warning">
          <FaExclamationTriangle />
          <div>
            <h4 className="mb-2 font-semibold">PayPal Setup Required</h4>
            <p className="mb-3 text-sm">
              To enable PayPal payments, you need to configure your PayPal Client ID.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => window.open('https://developer.paypal.com/', '_blank')}
                className="btn btn-primary text-sm"
              >
                Get PayPal Client ID
              </button>
              <button 
                onClick={() => window.open('mailto:contact@yourcompany.com?subject=Payment Request', '_blank')}
                className="btn btn-outline text-sm"
              >
                Contact for Payment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="paypal-button-container">
          {paymentStatus === 'error' && (
            <div className="mb-4">
              <div className="payment-status error mb-3">
                <FaExclamationTriangle />
                <span>Payment failed. Please try again.</span>
              </div>
              <button 
                onClick={resetPaymentState}
                className="btn btn-outline text-sm w-full"
              >
                Try Again
              </button>
            </div>
          )}
          
          {paymentStatus !== 'error' && (
            <>
              <PayPalScriptProvider 
                options={getPayPalScriptOptions()}
                onError={(error) => {
                  console.error('PayPal SDK error:', error);
                  setPaymentStatus('error');
                }}
              >
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={handlePaymentError}
                  onCancel={handlePaymentCancel}
                  disabled={disabled || isProcessing}
                  style={PAYPAL_CONFIG.BUTTON_STYLE}
                  forceReRender={[amount, currency, description]}
                />
              </PayPalScriptProvider>
              
            </>
          )}
        </div>
      )}

      <div className="payment-info">
        <p className="text-sm text-gray-600">Secure payment powered by PayPal</p>
      </div>
    </div>
  );
};

export default PayPalButton;
