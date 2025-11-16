# Razorpay Payment Integration Setup Guide

This guide explains how to set up Razorpay payment integration in your ZynPay application.

## Prerequisites

1. A Razorpay account (Sign up at https://razorpay.com/)
2. Access to Razorpay Dashboard
3. Your Razorpay Key ID and Key Secret

## Step-by-Step Setup

### Step 1: Create a Razorpay Account

1. Go to https://razorpay.com/
2. Click on "Sign Up" and create your account
3. Complete the KYC verification process

### Step 2: Get Your API Keys

1. Log in to your Razorpay Dashboard
2. Navigate to **Settings** → **API Keys**
3. You'll see two keys:
   - **Key ID** (This is your public key - safe to use in frontend)
   - **Key Secret** (This is your secret key - NEVER expose in frontend)

### Step 3: Configure Your Application

#### Frontend Configuration (Payment.tsx)

1. Open `src/pages/Payment.tsx`
2. Find the line that says:
   ```typescript
   key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
   ```
3. Replace `'YOUR_RAZORPAY_KEY_ID'` with your actual Razorpay Key ID

#### Backend Configuration (Required for Production)

**IMPORTANT**: The current implementation uses a mock order ID. For production, you MUST:

1. **Create a Backend API Endpoint** to create orders:
   ```javascript
   // Example: POST /api/create-order
   const razorpay = require('razorpay');
   const instance = new razorpay({
     key_id: 'YOUR_KEY_ID',
     key_secret: 'YOUR_KEY_SECRET'
   });

   app.post('/api/create-order', async (req, res) => {
     const { amount, currency } = req.body;
     const options = {
       amount: amount * 100, // Convert to paise
       currency: currency || 'INR',
       receipt: `receipt_${Date.now()}`
     };
     
     try {
       const order = await instance.orders.create(options);
       res.json({ orderId: order.id });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```

2. **Create a Payment Verification Endpoint**:
   ```javascript
   // Example: POST /api/verify-payment
   const crypto = require('crypto');

   app.post('/api/verify-payment', (req, res) => {
     const { orderId, paymentId, signature } = req.body;
     const text = `${orderId}|${paymentId}`;
     const generatedSignature = crypto
       .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
       .update(text)
       .digest('hex');
     
     if (generatedSignature === signature) {
       // Payment verified - update your database
       res.json({ verified: true });
     } else {
       res.status(400).json({ verified: false });
     }
   });
   ```

3. **Update Payment.tsx** to call your backend:
   ```typescript
   // Replace the mock order creation with:
   const response = await fetch('/api/create-order', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       amount: totalAmount,
       currency: 'USD' // or 'INR'
     })
   });
   const { orderId } = await response.json();
   ```

### Step 4: Test the Integration

#### Test Mode

1. Use Razorpay's test mode keys (available in Dashboard → Settings → API Keys → Test Mode)
2. Use test card numbers:
   - **Card Number**: 4111 1111 1111 1111
   - **CVV**: Any 3 digits
   - **Expiry**: Any future date
   - **Name**: Any name

#### Live Mode

1. Switch to Live Mode in Razorpay Dashboard
2. Use your live API keys
3. Process real payments

## How It Works

### User Flow

1. **Add to Cart**: User clicks "Add to Cart" on a product → Item is added to cart
2. **View Cart**: User clicks cart icon → Cart page shows all items
3. **Checkout**: User clicks "Proceed to Checkout" → Redirects to Payment page
4. **Buy Now**: User clicks "Buy Now" → Directly goes to Payment page
5. **Payment**: Razorpay payment modal opens → User completes payment
6. **Success**: User is redirected to Payment Success page

### Technical Flow

1. **Cart Management**: 
   - Cart state is managed by `CartContext`
   - Cart items are stored in localStorage
   - Cart persists across page refreshes

2. **Payment Processing**:
   - Payment page loads Razorpay checkout script
   - Creates order (currently mock, needs backend)
   - Opens Razorpay payment modal
   - Handles payment success/failure

3. **Payment Verification**:
   - After successful payment, verify on backend
   - Update order status in database
   - Clear cart if payment was from cart

## Security Best Practices

1. **Never expose Key Secret** in frontend code
2. **Always verify payments** on your backend server
3. **Use HTTPS** in production
4. **Validate amounts** on backend before creating orders
5. **Store payment records** in your database
6. **Implement webhooks** for payment status updates

## Environment Variables (Backend)

Create a `.env` file in your backend:

```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_key_here
```

## Troubleshooting

### Payment Modal Not Opening
- Check if Razorpay script is loaded: `console.log(window.Razorpay)`
- Verify your Key ID is correct
- Check browser console for errors

### Payment Fails
- Verify order creation is working
- Check Razorpay Dashboard for payment logs
- Ensure amount is in correct format (paise for INR, cents for USD)

### Order ID Issues
- Replace mock order ID with backend API call
- Ensure order creation returns valid order ID

## Additional Resources

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Checkout Integration](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)
- [Razorpay Node.js SDK](https://github.com/razorpay/razorpay-node)

## Support

For issues related to:
- **Razorpay Integration**: Contact Razorpay Support
- **Application Code**: Check the code comments in `src/pages/Payment.tsx`

