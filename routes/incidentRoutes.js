import express from 'express';
import { verifyToken } from '../middleware/authorization.js';
import User from '../models/User.js';
import {
    reportIncident,
    getIncidents,
    getIncidentKPIs,
    getIncidentDetails,
    assignIncident,
    resolveIncident,
    updateIncidentStatus,
    getSessionReplayDetails
} from '../controllers/incidentController.js';

// Admin verification middleware
const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        const PRIMARY_ADMIN_EMAIL = 'admin@uwo24.com';
        if (req.user.email === PRIMARY_ADMIN_EMAIL || req.user.role === 'admin') {
            return next();
        }
        const user = await User.findById(req.user.id);
        if (user && (user.role === 'admin' || user.email === PRIMARY_ADMIN_EMAIL)) {
            next();
        } else {
            res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error verifying admin status' });
    }
};

const router = express.Router();

// ─── Public routes ───
// Anyone (even guest) can report a frontend exception
router.post('/report', reportIncident);

// ─── Protected admin routes ───
router.get('/', verifyToken, isAdmin, getIncidents);
router.get('/kpis', verifyToken, isAdmin, getIncidentKPIs);
router.get('/session-replay/:sessionId', verifyToken, isAdmin, getSessionReplayDetails);
router.get('/:incidentId', verifyToken, isAdmin, getIncidentDetails);
router.post('/:incidentId/assign', verifyToken, isAdmin, assignIncident);
router.post('/:incidentId/resolve', verifyToken, isAdmin, resolveIncident);
router.post('/:incidentId/status', verifyToken, isAdmin, updateIncidentStatus);

export default router;
