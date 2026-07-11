import express from 'express';
import { getPaymentHistory, createOrder, verifyPayment, downloadInvoicePdf } from '../controllers/paymentController.js';
import { verifyGooglePlaySubscription } from '../controllers/googlePlayController.js';
import { verifyAppleStoreSubscription } from '../controllers/appleStoreController.js';
import { verifyToken } from '../middleware/authorization.js';

const router = express.Router();

// ─── Existing Razorpay Routes ────────────────────────────────────────────────
router.get('/history', verifyToken, getPaymentHistory);
router.post('/create-order', verifyToken, createOrder);
router.post('/verify-payment', verifyToken, verifyPayment);
router.get('/invoice/:subscriptionId', verifyToken, downloadInvoicePdf);

// ─── Google Play Store In-App Purchase Route (Mobile App) ───────────────────
router.post('/verify/google', verifyToken, verifyGooglePlaySubscription);

// ─── Apple App Store In-App Purchase Route (Mobile App) ──────────────────────
router.post('/verify/apple', verifyToken, verifyAppleStoreSubscription);

export default router;
