import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    invoiceNumber:  { type: String, unique: true, required: true, index: true },
    userId:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription', default: null }, // null-allowed for Razorpay-only synced payments
    planId:         { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', default: null },

    // Gateway details
    paymentGateway: { type: String, enum: ['razorpay', 'paypal', 'apple_pay', 'play_store', 'app_store'], required: true },
    paymentId:      { type: String, required: true, unique: true, index: true },  // Razorpay pay_*, PayPal txn id, etc.
    razorpayOrderId:{ type: String, default: null },                              // Razorpay order_* (for lookup)
    paymentStatus:  { type: String, default: 'captured', enum: ['captured', 'authorized', 'refunded', 'failed', 'pending'] },

    // Customer billing details (captured at time of purchase)
    billingDetails: {
        name:        { type: String, default: '' },
        companyName: { type: String, default: '' },
        gstin:       { type: String, default: '' },
        addressLine1:{ type: String, default: '' },
        city:        { type: String, default: '' },
        state:       { type: String, default: '' },
        postalCode:  { type: String, default: '' },
        country:     { type: String, default: 'IN' },
    },

    // Financial amounts — always in INR, from ACTUAL gateway amount (not plan price)
    planPrice:      { type: Number, default: 0 },   // Plan catalog price (for reference)
    baseAmount:     { type: Number, required: true }, // Amount before GST
    cgst:           { type: Number, default: 0 },    // Central GST (9%)
    sgst:           { type: Number, default: 0 },    // State GST (9%)
    igst:           { type: Number, default: 0 },    // IGST (18% for inter-state)
    gstPercentage:  { type: Number, default: 18 },
    gstAmount:      { type: Number, default: 0 },    // Total GST (cgst+sgst or igst)
    totalAmount:    { type: Number, required: true }, // Actual amount charged (from gateway)
    currency:       { type: String, default: 'INR' },

    invoiceUrl:     { type: String, default: null },  // Local PDF path
    invoiceDate:    { type: Date, default: Date.now },

    // Sync metadata
    syncedFromGateway: { type: Boolean, default: false }, // true = synced from Razorpay API
    syncedAt:          { type: Date, default: null },
}, {
    timestamps: true, // adds createdAt, updatedAt
});

// Compound index for efficient finance queries
invoiceSchema.index({ createdAt: -1 });
invoiceSchema.index({ userId: 1, createdAt: -1 });
invoiceSchema.index({ paymentGateway: 1, createdAt: -1 });
invoiceSchema.index({ paymentStatus: 1 });

export default mongoose.model('Invoice', invoiceSchema);
