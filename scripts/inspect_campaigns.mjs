import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_ATLAS_URI?.trim();
console.log("Connecting...");
try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  console.log("Connected! Loading campaigns...");
  
  const CampaignSchema = new mongoose.Schema({}, { strict: false });
  const Campaign = mongoose.model("Campaign", CampaignSchema, "campaigns");
  
  const CampaignPostSchema = new mongoose.Schema({}, { strict: false });
  const CampaignPost = mongoose.model("CampaignPost", CampaignPostSchema, "campaignposts");

  const campaigns = await Campaign.find({}).sort({ createdAt: -1 }).limit(3).lean();
  console.log("--- RECENT CAMPAIGNS ---");
  for (const c of campaigns) {
    console.log(`Campaign: "${c.campaignName}" | ID: ${c._id}`);
    console.log(`  Frequency: ${c.postingFrequency} | Start: ${c.startDate} | End: ${c.endDate}`);
    const posts = await CampaignPost.find({ campaignId: c._id }).sort({ date: 1 }).lean();
    console.log(`  Posts count: ${posts.length}`);
    posts.forEach(p => {
      console.log(`    - Date: ${new Date(p.date).toISOString().split("T")[0]} | Day: ${p.day} | PostFor: ${p.postFor}`);
    });
  }
  await mongoose.disconnect();
} catch(e) {
  console.error("Error:", e.message);
}
