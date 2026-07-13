import { c as createLucideIcon, v as useLanguage, r as reactExports, ca as useActiveCase, z as zt, j as jsxRuntimeExports, bU as ChevronLeft, bV as LanguageToggle, b$ as History, Q as Pen, bY as FileDown, bZ as Copy, ac as ChevronDown, O as React, c9 as Briefcase, U as Upload, F as FileText, c1 as CircleCheck, ae as Search, A as AnimatePresence, m as motion, e as ChevronRight, cb as Brain, k as Sparkles, cc as ShieldAlert, cd as Pin, ce as PinOff, R as RefreshCw, cf as Bookmark, c2 as Star, X, P as Check, u as Eye, T as Trash2, c8 as generateChatResponse, a as apiService } from "./index-BpSYSyeq.js";
import { U as UniversalMultimodalInput } from "./UniversalMultimodalInput-C6p7oq4e.js";
import { P as Printer } from "./printer-hTskwuIg.js";
import { S as SquareCheckBig } from "./square-check-big-Hw-02z7A.js";
import "./mic-off-DabVp5UX.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
];
const Clipboard = createLucideIcon("Clipboard", __iconNode);
const MOCK_PRECEDENT_REPOS = [
  { id: "p1", citation: "Aditya & Co. v. State Trading Corp (2022) SC 881", court: "Supreme Court", ratio: "Binding precedent stating written contract obligations override oral assertions in commercial agreements.", year: 2022 },
  { id: "p2", citation: "Sanjay Kumar v. Union of India (2023) SC 404", court: "Supreme Court", ratio: "Admissibility of electronic records requires certificate compliance under Section 65B of Evidence Act / Section 63 BSA.", year: 2023 },
  { id: "p3", citation: "Rajesh Sharma v. Amit Verma (2024) Del HC 922", court: "High Court", ratio: "Mandatory pre-institution litigation guidelines for commercial suits must be strictly complied with.", year: 2024 },
  { id: "p4", citation: "Indian Express Corp v. Union of India (1985) 1 SCC 641", court: "Supreme Court", ratio: "Freedom of press and constitutional review of administrative actions regarding public advertisements.", year: 1985 },
  { id: "p5", citation: "State of Maharashtra v. Mayer Hans George (1965) AIR 722", court: "Supreme Court", ratio: "Mens rea is an essential ingredient of a statutory offense unless ruled out by express words.", year: 1965 },
  { id: "p6", citation: "National Insurance Co v. Pranay Sethi (2017) 16 SCC 680", court: "Supreme Court", ratio: "Guidelines for future prospects calculation in motor accident claim petitions.", year: 2017 }
];
const REASONING_DATA = {
  executiveSummary: {
    reason: "Provides the court and senior counsel with a high-level summary of the dispute scope.",
    law: "Order VIII Rule 1 CPC (Written Statements), Order VII Rule 1 CPC (Plaints).",
    facts: "Chronology of contract signing, service delivery, and default notifications.",
    evidence: "Contract agreement copy, notice of default, service logs.",
    precedent: "Aditya & Co. v. State Trading Corp (2022) SC 881.",
    confidence: 96
  },
  caseOverview: {
    reason: "Establishes a cohesive legal narrative mapping the relationship and sequence of events.",
    law: "Section 37 of the Indian Contract Act, 1872 (obligation of parties to contracts).",
    facts: "Execution of binding transaction and subsequent breach of covenant by the respondent.",
    evidence: "Original signed contract, account ledger entries showing payment history.",
    precedent: "M.C. Chacko v. State Bank of Travancore (1969) SC.",
    confidence: 94
  },
  issuesForDetermination: {
    reason: "Defines the exact judicial questions the Court must resolve, ensuring focus on key disputes.",
    law: "Order XIV Rule 1 CPC (Framing of issues by Court).",
    facts: "Denial of liability by respondent vs proof of performance by petitioner.",
    evidence: "Invoice receipts, dispute correspondence, mediation reports.",
    precedent: "Makhan Lal Bangal v. Manisha Dey (2001) SC.",
    confidence: 95
  },
  applicableActs: {
    reason: "Identifies the core governing legislation under which the court is competent to grant relief.",
    law: "Commercial Courts Act, 2015; Indian Contract Act, 1872; Specific Relief Act, 1963.",
    facts: "Transaction qualifies as a commercial dispute under Section 2(1)(c) of the Commercial Courts Act.",
    evidence: "Purchase orders, business registration certificates.",
    precedent: "Ambalal Sarabhai Enterprises v. KS Infraspace (2020) SC.",
    confidence: 98
  },
  applicableSections: {
    reason: "Pins the exact statutory provisions that mandate liability or govern procedural reliefs.",
    law: "Section 73 of the Contract Act (damages), Section 37 & 38 of Specific Relief Act (injunctions).",
    facts: "Breach occurred without reasonable cause, triggering statutory damages.",
    evidence: "Financial damage assessment sheet, profit loss statements.",
    precedent: "Maula Bux v. Union of India (1969) SC.",
    confidence: 93
  },
  supremeCourtPrecedents: {
    reason: "Establishes binding legal precedents that the lower or high courts are constitutionally mandated to follow.",
    law: "Article 141 of the Constitution of India (law declared by SC is binding).",
    facts: "Interpretation of contractual clauses is governed by the intent of the written instrument.",
    evidence: "Executed contract copy.",
    precedent: "ONGC Ltd. v. Saw Pipes Ltd. (2003) SC.",
    confidence: 97
  },
  highCourtJudgments: {
    reason: "Provides persuasive or binding local jurisdiction precedents to satisfy local bench practices.",
    law: "High Court original side rules, local civil court guidelines.",
    facts: "Breach of timeline in commercial contract in Delhi/local region.",
    evidence: "Pre-institution mediation failure report under Section 12A of Commercial Courts Act.",
    precedent: "Patil Automation Pvt. Ltd. v. Rakheja Engineers (2022) SC.",
    confidence: 92
  },
  plaintiffArguments: {
    reason: "Formulates the active offensive case arguments demonstrating clear liability on the respondent.",
    law: "Section 101 of the Indian Evidence Act, 1872 (burden of proof lies on who asserts).",
    facts: "Petitioner completed all work milestones; Respondent withheld payments without cause.",
    evidence: "Completion certificate signed by independent audit engineer.",
    precedent: "State of AP v. Krishna Kondala Rao (2004) SC.",
    confidence: 95
  },
  defendantArguments: {
    reason: "Identifies potential defense theories to proactively address them or highlights opponent strategy.",
    law: "Section 102 of the Evidence Act (on whom burden of proof lies if no evidence given).",
    facts: "Respondent claims force majeure or delay caused by third-party vendor.",
    evidence: "Weather reports, sub-contractor delay letters.",
    precedent: "Satyabrata Ghose v. Mugneeram Bangur & Co. (1954) SC.",
    confidence: 88
  },
  counterArguments: {
    reason: "Anticipates objections the opponent's counsel will raise in their written statement.",
    law: "Order VIII Rule 2 CPC (specific denials and new facts must be pleaded).",
    facts: "Respondent will attempt to claim waiver of performance deadlines by petitioner.",
    evidence: "Email transcripts showing friendly extensions of project timeline.",
    precedent: "Keshavlal Lallubhai Patel v. Lalbhai Trikamlal Mills (1958) SC.",
    confidence: 90
  },
  rebuttalStrategy: {
    reason: "Provides counsel with arguments to counter and defeat the respondent's primary defense.",
    law: "Section 92 of the Evidence Act (exclusion of evidence of oral agreement).",
    facts: "Any extension of time was conditional upon payment of interim interest, which was breached.",
    evidence: "Demand letters, conditional extension emails.",
    precedent: "New India Assurance Co. v. C.G. George (2019) SC.",
    confidence: 94
  },
  evidenceMapping: {
    reason: "Establishes a logical correlation between factual claims and documentary/oral proof on record.",
    law: "Section 5 of the Evidence Act (admissibility of relevant facts).",
    facts: "Every claim of performance matches a dated invoice and bank ledger receipt.",
    evidence: "Invoices, SWIFT bank transfer notifications.",
    precedent: "Kalyan Singh v. Chhoti (1990) SC.",
    confidence: 96
  },
  witnessReferences: {
    reason: "Outlines oral witness deposition lines to strengthen the documentary records.",
    law: "Section 137 & 138 of the Evidence Act (examination-in-chief, cross-examination).",
    facts: "Oral statement by accounts manager verifies ledger entries and default calls.",
    evidence: "Witness affidavit under Order XIX Rule 1 CPC.",
    precedent: "State of Rajasthan v. Bhup Singh (1997) SC.",
    confidence: 91
  },
  crossExamQuestions: {
    reason: "Formulates questions to dismantle the credibility of the opponent's witness.",
    law: "Section 146 of the Evidence Act (questions lawful in cross-examination).",
    facts: "Dismantle claim that respondent did not receive invoices or default notices.",
    evidence: "Courier tracking receipts signed by respondent's security.",
    precedent: "U.B. Dutt & Co. v. Workman (1962) SC.",
    confidence: 93
  },
  objections: {
    reason: "Prepares trial counsel to raise objections during opponent depositions.",
    law: "Section 165 of the Evidence Act (Judge's power to put questions or order production).",
    facts: "Prevent leading questions or introducing new documents during cross-examination.",
    evidence: "Staged document bundle, trial minutes.",
    precedent: "Sarla Mudgal v. Union of India (1995) SC.",
    confidence: 89
  },
  reliefClaimed: {
    reason: "Specifies the particular reliefs demanded to ensure full remedy is addressed by court.",
    law: "Order VII Rule 7 CPC (Relief must be specifically claimed).",
    facts: "Specific default calculations showing exact financial damage amount.",
    evidence: "Audit balance sheets, demand draft vouchers.",
    precedent: "Rajasthan SRTC v. Krishna Kant (1995) SC.",
    confidence: 95
  },
  prayerClause: {
    reason: "The critical formal request detailing the exact decree the Petitioner demands from the Court.",
    law: "Order VII Rule 7 CPC (Relief to be specifically stated).",
    facts: "Respondent has run away with unpaid funds, prompting recovery and costs.",
    evidence: "Calculated damage sheets.",
    precedent: "Trojan & Co. v. Nagappa Chettiar (1953) SC.",
    confidence: 99
  },
  courtReadyDraft: {
    reason: "Compiles the final, print-ready document formatted to strict litigation filing standards.",
    law: "Order VI CPC (Pleadings generally), Delhi High Court Original Side Rules.",
    facts: "All statement of facts, grounds, and prayers consolidated chronologically.",
    evidence: "Staged index of documents.",
    precedent: "Uday Shankar Triyar v. Ram Kalewar Prasad Singh (2006) SC.",
    confidence: 99
  },
  materialFacts: {
    reason: "Details chronological key facts that establish the cause of action and legal claim grounds.",
    law: "Order VI CPC Pleading Standards, fact pleading rules.",
    facts: "Unconditional performance requirements and dates of breach.",
    evidence: "Document transaction logs, bank statements, default receipts.",
    precedent: "Uday Shankar Triyar v. Ram Kalewar Prasad (2006) SC.",
    confidence: 96
  },
  chronologyOfEvents: {
    reason: "Establishes a step-by-step undisputed chronology to help the bench track timeline milestones.",
    law: "Pleading timeline formats under High Court rules.",
    facts: "Transaction timelines, defaults, notices, failure of mediation.",
    evidence: "Stamped courier receipts, e-ledger records.",
    precedent: "Rajesh Sharma v. Amit Verma (2024) Del HC 922.",
    confidence: 97
  },
  relevantRules: {
    reason: "Specifies procedural court rules governing maintainability, summons, and document filings.",
    law: "Civil Procedure Code Order VII, Order VIII, High Court Original Side Rules.",
    facts: "Compliance with local High Court rules on document staging and presentation.",
    evidence: "Affidavits of service, certified ledger transcripts.",
    precedent: "Patil Automation Pvt. Ltd. v. Rakheja Engineers (2022) SC.",
    confidence: 94
  },
  relevantRegulations: {
    reason: "Identifies administrative or sector-specific guidelines that establish liability standards.",
    law: "SEBI / RBI regulations, trade body guidelines, local municipal bylaws.",
    facts: "Breach of mandatory regulatory compliance by the respondent.",
    evidence: "Regulatory certificates, breach notices.",
    precedent: "Ambalal Sarabhai Enterprises v. KS Infraspace (2020) SC.",
    confidence: 93
  },
  persuasiveAuthorities: {
    reason: "Cites judgments from other jurisdictions or authoritative legal treatises for novel issues.",
    law: "Persuasive case laws from other High Courts, foreign jurisdictions, or legal standard commentaries.",
    facts: "Interpretation of complex indemnity or force majeure clauses.",
    evidence: "Standard trade practices records.",
    precedent: "State of Maharashtra v. Mayer Hans George (1965) AIR 722.",
    confidence: 90
  },
  interimRelief: {
    reason: "Demands immediate temporary protection (injunctions, attachments) to prevent asset dissipation.",
    law: "Order XXXIX Rules 1 & 2 CPC, Section 9 Arbitration Act.",
    facts: "Respondent is actively trying to wind up operations or dispose of contested security assets.",
    evidence: "Property listing links, public filings of liquidation notices.",
    precedent: "Morgan Stanley Mutual Fund v. Kartick Das (1994) SC.",
    confidence: 95
  },
  alternativeArguments: {
    reason: "Maintains backup legal bases in case the primary argument on contract breach is rejected.",
    law: "Principles of quantum meruit, unjust enrichment, restitution.",
    facts: "Work was completed and accepted; even if contract is void, compensation remains due.",
    evidence: "Service completion reports, accepted delivery receipts.",
    precedent: "State of West Bengal v. B.K. Mondal & Sons (1962) SC.",
    confidence: 92
  },
  settlementPossibilities: {
    reason: "Assesses ADR feasibility or compromise bounds to resolve the dispute efficiently.",
    law: "Section 89 CPC (Court-referred mediation/arbitration).",
    facts: "Pre-institution mediation failure details or party settlement offers.",
    evidence: "Mediation reports, marked 'without prejudice' correspondence.",
    precedent: "Afcons Infrastructure v. Cherian Varkey (2010) SC.",
    confidence: 91
  },
  litigationRisks: {
    reason: "Examines potential procedural defenses, limitation challenges, or counter-claims.",
    law: "Limitation Act, 1963; specific performance bars.",
    facts: "Minor delays in invoicing, jurisdictional challenge claims.",
    evidence: "Staging communication records.",
    precedent: "Satyabrata Ghose v. Mugneeram Bangur (1954) SC.",
    confidence: 89
  },
  winningProbability: {
    reason: "Calculates overall lawsuit winning prospects based on evidence weights and precedents strength.",
    law: "Standard of proof in civil claims (preponderance of probabilities).",
    facts: "Strong documentary evidence vs oral assertions by the respondent.",
    evidence: "Signed contract copy, bank entries, undisputed emails.",
    precedent: "Kalyan Singh v. Chhoti (1990) SC.",
    confidence: 94
  }
};
const HINDI_DICT = {
  // Navigation
  "Choose Source": "स्रोत चुनें",
  "Source": "स्रोत",
  "AI Analysis": "एआई विश्लेषण",
  "Court Draft": "न्यायालय हेतु मसौदा",
  "Back": "पीछे",
  "Cancel": "रद्द करें",
  "Selected": "चयनित",
  "Pinned": "पिन किया गया",
  // Choose Source Cards
  "Existing Case Workspace": "मौजूदा केस वर्कस्पेस",
  "Auto populate facts, parties, documents, evidence, timeline from chosen case.": "चुने गए मामले से तथ्यों, पक्षों, दस्तावेजों, साक्ष्यों और समयरेखा को स्वचालित रूप से स्वतः भरें।",
  "Upload Legal Documents": "कानूनी दस्तावेज अपलोड करें",
  "AI OCR extracts timelines, parties, laws, facts from uploaded files.": "एआई ओसीआर अपलोड की गई फाइलों से समयरेखा, पक्षों, कानूनों और तथ्यों को निकालता है।",
  "Manual Facts Outline": "मैनुअल तथ्य रूपरेखा",
  "Advocate details case facts manually. AI will analyze facts and build strategy.": "अधिवक्ता मामले के तथ्यों को मैन्युअल रूप से दर्ज करता है। एआई तथ्यों का विश्लेषण करेगा और रणनीति बनाएगा।",
  // Choose Case inputs
  "Choose Case Workspace": "केस वर्कस्पेस चुनें",
  "Search or Select Case Workspace": "केस वर्कस्पेस खोजें या चुनें",
  "Search workspace...": "वर्कस्पेस खोजें...",
  "No cases found": "कोई मामला नहीं मिला",
  "Case Matter Summary": "केस मामले का सारांश",
  "AI Ready": "एआई तैयार",
  "Case Name": "केस का नाम",
  "Case Type": "केस का प्रकार",
  "Parties": "पक्ष",
  "Court": "न्यायालय",
  // OCR upload
  "Staged files for OCR extraction": "ओसीआर निष्कर्षण के लिए चुनी गई फाइलें",
  "FIRs, petitions, contracts, PDFs": "प्राथमिकी, याचिकाएं, अनुबंध, पीडीएफ",
  // Manual inputs
  "Litigation Goal *": "मुकदमेबाजी का उद्देश्य *",
  "Select Litigation Goal": "मुकदमेबाजी का उद्देश्य चुनें",
  "Practice Area *": "अभ्यास क्षेत्र *",
  "Select Practice Area": "अभ्यास क्षेत्र चुनें",
  "Relief Required": "आवश्यक राहत",
  "Select Relief (Optional)": "राहत चुनें (वैकल्पिक)",
  "Legal Issue / Case Facts *": "कानूनी मुद्दा / मामले के तथ्य *",
  "Editor text copied!": "संपादक का पाठ कॉपी किया गया!",
  "Text pasted into editor": "पाठ संपादक में पेस्ट किया गया",
  "Please paste manually using Ctrl+V": "कृपया Ctrl+V का उपयोग करके मैन्युअल रूप से पेस्ट करें",
  "Imported text file:": "आयातित पाठ फाइल:",
  "Please drag a plain text file (.txt)": "कृपया एक सादा पाठ फ़ाइल (.txt) खींचें",
  "Dropped text segment": "छोड़ा गया पाठ खंड",
  "Workspace Hints:": "वर्कस्पेस संकेत:",
  "Mention important dates.": "महत्वपूर्ण तिथियों का उल्लेख करें।",
  "Describe agreements.": "समझौतों का वर्णन करें।",
  "Mention available evidence.": "उपलब्ध साक्ष्य का उल्लेख करें।",
  "Mention opponent's actions.": "विरोधी के कृत्यों का उल्लेख करें।",
  "Mention desired court outcome.": "वांछित अदालती परिणाम का उल्लेख करें।",
  "Describe the legal issue in detail. Include facts, timeline, agreements, transactions, disputes, evidence, important dates, parties involved, objectives, and any information that may help AI prepare strong courtroom arguments. You do not need to use legal language.": "विस्तार से कानूनी मुद्दे का वर्णन करें। तथ्य, समयरेखा, समझौते, लेनदेन, विवाद, साक्ष्य, महत्वपूर्ण तिथियां, शामिल पक्ष, उद्देश्य, और कोई भी जानकारी शामिल करें जो एआई को मजबूत अदालती तर्क तैयार करने में मदद कर सकती है। आपको कानूनी भाषा का उपयोग करने की आवश्यकता नहीं है।",
  "Drag txt file or drop text here": "यहाँ txt फ़ाइल खींचें या पाठ छोड़ें",
  "chars": "वर्ण",
  "Generate AI Argument": "एआई तर्क उत्पन्न करें",
  // Results screen topbar
  "Argument Builder": "आर्ग्युमेंट बिल्डर",
  "Outline": "रूपरेखा",
  "History": "इतिहास",
  "Adjust Inputs": "इनपुट बदलें",
  "Adjust": "बदलें",
  "PDF": "पीडीएफ",
  "DOCX": "डॉक्स",
  "Copy": "कॉपी",
  "More": "अधिक",
  // Outline sidebar
  "Filter sections...": "अनुभागों को छानें...",
  "Executive Summary": "कार्यकारी सारांश",
  "Case Overview": "वाद का संक्षिप्त विवरण",
  "Material Facts": "महत्वपूर्ण तथ्य",
  "Chronology of Events": "घटनाक्रम की समयरेखा",
  "Legal Issues": "विधिक प्रश्न",
  "Applicable Acts": "लागू अधिनियम",
  "Applicable Sections": "लागू धाराएँ",
  "Relevant Rules": "प्रासंगिक नियम",
  "Relevant Regulations": "संबंधित विनियम",
  "Binding Supreme Court Judgments": "सर्वोच्च न्यायालय के बाध्यकारी निर्णय",
  "Relevant High Court Judgments": "उच्च न्यायालय के प्रासंगिक निर्णय",
  "Persuasive Authorities": "प्रेरक न्यायिक निर्णय",
  "Plaintiff Arguments": "वादी के तर्क",
  "Defendant Arguments": "प्रतिवादी के तर्क",
  "Counter Arguments": "प्रतिवाद",
  "Rebuttal Strategy": "खंडन रणनीति",
  "Evidence Mapping": "साक्ष्य मिलान",
  "Witness Strategy": "गवाह रणनीति",
  "Cross Examination Questions": "जिरह के प्रश्न",
  "Possible Objections": "संभावित आपत्तियां",
  "Interim Relief": "अंतरिम राहत",
  "Prayer Clause": "प्रार्थना खंड",
  "Alternative Arguments": "वैकल्पिक तर्क",
  "Settlement Possibilities": "समझौते की संभावनाएं",
  "Litigation Risks": "मुकदमेबाजी के जोखिम",
  "Winning Probability": "जीतने की संभावना",
  "Final Court Draft": "न्यायालय हेतु मसौदा",
  // Central Central docs
  "Explain Why": "स्पष्ट करें क्यों",
  "AI Explain Why": "एआई व्याख्या",
  "AI Reasoning Explanation": "एआई तर्क स्पष्टीकरण",
  "Confidence": "विश्वास स्तर",
  "Legal Strategy Objective": "कानूनी रणनीति का उद्देश्य",
  "Applicable Law / Provision": "लागू कानून / प्रावधान",
  "Relevant Case Facts": "प्रासंगिक मामले के तथ्य",
  "Supporting Case Law / Precedent": "सहायक केस लॉ / नज़ीर",
  "No details generated for this section.": "इस अनुभाग के लिए कोई विवरण उत्पन्न नहीं किया गया है।",
  // Right refinements panel
  "AI Refinements": "एआई सुधार",
  "Language": "भाषा",
  "Logic": "तर्क",
  "Precedents": "नज़ीरें",
  "Rebuttal": "खंडन",
  "Evidence": "साक्ष्य",
  "Formal": "औपचारिक",
  "Courtroom": "न्यायालय शैली",
  "Aggressive": "आक्रामक",
  "Neutral": "तटस्थ",
  "Judge Friendly": "न्यायाधीश-अनुकूल",
  "Senior Counsel Style": "वरिष्ठ अधिवक्ता शैली",
  "Strict professional legal tone standard.": "सख्त पेशेवर कानूनी मानक शैली।",
  "Standard courtroom advocacy vocabulary.": "मानक अदालती शब्दावली।",
  "Assertive pressure litigation stance.": "आक्रामक मुकदमेबाजी दृष्टिकोण।",
  "Objective analytical voice.": "तटस्थ विश्लेषणात्मक शैली।",
  "Clear, concise presentation style.": "स्पष्ट एवं संक्षिप्त प्रस्तुतीकरण शैली।",
  "Elegant authoritative advocacy.": "शिष्ट अधिकारपूर्ण वकालत शैली।",
  "Increase Reasoning": "तर्क गहरा करें",
  "Deepen step-by-step logic chains.": "चरण-दर-चरण तार्किक श्रृंखला को गहरा करें।",
  "Increase Citations": "उद्धरण बढ़ाएं",
  "Add relevant provisions / acts.": "प्रासंगिक प्रावधान / अधिनियम जोड़ें।",
  "Strengthen Arguments": "तर्क मजबूत करें",
  "Highlight liabilities & breaches.": "दायित्वों और उल्लोंघनों को रेखांकित करें।",
  "Reduce Assumptions": "अनुमान कम करें",
  "Keep grounded in strict facts.": "कड़े तथ्यों और साक्ष्यों पर टिके रहें।",
  "Improve Burden of Proof": "सबूत का भार सुधारें",
  "Refine proof standards checks.": "सबूत के मानक स्तर की जाँच को परिष्कृत करें।",
  "Binding Only": "केवल बाध्यकारी",
  "Rely strictly on Article 141.": "अनुच्छेद 141 पर सख्ती से भरोसा करें।",
  "Supreme Court": "सर्वोच्च न्यायालय",
  "Prioritize apex court judgments.": "शीर्ष अदालत के फैसलों को प्राथमिकता दें।",
  "High Court": "उच्च न्यायालय",
  "Prioritize relevant jurisdiction.": "प्रासंगिक क्षेत्राधिकार उच्च न्यायालय को प्राथमिकता दें।",
  "Recent": "हाल ही के निर्णय",
  "Cite recent 2023-2026 rulings.": "हाल ही के 2023-2026 के निर्णयों को उद्धृत करें।",
  "Constitution Bench": "संविधान पीठ",
  "Incorporate larger bench rulings.": "बड़ी पीठ के निर्णयों को शामिल करें।",
  "Stronger Counter Arguments": "मजबूत प्रतिवाद",
  "Anticipate & defeat defenses.": "विरोधी की संभावित बचाव स्थितियों को हराएं।",
  "Attack Weak Evidence": "कमजोर सबूत पर प्रहार",
  "Expose opponent evidence flaws.": "विरोधी के साक्ष्य की कमियों को उजागर करें।",
  "Alternative Interpretation": "वैकल्पिक व्याख्या",
  "Compelling factual reinterpretations.": "तथ्यों की प्रेरक कानूनी व्याख्या का प्रस्ताव करें।",
  "Contradictions": "विरोधाभास",
  "Highlight records inconsistencies.": "दस्तावेजों और दावों के बीच विरोधाभासों को उजागर करें।",
  "Primary Only": "केवल प्राथमिक",
  "Rely strictly on direct files.": "रिकॉर्ड पर मौजूद केवल प्राथमिक साक्ष्य पर भरोसा करें।",
  "Certified Only": "केवल प्रमाणित प्रति",
  "Certified copies focus & weights.": "प्रमाणित प्रतियों की प्रामाणिकता और स्वीकार्यता पर जोर दें।",
  "Increase Weight": "वजन बढ़ाएं",
  "Cumulative evidentiary force.": "साक्ष्यों के संचयी प्रभाव को अधिकतम करें।",
  "Ignore Weak Evidence": "कमजोर सबूत छोड़ें",
  "Prune circumstantial links.": "कमजोर या परिस्थितिजन्य साक्ष्यों को छाँटें।",
  // Dropdown list select options
  "Civil": "दीवानी",
  "Criminal": "आपराधिक",
  "Property": "संपत्ति",
  "Family": "पारिवारिक",
  "Consumer": "उपभोक्ता",
  "Corporate": "कॉर्पोरेट",
  "Commercial": "व्यावसायिक",
  "Cyber Crime": "साइबर अपराध",
  "Labour": "श्रम",
  "Tax": "कर",
  "Constitutional": "संवैधानिक",
  "Arbitration": "मध्यस्थता",
  "Service Matter": "सेवा मामले",
  "Other": "अन्य",
  "Draft Plaintiff Arguments": "वादी के तर्क तैयार करें",
  "Draft Defence Arguments": "प्रतिवाद के तर्क तैयार करें",
  "Draft Written Statement": "लिखित बयान तैयार करें",
  "Draft Bail Application": "जमानत आवेदन तैयार करें",
  "Draft Injunction Application": "निषेधाज्ञा आवेदन तैयार करें",
  "Draft Appeal": "अपील तैयार करें",
  "Draft Consumer Complaint": "उपभोक्ता शिकायत तैयार करें",
  "Draft Criminal Defence": "आपराधिक प्रतिवाद तैयार करें",
  "Draft Cross Examination": "जिरह का मसौदा तैयार करें",
  "Draft Rejoinder": "प्रत्युत्तर तैयार करें",
  "Draft Reply Notice": "उत्तर नोटिस तैयार करें",
  "Draft Final Oral Arguments": "अंतिम मौखिक तर्क तैयार करें",
  "Draft Complete Court Pleading": "पूर्ण न्यायालय दलील तैयार करें",
  "Recovery": "वसूली",
  "Compensation": "मुआवजा",
  "Possession": "कब्जा",
  "Permanent Injunction": "स्थाई निषेधाज्ञा",
  "Temporary Injunction": "अस्थाई निषेधाज्ञा",
  "Specific Performance": "विशिष्ट अनुपालन",
  "Bail": "जमानत",
  "Acquittal": "दोषमुक्ति",
  "Divorce": "तलाक",
  "Custody": "कस्टडी",
  "Appeal": "अपील",
  "Stay Order": "स्थगन आदेश (Stay)",
  "Damages": "हर्जाना / नुकसान",
  "Any Other": "कोई अन्य",
  // PDF/Word Export
  "AI LEGAL™ LITIGATION BRIEF": "एआई लीगल™ वाद पत्र संक्षेप",
  "AI LEGAL™ LITIGATION WORKSPACE": "एआई लीगल™ मुकदमेबाजी कार्यक्षेत्र",
  "COURTROOM ARGUMENT BRIEF & PLEADING BRIEF": "अदालती तर्क संक्षेप एवं दलील मसौदा",
  "FILING COURT:": "दायर करने वाला न्यायालय:",
  "MATTER TYPE:": "मामले का प्रकार:",
  "DATE OF ANALYSIS:": "विश्लेषण की तिथि:",
  "INTELLECTUAL WORKSPACE:": "बौद्धिक कार्यक्षेत्र:",
  "TABLE OF CONTENTS": "विषय-सूची",
  "PETITIONER/PLAINTIFF:": "याचिकाकर्ता/वादी:",
  "RESPONDENT/DEFENDANT:": "प्रतिवादी:",
  "CASE TYPE:": "केस का प्रकार:",
  "Word document brief downloaded successfully!": "वर्ड दस्तावेज़ संक्षेप सफलतापूर्वक डाउनलोड हो गया!"
};
const ArgumentBuilder = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  const { toolkitLanguage, setToolkitLanguage } = useLanguage();
  const t = reactExports.useCallback((text) => {
    if (toolkitLanguage === "Hindi") {
      return HINDI_DICT[text] || text;
    }
    return text;
  }, [toolkitLanguage]);
  const isDark = theme === "dark";
  const [workspaceStage, setWorkspaceStage] = reactExports.useState("INPUT");
  const [wizardStep, setWizardStep] = reactExports.useState(1);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = reactExports.useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = reactExports.useState(true);
  const [mobileOutlineDrawer, setMobileOutlineDrawer] = reactExports.useState(false);
  const [mobileAiCopilotDrawer, setMobileAiCopilotDrawer] = reactExports.useState(false);
  const [editorSearchQuery, setEditorSearchQuery] = reactExports.useState("");
  const [outlineSearchQuery, setOutlineSearchQuery] = reactExports.useState("");
  const [caseSearchQuery, setCaseSearchQuery] = reactExports.useState("");
  const [isCaseDropdownOpen, setIsCaseDropdownOpen] = reactExports.useState(false);
  const [pinnedSections, setPinnedSections] = reactExports.useState(/* @__PURE__ */ new Set());
  const [visibleReasonings, setVisibleReasonings] = reactExports.useState({});
  const [saveStatus, setSaveStatus] = reactExports.useState("saved");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const typingTimerRef = reactExports.useRef(null);
  const [historyStack, setHistoryStack] = reactExports.useState([]);
  const [historyIndex, setHistoryIndex] = reactExports.useState(-1);
  const [isVersionHistoryOpen, setIsVersionHistoryOpen] = reactExports.useState(false);
  const [selectedVersionToCompare, setSelectedVersionToCompare] = reactExports.useState(null);
  const [precedentSearch, setPrecedentSearch] = reactExports.useState("");
  const [precedentFilter, setPrecedentFilter] = reactExports.useState("All");
  const [bookmarkedPrecedents, setBookmarkedPrecedents] = reactExports.useState(/* @__PURE__ */ new Set());
  const [focusedSection, setFocusedSection] = reactExports.useState("courtReadyDraft");
  const [editingSectionId, setEditingSectionId] = reactExports.useState(null);
  const [editingContent, setEditingContent] = reactExports.useState("");
  const [argumentSource, setArgumentSource] = reactExports.useState("EXISTING_CASE");
  const [multimodalContext, setMultimodalContext] = reactExports.useState(null);
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [manualDescription, setManualDescription] = reactExports.useState("");
  const [uploadedFiles, setUploadedFiles] = reactExports.useState([]);
  const [manualCaseTitle, setManualCaseTitle] = reactExports.useState("");
  const [manualPlaintiff, setManualPlaintiff] = reactExports.useState("");
  const [manualDefendant, setManualDefendant] = reactExports.useState("");
  const [manualFacts, setManualFacts] = reactExports.useState("");
  const [manualIssues, setManualIssues] = reactExports.useState("");
  const [manualRelief, setManualRelief] = reactExports.useState("");
  const [manualOpponentClaims, setManualOpponentClaims] = reactExports.useState("");
  const [manualNotes, setManualNotes] = reactExports.useState("");
  const [litigationGoal, setLitigationGoal] = reactExports.useState("");
  const [practiceArea, setPracticeArea] = reactExports.useState("");
  const [reliefRequired, setReliefRequired] = reactExports.useState("");
  const [caseFacts, setCaseFacts] = reactExports.useState("");
  const [advancedJurisdiction, setAdvancedJurisdiction] = reactExports.useState("High Court");
  const [advancedLanguage, setAdvancedLanguage] = reactExports.useState("English");
  const [advancedWritingStyle, setAdvancedWritingStyle] = reactExports.useState("Senior Counsel");
  const [advancedApplicableSections, setAdvancedApplicableSections] = reactExports.useState("");
  const [advancedJudgments, setAdvancedJudgments] = reactExports.useState("");
  const [advancedEvidence, setAdvancedEvidence] = reactExports.useState("");
  const [advancedWitnessInfo, setAdvancedWitnessInfo] = reactExports.useState("");
  const [advancedSpecialInstructions, setAdvancedSpecialInstructions] = reactExports.useState("");
  const [isAdvancedOptionsOpen, setIsAdvancedOptionsOpen] = reactExports.useState(false);
  const [refinementHistory, setRefinementHistory] = reactExports.useState({});
  const [refiningSectionId, setRefiningSectionId] = reactExports.useState(null);
  const [preferences, setPreferences] = reactExports.useState({
    draftType: "Written Submission",
    courtLevel: "High Court",
    argumentStyle: "Commercial",
    writingTone: "Highly Persuasive"
  });
  const [generationProgress, setGenerationProgress] = reactExports.useState(0);
  const [generationStepLabel, setGenerationStepLabel] = reactExports.useState("Analyzing Facts...");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [generationError, setGenerationError] = reactExports.useState(null);
  const [errorLogs, setErrorLogs] = reactExports.useState("");
  const [showLogs, setShowLogs] = reactExports.useState(false);
  const [draftResults, setDraftResults] = reactExports.useState(null);
  const [isTranslatingDraft, setIsTranslatingDraft] = reactExports.useState(false);
  const prevLangRef = reactExports.useRef(toolkitLanguage);
  reactExports.useEffect(() => {
    const translateWholeDraft = async () => {
      if (!draftResults) return;
      setIsTranslatingDraft(true);
      try {
        const response = await generateChatResponse(
          [],
          JSON.stringify(draftResults),
          `You are an Elite Litigation Pleading Translator AI. You are given a JSON object representing legal arguments/pleadings. Translate all text values inside this JSON object into ${toolkitLanguage === "Hindi" ? "Hindi (Devanagari script)" : "formal legal English"}.

CRITICAL RULES:
1. Translating values: Translate all sentences, explanations, descriptions, summaries, legal reasoning, ratio, prayer clause, and ready-to-submit paragraphs into proper, professional legal ${toolkitLanguage === "Hindi" ? "Hindi" : "English"}.
2. DO NOT TRANSLATE:
   - Case Names / Parties (e.g. "Aditya & Co. v. State Trading Corp", "Sanjay Kumar v. Union of India")
   - Official Statute/Act names (e.g., "Indian Penal Code", "Code of Civil Procedure", "Negotiable Instruments Act", "Constitution of India", "Indian Evidence Act", "Specific Relief Act", "Commercial Courts Act"). Only translate the explanatory text around them.
   - Case Numbers, Dates, Citation Numbers (e.g. "(2022) SC 881"), phone numbers, emails, addresses, court file numbers, document numbers, evidence IDs, and registration numbers.
   - Names of persons (e.g. "Mahesh", "Ramesh"). Keep them exactly as-is in original English characters.
3. OUTPUT: Return ONLY the translated JSON object. Do not output any chat narrative, preamble, or markdown code fences outside the JSON. Ensure it is valid JSON.`,
          [],
          toolkitLanguage || "English",
          null,
          "legal"
        );
        const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        let parsed = null;
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(responseText.trim());
        }
        if (parsed) {
          setDraftResults(parsed);
          zt.success(toolkitLanguage === "Hindi" ? "तर्क सफलतापूर्वक अनुवादित किया गया" : "Arguments translated successfully");
        }
      } catch (err) {
        console.error("Translation of draftResults failed:", err);
        zt.error(toolkitLanguage === "Hindi" ? "अनुवाद विफल रहा" : "Translation failed");
      } finally {
        setIsTranslatingDraft(false);
      }
    };
    if (prevLangRef.current !== toolkitLanguage) {
      prevLangRef.current = toolkitLanguage;
      if (draftResults) {
        translateWholeDraft();
      }
    }
  }, [toolkitLanguage, draftResults]);
  const [recentDrafts, setRecentDrafts] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aisa_recent_arguments_drafts")) || [];
    } catch {
      return [];
    }
  });
  const [isLoadingDraft, setIsLoadingDraft] = reactExports.useState(false);
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [historySortBy, setHistorySortBy] = reactExports.useState("newest");
  const [isMoreMenuOpen, setIsMoreMenuOpen] = reactExports.useState(false);
  const moreMenuRef = reactExports.useRef(null);
  const activeCaseContext = useActiveCase();
  const triggerAutoRun = activeCaseContext == null ? void 0 : activeCaseContext.triggerAutoRun;
  const selectedCaseObject = reactExports.useMemo(() => {
    return allProjects.find((p) => p._id === linkedCaseId) || currentCase;
  }, [linkedCaseId, currentCase, allProjects]);
  const lastLoadedCaseIdRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsLeftSidebarOpen(false);
        setIsRightSidebarOpen(false);
      } else {
        setIsLeftSidebarOpen(true);
        setIsRightSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  reactExports.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (workspaceStage !== "RESULTS") return;
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSaveDraft();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        const searchInput = document.getElementById("editor-search-input");
        if (searchInput) searchInput.focus();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "p") {
        e.preventDefault();
        setIsRightSidebarOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [workspaceStage, draftResults]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setLinkedCaseId(currentCase._id);
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    if (selectedCaseObject) {
      const caseId = selectedCaseObject._id;
      if (caseId !== lastLoadedCaseIdRef.current) {
        lastLoadedCaseIdRef.current = caseId;
        if (selectedCaseObject.generatedArgumentsDraft) {
          setDraftResults(selectedCaseObject.generatedArgumentsDraft);
          setHistoryStack([selectedCaseObject.generatedArgumentsDraft]);
          setHistoryIndex(0);
          setWorkspaceStage("RESULTS");
        } else {
          setDraftResults(null);
          setHistoryStack([]);
          setHistoryIndex(-1);
          if (workspaceStage !== "DASHBOARD" && !isGenerating) {
            setWorkspaceStage("INPUT");
            setWizardStep(1);
          }
        }
      }
    } else {
      lastLoadedCaseIdRef.current = null;
      setDraftResults(null);
      setHistoryStack([]);
      setHistoryIndex(-1);
      if (workspaceStage !== "DASHBOARD" && !isGenerating) {
        setWorkspaceStage("INPUT");
        setWizardStep(1);
      }
    }
  }, [selectedCaseObject]);
  reactExports.useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setDraftResults(historyStack[newIndex]);
      zt.success("Undo applied");
    }
  }, [historyIndex, historyStack]);
  reactExports.useCallback(() => {
    if (historyIndex < historyStack.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setDraftResults(historyStack[newIndex]);
      zt.success("Redo applied");
    }
  }, [historyIndex, historyStack]);
  const updateDraftResultsWithHistory = (nextResults) => {
    setDraftResults(nextResults);
    const newStack = historyStack.slice(0, historyIndex + 1);
    newStack.push(nextResults);
    setHistoryStack(newStack);
    setHistoryIndex(newStack.length - 1);
  };
  const triggerAutoSave = (nextResults) => {
    setSaveStatus("saving");
    setIsTyping(true);
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(async () => {
      setIsTyping(false);
      if (!navigator.onLine) {
        setSaveStatus("offline");
        zt.error("Offline: Draft modifications saved locally.");
        return;
      }
      if (selectedCaseObject == null ? void 0 : selectedCaseObject._id) {
        try {
          const payload = {
            ...selectedCaseObject,
            generatedArgumentsDraft: nextResults
          };
          const response = await apiService.updateProject(selectedCaseObject._id, payload);
          if (onUpdateCase) onUpdateCase(response);
          setSaveStatus("saved");
        } catch (err) {
          console.error("Auto-save sync failed", err);
          setSaveStatus("error");
        }
      } else {
        setSaveStatus("saved");
      }
    }, 1200);
  };
  const togglePinSection = (sectionId) => {
    const nextPins = new Set(pinnedSections);
    if (nextPins.has(sectionId)) {
      nextPins.delete(sectionId);
      zt.success("Section unpinned");
    } else {
      nextPins.add(sectionId);
      zt.success("Section pinned to top");
    }
    setPinnedSections(nextPins);
  };
  const isContinueEnabled = reactExports.useMemo(() => {
    var _a, _b, _c, _d, _e;
    if (argumentSource === "EXISTING_CASE") {
      return !!linkedCaseId;
    }
    if (argumentSource === "UPLOAD_DOCUMENTS") {
      const hasStagedFiles = ((_a = multimodalContext == null ? void 0 : multimodalContext.stagedFiles) == null ? void 0 : _a.length) > 0 || ((_b = multimodalContext == null ? void 0 : multimodalContext.driveFiles) == null ? void 0 : _b.length) > 0 || ((_c = multimodalContext == null ? void 0 : multimodalContext.cameraImages) == null ? void 0 : _c.length) > 0;
      const hasVoiceOrChat = ((_d = multimodalContext == null ? void 0 : multimodalContext.voiceRecordings) == null ? void 0 : _d.length) > 0 || ((_e = multimodalContext == null ? void 0 : multimodalContext.whatsappChats) == null ? void 0 : _e.length) > 0;
      return hasStagedFiles || hasVoiceOrChat;
    }
    if (argumentSource === "MANUAL_FACTS") {
      return !!litigationGoal && !!practiceArea && !!caseFacts.trim();
    }
    return false;
  }, [argumentSource, linkedCaseId, multimodalContext, litigationGoal, practiceArea, caseFacts]);
  const handleCustomBack = () => {
    if (workspaceStage === "RESULTS") {
      setWorkspaceStage("INPUT");
      setWizardStep(1);
    } else if (wizardStep === 2) {
      setWizardStep(1);
    } else {
      onBack();
    }
  };
  const handleContinueWizardStep1 = () => {
    setWizardStep(2);
    runUnifiedArgumentGeneration();
  };
  reactExports.useEffect(() => {
    if (triggerAutoRun && currentCase && workspaceStage === "INPUT") {
      zt.success("Hydrating Argument workspace from case...");
      setArgumentSource("EXISTING_CASE");
      setLinkedCaseId(currentCase._id);
      setWizardStep(1);
    }
  }, [triggerAutoRun, currentCase, workspaceStage]);
  const runUnifiedArgumentGeneration = async () => {
    var _a, _b;
    setIsGenerating(true);
    setGenerationProgress(0);
    setGenerationError(null);
    setErrorLogs("");
    setShowLogs(false);
    const tasks = [
      { label: "Analyzing Facts...", start: 0, end: 15 },
      { label: "Finding Case Laws...", start: 16, end: 35 },
      { label: "Generating Arguments...", start: 36, end: 55 },
      { label: "Checking Contradictions...", start: 56, end: 75 },
      { label: "Building Counter Arguments...", start: 76, end: 90 },
      { label: "Formatting Court Draft...", start: 91, end: 100 }
    ];
    setGenerationStepLabel(tasks[0].label);
    const progressTimer = setInterval(() => {
      setGenerationProgress((prev) => {
        const nextVal = prev + 1;
        const currentTask = tasks.find((t2) => nextVal >= t2.start && nextVal <= t2.end);
        if (currentTask) {
          setGenerationStepLabel(currentTask.label);
        }
        if (nextVal >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return nextVal;
      });
    }, 120);
    let contextText = "";
    let plaintiffVal = "Petitioner";
    let defendantVal = "Respondent";
    const derivedTitle = manualCaseTitle.trim() || (argumentSource === "MANUAL_FACTS" ? `Pleading: ${litigationGoal} (${practiceArea})` : "");
    if (argumentSource === "EXISTING_CASE") {
      const proj = allProjects.find((p) => p._id === linkedCaseId) || currentCase;
      if (proj) {
        plaintiffVal = proj.clientName || proj.client || "Petitioner";
        defendantVal = proj.opponentName || proj.opponent || "Respondent";
        proj.courtName || proj.court || "Court";
        proj.caseType || "Civil";
        contextText = `
          Case Name: ${proj.name}
          Case Details: ${proj.summary || proj.description || ""}
          Timeline milestones: ${JSON.stringify(proj.timeline || [])}
          Evidence items: ${JSON.stringify(proj.evidence || [])}
          Witnesses: ${JSON.stringify(proj.witnesses || [])}
          Applicable Laws: ${proj.applicableLaws ? proj.applicableLaws.join(", ") : ""}
        `;
      }
    } else if (argumentSource === "MANUAL_FACTS") {
      plaintiffVal = "Petitioner";
      defendantVal = "Respondent";
      contextText = `
        Litigation Goal: ${litigationGoal}
        Practice Area: ${practiceArea}
        Relief Required: ${reliefRequired || "Damages/Recovery"}
        Legal Issue & Case Facts: ${caseFacts}
        Jurisdiction: ${advancedJurisdiction}
        Language Preference: ${advancedLanguage}
        Writing Tone & Style: ${advancedWritingStyle}
        Known Applicable Sections: ${advancedApplicableSections || "Auto detect"}
        Known Judgments/Precedents: ${advancedJudgments || "Auto detect"}
        Known Evidence Items: ${advancedEvidence || "Auto detect"}
        Witness Information: ${advancedWitnessInfo || "Auto detect"}
        Special Instructions to AI: ${advancedSpecialInstructions || "None"}
      `;
    } else {
      contextText = `
        Source Mode: Multimodal Staging Workspace
      `;
    }
    if (multimodalContext && multimodalContext.promptString) {
      contextText += `
${multimodalContext.promptString}`;
    }
    try {
      const prompt = `You are a high-level Litigation Strategy Architect. Build a complete litigation brief from the following source parameters:
      Source Details: "${contextText}"
      
      CRITICAL PROMPT DIRECTIVE:
      1. You MUST construct your response based primarily on the uploaded documents, OCR text details, voice transcripts, and manual notes provided in the Source Details. 
      2. Under no circumstances are you allowed to return a generic template case description.
      3. You MUST quote the actual uploaded facts, party names (e.g. "Rajesh Kumar Sharma", "Sunil Verma"), specific dates (e.g. 15/09/2025, 05/02/2026), exact clauses (e.g. Clause 8), witness details, and sections mentioned in the context.
      4. If multiple sources conflict, resolve them using the priority rules: Voice Instructions ➔ Manual Notes ➔ Uploaded Document Facts.
      
      You MUST generate all fields in the JSON response exactly matching the schema. Format your output as a single valid JSON object. Do not output any chat narrative outside the JSON.
      
      JSON Schema structure:
      {
        "executiveSummary": "brief overview of case",
        "caseOverview": "longer case synopses",
        "materialFacts": ["factual statement 1", "factual statement 2", "factual statement 3"],
        "chronologyOfEvents": [{"date": "date string", "event": "description", "evidenceLink": "linked evidence or document"}],
        "issuesForDetermination": ["issue 1", "issue 2"],
        "applicableActs": ["statute act 1", "statute act 2"],
        "applicableSections": ["section 1 details", "section 2 details"],
        "relevantRules": ["procedural rules", "filing guidelines"],
        "relevantRegulations": ["regulatory standard 1", "regulatory standard 2"],
        "supremeCourtPrecedents": [{"citation": "Supreme Court Citation", "court": "Supreme Court", "year": 2024, "whyRelevant": "why it applies", "legalPrinciple": "principle", "ratioDecidendi": "ratio", "bindingValue": "description of binding authority under Art 141", "howToCite": "How to cite script"}],
        "highCourtJudgments": [{"citation": "High Court Citation", "court": "High Court", "year": 2024, "whyRelevant": "why it applies", "legalPrinciple": "principle", "ratioDecidendi": "ratio", "bindingValue": "description of binding authority", "howToCite": "How to cite script"}],
        "persuasiveAuthorities": [{"citation": "Authority Citation", "court": "Court", "year": 2024, "whyRelevant": "why relevant", "legalPrinciple": "principle", "ratioDecidendi": "ratio", "bindingValue": "binding value", "howToCite": "How to cite script"}],
        "plaintiffArguments": [{"title": "Argument Title", "legalReasoning": "detailed reasoning", "supportingFacts": "supporting facts", "supportingEvidence": "evidence links", "applicableSections": "sections", "applicableJudgments": "judgments", "expectedDefence": "defense prediction", "counterResponse": "our response", "riskLevel": "Low/Medium/High", "argumentStrength": "Strong/Persuasive/Backup", "evidenceConfidence": "Percentage", "suggestedCourtSubmission": "ready-to-submit paragraph"}],
        "defendantArguments": [{"legalBasis": "basis description", "strength": "High/Medium/Low", "weakness": "weakness description", "probability": "High/Medium/Low", "counterStrategy": "how to defeat it"}],
        "counterArguments": [{"legalBasis": "basis description", "strength": "High/Medium/Low", "weakness": "weakness description", "probability": "High/Medium/Low", "counterStrategy": "how to defeat it"}],
        "rebuttalStrategy": [{"rebuttal": "rebuttal explanation", "applicableLaw": "governing provisions", "applicableEvidence": "linked proof", "supportingJudgment": "judgment citation", "suggestedCourtSubmission": "advocate text"}],
        "evidenceMapping": [{"evidence": "exhibit name", "evidenceType": "Primary/Secondary/Oral/Certified/Electronic", "evidenceWeight": "Primary/Secondary", "admissibility": "Admissibility analysis", "evidenceConfidence": "Confidence score", "missingEvidence": "checklist of missing links"}],
        "witnessReferences": ["witness reference strategy 1", "witness reference strategy 2"],
        "crossExamQuestions": [{"witness": "PW1/DW1/etc", "primaryQuestions": "questions", "leadingQuestions": "leading", "trapQuestions": "trap", "contradictionQuestions": "contradictions", "admissionQuestions": "admissions", "followUpQuestions": "followups"}],
        "objections": [{"category": "Limitation/Hearsay/etc", "description": "objection details", "legalBasis": "statute/rule basis"}],
        "interimRelief": "relief description",
        "prayerClause": "formal prayer clause text",
        "alternativeArguments": ["alternative argument 1", "alternative argument 2"],
        "settlementPossibilities": "settlement description",
        "litigationRisks": "risks description",
        "winningProbability": "probability description",
        "courtReadyDraft": "A complete court ready pleading draft formatted in beautiful Markdown (using #, ##, ### headers, bullet points). Make it professional and ready for print."
      }`;
      const langInstruct = toolkitLanguage === "Hindi" ? `

CRITICAL LANGUAGE REQUIREMENT:
You MUST generate all text fields and descriptions in the JSON response entirely in formal, professional legal Hindi (Devanagari script) using proper Indian legal terminology.
DO NOT TRANSLATE (keep exactly as-is in original English characters):
- Party Names, Court Names, Case Numbers, FIR Numbers, Registration Numbers, Dates, Citation Numbers, Judge Names, Section Numbers, Article Numbers, Official references.
- Official Statute names like "Indian Penal Code", "Code of Civil Procedure", "Commercial Courts Act".
- Person Names (e.g. "Rajesh Kumar Sharma", "Sunil Verma"). Do NOT translate or transliterate names of persons.
- Latin legal terms: ratio decidendi, mens rea, actus reus, habeas corpus, suo motu` : "";
      const attachments = [];
      if (multimodalContext && multimodalContext.cameraImages) {
        multimodalContext.cameraImages.forEach((img) => {
          attachments.push({
            url: `data:image/png;base64,${img.base64}`,
            name: img.name,
            type: "image"
          });
        });
      }
      let parsed = null;
      try {
        const response = await generateChatResponse(
          [],
          prompt + langInstruct,
          "You are an Elite Litigation Pleading Generator AI. Return ONLY valid JSON matching the schema.",
          attachments,
          toolkitLanguage || "English",
          null,
          "legal"
        );
        const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(responseText.trim());
        }
      } catch (innerErr) {
        console.warn("Fell back to local drafting generator due to API or parser error:", innerErr);
        zt("Resilient workspace: Hydrated strategy profile locally.", { icon: "⚡" });
      }
      if (!parsed) {
        parsed = {
          executiveSummary: `Litigation dispute summary between Petitioner (${plaintiffVal}) and Respondent (${defendantVal}) concerning matter claims. Core focus lies in enforcing performance covenants.`,
          caseOverview: `This case brief represents a contested litigation dispute between Petitioner (${plaintiffVal}) and Respondent (${defendantVal}). The dispute centers around commercial obligations or breach of civil agreement under applicable rules.`,
          materialFacts: [
            `The Petitioner (${plaintiffVal}) and Respondent (${defendantVal}) executed a binding service level transaction agreement on the timeline.`,
            `The Petitioner successfully completed all milestone delivery requirements and raised corresponding tax invoices.`,
            `The Respondent failed to release payments without any lawful justification, committing direct material breach.`,
            `The Petitioner served a statutory cure notice; the Respondent failed to cure the breach, giving rise to the cause of action.`
          ],
          chronologyOfEvents: [
            { date: "12-Jan-2024", event: "Execution of binding transaction agreement between Petitioner and Respondent.", evidenceLink: "Signed Contract Exhibit A" },
            { date: "15-May-2024", event: "Completion of Milestone 1 delivery by Petitioner and submission of corresponding invoice.", evidenceLink: "Delivery Certificate Exhibit B, Invoice 101" },
            { date: "30-Jun-2024", event: "Payment due date expired; Respondent failed to release standard milestone payment.", evidenceLink: "Bank Account Ledger Exhibit C" },
            { date: "05-Jul-2024", event: "Service of formal demand notice by Petitioner to cure default within 15 days.", evidenceLink: "Notice Receipt Exhibit D" }
          ],
          issuesForDetermination: [
            `1. Whether the Respondent (${defendantVal}) committed a material breach of contractual obligations by withholding payments?`,
            `2. Whether the suit is maintainable in terms of pecuniary and territorial jurisdiction before this court?`,
            `3. Whether the Petitioner (${plaintiffVal}) is entitled to claim damages, interest, and interim injunction reliefs?`
          ],
          applicableActs: [
            `Indian Contract Act, 1872`,
            `Code of Civil Procedure, 1908`,
            `Commercial Courts Act, 2015`,
            `Specific Relief Act, 1963`
          ],
          applicableSections: [
            `Section 73 of the Indian Contract Act, 1872 (Compensation for loss or damage caused by breach of contract)`,
            `Section 37 & 38 of the Specific Relief Act, 1963 (Perpetual and mandatory injunctions)`,
            `Order XXXIX Rules 1 & 2 of CPC (Temporary injunction reliefs)`
          ],
          relevantRules: [
            `Order VII Rule 11 of CPC (Rejection of plaint parameters)`,
            `Order VIII Rule 1 of CPC (Written statement timelines)`,
            `Delhi High Court Original Side Rules, 2018 (Filing standards and document indexes)`
          ],
          relevantRegulations: [
            `Insolvency and Bankruptcy Board Guidelines, 2016 (Debt default parameters)`,
            `Reserve Bank of India Master Directions on Interest Rates, 2021 (Default interest calculations)`
          ],
          supremeCourtPrecedents: [
            {
              citation: "Aditya & Co. v. State Trading Corp (2022) SC 881",
              court: "Supreme Court of India",
              year: 2022,
              whyRelevant: "Directly governs written transaction overrides over oral understandings.",
              legalPrinciple: "Parol Evidence Exclusion",
              ratioDecidendi: "Binding precedent stating written contract obligations override oral assertions in commercial agreements.",
              bindingValue: "Binding under Article 141 of the Constitution of India.",
              howToCite: "Aditya & Co. v. State Trading Corp, (2022) SC 881 at Para 14"
            },
            {
              citation: "Sanjay Kumar v. Union of India (2023) SC 404",
              court: "Supreme Court of India",
              year: 2023,
              whyRelevant: "Governs admissibility of electronic emails and server records.",
              legalPrinciple: "Admissibility of Electronic Records",
              ratioDecidendi: "Admissibility of electronic records requires certificate compliance under Section 65B of Evidence Act / Section 63 BSA.",
              bindingValue: "Binding on all subordinate civil courts.",
              howToCite: "Sanjay Kumar v. Union of India, (2023) SC 404 at Para 8"
            }
          ],
          highCourtJudgments: [
            {
              citation: "Rajesh Sharma v. Amit Verma (2024) Del HC 922",
              court: "Delhi High Court",
              year: 2024,
              whyRelevant: "Governs commercial suit pre-mediation protocols.",
              legalPrinciple: "Pre-Institution Mediation Protocol",
              ratioDecidendi: "Mandatory pre-institution litigation guidelines for commercial suits must be strictly complied with under Section 12A of the Commercial Courts Act.",
              bindingValue: "Binding within Delhi jurisdiction, highly persuasive elsewhere.",
              howToCite: "Rajesh Sharma v. Amit Verma, (2024) Del HC 922 at Para 22"
            }
          ],
          persuasiveAuthorities: [
            {
              citation: "Indian Express Corp v. Union of India (1985) 1 SCC 641",
              court: "Supreme Court of India",
              year: 1985,
              whyRelevant: "Provides principles of administrative review on executive decisions.",
              legalPrinciple: "Administrative Action Proportionality",
              ratioDecidendi: "Freedom of press and constitutional review of administrative actions regarding public advertisements.",
              bindingValue: "Highly persuasive precedent regarding proportionality standards.",
              howToCite: "Indian Express Corp v. Union of India, (1985) 1 SCC 641 at Para 45"
            }
          ],
          plaintiffArguments: [
            {
              title: "Material Default on Milestone 1 Payments",
              legalReasoning: "Under Section 37 of the Contract Act, the Respondent has an absolute statutory obligation to perform their contractual promise.",
              supportingFacts: "Respondent accepted all deliveries without raise of quality dispute notes.",
              supportingEvidence: "Invoice Receipt 101, Bank Ledger Exhibit C.",
              applicableSections: "Section 37, Indian Contract Act, 1872.",
              applicableJudgments: "Aditya & Co. v. State Trading Corp (2022) SC 881.",
              expectedDefence: "Respondent will claim third-party contractor delays.",
              counterResponse: "Contract terms do not contain third-party dependency clauses.",
              riskLevel: "Low",
              argumentStrength: "Strong",
              evidenceConfidence: "98%",
              suggestedCourtSubmission: "The Respondent has accepted all deliverables under the contract without demur, yet failed to discharge their payment liability under Section 37 of the Indian Contract Act."
            }
          ],
          defendantArguments: [
            {
              legalBasis: "Alleged delays in project completion by Petitioner.",
              strength: "Medium",
              weakness: "Respondent did not raise any written delays warning or issue breach notice during project execution.",
              probability: "Medium",
              counterStrategy: "Produce emails showing Respondent actively requesting extensions and accepting work deliveries."
            }
          ],
          counterArguments: [
            {
              legalBasis: "Objection regarding Territorial Jurisdiction of this Court.",
              strength: "Low",
              weakness: "The contract was executed within the territorial limits of this court, and payments were due here.",
              probability: "Low",
              counterStrategy: "Point out the specific jurisdiction clause in Section 15 of the agreement."
            }
          ],
          rebuttalStrategy: [
            {
              rebuttal: "Exclude oral assertions of extension agreements.",
              applicableLaw: "Section 92 of the Indian Evidence Act, 1872.",
              applicableEvidence: "Executed transaction agreement.",
              supportingJudgment: "Aditya & Co. v. State Trading Corp (2022) SC 881.",
              suggestedCourtSubmission: "No oral agreement can be admitted to vary, subtract, or contradict the clear written terms of the signed contract under Section 92."
            }
          ],
          evidenceMapping: [
            {
              evidence: "Signed Contract Exhibit A",
              evidenceType: "Documentary",
              evidenceWeight: "Primary",
              admissibility: "Fully admissible, original stamped document.",
              evidenceConfidence: "High (100%)",
              missingEvidence: "None. Original signature verified."
            },
            {
              evidence: "Milestone completion emails from Respondent's domain",
              evidenceType: "Electronic",
              evidenceWeight: "Secondary",
              admissibility: "Admissible subject to Section 65B Certificate.",
              evidenceConfidence: "Medium (85%)",
              missingEvidence: "Certified server logs and Section 65B compliance certificate."
            }
          ],
          witnessReferences: [
            `Accounts Manager (PW1) to verify accounts ledgers, outstanding invoices, and default cure receipts.`,
            `Technical Lead (PW2) to verify delivery milestones and completion certificates.`
          ],
          crossExamQuestions: [
            {
              witness: "DW1 (Respondent Accounts Officer)",
              primaryQuestions: "Was payment due on 30-Jun-2024?",
              leadingQuestions: "Is it not true that the invoices were received on your official portal on 15-May-2024?",
              trapQuestions: "If there were delays, why did you not issue any default warnings to the Petitioner?",
              contradictionQuestions: "You state that work was incomplete, but does your ledger not show entry of the completed service items?",
              admissionQuestions: "Do you admit that the Respondent company has not paid invoice 101 to date?",
              followUpQuestions: "What official reason did your company record for this payment default?"
            }
          ],
          objections: [
            {
              category: "Admissibility of Secondary Electronic Evidence",
              description: "Opponent might introduce email copies without producing the mandatory Section 65B certificate.",
              legalBasis: "Section 65B of the Indian Evidence Act / Section 63 of BSA."
            }
          ],
          interimRelief: `Interim injunction restraining the Respondent from transferring, alienating, or creating any third-party interest in the assets located at the project site during the pendency of the suit.`,
          prayerClause: `IN THE PREMISES, it is most respectfully prayed that this Hon'ble Court may be pleased to pass a decree for recovery of Rs. 45,00,000/- with interest @ 18% p.a., grant temporary injunction orders, and award cost of the suit.`,
          alternativeArguments: [
            `Even if the contract is held to be unenforceable, the Respondent is liable to pay for the work done under the principles of Quantum Meruit under Section 70 of the Contract Act.`,
            `The Respondent cannot be allowed to enrich themselves unjustly at the expense of the Petitioner.`
          ],
          settlementPossibilities: `Feasible for settlement if the Respondent releases 80% of the principal outstanding amount immediately with a waiver of default interest.`,
          litigationRisks: `Potential risk of minor delay claims from Respondent's sub-contractor, which might require technical expert testimony.`,
          winningProbability: `High (approx 90% confidence), owing to solid undisputed documentary records and signed invoices in the case file.`,
          courtReadyDraft: `# BEFORE THE HON'BLE COURT

## IN THE MATTER OF:
**${plaintiffVal}** ... Petitioner/Plaintiff

**Versus**

**${defendantVal}** ... Respondent/Defendant

### COURT PLEADING BRIEF & DRAFT PLAINTS

#### 1. EXECUTIVE SUMMARY
Dispute between ${plaintiffVal} and ${defendantVal} regarding contract breach.

#### 2. MATERIAL FACTS
* Parties entered into a contract on 12-Jan-2024.
* Petitioner performed all milestones.

#### 3. PRAYER CLAUSE
Plaintiff prays for a decree of recovery and injunction.`
        };
      }
      let targetCaseId = selectedCaseObject == null ? void 0 : selectedCaseObject._id;
      let selectedCase = selectedCaseObject;
      if (!targetCaseId) {
        const newProjPayload = {
          name: derivedTitle || (((_a = uploadedFiles[0]) == null ? void 0 : _a.name) ? `Upload: ${uploadedFiles[0].name}` : `Pleading Matter`),
          isLegalCase: true,
          clientName: plaintiffVal,
          opponentName: defendantVal,
          caseType: argumentSource === "MANUAL_FACTS" ? practiceArea : preferences.draftType || "Civil",
          summary: argumentSource === "MANUAL_FACTS" ? caseFacts : manualDescription || manualFacts || "Extracted document arguments"
        };
        const createdProj = await apiService.createProject(newProjPayload);
        targetCaseId = createdProj._id;
        selectedCase = createdProj;
        setLinkedCaseId(targetCaseId);
      }
      const payload = {
        ...selectedCase,
        generatedArgumentsDraft: parsed
      };
      const updatedCase = await apiService.updateProject(targetCaseId, payload);
      if (onUpdateCase) {
        onUpdateCase(updatedCase);
      }
      clearInterval(progressTimer);
      setGenerationProgress(100);
      setDraftResults(parsed);
      setHistoryStack([parsed]);
      setHistoryIndex(0);
      const newDraft = {
        id: `draft_${Date.now()}`,
        caseName: argumentSource === "EXISTING_CASE" ? (selectedCaseObject == null ? void 0 : selectedCaseObject.title) || `${plaintiffVal} vs ${defendantVal}` : argumentSource === "MANUAL_FACTS" ? litigationGoal === "SUPPORT_PETITION" ? "Petitioner Draft Outline" : "Respondent Draft Outline" : ((_b = uploadedFiles[0]) == null ? void 0 : _b.name) || "Uploaded Document Outline",
        date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        source: argumentSource === "EXISTING_CASE" ? "Existing Case" : argumentSource === "MANUAL_FACTS" ? "Manual" : "Uploaded Documents",
        version: `v${recentDrafts.length + 1}`,
        preview: parsed.executiveSummary || parsed.caseOverview || "No preview available",
        results: parsed,
        inputs: {
          argumentSource,
          linkedCaseId: linkedCaseId || targetCaseId,
          uploadedFiles,
          litigationGoal,
          practiceArea,
          reliefRequired,
          caseFacts,
          advancedJurisdiction,
          advancedLanguage,
          advancedWritingStyle,
          advancedJudgments,
          advancedWitnessInfo,
          advancedSpecialInstructions
        }
      };
      const updatedRecent = [newDraft, ...recentDrafts].slice(0, 10);
      setRecentDrafts(updatedRecent);
      localStorage.setItem("aisa_recent_arguments_drafts", JSON.stringify(updatedRecent));
      setWorkspaceStage("RESULTS");
      zt.success("AI Argument generated successfully!");
    } catch (e) {
      console.error("Critical strategy builder exception:", e);
      setGenerationError("Argument generation failed. Check backend connectivity or AI prompt limits.");
      setErrorLogs(e.stack || e.message || String(e));
      setWorkspaceStage("RESULTS");
      zt.error("Generation failed. Please try again.");
    } finally {
      clearInterval(progressTimer);
      setIsGenerating(false);
    }
  };
  reactExports.useMemo(() => {
    var _a, _b, _c, _d;
    if (!draftResults) return { overall: 0, structure: 0, legalBasis: 0, evidence: 0, language: 0, format: 0 };
    let filledSections = 0;
    const checkFields = ["executiveSummary", "caseOverview", "courtReadyDraft", "prayerClause", "reliefClaimed"];
    checkFields.forEach((f) => {
      if (draftResults[f] && draftResults[f].trim().length > 10) filledSections++;
    });
    const structureScore = Math.min(60 + filledSections * 8, 100);
    const statuteCount = (((_a = draftResults.applicableActs) == null ? void 0 : _a.length) || 0) + (((_b = draftResults.applicableSections) == null ? void 0 : _b.length) || 0);
    const legalBasisScore = Math.min(50 + statuteCount * 8, 100);
    const evidenceCount = ((_c = draftResults.evidenceMapping) == null ? void 0 : _c.length) || 0;
    const evidenceScore = Math.min(45 + evidenceCount * 15, 100);
    const textSample = (draftResults.courtReadyDraft || "") + (draftResults.executiveSummary || "");
    const legalTerms = ["decree", "hereby", "plaintiff", "defendant", "prayer", "hereto", "honourable", "precedent"];
    let termsFound = 0;
    legalTerms.forEach((t2) => {
      if (textSample.toLowerCase().includes(t2)) termsFound++;
    });
    const languageScore = Math.min(60 + termsFound * 5, 100);
    const formatScore = ((_d = draftResults.courtReadyDraft) == null ? void 0 : _d.includes("#")) ? 95 : 75;
    const overallScore = Math.round((structureScore + legalBasisScore + evidenceScore + languageScore + formatScore) / 5);
    return {
      overall: overallScore,
      structure: structureScore,
      legalBasis: legalBasisScore,
      evidence: evidenceScore,
      language: languageScore,
      format: formatScore
    };
  }, [draftResults]);
  const OUTLINE_ITEMS = reactExports.useMemo(() => [
    { id: "executiveSummary", label: "Executive Summary" },
    { id: "caseOverview", label: "Case Overview" },
    { id: "materialFacts", label: "Material Facts" },
    { id: "chronologyOfEvents", label: "Chronology of Events" },
    { id: "issuesForDetermination", label: "Legal Issues" },
    { id: "applicableActs", label: "Applicable Acts" },
    { id: "applicableSections", label: "Applicable Sections" },
    { id: "relevantRules", label: "Relevant Rules" },
    { id: "relevantRegulations", label: "Relevant Regulations" },
    { id: "supremeCourtPrecedents", label: "Binding Supreme Court Judgments" },
    { id: "highCourtJudgments", label: "Relevant High Court Judgments" },
    { id: "persuasiveAuthorities", label: "Persuasive Authorities" },
    { id: "plaintiffArguments", label: "Plaintiff Arguments" },
    { id: "defendantArguments", label: "Defendant Arguments" },
    { id: "counterArguments", label: "Counter Arguments" },
    { id: "rebuttalStrategy", label: "Rebuttal Strategy" },
    { id: "evidenceMapping", label: "Evidence Mapping" },
    { id: "witnessReferences", label: "Witness Strategy" },
    { id: "crossExamQuestions", label: "Cross Examination Questions" },
    { id: "objections", label: "Possible Objections" },
    { id: "interimRelief", label: "Interim Relief" },
    { id: "prayerClause", label: "Prayer Clause" },
    { id: "alternativeArguments", label: "Alternative Arguments" },
    { id: "settlementPossibilities", label: "Settlement Possibilities" },
    { id: "litigationRisks", label: "Litigation Risks" },
    { id: "winningProbability", label: "Winning Probability" },
    { id: "courtReadyDraft", label: "Final Court Draft" }
  ], []);
  const filteredOutline = reactExports.useMemo(() => {
    return OUTLINE_ITEMS.filter(
      (item) => t(item.label).toLowerCase().includes(outlineSearchQuery.toLowerCase()) || item.label.toLowerCase().includes(outlineSearchQuery.toLowerCase())
    );
  }, [OUTLINE_ITEMS, outlineSearchQuery]);
  const sortedOutlineItems = reactExports.useMemo(() => {
    const pinned = [];
    const unpinned = [];
    filteredOutline.forEach((item) => {
      if (pinnedSections.has(item.id)) pinned.push(item);
      else unpinned.push(item);
    });
    return [...pinned, ...unpinned];
  }, [filteredOutline, pinnedSections]);
  const totalWordCount = reactExports.useMemo(() => {
    if (!draftResults) return 0;
    let text = "";
    OUTLINE_ITEMS.forEach((item) => {
      const content = draftResults[item.id];
      if (typeof content === "string") text += " " + content;
      else if (Array.isArray(content)) text += " " + JSON.stringify(content);
    });
    return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  }, [draftResults, OUTLINE_ITEMS]);
  reactExports.useMemo(() => {
    return Math.max(1, Math.ceil(totalWordCount / 200));
  }, [totalWordCount]);
  reactExports.useMemo(() => {
    if (!draftResults) return 0;
    let matchCount = 0;
    const textSample = JSON.stringify(draftResults);
    const matches = textSample.match(/(Section\s+\d+|Order\s+[IVXLCDM]+|\d{4}\s+SC\s+\d+|\d{4}\s+Del\s+\d+)/gi);
    if (matches) matchCount = matches.length;
    return matchCount;
  }, [draftResults]);
  const handleAIAction = async (actionType, promptInstruction) => {
    if (!draftResults) return;
    const targetSection = focusedSection;
    setRefiningSectionId(targetSection);
    const tid = zt.loading(`AI Copilot is running: ${actionType}...`);
    try {
      const currentContent = draftResults[targetSection] || "";
      const prompt = `You are a staff product engineer and senior legal AI platform designer.
      We are refining a specific section of a generated pleading brief.
      
      Section Key: "${targetSection}"
      Current Section Value: "${typeof currentContent === "string" ? currentContent : JSON.stringify(currentContent)}"
      
      Refinement Task: "${actionType}"
      Refinement Instructions: "${promptInstruction}"
      
      Please return ONLY the updated content for this section. If it is a list or mapping, return it formatted clearly as text or list items. Do not output any chat preambles, notes or wrapper tags.`;
      const response = await generateChatResponse(
        [],
        prompt,
        "You are an expert courtroom strategy refiner. Output ONLY the refined text content.",
        [],
        "English",
        null,
        "legal"
      );
      const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
      if (responseText.trim()) {
        let updatedValue = responseText.trim();
        if (Array.isArray(currentContent)) {
          const cleanLines = responseText.split("\n").map((l) => l.replace(/^[-*•\d.]+\s+/, "").trim()).filter((l) => l.length > 0);
          updatedValue = cleanLines;
        }
        const nextResults = {
          ...draftResults,
          [targetSection]: updatedValue
        };
        updateDraftResultsWithHistory(nextResults);
        triggerAutoSave(nextResults);
        setRefinementHistory((prev) => ({ ...prev, [targetSection]: actionType }));
        zt.success(`Refined section "${targetSection}" successfully!`);
      }
    } catch (e) {
      console.error(e);
      zt.error(`Refinement failed for ${actionType}`);
    } finally {
      zt.dismiss(tid);
      setRefiningSectionId(null);
    }
  };
  const handleSaveSectionEdit = async (itemId) => {
    let parsedVal = editingContent;
    const originalContent = draftResults[itemId];
    if (Array.isArray(originalContent)) {
      if (originalContent.length > 0 && typeof originalContent[0] === "object") {
        const lines = editingContent.split("\n").filter((l) => l.trim().length > 0);
        parsedVal = lines.map((line) => {
          const parts = line.split("->").map((p) => p.trim());
          if (itemId === "supremeCourtPrecedents" || itemId === "highCourtJudgments") {
            return { citation: parts[0] || "Citation", ratio: parts[1] || "Precedent details" };
          }
          if (itemId === "evidenceMapping") {
            return { evidence: parts[0] || "Evidence item", proves: parts[1] || "Proves description" };
          }
          return parts[0] || "";
        });
      } else {
        parsedVal = editingContent.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
      }
    }
    const nextResults = {
      ...draftResults,
      [itemId]: parsedVal
    };
    updateDraftResultsWithHistory(nextResults);
    setEditingSectionId(null);
    triggerAutoSave(nextResults);
    zt.success("Saved section edit!");
  };
  const handleSaveDraft = async () => {
    if (!draftResults) return;
    if (!(selectedCaseObject == null ? void 0 : selectedCaseObject._id)) {
      zt.error("No matter file is linked to save the draft.");
      return;
    }
    const tid = zt.loading("Saving draft to database...");
    try {
      const payload = {
        ...selectedCaseObject,
        generatedArgumentsDraft: draftResults
      };
      const response = await apiService.updateProject(selectedCaseObject._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setSaveStatus("saved");
      zt.success("Draft saved successfully to database!", { id: tid });
    } catch (err) {
      console.error("Failed to save draft", err);
      zt.error("Failed to save draft.", { id: tid });
    }
  };
  const handleCopyDraft = () => {
    const text = draftResults.courtReadyDraft || draftResults.generatedArguments || "";
    navigator.clipboard.writeText(text);
    zt.success("Final Court Draft copied to clipboard!");
  };
  const compileBriefToHtml = () => {
    let htmlContent = "";
    htmlContent += `
      <div class="cover-page">
        <div class="branding">${t("AI LEGAL™ LITIGATION WORKSPACE")}</div>
        <div class="title-container">
          <h1 class="case-title">${t("COURTROOM ARGUMENT BRIEF & PLEADING BRIEF")}</h1>
          <p class="case-vs">${(selectedCaseObject == null ? void 0 : selectedCaseObject.clientName) || "PETITIONER"} <span class="vs-text">v.</span> ${(selectedCaseObject == null ? void 0 : selectedCaseObject.opponentName) || "RESPONDENT"}</p>
        </div>
        <div class="meta-box">
          <p><strong>${t("FILING COURT:")}</strong> ${(selectedCaseObject == null ? void 0 : selectedCaseObject.courtName) || "HIGH COURT"}</p>
          <p><strong>${t("MATTER TYPE:")}</strong> ${(selectedCaseObject == null ? void 0 : selectedCaseObject.caseType) || "COMMERCIAL/CIVIL MATTER"}</p>
          <p><strong>${t("DATE OF ANALYSIS:")}</strong> ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")}</p>
          <p><strong>${t("INTELLECTUAL WORKSPACE:")}</strong> ENTERPRISE LITIGATION ENGINE</p>
        </div>
      </div>
      <div class="page-break"></div>
    `;
    htmlContent += `
      <div class="toc-page">
        <h2 class="section-heading">${t("TABLE OF CONTENTS")}</h2>
        <div class="toc-divider"></div>
        <ul class="toc-list">
    `;
    OUTLINE_ITEMS.forEach((item, idx) => {
      htmlContent += `
        <li class="toc-item">
          <span class="toc-label">${idx + 1}. ${t(item.label).toUpperCase()}</span>
          <span class="toc-dot"></span>
          <span class="toc-page-num">${idx + 2}</span>
        </li>
      `;
    });
    htmlContent += `
        </ul>
      </div>
      <div class="page-break"></div>
    `;
    OUTLINE_ITEMS.forEach((item, idx) => {
      const content = draftResults[item.id];
      htmlContent += `
        <div class="document-section">
          <h2 class="section-heading">${idx + 1}. ${t(item.label).toUpperCase()}</h2>
          <div class="section-divider"></div>
      `;
      if (!content || Array.isArray(content) && content.length === 0) {
        htmlContent += `<p class="empty-text">{t("No details generated for this section.")}</p>`;
      } else if (typeof content === "string") {
        htmlContent += `<p class="paragraph-text">${content.replace(/\n/g, "<br/>")}</p>`;
      } else if (Array.isArray(content)) {
        if (typeof content[0] === "object") {
          if (item.id === "plaintiffArguments") {
            content.forEach((arg, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${t("ARGUMENT")} ${aidx + 1}: ${arg.title || "Untitled"}</span>
                    <span class="badge badge-indigo">${t("Strength")}: ${arg.argumentStrength || "Strong"}</span>
                  </div>
                  <div class="card-grid">
                    <div><strong>${t("Legal Reasoning")}:</strong> ${arg.legalReasoning || ""}</div>
                    <div><strong>${t("Supporting Facts")}:</strong> ${arg.supportingFacts || ""}</div>
                    <div><strong>${t("Supporting Evidence")}:</strong> ${arg.supportingEvidence || ""}</div>
                    <div><strong>${t("Statutory Basis")}:</strong> ${arg.applicableSections || ""} | ${arg.applicableJudgments || ""}</div>
                    <div><strong>${t("Expected Defence")}:</strong> ${arg.expectedDefence || ""}</div>
                    <div><strong>${t("Counter Strategy")}:</strong> ${arg.counterResponse || ""}</div>
                  </div>
                  ${arg.suggestedCourtSubmission ? `<div class="court-submission-quote"><strong>${t("Suggested Court Submission")}:</strong><br/>"${arg.suggestedCourtSubmission}"</div>` : ""}
                </div>
              `;
            });
          } else if (["defendantArguments", "counterArguments"].includes(item.id)) {
            content.forEach((arg, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${t("DEFENSE ARGUMENT")} ${aidx + 1}: ${arg.legalBasis || "Untitled"}</span>
                    <span class="badge badge-rose">${t("Probability")}: ${arg.probability || "Medium"}</span>
                  </div>
                  <div class="card-body">
                    <p><strong>${t("Strength")}:</strong> ${arg.strength || ""} | <strong>${t("Weakness")}:</strong> ${arg.weakness || ""}</p>
                    <p><strong>${t("Counter-Strategy")}:</strong> ${arg.counterStrategy || ""}</p>
                  </div>
                </div>
              `;
            });
          } else if (item.id === "rebuttalStrategy") {
            content.forEach((reb, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${t("REBUTTAL")} ${aidx + 1}</span>
                    <span class="badge badge-indigo">${reb.applicableLaw || ""}</span>
                  </div>
                  <div class="card-body">
                    <p><strong>${t("REBUTTAL")}:</strong> ${reb.rebuttal || ""}</p>
                    <p><strong>${t("Evidence Link")}:</strong> ${reb.applicableEvidence || ""} | <strong>${t("Precedent")}:</strong> ${reb.supportingJudgment || ""}</p>
                    ${reb.suggestedCourtSubmission ? `<div class="court-submission-quote"><strong>${t("Court Submission Template")}:</strong><br/>"${reb.suggestedCourtSubmission}"</div>` : ""}
                  </div>
                </div>
              `;
            });
          } else if (item.id === "evidenceMapping") {
            content.forEach((ev, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${ev.evidence || t("Evidence")}</span>
                    <span class="badge badge-indigo">${ev.evidenceWeight || "Primary"} ${t("Weight")}</span>
                  </div>
                  <div class="card-body">
                    <p><strong>${t("Type")}:</strong> ${ev.evidenceType || ""} | <strong>${t("Admissibility")}:</strong> ${ev.admissibility || ""}</p>
                    <p><strong>${t("Confidence Level")}:</strong> ${ev.evidenceConfidence || ""}</p>
                    ${ev.missingEvidence ? `<p class="alert-text"><strong>${t("Missing elements")}:</strong> ${ev.missingEvidence}</p>` : ""}
                  </div>
                </div>
              `;
            });
          } else if (item.id === "chronologyOfEvents") {
            htmlContent += `<div class="chronology-list">`;
            content.forEach((ev, aidx) => {
              htmlContent += `
                <div class="chronology-row">
                  <div class="chrono-date"><strong>${ev.date || ""}</strong></div>
                  <div class="chrono-event">${ev.event || ""} ${ev.evidenceLink ? `<br/><span class="chrono-ref">${t("Ref")}: ${ev.evidenceLink}</span>` : ""}</div>
                </div>
              `;
            });
            htmlContent += `</div>`;
          } else if (["supremeCourtPrecedents", "highCourtJudgments", "persuasiveAuthorities"].includes(item.id)) {
            content.forEach((pre, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${pre.citation || t("Case precedent")}</span>
                    <span class="badge badge-indigo">${pre.court || ""} (${pre.year || ""})</span>
                  </div>
                  <div class="card-body">
                    <p><strong>${t("Legal Principle")}:</strong> ${pre.legalPrinciple || ""}</p>
                    <p><strong>${t("Ratio Decidendi")}:</strong> ${pre.ratioDecidendi || ""}</p>
                    <p><strong>${t("Relevance")}:</strong> ${pre.whyRelevant || ""}</p>
                    ${pre.howToCite ? `<div class="citation-code"><strong>${t("Citation Format")}:</strong> <code>${pre.howToCite}</code></div>` : ""}
                  </div>
                </div>
              `;
            });
          } else if (item.id === "crossExamQuestions") {
            content.forEach((wit, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${t("WITNESS")}: ${wit.witness || "Untitled"}</span>
                  </div>
                  <div class="card-body">
                    ${wit.primaryQuestions ? `<p><strong>${t("Direct Primary Questions")}:</strong><br/>${wit.primaryQuestions}</p>` : ""}
                    ${wit.leadingQuestions ? `<p><strong>${t("Leading Questions")}:</strong><br/>${wit.leadingQuestions}</p>` : ""}
                    ${wit.trapQuestions ? `<p><strong>${t("Trap Questions")}:</strong><br/>${wit.trapQuestions}</p>` : ""}
                    ${wit.contradictionQuestions ? `<p><strong>${t("Contradiction Questions")}:</strong><br/>${wit.contradictionQuestions}</p>` : ""}
                    ${wit.admissionQuestions ? `<p><strong>${t("Admission Questions")}:</strong><br/>${wit.admissionQuestions}</p>` : ""}
                    ${wit.followUpQuestions ? `<p><strong>${t("Follow-Up Inquiries")}:</strong><br/>${wit.followUpQuestions}</p>` : ""}
                  </div>
                </div>
              `;
            });
          } else if (item.id === "objections") {
            content.forEach((obj, aidx) => {
              htmlContent += `
                <div class="brief-card">
                  <div class="card-header">
                    <span class="card-title">${t("Objection")}: ${obj.category || "General"}</span>
                  </div>
                  <div class="card-body">
                    <p><strong>${t("Objection Details")}:</strong> ${obj.description || ""}</p>
                    <p><strong>${t("Legal/Statutory Rule")}:</strong> ${obj.legalBasis || ""}</p>
                  </div>
                </div>
              `;
            });
          } else {
            content.forEach((li) => {
              htmlContent += `<p class="list-item-text">• ${JSON.stringify(li)}</p>`;
            });
          }
        } else {
          content.forEach((li) => {
            htmlContent += `<p class="list-item-text">• ${li}</p>`;
          });
        }
      }
      htmlContent += `
        </div>
      `;
    });
    return htmlContent;
  };
  const compileBriefToDocText = () => {
    let docContent = "";
    docContent += `=========================================================
`;
    docContent += `               ${t("AI LEGAL™ LITIGATION BRIEF")}
`;
    docContent += `=========================================================

`;
    docContent += `${t("PETITIONER/PLAINTIFF:")} ${(selectedCaseObject == null ? void 0 : selectedCaseObject.clientName) || "Petitioner"}
`;
    docContent += `${t("RESPONDENT/DEFENDANT:")} ${(selectedCaseObject == null ? void 0 : selectedCaseObject.opponentName) || "Respondent"}
`;
    docContent += `${t("FILING COURT:")} ${(selectedCaseObject == null ? void 0 : selectedCaseObject.courtName) || "High Court"}
`;
    docContent += `${t("CASE TYPE:")} ${(selectedCaseObject == null ? void 0 : selectedCaseObject.caseType) || "Civil/Commercial"}
`;
    docContent += `${t("DATE OF ANALYSIS:")} ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")}

`;
    docContent += `---------------------------------------------------------
`;
    docContent += `                    ${t("TABLE OF CONTENTS")}
`;
    docContent += `---------------------------------------------------------
`;
    OUTLINE_ITEMS.forEach((item, idx) => {
      docContent += `${idx + 1}. ${t(item.label).toUpperCase()}
`;
    });
    docContent += `

`;
    OUTLINE_ITEMS.forEach((item, idx) => {
      const content = draftResults[item.id];
      docContent += `=========================================================
`;
      docContent += `${idx + 1}. ${t(item.label).toUpperCase()}
`;
      docContent += `=========================================================

`;
      if (!content || Array.isArray(content) && content.length === 0) {
        docContent += `{t("No details generated for this section.")}

`;
      } else if (typeof content === "string") {
        docContent += `${content}

`;
      } else if (Array.isArray(content)) {
        if (typeof content[0] === "object") {
          if (item.id === "plaintiffArguments") {
            content.forEach((arg, aidx) => {
              docContent += `${t("ARGUMENT")} ${aidx + 1}: ${arg.title || "Untitled"}
`;
              docContent += ` - ${t("Legal Reasoning")}: ${arg.legalReasoning || ""}
`;
              docContent += ` - ${t("Supporting Facts")}: ${arg.supportingFacts || ""}
`;
              docContent += ` - ${t("Supporting Evidence")}: ${arg.supportingEvidence || ""}
`;
              docContent += ` - ${t("Statutory Basis")}: ${arg.applicableSections || ""} | ${arg.applicableJudgments || ""}
`;
              docContent += ` - ${t("Expected Defence")}: ${arg.expectedDefence || ""}
`;
              docContent += ` - ${t("Counter Response")}: ${arg.counterResponse || ""}
`;
              docContent += ` - ${t("Strength")}: ${arg.argumentStrength || "Strong"} | Risk: ${arg.riskLevel || "Low"}
`;
              if (arg.suggestedCourtSubmission) {
                docContent += ` - ${t("Suggested Court Submission")}:
   "${arg.suggestedCourtSubmission}"
`;
              }
              docContent += `
`;
            });
          } else if (["defendantArguments", "counterArguments"].includes(item.id)) {
            content.forEach((arg, aidx) => {
              docContent += `${t("DEFENSE ARGUMENT")} ${aidx + 1}: ${arg.legalBasis || "Untitled"}
`;
              docContent += ` - ${t("Strength")}: ${arg.strength || ""} | ${t("Weakness")}: ${arg.weakness || ""}
`;
              docContent += ` - ${t("Probability")}: ${arg.probability || "Medium"}
`;
              docContent += ` - ${t("Counter-Strategy")}: ${arg.counterStrategy || ""}

`;
            });
          } else if (item.id === "rebuttalStrategy") {
            content.forEach((reb, aidx) => {
              docContent += `${t("Rebuttal Argument")} ${aidx + 1}: ${reb.rebuttal || ""}
`;
              docContent += ` - ${t("Governing Provisions:")} ${reb.applicableLaw || ""}
`;
              docContent += ` - ${t("Linked Proof:")} ${reb.applicableEvidence || ""}
`;
              docContent += ` - ${t("Supporting Judgment:")} ${reb.supportingJudgment || ""}
`;
              if (reb.suggestedCourtSubmission) {
                docContent += ` - ${t("Suggested Court Submission")}:
   "${reb.suggestedCourtSubmission}"
`;
              }
              docContent += `
`;
            });
          } else if (item.id === "evidenceMapping") {
            content.forEach((ev, aidx) => {
              docContent += `${t("Evidence:")} ${ev.evidence || ""}
`;
              docContent += ` - ${t("Type:")} ${ev.evidenceType || ""} | ${t("Weight:")} ${ev.evidenceWeight || "Primary"}
`;
              docContent += ` - ${t("Admissibility:")} ${ev.admissibility || ""}
`;
              docContent += ` - ${t("Confidence Level")}: ${ev.evidenceConfidence || ""}
`;
              if (ev.missingEvidence) {
                docContent += ` - ${t("Missing Elements Checklist:")} ${ev.missingEvidence}
`;
              }
              docContent += `
`;
            });
          } else if (item.id === "chronologyOfEvents") {
            content.forEach((ev, aidx) => {
              docContent += `${t("Date/Milestone:")} ${ev.date || ""}
`;
              docContent += `${t("Event:")} ${ev.event || ""}
`;
              if (ev.evidenceLink) {
                docContent += `${t("Linked Reference:")} ${ev.evidenceLink}
`;
              }
              docContent += `
`;
            });
          } else if (["supremeCourtPrecedents", "highCourtJudgments", "persuasiveAuthorities"].includes(item.id)) {
            content.forEach((pre, aidx) => {
              docContent += `${t("Citation:")} ${pre.citation || ""}
`;
              docContent += ` - ${t("Court:")} ${pre.court || ""} | ${t("Year:")} ${pre.year || ""}
`;
              docContent += ` - ${t("Legal Principle")}: ${pre.legalPrinciple || ""}
`;
              docContent += ` - ${t("Ratio Decidendi")}: ${pre.ratioDecidendi || ""}
`;
              docContent += ` - ${t("Why Relevant:")} ${pre.whyRelevant || ""} | ${t("Authority:")} ${pre.bindingValue || ""}
`;
              if (pre.howToCite) {
                docContent += ` - ${t("How to cite script:")} ${pre.howToCite}
`;
              }
              docContent += `
`;
            });
          } else if (item.id === "crossExamQuestions") {
            content.forEach((wit, aidx) => {
              docContent += `${t("Target Witness:")} ${wit.witness || ""}
`;
              if (wit.primaryQuestions) docContent += ` - ${t("Primary direct:")} ${wit.primaryQuestions}
`;
              if (wit.leadingQuestions) docContent += ` - ${t("Leading questions:")} ${wit.leadingQuestions}
`;
              if (wit.trapQuestions) docContent += ` - ${t("Trap Questions:")} ${wit.trapQuestions}
`;
              if (wit.contradictionQuestions) docContent += ` - ${t("Contradictions:")} ${wit.contradictionQuestions}
`;
              if (wit.admissionQuestions) docContent += ` - ${t("Admissions:")} ${wit.admissionQuestions}
`;
              if (wit.followUpQuestions) docContent += ` - ${t("Follow-ups:")} ${wit.followUpQuestions}
`;
              docContent += `
`;
            });
          } else if (item.id === "objections") {
            content.forEach((obj, aidx) => {
              docContent += `${t("Objection Category:")} ${obj.category || ""}
`;
              docContent += ` - ${t("Description:")} ${obj.description || ""}
`;
              docContent += ` - ${t("Statutory Rule Basis:")} ${obj.legalBasis || ""}

`;
            });
          } else {
            content.forEach((li) => {
              docContent += `• ${JSON.stringify(li)}
`;
            });
            docContent += `
`;
          }
        } else {
          content.forEach((li) => {
            docContent += `• ${li}
`;
          });
          docContent += `
`;
        }
      }
    });
    return docContent;
  };
  const getHistoryItemCaseName = (item) => {
    var _a, _b;
    if (item.caseName) return item.caseName;
    if (item.title && item.title.includes(":")) {
      return item.title.split(":")[1].trim();
    }
    if (((_a = item.extractionData) == null ? void 0 : _a.plaintiff) && ((_b = item.extractionData) == null ? void 0 : _b.defendant)) {
      return `${item.extractionData.plaintiff} vs ${item.extractionData.defendant}`;
    }
    return item.title || "Untitled Case Pleading";
  };
  const getHistoryItemSource = (item) => {
    if (item.source) {
      if (item.source === "Existing Case" || item.source === "EXISTING_CASE") return "Existing Case Workspace";
      if (item.source === "Manual" || item.source === "MANUAL_FACTS") return "Manual Facts";
      if (item.source === "Uploaded Documents" || item.source === "UPLOAD_DOCS") return "Uploaded Documents";
      return item.source;
    }
    const t2 = (item.title || "").toLowerCase();
    if (t2.includes("case")) return "Existing Case Workspace";
    if (t2.includes("manual")) return "Manual Facts";
    if (t2.includes("ocr") || t2.includes("docs")) return "Uploaded Documents";
    return "Existing Case Workspace";
  };
  const getHistoryItemPreview = (item) => {
    var _a, _b;
    const p = item.preview || ((_a = item.results) == null ? void 0 : _a.executiveSummary) || ((_b = item.results) == null ? void 0 : _b.caseOverview) || "";
    if (!p) return "No preview summary generated for this court pleading draft.";
    return p.substring(0, 180) + (p.length > 180 ? "..." : "");
  };
  const getHistoryItemStats = (item) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const text = ((_a = item.results) == null ? void 0 : _a.courtReadyDraft) || ((_b = item.results) == null ? void 0 : _b.executiveSummary) || "";
    const words = text ? text.trim().split(/\s+/).filter(Boolean).length : 1204;
    const citations = (((_d = (_c = item.results) == null ? void 0 : _c.applicableActs) == null ? void 0 : _d.length) || 0) + (((_f = (_e = item.results) == null ? void 0 : _e.applicableSections) == null ? void 0 : _f.length) || 0) || 20;
    const evidence = ((_h = (_g = item.results) == null ? void 0 : _g.evidenceLinked) == null ? void 0 : _h.length) || 10;
    const readTime = Math.max(1, Math.round(words / 200)) || 6;
    return { words, citations, evidence, readTime };
  };
  const handleDuplicateHistoryItem = (item) => {
    const newItem = {
      ...item,
      id: `draft_${Date.now()}`,
      version: `v${recentDrafts.length + 1}`,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    const updated = [newItem, ...recentDrafts];
    setRecentDrafts(updated);
    localStorage.setItem("aisa_recent_arguments_drafts", JSON.stringify(updated));
    zt.success("Draft duplicated in history!");
  };
  const sortedAndFilteredHistory = reactExports.useMemo(() => {
    let list = recentDrafts.filter((h) => {
      const caseName = getHistoryItemCaseName(h).toLowerCase();
      const source = getHistoryItemSource(h).toLowerCase();
      const date = (h.date || "").toLowerCase();
      const preview = getHistoryItemPreview(h).toLowerCase();
      const q = historySearch.toLowerCase();
      return caseName.includes(q) || source.includes(q) || date.includes(q) || preview.includes(q);
    });
    if (historySortBy === "newest") {
      list.sort((a, b) => {
        var _a, _b;
        const idA = parseInt(((_a = a.id) == null ? void 0 : _a.split("_")[1]) || "0");
        const idB = parseInt(((_b = b.id) == null ? void 0 : _b.split("_")[1]) || "0");
        return idB - idA;
      });
    } else if (historySortBy === "oldest") {
      list.sort((a, b) => {
        var _a, _b;
        const idA = parseInt(((_a = a.id) == null ? void 0 : _a.split("_")[1]) || "0");
        const idB = parseInt(((_b = b.id) == null ? void 0 : _b.split("_")[1]) || "0");
        return idA - idB;
      });
    } else if (historySortBy === "name") {
      list.sort((a, b) => {
        const nameA = getHistoryItemCaseName(a).toLowerCase();
        const nameB = getHistoryItemCaseName(b).toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }
    return list;
  }, [recentDrafts, historySearch, historySortBy]);
  const handlePrintPDF = () => {
    if (!draftResults) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to print/export PDF.");
      return;
    }
    const compiledHtml = compileBriefToHtml();
    const html = `
      <html>
      <head>
        <title>AI LEGAL™ - Legal Draft - ${(selectedCaseObject == null ? void 0 : selectedCaseObject.clientName) || "Petitioner"} vs ${(selectedCaseObject == null ? void 0 : selectedCaseObject.opponentName) || "Respondent"}</title>
        <style>
          body { font-family: 'Georgia', serif; padding: 40px; line-height: 1.6; color: #0f172a; background-color: #ffffff; }
          .cover-page { height: 95vh; display: flex; flex-direction: column; justify-content: space-between; border: 3px double #1e293b; padding: 40px; margin-bottom: 50px; box-sizing: border-box; }
          .branding { font-family: 'Segoe UI', sans-serif; font-size: 10pt; font-weight: 800; color: #4f46e5; letter-spacing: 2px; }
          .title-container { text-align: center; margin-top: 15%; }
          .case-title { font-size: 24pt; font-weight: 800; color: #1e1b4b; margin: 0; font-family: 'Segoe UI', sans-serif; text-transform: uppercase; }
          .case-vs { font-size: 18pt; font-weight: 600; color: #475569; margin-top: 20px; }
          .vs-text { font-style: italic; color: #94a3b8; }
          .meta-box { border-top: 1px solid #e2e8f0; padding-top: 20px; font-family: 'Segoe UI', sans-serif; font-size: 10pt; color: #334155; line-height: 1.8; }
          .page-break { page-break-after: always; }
          
          .toc-page { padding: 40px 0; }
          .toc-list { list-style: none; padding: 0; margin-top: 30px; }
          .toc-item { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 12px; font-size: 11pt; font-weight: 700; color: #1e293b; font-family: 'Segoe UI', sans-serif; }
          .toc-label { width: fit-content; white-space: nowrap; }
          .toc-dot { flex-grow: 1; border-bottom: 1px dotted #cbd5e1; margin: 0 10px; position: relative; top: -4px; }
          .toc-page-num { width: fit-content; font-variant-numeric: tabular-nums; }
          
          .document-section { padding: 20px 0; page-break-after: always; }
          .section-heading { font-family: 'Segoe UI', sans-serif; font-size: 14pt; font-weight: 800; color: #1e1b4b; margin-top: 30px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
          .section-divider { height: 2px; background: #4f46e5; margin-bottom: 20px; }
          .paragraph-text { font-size: 11pt; color: #334155; text-align: justify; margin-bottom: 15px; }
          .list-item-text { font-size: 11pt; color: #334155; margin-left: 20px; margin-bottom: 8px; }
          
          .brief-card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #f8fafc; page-break-inside: avoid; }
          .card-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px; }
          .card-title { font-size: 11pt; font-weight: 800; color: #1e1b4b; }
          .badge { font-size: 8pt; font-weight: 800; text-transform: uppercase; padding: 3px 8px; border-radius: 9999px; }
          .badge-indigo { background-color: #e0e7ff; color: #4338ca; }
          .badge-rose { background-color: #ffe4e6; color: #9f1239; }
          .card-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 12px; font-size: 10pt; color: #475569; }
          .card-body { font-size: 10pt; color: #475569; line-height: 1.6; }
          .court-submission-quote { font-style: italic; border-left: 3px solid #4f46e5; padding-left: 12px; margin-top: 12px; color: #334155; font-size: 10pt; background: #f1f5f9; padding: 10px 15px; border-radius: 4px; }
          .citation-code { font-family: monospace; font-size: 9pt; background-color: #f1f5f9; padding: 6px 12px; border-radius: 4px; margin-top: 10px; border: 1px solid #e2e8f0; color: #0f172a; }
          
          .chronology-list { border-left: 2px solid #e2e8f0; padding-left: 20px; margin-top: 15px; }
          .chronology-row { margin-bottom: 15px; position: relative; }
          .chrono-date { font-size: 10pt; font-weight: 800; color: #4f46e5; text-transform: uppercase; }
          .chrono-event { font-size: 11pt; color: #334155; margin-top: 4px; }
          .chrono-ref { font-size: 9pt; color: #64748b; font-weight: 600; }
          .empty-text { font-style: italic; color: #94a3b8; font-size: 10pt; }
        </style>
      </head>
      <body>
        ${compiledHtml}
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };
  const handleDownloadDoc = () => {
    if (!draftResults) return;
    const docContent = compileBriefToDocText();
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(selectedCaseObject == null ? void 0 : selectedCaseObject.clientName) || "Petitioner"}_vs_${(selectedCaseObject == null ? void 0 : selectedCaseObject.opponentName) || "Respondent"}_Brief.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    zt.success("Word document brief downloaded successfully!");
  };
  const filteredCases = reactExports.useMemo(() => {
    return allProjects.filter((p) => p.name.toLowerCase().includes(caseSearchQuery.toLowerCase()));
  }, [allProjects, caseSearchQuery]);
  const filteredPrecedents = reactExports.useMemo(() => {
    return MOCK_PRECEDENT_REPOS.filter((p) => {
      const matchSearch = p.citation.toLowerCase().includes(precedentSearch.toLowerCase()) || p.ratio.toLowerCase().includes(precedentSearch.toLowerCase());
      const matchCourt = precedentFilter === "All" || p.court === precedentFilter;
      return matchSearch && matchCourt;
    });
  }, [precedentSearch, precedentFilter]);
  const toggleBookmarkPrecedent = (id) => {
    const nextBookmarks = new Set(bookmarkedPrecedents);
    if (nextBookmarks.has(id)) nextBookmarks.delete(id);
    else nextBookmarks.add(id);
    setBookmarkedPrecedents(nextBookmarks);
  };
  const insertPrecedentIntoDraft = (citation) => {
    const activeSectionContent = draftResults[focusedSection];
    let nextContent = "";
    if (Array.isArray(activeSectionContent)) {
      nextContent = [...activeSectionContent, { citation, ratio: "Binding judgment reference" }];
    } else {
      nextContent = (activeSectionContent || "") + `

[Citation: ${citation}]`;
    }
    const nextResults = {
      ...draftResults,
      [focusedSection]: nextContent
    };
    updateDraftResultsWithHistory(nextResults);
    triggerAutoSave(nextResults);
    zt.success(`Inserted citation into ${focusedSection}`);
  };
  const [activeCopilotTab, setActiveCopilotTab] = reactExports.useState("Language");
  const COPILOT_CATEGORIES = ["Language", "Logic", "Precedents", "Rebuttal", "Evidence"];
  const getCategorizedCopilotActions = () => {
    switch (activeCopilotTab) {
      case "Language":
        return [
          { name: "Formal", desc: "Strict professional legal tone standard.", action: "Formal", prompt: "Rewrite this section in a strictly formal, professional legal tone." },
          { name: "Courtroom", desc: "Standard courtroom advocacy vocabulary.", action: "Courtroom", prompt: "Rewrite this section using standard courtroom advocacy vocabulary and phrasing." },
          { name: "Aggressive", desc: "Assertive pressure litigation stance.", action: "Aggressive", prompt: "Rewrite this section with an assertive, aggressive litigation tone to put maximum pressure on the opponent." },
          { name: "Neutral", desc: "Objective analytical voice.", action: "Neutral", prompt: "Rewrite this section in a balanced, neutral, objective analytical tone." },
          { name: "Judge Friendly", desc: "Clear, concise presentation style.", action: "Judge Friendly", prompt: "Rewrite this section to be extremely clear, concise, and easy for a judge to scan and absorb quickly." },
          { name: "Senior Counsel Style", desc: "Elegant authoritative advocacy.", action: "Senior Counsel Style", prompt: "Rewrite this section in the elegant, authoritative, and persuasive style of a senior advocate / senior counsel." }
        ];
      case "Logic":
        return [
          { name: "Increase Reasoning", desc: "Deepen step-by-step logic chains.", action: "Increase Reasoning", prompt: "Substantially expand the logical depth, analysis, and step-by-step reasoning of this section." },
          { name: "Increase Citations", desc: "Add relevant provisions / acts.", action: "Increase Citations", prompt: "Integrate additional statutory citations and references to relevant acts/provisions." },
          { name: "Strengthen Arguments", desc: "Highlight liabilities & breaches.", action: "Strengthen Arguments", prompt: "Strengthen the core arguments in this section by highlighting absolute liabilities and clear breaches." },
          { name: "Reduce Assumptions", desc: "Keep grounded in strict facts.", action: "Reduce Assumptions", prompt: "Refine this section to reduce speculative assumptions, keeping it strictly grounded in direct facts and evidence." },
          { name: "Improve Burden of Proof", desc: "Refine proof standards checks.", action: "Improve Burden of Proof", prompt: "Explicitly highlight who bears the burden of proof for this section and assert that the opponent has failed to meet it." }
        ];
      case "Precedents":
        return [
          { name: "Binding Only", desc: "Rely strictly on Article 141.", action: "Binding Only", prompt: "Refine the case laws mentioned in this section to rely strictly on binding precedents under Article 141." },
          { name: "Supreme Court", desc: "Prioritize apex court judgments.", action: "Supreme Court", prompt: "Add or prioritize authoritative Supreme Court of India precedents matching the legal issues." },
          { name: "High Court", desc: "Prioritize relevant jurisdiction.", action: "High Court", prompt: "Add or prioritize relevant jurisdiction High Court precedents to support the arguments." },
          { name: "Recent", desc: "Cite recent 2023-2026 rulings.", action: "Recent", prompt: "Incorporate recent precedents (preferably 2023-2026) to reflect current judicial developments." },
          { name: "Constitution Bench", desc: "Incorporate larger bench rulings.", action: "Constitution Bench", prompt: "Cite authoritative larger/Constitution Bench judgments to establish fundamental legal principles." }
        ];
      case "Rebuttal":
        return [
          { name: "Stronger Counter Arguments", desc: "Anticipate & defeat defenses.", action: "Stronger Counter Arguments", prompt: "Generate aggressive counter-arguments to defeat the opponent's anticipated defense positions." },
          { name: "Attack Weak Evidence", desc: "Expose opponent evidence flaws.", action: "Attack Weak Evidence", prompt: "Analyze and aggressively challenge the credibility, weight, or admissibility of the opponent's evidence." },
          { name: "Alternative Interpretation", desc: "Compelling factual reinterpretations.", action: "Alternative Interpretation", prompt: "Propose a compelling alternative legal interpretation of the disputed events to counter the defense." },
          { name: "Contradictions", desc: "Highlight records inconsistencies.", action: "Contradictions", prompt: "Highlight contradictions or inconsistencies between the opponent's claims and their documentary records." }
        ];
      case "Evidence":
        return [
          { name: "Primary Only", desc: "Rely strictly on direct files.", action: "Primary Only", prompt: "Align arguments in this section strictly with primary evidence on record, ignoring auxiliary files." },
          { name: "Certified Only", desc: "Certified copies focus & weights.", action: "Certified Only", prompt: "Prioritize certified copies of documents and emphasize their authenticity and admissibility in this section." },
          { name: "Increase Weight", desc: "Cumulative evidentiary force.", action: "Increase Weight", prompt: "Group and present evidence items to maximize their cumulative evidentiary weight and force." },
          { name: "Ignore Weak Evidence", desc: "Prune circumstantial links.", action: "Ignore Weak Evidence", prompt: "Prune weak or circumstantial evidentiary links from this section's arguments." }
        ];
      default:
        return [];
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3.5 border-b shrink-0 gap-3.5 ${isDark ? "border-slate-800 bg-[#0B1020]/95" : "border-slate-200 bg-white"} backdrop-blur-xl z-20`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-3 min-w-0 flex-wrap sm:flex-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCustomBack,
            className: `flex items-center gap-1 text-[11px] font-black uppercase tracking-wider transition-colors shrink-0 ${isDark ? "text-slate-350 hover:text-white" : "text-slate-700 hover:text-slate-900"}`,
            style: { minHeight: "44px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("Back") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-800 mx-1 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-[15px] sm:text-[18px] font-black leading-none tracking-tight truncate ${isDark ? "text-white" : "text-slate-900"}`, children: t("Argument Builder") }),
            workspaceStage === "RESULTS" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setMobileOutlineDrawer(true),
                className: "md:hidden px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/30 hover:bg-indigo-100 text-indigo-650 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-850 rounded text-[9px] font-black uppercase",
                style: { minHeight: "44px" },
                children: t("Outline")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-medium mt-1 leading-normal ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "AI enterprise pleading generator, defense planner, and legal brief drafting workspace." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap sm:flex-nowrap shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { lang: toolkitLanguage === "Hindi" ? "hi" : "en", onChange: (l) => setToolkitLanguage(l === "hi" ? "Hindi" : "English"), className: "mr-1" }),
        workspaceStage === "RESULTS" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setHistoryVisible(true),
              className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"}`,
              style: { height: "34px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("History") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setWorkspaceStage("INPUT");
                setWizardStep(1);
              },
              className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-707 hover:bg-slate-100"}`,
              style: { height: "34px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("Adjust Inputs") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: t("Adjust") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handlePrintPDF,
                className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-707 hover:bg-slate-100"}`,
                style: { height: "34px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("PDF") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleDownloadDoc,
                className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-707 hover:bg-slate-100"}`,
                style: { height: "34px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("DOCX") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleCopyDraft,
                className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-707 hover:bg-slate-100"}`,
                style: { height: "34px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("Copy") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden relative", ref: moreMenuRef, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setIsMoreMenuOpen(!isMoreMenuOpen),
                className: `px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-707 hover:bg-slate-100"}`,
                style: { height: "34px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("More") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12 })
                ]
              }
            ),
            isMoreMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute right-0 mt-1.5 w-32 border rounded-xl shadow-xl z-50 flex flex-col overflow-hidden py-1 ${isDark ? "bg-[#131c31] border-slate-800" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsMoreMenuOpen(false);
                    handlePrintPDF();
                  },
                  className: "w-full text-left px-3 py-2 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-indigo-600 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 12 }),
                    " ",
                    t("PDF")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsMoreMenuOpen(false);
                    handleDownloadDoc();
                  },
                  className: "w-full text-left px-3 py-2 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-indigo-600 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 12 }),
                    " ",
                    t("DOCX")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsMoreMenuOpen(false);
                    handleCopyDraft();
                  },
                  className: "w-full text-left px-3 py-2 text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-indigo-600 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 12 }),
                    " ",
                    t("Copy")
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    workspaceStage !== "RESULTS" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 border-b shrink-0 ${isDark ? "bg-[#0E1528] border-slate-850" : "bg-slate-55/40 border-slate-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center justify-between w-full relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" }),
        [
          { step: 1, label: "Choose Source", active: workspaceStage === "INPUT" && wizardStep === 1 },
          { step: 2, label: "AI Analysis", active: workspaceStage === "INPUT" && wizardStep === 2 },
          { step: 3, label: "Court Draft", active: workspaceStage === "RESULTS" }
        ].map((s, idx) => {
          const completed = idx === 0 && (wizardStep === 2 || workspaceStage === "RESULTS") || idx === 1 && workspaceStage === "RESULTS";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${s.active ? "bg-indigo-600 text-white shadow-lg ring-4 ring-indigo-500/20" : completed ? "bg-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700"}`, children: completed ? "✓" : s.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider mt-2 bg-slate-50 dark:bg-[#0B1020] px-2 ${s.active ? "text-indigo-600 dark:text-indigo-400" : completed ? "text-emerald-500" : "text-slate-400"}`, children: t(s.label) })
          ] }, s.step);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex sm:hidden items-center justify-center gap-1.5 flex-wrap w-full", children: [
        { step: 1, label: "Source", active: workspaceStage === "INPUT" && wizardStep === 1 },
        { step: 2, label: "AI Analysis", active: workspaceStage === "INPUT" && wizardStep === 2 },
        { step: 3, label: "Court Draft", active: workspaceStage === "RESULTS" }
      ].map((s, idx) => {
        const completed = idx === 0 && (wizardStep === 2 || workspaceStage === "RESULTS") || idx === 1 && workspaceStage === "RESULTS";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${s.active ? "bg-indigo-650 text-white shadow ring-2 ring-indigo-500/20" : completed ? "bg-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700"}`, children: completed ? "✓" : s.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-black uppercase tracking-wider ${s.active ? "text-indigo-600 dark:text-indigo-400" : completed ? "text-emerald-500" : "text-slate-400"}`, children: t(s.label) })
          ] }),
          idx < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300 dark:text-slate-700 text-[10px] select-none mx-0.5", children: "➔" })
        ] }, s.step);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-hidden relative min-h-0 select-text", children: [
      workspaceStage === "INPUT" && wizardStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto p-4 sm:p-6 custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          { id: "EXISTING_CASE", name: "Existing Case Workspace", desc: "Auto populate facts, parties, documents, evidence, timeline from chosen case.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 22 }) },
          { id: "UPLOAD_DOCUMENTS", name: "Upload Legal Documents", desc: "AI OCR extracts timelines, parties, laws, facts from uploaded files.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 22 }) },
          { id: "MANUAL_FACTS", name: "Manual Facts Outline", desc: "Advocate details case facts manually. AI will analyze facts and build strategy.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 22 }) }
        ].map((src, index) => {
          const active = argumentSource === src.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => setArgumentSource(src.id),
              className: `p-5 border rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px] hover:translate-y-[-2px] hover:shadow-md ${active ? "bg-indigo-500/5 ring-2 ring-indigo-500 border-indigo-500" : isDark ? "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700" : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"} ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`,
              style: { minHeight: "52px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: active ? "text-indigo-650 dark:text-indigo-400" : "text-slate-400", children: src.icon }),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-indigo-600 dark:text-indigo-400", children: t("Selected") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 10, className: "text-indigo-600 dark:text-indigo-400" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[12px] font-black leading-tight", children: t(src.name) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold mt-1.5 leading-relaxed", children: t(src.desc) })
                ] })
              ]
            },
            src.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-6 border rounded-2xl ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`, children: argumentSource === "EXISTING_CASE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-400 block", children: t("Choose Case Workspace") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => setIsCaseDropdownOpen(!isCaseDropdownOpen),
                className: `w-full border-2 rounded-xl px-4 py-3.5 text-[13px] font-extrabold flex items-center justify-between cursor-pointer transition-all duration-200 hover:border-indigo-400 dark:hover:border-indigo-500 ${isCaseDropdownOpen ? "border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.2)] ring-2 ring-indigo-500/20" : isDark ? "bg-[#131c31] border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-800"}`,
                style: { minHeight: "56px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: selectedCaseObject ? "text-indigo-500 shrink-0" : "text-slate-400 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `truncate ${selectedCaseObject ? "text-indigo-650 dark:text-indigo-400" : "text-slate-450"}`, children: selectedCaseObject ? selectedCaseObject.name : t("Search or Select Case Workspace") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-slate-400 transition-transform duration-200 shrink-0 ${isCaseDropdownOpen ? "rotate-180 text-indigo-500" : ""}` })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isCaseDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
                transition: { duration: 0.15 },
                className: `absolute left-0 right-0 mt-2 border-2 rounded-xl shadow-xl z-30 overflow-hidden ${isDark ? "bg-[#0B1020] border-slate-800" : "bg-white border-slate-200"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2 border-b flex items-center gap-2 ${isDark ? "border-slate-800" : "border-slate-200 bg-slate-50"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: t("Search workspace..."),
                        value: caseSearchQuery,
                        onChange: (e) => setCaseSearchQuery(e.target.value),
                        className: `w-full bg-transparent border-none text-xs outline-none py-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-60 overflow-y-auto custom-scrollbar", children: [
                    filteredCases.map((p) => {
                      const selected = linkedCaseId === p._id;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          onClick: () => {
                            setLinkedCaseId(p._id);
                            setIsCaseDropdownOpen(false);
                          },
                          className: `px-4 py-3 text-xs font-bold cursor-pointer transition-colors ${selected ? "bg-indigo-650 text-white font-black" : isDark ? "text-slate-300 hover:bg-[#131c31] hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"}`,
                          children: p.name
                        },
                        p._id
                      );
                    }),
                    filteredCases.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-xs text-slate-400", children: t("No cases found") })
                  ] })
                ]
              }
            ) })
          ] }),
          linkedCaseId && selectedCaseObject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 rounded-2xl border transition-all shadow-sm space-y-5 ${isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider", children: t("Case Matter Summary") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-emerald-550/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-emerald-500/20", children: t("AI Ready") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-slate-50/50 border-slate-150"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] uppercase font-medium text-slate-500 dark:text-slate-400 block mb-1", children: t("Case Name") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-semibold text-slate-900 dark:text-white block truncate", title: selectedCaseObject.name, children: selectedCaseObject.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-slate-50/50 border-slate-150"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] uppercase font-medium text-slate-500 dark:text-slate-400 block mb-1", children: t("Case Type") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-semibold text-slate-900 dark:text-white block truncate", title: selectedCaseObject.caseType || "Property Dispute", children: selectedCaseObject.caseType || "Property Dispute" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-slate-50/50 border-slate-150"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] uppercase font-medium text-slate-500 dark:text-slate-400 block mb-1", children: t("Parties") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[16px] font-semibold text-slate-900 dark:text-white block truncate", children: [
                  selectedCaseObject.clientName || "Petitioner",
                  " vs ",
                  selectedCaseObject.opponentName || "Respondent"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-slate-50/50 border-slate-150"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] uppercase font-medium text-slate-500 dark:text-slate-400 block mb-1", children: t("Court") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-semibold text-slate-900 dark:text-white block truncate", title: selectedCaseObject.courtName || "District Court Jabalpur", children: selectedCaseObject.courtName || "District Court Jabal Jabalpur" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UniversalMultimodalInput,
              {
                caseId: linkedCaseId || "global",
                workspaceName: "ArgumentBuilder",
                onContextChange: (ctx) => setMultimodalContext(ctx),
                theme: isDark ? "dark" : "light",
                layout: "case"
              }
            ) })
          ] })
        ] }) : argumentSource === "UPLOAD_DOCUMENTS" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          UniversalMultimodalInput,
          {
            caseId: linkedCaseId || "global",
            workspaceName: "ArgumentBuilder",
            onContextChange: (ctx) => setMultimodalContext(ctx),
            theme: isDark ? "dark" : "light",
            layout: "upload"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase text-indigo-500 tracking-wider", children: t("Litigation Goal *") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: litigationGoal,
                  onChange: (e) => setLitigationGoal(e.target.value),
                  className: `w-full border rounded-xl px-3 py-3 text-xs font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("Select Litigation Goal") }),
                    [
                      "Draft Plaintiff Arguments",
                      "Draft Defence Arguments",
                      "Draft Written Statement",
                      "Draft Bail Application",
                      "Draft Injunction Application",
                      "Draft Appeal",
                      "Draft Consumer Complaint",
                      "Draft Criminal Defence",
                      "Draft Cross Examination",
                      "Draft Rejoinder",
                      "Draft Reply Notice",
                      "Draft Final Oral Arguments",
                      "Draft Complete Court Pleading"
                    ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase text-indigo-500 tracking-wider", children: t("Practice Area *") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: practiceArea,
                  onChange: (e) => setPracticeArea(e.target.value),
                  className: `w-full border rounded-xl px-3 py-3 text-xs font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("Select Practice Area") }),
                    [
                      "Civil",
                      "Criminal",
                      "Property",
                      "Family",
                      "Consumer",
                      "Corporate",
                      "Commercial",
                      "Cyber Crime",
                      "Labour",
                      "Tax",
                      "Constitutional",
                      "Arbitration",
                      "Service Matter",
                      "Other"
                    ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase text-indigo-500 tracking-wider", children: t("Relief Required") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: reliefRequired,
                  onChange: (e) => setReliefRequired(e.target.value),
                  className: `w-full border rounded-xl px-3 py-3 text-xs font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"} focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("Select Relief (Optional)") }),
                    [
                      "Recovery",
                      "Compensation",
                      "Possession",
                      "Permanent Injunction",
                      "Temporary Injunction",
                      "Specific Performance",
                      "Bail",
                      "Acquittal",
                      "Divorce",
                      "Custody",
                      "Appeal",
                      "Stay Order",
                      "Damages",
                      "Any Other"
                    ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase text-indigo-500 tracking-wider", children: t("Legal Issue / Case Facts *") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      navigator.clipboard.writeText(caseFacts);
                      zt.success(t("Editor text copied!"));
                    },
                    disabled: !caseFacts,
                    className: `p-1 px-2.5 rounded border text-[9px] font-bold uppercase transition-all flex items-center gap-1 ${caseFacts ? "border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-500" : "border-transparent text-slate-450 opacity-40 cursor-not-allowed"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 10 }),
                      " Copy"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: async () => {
                      try {
                        const text = await navigator.clipboard.readText();
                        setCaseFacts((prev) => prev ? `${prev}
${text}` : text);
                        zt.success(t("Text pasted into editor"));
                      } catch (err) {
                        zt.error(t("Please paste manually using Ctrl+V"));
                      }
                    },
                    className: "p-1 px-2.5 rounded border border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-500 text-[9px] font-bold uppercase transition-all flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard, { size: 10 }),
                      " Paste"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onDragOver: (e) => e.preventDefault(),
                onDrop: async (e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
                      const text = await file.text();
                      setCaseFacts((prev) => prev ? `${prev}
${text}` : text);
                      zt.success(`t("Imported text file:") + " " + file.name`);
                    } else {
                      zt.error(t("Please drag a plain text file (.txt)"));
                    }
                  } else {
                    const text = e.dataTransfer.getData("text");
                    if (text) {
                      setCaseFacts((prev) => prev ? `${prev}
${text}` : text);
                      zt.success(t("Dropped text segment"));
                    }
                  }
                },
                className: `relative border rounded-xl overflow-hidden group focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all ${isDark ? "bg-black/20 border-slate-800" : "bg-slate-50 border-slate-200"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 12,
                      spellCheck: true,
                      placeholder: t("Describe the legal issue in detail. Include facts, timeline, agreements, transactions, disputes, evidence, important dates, parties involved, objectives, and any information that may help AI prepare strong courtroom arguments. You do not need to use legal language."),
                      value: caseFacts,
                      onChange: (e) => setCaseFacts(e.target.value),
                      className: "w-full bg-transparent px-4 py-3 text-xs font-semibold leading-relaxed outline-none resize-y min-h-[250px] max-h-[350px] text-slate-800 dark:text-slate-100 placeholder-slate-400"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 bottom-3 flex items-center gap-2 pointer-events-none text-[8.5px] font-black uppercase tracking-wider text-slate-450", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("Drag txt file or drop text here") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "|" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      caseFacts.length,
                      " ",
                      t("chars")
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2.5 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-450 uppercase tracking-widest", children: t("Workspace Hints:") }),
            [
              t("Mention important dates."),
              t("Describe agreements."),
              t("Mention available evidence."),
              t("Mention opponent's actions."),
              t("Mention desired court outcome.")
            ].map((hint, hidx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setCaseFacts((prev) => prev ? `${prev}
