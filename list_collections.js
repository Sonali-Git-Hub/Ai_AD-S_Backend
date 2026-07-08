import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

async function testSync() {
    try {
        const uri = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;
        await mongoose.connect(uri, { family: 4 });
        console.log('[DB] Connected to MongoDB');

        // Import and run sync
        const { syncRazorpayPayments } = await import('./services/razorpaySync.service.js');
        console.log('[SYNC] Starting Razorpay sync for last 90 days...');
        const result = await syncRazorpayPayments(90);
        
        console.log('\n=== SYNC RESULTS ===');
        console.log(`Total captured payments from Razorpay: ${result.total}`);
        console.log(`New payments synced: ${result.synced}`);
        console.log(`Already synced (skipped): ${result.skipped}`);
        console.log(`Errors: ${result.errors}`);
        
        if (result.details && result.details.length > 0) {
            console.log('\nDetails:');
            result.details.forEach(d => {
                console.log(`  ${d.status.toUpperCase()} | ${d.paymentId} | ₹${d.amount || 'N/A'} | ${d.user || d.reason || ''} | ${d.invoiceNumber || ''}`);
            });
        }

        process.exit(0);
    } catch (e) {
        console.error('[SYNC ERROR]', e.message);
        console.error(e.stack);
        process.exit(1);
    }
}

testSync();
