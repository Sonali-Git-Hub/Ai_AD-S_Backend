import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
import Evidence from '../models/Evidence.js';
import { verifyToken } from '../middleware/authorization.js';
import * as legalIntelligenceService from '../Tools/AI_Legal/services/legalIntelligence.service.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
router.post('/', verifyToken, async (req, res) => {
    try {
        const {
            name, clientName, clientRole, opponentName, opponentRole,
            status, priority, caseType,
            courtName, courtType, state, district, city,
            filingDate, incidentDate, caseSummary
        } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Project name (Case Title) is required' });
        }

        const projectSummary = caseSummary || req.body.summary || '';

        const project = new Project({
            name,
            userId: req.user.id,
            clientName: clientName || '',
            clientRole: clientRole || '',
            opponentName: opponentName || '',
            opponentRole: opponentRole || '',
            status: status || 'Active',
            stage: 'Pre-litigation',
            priority: priority || 'Standard',
            caseType: caseType || '',
            courtName: courtName || '',
            courtType: courtType || '',
            state: state || '',
            district: district || '',
            city: city || '',
            filingDate: filingDate || null,
            incidentDate: incidentDate || null,
            caseSummary: projectSummary,
            summary: projectSummary,
            
            // Auto-Generated Metadata
            internalCaseId: "CASE-" + Math.floor(100000 + Math.random() * 900000),
            uuid: uuidv4(),
            createdDate: new Date(),
            lastUpdated: new Date(),
            createdBy: req.user.id,
            advocateId: req.user.id,
            activityLog: [{ 
                action: 'Case Created', 
                timestamp: new Date(), 
                details: 'Case initialized via simplified lawyer case intelligence form.' 
            }],
            evidenceCount: 0,
            searchIndex: `${name} ${clientName} ${opponentName || ''}`.toLowerCase(),
            isLegalCase: true
        });

        await project.save();

        // Trigger background AI summary and timeline extraction if caseSummary/summary is present
        if (projectSummary && projectSummary.trim()) {
            const runBackgroundAnalysis = async () => {
                try {
                    console.log(`[Background-Analysis] Starting AI analysis for project: ${project._id}`);
                    const aiResponse = await legalIntelligenceService.analyzeCaseDetails(projectSummary, project, 'English');
                    const aiData = typeof aiResponse === "string" ? JSON.parse(aiResponse) : aiResponse;

                    const toStr = (val, fallback = '') => {
                        if (!val) return fallback;
                        if (typeof val === 'string') return val;
                        return JSON.stringify(val);
                    };

                    const toDate = (val) => {
                        if (!val) return null;
                        const d = new Date(val);
                        return isNaN(d.getTime()) ? null : d;
                    };

                    const normalized = {
                        summary: toStr(aiData.executive_summary || aiData.summary),
                        strength: aiData.case_strength ?? aiData.strengthScore ?? aiData.strength ?? 0,
                        probability: aiData.win_probability ?? aiData.winProbability ?? aiData.probability ?? 0,
                        timeline: Array.isArray(aiData.timeline) ? aiData.timeline : [],
                        evidence: Array.isArray(aiData.evidence) ? aiData.evidence : [],
                        research: Array.isArray(aiData.legal_research || aiData.research) ? (aiData.legal_research || aiData.research) : [],
                        steps: Array.isArray(aiData.process_steps || aiData.steps) ? (aiData.process_steps || aiData.steps) : [],
                        risk: aiData.risk_assessment || aiData.risk || {},
                        vulnerabilities: Array.isArray(aiData.critical_vulnerabilities || aiData.weakPoints) ? (aiData.critical_vulnerabilities || aiData.weakPoints) : [],
                        opponent: Array.isArray(aiData.opponent_strategy || aiData.opponentStrategies) ? (aiData.opponent_strategy || aiData.opponent_strategies) : [],
                        relief: toStr(aiData.primary_relief || aiData.reliefGoals),
                        strategy: Array.isArray(aiData.strategy_recommendation || aiData.strategyRecommendations) ? (aiData.strategy_recommendation || aiData.strategyRecommendations) : []
                    };

                    const updatedFields = {
                        summary: normalized.summary || project.summary,
                        aiSummary: normalized.summary || '',
                        reliefGoals: normalized.relief || project.reliefGoals,
                        intelligence: {
                            strengthScore: Number(normalized.strength) || 0,
                            winProbability: Number(normalized.probability) || 0,
                            riskLevel: ['Low', 'Medium', 'High', 'Critical'].includes(normalized.risk?.level) ? normalized.risk.level : 'Medium',
                            weakPoints: [...(normalized.vulnerabilities || []), normalized.risk?.reason].filter(Boolean).map(v => toStr(v)),
                            opponentStrategies: normalized.opponent.map(s => toStr(s)),
                            strategyRecommendations: normalized.strategy.map(s => toStr(s)),
                            missingEvidence: []
                        },
                        facts: normalized.timeline
                            .filter(f => f && (f.event || f.title))
                            .map(f => ({
                                date: toDate(f.date),
                                event: toStr(f.event || f.title),
                                description: toStr(f.description || f.event || f.title)
                            })),
                        legalIssues: normalized.research.map(r => toStr(r.law || r.lawName)).filter(Boolean),
                        tasks: normalized.steps
                            .filter(p => p && (p.step || p.title))
                            .map(p => ({
                                title: toStr(p.step || p.title),
                                status: 'Pending',
                                priority: toStr(p.priority) || 'Medium'
                            })),
                        evidence: [],
                        research: normalized.research
                            .filter(r => r && (r.law || r.lawName))
                            .map(r => ({
                                lawName: toStr(r.law || r.lawName),
                                section: toStr(r.section),
                                description: toStr(r.description)
                            }))
                    };

                    updatedFields.evidenceCount = updatedFields.evidence.length;
                    updatedFields.searchIndex = `${project.name} ${project.clientName} ${project.opponentName || ''} ${updatedFields.summary || ''}`.toLowerCase();
                    updatedFields.lastUpdated = new Date();

                    await Project.findByIdAndUpdate(project._id, {
                        $set: updatedFields,
                        $push: {
                            activityLog: {
                                action: 'Background Analysis Completed',
                                timestamp: new Date(),
                                details: 'AI Summary, Timeline, and initial Intelligence generated in background.'
                            }
                        }
                    });
                    console.log(`[Background-Analysis] Successfully processed and updated project: ${project._id}`);
                } catch (bgErr) {
                    console.error(`[Background-Analysis] Error analyzing project: ${project._id}`, bgErr);
                }
            };
            runBackgroundAnalysis();
        }

        res.status(201).json(project);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// @desc    Get all user projects
// @route   GET /api/projects
// @access  Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// @route   GET /api/projects/:id
// @access  Private
router.get('/:id', verifyToken, async (req, res) => {
    try {
        console.log(`[DEBUG] Fetching project: ${req.params.id} for user: ${req.user.id}`);
        const project = await Project.findOne({ _id: req.params.id, userId: req.user.id });
        if (!project) {
            console.warn(`[DEBUG] Project NOT FOUND: ${req.params.id} for user: ${req.user.id}`);
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ error: 'Failed to fetch project', details: error.message });
    }
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updateData = req.body;

        // Ensure userId cannot be changed via update
        delete updateData.userId;
        delete updateData._id;

        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { $set: updateData },
            { new: true }
        );

        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project', details: error.message });
    }
});