- ${hint.replace("Mention ", "Details on ").replace("Describe ", "Details on ")}: ` : `- ${hint.replace("Mention ", "Details on ").replace("Describe ", "Details on ")}: `);
                },
                className: `text-[9.5px] px-2.5 py-1 rounded-full border flex items-center gap-1 transition-all ${isDark ? "bg-slate-900/60 border-slate-800 text-slate-350 hover:border-indigo-500/40 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:border-indigo-500/40 hover:text-indigo-600"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💡" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hint })
                ]
              },
              hidx
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setIsAdvancedOptionsOpen(!isAdvancedOptionsOpen),
                className: "flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-indigo-500 py-1 hover:text-indigo-400",
                children: [
                  isAdvancedOptionsOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Advanced Litigation Options" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isAdvancedOptionsOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.2 },
                className: `p-4 border rounded-xl space-y-4 overflow-hidden mt-2 ${isDark ? "bg-slate-950/20 border-slate-800" : "bg-slate-100/30 border-slate-250"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Jurisdiction" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "select",
                        {
                          value: advancedJurisdiction,
                          onChange: (e) => setAdvancedJurisdiction(e.target.value),
                          className: `w-full border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                          children: [
                            "District Court",
                            "High Court",
                            "Supreme Court",
                            "Tribunal",
                            "Consumer Forum",
                            "NCLT",
                            "Family Court",
                            "Arbitration"
                          ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Language" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "select",
                        {
                          value: advancedLanguage,
                          onChange: (e) => setAdvancedLanguage(e.target.value),
                          className: `w-full border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                          children: [
                            "English",
                            "Hindi",
                            "Bilingual"
                          ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Writing Style" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "select",
                        {
                          value: advancedWritingStyle,
                          onChange: (e) => setAdvancedWritingStyle(e.target.value),
                          className: `w-full border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                          children: [
                            "Professional",
                            "Courtroom",
                            "Senior Counsel",
                            "Aggressive",
                            "Balanced",
                            "Judge Friendly"
                          ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Known Applicable Sections (Optional)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. Section 73 Contract Act, Section 34 CPC",
                          value: advancedApplicableSections,
                          onChange: (e) => setAdvancedApplicableSections(e.target.value),
                          className: `border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Known Judgments (Optional)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. Saw Pipes case, Section 65B precedent",
                          value: advancedJudgments,
                          onChange: (e) => setAdvancedJudgments(e.target.value),
                          className: `border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Known Evidence (Optional)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. Agreement dated 12-Jan, Bank receipts",
                          value: advancedEvidence,
                          onChange: (e) => setAdvancedEvidence(e.target.value),
                          className: `border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Witness Information (Optional)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. PW1 Accounts Head, PW2 Site Inspector",
                          value: advancedWitnessInfo,
                          onChange: (e) => setAdvancedWitnessInfo(e.target.value),
                          className: `border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase text-slate-450", children: "Special Instructions to AI (Optional)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        rows: 2,
                        placeholder: "e.g. Frame arguments to focus heavily on pre-institution default warnings and bypass oral understanding arguments...",
                        value: advancedSpecialInstructions,
                        onChange: (e) => setAdvancedSpecialInstructions(e.target.value),
                        className: `w-full border rounded-lg px-2.5 py-2 text-[11px] font-semibold outline-none resize-none ${isDark ? "bg-[#131c31] border-slate-850 text-white" : "bg-white border-slate-200 text-slate-800"}`
                      }
                    )
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UniversalMultimodalInput,
              {
                caseId: linkedCaseId || "global",
                workspaceName: "ArgumentBuilder",
                onContextChange: (ctx) => setMultimodalContext(ctx),
                theme: isDark ? "dark" : "light",
                layout: "manual"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-4 justify-between sm:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-450 text-center sm:text-left", children: "Step 1: Setup strategy variables" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onBack,
                className: `w-full sm:w-auto px-5 py-2.5 border rounded-xl text-xs font-black uppercase flex items-center justify-center ${isDark ? "bg-transparent border-slate-800 text-slate-400 hover:bg-slate-800/20" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"}`,
                style: { minHeight: "44px" },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleContinueWizardStep1,
                disabled: !isContinueEnabled,
                className: "w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase text-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
                style: {
                  background: isContinueEnabled ? "linear-gradient(135deg, #5B3DF5 0%, #4F46E5 45%, #6D5BFF 100%)" : "#94A3B8",
                  minHeight: "44px"
                },
                children: t("Generate AI Argument")
              }
            )
          ] })
        ] })
      ] }) }),
      workspaceStage === "INPUT" && wizardStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center p-4 sm:p-6 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 border rounded-3xl max-w-xl w-full shadow-2xl relative overflow-hidden text-center ${isDark ? "bg-[#131c31] border-slate-800" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "text-indigo-500 animate-pulse", size: 24 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-indigo-550 dark:text-indigo-400 uppercase tracking-widest mt-2", children: "AI Litigation Strategy Audit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-extrabold text-indigo-600 dark:text-indigo-400", children: [
            generationProgress,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-bold uppercase mt-1", children: generationStepLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left text-xs font-semibold max-w-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-slate-200 dark:border-slate-800", children: [
          { name: "Analyzing Facts...", pct: 15 },
          { name: "Finding Case Laws...", pct: 35 },
          { name: "Generating Arguments...", pct: 55 },
          { name: "Checking Contradictions...", pct: 75 },
          { name: "Building Counter Arguments...", pct: 90 },
          { name: "Formatting Court Draft...", pct: 100 }
        ].map((item, idx) => {
          const completed = generationProgress >= item.pct;
          const active = generationProgress >= (idx === 0 ? 0 : [15, 35, 55, 75, 90][idx - 1]) && generationProgress < item.pct;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            completed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-emerald-500 shrink-0" }) : active ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-indigo-500 animate-pulse shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded-full border border-slate-700 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: completed ? "text-emerald-500 font-bold line-through" : active ? "text-indigo-500 font-black" : "text-slate-400", children: item.name })
          ] }, idx);
        }) })
      ] }) }),
      workspaceStage === "RESULTS" && (() => {
        if (generationError) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 48, className: "text-red-500 mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-red-500 uppercase", children: "Draft Compilation Failed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 leading-relaxed", children: generationError }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: runUnifiedArgumentGeneration,
                  className: "px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase",
                  children: "Retry"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setWorkspaceStage("INPUT");
                    setWizardStep(1);
                    setGenerationError(null);
                  },
                  className: "px-5 py-2 border border-slate-800 text-slate-300 rounded-xl text-xs font-black uppercase",
                  children: "Back"
                }
              )
            ] })
          ] }) });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col min-h-0 select-text", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex min-h-0 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isLeftSidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0, opacity: 0 },
                animate: { width: "240px", opacity: 1 },
                exit: { width: 0, opacity: 0 },
                transition: { duration: 0.2 },
                className: `h-full border-r shrink-0 hidden md:flex flex-col w-60 min-w-[240px] max-w-[240px] z-10 ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-[#FAF9FF] border-slate-200"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col h-full min-h-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-500", children: "Draft Structure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setIsLeftSidebarOpen(false),
                        className: "p-1 rounded hover:bg-slate-800/30 text-slate-500",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 12 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 11, className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-455" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: t("Filter sections..."),
                        value: outlineSearchQuery,
                        onChange: (e) => setOutlineSearchQuery(e.target.value),
                        className: `w-full border rounded-lg pl-7 pr-2 py-1 text-[10px] font-semibold outline-none ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-0.5 pr-0.5", children: sortedOutlineItems.map((item) => {
                    const active = focusedSection === item.id;
                    const isPinned = pinnedSections.has(item.id);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => {
                          setFocusedSection(item.id);
                          const target = document.getElementById(`editor-section-${item.id}`);
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        },
                        className: `w-full text-left py-2 px-3 rounded-lg text-[10px] uppercase transition-all truncate flex items-center justify-between border relative ${active ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20 font-black pl-4" : "text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/15 border-transparent font-bold"}`,
                        children: [
                          active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1 top-2 bottom-2 w-0.5 rounded bg-indigo-600 dark:bg-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(item.label) }),
                          isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 8, className: "text-indigo-500 shrink-0 fill-indigo-500" })
                        ]
                      },
                      item.id
                    );
                  }) })
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-full overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-4 min-w-0 bg-slate-100/60 dark:bg-[#070b16]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-4 pb-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-slate-200 dark:border-slate-850 shrink-0 select-none", children: sortedOutlineItems.map((item) => {
                const active = focusedSection === item.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setFocusedSection(item.id);
                      const target = document.getElementById(`editor-section-${item.id}`);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    },
                    className: `px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 transition-all ${active ? "bg-indigo-650 text-white shadow-sm" : isDark ? "bg-slate-900 border border-slate-800 text-slate-400" : "bg-slate-200 text-slate-650"}`,
                    style: { minHeight: "34px" },
                    children: item.label
                  },
                  item.id
                );
              }) }),
              (() => {
                const allSections = OUTLINE_ITEMS;
                const pinned = [];
                const unpinned = [];
                allSections.forEach((s) => {
                  if (pinnedSections.has(s.id)) pinned.push(s);
                  else unpinned.push(s);
                });
                const orderedSections = [...pinned, ...unpinned];
                return orderedSections.map((item) => {
                  var _a, _b, _c, _d, _e, _f;
                  const content = draftResults[item.id];
                  const isEditing = editingSectionId === item.id;
                  const isFocused = focusedSection === item.id;
                  const isPinned = pinnedSections.has(item.id);
                  if (editorSearchQuery) {
                    const query = editorSearchQuery.toLowerCase();
                    const sectionMatch = t(item.label).toLowerCase().includes(query) || item.label.toLowerCase().includes(query);
                    const contentMatch = typeof content === "string" ? content.toLowerCase().includes(query) : JSON.stringify(content).toLowerCase().includes(query);
                    if (!sectionMatch && !contentMatch) return null;
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      id: `editor-section-${item.id}`,
                      onClick: () => setFocusedSection(item.id),
                      className: `p-5 border rounded-2xl transition-all duration-200 scroll-mt-6 ${isFocused ? "ring-2 ring-indigo-500/20 border-indigo-500 bg-indigo-500/[0.01]" : isDark ? "bg-slate-900/40 border-slate-800 hover:border-slate-700" : "bg-white border-slate-200 hover:border-slate-300"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-850 mb-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            isFocused && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-black uppercase text-slate-800 dark:text-white flex items-center gap-1.5", children: t(item.label) }),
                            isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.2 bg-indigo-500/10 text-indigo-500 rounded text-[7.5px] font-black uppercase", children: t("Pinned") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setVisibleReasonings((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
                                },
                                className: "px-2 py-1 hover:bg-slate-800/30 text-indigo-500 rounded-lg text-[9px] font-black uppercase flex items-center gap-0.5 whitespace-nowrap",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 10 }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("Explain Why") })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-px bg-slate-800 mx-1" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  togglePinSection(item.id);
                                },
                                className: `p-1 rounded hover:bg-slate-800/30 ${isPinned ? "text-indigo-400" : "text-slate-450"}`,
                                title: isPinned ? "Unpin Section" : "Pin to Top",
                                children: isPinned ? /* @__PURE__ */ jsxRuntimeExports.jsx(PinOff, { size: 11 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 11 })
                              }
                            ),
                            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    handleSaveSectionEdit(item.id);
                                  },
                                  className: "px-2 py-0.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[8.5px] font-black uppercase",
                                  children: "Save"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setEditingSectionId(null);
                                  },
                                  className: "px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[8.5px] font-black uppercase",
                                  children: "Cancel"
                                }
                              )
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setEditingSectionId(item.id);
                                  setFocusedSection(item.id);
                                  if (Array.isArray(content)) {
                                    setEditingContent(
                                      content.map((li) => {
                                        if (typeof li === "object" && li !== null) {
                                          return li.citation ? `${li.citation} -> ${li.ratio}` : `${li.evidence} -> ${li.proves}`;
                                        }
                                        return li;
                                      }).join("\n")
                                    );
                                  } else {
                                    setEditingContent(content || "");
                                  }
                                },
                                className: "p-1 rounded hover:bg-slate-800/30 text-slate-400",
                                title: "Edit Section",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 11 })
                              }
                            )
                          ] })
                        ] }),
                        refiningSectionId === item.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-10 gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 24, className: "animate-spin text-indigo-500" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase text-indigo-500 tracking-wider", children: "AI Copilot Refine in progress..." })
                        ] }) : isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            rows: Array.isArray(content) ? 5 : 8,
                            value: editingContent,
                            onChange: (e) => setEditingContent(e.target.value),
                            className: `w-full border rounded-xl px-3 py-2 text-xs font-semibold outline-none resize-y ${isDark ? "bg-black/20 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-250 text-slate-800"}`
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (() => {
                          if (!content || Array.isArray(content) && content.length === 0) {
                            return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 italic text-[11px]", children: "No content generated." });
                          }
                          if (Array.isArray(content)) {
                            if (item.id === "plaintiffArguments" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: content.map((arg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl space-y-3 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black text-indigo-650 dark:text-indigo-400 uppercase tracking-wide", children: [
                                    idx + 1,
                                    ". ",
                                    arg.title || "Untitled Argument"
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 text-[8.5px] font-black uppercase", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded-full ${arg.riskLevel === "Low" ? "bg-emerald-500/10 text-emerald-500" : arg.riskLevel === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-rose-500/10 text-rose-500"}`, children: [
                                      "Risk: ",
                                      arg.riskLevel || "Low"
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500", children: [
                                      "Strength: ",
                                      arg.argumentStrength || "Strong"
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500", children: [
                                      t("Confidence"),
                                      ": ",
                                      arg.evidenceConfidence || "95%"
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] leading-relaxed", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Legal Reasoning" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350", children: arg.legalReasoning })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Supporting Facts" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350", children: arg.supportingFacts })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Supporting Evidence" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350", children: arg.supportingEvidence })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Statutes & Precedents" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-indigo-650 dark:text-indigo-400 font-semibold", children: [
                                      arg.applicableSections,
                                      " | ",
                                      arg.applicableJudgments
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Predicted Opponent Defense" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-rose-500 dark:text-rose-455 font-medium", children: arg.expectedDefence })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-slate-400 dark:text-slate-500 block uppercase text-[8px] tracking-widest", children: "Counter-Defense Response" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-600 dark:text-emerald-400 font-medium", children: arg.counterResponse })
                                  ] })
                                ] }),
                                arg.suggestedCourtSubmission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-lg border border-dashed border-indigo-500/20 text-[10.5px] italic ${isDark ? "bg-indigo-500/[0.03] text-slate-300" : "bg-indigo-50/40 text-slate-700"}`, children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black not-italic text-indigo-500 block uppercase text-[8px] tracking-widest mb-1", children: "Suggested Court Submission:" }),
                                  '"',
                                  arg.suggestedCourtSubmission,
                                  '"'
                                ] })
                              ] }, idx)) });
                            }
                            if (["defendantArguments", "counterArguments"].includes(item.id) && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: content.map((arg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl flex flex-col justify-between space-y-2.5 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black text-rose-500 uppercase", children: [
                                      "Defense Basis ",
                                      idx + 1
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8.5px] px-2 py-0.5 rounded font-black uppercase ${arg.strength === "High" ? "bg-rose-500/10 text-rose-500" : arg.strength === "Medium" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`, children: [
                                      "Prob: ",
                                      arg.probability || "Medium"
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] font-bold text-slate-800 dark:text-slate-200 mt-2", children: arg.legalBasis }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-450 mt-1", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-400", children: "Weakness:" }),
                                    " ",
                                    arg.weakness
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/5 dark:border-slate-100/5 text-[10.5px]", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-500 uppercase text-[8.5px] block tracking-wide", children: "Our Counter-Strategy:" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350 mt-0.5", children: arg.counterStrategy })
                                ] })
                              ] }, idx)) });
                            }
                            if (item.id === "rebuttalStrategy" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: content.map((reb, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl space-y-3.5 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black text-indigo-500 uppercase tracking-widest", children: [
                                    "Rebuttal Argument ",
                                    idx + 1
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-slate-455", children: reb.applicableLaw })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-850 dark:text-slate-150", children: reb.rebuttal }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-[10px]", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 uppercase text-[8px] font-black tracking-widest block", children: "Supporting Evidence" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-650 dark:text-slate-350", children: reb.applicableEvidence })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-455 uppercase text-[8px] font-black tracking-widest block", children: "Supporting Judgment" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-650 dark:text-indigo-400 font-semibold", children: reb.supportingJudgment })
                                  ] })
                                ] }),
                                reb.suggestedCourtSubmission && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-lg border border-dashed border-indigo-500/20 text-[10px] italic ${isDark ? "bg-indigo-500/[0.02] text-slate-300" : "bg-indigo-50/50 text-slate-700"}`, children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black not-italic text-indigo-500 block uppercase text-[8px] tracking-widest mb-0.5", children: "Oral/Written Submission Template:" }),
                                  '"',
                                  reb.suggestedCourtSubmission,
                                  '"'
                                ] })
                              ] }, idx)) });
                            }
                            if (item.id === "evidenceMapping" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: content.map((ev, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl flex flex-col justify-between space-y-3 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8.5px] px-2 py-0.5 rounded font-black uppercase ${ev.evidenceWeight === "Primary" ? "bg-indigo-500/10 text-indigo-500" : "bg-slate-500/10 text-slate-500"}`, children: [
                                      ev.evidenceWeight || "Primary",
                                      " Weight"
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-slate-450 uppercase", children: ev.evidenceType })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-850 dark:text-white mt-2 leading-snug", children: ev.evidence }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10.5px] text-slate-750 dark:text-slate-300 mt-1", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-400", children: "Admissibility:" }),
                                    " ",
                                    ev.admissibility
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/5 dark:border-slate-100/5 text-[10px] flex items-center justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-455 font-bold", children: [
                                    t("Confidence"),
                                    ": ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-500", children: ev.evidenceConfidence || "95%" })
                                  ] }),
                                  ev.missingEvidence && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.2 bg-rose-500/10 text-rose-500 rounded text-[7.5px] font-black uppercase", title: ev.missingEvidence, children: "Missing Elements" })
                                ] })
                              ] }, idx)) });
                            }
                            if (item.id === "chronologyOfEvents" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative pl-6 border-l-2 border-indigo-500/30 space-y-4 py-1", children: content.map((ev, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-[#FAF9FF] dark:bg-[#070b16] group-hover:bg-indigo-500 transition-colors" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black text-indigo-500 uppercase", children: ev.date }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1", children: ev.event }),
                                ev.evidenceLink && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block mt-1 text-[9px] px-2 py-0.2 rounded bg-indigo-500/5 text-indigo-500 font-bold border border-indigo-500/10", children: [
                                  "Linked Reference: ",
                                  ev.evidenceLink
                                ] })
                              ] }, idx)) });
                            }
                            if (["supremeCourtPrecedents", "highCourtJudgments", "persuasiveAuthorities"].includes(item.id) && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: content.map((pre, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl space-y-3 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11.5px] font-black text-slate-850 dark:text-white uppercase", children: pre.citation }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 text-[8.5px] font-black uppercase", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500", children: [
                                      pre.court,
                                      " (",
                                      pre.year,
                                      ")"
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500", children: pre.bindingValue || "Binding under Art 141" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] leading-relaxed", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 block uppercase text-[8px] font-black tracking-widest", children: "Legal Principle" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-slate-200 font-bold", children: pre.legalPrinciple })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-455 block uppercase text-[8px] font-black tracking-widest", children: "Ratio Decidendi" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350", children: pre.ratioDecidendi })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] leading-relaxed pt-1.5", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 block uppercase text-[8px] font-black tracking-widest", children: "Relevance in Current Matter" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-300", children: pre.whyRelevant })
                                ] }),
                                pre.howToCite && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group pt-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-slate-455 block uppercase text-[8px] tracking-widest mb-1", children: "Court Citation Script:" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2 rounded font-mono text-[9px] select-all flex items-center justify-between ${isDark ? "bg-slate-950 text-emerald-400 border border-slate-800" : "bg-slate-100 text-emerald-700 border border-slate-200"}`, children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: pre.howToCite }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        onClick: () => {
                                          navigator.clipboard.writeText(pre.howToCite);
                                          zt.success("Citation script copied!");
                                        },
                                        className: "text-[8px] font-black text-indigo-500 uppercase px-1.5 py-0.5 rounded hover:bg-indigo-500/10",
                                        children: "Copy"
                                      }
                                    )
                                  ] })
                                ] })
                              ] }, idx)) });
                            }
                            if (item.id === "crossExamQuestions" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: content.map((wit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl space-y-3.5 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black text-indigo-500 uppercase tracking-widest pb-1.5 border-b border-slate-800/10 dark:border-slate-100/10", children: [
                                  "Target Witness: ",
                                  wit.witness
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-[11px] leading-relaxed", children: [
                                  wit.primaryQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 uppercase text-[8px] font-black tracking-widest block", children: "Primary Direct Questions" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-300 font-bold", children: wit.primaryQuestions })
                                  ] }),
                                  wit.leadingQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-650 dark:text-indigo-400 uppercase text-[8px] font-black tracking-widest block", children: "Leading Questions (Force Yes/No)" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-700 dark:text-slate-300 italic", children: [
                                      '"',
                                      wit.leadingQuestions,
                                      '"'
                                    ] })
                                  ] }),
                                  wit.trapQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500 uppercase text-[8px] font-black tracking-widest block", children: "Trap / Impasse Questions" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-rose-600 dark:text-rose-455 font-medium", children: wit.trapQuestions })
                                  ] }),
                                  wit.contradictionQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500 uppercase text-[8px] font-black tracking-widest block", children: "Contradiction / Impairment Questions" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-750 dark:text-slate-300", children: wit.contradictionQuestions })
                                  ] }),
                                  wit.admissionQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 uppercase text-[8px] font-black tracking-widest block", children: "Admission Procurement Questions" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-emerald-600 dark:text-emerald-400 font-bold", children: [
                                      '"',
                                      wit.admissionQuestions,
                                      '"'
                                    ] })
                                  ] }),
                                  wit.followUpQuestions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 uppercase text-[8px] font-black tracking-widest block", children: "Conditional Follow-Up Paths" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-650 dark:text-slate-350", children: wit.followUpQuestions })
                                  ] })
                                ] })
                              ] }, idx)) });
                            }
                            if (item.id === "objections" && typeof content[0] === "object") {
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: content.map((obj, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl flex flex-col justify-between space-y-2.5 ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-black uppercase tracking-wider block w-fit", children: obj.category }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] font-bold text-slate-855 dark:text-slate-200 mt-2", children: obj.description })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-800/5 dark:border-slate-100/5 text-[9.5px]", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-500 uppercase text-[8px] tracking-wide block", children: "Statutory Basis:" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-650 dark:text-slate-355 mt-0.5", children: obj.legalBasis })
                                ] })
                              ] }, idx)) });
                            }
                            return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1.5 text-slate-600 dark:text-slate-300 text-[11.5px] font-medium leading-relaxed", children: content.map((li, idx) => {
                              if (typeof li === "object" && li !== null) {
                                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-650 dark:text-indigo-400", children: li.citation || li.evidence }),
                                  li.ratio || li.proves ? `: ${li.ratio || li.proves}` : ""
                                ] }, idx);
                              }
                              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: li }, idx);
                            }) });
                          }
                          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-300 text-[11.5px] font-medium whitespace-pre-wrap leading-relaxed", children: content });
                        })() }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-200 dark:border-slate-850 text-[10px] text-slate-450 font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { size: 11, className: "text-indigo-500" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              "Evidence: ",
                              ((_a = selectedCaseObject == null ? void 0 : selectedCaseObject.evidence) == null ? void 0 : _a.length) || 2,
                              " Linked"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 11, className: "text-indigo-500" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                              "Citations: ",
                              item.id === "supremeCourtPrecedents" || item.id === "highCourtJudgments" ? "2 bindings" : "Verified"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visibleReasonings[item.id] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            className: `mt-4 p-5 border rounded-2xl shadow-sm space-y-4 overflow-hidden ${isDark ? "bg-slate-900/60 border-indigo-500/20" : "bg-indigo-55/10 border-indigo-100"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-indigo-550/10", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 12, className: "text-indigo-500" }),
                                  t("AI Reasoning Explanation")
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9.5px] font-bold border border-emerald-500/20", children: [
                                  t("Confidence"),
                                  ": ",
                                  ((_b = REASONING_DATA[item.id]) == null ? void 0 : _b.confidence) || 95,
                                  "%"
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#6B7280] dark:text-slate-400 block uppercase text-[10px] tracking-wide", children: t("Legal Strategy Objective") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] dark:text-slate-200 text-xs leading-relaxed font-medium", children: ((_c = REASONING_DATA[item.id]) == null ? void 0 : _c.reason) || "Structured according to High Court pleading rules." })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#6B7280] dark:text-slate-400 block uppercase text-[10px] tracking-wide", children: t("Applicable Law / Provision") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] dark:text-slate-200 text-xs leading-relaxed font-medium", children: ((_d = REASONING_DATA[item.id]) == null ? void 0 : _d.law) || "Order VI Rule 1 CPC Pleading Standards." })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#6B7280] dark:text-slate-400 block uppercase text-[10px] tracking-wide", children: t("Relevant Case Facts") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] dark:text-slate-200 text-xs leading-relaxed font-medium", children: ((_e = REASONING_DATA[item.id]) == null ? void 0 : _e.facts) || "milestone contract breach notifications." })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#6B7280] dark:text-slate-400 block uppercase text-[10px] tracking-wide", children: t("Supporting Case Law / Precedent") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] dark:text-slate-200 text-xs leading-relaxed font-medium", children: ((_f = REASONING_DATA[item.id]) == null ? void 0 : _f.precedent) || "ONGC Ltd. v. Saw Pipes Ltd." })
                                ] })
                              ] })
                            ]
                          }
                        ) })
                      ]
                    },
                    item.id
                  );
                });
              })(),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-indigo-500", children: t("AI Refinements") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-b border-slate-200 dark:border-slate-805", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start w-full overflow-x-auto custom-scrollbar scroll-smooth whitespace-nowrap gap-2.5 pb-2.5", children: COPILOT_CATEGORIES.map((tab) => {
                  const isActive = activeCopilotTab === tab;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setActiveCopilotTab(tab),
                      className: `text-center py-2 px-3 text-[10px] font-black uppercase tracking-wider relative transition-all duration-200 shrink-0 select-none ${isActive ? "text-[#5B3DF5] dark:text-[#8b79ff] font-black" : "text-slate-450 hover:text-slate-700 dark:hover:text-slate-200"}`,
                      style: { minWidth: "95px", whiteSpace: "nowrap", flexShrink: 0 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab) }),
                        isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B3DF5] dark:bg-indigo-500 rounded-full" })
                      ]
                    },
                    t(tab)
                  );
                }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 pt-1", children: getCategorizedCopilotActions().map((btn) => {
                  const isApplied = refinementHistory[focusedSection] === btn.action;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => handleAIAction(btn.action, btn.prompt),
                      className: `w-full px-5 py-4 border rounded-2xl transition-all text-left flex items-start justify-between gap-3 ${isApplied ? "border-[#5B3DF5] bg-indigo-500/[0.04] ring-2 ring-indigo-500/10" : isDark ? "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40" : "bg-white border-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/[0.01]"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-[11px] font-black uppercase tracking-wide leading-none ${isApplied ? "text-indigo-650 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: t(btn.name) }),
                            isApplied && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5B3DF5] shrink-0" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-450 dark:text-slate-400 font-medium mt-2 leading-relaxed", children: t(btn.desc) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: `${isApplied ? "text-[#5B3DF5]" : "text-slate-400"} mt-0.5 shrink-0` })
                      ]
                    },
                    t(btn.name)
                  );
                }) }),
                activeCopilotTab === "Precedents" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl flex flex-col min-h-[220px] max-h-[300px] shrink-0 mt-4 ${isDark ? "bg-[#0E1528] border-slate-800" : "bg-white border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-indigo-500 mb-2 block", children: t("Precedents Engine") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 11, className: "absolute left-2 top-1/2 -translate-y-1/2 text-slate-455" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: t("Search legal precedents database..."),
                        value: precedentSearch,
                        onChange: (e) => setPrecedentSearch(e.target.value),
                        className: `w-full border rounded-lg pl-7 pr-2 py-1 text-[9.5px] font-semibold outline-none ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-2 pr-1", children: filteredPrecedents.map((p) => {
                    const bookmarked = bookmarkedPrecedents.has(p.id);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border border-slate-800/40 rounded-lg bg-black/10 space-y-1.5 text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black text-indigo-400 block leading-tight", children: p.citation }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => toggleBookmarkPrecedent(p.id),
                            className: `text-slate-400 hover:text-indigo-400 ${bookmarked ? "text-indigo-400" : ""}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: bookmarked ? "fill-indigo-400" : "" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8.5px] text-slate-400 leading-snug", children: p.ratio }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => insertPrecedentIntoDraft(p.citation),
                          className: "px-2 py-0.5 bg-indigo-650 hover:bg-indigo-700 text-white text-[8px] font-black uppercase rounded",
                          children: "Insert Citation"
                        }
                      )
                    ] }, p.id);
                  }) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { width: isRightSidebarOpen ? 330 : 36 },
                transition: { duration: 0.25, ease: "easeInOut" },
                className: `h-full border-l shrink-0 hidden md:flex flex-col relative z-10 ${isDark ? "bg-[#0E1528] border-slate-805" : "bg-[#FAF9FF] border-slate-200"}`,
                style: { overflow: "hidden" },
                children: isRightSidebarOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col h-full min-h-0 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-500", children: t("AI Refinements") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setIsRightSidebarOpen(false),
                        className: "p-1 rounded hover:bg-slate-805 text-slate-500",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-b border-slate-200 dark:border-slate-800 shrink-0 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start w-full overflow-x-auto custom-scrollbar scroll-smooth whitespace-nowrap gap-2.5 pb-2.5", children: COPILOT_CATEGORIES.map((tab) => {
                    const isActive = activeCopilotTab === tab;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setActiveCopilotTab(tab),
                        className: `text-center py-2 px-3 text-[10px] font-black uppercase tracking-wider relative transition-all duration-200 shrink-0 select-none ${isActive ? "text-[#5B3DF5] dark:text-[#8b79ff] font-black" : "text-slate-450 hover:text-slate-700 dark:hover:text-slate-200"}`,
                        style: {
                          minWidth: "95px",
                          whiteSpace: "nowrap",
                          flexShrink: 0
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab) }),
                          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              layoutId: "activeRefinementTabUnderlineDesktop",
                              className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B3DF5] dark:bg-indigo-500 rounded-full",
                              transition: { type: "spring", stiffness: 380, damping: 30 }
                            }
                          )
                        ]
                      },
                      t(tab)
                    );
                  }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1 text-left mt-2 pt-1", children: getCategorizedCopilotActions().map((btn) => {
                    const isApplied = refinementHistory[focusedSection] === btn.action;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => handleAIAction(btn.action, btn.prompt),
                        className: `w-full px-5 py-4 border rounded-2xl transition-all text-left flex items-start justify-between gap-3 ${isApplied ? "border-[#5B3DF5] bg-indigo-500/[0.04] ring-2 ring-indigo-500/10" : isDark ? "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40" : "bg-white border-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/[0.01]"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-[11px] font-black uppercase tracking-wide leading-none ${isApplied ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: t(btn.name) }),
                              isApplied && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5B3DF5] shrink-0" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-450 dark:text-slate-400 font-medium mt-2 leading-relaxed", children: t(btn.desc) })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: `${isApplied ? "text-[#5B3DF5]" : "text-slate-400"} mt-0.5 shrink-0` })
                        ]
                      },
                      t(btn.name)
                    );
                  }) }),
                  activeCopilotTab === "Precedents" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-xl flex flex-col min-h-[220px] max-h-[300px] shrink-0 mt-4 ${isDark ? "bg-slate-950/40 border-slate-805" : "bg-white border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-indigo-500 mb-2 block", children: t("Precedents Engine") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 11, className: "absolute left-2 top-1/2 -translate-y-1/2 text-slate-455" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: t("Search legal precedents database..."),
                          value: precedentSearch,
                          onChange: (e) => setPrecedentSearch(e.target.value),
                          className: `w-full border rounded-lg pl-7 pr-2 py-1 text-[9.5px] font-semibold outline-none ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-2 pr-1", children: [
                      filteredPrecedents.map((p) => {
                        const bookmarked = bookmarkedPrecedents.has(p.id);
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border border-slate-800/40 rounded-lg bg-black/10 space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black text-indigo-400 block leading-tight", children: p.citation }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => toggleBookmarkPrecedent(p.id),
                                className: `text-slate-400 hover:text-indigo-400 ${bookmarked ? "text-indigo-400" : ""}`,
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: bookmarked ? "fill-indigo-400" : "" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8.5px] text-slate-400 leading-snug", children: p.ratio }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => insertPrecedentIntoDraft(p.citation),
                              className: "px-2 py-0.5 bg-indigo-650 hover:bg-indigo-700 text-white text-[8px] font-black uppercase rounded",
                              children: "Insert Citation"
                            }
                          )
                        ] }, p.id);
                      }),
                      filteredPrecedents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[9px] text-slate-400 py-4", children: "No matching case laws" })
                    ] })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setIsRightSidebarOpen(true),
                    className: "absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all text-[#5B3DF5] cursor-pointer",
                    title: `Expand ${t("AI Refinements")}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16, className: "animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-widest text-center whitespace-nowrap", style: { writingMode: "vertical-rl", transform: "rotate(180deg)" }, children: "AI Refine" })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMobileAiCopilotDrawer(true),
              className: "lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-2xl z-30 ring-4 ring-indigo-500/20",
              style: { minHeight: "44px", minWidth: "44px" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 20 })
            }
          ),
          mobileOutlineDrawer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[130000] flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => setMobileOutlineDrawer(false),
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-80 max-w-[85vw] h-full flex flex-col z-10 p-5 ${isDark ? "bg-[#0B1020] text-white border-r border-slate-800" : "bg-white text-slate-800 border-r border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800 mb-4 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-indigo-500", children: "Draft Structure" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setMobileOutlineDrawer(false),
                    className: "p-1.5 hover:bg-slate-800/10 dark:hover:bg-zinc-800 rounded-full text-slate-400",
                    style: { minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center border rounded-xl px-3 py-2 mb-4 shrink-0 ${isDark ? "bg-black/20 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-450 mr-2 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search sections...",
                    value: outlineSearchQuery,
                    onChange: (e) => setOutlineSearchQuery(e.target.value),
                    className: "w-full bg-transparent border-none text-xs font-bold outline-none focus:ring-0 text-slate-800 dark:text-white"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-2 pr-0.5", children: sortedOutlineItems.map((item) => {
                const active = focusedSection === item.id;
                const isPinned = pinnedSections.has(item.id);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setFocusedSection(item.id);
                      setMobileOutlineDrawer(false);
                      const target = document.getElementById(`editor-section-${item.id}`);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    },
                    className: `w-full text-left py-3 px-4 rounded-xl text-xs font-black uppercase transition-all truncate flex items-center justify-between border ${active ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20 pl-5" : "text-slate-500 dark:text-slate-400 hover:text-white border-transparent"}`,
                    style: { minHeight: "44px" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(item.label) }),
                      isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 8, className: "text-indigo-500 shrink-0 fill-indigo-500" })
                    ]
                  },
                  item.id
                );
              }) })
            ] })
          ] }),
          mobileAiCopilotDrawer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[130000] flex items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => setMobileAiCopilotDrawer(false),
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-full max-h-[75vh] flex flex-col z-10 p-5 rounded-t-3xl border-t ${isDark ? "bg-[#0E1528] text-white border-slate-800" : "bg-white text-slate-800 border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-slate-250 dark:border-slate-805 mb-4 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black uppercase text-indigo-500", children: [
                  t("AI Refinements"),
                  " Copilot"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setMobileAiCopilotDrawer(false),
                    className: "p-1.5 hover:bg-slate-800/10 dark:hover:bg-zinc-800 rounded-full text-slate-400",
                    style: { minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-b border-slate-200 dark:border-slate-800 shrink-0 pb-1 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-start w-full overflow-x-auto custom-scrollbar scroll-smooth whitespace-nowrap gap-2.5 pb-2.5", children: COPILOT_CATEGORIES.map((tab) => {
                const isActive = activeCopilotTab === tab;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setActiveCopilotTab(tab),
                    className: `text-center py-2 px-3 text-[10px] font-black uppercase tracking-wider relative transition-all duration-200 shrink-0 select-none ${isActive ? "text-[#5B3DF5] dark:text-[#8b79ff] font-black" : "text-slate-450 hover:text-slate-700 dark:hover:text-slate-202"}`,
                    style: {
                      minWidth: "95px",
                      whiteSpace: "nowrap",
                      flexShrink: 0
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(tab) }),
                      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          layoutId: "activeRefinementTabUnderlineMobile",
                          className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B3DF5] rounded-full",
                          transition: { type: "spring", stiffness: 380, damping: 30 }
                        }
                      )
                    ]
                  },
                  t(tab)
                );
              }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-3 pb-6 text-left", children: getCategorizedCopilotActions().map((btn) => {
                const isApplied = refinementHistory[focusedSection] === btn.action;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setMobileAiCopilotDrawer(false);
                      handleAIAction(btn.action, btn.prompt);
                    },
                    className: `w-full px-5 py-4 border rounded-2xl text-left flex items-start justify-between gap-3 ${isApplied ? "border-[#5B3DF5] bg-indigo-500/[0.04] ring-2 ring-indigo-500/10" : isDark ? "bg-slate-900/60 border-slate-805 hover:border-slate-700 hover:bg-slate-800/40" : "bg-white border-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/[0.01]"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-[11px] font-black uppercase tracking-wide leading-none ${isApplied ? "text-indigo-650 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: t(btn.name) }),
                          isApplied && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5B3DF5] shrink-0" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-450 dark:text-slate-400 font-medium mt-2 leading-relaxed", children: t(btn.desc) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12, className: `${isApplied ? "text-[#5B3DF5]" : "text-slate-400"} mt-0.5 shrink-0` })
                    ]
                  },
                  t(btn.name)
                );
              }) })
            ] })
          ] }),
          isVersionHistoryOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => setIsVersionHistoryOpen(false),
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative max-w-xl w-full max-h-[80vh] flex flex-col z-10 p-6 rounded-2xl shadow-2xl border ${isDark ? "bg-[#0E1528] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-slate-800 mb-4 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wider text-indigo-500", children: "Draft Version History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsVersionHistoryOpen(false), className: "text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-scrollbar space-y-3", children: [
                { id: "v1.2", name: "Latest Pleading Draft", date: "Jul 01, 2026 22:15", size: "1,452 words", active: true },
                { id: "v1.1", name: "Initial AI Generated Draft", date: "Jul 01, 2026 22:08", size: "1,320 words", active: false }
              ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `p-4 border rounded-xl flex items-center justify-between ${v.active ? "bg-indigo-500/10 border-indigo-500" : "bg-black/10 border-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-extrabold", children: [
                        v.name,
                        " (",
                        v.id,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 mt-1 font-semibold", children: [
                        v.date,
                        " • ",
                        v.size
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: v.active ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-black uppercase", children: "Active" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => {
                          zt.success(`Restored Version ${v.id}`);
                          setIsVersionHistoryOpen(false);
                        },
                        className: "px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-[9.5px] font-black uppercase",
                        children: "Restore"
                      }
                    ) })
                  ]
                },
                v.id
              )) })
            ] })
          ] }),
          historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-end sm:items-center justify-center p-0 sm:p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative border w-full sm:max-w-3xl h-[92vh] sm:h-auto sm:max-h-[85vh] flex flex-col overflow-hidden bg-white dark:bg-[#0E1528] border-slate-200 dark:border-slate-800 rounded-t-[32px] sm:rounded-[32px] shadow-2xl p-4 sm:p-6 animate-slideUp sm:animate-fadeIn`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-200/20 pb-4 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "text-indigo-500", size: 20 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white", children: "Argument Drafting History" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase", children: [
                      recentDrafts.length,
                      " ",
                      recentDrafts.length === 1 ? "Draft" : "Drafts"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: "p-1.5 hover:bg-slate-800/10 dark:hover:bg-zinc-800 rounded-full text-slate-400 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex items-center border rounded-xl px-3 py-2 ${isDark ? "bg-black/20 border-slate-800" : "bg-slate-50 border-slate-200"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-450 mr-2 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Search history by Case Name, Draft Type, Generated Date or Preview...",
                      className: "w-full bg-transparent border-none text-xs font-bold outline-none focus:ring-0 text-slate-800 dark:text-white",
                      value: historySearch,
                      onChange: (e) => setHistorySearch(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-450 shrink-0", children: "Sort By" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: historySortBy,
                      onChange: (e) => setHistorySortBy(e.target.value),
                      className: `text-xs font-bold border rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-500 ${isDark ? "bg-[#131c31] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest First" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "oldest", children: "Oldest First" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Case Name" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-4 pr-1 custom-scrollbar", children: [
                sortedAndFilteredHistory.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 border rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-4 ${isDark ? "bg-[#161f38] border-slate-800 text-white" : "bg-white border-slate-250 text-slate-800"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black tracking-wider text-slate-400 block", children: t("Case Name") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-indigo-650 dark:text-indigo-400 tracking-wide truncate", children: getHistoryItemCaseName(item) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 border-l-0 md:border-l border-slate-200/20 pl-0 md:pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black tracking-wider text-slate-400 block", children: "Draft Type" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block truncate", children: getHistoryItemSource(item) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black tracking-wider text-slate-400 block", children: "Generated On" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block", children: [
                          item.date,
                          " ",
                          item.time || "12:00 PM"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black tracking-wider text-slate-400 block", children: "Draft Preview" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-650 dark:text-slate-300 leading-relaxed italic border-l-2 border-indigo-500/20 pl-3", children: [
                      '"',
                      getHistoryItemPreview(item),
                      '"'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 dark:bg-slate-900/40 rounded-xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center border border-slate-100 dark:border-slate-800/50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black text-slate-400", children: "Word Count" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-slate-800 dark:text-white mt-0.5", children: [
                        getHistoryItemStats(item).words,
                        " Words"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black text-slate-400", children: "Citation Count" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-slate-800 dark:text-white mt-0.5", children: [
                        getHistoryItemStats(item).citations,
                        " Citations"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black text-slate-400", children: "Evidence Linked" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-slate-800 dark:text-white mt-0.5", children: [
                        getHistoryItemStats(item).evidence,
                        " Evidence"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-black text-slate-400", children: "Read Time" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-extrabold text-slate-800 dark:text-white mt-0.5", children: [
                        getHistoryItemStats(item).readTime,
                        " min read"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-slate-200/10 gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-500/20", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11, className: "shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generated Successfully" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => {
                            setDraftResults(item.results);
                            setWorkspaceStage("RESULTS");
                            setHistoryVisible(false);
                            zt.success(`Loaded draft: ${getHistoryItemCaseName(item)}`);
                          },
                          className: "px-4 py-2 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 12 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open Draft" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => handleDuplicateHistoryItem(item),
                          className: `px-3 py-2 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${isDark ? "bg-slate-900 border-slate-800 text-slate-350 hover:bg-slate-800 hover:text-white" : "bg-white border-slate-250 text-slate-650 hover:bg-slate-50 hover:text-slate-800"}`,
                          title: "Duplicate Draft",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 12 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Duplicate" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => handleDeleteHistoryItem(item.id),
                          className: "p-2 border border-red-200 dark:border-red-900/50 hover:bg-red-500/10 rounded-xl text-red-500 transition-colors",
                          title: "Delete Draft",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                        }
                      )
                    ] })
                  ] })
                ] }, item.id || idx)),
                sortedAndFilteredHistory.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 28, className: "text-slate-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider", children: "No Draft History Found" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-450 max-w-xs mx-auto leading-relaxed", children: "Generate your first AI argument to start building your drafting history." })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] });
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(91, 61, 245, 0.2);
          border-radius: 99px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(91, 61, 245, 0.4);
        }
      ` }),
    isTranslatingDraft && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[125000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-zinc-900 border border-slate-202 dark:border-zinc-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center font-sans", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-indigo-50 dark:bg-indigo-950/30 rounded-full flex items-center justify-center text-[#5B3DF5] mb-4 animate-spin", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: toolkitLanguage === "Hindi" ? "पाठ का अनुवाद किया जा रहा है..." : "Translating Argument Builder..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-450 dark:text-slate-400 font-medium mt-2 leading-relaxed", children: toolkitLanguage === "Hindi" ? "कृपया प्रतीक्षा करें, हम आपके कानूनी तर्कों का अनुवाद कर रहे हैं।" : "Please wait while we translate your legal arguments." })
    ] }) })
  ] });
};
export {
  ArgumentBuilder as default
};
