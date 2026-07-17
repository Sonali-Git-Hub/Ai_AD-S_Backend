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

async function captureSlides() {
    try {
        console.log("Locating asset files...");
        const logoPath = path.resolve('h:/aisa_new_web/AISA_New_Backend/public/logo/Logo.svg');
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
            width: 1122px;
            height: 794px;
            position: relative;
            overflow: hidden;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
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
            padding: 0 0 0 80px;
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
            padding: 60px 80px;
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
            padding: 0 60px;
            background-color: #ffffff;
            position: relative;
            border-bottom: 2px solid #e2e8f0;
        }

        .header-logo-container {
            position: absolute;
            left: 60px;
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
            padding: 50px 80px;
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
            padding: 40px 60px;
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
            padding: 60px 80px;
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
    </style>
</head>
<body>

    <!-- Slide 1: Cover Page -->
    <div id="slide1" class="slide cover-slide">
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
    <div id="slide2" class="slide">
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
    <div id="slide3" class="slide">
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

    <!-- Slide 5: Features -->
    <div id="slide5" class="slide">
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

    <!-- Slide 12: Conclusion -->
    <div id="slide12" class="slide cover-slide">
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

        const tempHtmlPath = path.resolve('h:/aisa_new_web/AISA_New_Backend/scratch/temp_capture.html');
        fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');
        console.log("HTML compiled successfully!");

        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1122,
            height: 794,
            deviceScaleFactor: 2
        });

        console.log("Loading page in Puppeteer...");
        await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });

        console.log("Capturing screenshots of individual slides...");
        const artifactDir = 'C:/Users/saksh/.gemini/antigravity-ide/brain/a48b032f-25f2-4cd6-94d7-aa07ac3230eb';

        const slidesToCapture = [
            { id: '#slide1', filename: 'cover_slide.png' },
            { id: '#slide2', filename: 'overview_slide.png' },
            { id: '#slide3', filename: 'problem_slide.png' },
            { id: '#slide5', filename: 'features_slide.png' },
            { id: '#slide12', filename: 'conclusion_slide.png' }
        ];

        for (const slide of slidesToCapture) {
            const element = await page.$(slide.id);
            if (element) {
                const savePath = path.join(artifactDir, slide.filename);
                await element.screenshot({ path: savePath });
                console.log(`Captured ${slide.id} to ${savePath}`);
            } else {
                console.warn(`Could not find element: ${slide.id}`);
            }
        }

        // Cleanup
        await browser.close();
        if (fs.existsSync(tempHtmlPath)) {
            fs.unlinkSync(tempHtmlPath);
        }
        console.log("Screenshots captured successfully!");

    } catch (error) {
        console.error("Capture failed:", error);
    }
}

captureSlides();
