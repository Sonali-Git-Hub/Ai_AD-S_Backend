import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import ChatSession from '../models/ChatSession.js';

const run = async () => {
    try {
        await connectDB();
        console.log('Connected to DB.');

        const sessionId = 'mremcscf8jy5c33cdic';

        const [session] = await ChatSession.aggregate([
            { $match: { sessionId } },
            {
                $addFields: {
                    totalMessages: { $size: '$messages' },
                    hasError: {
                        $gt: [
                            {
                                $size: {
                                    $filter: {
                                        input: { $ifNull: ['$messages', []] },
                                        as: 'msg',
                                        cond: {
                                            $and: [
                                                { $in: ['$$msg.role', ['model', 'assistant']] },
                                                {
                                                    $or: [
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, '❌'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Error:'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Error :'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'failed to'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Failed to'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Conversion failed'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'conversion failed'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Internal Server Error'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'Quota exceeded'] }, -1] },
                                                        { $ne: [{ $indexOfCP: [{ $ifNull: ['$$msg.content', ''] }, 'quota exceeded'] }, -1] }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            0
                        ]
                    }
                }
            },
            {
                $addFields: {
                    sessionStatus: {
                        $cond: {
                            if: '$hasError',
                            then: 'failed',
                            else: {
                                $cond: {
                                    if: { $eq: ['$totalMessages', 0] },
                                    then: 'abandoned',
                                    else: {
                                        $cond: {
                                            if: {
                                                $lt: [
                                                    { $subtract: [new Date(), { $toDate: '$lastModified' }] },
                                                    1800000 // 30 mins
                                                ]
                                            },
                                            then: 'active',
                                            else: 'completed'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]);

        if (session) {
            console.log('\n=========================================');
            console.log(`SESSION: ${session.sessionId}`);
            console.log(`hasError: ${session.hasError}`);
            console.log(`sessionStatus: ${session.sessionStatus}`);
            console.log('=========================================');
        } else {
            console.log('Session not found.');
        }

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await mongoose.connection.close();
    }
};

run();
