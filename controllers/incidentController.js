import Incident from '../models/Incident.js';
import ErrorOccurrence from '../models/ErrorOccurrence.js';
import ChatSession from '../models/ChatSession.js';
import User from '../models/User.js';
import mongoose from 'mongoose';
import * as incidentService from '../services/incidentService.js';

// Public report incident (frontend client reporting)
export const reportIncident = async (req, res) => {
    try {
        const details = req.body;
        // Identify logged in user if available via token, or fallback to body info
        if (req.user && req.user.id) {
            details.userId = req.user.id;
        }

        const result = await incidentService.reportError(details);
        res.status(201).json({ success: true, incidentId: result.incident._id });
    } catch (error) {
        console.error('[reportIncident Error]', error);
        res.status(500).json({ success: false, message: 'Failed to report error' });
    }
};

// Admin list incidents
export const getIncidents = async (req, res) => {
    try {
        const {
            statusType = 'active', // 'active' (New, Open, Assigned, In Progress, Monitoring) or 'history' (Resolved, Closed, Ignored)
            severity = '',
            status = '',
            module = '',
            environment = '',
            search = '',
            range = '7d',
            page = 1,
            limit = 15
        } = req.query;

        const query = {};

        // 1. Status type segmentation
        if (status) {
            query.status = status;
        } else if (statusType === 'active') {
            query.status = { $in: ['New', 'Open', 'Assigned', 'In Progress', 'Monitoring'] };
        } else if (statusType === 'history') {
            query.status = { $in: ['Resolved', 'Closed', 'Ignored'] };
        }

        // 2. Filters
        if (severity) query.severity = severity;
        if (module) query.toolModule = module;
        if (environment) query.environment = environment;

        // 3. Date range filter (based on lastSeen)
        const now = new Date();
        const fromDate = new Date();
        let useDateFilter = true;
        
        if (range === 'today') {
            fromDate.setHours(0, 0, 0, 0);
        } else if (range === 'yesterday') {
            fromDate.setDate(now.getDate() - 1);
            fromDate.setHours(0, 0, 0, 0);
            const toDate = new Date();
            toDate.setHours(0, 0, 0, 0);
            query.lastSeen = { $gte: fromDate, $lt: toDate };
            useDateFilter = false;
        } else {
            switch (range) {
                case '24h': fromDate.setHours(now.getHours() - 24); break;
                case '7d': fromDate.setDate(now.getDate() - 7); break;
                case '30d': fromDate.setDate(now.getDate() - 30); break;
                default: fromDate.setDate(now.getDate() - 7);
            }
        }
        
        if (useDateFilter && range !== 'all') {
            query.lastSeen = { $gte: fromDate, $lte: now };
        }

        // 4. Searching (supports Session ID, User ID, Incident ID, API route, tool module, or error message)
        if (search) {
            const cleanSearch = search.trim();
            const searchRegex = new RegExp(cleanSearch, 'i');
            
            // Check if search matches ObjectId format
            const isObjectId = /^[0-9a-fA-F]{24}$/.test(cleanSearch);

            const searchOr = [
                { errorMessage: searchRegex },
                { apiRoute: searchRegex },
                { toolModule: searchRegex },
                { affectedSessions: cleanSearch }
            ];

            if (isObjectId) {
                searchOr.push({ _id: cleanSearch });
            } else {
                searchOr.push({ affectedUsers: cleanSearch });
            }

            query.$or = searchOr;
        }

        // 5. Pagination and Sort
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const count = await Incident.countDocuments(query);
        const incidents = await Incident.find(query)
            .sort({ lastSeen: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        res.json({
            success: true,
            incidents,
            pagination: {
                total: count,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(count / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('[getIncidents Error]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch incidents' });
    }
};

// Admin fetch incident stats & charts
export const getIncidentKPIs = async (req, res) => {
    try {
        const { range = '7d' } = req.query;
        const stats = await incidentService.getIncidentStats(range);
        res.json({ success: true, ...stats });
    } catch (error) {
        console.error('[getIncidentKPIs Error]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch incident statistics' });
    }
};

// Admin fetch detailed incident info
export const getIncidentDetails = async (req, res) => {
    try {
        const { incidentId } = req.params;
        const incident = await Incident.findById(incidentId);
        if (!incident) {
            return res.status(404).json({ success: false, message: 'Incident not found' });
        }

        // Fetch occurrences sample
        const occurrences = await ErrorOccurrence.find({ incidentId })
            .sort({ timestamp: -1 })
            .limit(30);

        // Fetch user info for occurrences and incident
        const occurrenceUserIds = occurrences.map(o => o.userId).filter(id => id && mongoose.Types.ObjectId.isValid(id));
        const affectedUserIds = (incident.affectedUsers || []).filter(id => id && mongoose.Types.ObjectId.isValid(id));
        const allUserIds = [...new Set([...occurrenceUserIds, ...affectedUserIds])];
        
        const users = await User.find({ _id: { $in: allUserIds } }).select('name email avatar');
        const userMap = new Map(users.map(u => [u._id.toString(), u]));

        const occurrencesWithUserInfo = occurrences.map(occ => {
            const occObj = occ.toObject();
            if (occ.userId && userMap.has(occ.userId.toString())) {
                occObj.userInfo = userMap.get(occ.userId.toString());
            } else {
                occObj.userInfo = null;
            }
            return occObj;
        });

        const affectedUsersDetails = affectedUserIds.map(id => userMap.get(id.toString())).filter(Boolean);

        // Add affectedUsersDetails to incident object response
        const incidentObj = incident.toObject();
        incidentObj.affectedUsersDetails = affectedUsersDetails;

        res.json({ success: true, incident: incidentObj, occurrences: occurrencesWithUserInfo });
    } catch (error) {
        console.error('[getIncidentDetails Error]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch incident details' });
    }
};

// Admin assign incident to developer
export const assignIncident = async (req, res) => {
    try {
        const { incidentId } = req.params;
        const { developerId, developerName } = req.body;

        const incident = await Incident.findById(incidentId);
        if (!incident) {
            return res.status(404).json({ success: false, message: 'Incident not found' });
        }

        const timestamp = new Date();
        const actionUser = req.user?.email || 'Admin';

        incident.assignedTo = developerId || null;
        incident.assignedToName = developerName || 'Unassigned';
        
        if (incident.status === 'New' || incident.status === 'Open') {
            incident.status = 'Assigned';
        }

        incident.timeline.push({
            state: 'Assigned',
            timestamp,
            notes: `Incident assigned to developer: ${developerName || 'Unassigned'}.`
        });

        incident.auditLog.push({
            action: 'Assigned',
            timestamp,
            user: actionUser,
            details: `Incident assigned to ${developerName || 'Unassigned'}.`
        });

        await incident.save();

        res.json({ success: true, incident });
    } catch (error) {
        console.error('[assignIncident Error]', error);
        res.status(500).json({ success: false, message: 'Failed to assign incident' });
    }
};

// Admin resolve incident with complete checklist summary
export const resolveIncident = async (req, res) => {
    try {
        const { incidentId } = req.params;
        const {
            rootCause = '',
            resolutionSummary = '',
            fixedBy = '',
            fixedByName = '',
            commitHash = '',
            pullRequest = '',
            releaseVersion = '',
            notes = ''
        } = req.body;

        const incident = await Incident.findById(incidentId);
        if (!incident) {
            return res.status(404).json({ success: false, message: 'Incident not found' });
        }

        const timestamp = new Date();
        const actionUser = req.user?.email || 'Admin';

        incident.status = 'Resolved';
        incident.rootCause = rootCause;
        incident.resolutionSummary = resolutionSummary;
        incident.fixedBy = fixedBy || null;
        incident.fixedByName = fixedByName || actionUser;
        incident.commitHash = commitHash;
        incident.pullRequest = pullRequest;
        incident.releaseVersion = releaseVersion;
        incident.notes = notes;

        incident.timeline.push({
            state: 'Resolved',
            timestamp,
            notes: `Incident resolved. Fix deployed in release: ${releaseVersion || 'N/A'}.`
        });

        incident.auditLog.push({
            action: 'Resolved',
            timestamp,
            user: actionUser,
            details: `Root Cause: ${rootCause}. Resolution: ${resolutionSummary}. Fixed by: ${fixedByName || actionUser}.`
        });

        await incident.save();

        res.json({ success: true, incident });
    } catch (error) {
        console.error('[resolveIncident Error]', error);
        res.status(500).json({ success: false, message: 'Failed to resolve incident' });
    }
};

// Admin manual status transition
export const updateIncidentStatus = async (req, res) => {
    try {
        const { incidentId } = req.params;
        const { status, notes = '' } = req.body;

        const incident = await Incident.findById(incidentId);
        if (!incident) {
            return res.status(404).json({ success: false, message: 'Incident not found' });
        }

        const timestamp = new Date();
        const actionUser = req.user?.email || 'Admin';
        const oldStatus = incident.status;

        incident.status = status;

        incident.timeline.push({
            state: status,
            timestamp,
            notes: notes || `Status changed from ${oldStatus} to ${status}.`
        });

        incident.auditLog.push({
            action: 'Status-Changed',
            timestamp,
            user: actionUser,
            details: `Status manually updated from ${oldStatus} to ${status}. Notes: ${notes || 'None'}`
        });

        await incident.save();

        res.json({ success: true, incident });
    } catch (error) {
        console.error('[updateIncidentStatus Error]', error);
        res.status(500).json({ success: false, message: 'Failed to update status' });
    }
};

// Admin get session details for conversation replay
export const getSessionReplayDetails = async (req, res) => {
    try {
        const { sessionId } = req.params;
        
        // Find conversation details
        const session = await ChatSession.findOne({ sessionId });
        
        // Find occurrences for this specific session
        const occurrences = await ErrorOccurrence.find({ sessionId })
            .select('errorMessage apiRoute apiMethod statusCode browser os device breadcrumbs timestamp')
            .sort({ timestamp: 1 });

        res.json({
            success: true,
            sessionId,
            conversation: session ? session.messages : [],
            sessionTitle: session ? session.title : 'General Guest Session',
            detectedMode: session ? session.detectedMode : 'NORMAL_CHAT',
            occurrences
        });
    } catch (error) {
        console.error('[getSessionReplayDetails Error]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch session replay data' });
    }
};
