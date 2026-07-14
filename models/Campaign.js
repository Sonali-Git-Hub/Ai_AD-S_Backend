import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialAgentWorkspace', required: true },
  campaignName: { type: String, required: true },
  campaignGoal: { type: String, required: true },
  campaignMonth: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  postingFrequency: { type: String, required: true },
  platforms: { type: [String], default: [] },
  status: { type: String, default: 'Draft' }, // Draft, Active, Completed
  createdBy: { type: String }
}, { timestamps: true });

export default mongoose.models.Campaign || mongoose.model('Campaign', CampaignSchema);
