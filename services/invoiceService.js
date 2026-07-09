import Invoice from '../models/Invoice.js';
import Subscription from '../models/Subscription.js';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import { resend } from '../utils/Email.config.js';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@uwo24.com';
const SENDER_EMAIL = process.env.EMAIL || process.env.EMAIL_USER || 'verification@ai-mall.in';
const SELLER_STATE = process.env.SELLER_STATE || 'Maharashtra';

/**
 * Log failures to a dedicated file for subsequent retries
 */
const logFailure = (paymentId, type, errorDetails) => {
    try {
        const logsDir = path.join(__dirname, '..', 'logs');
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }
        const logPath = path.join(logsDir, 'invoice_failures.log');
        const entry = `${new Date().toISOString()} | PaymentID: ${paymentId || 'N/A'} | Type: ${type} | Error: ${errorDetails}\n`;
        fs.appendFileSync(logPath, entry);
        console.error(`[INVOICE FAILURE LOGGED] ${entry.trim()}`);
    } catch (e) {
        console.error("Failed to write to failure log file:", e.message);
    }
};

/**
 * Generates the PDF Invoice using Puppeteer.
 * Returns a Buffer of the generated PDF.
 */
const generateInvoicePdfBuffer = async (invoice, plan, subscription) => {
    let browser;
    try {
        const taxDetailsHtml = invoice.igst > 0 
            ? `<div class="row"><div>IGST (18%):</div><div>₹${invoice.igst.toFixed(2)}</div></div>`
            : invoice.gstPercentage > 0 
              ? `<div class="row"><div>CGST (9%):</div><div>₹${invoice.cgst.toFixed(2)}</div></div>
                 <div class="row"><div>SGST (9%):</div><div>₹${invoice.sgst.toFixed(2)}</div></div>`
              : `<div class="row"><div>GST (0% - Exempt):</div><div>₹0.00</div></div>`;

        let addressLines = [];
        if (invoice.billingDetails.addressLine1) {
            addressLines.push(invoice.billingDetails.addressLine1);
        }
        let cityStateZip = '';
        if (invoice.billingDetails.city) cityStateZip += invoice.billingDetails.city;
        if (invoice.billingDetails.state) {
            cityStateZip += (cityStateZip ? ', ' : '') + invoice.billingDetails.state;
        }
        if (invoice.billingDetails.postalCode) {
            cityStateZip += (cityStateZip ? ' - ' : '') + invoice.billingDetails.postalCode;
        }
        if (cityStateZip) {
            addressLines.push(cityStateZip);
        }
        addressLines.push(invoice.billingDetails.country || 'IN');

        const addressHtml = addressLines.map(line => `<div>${line}</div>`).join('');

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body {
                    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #334155;
                    margin: 0;
                    padding: 40px;
                    line-height: 1.5;
                }
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .title {
                    font-size: 28px;
                    font-weight: 900;
                    color: #4f46e5;
                    letter-spacing: -1px;
                }
                .meta-table {
                    width: 100%;
                    margin-bottom: 30px;
                }
                .meta-table td {
                    vertical-align: top;
                    font-size: 13px;
                }
                .meta-title {
                    font-size: 14px;
                    font-weight: bold;
                    color: #1e293b;
                    margin: 0 0 8px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }
                .items-table th {
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 12px;
                    text-align: left;
                    font-weight: bold;
                    font-size: 13px;
                    color: #475569;
                }
                .items-table td {
                    padding: 12px;
                    border-bottom: 1px solid #e2e8f0;
                    font-size: 13px;
                }
                .summary {
                    width: 250px;
                    margin-left: auto;
                    font-size: 13px;
                    color: #475569;
                }
                .summary .row {
                    display: flex;
                    justify-content: space-between;
                    padding: 6px 0;
                }
                .summary .total {
                    font-size: 16px;
                    font-weight: bold;
                    color: #4f46e5;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 10px;
                    margin-top: 10px;
                }
                .footer {
                    margin-top: 60px;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 20px;
                    text-align: center;
                    font-size: 11px;
                    color: #94a3b8;
                }
            </style>
        </head>
        <body>
            <div class="invoice-box">
                <div class="header">
                    <div class="title">AISA™</div>
                    <div style="text-align: right; font-size: 13px;">
                        <strong>AISA Inc.</strong><br>
                        GSTIN: 27AASCA8481G1Z3<br>
                        Address: Suite 101, Innovator Tower, Mumbai, Maharashtra, 400001
                    </div>
                </div>

                <table class="meta-table">
                    <tr>
                        <td style="width: 50%;">
                            <h4 class="meta-title">Billed To</h4>
                            <strong>${invoice.billingDetails.name}</strong><br>
                            ${invoice.billingDetails.companyName ? `${invoice.billingDetails.companyName}<br>` : ''}
                            ${invoice.billingDetails.gstin ? `<strong>GSTIN:</strong> ${invoice.billingDetails.gstin}<br>` : ''}
                            ${addressHtml}
                        </td>
                        <td style="width: 50%; text-align: right;">
                            <h4 class="meta-title">Invoice Information</h4>
                            <strong>Invoice Number:</strong> ${invoice.invoiceNumber}<br>
                            <strong>Invoice Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString('en-IN')}<br>
                            <strong>Payment Method:</strong> ${invoice.paymentGateway.toUpperCase()}<br>
                            <strong>Transaction ID:</strong> ${invoice.paymentId}<br>
                            <strong>Payment Status:</strong> ${invoice.paymentStatus.toUpperCase()}<br>
                            <strong>Subscription Period:</strong> ${new Date(subscription.subscriptionStart).toLocaleDateString('en-IN')} - ${new Date(subscription.renewalDate).toLocaleDateString('en-IN')}
                        </td>
                    </tr>
                </table>

                <table class="items-table">
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th style="text-align: right;">Billing Cycle</th>
                            <th style="text-align: right;">Base Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>AISA™ ${plan.planName} Subscription Upgrade</strong></td>
                            <td style="text-align: right; text-transform: capitalize;">${subscription.billingCycle}</td>
                            <td style="text-align: right;">₹${invoice.baseAmount.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="summary">
                    <div class="row">
                        <div>Subtotal (Base):</div>
                        <div>₹${invoice.baseAmount.toFixed(2)}</div>
                    </div>
                    ${taxDetailsHtml}
                    <div class="row total">
                        <div>Total Paid:</div>
                        <div>₹${invoice.totalAmount.toFixed(2)}</div>
                    </div>
                </div>

                <div class="footer">
                    <p>Thank you for choosing AISA! This is a computer generated invoice and does not require a physical signature.</p>
                    <p>For support, please contact us at support@aisa24.com</p>
                </div>
            </div>
        </body>
        </html>
        `;

        let executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
        const launchOptions = {
            headless: 'shell',
            executablePath,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-software-rasterizer',
                '--disable-extensions',
                '--font-render-hinting=none',
                '--hide-scrollbars',
                '--mute-audio',
            ]
        };

        browser = await puppeteer.launch(launchOptions);
        const page = await browser.newPage();
        await page.setViewport({ width: 794, height: 1122 });
        await page.setContent(htmlContent, { waitUntil: 'load', timeout: 30000 });
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: false,
            margin: {
                top: '20px',
                right: '20px',
                bottom: '40px',
                left: '20px'
            }
        });

        await browser.close();
        return pdfBuffer;
    } catch (err) {
        if (browser) {
            try { await browser.close(); } catch (e) {}
        }
        throw err;
    }
};

/**
 * Creates an invoice in the database, sends email confirmations, and prints to console.
 * 
 * @param {string} subscriptionId - The ID of the newly created subscription
 * @param {object} clientBillingDetails - Billing info passed from frontend checkout
 * @param {string} [gatewayOverride=null] - The exact payment gateway used
 * @param {number} [amountOverride=null] - The exact amount paid in INR
 * @returns {Promise<object>} The generated Invoice document
 */
export const createInvoice = async (subscriptionId, clientBillingDetails, gatewayOverride = null, amountOverride = null) => {
    let paymentIdForLog = 'N/A';
    try {
        console.log(`[INVOICE] Starting invoice generation for subscription: ${subscriptionId}...`);
        
        // 1. Fetch Subscription, User, and Plan details
        const subscription = await Subscription.findById(subscriptionId).populate('planId');
        if (!subscription) throw new Error('Subscription not found');
        
        paymentIdForLog = subscription.paymentId;

        // Prevent duplicate invoice creation for the same paymentId
        if (subscription.paymentId && !subscription.paymentId.startsWith('mock_')) {
            const existing = await Invoice.findOne({ paymentId: subscription.paymentId });
            if (existing) {
                console.log(`[INVOICE] Duplicate invoice check passed. Invoice already exists for payment: ${subscription.paymentId}`);
                return existing;
            }
        }

        const user = await User.findById(subscription.userId);
        if (!user) throw new Error('User not found');

        const plan = subscription.planId;
        if (!plan) throw new Error('Plan not found');

        // Check if it is a free plan or a manually/mock assigned subscription
        const isFreePlan = (subscription.billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly) === 0;
        const isMockPayment = !subscription.paymentId || subscription.paymentId.startsWith('mock_') || subscription.paymentId === 'manual' || subscription.paymentId === 'free';

        if (isFreePlan || isMockPayment) {
            console.log(`[INVOICE SKIP] Skipping invoice generation for subscription ${subscriptionId} (Free plan or mock/manual payment).`);
            return null; // Return null instead of generating invoice doc
        }

        // 2. Resolve Billing Details
        const billingDetails = {
            name: clientBillingDetails?.billingName || clientBillingDetails?.name || user.name || 'Valued Customer',
            companyName: clientBillingDetails?.companyName || '',
            gstin: clientBillingDetails?.gstin || '',
            addressLine1: clientBillingDetails?.addressLine1 || '',
            city: clientBillingDetails?.city || '',
            state: clientBillingDetails?.state || '',
            postalCode: clientBillingDetails?.postalCode || '',
            country: clientBillingDetails?.country || 'IN'
        };

        // Save billing details back to user profile for future reference
        user.billingDetails = billingDetails;
        await user.save();

        // 3. Perform GST Calculations
        const basePrice = subscription.billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
        let baseAmount = 0;
        let totalGst = 0;
        let totalAmountPaid = 0;
        let gstPercentage = 18;

        if (amountOverride !== null && amountOverride !== undefined) {
            // Use the actual paid amount directly (calculate backward)
            totalAmountPaid = Number(amountOverride);
            baseAmount = Math.round((totalAmountPaid / 1.18) * 100) / 100;
            totalGst = Math.round((totalAmountPaid - baseAmount) * 100) / 100;
        } else {
            // Default plan-based calculation
            if (plan.isGstInclusive) {
                totalAmountPaid = basePrice;
                baseAmount = Math.round((basePrice / 1.18) * 100) / 100;
                totalGst = Math.round((totalAmountPaid - baseAmount) * 100) / 100;
            } else {
                baseAmount = basePrice;
                totalGst = Math.round((basePrice * 0.18) * 100) / 100;
                totalAmountPaid = Math.round((basePrice + totalGst) * 100) / 100;
            }
        }

        let cgst = 0;
        let sgst = 0;
        let igst = 0;

        const buyerCountry = (billingDetails.country || '').trim().toUpperCase();
        const buyerState = (billingDetails.state || '').trim().toLowerCase();
        const sellerStateNormalized = SELLER_STATE.trim().toLowerCase();

        if (buyerCountry === 'IN' || buyerCountry === 'INDIA') {
            gstPercentage = 18;
            if (buyerState === sellerStateNormalized) {
                // Same State split (9% CGST + 9% SGST)
                cgst = Math.round((totalGst / 2) * 100) / 100;
                sgst = Math.round((totalGst / 2) * 100) / 100;
            } else {
                // Different State (18% IGST)
                igst = totalGst;
            }
        } else {
            // International client - tax exempt
            gstPercentage = 0;
            totalGst = 0;
            cgst = 0;
            sgst = 0;
            igst = 0;
            totalAmountPaid = basePrice;
            baseAmount = basePrice;
        }

        // 4. Generate Unique Invoice Number (INV-YYYY-XXXXXX)
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1);
        const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

        const count = await Invoice.countDocuments({
            createdAt: { $gte: startOfYear, $lte: endOfYear }
        });
        const sequence = String(count + 1).padStart(6, '0');
        const invoiceNumber = `INV-${currentYear}-${sequence}`;

        // Determine Payment Gateway
        let paymentGateway = gatewayOverride || 'razorpay';
        if (!gatewayOverride && subscription.paymentId) {
            const pid = subscription.paymentId.toLowerCase();
            if (pid.startsWith('ch_') || pid.startsWith('py_') || pid.startsWith('pay_')) {
                paymentGateway = 'razorpay';
            } else if (pid.startsWith('pay-') || pid.startsWith('paypal-') || pid.includes('pp-') || pid.length > 15) {
                if (!pid.startsWith('pay_')) {
                    paymentGateway = 'paypal';
                }
            }
        }

        // 5. Initialize Invoice Record in DB
        const invoice = new Invoice({
            invoiceNumber,
            userId: user._id,
            subscriptionId: subscription._id,
            planId: plan._id,
            planPrice: basePrice,
            paymentGateway,
            paymentId: subscription.paymentId || 'mock_payment_id',
            paymentStatus: 'captured',
            billingDetails,
            baseAmount,
            cgst,
            sgst,
            igst,
            gstPercentage,
            gstAmount: totalGst,
            totalAmount: totalAmountPaid,
            currency: 'INR'
        });

        // 6. Generate and Save PDF locally
        console.log(`[INVOICE] Generating PDF for ${invoiceNumber}...`);
        let pdfBuffer;
        try {
            pdfBuffer = await generateInvoicePdfBuffer(invoice, plan, subscription);
            
            const invoicesDir = path.join(__dirname, '..', 'public', 'invoices');
            if (!fs.existsSync(invoicesDir)) {
                fs.mkdirSync(invoicesDir, { recursive: true });
            }
            
            const pdfFileName = `${invoiceNumber}.pdf`;
            const pdfFilePath = path.join(invoicesDir, pdfFileName);
            fs.writeFileSync(pdfFilePath, pdfBuffer);
            
            // Set invoice URL
            invoice.invoiceUrl = `/invoices/${pdfFileName}`;
            console.log(`[INVOICE] PDF written locally at: ${pdfFilePath}`);
        } catch (pdfErr) {
            logFailure(subscription.paymentId, 'PDF_GENERATION', pdfErr.message);
            throw new Error(`PDF generation failed: ${pdfErr.message}`);
        }

        // Save invoice to database
        await invoice.save();

        console.log(`\n======================================================`);
        console.log(`[INVOICE SUCCESS] Generated ${invoiceNumber}`);
        console.log(`------------------------------------------------------`);
        console.log(`Client:       ${billingDetails.name} (${user.email})`);
        console.log(`Plan:         ${plan.planName} (${subscription.billingCycle})`);
        console.log(`Tax Type:     ${plan.isGstInclusive ? 'Inclusive' : 'Exclusive'}`);
        console.log(`Base Price:   ₹${baseAmount}`);
        console.log(`GST Amount:   ₹${totalGst} (${gstPercentage}%)`);
        console.log(`Total Paid:   ₹${totalAmountPaid}`);
        console.log(`PDF URL:      ${invoice.invoiceUrl}`);
        console.log(`======================================================\n`);

        // 7. Dispatch Confirmation Emails with attachments
        try {
            await sendInvoiceEmailWithAttachment(user, invoice, plan, subscription, pdfBuffer);
        } catch (emailErr) {
            logFailure(subscription.paymentId, 'EMAIL_DISPATCH', emailErr.message);
        }

        return invoice;
    } catch (error) {
        console.error('[INVOICE ERROR] Failed to create invoice:', error.message);
        logFailure(paymentIdForLog, 'CREATE_INVOICE_FLOW', error.message);
        throw error;
    }
};

/**
 * Dispatch verification and purchase confirmation emails with attachments
 */
const sendInvoiceEmailWithAttachment = async (user, invoice, plan, subscription, pdfBuffer) => {
    try {
        const validityPeriod = `${new Date(subscription.subscriptionStart).toLocaleDateString('en-IN')} to ${new Date(subscription.renewalDate).toLocaleDateString('en-IN')}`;
        
        const taxDetailsHtml = invoice.igst > 0 
            ? `<p style="margin: 5px 0;"><strong>IGST (18%):</strong> ₹${invoice.igst.toFixed(2)}</p>`
            : invoice.gstPercentage > 0 
              ? `<p style="margin: 5px 0;"><strong>CGST (9%):</strong> ₹${invoice.cgst.toFixed(2)}</p>
                 <p style="margin: 5px 0;"><strong>SGST (9%):</strong> ₹${invoice.sgst.toFixed(2)}</p>`
              : `<p style="margin: 5px 0;"><strong>GST (0% - Exempt):</strong> ₹0.00</p>`;

        const addressHtml = `
            <p style="margin: 2px 0;">${invoice.billingDetails.addressLine1}</p>
            <p style="margin: 2px 0;">${invoice.billingDetails.city}, ${invoice.billingDetails.state} - ${invoice.billingDetails.postalCode}</p>
            <p style="margin: 2px 0;">${invoice.billingDetails.country}</p>
        `;

        const emailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 25px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Payment Successful</h1>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">Thank you for upgrading to AISA™ Premium!</p>
                </div>
                
                <div style="padding: 25px; background: #fafafa;">
                    <p>Dear <strong>${invoice.billingDetails.name}</strong>,</p>
                    <p>Your subscription payment has been successfully processed. Below are the transaction and billing details. Your invoice has been attached to this email.</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 20px;">
                        <tr>
                            <td style="vertical-align: top; width: 50%;">
                                <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px;">Billed To:</h3>
                                <p style="margin: 2px 0; font-weight: bold; color: #334155;">${invoice.billingDetails.name}</p>
                                ${invoice.billingDetails.companyName ? `<p style="margin: 2px 0;">${invoice.billingDetails.companyName}</p>` : ''}
                                ${invoice.billingDetails.gstin ? `<p style="margin: 2px 0; color: #4f46e5;"><strong>GSTIN:</strong> ${invoice.billingDetails.gstin}</p>` : ''}
                                ${addressHtml}
                            </td>
                            <td style="vertical-align: top; text-align: right; width: 50%;">
                                <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px;">Invoice details:</h3>
                                <p style="margin: 2px 0;"><strong>Invoice No:</strong> ${invoice.invoiceNumber}</p>
                                <p style="margin: 2px 0;"><strong>Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString('en-IN')}</p>
                                <p style="margin: 2px 0;"><strong>Payment ID:</strong> ${invoice.paymentId}</p>
                                <p style="margin: 2px 0;"><strong>Validity:</strong> ${validityPeriod}</p>
                            </td>
                        </tr>
                    </table>

                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                                    <th style="padding: 12px; text-align: left; font-weight: bold; color: #475569; font-size: 13px;">Plan / Item</th>
                                    <th style="padding: 12px; text-align: right; font-weight: bold; color: #475569; font-size: 13px;">Billing Cycle</th>
                                    <th style="padding: 12px; text-align: right; font-weight: bold; color: #475569; font-size: 13px;">Base Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">AISA™ ${plan.planName}</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; text-transform: capitalize; color: #475569;">${subscription.billingCycle}</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; color: #1e293b;">₹${invoice.baseAmount.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="width: 280px; margin-left: auto; text-align: right; font-size: 14px; color: #475569; line-height: 1.6;">
                        <p style="margin: 5px 0;"><strong>Subtotal (Base):</strong> ₹${invoice.baseAmount.toFixed(2)}</p>
                        ${taxDetailsHtml}
                        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 10px 0;">
                        <p style="margin: 5px 0; font-size: 18px; color: #4f46e5;"><strong>Total Paid:</strong> ₹${invoice.totalAmount.toFixed(2)}</p>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #e2e8f0; text-align: center; color: #475569;">
                        <p style="margin: 0; font-size: 15px; font-weight: bold; color: #1e293b;">Thank you for your payment!</p>
                        <p style="margin: 5px 0 0 0; font-size: 13px; line-height: 1.5; color: #64748b;">
                            We truly appreciate your business and trust in AISA™ to power your platform. 
                            Your subscription has been activated successfully.
                        </p>
                    </div>

                    <div style="text-align: center; margin-top: 20px;">
                        <a href="${process.env.FRONTEND_URL || 'https://aisa24.com'}/dashboard/settings" style="display: inline-block; background: #4f46e5; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">Go to Dashboard</a>
                    </div>
                </div>

                <div style="background: #f1f5f9; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #64748b; font-size: 12px;">
                    <p style="margin: 0;">AISA Platform - Invoice & Billing System</p>
                    <p style="margin: 5px 0 0 0;">This is a system generated invoice receipt. If you have any questions, contact us at ${ADMIN_EMAIL}.</p>
                </div>
            </div>
        `;

        // 1. Send Invoice to Customer
        await resend.emails.send({
            from: `AISA™ Billing <${SENDER_EMAIL}>`,
            to: [user.email],
            subject: `🧾 Invoice for AISA™ ${plan.planName} Upgrade - ${invoice.invoiceNumber}`,
            html: emailContent,
            attachments: [
                {
                    filename: `${invoice.invoiceNumber}.pdf`,
                    content: pdfBuffer
                }
            ]
        });
        console.log(`[EMAIL SERVICE] Invoice email with PDF attachment sent to customer: ${user.email}`);

        // 2. Send Notification to Admin/Owner
        await resend.emails.send({
            from: `AISA™ Alerts <${SENDER_EMAIL}>`,
            to: [ADMIN_EMAIL],
            subject: `💰 New Upgrade Purchase! ₹${invoice.totalAmount.toFixed(2)} from ${user.email}`,
            html: `
                <h3>New Subscription Upgrade Alert!</h3>
                <p><strong>Customer:</strong> ${user.name} (${user.email})</p>
                <p><strong>Plan Purchased:</strong> AISA™ ${plan.planName} (${subscription.billingCycle})</p>
                <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
                <p><strong>Total Amount:</strong> ₹${invoice.totalAmount.toFixed(2)} (Base: ₹${invoice.baseAmount.toFixed(2)}, GST: ₹${invoice.gstAmount.toFixed(2)} [${invoice.gstPercentage}%])</p>
                <p><strong>Gateway ID:</strong> ${invoice.paymentId}</p>
                <p><a href="${process.env.FRONTEND_URL || 'https://aisa24.com'}/dashboard/admin">View in Admin Panel</a></p>
            `
        });
        console.log(`[EMAIL SERVICE] Admin purchase alert sent successfully.`);

    } catch (err) {
        console.error('[EMAIL SERVICE ERROR] Failed to send invoice emails:', err.message);
        throw err;
    }
};
