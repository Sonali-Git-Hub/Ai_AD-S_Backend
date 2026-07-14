import express, { urlencoded } from "express";
import dns from 'dns';
try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}
import 'dotenv/config';
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import ssoRoutes from "./routes/ssoRoutes.js";
import cookieParser from "cookie-parser";
import emailVerification from "./routes/emailVerification.js"
import userRoute from './routes/user.js'
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { initSocket } from './utils/socket.js';
import * as stockService from './services/stockService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFile = fs.createWriteStream(path.join(__dirname, 'server_output.log'), { flags: 'a' });
const originalLog = console.log;
const originalError = console.error;
const originalWarn = console.warn;

console.log = function(...args) {
  originalLog.apply(console, args);
  try { logFile.write(`[LOG] ${new Date().toISOString()}: ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`); } catch(e) {}
};

console.error = function(...args) {
  originalError.apply(console, args);
  try { logFile.write(`[ERROR] ${new Date().toISOString()}: ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`); } catch(e) {}
};

console.warn = function(...args) {
  originalWarn.apply(console, args);
  try { logFile.write(`[WARN] ${new Date().toISOString()}: ${args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')}\n`); } catch(e) {}
};

import chatRoute from './routes/chat.routes.js';
import knowledgeRoute from './routes/knowledge.routes.js';
// import aibaseRoutes from './routes/aibaseRoutes.js'; // Removed
// import * as aibaseService from './services/aibaseService.js'; // Removed

import notificationRoutes from "./routes/notificationRoutes.js";
import supportRoutes from './routes/supportRoutes.js';
import personalTaskRoutes from './routes/personalTaskRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import voiceRoutes from './routes/voiceRoutes.js';
import reminderRoutes from './routes/reminderRoutes.js';
import imageRoutes from './routes/image.routes.js';
import videoRoutes from './routes/videoRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import memoryRoutes from './routes/memoryRoutes.js';
import pricingRoutes from './routes/pricingRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import magicEditRoutes from './routes/magicEdit.routes.js';
import invoiceDashboardRoutes from './routes/invoiceDashboardRoutes.js';
import legalRoutes from './Tools/AI_Legal/routes/legalPages.routes.js';
import intentRoutes from './routes/intentRoutes.js';
import aiAdAgentRoutes from './routes/aiAdAgent.routes.js';
import socialAgentRoutes from './routes/socialMediaGenerator.routes.js';
import socialReviewRoutes from './routes/socialAgentReview.routes.js';
import campaignRoutes from './routes/campaign.routes.js';
import mediaProxyRoutes from './routes/mediaProxy.routes.js';
import brandRoutes from './routes/brandFetch.route.js';
import brandIntelligenceRoutes from './routes/brandIntelligence.routes.js';
import cashflowRoutes from './routes/cashflowRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import legalToolkitRoutes from './Tools/AI_Legal/legalToolkit.routes.js';
import connectorsRoutes from './routes/connectors.routes.js';
import precedentsRoutes from './Tools/AI_Legal/routes/precedents.routes.js';
import friendChatRoutes from './routes/friendChatRoutes.js';
import chatsRoutes from './routes/chats.js';
import messagesRoutes from './routes/messages.js';
import manualPostRoutes from './routes/manualPost.routes.js';
import incidentRoutes from './routes/incidentRoutes.js';

import { startPlanExpiryService } from './services/planExpiryService.js';
import { verifyToken } from './middleware/authorization.js';
import { creditMiddleware } from './middleware/creditSystem.js';
import { contextMiddleware } from './middleware/context.middleware.js';

// End of standard imports

const app = express();
const PORT = process.env.PORT || 8080;



// Connect to Database
connectDB().then(async () => {
  console.log("Database connection attempt finished, initializing services...");
  try {
    const { initializeConfigs } = await import('./services/configService.js');
    await initializeConfigs();

    const { initializeFromDB } = await import('./services/ai.service.js');
    await initializeFromDB();
    console.log("✅ AI Services (Embeddings & Vector Store) pre-initialized.");

    // Initialize Automatic Knowledge Update System (Crawler Scheduler)
    const { initScheduler } = await import('./services/scheduler.service.js');
    initScheduler();

    // Initialize Multi Schedule Reminder System
    const { initReminderScheduler } = await import('./services/reminderScheduler.js');
    initReminderScheduler();

    // Initialize Plan Expiry Notification System
    startPlanExpiryService();


  } catch (err) {
    console.error("❌ Failed to pre-initialize AI services:", err.message);
  }
}).catch(error => {
  console.error("Database connection failed during startup:", error);
});


// Middleware

// Permissive CORS Middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, content-type, Authorization, authorization, Accept, accept, X-Requested-With, x-requested-with, x-device-fingerprint, Origin, origin');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
app.use(cookieParser())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(fileUpload()); // Removed to avoid conflict with Multer (New AIBASE)

// Middleware to ensure UTF-8 charset for all JSON API responses
app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = function (body) {
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    return originalJson.call(this, body);
  };
  next();
});

