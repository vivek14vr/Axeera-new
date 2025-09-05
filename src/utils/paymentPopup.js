// Utility functions for opening payment popup windows

export const openPaymentPopup = (planName, amount, currency = 'USD', description = '') => {
  // Create URL parameters
  const params = new URLSearchParams({
    plan: planName,
    amount: amount.toString(),
    currency: currency,
    description: description
  });

  // Popup window features
  const popupFeatures = [
    'width=600',
    'height=700',
    'scrollbars=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'location=no',
    'status=no',
    'left=' + (screen.width / 2 - 300),
    'top=' + (screen.height / 2 - 350)
  ].join(',');

  // Open popup window
  const popup = window.open(
    `/payment?${params.toString()}`,
    'paymentPopup',
    popupFeatures
  );

  // Focus the popup
  if (popup) {
    popup.focus();
  }

  return popup;
};

export const handlePaymentMessage = (event, onSuccess, onError, onCancel) => {
  // Verify origin for security
  if (event.origin !== window.location.origin) {
    return;
  }

  const { type, data } = event.data;

  switch (type) {
    case 'PAYMENT_SUCCESS':
      console.log('Payment successful:', data);
      if (onSuccess) {
        onSuccess(data.details, data.data, data.planName, data.amount);
      }
      break;
    
    case 'PAYMENT_ERROR':
      console.error('Payment error:', data);
      if (onError) {
        onError(data.error);
      }
      break;
    
    case 'PAYMENT_CANCELED':
      console.log('Payment canceled:', data);
      if (onCancel) {
        onCancel(data.data);
      }
      break;
    
    default:
      break;
  }
};

export const setupPaymentListener = (onSuccess, onError, onCancel) => {
  const handleMessage = (event) => {
    handlePaymentMessage(event, onSuccess, onError, onCancel);
  };

  window.addEventListener('message', handleMessage);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('message', handleMessage);
  };
};

