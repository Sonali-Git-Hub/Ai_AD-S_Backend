import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    user: { type: String, default: 'System' },
    details: { type: String }
});

const timelineSchema = new mongoose.Schema({
    state: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    notes: { type: String }
});

const incidentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    errorMessage: { type: String, required: true },
    stackTrace: { type: String },
    component: { 
        type: String, 
        default: 'Backend', 
        enum: ['Frontend', 'Backend', 'API', 'Database', 'Auth', 'Payment', 'External'] 
    },
    apiRoute: { type: String },
    apiMethod: { type: String },
    toolModule: { type: String, default: 'General' },
    cardName: { type: String },
    actionName: { type: String },
    errorCode: { type: String },
    status: { 
        type: String, 
        enum: ['New', 'Open', 'Assigned', 'In Progress', 'Monitoring', 'Resolved', 'Closed', 'Ignored'], 
        default: 'New' 
    },
    severity: { 
        type: String, 
        enum: ['Critical', 'High', 'Medium', 'Low', 'Info'], 
        default: 'Medium' 
    },
    environment: { type: String, default: 'Production' },
    totalOccurrences: { type: Number, default: 1 },
    affectedUsers: [{ type: String }],
    affectedSessions: [{ type: String }],
    firstSeen: { type: Date, default: Date.now },
    lastSeen: { type: Date, default: Date.now },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedToName: { type: String },
    rootCause: { type: String },
    resolutionSummary: { type: String },
    fixedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fixedByName: { type: String },
    commitHash: { type: String },
    pullRequest: { type: String },
    releaseVersion: { type: String },
    notes: { type: String },
    auditLog: [auditLogSchema],
    timeline: [timelineSchema],
    
    // Cache the latest occurrence details to keep loading details drawer fast
    latestOccurrence: {
        payload: mongoose.Schema.Types.Mixed,
        responsePayload: mongoose.Schema.Types.Mixed,
        browser: { type: String },
        os: { type: String },
        device: { type: String },
        buildVersion: { type: String },
        releaseVersion: { type: String },
        logs: [{ type: String }],
        breadcrumbs: [mongoose.Schema.Types.Mixed],
        cardName: { type: String },
        actionName: { type: String }
    }
}, { timestamps: true });

// Index for signature/grouping checks
incidentSchema.index({ errorMessage: 1, component: 1, apiRoute: 1, toolModule: 1, errorCode: 1, cardName: 1 });

const Incident = mongoose.model('Incident', incidentSchema);
export default Incident;