app.use(contextMiddleware);


// Serve static frontend files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// ─── Apple Pay Domain Verification ───────────────────────────────────────────
// Apple's servers verify your domain by accessing this exact URL
// File must be placed at: Aisa_backend_beta/public/.well-known/apple-developer-merchantid-domain-association
const serveAppleVerification = (req, res) => {
  let filePath = path.join(__dirname, 'public', '.well-known', 'apple-developer-merchantid-domain-association');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', '.well-known', 'apple-developer-merchantid-domain-association.txt');
  }
  
  if (fs.existsSync(filePath)) {
    // Apple Pay verification file is a binary DER PKCS#7 signature
    res.setHeader('Content-Type', 'application/octet-stream');
    res.sendFile(filePath);
  } else {
    res.status(404).send('Apple Pay domain verification file not found. Please add it to public/.well-known/');
  }
};

app.get('/.well-known/apple-developer-merchantid-domain-association.txt', serveAppleVerification);
app.get('/.well-known/apple-developer-merchantid-domain-association', serveAppleVerification);


// API Health Check (moved from root)
app.get("/api/health", (req, res) => {
  res.send("All working")
})
// Global Debug middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[REQUEST] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// --- API Routes Registration ---

// Auth & User
app.use('/api/auth/verify-email', emailVerification);
app.use('/api/auth', authRoutes);
app.use('/api/auth/sso', ssoRoutes);
app.use('/api/user', userRoute);
app.use('/api/user', dataRoutes);  // GDPR data deletion & export
app.use('/api/legal', legalRoutes);
app.use('/api/legal-toolkit', verifyToken, creditMiddleware, legalToolkitRoutes);

