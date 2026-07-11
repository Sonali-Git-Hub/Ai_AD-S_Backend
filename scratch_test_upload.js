import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Session from './models/Session.js';
import User from './models/User.js'; // Let's check if User model exists
import jwt from 'jsonwebtoken';
import axios from 'axios';

async function test() {
  await connectDB();
  console.log("Connected to MongoDB");

  // Find a user or create a temporary one
  let user = await User.findOne({});
  if (!user) {
    console.log("Creating temp user...");
    user = new User({
      name: 'Temp User',
      email: 'temp@ai-mall.in',
      password: 'password123',
      role: 'User'
    });
    await user.save();
  }
  console.log("Using user:", user.email, "ID:", user._id);

  // Sign a new JWT token using backend secret
  const payload = {
    id: user._id.toString(),
    email: user.email,
    role: user.role || 'User'
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Create a database session matching verifyToken requirements
  const session = new Session({
    userId: user._id,
    token: token,
    lastActive: new Date()
  });
  await session.save();
  console.log("Saved valid session in DB");

  try {
    const caseId = '6a4c76d70712cf288d78a4f5';
    const uploadPayload = {
      filename: 'Test File.pdf',
      name: 'Test File.pdf',
      fileUrl: 'data:application/pdf;base64,JVBERi0xLjQKJ...',
      uri: 'data:application/pdf;base64,JVBERi0xLjQKJ...',
      fileType: 'application/pdf',
      type: 'application/pdf',
      category: 'Evidence',
      size: 1024
    };

    console.log("Sending POST request with newly generated token...");
    const res = await axios.post(`http://localhost:8080/api/cases/${caseId}/evidence`, uploadPayload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("API response status:", res.status);
    console.log("API response data:", res.data);
  } catch (error) {
    console.error("API request failed:", error.response ? error.response.status : error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  } finally {
    // Clean up session
    await Session.deleteOne({ _id: session._id });
    console.log("Cleaned up temp session");
  }

  await mongoose.disconnect();
}

test().catch(console.error);
