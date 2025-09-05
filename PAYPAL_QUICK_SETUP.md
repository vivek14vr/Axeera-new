# 🚀 PayPal Quick Setup Guide

## The Issue
You're seeing "Secure payment powered by PayPal" but no payment button because PayPal Client ID is not configured.

## Quick Fix (5 minutes)

### Step 1: Get PayPal Client ID
1. Go to [PayPal Developer Portal](https://developer.paypal.com/)
2. Sign in with your PayPal account
3. Click "My Apps & Credentials"
4. Click "Create App"
5. Choose "Default Application"
6. Select "Sandbox" (for testing)
7. Give it a name like "My Website"
8. Copy the **Client ID** (looks like: `AeA1QIZXiflr1_-lWjQ...`)

### Step 2: Add to Environment File
Create a `.env` file in your project root (same folder as package.json):

```env
VITE_PAYPAL_CLIENT_ID=your_actual_client_id_here
VITE_PAYPAL_ENVIRONMENT=sandbox
VITE_PAYPAL_CURRENCY=USD
```

**Replace `your_actual_client_id_here` with the Client ID you copied.**

### Step 3: Restart Development Server
1. Stop your development server (Ctrl+C)
2. Run `npm run dev` again
3. Test the payment popup

## Test Payment
- Use PayPal sandbox test accounts
- Test card: `4032031929711234` (Visa)
- Or create sandbox buyer account in PayPal Developer Portal

## Production Setup
When ready for live payments:
1. Create new PayPal app with "Live" environment
2. Update `.env` with live Client ID
3. Change `VITE_PAYPAL_ENVIRONMENT=live`

## Need Help?
- [PayPal Developer Documentation](https://developer.paypal.com/docs/)
- [PayPal Support](https://www.paypal.com/support/)

---
**That's it!** Once you add the Client ID, the PayPal payment button will appear and work perfectly! 🎉

