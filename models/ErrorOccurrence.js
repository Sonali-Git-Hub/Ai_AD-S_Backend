import mongoose from 'mongoose';

const errorOccurrenceSchema = new mongoose.Schema({
    incidentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident', required: true, index: true },
    errorMessage: { type: String, required: true },
    stackTrace: { type: String },
    apiRoute: { type: String },
    apiMethod: { type: String },
    statusCode: { type: Number },
    environment: { type: String },
    browser: { type: String },
    os: { type: String },
    device: { type: String },
    userId: { type: String },
    sessionId: { type: String, index: true },
    cardName: { type: String },
    actionName: { type: String },
    buildVersion: { type: String },
    releaseVersion: { type: String },
    payload: { type: mongoose.Schema.Types.Mixed },
    responsePayload: { type: mongoose.Schema.Types.Mixed },
    breadcrumbs: [mongoose.Schema.Types.Mixed],
    logs: [{ type: String }],
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

const ErrorOccurrence = mongoose.model('ErrorOccurrence', errorOccurrenceSchema);
export default ErrorOccurrence;
