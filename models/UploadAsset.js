import mongoose from 'mongoose';

const UploadAssetSchema = new mongoose.Schema({
  workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialAgentWorkspace', required: true },
  assetType: {
    type: String,
    enum: ['logo', 'favicon', 'image', 'color', 'font', 'social', 'document', 'overview', 'calendar', 'reference_image', 'generated_content'],
    default: 'image'
  },
  gcsUrl: { type: String }, // null for colors/fonts discovered without a file
  fileName: { type: String, required: true },
  mimeType: { type: String },
  meta: { type: mongoose.Schema.Types.Mixed, default: {} }, // stores hex, platform, type, confidence, source, etc.
  isDiscovered: { type: Boolean, default: false }, // auto-discovered by Brand Intelligence Agent
  isApproved: { type: Boolean, default: null },    // null = pending, true = approved, false = rejected
  uploadedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: false });

export default mongoose.models.UploadAsset || mongoose.model('UploadAsset', UploadAssetSchema);