// Shared analysis handler to keep code DRY and consistent
const performCaseAnalysis = async (req, res) => {
    try {
        const { rawText, language } = req.body;
        const project = await Project.findOne({ _id: req.params.id, userId: req.user.id });

        if (!project) {
            return res.status(404).json({ error: 'Case not found' });
        }

        let inputText = rawText || '';
        if (!inputText ||
            inputText.includes("__AI_ANALYSIS_FAILED__") ||
            inputText.includes("AI Analysis Error") ||
            inputText.includes("AI Request Failed") ||
            inputText.includes("could not process the request")) {
            inputText = project.description || project.name;
        }

        const aiResponse = await legalIntelligenceService.analyzeCaseDetails(inputText, project, language);

        const aiData = typeof aiResponse === "string" ? JSON.parse(aiResponse) : aiResponse;

        // Sanitization helpers
        const toStr = (val, fallback = '') => {
            if (!val) return fallback;
            if (typeof val === 'string') return val;
            return JSON.stringify(val);
        };

        const toDate = (val) => {
            if (!val) return null;
            const d = new Date(val);
            return isNaN(d.getTime()) ? null : d;
        };

        // Map AI keys to normalized local keys with safety checks
        const normalized = {
            summary: toStr(aiData.executive_summary || aiData.summary),
            strength: aiData.case_strength ?? aiData.strengthScore ?? aiData.strength ?? 0,
            probability: aiData.win_probability ?? aiData.winProbability ?? aiData.probability ?? 0,
            timeline: Array.isArray(aiData.timeline) ? aiData.timeline : [],
            evidence: Array.isArray(aiData.evidence) ? aiData.evidence : [],
            research: Array.isArray(aiData.legal_research || aiData.research) ? (aiData.legal_research || aiData.research) : [],
            steps: Array.isArray(aiData.process_steps || aiData.steps) ? (aiData.process_steps || aiData.steps) : [],
            risk: aiData.risk_assessment || aiData.risk || {},
            vulnerabilities: Array.isArray(aiData.critical_vulnerabilities || aiData.weakPoints) ? (aiData.critical_vulnerabilities || aiData.weakPoints) : [],
            opponent: Array.isArray(aiData.opponent_strategy || aiData.opponentStrategies) ? (aiData.opponent_strategy || aiData.opponent_strategies) : [],
            relief: toStr(aiData.primary_relief || aiData.reliefGoals),
            strategy: Array.isArray(aiData.strategy_recommendation || aiData.strategyRecommendations) ? (aiData.strategy_recommendation || aiData.strategyRecommendations) : []
        };

        const updateData = {
            summary: normalized.summary || project.summary,
            clientName: project.clientName || toStr(aiData.parties?.plaintiff?.name || aiData.parties?.plaintiff) || '',
            opponentName: project.opponentName || toStr(aiData.parties?.defendant?.name || aiData.parties?.defendant) || '',
            reliefGoals: normalized.relief || project.reliefGoals,
            intelligence: {
                strengthScore: Number(normalized.strength) || 0,
                winProbability: Number(normalized.probability) || 0,
                riskLevel: ['Low', 'Medium', 'High', 'Critical'].includes(normalized.risk?.level) ? normalized.risk.level : 'Medium',
                weakPoints: [...(normalized.vulnerabilities || []), normalized.risk?.reason].filter(Boolean).map(v => toStr(v)),
                opponentStrategies: normalized.opponent.map(s => toStr(s)),
                strategyRecommendations: normalized.strategy.map(s => toStr(s)),
                missingEvidence: []
            },
            facts: [
                ...(project.facts || []),
                ...normalized.timeline
                    .filter(f => f && (f.event || f.title))
                    .filter(f => !(project.facts || []).some(fx => fx.event === (f.event || f.title)))
                    .map(f => ({
                        date: toDate(f.date),
                        event: toStr(f.event || f.title),
                        description: toStr(f.description || f.event || f.title)
                    }))
            ],
            legalIssues: normalized.research.map(r => toStr(r.law || r.lawName)).filter(Boolean),
            tasks: [
                ...(project.tasks || []),
                ...normalized.steps
                    .filter(p => p && (p.step || p.title))
                    .filter(p => !(project.tasks || []).some(tx => tx.title === (p.step || p.title)))
                    .map(p => ({
                        title: toStr(p.step || p.title),
                        status: 'Pending',
                        priority: toStr(p.priority) || 'Medium'
                    }))
            ],
            evidence: project.evidence || [],
            research: [
                ...(project.research || []),
                ...normalized.research
                    .filter(r => r && (r.law || r.lawName))
                    .filter(r => !(project.research || []).some(rx => rx.lawName === (r.law || r.lawName) && rx.section === (r.section || '')))
                    .map(r => ({
                        lawName: toStr(r.law || r.lawName),
                        section: toStr(r.section),
                        description: toStr(r.description)
                    }))
            ]
        };

        const updatedProject = await Project.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { $set: updateData },
            { new: true }
        );

        res.json(updatedProject);
    } catch (error) {
        console.error('[CaseAnalysis] Error:', error.message);
        res.status(500).json({ error: 'Failed to analyze case', details: error.message });
    }
};

