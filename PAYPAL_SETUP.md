# PayPal Integration Setup Guide

This guide will help you set up PayPal payment integration for your website.

## 🚀 Quick Start

### 1. Get PayPal Developer Credentials

1. Go to [PayPal Developer Portal](https://developer.paypal.com/)
2. Sign in with your PayPal account or create a new one
3. Navigate to "My Apps & Credentials"
4. Click "Create App"
5. Choose "Default Application" or "Custom Application"
6. Select "Sandbox" for testing or "Live" for production
7. Copy your **Client ID**

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
# PayPal Configuration
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
VITE_PAYPAL_ENVIRONMENT=sandbox
VITE_PAYPAL_CURRENCY=USD
```

**Important:** Replace `your_paypal_client_id_here` with your actual PayPal Client ID.

### 3. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to any pricing page (Web Development, App Development, etc.)
3. Click "Pay Now" on any plan
4. Use PayPal sandbox credentials to test payments

## 🔧 Configuration Options

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_PAYPAL_CLIENT_ID` | Your PayPal Client ID | - | ✅ Yes |
| `VITE_PAYPAL_ENVIRONMENT` | `sandbox` or `live` | `sandbox` | ❌ No |
| `VITE_PAYPAL_CURRENCY` | Payment currency | `USD` | ❌ No |

### PayPal Button Styles

You can customize the PayPal button appearance in `src/config/paypalConfig.js`:

```javascript
BUTTON_STYLE: {
  layout: 'vertical',    // 'vertical' or 'horizontal'
  color: 'blue',         // 'blue', 'gold', 'silver', 'white'
  shape: 'rect',         // 'rect' or 'pill'
  label: 'paypal',       // 'paypal', 'checkout', 'pay', 'paypal'
  height: 45,            // Button height in pixels
  tagline: false         // Show PayPal tagline
}
```

## 📱 Features Included

### ✅ What's Working

- **PayPal Payment Processing**: Secure payment handling
- **Payment Modal**: Professional payment interface
- **Price Range Parsing**: Handles price ranges like "$299-699"
- **Error Handling**: Comprehensive error management
- **Success Callbacks**: Payment confirmation handling
- **Responsive Design**: Works on all devices
- **Security**: SSL encryption and secure token handling

### 🎯 Integration Points

- **Web Development Pricing**: `/pricing/web-development`
- **App Development Pricing**: `/pricing/app-development`
- **SEO Pricing**: `/pricing/seo` (ready for integration)

## 🧪 Testing

### Sandbox Testing

1. Use PayPal sandbox credentials
2. Test with different payment amounts
3. Test payment cancellation
4. Test payment failures

### Test Cards (Sandbox)

PayPal sandbox provides test accounts. You can also use these test card numbers:

- **Visa**: 4032031929711234
- **Mastercard**: 5555555555554444
- **American Express**: 378282246310005

## 🚀 Going Live

### 1. Switch to Live Environment

Update your `.env` file:

```env
VITE_PAYPAL_ENVIRONMENT=live
VITE_PAYPAL_CLIENT_ID=your_live_client_id_here
```

### 2. Get Live Credentials

1. In PayPal Developer Portal, create a new app
2. Select "Live" environment
3. Copy the Live Client ID
4. Update your environment variables

### 3. Test Live Payments

- Use real PayPal accounts
- Test with small amounts first
- Monitor PayPal dashboard for transactions

## 🔒 Security Best Practices

1. **Never expose your Client Secret** in frontend code
2. **Use HTTPS** in production
3. **Validate payments** on your backend
4. **Store transaction IDs** for record keeping
5. **Implement webhook handling** for payment status updates

## 🛠️ Customization

### Adding New Payment Methods

To add more payment methods (Stripe, Razorpay, etc.):

1. Create new payment components
2. Update `PaymentModal.jsx` to include new options
3. Add payment method selection logic

### Backend Integration

For production, you'll want to:

1. **Verify payments** on your backend
2. **Send confirmation emails**
3. **Update user accounts/subscriptions**
4. **Handle webhooks** for payment status updates

Example backend verification:

```javascript
// Backend verification example
const verifyPayment = async (paymentId) => {
  const response = await fetch(`https://api.paypal.com/v2/payments/orders/${paymentId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
```

## 📞 Support

### Common Issues

1. **"PayPal is not configured"**: Check your Client ID in environment variables
2. **Payment fails**: Verify your PayPal app is active and has correct permissions
3. **Button not showing**: Check browser console for JavaScript errors

### Getting Help

- [PayPal Developer Documentation](https://developer.paypal.com/docs/)
- [PayPal Support](https://www.paypal.com/support/)
- [React PayPal JS Documentation](https://www.npmjs.com/package/@paypal/react-paypal-js)

## 📋 Checklist

- [ ] PayPal Developer Account created
- [ ] Client ID obtained
- [ ] Environment variables configured
- [ ] Sandbox testing completed
- [ ] Live credentials obtained (for production)
- [ ] Payment flow tested
- [ ] Error handling verified
- [ ] Security measures implemented

---

**Note**: This integration is ready for testing. For production use, ensure you have proper backend verification and webhook handling in place.