// Intelligence Features
app.use('/api/precedents', verifyToken, creditMiddleware, precedentsRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/edit-image', magicEditRoutes);
app.use('/api/video', videoRoutes);

// Intent Routing & Orchestration System
app.use('/api/intent', intentRoutes);
app.use('/api/cashflow', cashflowRoutes);
app.use('/api/stock', stockRoutes);

// Utility & Support
app.use('/api/notifications', notificationRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/personal-assistant', personalTaskRoutes);
app.use('/api/memory', memoryRoutes);
app.use('/api/connectors', connectorsRoutes);

// Business & Dashboard
app.use('/api/pricing', pricingRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/payment', paymentRoutes);

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/ai-ad', verifyToken, creditMiddleware, aiAdAgentRoutes);
app.use('/api/social-agent', socialAgentRoutes);
app.use('/api/social-agent-review', verifyToken, creditMiddleware, socialReviewRoutes);
app.use('/api/calendar', campaignRoutes);
app.use('/api/media', mediaProxyRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/brand-intelligence', brandIntelligenceRoutes);
app.use('/api/friends', friendChatRoutes);
app.use('/api/chats', chatsRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/manual-post', manualPostRoutes);
app.use('/api/users', userRoute); // Aliased users routes to same user controller



// Admin Panel (Admin only)
app.use('/api/admin', adminRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/admin/invoices-dashboard', invoiceDashboardRoutes);

// Projects
app.use('/api/projects', projectRoutes);
// Cases alias (same router — /api/cases/:id/auto-analyze maps to /:id/analyze)
app.use('/api/cases', projectRoutes);

// Broad Fallbacks (should be last and as specific as possible)
app.use('/api/public', chatRoutes); // Allow /api/public/share/...


// AIBASE (V3) - With Credit System
app.use('/api/aibase/chat', verifyToken, creditMiddleware, chatRoute);
app.use('/api/aibase/knowledge', verifyToken, creditMiddleware, knowledgeRoute);

// --- End of Routes ---

// SPA Catch-all to serve index.html for unknown non-API routes
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  next();
});

// Catch-all 404 for API routes
app.use((req, res) => {
  console.warn(`[404 NOT MATCHED] ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    error: "Route not found",
    method: req.method,
    path: req.originalUrl
  });
});

// Global Error Handler
app.use(async (err, req, res, next) => {
  console.error("[SERVER ERROR]", err.stack);
  try {
    const { reportError } = await import('./services/incidentService.js');
    
    // Parse environment details from request header or user agent if available
    const ua = req.headers['user-agent'] || '';
    let browser = 'Unknown';
    let os = 'Unknown';
    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edge')) browser = 'Edge';

    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac OS')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

    let device = 'Desktop';
    if (/mobile|android|iphone|ipad/i.test(ua)) device = 'Mobile';

    await reportError({
      errorMessage: err.message || 'Unknown Server Error',
      stackTrace: err.stack || '',
      component: 'Backend',
      apiRoute: req.originalUrl,
      apiMethod: req.method,
      errorCode: err.code || '500',
      statusCode: err.status || 500,
      userId: req.user?.id || req.user?._id,
      sessionId: req.body?.sessionId || req.query?.sessionId,
      environment: process.env.NODE_ENV || 'Development',
      browser,
      os,
      device,
      payload: req.body,
      logs: [`Global error handler captured: ${err.message || 'Unknown Server Error'}`]
    });
  } catch (captureError) {
    console.error('[Incident Capture Failed]', captureError);
  }
  res.status(500).json({ error: 'Internal Server Error' });
});

// Ensure public/invoices exists
try {
  const invoicesDir = path.join(__dirname, 'public', 'invoices');
  if (!fs.existsSync(invoicesDir)) {
    fs.mkdirSync(invoicesDir, { recursive: true });
    console.log("✅ Created public/invoices directory for PDF storage.");
  }
} catch (e) {
  console.error("❌ Failed to create public/invoices directory:", e.message);
}

// Start listening
const server = app.listen(PORT, () => {
  console.log(`AISA Backend running on http://localhost:${PORT}`);
});

// --- WebSockets ---
const io = initSocket(server);

const activeRealtimeSubscriptions = new Map(); // socket.id -> { symbol, intervalId }

io.on('connection', (socket) => {
  // Existing Market Data Logic (Kept for compatibility)
  socket.on('subscribe_realtime', async ({ symbol }) => {
    console.log(`[Socket] ${socket.id} subscribed to realtime: ${symbol}`);
    
    if (activeRealtimeSubscriptions.has(socket.id)) {
        clearInterval(activeRealtimeSubscriptions.get(socket.id).intervalId);
    }

    try {
        const initialData = await stockService.getQuote(symbol);
        socket.emit('realtime_update', { quote: initialData });
    } catch (err) {}

    const intervalId = setInterval(async () => {
        try {
            const data = await stockService.getQuote(symbol);
            if (data) {
                socket.emit('realtime_update', { quote: data });
            }
        } catch (error) {
            console.error(`[Socket] Live fetch error for ${symbol}:`, error.message);
        }
    }, 2000);

    activeRealtimeSubscriptions.set(socket.id, { symbol, intervalId });
  });

  socket.on('request_historical', async ({ symbol, token }) => {
    console.log(`[Socket] ${socket.id} requested historical data for: ${symbol}`);
    try {
        if (!symbol) {
            return socket.emit('historical_data_response', { error: 'Symbol is required' });
        }

        let userId = null;
        let isAdmin = false;

        if (token) {
            try {
                const jwt = (await import('jsonwebtoken')).default;
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                userId = decoded.id;

                const User = (await import('./models/User.js')).default;
                const userRec = await User.findById(userId);
                if (userRec && (userRec.role === 'admin' || (userRec.email && userRec.email.toLowerCase() === 'admin@uwo24.com'))) {
                    isAdmin = true;
                }
            } catch (err) {
                console.error(`[Socket request_historical] Token verification failed:`, err.message);
            }
        }

        if (!userId) {
            return socket.emit('historical_data_response', { error: 'Unauthorized access: Invalid or missing token' });
        }

        const uppercaseSymbol = symbol.toUpperCase().trim();
        const tabName = 'historical';

        // 1. Check if already unlocked in DB
        const UnlockedStockTab = (await import('./models/UnlockedStockTab.js')).default;
        const existingUnlock = await UnlockedStockTab.findOne({
            userId,
            symbol: uppercaseSymbol,
            tab: tabName
        });

        if (existingUnlock || isAdmin) {
            console.log(`[Socket] Tab '${tabName}' already unlocked for stock ${uppercaseSymbol} (User: ${userId}). Bypassing deduction.`);
            const historical = await stockService.getHistorical(symbol);
            return socket.emit('historical_data_response', { historical });
        }

        // 2. Check user's plan quota
        const { checkQuota } = await import('./services/subscriptionService.js');
        const quotaCheck = await checkQuota(userId, 'cashflow');
        if (!quotaCheck.allowed) {
            return socket.emit('historical_data_response', {
                error: quotaCheck.reason,
                code: quotaCheck.code || 'PLAN_RESTRICTED',
                planKey: quotaCheck.planKey
            });
        }

        // 3. Fetch data first
        const historical = await stockService.getHistorical(symbol);

        // 4. Save unlock record
        await UnlockedStockTab.findOneAndUpdate(
            { userId, symbol: uppercaseSymbol, tab: tabName },
            { createdAt: new Date() },
            { upsert: true, new: true }
        );

        console.log(`[Socket] Marked tab '${tabName}' unlocked for stock ${uppercaseSymbol} under quota verification (User: ${userId})`);
        socket.emit('historical_data_response', { historical });
    } catch (error) {
        console.error(`[Socket] request_historical error:`, error.message);
        socket.emit('historical_data_response', { error: error.message || 'Failed to fetch historical data' });
    }
  });

  socket.on('disconnect', () => {
    if (activeRealtimeSubscriptions.has(socket.id)) {
        clearInterval(activeRealtimeSubscriptions.get(socket.id).intervalId);
        activeRealtimeSubscriptions.delete(socket.id);
    }
  });
});


server.timeout = 900000; // 15 mins


// Keep process alive for local development
setInterval(() => { }, 1000 * 60 * 60); // Keep alive process
// trigger restart: local binding fix


