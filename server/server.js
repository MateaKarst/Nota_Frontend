// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const app = express();

// // Enhanced CORS configuration
// app.use(cors({
//   origin: [
//     // localhost browser
//     'http://localhost:3000',
//     'http://localhost:3001',
//     'http://localhost:3002',

//     // vio n mk network?
//     'http://192.168.1.38:3000',
//     'http://192.168.1.38:3001',
//     'http://192.168.1.38:3002',

//     // app sites
//     'https://nota-community.netlify.app',
//     'https://nota-backend-delta.vercel.app'
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // Handle preflight requests
// app.options('*', cors());

// app.use(express.json());

// // Test route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Stripe Checkout
// app.post('/create-checkout-session', async (req, res) => {
//   const { plan } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: plan.name,
//             },
//             unit_amount: parseInt(plan.price.replace('$', '')) * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/cancel',
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error('Stripe session error:', error);
//     res.status(500).json({ error: 'Failed to create Stripe session' });
//   }
// });

// const PORT = process.env.PORT || 3001; // Changed from 3000 to 3001
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));