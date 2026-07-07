import express from 'express';
import Invoice from '../models/Invoice.js';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const secret = req.query.secret || req.cookies?.invoice_secret;
        const dashboardSecret = process.env.INVOICE_DASHBOARD_SECRET || 'aisa_admin_invoice_2026';

        // Check if user is authorized (secret param OR admin user from session/cookie)
        let isAuthorized = (secret === dashboardSecret);
        
        // If not matching secret, check if they are logged in as admin
        if (!isAuthorized && req.user && (req.user.role === 'admin' || req.user.email === 'admin@uwo24.com')) {
            isAuthorized = true;
        }

        if (!isAuthorized) {
            return res.status(403).send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Unauthorized - AISA Invoices</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>
                        body {
                            background: radial-gradient(circle at center, #0f172a, #020617);
                            color: #f8fafc;
                            font-family: 'Inter', system-ui, -apple-system, sans-serif;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .card {
                            background: rgba(15, 23, 42, 0.45);
                            backdrop-filter: blur(16px);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            padding: 40px;
                            border-radius: 24px;
                            text-align: center;
                            max-width: 400px;
                            width: 90%;
                            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                        }
                        h1 { font-size: 24px; font-weight: 800; margin-bottom: 8px; color: #f43f5e; }
                        p { font-size: 14px; color: #94a3b8; line-height: 1.6; margin-bottom: 24px; }
                        input {
                            width: 100%;
                            padding: 12px 16px;
                            background: rgba(255,255,255,0.05);
                            border: 1px solid rgba(255,255,255,0.1);
                            border-radius: 12px;
                            color: white;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin-bottom: 16px;
                            text-align: center;
                            outline: none;
                        }
                        input:focus { border-color: #6366f1; }
                        button {
                            width: 100%;
                            padding: 12px;
                            background: #6366f1;
                            border: none;
                            color: white;
                            font-weight: bold;
                            border-radius: 12px;
                            cursor: pointer;
                            transition: background 0.2s;
                        }
                        button:hover { background: #4f46e5; }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <h1>Access Denied</h1>
                        <p>This dashboard is secure. Please enter the passcode to view the invoices.</p>
                        <form method="GET" action="">
                            <input type="password" name="secret" placeholder="Enter Passcode" required />
                            <button type="submit">Authenticate</button>
                        </form>
                    </div>
                </body>
                </html>
            `);
        }

        // Fetch invoices
        const invoices = await Invoice.find({})
            .populate('userId', 'name email')
            .populate({
                path: 'subscriptionId',
                populate: { path: 'planId', select: 'planName' }
            })
            .sort({ createdAt: -1 });

        // Calculate statistics
        const totalInvoices = invoices.length;
        const totalPaid = invoices.reduce((acc, inv) => acc + (inv.totalAmount || 0), 0);
        const totalBase = invoices.reduce((acc, inv) => acc + (inv.baseAmount || 0), 0);
        const totalGst = invoices.reduce((acc, inv) => acc + (inv.gstAmount || 0), 0);

        // Generate dashboard HTML
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>AISA™ Invoice & Billing Hub</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>
                :root {
                    --bg-gradient: radial-gradient(circle at center, #0f172a, #020617);
                    --glass: rgba(15, 23, 42, 0.45);
                    --glass-border: rgba(255, 255, 255, 0.08);
                    --text: #f8fafc;
                    --text-secondary: #94a3b8;
                    --primary: #6366f1;
                    --primary-hover: #4f46e5;
                    --success: #10b981;
                    --accent: #a855f7;
                }
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    background: var(--bg-gradient);
                    color: var(--text);
                    font-family: 'Inter', system-ui, -apple-system, sans-serif;
                    min-height: 100vh;
                    padding: 40px 20px;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .logo-icon {
                    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    font-size: 20px;
                    color: white;
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
                }
                .title-container h1 {
                    font-size: 28px;
                    font-weight: 900;
                    letter-spacing: -0.5px;
                    background: linear-gradient(135deg, #fff 30%, var(--text-secondary) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .title-container p {
                    font-size: 14px;
                    color: var(--text-secondary);
                    margin-top: 4px;
                }
                .search-box {
                    position: relative;
                }
                .search-input {
                    background: var(--glass);
                    border: 1px solid var(--glass-border);
                    padding: 12px 20px;
                    padding-left: 45px;
                    border-radius: 14px;
                    color: white;
                    width: 320px;
                    font-size: 14px;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .search-input:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);
                }
                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 18px;
                    height: 18px;
                    fill: var(--text-secondary);
                }
                
                /* Stats Section */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .stat-card {
                    background: var(--glass);
                    backdrop-filter: blur(16px);
                    border: 1px solid var(--glass-border);
                    padding: 24px;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    transition: transform 0.2s;
                }
                .stat-card:hover {
                    transform: translateY(-2px);
                }
                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 4px; height: 100%;
                    background: var(--primary);
                }
                .stat-card.revenue::before { background: var(--primary); }
                .stat-card.gst::before { background: var(--accent); }
                .stat-card.invoices::before { background: var(--success); }
                
                .stat-label {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: var(--text-secondary);
                    font-weight: 700;
                    letter-spacing: 1px;
                }
                .stat-value {
                    font-size: 28px;
                    font-weight: 800;
                    margin-top: 8px;
                }
                .stat-subtitle {
                    font-size: 11px;
                    color: var(--text-secondary);
                    margin-top: 4px;
                }

                /* Table Section */
                .table-container {
                    background: var(--glass);
                    backdrop-filter: blur(16px);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                .table-wrapper {
                    overflow-x: auto;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    font-size: 14px;
                }
                th {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 16px 24px;
                    font-weight: 600;
                    color: var(--text-secondary);
                    border-bottom: 1px solid var(--glass-border);
                    text-transform: uppercase;
                    font-size: 11px;
                    letter-spacing: 0.5px;
                }
                td {
                    padding: 18px 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                    vertical-align: middle;
                }
                tr:last-child td { border-bottom: none; }
                tr:hover td {
                    background: rgba(255, 255, 255, 0.01);
                }
                
                .invoice-num {
                    font-weight: 700;
                    color: white;
                }
                .client-name {
                    font-weight: 600;
                    color: white;
                }
                .client-email {
                    font-size: 12px;
                    color: var(--text-secondary);
                    margin-top: 2px;
                }
                .tag-gateway {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 10px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .tag-gateway.razorpay {
                    background: rgba(59, 130, 246, 0.1);
                    color: #3b82f6;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }
                .tag-gateway.paypal {
                    background: rgba(245, 158, 11, 0.1);
                    color: #f59e0b;
                    border: 1px solid rgba(245, 158, 11, 0.2);
                }
                .tag-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--success);
                }
                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--success);
                    box-shadow: 0 0 10px var(--success);
                }
                .price-bold {
                    font-weight: 700;
                    color: white;
                }
                .price-sub {
                    font-size: 11px;
                    color: var(--text-secondary);
                    margin-top: 2px;
                }
                .btn-download {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 8px 14px;
                    border-radius: 10px;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.2s, border-color 0.2s;
                }
                .btn-download:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }
                .download-icon {
                    width: 14px;
                    height: 14px;
                    fill: currentColor;
                }
                .no-results {
                    padding: 40px;
                    text-align: center;
                    color: var(--text-secondary);
                }
                .hidden { display: none !important; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="brand">
                        <div class="logo-icon">A</div>
                        <div class="title-container">
                            <h1>Invoice Hub</h1>
                            <p>Automated payment logs and GST breakdown registry</p>
                        </div>
                    </div>
                    
                    <div class="search-box">
                        <svg class="search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        <input type="text" id="searchInput" class="search-input" placeholder="Search invoices, clients, IDs...">
                    </div>
                </div>

                <!-- Stats Dashboard -->
                <div class="stats-grid">
                    <div class="stat-card revenue">
                        <div class="stat-label">Total Revenue</div>
                        <div class="stat-value">₹${totalPaid.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        <div class="stat-subtitle">Base Taxable: ₹${totalBase.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                    
                    <div class="stat-card gst">
                        <div class="stat-label">Total GST Collected</div>
                        <div class="stat-value">₹${totalGst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        <div class="stat-subtitle">18% CGST / SGST / IGST Split</div>
                    </div>
                    
                    <div class="stat-card invoices">
                        <div class="stat-label">Total Invoices</div>
                        <div class="stat-value">${totalInvoices}</div>
                        <div class="stat-subtitle">Successful transactions recorded</div>
                    </div>
                </div>

                <!-- Invoices Table -->
                <div class="table-container">
                    <div class="table-wrapper">
                        <table id="invoicesTable">
                            <thead>
                                <tr>
                                    <th>Invoice #</th>
                                    <th>Client Details</th>
                                    <th>Date</th>
                                    <th>Gateway</th>
                                    <th>Status</th>
                                    <th>Billing Breakdown</th>
                                    <th style="text-align: right;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${invoices.map(inv => {
                                    const clientName = inv.billingDetails?.name || inv.userId?.name || 'Valued Customer';
                                    const clientEmail = inv.userId?.email || 'N/A';
                                    const planName = inv.subscriptionId?.planId?.planName || 'Premium Plan';
                                    const formattedDate = new Date(inv.invoiceDate || inv.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
                                    const subtotal = inv.baseAmount || 0;
                                    const gst = inv.gstAmount || 0;
                                    const total = inv.totalAmount || 0;
                                    const invoicePdfUrl = inv.invoiceUrl || `/api/payment/invoice/${inv.subscriptionId?._id || ''}`;
                                    
                                    return `
                                    <tr class="invoice-row">
                                        <td class="search-target-inv">
                                            <span class="invoice-num">${inv.invoiceNumber}</span>
                                            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">ID: ${inv.paymentId}</div>
                                        </td>
                                        <td class="search-target-client">
                                            <div class="client-name">${clientName}</div>
                                            <div class="client-email">${clientEmail}</div>
                                            ${inv.billingDetails?.companyName ? `<div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">Company: ${inv.billingDetails.companyName}</div>` : ''}
                                        </td>
                                        <td>${formattedDate}</td>
                                        <td class="search-target-gateway">
                                            <span class="tag-gateway ${inv.paymentGateway}">${inv.paymentGateway}</span>
                                        </td>
                                        <td>
                                            <span class="tag-status">
                                                <span class="status-dot"></span>
                                                ${inv.paymentStatus || 'captured'}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="price-bold">₹${total.toFixed(2)}</div>
                                            <div class="price-sub">Base: ₹${subtotal.toFixed(2)} | GST: ₹${gst.toFixed(2)}</div>
                                            <div style="font-size: 10px; color: var(--text-secondary); font-style: italic; margin-top: 2px;">Plan: ${planName}</div>
                                        </td>
                                        <td style="text-align: right;">
                                            <a href="${invoicePdfUrl}" class="btn-download" target="_blank">
                                                <svg class="download-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                                                PDF
                                            </a>
                                        </td>
                                    </tr>
                                    `;
                                }).join('')}
                                
                                ${invoices.length === 0 ? `
                                <tr>
                                    <td colspan="7" class="no-results">No invoices found. Succeed a transaction to display billing reports here.</td>
                                </tr>
                                ` : ''}
                            </tbody>
                        </table>
                        
                        <div id="noSearchMatches" class="no-results hidden">No invoices matched your search filter.</div>
                    </div>
                </div>
            </div>

            <script>
                const searchInput = document.getElementById('searchInput');
                const tableRows = document.querySelectorAll('.invoice-row');
                const noMatchesDiv = document.getElementById('noSearchMatches');

                searchInput.addEventListener('input', function(e) {
                    const query = e.target.value.toLowerCase().trim();
                    let matchCount = 0;

                    tableRows.forEach(row => {
                        const invText = row.querySelector('.search-target-inv').textContent.toLowerCase();
                        const clientText = row.querySelector('.search-target-client').textContent.toLowerCase();
                        const gatewayText = row.querySelector('.search-target-gateway').textContent.toLowerCase();
                        
                        const isMatch = invText.includes(query) || clientText.includes(query) || gatewayText.includes(query);
                        
                        if (isMatch) {
                            row.classList.remove('hidden');
                            matchCount++;
                        } else {
                            row.classList.add('hidden');
                        }
                    });

                    if (matchCount === 0 && tableRows.length > 0) {
                        noMatchesDiv.classList.remove('hidden');
                    } else {
                        noMatchesDiv.classList.add('hidden');
                    }
                });
            </script>
        </body>
        </html>
        `;
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (error) {
        console.error('[DASHBOARD ERROR]', error);
        res.status(500).send(`Server Error: ${error.message}`);
    }
});

export default router;
