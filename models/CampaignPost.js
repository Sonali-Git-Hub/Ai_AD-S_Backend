import mongoose from 'mongoose';

const CampaignPostSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialAgentWorkspace', required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  platform: { type: String, required: true },
  contentType: { type: String, required: true },
  campaignStage: { type: String, required: true },
  postObjective: { type: String, required: true },
  prompt: { type: String, required: true },
  caption: { type: String, default: '' },
  hashtags: { type: [String], default: [] },
  cta: { type: String, default: '' },
  generatedImage: { type: String, default: null },
  status: {
    type: String,
    enum: ['Draft', 'Generated', 'Approved', 'Scheduled', 'Published', 'Failed'],
    default: 'Draft'
  },
  aiScore: { type: Number, default: 0 },
  expectedReach: { type: Number, default: 0 },
  expectedEngagement: { type: Number, default: 0 },
  bestPostingTime: { type: String, default: '10:00 AM' },
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  notes: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.models.CampaignPost || mongoose.model('CampaignPost', CampaignPostSchema);
