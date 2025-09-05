// PayPal Configuration
// Replace these values with your actual PayPal credentials

export const PAYPAL_CONFIG = {
  // PayPal Client ID - Get from https://developer.paypal.com/developer/applications/
  // For development: Use sandbox credentials
  // For production: Use live credentials
  CLIENT_ID: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'YOUR_PAYPAL_CLIENT_ID_HERE',
  
  // PayPal Environment
  ENVIRONMENT: import.meta.env.VITE_PAYPAL_ENVIRONMENT || 'sandbox', // 'sandbox' or 'live'
  
  // Default Currency
  CURRENCY: import.meta.env.VITE_PAYPAL_CURRENCY || 'USD',
  
  // PayPal Features
  ENABLE_FUNDING: import.meta.env.VITE_PAYPAL_ENABLE_FUNDING || 'venmo,paylater',
  DISABLE_FUNDING: import.meta.env.VITE_PAYPAL_DISABLE_FUNDING || '',
  
  // Button Styles
  BUTTON_STYLE: {
    layout: 'vertical',
    color: 'blue',
    shape: 'rect',
    label: 'paypal',
    height: 40,
    tagline: false
  }
};

// Validation function
export const validatePayPalConfig = () => {
  console.log('Validating PayPal config:', {
    CLIENT_ID: PAYPAL_CONFIG.CLIENT_ID,
    ENVIRONMENT: PAYPAL_CONFIG.ENVIRONMENT,
    CURRENCY: PAYPAL_CONFIG.CURRENCY
  });
  
  if (!PAYPAL_CONFIG.CLIENT_ID || PAYPAL_CONFIG.CLIENT_ID === 'YOUR_PAYPAL_CLIENT_ID_HERE') {
    console.warn('⚠️ PayPal Client ID not configured. Please set VITE_PAYPAL_CLIENT_ID in your environment variables.');
    return false;
  }
  
  console.log('✅ PayPal configuration is valid');
  return true;
};

// Get PayPal Script Options
export const getPayPalScriptOptions = () => {
  return {
    'client-id': PAYPAL_CONFIG.CLIENT_ID,
    currency: PAYPAL_CONFIG.CURRENCY,
    'enable-funding': PAYPAL_CONFIG.ENABLE_FUNDING,
    'disable-funding': PAYPAL_CONFIG.DISABLE_FUNDING,
    'data-sdk-integration-source': 'integrationbuilder'
  };
};
