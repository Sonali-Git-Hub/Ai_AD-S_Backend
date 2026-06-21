import express from 'express';
import { getSubscriptionDetails, purchasePlan, purchaseCredits, createOrder, getCreditLogs, deductCredits, getQuotaStatus } from '../controllers/subscriptionController.js';
import { verifyToken } from '../middleware/authorization.js';

const router = express.Router();

// ── QUOTA-BASED ROUTES ────────────────────────────────────────────────────────
router.get('/', verifyToken, getSubscriptionDetails);         // Full subscription + quota details
router.get('/quota-status', verifyToken, getQuotaStatus);     // Lightweight quota polling
router.post('/create-order', verifyToken, createOrder);
router.post('/purchase', verifyToken, purchasePlan);

// ── LEGACY STUBS (kept so old frontend calls don't 404) ───────────────────────
router.get('/credit-history', verifyToken, getCreditLogs);    // Returns empty array
router.get('/user-credits', verifyToken, getSubscriptionDetails); // Returns quota data
router.post('/buy-credits', verifyToken, purchaseCredits);    // Returns 410 Gone
router.post('/deduct-credits', verifyToken, deductCredits);   // Returns success (no-op)

export default router;
