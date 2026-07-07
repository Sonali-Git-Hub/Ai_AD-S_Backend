import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';

export const getPaymentHistory = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        
        // Find subscriptions for this user and populate the plan details
        const subscriptions = await Subscription.find({ userId })
            .populate('planId')
            .sort({ createdAt: -1 });

        // Map subscriptions to a transaction format expected by the frontend
        const transactions = subscriptions.map(sub => ({
            id: sub._id,
            paymentId: sub.paymentId,
            planName: sub.planId?.planName || 'Unknown Plan',
            amount: sub.billingCycle === 'yearly' ? sub.planId?.priceYearly : sub.planId?.priceMonthly,
            status: sub.subscriptionStatus === 'active' ? 'success' : sub.subscriptionStatus,
            date: sub.createdAt,
            billingCycle: sub.billingCycle
        })).filter(tx => tx.amount > 0); // Only return transactions with an actual amount

        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching payment history:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createOrder = async (req, res) => {
    // Placeholder as this might be handled by subscriptionController
    res.status(501).json({ error: "Not Implemented - Use subscription API" });
};

import puppeteer from 'puppeteer';
import Invoice from '../models/Invoice.js';
import User from '../models/User.js';

export const verifyPayment = async (req, res) => {
    res.status(501).json({ error: "Not Implemented - Use subscription API" });
};

export const downloadInvoicePdf = async (req, res) => {
    try {
        const { subscriptionId } = req.params;
        const userId = req.user.id || req.user._id;

        // Fetch the invoice
        const invoice = await Invoice.findOne({ subscriptionId }).populate('subscriptionId').populate('userId');
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found for this subscription.' });
        }

        // Verify ownership (only the user who purchased it or an admin can download it)
        if (invoice.userId._id.toString() !== userId.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Unauthorized to access this invoice.' });
        }

        const sub = invoice.subscriptionId;
        const plan = await Plan.findById(sub.planId);
        if (!plan) return res.status(404).json({ error: 'Plan details not found.' });

        const taxDetailsHtml = invoice.igst > 0 
            ? `<div class="row"><div>IGST (18%):</div><div>₹${invoice.igst.toFixed(2)}</div></div>`
            : `<div class="row"><div>CGST (9%):</div><div>₹${invoice.cgst.toFixed(2)}</div></div>
               <div class="row"><div>SGST (9%):</div><div>₹${invoice.sgst.toFixed(2)}</div></div>`;

        const addressHtml = `
            <div>${invoice.billingDetails.addressLine1 || ''}</div>
            <div>${invoice.billingDetails.city || ''}, ${invoice.billingDetails.state || ''} - ${invoice.billingDetails.postalCode || ''}</div>
            <div>${invoice.billingDetails.country || 'IN'}</div>
        `;

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
                        State: Maharashtra, India
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
                            <strong>Transaction ID:</strong> ${invoice.paymentId}
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
                            <td style="text-align: right; text-transform: capitalize;">${sub.billingCycle}</td>
                            <td style="text-align: right;">₹${invoice.baseAmount.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="summary">
                    <div class="row">
                        <div>Subtotal:</div>
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

        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: 'new', 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        
        const pdfBuffer = await page.pdf({ 
            format: 'A4', 
            printBackground: true 
        });

        await browser.close();

        // Send PDF response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="invoice-${invoice.invoiceNumber}.pdf"`);
        res.status(200).send(pdfBuffer);

    } catch (error) {
        console.error('[INVOICE DOWNLOAD ERROR]', error);
        res.status(500).json({ error: 'Failed to generate PDF invoice.', details: error.message });
    }
};
