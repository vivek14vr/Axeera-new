// Payment utility functions
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

export const parsePriceRange = (priceString) => {
  // Parse price ranges like "$299-699" or "$1999-2999"
  const match = priceString.match(/\$?(\d+(?:,\d{3})*)-(\d+(?:,\d{3})*)/);
  if (match) {
    const min = parseInt(match[1].replace(/,/g, ''));
    const max = parseInt(match[2].replace(/,/g, ''));
    return { min, max, average: Math.round((min + max) / 2) };
  }
  
  // Parse single prices like "$299" or "$1999"
  const singleMatch = priceString.match(/\$?(\d+(?:,\d{3})*)/);
  if (singleMatch) {
    const amount = parseInt(singleMatch[1].replace(/,/g, ''));
    return { min: amount, max: amount, average: amount };
  }
  
  return { min: 0, max: 0, average: 0 };
};

export const getPaymentDescription = (planName, serviceType = '') => {
  const servicePrefix = serviceType ? `${serviceType} - ` : '';
  return `${servicePrefix}${planName} Plan`;
};

export const validatePaymentAmount = (amount) => {
  if (typeof amount !== 'number' || amount <= 0) {
    throw new Error('Invalid payment amount');
  }
  if (amount < 1) {
    throw new Error('Minimum payment amount is $1');
  }
  if (amount > 10000) {
    throw new Error('Maximum payment amount is $10,000');
  }
  return true;
};

export const logPaymentEvent = (event, data) => {
  // Log payment events for analytics/debugging
  console.log(`Payment Event: ${event}`, data);
  
  // You can integrate with analytics services here
  // Example: Google Analytics, Mixpanel, etc.
  if (window.gtag) {
    window.gtag('event', 'payment_event', {
      event_category: 'payment',
      event_label: event,
      value: data.amount || 0
    });
  }
};

export const sendPaymentConfirmation = async (paymentData) => {
  try {
    // Send payment confirmation email or notification
    // This is a placeholder - implement based on your backend
    console.log('Sending payment confirmation:', paymentData);
    
    // Example: Send to your backend API
    // const response = await fetch('/api/payment-confirmation', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(paymentData)
    // });
    
    return { success: true, message: 'Confirmation sent successfully' };
  } catch (error) {
    console.error('Failed to send payment confirmation:', error);
    return { success: false, message: 'Failed to send confirmation' };
  }
};

export const getPaymentStatus = (status) => {
  const statusMap = {
    'COMPLETED': 'Payment completed successfully',
    'PENDING': 'Payment is pending',
    'FAILED': 'Payment failed',
    'CANCELED': 'Payment was canceled',
    'REFUNDED': 'Payment was refunded'
  };
  
  return statusMap[status] || 'Unknown payment status';
};