// @desc    Analyze case details and update project
// @route   POST /api/projects/:id/analyze
router.post('/:id/analyze', verifyToken, performCaseAnalysis);

// @desc    Auto-Analyze alias — POST /api/cases/:id/auto-analyze
router.post('/:id/auto-analyze', verifyToken, performCaseAnalysis);


// @desc    Get all evidence for a case
// @route   GET /api/cases/:caseId/evidence
// @access  Private
router.get('/:caseId/evidence', verifyToken, async (req, res) => {
    try {
        const evidenceList = await Evidence.find({ caseId: req.params.caseId }).sort({ createdAt: -1 });
        res.json(evidenceList);
    } catch (error) {
        console.error('Error fetching evidence:', error);
        res.status(500).json({ error: 'Failed to fetch evidence' });
    }
});

// @desc    Create a new evidence item for a case
// @route   POST /api/cases/:caseId/evidence
// @access  Private
router.post('/:caseId/evidence', verifyToken, async (req, res) => {
    try {
        const {
            filename, name, fileUrl, uri, fileType, type, category,
            verificationStatus, admissibility, strength, confidence,
            confidenceScore, size, hash, notes, aiSummary, ocrStatus, aiProcessed
        } = req.body;

        const evidence = new Evidence({
            caseId: req.params.caseId,
            filename: filename || name || 'Unnamed Evidence',
            name: name || filename || 'Unnamed Evidence',
            fileUrl: fileUrl || uri || '',
            uri: uri || fileUrl || '',
            fileType: fileType || type || '',
            type: type || fileType || '',
            category: category || 'Evidence',
            verificationStatus: verificationStatus || admissibility || 'Pending',
            admissibility: admissibility || verificationStatus || 'Pending',
            strength: strength || 'Moderate',
            confidence: confidence || confidenceScore || 96,
            confidenceScore: confidenceScore || confidence || 96,
            size: size || 0,
            hash: hash || '',
            notes: notes || '',
            aiSummary: aiSummary || '',
            ocrStatus: ocrStatus || 'Success (OCR Done)',
            aiProcessed: aiProcessed || 'Extracted successfully',
            uploadedBy: (req.user?.id && mongoose.Types.ObjectId.isValid(req.user.id)) ? req.user.id : undefined
        });

        await evidence.save();
        res.status(201).json(evidence);
    } catch (error) {
        console.error('Error creating evidence:', error.message, error.stack);
        res.status(500).json({ error: 'Failed to create evidence', details: error.message });
    }
});

