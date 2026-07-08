import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: { type: String, unique: true, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription', required: true },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
    paymentGateway: { type: String, enum: ['razorpay', 'paypal', 'apple_pay', 'play_store', 'app_store'], required: true },
    paymentId: { type: String, required: true },
    paymentStatus: { type: String, default: 'captured' },
    billingDetails: {
        name: { type: String, required: true },
        companyName: { type: String, default: '' },
        gstin: { type: String, default: '' },
        addressLine1: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        postalCode: { type: String, default: '' },
        country: { type: String, default: 'IN' }
    },
    planPrice: { type: Number },
    baseAmount: { type: Number, required: true },
    cgst: { type: Number, default: 0 },
    sgst: { type: Number, default: 0 },
    igst: { type: Number, default: 0 },
    gstPercentage: { type: Number, default: 18 },
    gstAmount: { type: Number },
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    invoiceUrl: { type: String },
    invoiceDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);
