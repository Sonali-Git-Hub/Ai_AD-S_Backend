import { contextStorage } from '../utils/context.js';
import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export const contextMiddleware = async (req, res, next) => {
  try {
    let workspaceId = req.headers['x-workspace-id'] || req.headers['workspaceid'] || req.body?.workspaceId || req.query?.workspaceId || req.params?.workspaceId;
    let userId = req.user?.id || req.user?._id || req.body?.userId || req.query?.userId || req.headers['user-id'] || req.headers['userid'];

    // Try to infer workspaceId from URL path if it is part of req.params or req.path
    if (!workspaceId && req.path) {
      const parts = req.path.split('/');
      // Check if any part is a valid ObjectId (since workspaceId is a Mongo ObjectId)
      for (const part of parts) {
        if (mongoose.Types.ObjectId.isValid(part)) {
          try {
            // Check if this ObjectId belongs to a SocialAgentWorkspace
            const ws = await mongoose.model('SocialAgentWorkspace').findById(part);
            if (ws) {
              workspaceId = ws._id.toString();
              break;
            }
          } catch (e) {
            // ignore
          }
        }
      }
    }

    // If we still don't have workspaceId but have userId, look up user's active workspace
    if (!workspaceId && userId && mongoose.Types.ObjectId.isValid(userId)) {
      try {
        const ws = await mongoose.model('SocialAgentWorkspace').findOne({ userId });
        if (ws) {
          workspaceId = ws._id.toString();
        }
      } catch (e) {
        // ignore
      }
    }

    // Run next middlewares/routes within the AsyncLocalStorage store context
    contextStorage.run({ workspaceId, userId }, () => {
      next();
    });
  } catch (err) {
    logger.error('[ContextMiddleware] Error setting context: ' + err.message);
    next();
  }
};