// @desc    Update an evidence item
// @route   PATCH /api/cases/:caseId/evidence/:evidenceId
// @access  Private
router.patch('/:caseId/evidence/:evidenceId', verifyToken, async (req, res) => {
    try {
        const updates = req.body;
        delete updates._id;
        delete updates.caseId;

        const updated = await Evidence.findOneAndUpdate(
            { _id: req.params.evidenceId, caseId: req.params.caseId },
            { $set: updates },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        res.json(updated);
    } catch (error) {
        console.error('Error updating evidence:', error);
        res.status(500).json({ error: 'Failed to update evidence' });
    }
});

// @desc    Delete an evidence item
// @route   DELETE /api/cases/:caseId/evidence/:evidenceId
// @access  Private
router.delete('/:caseId/evidence/:evidenceId', verifyToken, async (req, res) => {
    try {
        const deleted = await Evidence.findOneAndDelete({
            _id: req.params.evidenceId,
            caseId: req.params.caseId
        });

        if (!deleted) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        res.json({ success: true, message: 'Evidence deleted successfully', deleted });
    } catch (error) {
        console.error('Error deleting evidence:', error);
        res.status(500).json({ error: 'Failed to delete evidence' });
    }
});

// @desc    Get evidence statistics/counters for a case
// @route   GET /api/cases/:caseId/evidence/stats
// @access  Private
router.get('/:caseId/evidence/stats', verifyToken, async (req, res) => {
    try {
        const allDocs = await Evidence.find({ caseId: req.params.caseId });
        
        const totalCount = allDocs.length;
        const verifiedCount = allDocs.filter(d => d.verificationStatus === 'Verified' || d.admissibility === 'Admissible' || d.admissibility === 'admissible' || !d.admissibility).length;
        const pendingCount = allDocs.filter(d => d.verificationStatus === 'Pending' || d.admissibility === 'Challenged' || d.admissibility === 'challenged').length;
        const flaggedCount = allDocs.filter(d => d.strength === 'Disputed' || d.strength === 'Tampered' || d.admissibility === 'Inadmissible' || d.admissibility === 'inadmissible').length;
        const strongCount = allDocs.filter(d => d.strength === 'Strong' || d.strength === 'strong').length;
        const weakCount = allDocs.filter(d => d.strength === 'Weak' || d.strength === 'weak').length;
        const recentCount = allDocs.filter(d => Date.now() - new Date(d.uploadedAt || 0).getTime() < 3 * 24 * 3600 * 1000).length;

        res.json({
            total: totalCount,
            verified: verifiedCount,
            pending: pendingCount,
            flagged: flaggedCount,
            strong: strongCount,
            weak: weakCount,
            recent: recentCount
        });
    } catch (error) {
        console.error('Error fetching evidence stats:', error);
        res.status(500).json({ error: 'Failed to fetch evidence stats' });
    }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json({ success: true, message: 'Project deleted' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

export default router;
