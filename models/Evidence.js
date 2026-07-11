import mongoose from 'mongoose';

const evidenceSchema = new mongoose.Schema({
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
        index: true
    },
    filename: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    fileUrl: {
        type: String,
        trim: true,
        default: ''
    },
    uri: {
        type: String,
        trim: true,
        default: ''
    },
    fileType: {
        type: String,
        trim: true,
        default: ''
    },
    type: {
        type: String,
        trim: true,
        default: ''
    },
    category: {
        type: String,
        trim: true,
        default: 'Evidence'
    },
    verificationStatus: {
        type: String,
        enum: ['Admissible', 'Challenged', 'Inadmissible', 'Verified', 'Pending', 'Scheduled', 'Completed', 'Adjourned', 'Active', 'Pending Review'],
        default: 'Pending'
    },
    admissibility: {
        type: String,
        enum: ['Admissible', 'Challenged', 'Inadmissible', 'Verified', 'Pending', 'Scheduled', 'Completed', 'Adjourned', 'Active', 'Pending Review'],
        default: 'Pending'
    },
    strength: {
        type: String,
        enum: ['Strong', 'Moderate', 'Weak', 'Disputed', 'Tampered', 'Not Available'],
        default: 'Moderate'
    },
    confidence: {
        type: Number,
        default: 96
    },
    confidenceScore: {
        type: Number,
        default: 96
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: Number,
        default: 0
    },
    hash: {
        type: String,
        trim: true,
        default: ''
    },
    notes: {
        type: String,
        trim: true,
        default: ''
    },
    aiSummary: {
        type: String,
        trim: true,
        default: ''
    },
    facts: {
        type: String,
        trim: true,
        default: ''
    },
    ocrStatus: {
        type: String,
        trim: true,
        default: ''
    },
    aiProcessed: {
        type: String,
        trim: true,
        default: ''
    }
}, {
    timestamps: true
});

// Map MongoDB _id to virtual id for frontend compatibility
evidenceSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

evidenceSchema.set('toJSON', {
    virtuals: true
});

const Evidence = mongoose.model('Evidence', evidenceSchema);
export default Evidence;
