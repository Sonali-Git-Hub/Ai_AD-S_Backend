import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

// Helper to convert files to base64 Data URIs
function getBase64DataURI(filePath, mimeType) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return '';
    }
    const data = fs.readFileSync(filePath);
    return `data:${mimeType};base64,${data.toString('base64')}`;
}

async function generateDeck() {
    try {
        console.log("Locating asset files...");
        const logoPath = path.resolve('h:/aisa_new_web/AISA_New_Backend/public/logo/Logo1.svg');
        const bgPath = path.resolve('h:/aisa_new_web/AISA_New_Backend/public/logo/financial_workspace_bg.png');

        const logoURI = getBase64DataURI(logoPath, 'image/svg+xml');
        const bgURI = getBase64DataURI(bgPath, 'image/png');

        console.log("Compiling HTML slides...");
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>AI CashFlow Pitch Deck</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f1f5f9;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .slide {
            width: 297mm;
            height: 210mm;
            page-break-after: always;
            position: relative;
            overflow: hidden;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
        }

        /* Slide 1 & 12: Cover & Conclusion Background */
        .cover-slide {
            background-image: linear-gradient(135deg, rgba(13, 58, 148, 0.9), rgba(10, 37, 85, 0.95)), url('${bgURI}');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 0 0 20mm;
            color: #ffffff;
        }

        .cover-left {
            width: 55%;
        }

        .cover-left h1 {
            font-size: 3.6rem;
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -1px;
            text-transform: uppercase;
        }

        .cover-right {
            position: relative;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .cover-logo-circle {
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background-color: #071e3d;
            border: 15px solid #002d72;
            box-shadow: 0 0 0 10px #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            position: absolute;
            right: 20%;
            overflow: hidden;
            padding: 40px;
        }

        .cover-logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .cover-gold-bar {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 40%;
            height: 65px;
            background-color: #f59e0b;
            z-index: 1;
            border-top-left-radius: 35px;
            border-bottom-left-radius: 35px;
        }

        /* Split layout slides */
        .split-slide {
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
        }

        .split-left-blue {
            width: 35%;
            background-color: #082d6b;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .split-left-blue .overview-logo-container {
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background-color: #071e3d;
            border: 12px solid #002d72;
            box-shadow: 0 0 0 8px #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 30px;
        }

        .split-right-content {
            width: 65%;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15mm 20mm;
        }

        .split-right-content h2 {
            font-size: 2.8rem;
            font-weight: 800;
            color: #002d72;
            margin-bottom: 5px;
            line-height: 1.1;
        }

        .split-right-content .product-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f59e0b;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .bullet-list {
            list-style: none;
        }

        .bullet-list li {
            font-size: 1.05rem;
            line-height: 1.6;
            color: #334155;
            margin-bottom: 15px;
            position: relative;
            padding-left: 25px;
        }

        .bullet-list li::before {
            content: "•";
            color: #f59e0b;
            font-size: 1.8rem;
            position: absolute;
            left: 5px;
            top: -2px;
        }

        .bullet-list li strong {
            color: #0f172a;
            font-weight: 700;
        }

        /* Top White / Bottom Blue Slides */
        .slide-header {
            height: 25%;
            display: flex;
            align-items: center;
            padding: 0 15mm;
            background-color: #ffffff;
            position: relative;
            border-bottom: 2px solid #e2e8f0;
        }

        .header-logo-container {
            position: absolute;
            left: 15mm;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-logo {
            height: 52px;
            object-fit: contain;
        }

        .header-logo-text {
            font-size: 0.55rem;
            font-weight: 800;
            text-align: center;
            color: #0b2240;
            line-height: 1.1;
            margin-top: 3px;
        }

        .header-titles {
            width: 100%;
            text-align: center;
        }

        .header-titles h2 {
            font-size: 2.6rem;
            font-weight: 800;
            color: #002d72;
            line-height: 1.1;
        }

        .header-titles h3 {
            font-size: 1.6rem;
            font-weight: 700;
            color: #f59e0b;
            margin-top: 5px;
        }

        .blue-content-area {
            height: 75%;
            background-color: #082d6b;
            padding: 12mm 20mm;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .check-item {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin-bottom: 16px;
        }

        .check-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: transparent;
            border: 3px solid #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 18px;
            flex-shrink: 0;
            position: relative;
            margin-top: 2px;
        }

        .check-icon::after {
            content: "";
            display: block;
            width: 11px;
            height: 6px;
            border-left: 3px solid #f59e0b;
            border-bottom: 3px solid #f59e0b;
            transform: rotate(-45deg);
            position: absolute;
            top: 8px;
            left: 7px;
        }

        .check-text {
            color: #ffffff;
            font-size: 1.05rem;
            line-height: 1.5;
        }

        .check-text strong {
            color: #f59e0b;
            font-weight: 700;
        }

        /* Slide 5: Features Layout */
        .features-content-area {
            height: 75%;
            background-color: #f1f5f9;
            padding: 10mm 15mm;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 15px;
            width: 100%;
            height: 100%;
        }

        .feature-card {
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            border-radius: 12px;
            border: 1px solid #cbd5e1;
            padding: 12px 18px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .feature-card h4 {
            font-size: 1.1rem;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 6px;
        }

        .feature-card p {
            font-size: 0.85rem;
            line-height: 1.4;
            color: #475569;
        }

        /* Slide 6, 7 & 8: Large Graphics Split */
        .split-left-white {
            width: 35%;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .value-svg {
            width: 75%;
            max-width: 220px;
            height: auto;
        }

        .split-right-blue {
            width: 65%;
            background-color: #082d6b;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15mm 20mm;
        }

        .split-right-blue h2 {
            font-size: 2.5rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .bullet-list-white {
            list-style: none;
        }

        .bullet-list-white li {
            font-size: 1.05rem;
            line-height: 1.5;
            color: #e2e8f0;
            margin-bottom: 18px;
            position: relative;
            padding-left: 25px;
        }

        .bullet-list-white li::before {
            content: "•";
            color: #f59e0b;
            font-size: 1.8rem;
            position: absolute;
            left: 5px;
            top: -2px;
        }

        .bullet-list-white li strong {
            color: #ffffff;
            font-weight: 700;
        }

        /* Conclusion Page Conclusion Details */
        .conclusion-left h2 {
            font-size: 2.8rem;
            font-weight: 800;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 35px;
        }

        .conclusion-left h2 span {
            color: #f59e0b;
            display: block;
            margin-top: 5px;
        }

        .contact-info {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #e2e8f0;
        }

        .contact-info strong {
            color: #ffffff;
            font-size: 1.2rem;
            display: block;
            margin-bottom: 10px;
        }

        .thank-you-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: relative;
        }

        .thank-you-title {
            font-size: 2.8rem;
            font-weight: 900;
            color: #ffffff;
            margin-top: 180px;
            z-index: 2;
            text-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        @media print {
            .slide {
                width: 297mm;
                height: 210mm;
                page-break-after: always;
            }
        }
    </style>
</head>
<body>

    <!-- Slide 1: Cover Page -->
    <div class="slide cover-slide">
        <div class="cover-left">
            <h1>UNIFIED<br>WEB<br>OPTIONS &amp;<br>SERVICES<br>PRIVATE<br>LIMITED</h1>
        </div>
        <div class="cover-right">
            <div class="cover-logo-circle">
                <img src="${logoURI}" class="cover-logo" />
            </div>
            <div class="cover-gold-bar"></div>
        </div>
    </div>

    <!-- Slide 2: Company Overview -->
    <div class="slide">
        <div class="split-slide">
            <div class="split-left-blue">
                <div class="overview-logo-container">
                    <img src="${logoURI}" class="cover-logo" />
                </div>
            </div>
            <div class="split-right-content">
                <h2>Company Overview</h2>
                <div class="product-title">Product: AI CASHFLOW™</div>
                <ul class="bullet-list">
                    <li><strong>Presented By:</strong> Unified Web Options &amp; Services Pvt. Ltd. (UWO™)</li>
                    <li><strong>Company Status:</strong> DPIIT-Recognized &amp; DUNS-Registered Enterprise Technology Firm in Jabalpur (M.P)</li>
                    <li><strong>Focus:</strong> Unifying Financial Intelligence &amp; Wealth Tracking</li>
                    <li><strong>Mission:</strong> Bringing real-time stock analytics, advisory, and academic investment frameworks into one secure AI-powered workspace.</li>
                    <li><strong>Target Audience:</strong> Retail Investors, Stock Market Enthusiasts, Financial Advisory Firms, Finance Colleges &amp; Next-Gen Financial Analysts.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Slide 3: The Problem -->
    <div class="slide">
        <div class="slide-header">
            <div class="header-logo-container">
                <img src="${logoURI}" class="header-logo" />
                <span class="header-logo-text">UWO<br><small>Unified Web Options</small></span>
            </div>
            <div class="header-titles">
                <h2>The Problem</h2>
                <h3>The Fragmentation of Financial Tools</h3>
            </div>
        </div>
        <div class="blue-content-area">
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Too Many Single-Purpose Apps:</strong> Investors have to jump between multiple charting platforms, news feeds, sentiment analysis tools, and trading terminals.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Heavy Administrative &amp; Analysis Burdens:</strong> Too many hours are wasted manually downloading historical spreadsheets, calculating intrinsic value, and tracking portfolio metrics.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Slow, Manual Valuation Research:</strong> Calculating key stock valuation formulas from legendary investors like Benjamin Graham is highly time-consuming and increases human error risks.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>The Sentiment Gap:</strong> There is no single, unified workspace that connects active real-time pricing data with Natural Language Processing (NLP) of financial news.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Difficulty in Decision Timing:</strong> Manually tracking complex technical indicators (RSI, MACD, Ichimoku) across different stock symbols creates high stress and leads to missed entry or exit signals.</div>
            </div>
        </div>
    </div>

    <!-- Slide 4: Our Solution -->
    <div class="slide">
        <div class="slide-header">
            <div class="header-logo-container">
                <img src="${logoURI}" class="header-logo" />
                <span class="header-logo-text">UWO<br><small>Unified Web Options</small></span>
            </div>
            <div class="header-titles">
                <h2>Our Solution</h2>
                <h3>Introducing AI CASHFLOW™</h3>
            </div>
        </div>
        <div class="blue-content-area">
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>All-in-One Stock Workspace:</strong> Brings real-time charts, historical data, and sentiment-driven news analysis into one central hub.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Smart Research &amp; Valuation:</strong> Speeds up equity analysis with automated calculations for intrinsic value and margin of safety.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Next-Gen Financial Advisory:</strong> Features real-time buy, sell, and hold advisory signals powered by advanced technical analysis.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Data-Driven Sentiment Tracking:</strong> Scrapes and processes financial news using Natural Language Processing (NLP) to extract instant sentiment indicators (bullish/bearish).</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Interactive AI Chatbot:</strong> A personal financial advisor and trainer that helps users query stock data and perform analysis effortlessly.</div>
            </div>
        </div>
    </div>

    <!-- Slide 5: Features -->
    <div class="slide">
        <div class="slide-header">
            <div class="header-logo-container">
                <img src="${logoURI}" class="header-logo" />
                <span class="header-logo-text">UWO<br><small>Unified Web Options</small></span>
            </div>
            <div class="header-titles">
                <h2>Features</h2>
                <h3>The Advanced Financial Intelligence Suite</h3>
            </div>
        </div>
        <div class="features-content-area">
            <div class="grid-container">
                <div class="feature-card">
                    <h4>Stock Workspace</h4>
                    <p>Enter any BSE/NSE symbol to fetch real-time charts, historical data, and news sentiment in seconds.</p>
                </div>
                <div class="feature-card">
                    <h4>Realtime Tracker</h4>
                    <p>View real-time tick prices, active pricing changes, and intraday updates dynamically.</p>
                </div>
                <div class="feature-card">
                    <h4>Interactive Visuals</h4>
                    <p>Analyze historical trends with interactive TradingView and Recharts visualizations.</p>
                </div>
                <div class="feature-card">
                    <h4>Advisory Verdicts</h4>
                    <p>Get instant investment signals with automated BUY, SELL, or HOLD triggers.</p>
                </div>
                <div class="feature-card">
                    <h4>Technical Indicators</h4>
                    <p>Track market momentum using automated RSI, MACD, SMA20, and Ichimoku Cloud direction.</p>
                </div>
                <div class="feature-card">
                    <h4>Fibonacci Thresholds</h4>
                    <p>Monitor real-time support and resistance levels to optimize trading entries and exits.</p>
                </div>
                <div class="feature-card">
                    <h4>Graham Valuation</h4>
                    <p>Compute intrinsic value and margin of safety using automated Benjamin Graham formulas.</p>
                </div>
                <div class="feature-card">
                    <h4>Kiyosaki Velocity</h4>
                    <p>Gain cashflow velocity insights by evaluating assets vs. liabilities from a Kiyosaki perspective.</p>
                </div>
                <div class="feature-card">
                    <h4>Deep AI Report</h4>
                    <p>Generate comprehensive markdown audits of stock health and ask stock queries to the AI chatbot.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Slide 6: Value for Investors & Advisory Firms -->
    <div class="slide">
        <div class="split-slide">
            <div class="split-left-white">
                <svg viewBox="0 0 100 100" class="value-svg">
                    <path d="M50,15 A22,22 0 0,0 28,48 C33,54 37,56 37,64 H63 C63,56 67,54 72,48 A22,22 0 0,0 50,15 Z" fill="none" stroke="#f59e0b" stroke-width="4.5"/>
                    <rect x="41" y="64" width="18" height="5" rx="1.5" fill="#f59e0b"/>
                    <rect x="44" y="71" width="12" height="5" rx="1.5" fill="#f59e0b"/>
                    <line x1="50" y1="4" x2="50" y2="9" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <line x1="21" y1="16" x2="26" y2="21" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <line x1="79" y1="16" x2="74" y2="21" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <line x1="10" y1="40" x2="16" y2="40" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <line x1="90" y1="40" x2="84" y2="40" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <path d="M15,82 L38,62 L52,72 L85,40 M85,40 L70,40 M85,40 L85,55" fill="none" stroke="#f59e0b" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="split-right-blue">
                <h2>Value for Investors &amp;<br>Advisory Firms</h2>
                <ul class="bullet-list-white">
                    <li><strong>Drastic Time Optimization:</strong> Cuts down research, financial calculation, and news sentiment processing timelines by up to 70%.</li>
                    <li><strong>Robust Advisory Readiness:</strong> Equips wealth managers with multi-layered technical indicators, historical chart patterns, and real-time alerts.</li>
                    <li><strong>Minimized Evaluation Errors:</strong> Automates complex valuation formulas to isolate high-margin opportunities and minimize manual computation mistakes.</li>
                    <li><strong>Wealth Velocity Integration:</strong> Offers a clean, transparent architecture to help portfolio managers track asset classes and velocity metrics seamlessly.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Slide 7: Value for Finance Colleges & Research Institutes -->
    <div class="slide">
        <div class="split-slide">
            <div class="split-right-blue" style="width: 65%;">
                <h2>Value for Finance Colleges &amp;<br>Research Institutes</h2>
                <ul class="bullet-list-white">
                    <li><strong>Next-Gen Tech Exposure:</strong> Provides students and faculty with immediate access to state-of-the-art AI financial modeling tools, building vital fintech literacy.</li>
                    <li><strong>Responsible Investment Research:</strong> Creates an active environment for academic case studies, market sentiment analysis, and valuation framework design.</li>
                    <li><strong>Ecosystem Credibility:</strong> Positions your institution as a foundational, forward-thinking partner actively validating AI stock analysis for public interest.</li>
                    <li><strong>Incubation Pathways:</strong> Facilitates structural collaboration between university innovation cells and active fintech engineers.</li>
                </ul>
            </div>
            <div class="split-left-white" style="width: 35%;">
                <svg viewBox="0 0 120 120" class="value-svg">
                    <polygon points="60,8 64,16 73,16 66,21 69,30 60,24 51,30 54,21 47,16 56,16" fill="#f59e0b"/>
                    <polygon points="32,20 34,26 41,26 36,30 38,36 32,32 26,36 28,30 23,26 30,26" fill="#f59e0b" opacity="0.8"/>
                    <polygon points="88,20 90,26 97,26 92,30 94,36 88,32 82,36 84,30 79,26 86,26" fill="#f59e0b" opacity="0.8"/>
                    <circle cx="60" cy="62" r="26" fill="none" stroke="#f59e0b" stroke-width="4.5"/>
                    <circle cx="60" cy="62" r="20" fill="none" stroke="#f59e0b" stroke-width="2"/>
                    <polygon points="50,87 40,112 55,105 60,90" fill="#f59e0b"/>
                    <polygon points="70,87 80,112 65,105 60,90" fill="#f59e0b"/>
                    <path d="M51,62 L57,68 L69,51" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>

    <!-- Slide 8: The Talent Pipeline -->
    <div class="slide">
        <div class="split-slide">
            <div class="split-right-content" style="width: 65%;">
                <h2>The Talent Pipeline</h2>
                <div class="product-title">Building the Future Financial Workforce</div>
                <ul class="bullet-list">
                    <li><strong>Live Project Engagements:</strong> Supervised student cohorts collaborate directly on real-world use-case maps, quantitative model evaluations, and stock UI/UX loops.</li>
                    <li><strong>High-Value Portfolio Evidence:</strong> Interns gain measurable, hands-on experience using algorithmic trading rubrics, financial data tagging, and dataset optimization.</li>
                    <li><strong>Interdisciplinary Career Readiness:</strong> Trains future analysts at the intersection of AI finance governance, quantitative analysis, data privacy, and machine learning validation.</li>
                    <li><strong>Strategic Placement Pipeline:</strong> Onboards top-performing students and research scholars for specialized long-term fintech engineering and policy roles.</li>
                </ul>
            </div>
            <div class="split-left-blue" style="width: 35%;">
                <svg viewBox="0 0 100 100" class="value-svg">
                    <polygon points="50,10 53,19 63,19 55,25 58,34 50,28 42,34 45,25 37,19 47,19" fill="#f59e0b"/>
                    <circle cx="50" cy="52" r="11" fill="#f59e0b"/>
                    <path d="M28,80 C28,67 38,65 50,65 C62,65 72,67 72,80" fill="#f59e0b"/>
                    <circle cx="30" cy="59" r="8.5" fill="#f59e0b" opacity="0.8"/>
                    <path d="M12,80 C12,70 20,69 30,69 C35,69 40,70 42,74" fill="#f59e0b" opacity="0.8"/>
                    <circle cx="70" cy="59" r="8.5" fill="#f59e0b" opacity="0.8"/>
                    <path d="M88,80 C88,70 80,69 70,69 C65,69 60,70 58,74" fill="#f59e0b" opacity="0.8"/>
                </svg>
            </div>
        </div>
    </div>

    <!-- Slide 9: Evaluation & Analytical Validation -->
    <div class="slide">
        <div class="slide-header">
            <div class="header-logo-container">
                <img src="${logoURI}" class="header-logo" />
                <span class="header-logo-text">UWO<br><small>Unified Web Options</small></span>
            </div>
            <div class="header-titles">
                <h2>Evaluation &amp; Analytical Validation</h2>
                <h3>Ensuring Absolute Precision</h3>
            </div>
        </div>
        <div class="blue-content-area">
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Mathematical Accuracy:</strong> Verifying that all stock valuation formulas, technical indicators, and margin of safety margins are contextually relevant and mathematically sound.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Source Integrity:</strong> Rigorous tracing of financial data feeds, news APIs, and exchange symbols to ensure incoming information is valid and accurate.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Risk &amp; Sentiment Analysis:</strong> Systematically isolating market sentiment, outlier news patterns, and potential hidden liabilities in stock reports.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Bias Mitigation:</strong> Eradicating unverified assumptions or skewed stock recommendation logic from systemic AI advisories.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Data Minimization:</strong> Ensuring strictly safe data lifecycles that prevent the exposure of confidential client investment profiles.</div>
            </div>
        </div>
    </div>

    <!-- Slide 10: Governance, Ethics & Financial Safety Framework -->
    <div class="slide">
        <div class="slide-header">
            <div class="header-logo-container">
                <img src="${logoURI}" class="header-logo" />
                <span class="header-logo-text">UWO<br><small>Unified Web Options</small></span>
            </div>
            <div class="header-titles">
                <h2>Governance, Ethics &amp; Safety Framework</h2>
                <h3>Responsible Financial Artificial Intelligence</h3>
            </div>
        </div>
        <div class="blue-content-area">
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Human-in-the-Loop (HITL):</strong> All critical investment recommendations remain under the direct supervision and final sign-off of qualified human professionals.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>No Autonomous Advice:</strong> The AI CashFlow architecture is explicitly positioned as an assistant workflow toolkit, never as an autonomous source of direct financial advice.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Secure Backtesting Protocols:</strong> Sandbox backtesting loops rely entirely on anonymized, public, or authorized historical financial datasets.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Immutable Audit Trails:</strong> Every user query, internal AI stock recommendation, and evaluation score is recorded for absolute compliance.</div>
            </div>
            <div class="check-item">
                <div class="check-icon"></div>
                <div class="check-text"><strong>Risk Escalation &amp; Containment:</strong> Any misleading, hallmarked, or suboptimal valuation output is instantly flagged, logged, and isolated for technical redesign.</div>
            </div>
        </div>
    </div>

    <!-- Slide 11: The Institutional Invitation -->
    <div class="slide">
        <div class="split-slide">
            <div class="split-left-blue" style="width: 35%;">
                <svg viewBox="0 0 100 100" class="value-svg">
                    <path d="M15,80 C25,75 35,70 50,70 C60,70 75,75 85,78 C80,85 70,88 50,88 C35,88 20,85 15,80 Z" fill="#f59e0b"/>
                    <path d="M15,80 C18,65 30,60 40,65" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                    <polygon points="50,18 26,32 74,32" fill="#f59e0b"/>
                    <rect x="29" y="32" width="42" height="4.5" fill="#f59e0b"/>
                    <rect x="32" y="36.5" width="4" height="20" fill="#f59e0b"/>
                    <rect x="42" y="36.5" width="4" height="20" fill="#f59e0b"/>
                    <rect x="52" y="36.5" width="4" height="20" fill="#f59e0b"/>
                    <rect x="62" y="36.5" width="4" height="20" fill="#f59e0b"/>
                    <rect x="27" y="56.5" width="46" height="5.5" fill="#f59e0b"/>
                </svg>
            </div>
            <div class="split-right-content" style="width: 65%;">
                <h2>The Institutional Invitation</h2>
                <div class="product-title">Join the Future of AI Financial Analytics</div>
                <p style="font-size: 1.05rem; line-height: 1.5; color: #475569; margin-bottom: 25px;">We are actively building partnerships with premier finance institutes, wealth management firms, and quantitative practitioners to co-develop, test, and authenticate India's definitive Financial AI infrastructure.</p>
                <ul class="bullet-list">
                    <li><strong>Academic Incubation &amp; Validation:</strong> Setting up joint innovation labs and financial research boards.</li>
                    <li><strong>Structured Pilot Programs:</strong> Providing controlled, secure platform access to selected advisory chambers and institutions.</li>
                    <li><strong>Talent Onboarding:</strong> Launching our curated fintech internship and scholar project cohorts.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Slide 12: Conclusion -->
    <div class="slide cover-slide">
        <div class="conclusion-left" style="width: 55%;">
            <h2>Conclusion — <span>The Future of Ecosystem Architecture</span></h2>
            <div class="contact-info">
                <strong>Unified Web Options &amp; Services Pvt. Ltd.</strong>
                Jabalpur, Madhya Pradesh, India<br>
                Email: admin@uwo24.com, hr@uwo24.com<br>
                Phone: 7389999999, 8871190020
            </div>
        </div>
        <div class="cover-right" style="width: 45%;">
            <div class="thank-you-container">
                <div class="cover-logo-circle" style="right: 20%; top: 50%; transform: translateY(-50%);">
                    <img src="${logoURI}" class="cover-logo" />
                </div>
                <div class="cover-gold-bar" style="top: 50%; transform: translateY(-50%); width: 40%; height: 65px;"></div>
                <div class="thank-you-title">THANK YOU</div>
            </div>
        </div>
    </div>

</body>
</html>
        `;

        const tempHtmlPath = path.resolve('h:/aisa_new_web/AISA_New_Backend/scratch/temp_deck.html');
        fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');
        console.log("HTML compiled to temp file successfully!");

        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        console.log("Loading local HTML page...");
        await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });

        console.log("Printing landscape PDF...");
        const outputPath = path.resolve('h:/aisa_new_web/AI_CashFlow_Deck.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log(`PDF successfully generated at: ${outputPath}`);

        // Cleanup
        await browser.close();
        if (fs.existsSync(tempHtmlPath)) {
            fs.unlinkSync(tempHtmlPath);
        }
        console.log("Temporary files cleaned up successfully.");

    } catch (error) {
        console.error("PDF generation failed with error:", error);
    }
}

generateDeck();
