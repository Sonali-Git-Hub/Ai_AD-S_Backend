import mongoose from 'mongoose';

const manualPostSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  targetAudience: {
    type: String
  },
  tone: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 3000
  },
  language: {
    type: String
  },
  cta: {
    type: String
  },
  contentLength: {
    type: String
  },
  uploadedMedia: {
    type: [String],
    default: []
  },
  enhancements: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  status: {
    type: String,
    default: 'created'
  },
  visionAnalysis: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  generatedContent: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  }
}, {
  timestamps: true
});

const ManualPost = mongoose.model('ManualPost', manualPostSchema);
export default ManualPost;
