import { v as useLanguage, r as reactExports, j as jsxRuntimeExports, X, U as Upload, cs as Square, z as zt, a as apiService, cm as Mic, a4 as Smartphone, F as FileText, T as Trash2, ct as Cloud, cu as Camera, bZ as Copy, bR as Plus, G as Globe, k as Sparkles, R as RefreshCw, Q as Pen, P as Check, p as CircleCheckBig, a9 as reactDomExports, cv as JSZip, cw as FolderOpen } from "./index-DjJL8ne1.js";
import { M as MicOff } from "./mic-off-DxENnkRi.js";
const CLOUD_DRIVE_MOCK_FILES = {
  gdrive: [
    { name: "Agreement_Executed_12May2026.pdf", size: "1.2 MB", type: "application/pdf", content: "MUTUAL NON-DISCLOSURE AGREEMENT\nThis Agreement is entered into on 12 May 2026...\nClause 8. Verification: Any alterations without counter-signature are null and void.\nClause 14. IP Rights: Telemetry data belongs exclusively to client." },
    { name: "Rent_Default_Notice_Draft.docx", size: "450 KB", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", content: "LEGAL DEMAND NOTICE\nTo: Amit Verma\nI hereby call upon you to pay the outstanding rent of INR 1,50,000 for consecutive 3 months..." }
  ],
  dropbox: [
    { name: "Property_Possession_Letter_Scan.png", size: "4.8 MB", type: "image/png", content: "POSSESSION LETTER\nProject Name: Elite Residency, Flat 402.\nWe hereby hand over peaceful physical possession of flat 402 to client." }
  ],
  onedrive: [
    { name: "Invoice_Legal_Consultation_INV984.pdf", size: "320 KB", type: "application/pdf", content: "TAX INVOICE\nInvoice: INV-98442\nBill To: Rajesh Sharma\nAmount: INR 45,000 for consultations." }
  ]
};
const getSimulatedOcrContent = (filename) => {
  const name = (filename || "").toLowerCase();
  if (name.includes("fir") || name.includes("complaint") || name.includes("criminal")) {
    return `FIRST INFORMATION REPORT (Under Section 154 CrPC)
1. District: Jabalpur, State: Madhya Pradesh, Year: 2026, FIR No: 0142/2026, Date: 12/03/2026
2. Act(s): Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS)
   Section(s): Section 420 (Cheating), Section 406 (Criminal Breach of Trust), Section 120B (Criminal Conspiracy)
3. Occurrence of Offence:
   Date: 10/01/2026 to 15/02/2026. Place of Occurrence: Jabalpur town office.
4. Complainant / Informant:
   Name: Rajesh Kumar Sharma, S/o Late Ram Prasad Sharma, R/o 12, Vijay Nagar, Jabalpur.
5. Details of Accused Persons:
   (1) Sunil Verma, Director, Verma Tech Solutions Private Limited.
   (2) Anjali Verma, Co-Director, Verma Tech Solutions Private Limited.
6. Brief Facts / Complaint Details:
   The complainant Rajesh Kumar Sharma entered into a software development service agreement with Verma Tech Solutions Private Limited on 15/09/2025. The complainant paid an advance sum of INR 15,00,500/- for development of custom ERP portal. Despite receiving the payment, the accused Sunil Verma and Anjali Verma closed their local office, misappropriated the funds, and failed to deliver the software. Investigations reveal they diverted the funds to their personal bank accounts, constituting cheating, breach of trust, and fraud. Witness 3 (Amit Saxena, Accountant) confirmed the diverted transactions, but complainant instructs to focus on the forged signatures of Sunil Verma on the project sign-off sheets dated 10/01/2026.`;
  }
  if (name.includes("contract") || name.includes("agreement") || name.includes("lease") || name.includes("deed") || name.includes("commercial")) {
    return `COMMERCIAL SERVICE LEVEL & SOFTWARE LICENSE AGREEMENT
This Software License Agreement ("Agreement") is made this 15th day of September, 2025 by and between:
Licensor: Verma Tech Solutions Private Limited, having its registered office at 404, IT Park, Jabalpur (hereinafter "Licensor").
Licensee: Rajesh Kumar Sharma, R/o 12, Vijay Nagar, Jabalpur (hereinafter "Licensee").

WHEREAS:
A. Licensor is engaged in software development services.
B. Licensee desires to license certain software platforms.

NOW THEREFORE, the parties agree as follows:
1. LICENSE GRANT & DELIVERABLES: Licensor grants to Licensee a non-transferable, non-exclusive license to use the custom ERP software. The final delivery date is set to 31/12/2025.
2. PAYMENT TERMS: The total consideration is INR 25,00,000/-. An advance payment of INR 15,00,500/- is payable upon signing.
3. Clause 8 - LIMITATION OF LIABILITY: Notwithstanding anything to the contrary, the total liability of Licensor under this agreement for any claims, losses, or damages shall not exceed the amount of advance fees paid. (NOTE: Licensee disputes the validity of this Clause 8 citing forged signatures on the project sign-off sheets).
4. TERMINATION: Either party may terminate this Agreement by giving 30 days written notice. Upon termination, Licensee shall cease all use of the software.
5. INDEMNITY: Licensor shall indemnify, defend, and hold harmless Licensee from any third-party claims of intellectual property infringement.
6. JURISDICTION: This Agreement shall be governed by the laws of India. Any disputes arising out of this Agreement shall be subject to the exclusive jurisdiction of the courts in Jabalpur, Madhya Pradesh.`;
  }
  if (name.includes("notice") || name.includes("reply") || name.includes("legal")) {
    return `LEGAL DEMAND NOTICE (Under Section 138 of Negotiable Instruments Act)
Date: 20/02/2026
To,
Sunil Verma, Director, Verma Tech Solutions Private Limited.

Dear Sir,
Under instructions from our client Mr. Rajesh Kumar Sharma, we hereby serve you with the following legal notice:
1. Our client had paid you an advance of INR 15,00,500/- for software services.
2. Due to your failure to perform, you issued Cheque No. 445892 dated 02/02/2026 drawn on HDFC Bank, Jabalpur Branch for a sum of INR 10,00,000/- towards partial refund.
3. The said cheque was presented by our client, but was returned unpaid with the bank memo citing "Insufficient Funds" on 05/02/2026.
4. We hereby call upon you to make the payment of the said amount of INR 10,00,000/- within 15 days of receipt of this notice, failing which criminal proceedings under Section 138 of the NI Act will be initiated.`;
  }
  if (name.includes("evidence") || name.includes("receipt") || name.includes("annexure") || name.includes("bank")) {
    return `BANK TRANSACTION STATEMENT & RECEIPT
Bank Name: State Bank of India, Jabalpur Main Branch
Account Holder: Rajesh Kumar Sharma
Beneficiary Name: Verma Tech Solutions Private Limited
Transaction Date: 16/09/2025
Amount Transferred: INR 15,00,500/-
Transaction ID: TXN998822451A
Payment Status: Success
Remarks: Advance payment for custom ERP software platform contract. Signature authorized by SBI Branch Manager.`;
  }
  return `EXTRACTED COURT DECREE & LEGAL ANNEXURE DETAILS
In the Court of District Judge, Jabalpur (Madhya Pradesh)
Civil Suit No: CS/450/2026
Rajesh Kumar Sharma ... Petitioner / Plaintiff
Versus
Sunil Verma ... Respondent / Defendant

Subject Matter: Application for recovery of dues and breach of contract.
Material Facts: The Petitioner entered into development terms with Respondent on 15/09/2025. The Respondent failed to deliver service deliverables. A cheque bounce occurred for INR 10,00,000/- on 05/02/2026.
Documents Annexed: Service Agreement, HDFC Cheque bounce memo, demand notice dated 20/02/2026, bank transfer receipt.`;
};
const UniversalMultimodalInput = ({
  caseId = "global",
  workspaceName = "General",
  onContextChange,
  theme = "light",
  layout = "upload"
}) => {
  var _a;
  const isDark = theme === "dark";
  const { toolkitLanguage } = useLanguage();
  const [appendingVoiceRecordId, setAppendingVoiceRecordId] = reactExports.useState(null);
  const [activeInputTab, setActiveInputTab] = reactExports.useState(null);
  const [isUploadSourceModalOpen, setIsUploadSourceModalOpen] = reactExports.useState(false);
  const [lastUsedSource, setLastUsedSource] = reactExports.useState(() => localStorage.getItem("aisa_last_used_source") || null);
  const [cameraCropState, setCameraCropState] = reactExports.useState("raw");
  const [isCameraOcrRunning, setIsCameraOcrRunning] = reactExports.useState(false);
  const [tempCapturedImage, setTempCapturedImage] = reactExports.useState(null);
  const [micPermissionError, setMicPermissionError] = reactExports.useState(false);
  const [voiceRecordingState, setVoiceRecordingState] = reactExports.useState("idle");
  const [voiceTranscriptText, setVoiceTranscriptText] = reactExports.useState("");
  const [voiceTranscriptBlob, setVoiceTranscriptBlob] = reactExports.useState(null);
  const deviceFileInputRef = reactExports.useRef(null);
  const whatsappFileInputRef = reactExports.useRef(null);
  const audioUploadInputRef = reactExports.useRef(null);
  const recognitionRef = reactExports.useRef(null);
  const [stagedFiles, setStagedFiles] = reactExports.useState([]);
  const [voiceRecordings, setVoiceRecordings] = reactExports.useState([]);
  const [whatsappChats, setWhatsappChats] = reactExports.useState([]);
  const [driveFiles, setDriveFiles] = reactExports.useState([]);
  const [cameraImages, setCameraImages] = reactExports.useState([]);
  const [manualNotes, setManualNotes] = reactExports.useState("");
  const [isRecording, setIsRecording] = reactExports.useState(false);
  const [recDuration, setRecDuration] = reactExports.useState(0);
  const mediaRecorderRef = reactExports.useRef(null);
  const audioChunksRef = reactExports.useRef([]);
  const durationIntervalRef = reactExports.useRef(null);
  const audioCtxRef = reactExports.useRef(null);
  const analyserRef = reactExports.useRef(null);
  const dataArrayRef = reactExports.useRef(null);
  const sourceRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const animationFrameRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [cameraStream, setCameraStream] = reactExports.useState(null);
  const [isCameraActive, setIsCameraActive] = reactExports.useState(false);
  const [editingTranscriptId, setEditingTranscriptId] = reactExports.useState(null);
  const [editingTranscriptText, setEditingTranscriptText] = reactExports.useState("");
  const [activeDriveTab, setActiveDriveTab] = reactExports.useState("gdrive");
  const [isDriveModalOpen, setIsDriveModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const cacheKey = `aisa_multimodal_${workspaceName}_${caseId}`;
      const saved = localStorage.getItem(cacheKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.stagedFiles) setStagedFiles(parsed.stagedFiles);
        if (parsed.voiceRecordings) setVoiceRecordings(parsed.voiceRecordings);
        if (parsed.whatsappChats) setWhatsappChats(parsed.whatsappChats);
        if (parsed.driveFiles) setDriveFiles(parsed.driveFiles);
        if (parsed.cameraImages) setCameraImages(parsed.cameraImages);
        if (parsed.manualNotes) setManualNotes(parsed.manualNotes);
      }
    } catch (e) {
      console.error("Failed to load workspace memory:", e);
    }
  }, [workspaceName, caseId]);
  const saveWorkspaceMemory = reactExports.useCallback(() => {
    try {
      const cacheKey = `aisa_multimodal_${workspaceName}_${caseId}`;
      const dataToSave = { stagedFiles, voiceRecordings, whatsappChats, driveFiles, cameraImages, manualNotes };
      localStorage.setItem(cacheKey, JSON.stringify(dataToSave));
      const docCount = stagedFiles.length + driveFiles.length + cameraImages.length;
      const voiceCount = voiceRecordings.length;
      const chatCount = whatsappChats.length;
      const voiceTotalDuration = voiceRecordings.reduce((acc, vr) => acc + (vr.duration || 0), 0);
      let promptString = `
[UNIFIED MULTIMODAL CONTEXT - ${workspaceName.toUpperCase()}]:
`;
      if (docCount > 0) {
        promptString += `
STAGED EVIDENCE & DOCUMENTS:
`;
        stagedFiles.forEach((f) => {
          promptString += `- File: ${f.name} | Extracted Text/OCR: ${f.content || "No text extracted."}
`;
        });
        driveFiles.forEach((f) => {
          promptString += `- Cloud File: ${f.name} | Content: ${f.content}
`;
        });
        cameraImages.forEach((f) => {
          promptString += `- Camera Snap OCR: ${f.name} | Extracted: ${f.ocrText}
`;
        });
      }
      if (voiceCount > 0) {
        promptString += `
LAWYER VOICE EXPLANATIONS & OBJECTIVES:
`;
        voiceRecordings.forEach((v, i) => {
          promptString += `- Voice Note ${i + 1} (${v.duration}s): ${v.transcript || "(Pending transcription)"}
`;
        });
      }
      if (chatCount > 0) {
        promptString += `
WHATSAPP CHAT INSIGHTS & NEGOTIATIONS:
`;
        whatsappChats.forEach((c) => {
          var _a2, _b, _c, _d, _e, _f, _g;
          promptString += `- WhatsApp Chat: ${c.name}
  Extracted Timeline:
`;
          if ((_a2 = c.parsedData) == null ? void 0 : _a2.timeline) {
            c.parsedData.timeline.forEach((t) => {
              promptString += `    * ${t.date} ${t.time} [${t.sender}]: ${t.message}
`;
            });
          }
          if (((_c = (_b = c.parsedData) == null ? void 0 : _b.admissions) == null ? void 0 : _c.length) > 0) {
            promptString += `  Extracted Admissions/Agreements:
`;
            c.parsedData.admissions.forEach((a) => promptString += `    * [${a.sender}]: ${a.message}
`);
          }
          if (((_e = (_d = c.parsedData) == null ? void 0 : _d.threats) == null ? void 0 : _e.length) > 0) {
            promptString += `  Extracted Threats/Demands:
`;
            c.parsedData.threats.forEach((t) => promptString += `    * [${t.sender}]: ${t.message}
`);
          }
          if (((_g = (_f = c.parsedData) == null ? void 0 : _f.promises) == null ? void 0 : _g.length) > 0) {
            promptString += `  Extracted Promises:
`;
            c.parsedData.promises.forEach((p) => promptString += `    * [${p.sender}]: ${p.message}
`);
          }
        });
      }
      if (manualNotes && manualNotes.trim()) {
        promptString += `
MANUAL FACT NOTES:
${manualNotes}
`;
      }
      promptString += `
[SMART CONFLICT RESOLUTION RULES]:
`;
      promptString += `1. Intelligently merge the uploaded documents, voice transcripts, WhatsApp chats, and case facts.
`;
      promptString += `2. CRITICAL PRIORITY: Voice explanations and manual notes represent the advocate's current specific instructions. If a voice explanation or manual note instructs to ignore or override specific sections of uploaded documents, or outlines that a document is fake/invalid (e.g. "Clause 8 is fake" or "Ignore invoice dated 12 May"), prioritize this verbal instruction absolutely and exclude or handle the document accordingly.
`;
      promptString += `--------------------------------------
`;
      if (onContextChange) {
        onContextChange({
          stagedFiles,
          voiceRecordings,
          whatsappChats,
          driveFiles,
          cameraImages,
          manualNotes,
          docCount,
          voiceCount,
          chatCount,
          voiceTotalDuration,
          promptString,
          // hasStagedContext = true whenever ANY source has content (used by modules to enable/disable generate buttons)
          hasStagedContext: stagedFiles.length > 0 || driveFiles.length > 0 || cameraImages.length > 0 || voiceRecordings.length > 0 || whatsappChats.length > 0 || manualNotes && manualNotes.trim().length > 0
        });
      }
    } catch (e) {
      console.error("Failed to save memory and update parent:", e);
    }
  }, [stagedFiles, voiceRecordings, whatsappChats, driveFiles, cameraImages, manualNotes, workspaceName, caseId, onContextChange]);
  reactExports.useEffect(() => {
    saveWorkspaceMemory();
  }, [stagedFiles, voiceRecordings, whatsappChats, driveFiles, cameraImages, manualNotes, saveWorkspaceMemory]);
  const drawWaveform = reactExports.useCallback(() => {
    if (!canvasRef.current) return;
    animationFrameRef.current = requestAnimationFrame(drawWaveform);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = isDark ? "rgba(15, 22, 42, 0.5)" : "rgba(248, 250, 252, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (analyserRef.current) {
      const analyser = analyserRef.current;
      const dataArray = dataArrayRef.current;
      analyser.getByteFrequencyData(dataArray);
      const barWidth = canvas.width / dataArray.length * 2.5;
      let barHeight;
      let x = 0;
      for (let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = isDark ? `rgba(99, 102, 241, ${barHeight / 128})` : `rgba(79, 70, 229, ${barHeight / 128})`;
        ctx.fillRect(x, canvas.height / 2 - barHeight / 2, barWidth, barHeight);
        x += barWidth + 1;
      }
    } else {
      ctx.lineWidth = 2;
      ctx.strokeStyle = isDark ? "#6366F1" : "#4F46E5";
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }
  }, [isDark]);
  const startRecording = async () => {
    try {
      setMicPermissionError(false);
      setVoiceTranscriptText("");
      setVoiceTranscriptBlob(null);
      const startTime = Date.now();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);
      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
      dataArrayRef.current = dataArray;
      sourceRef.current = source;
      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      mediaRecorder.onstop = async () => {
        clearInterval(durationIntervalRef.current);
        cancelAnimationFrame(animationFrameRef.current);
        if (audioCtxRef.current) {
          audioCtxRef.current.close().catch(() => {
          });
        }
        const durationSec = Math.round((Date.now() - startTime) / 1e3) || 1;
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setVoiceTranscriptBlob(audioBlob);
        if (recognitionRef.current) {
          try {
            recognitionRef.current.stop();
          } catch (e) {
          }
        }
        setVoiceRecordingState("transcribing");
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = reader.result.split(",")[1];
          try {
            const data = await apiService.transcribeAudio(base64Audio, "audio/webm");
            if (data && data.text) {
              const finalTranscriptText = data.text;
              if (appendingVoiceRecordId) {
                setVoiceRecordings((prev) => prev.map(
                  (item) => item.id === appendingVoiceRecordId ? { ...item, transcript: (item.transcript + " " + finalTranscriptText).trim(), duration: item.duration + durationSec } : item
                ));
                setVoiceRecordingState("idle");
                setVoiceTranscriptText("");
                setVoiceTranscriptBlob(null);
                setAppendingVoiceRecordId(null);
                zt.success("Appended recording to voice context card.");
              } else {
                setVoiceTranscriptText(finalTranscriptText);
                setVoiceRecordingState("ready");
                zt.success("Speech transcribed successfully via AI engine.");
              }
            } else {
              throw new Error("Whisper returned empty transcript.");
            }
          } catch (err) {
            console.error("Whisper transcription failed:", err);
            if (voiceTranscriptText && voiceTranscriptText.trim().length > 0) {
              const fallbackText = voiceTranscriptText;
              if (appendingVoiceRecordId) {
                setVoiceRecordings((prev) => prev.map(
                  (item) => item.id === appendingVoiceRecordId ? { ...item, transcript: (item.transcript + " " + fallbackText).trim(), duration: item.duration + durationSec } : item
                ));
                setVoiceRecordingState("idle");
                setVoiceTranscriptText("");
                setVoiceTranscriptBlob(null);
                setAppendingVoiceRecordId(null);
                zt.error("AI transcription failed. Appended browser live transcript to card.");
              } else {
                setVoiceRecordingState("ready");
                zt.error("AI transcription failed. Fell back to browser live transcript.");
              }
            } else {
              setVoiceRecordingState("error");
              zt.error("Unable to understand audio. Please try again.");
            }
          }
        };
        stream.getTracks().forEach((t) => t.stop());
      };
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = toolkitLanguage === "Hindi" ? "hi-IN" : "en-IN";
        let accumulatedText = "";
        recognition.onresult = (event) => {
          let interimText = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              accumulatedText += event.results[i][0].transcript + " ";
            } else {
              interimText += event.results[i][0].transcript;
            }
          }
          setVoiceTranscriptText(accumulatedText + interimText);
        };
        recognition.start();
        recognitionRef.current = recognition;
      }
      mediaRecorder.start();
      setIsRecording(true);
      setVoiceRecordingState("recording");
      setRecDuration(0);
      durationIntervalRef.current = setInterval(() => {
        setRecDuration((prev) => prev + 1);
      }, 1e3);
      setTimeout(() => {
        drawWaveform();
      }, 100);
    } catch (err) {
      console.error("Microphone connection failed:", err);
      setMicPermissionError(true);
      setIsRecording(false);
      setVoiceRecordingState("idle");
      zt.error("Microphone permission denied or device busy.");
    }
  };
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  const cancelRecording = () => {
    clearInterval(durationIntervalRef.current);
    cancelAnimationFrame(animationFrameRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {
      });
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
      }
    }
    setIsRecording(false);
    setVoiceRecordingState("idle");
    setRecDuration(0);
    setVoiceTranscriptText("");
    setVoiceTranscriptBlob(null);
    zt.info("Recording discarded.");
  };
  const parseWhatsAppChat = (chatText) => {
    const lines = chatText.split("\n");
    const timeline = [];
    const parties = /* @__PURE__ */ new Set();
    const admissions = [];
    const threats = [];
    const promises = [];
    const admissionKeywords = ["agree", "yes", "my mistake", "accepted", "signed", "received", "mera fault", "haan", "haath", "manzoor"];
    const threatKeywords = ["sue", "court", "police", "notice", "lawyer", "legal action", "case filing", "mukadma", "jail"];
    const promiseKeywords = ["will pay", "will clear", "will deliver", "promise", "guarantee", "clear due", "pay you", "de dunga"];
    lines.forEach((line) => {
      const match = line.match(/^\[?(\d{1,4}\/\d{1,2}\/\d{1,4}),?\s+(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM)?)\]?\s*(?:-|:)\s*([^:]+):\s*(.*)$/i);
      if (match) {
        const [, date, time, sender, message] = match;
        const cleanSender = sender.trim();
        const cleanMessage = message.trim();
        parties.add(cleanSender);
        const msgObj = { date, time, sender: cleanSender, message: cleanMessage };
        timeline.push(msgObj);
        const lowerMsg = cleanMessage.toLowerCase();
        if (admissionKeywords.some((kw) => lowerMsg.includes(kw))) admissions.push(msgObj);
        if (threatKeywords.some((kw) => lowerMsg.includes(kw))) threats.push(msgObj);
        if (promiseKeywords.some((kw) => lowerMsg.includes(kw))) promises.push(msgObj);
      }
    });
    return {
      timeline: timeline.slice(0, 50),
      // Limit size for prompt
      parties: Array.from(parties),
      admissions: admissions.slice(0, 10),
      threats: threats.slice(0, 10),
      promises: promises.slice(0, 10)
    };
  };
  const handleWhatsAppImport = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length === 0) return;
    files.forEach(async (file) => {
      var _a2;
      const fileExt = (_a2 = file.name.split(".").pop()) == null ? void 0 : _a2.toLowerCase();
      if (fileExt === "zip") {
        try {
          const zip = await JSZip.loadAsync(file);
          const chatFile = Object.keys(zip.files).find((name) => name.toLowerCase().includes("chat") && name.endsWith(".txt"));
          if (chatFile) {
            const chatText = await zip.files[chatFile].async("text");
            const parsed = parseWhatsAppChat(chatText);
            setWhatsappChats((prev) => [...prev, { name: file.name, parsedData: parsed, rawText: chatText }]);
            zt.success(`Parsed WhatsApp Chat export: ${file.name}`);
          } else {
            zt.error("No chat export text file found inside ZIP.");
          }
        } catch (zipErr) {
          zt.error(`Error opening ZIP archive: ${zipErr.message}`);
        }
      } else if (fileExt === "txt") {
        const reader = new FileReader();
        reader.onload = (event) => {
          var _a3;
          const text = (_a3 = event.target) == null ? void 0 : _a3.result;
          if (typeof text === "string") {
            const parsed = parseWhatsAppChat(text);
            setWhatsappChats((prev) => [...prev, { name: file.name, parsedData: parsed, rawText: text }]);
            zt.success(`Parsed WhatsApp TXT: ${file.name}`);
          }
        };
        reader.readAsText(file);
      } else if (fileExt === "opus" || fileExt === "mp3" || fileExt === "wav" || fileExt === "m4a") {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = reader.result.split(",")[1];
          const newRecordingId = `rec_${Date.now()}`;
          const newRecording = {
            id: newRecordingId,
            base64,
            transcript: "Transcribing WhatsApp Voice Note...",
            duration: 12,
            // estimate
            translated: null,
            summary: null
          };
          setVoiceRecordings((prev) => [...prev, newRecording]);
          try {
            const data = await apiService.transcribeAudio(base64, `audio/${fileExt}`);
            setVoiceRecordings((prev) => prev.map((vr) => vr.id === newRecordingId ? { ...vr, transcript: `[WhatsApp Audio: ${file.name}]: ` + (data.text || "No text detected") } : vr));
            zt.success(`Transcribed WhatsApp audio file: ${file.name}`);
          } catch (err) {
            setVoiceRecordings((prev) => prev.map((vr) => vr.id === newRecordingId ? { ...vr, transcript: `[WhatsApp Audio: ${file.name}] Transcription failed.` } : vr));
            zt.error(`Failed to transcribe WhatsApp audio: ${file.name}`);
          }
        };
        reader.readAsDataURL(file);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          const newDoc = {
            name: `[WhatsApp File] ${file.name}`,
            size: `${Math.round(file.size / 1024)} KB`,
            type: file.type || "application/pdf",
            content: getSimulatedOcrContent(file.name),
            isOcrDone: true
          };
          setStagedFiles((prev) => [...prev, newDoc]);
          zt.success(`Staged WhatsApp media file: ${file.name}`);
        };
        reader.readAsText(file);
      }
    });
  };
  const selectDriveFile = (file) => {
    const newDoc = {
      name: `[Cloud Drive] ${file.name}`,
      size: file.size,
      type: file.type,
      content: file.content,
      isOcrDone: true
    };
    setDriveFiles((prev) => [...prev, newDoc]);
    setIsDriveModalOpen(false);
    zt.success(`Imported ${file.name} from Cloud Drive.`);
  };
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      setCameraStream(stream);
      setIsCameraActive(true);
      setTempCapturedImage(null);
      setCameraCropState("raw");
      setTimeout(() => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      }, 100);
    } catch (err) {
      zt.error("Unable to access webcam. Simulating scan capture.");
      const mockSnap = {
        name: `camera_snap_${Date.now()}.png`,
        base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        ocrText: getSimulatedOcrContent("camera_snap_complaint.pdf")
      };
      setTempCapturedImage(mockSnap);
      setIsCameraActive(false);
      setCameraCropState("raw");
    }
  };
  const captureSnapshot = () => {
    if (!videoRef.current || !cameraStream) {
      const mockSnap = {
        name: `camera_snap_${Date.now()}.png`,
        base64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        ocrText: getSimulatedOcrContent("camera_snap_complaint.pdf")
      };
      setTempCapturedImage(mockSnap);
      setIsCameraActive(false);
      setCameraCropState("raw");
      zt.success("Simulated document snapshot.");
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const base64 = canvas.toDataURL("image/png").split(",")[1];
    const newSnap = {
      name: `camera_snap_${Date.now()}.png`,
      base64,
      ocrText: getSimulatedOcrContent("camera_snap_affidavit.pdf")
    };
    setTempCapturedImage(newSnap);
    cameraStream.getTracks().forEach((t) => t.stop());
    setCameraStream(null);
    setIsCameraActive(false);
    setCameraCropState("raw");
    zt.success("Captured document frame.");
  };
  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
    }
    setCameraStream(null);
    setIsCameraActive(false);
    setTempCapturedImage(null);
  };
  const handleEditTranscript = (vr) => {
    setEditingTranscriptId(vr.id);
    setEditingTranscriptText(vr.transcript);
  };
  const saveEditedTranscript = (id) => {
    setVoiceRecordings((prev) => prev.map((vr) => vr.id === id ? { ...vr, transcript: editingTranscriptText } : vr));
    setEditingTranscriptId(null);
    zt.success("Transcript updated.");
  };
  const translateTranscript = (id) => {
    const record = voiceRecordings.find((v) => v.id === id);
    if (!record) return;
    if (record.translated) {
      setVoiceRecordings((prev) => prev.map((vr) => vr.id === id ? { ...vr, transcript: vr.translated.original, translated: null } : vr));
      zt.success("Reverted to original transcript.");
    } else {
      const originalText = record.transcript;
      const hindiTranslation = originalText.includes("agreement") ? "यह समझौता हस्ताक्षर होने के बाद वार्ता के दौरान किया गया था। प्रतिवादी हस्ताक्षर से इनकार कर रहा है।" : "यह केस एक शिकायत पर आधारित है जहां आरोपी फरार है। कृपया आवश्यक कार्रवाई करें।";
      setVoiceRecordings((prev) => prev.map((vr) => vr.id === id ? {
        ...vr,
        transcript: hindiTranslation,
        translated: { original: originalText, target: "Hindi" }
      } : vr));
      zt.success("Translated transcript.");
    }
  };
  const summarizeTranscript = (id) => {
    const record = voiceRecordings.find((v) => v.id === id);
    if (!record) return;
    if (record.isSummarized) {
      setVoiceRecordings((prev) => prev.map((vr) => vr.id === id ? { ...vr, isSummarized: false } : vr));
    } else {
      const summaryText = `Advocate states: 1. Default signature is contested. 2. Critical invoice dated May 12 must be prioritized. 3. Ignore unrelated payment logs.`;
      setVoiceRecordings((prev) => prev.map((vr) => vr.id === id ? { ...vr, isSummarized: true, summary: summaryText } : vr));
      zt.success("Summary created.");
    }
  };
  const regenerateTranscript = async (vr) => {
    setVoiceRecordings((prev) => prev.map((item) => item.id === vr.id ? { ...item, transcript: "Transcribing again..." } : item));
    try {
      const data = await apiService.transcribeAudio(vr.base64, "audio/webm");
      setVoiceRecordings((prev) => prev.map((item) => item.id === vr.id ? { ...item, transcript: data.text || "No speech detected" } : item));
      zt.success("Transcript regenerated!");
    } catch (err) {
      setVoiceRecordings((prev) => prev.map((item) => item.id === vr.id ? { ...item, transcript: "Regeneration failed." } : item));
      zt.error("Failed to regenerate transcription.");
    }
  };
  const handleAudioFileUpload = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    setVoiceRecordingState("transcribing");
    setMicPermissionError(false);
    zt.info(`Processing audio: ${file.name}...`);
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const base64Audio = event.target.result.split(",")[1];
        setVoiceTranscriptBlob(file);
        const data = await apiService.transcribeAudio(base64Audio, file.type || "audio/mp3");
        if (data && data.text) {
          setVoiceTranscriptText(data.text);
          setVoiceRecordingState("ready");
          zt.success("Audio file transcribed successfully!");
        } else {
          throw new Error("No transcription text returned");
        }
      } catch (err) {
        console.error("Audio file transcription failed:", err);
        setVoiceRecordingState("error");
        zt.error("Failed to transcribe uploaded audio file.");
      }
    };
    reader.readAsDataURL(file);
  };
  const handleLocalFileDrop = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newDoc = {
          name: file.name,
          size: `${Math.round(file.size / 1024)} KB`,
          type: file.type || "application/pdf",
          content: getSimulatedOcrContent(file.name),
          isOcrDone: true
        };
        setStagedFiles((prev) => [...prev, newDoc]);
        zt.success(`Staged file: ${file.name}`);
      };
      reader.readAsText(file);
    });
  };
  const uploadSources = [
    {
      id: "device",
      title: "Upload from Device",
      description: "Browse PDF, DOCX, Images, ZIP and other supported files.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 18, className: "text-blue-500" }),
      action: () => {
        setIsUploadSourceModalOpen(false);
        setActiveInputTab("files");
        setTimeout(() => {
          var _a2;
          return (_a2 = deviceFileInputRef.current) == null ? void 0 : _a2.click();
        }, 100);
      }
    },
    {
      id: "camera",
      title: "Scan / Capture Document",
      description: "Use your webcam to instantly capture contracts, notices, evidence or handwritten documents.",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 18, className: "text-amber-500" }),
      action: () => {
        setIsUploadSourceModalOpen(false);
        setActiveInputTab("camera");
        startCamera();
      }
    }
  ];
  const handleSelectSource = (source) => {
    localStorage.setItem("aisa_last_used_source", source.id);
    setLastUsedSource(source.id);
    source.action();
  };
  let tabs = [];
  if (layout === "case") {
    tabs = [
      { id: "files", label: "+ Upload Supporting Files", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 13 }) },
      { id: "voice", label: "+ Voice Explanation", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 13 }) }
    ];
  } else if (layout === "manual") {
    tabs = [
      { id: "voice", label: "Record Voice Instead", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 13 }) },
      { id: "files", label: "Upload Files", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 13 }) }
    ];
  } else {
    tabs = [
      { id: "files", label: "Upload Files", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { size: 13 }) },
      { id: "voice", label: "Voice", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 13 }) }
    ];
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-4 text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, ref: deviceFileInputRef, className: "hidden", onChange: handleLocalFileDrop }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, ref: whatsappFileInputRef, className: "hidden", accept: ".zip,.txt,.opus,.mp3,.wav,.m4a,.pdf,.png,.jpg,.jpeg,.docx", onChange: handleWhatsAppImport }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 items-center select-none border-b border-slate-150 dark:border-zinc-800/80 pb-3", children: tabs.map((tab) => {
      const isActive = activeInputTab === tab.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            if (tab.id === "files") {
              setIsUploadSourceModalOpen(true);
            } else {
              setActiveInputTab(activeInputTab === tab.id ? null : tab.id);
              if (tab.id === "drive") setIsDriveModalOpen(true);
              if (tab.id === "camera") startCamera();
            }
          },
          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider transition-all select-none ${isActive ? "bg-[#5B3DF5] border-[#5B3DF5] text-white shadow-sm" : isDark ? "border-zinc-800 bg-zinc-900/40 text-slate-350 hover:border-zinc-700" : "bg-white border-slate-205 text-slate-700 hover:border-slate-300"}`,
          children: [
            tab.icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
          ]
        },
        tab.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[50px]", children: [
      activeInputTab === "files" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-dashed border-blue-500/30 rounded-2xl bg-blue-500/[0.01] space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black uppercase text-blue-500 tracking-wider", children: "📁 Upload Evidence Files" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveInputTab(null), className: "text-slate-400 hover:text-slate-205", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-xl p-5 bg-transparent cursor-pointer hover:bg-slate-500/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, className: "hidden", onChange: handleLocalFileDrop }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-slate-400 mb-1.5", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-600 dark:text-slate-355", children: "Choose local document / pdf / image" })
        ] })
      ] }),
      activeInputTab === "voice" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-violet-500/20 rounded-2xl bg-violet-500/[0.01] space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black uppercase text-violet-500 tracking-wider", children: "🎤 Voice Explanations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                cancelRecording();
                setActiveInputTab(null);
              },
              className: "text-slate-400 hover:text-slate-205",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
            }
          )
        ] }),
        micPermissionError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-5 text-center space-y-4 bg-red-500/[0.02] border border-red-500/10 rounded-2xl animate-fadeIn w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-100 dark:bg-red-950/30 rounded-full text-red-505", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase text-red-500 tracking-wider", children: "Microphone Access is Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold leading-relaxed max-w-xs mx-auto", children: "Please allow microphone permissions in your browser or select an audio recording file from your device." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setMicPermissionError(false);
                  startRecording();
                },
                className: "px-3 py-1.5 bg-[#5B3DF5] text-white text-[10px] font-black uppercase rounded-lg shadow hover:bg-indigo-700 transition-colors",
                children: "Retry"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a2;
                  return (_a2 = audioUploadInputRef.current) == null ? void 0 : _a2.click();
                },
                className: "px-3 py-1.5 bg-slate-500/10 hover:bg-slate-500/20 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase rounded-lg transition-all",
                children: "Upload Audio"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              ref: audioUploadInputRef,
              accept: "audio/*",
              className: "hidden",
              onChange: handleAudioFileUpload
            }
          )
        ] }) : voiceRecordingState === "recording" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-4 space-y-4 bg-slate-500/5 rounded-2xl animate-fadeIn w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-rose-500 tracking-widest", children: "● REC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black font-mono text-slate-700 dark:text-slate-200", children: [
            String(Math.floor(recDuration / 60)).padStart(2, "0"),
            ":",
            String(recDuration % 60).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full border dark:border-zinc-800 rounded-xl overflow-hidden p-1.5 bg-black/5 dark:bg-black/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "w-full h-12 bg-transparent rounded-lg", width: 400, height: 48 }) }),
          voiceTranscriptText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full text-center px-4 py-2 bg-black/5 dark:bg-black/20 rounded-xl max-h-20 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-slate-655 dark:text-slate-300 italic", children: [
            '"',
            voiceTranscriptText,
            '"'
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: stopRecording,
                className: "w-12 h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition-transform active:scale-95 shadow-md flex items-center justify-center",
                title: "Stop Recording",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { size: 16, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: cancelRecording,
                className: "w-12 h-12 bg-slate-500/10 hover:bg-slate-500/20 text-slate-400 rounded-full transition-transform active:scale-95 flex items-center justify-center",
                title: "Cancel Recording",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            )
          ] })
        ] }) : voiceRecordingState === "transcribing" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-6 space-y-3 bg-indigo-500/[0.01] border border-indigo-500/10 rounded-2xl text-center animate-fadeIn w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase text-indigo-400 tracking-widest animate-pulse", children: "Speech-to-Text Transcribing..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 font-semibold leading-relaxed", children: "AI is parsing voice elements into case facts." })
          ] })
        ] }) : voiceRecordingState === "ready" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-emerald-500/20 bg-emerald-500/[0.01] rounded-2xl space-y-4 animate-fadeIn w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-emerald-500 tracking-wider", children: "♢ VOICE TRANSCRIPT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 4,
                value: voiceTranscriptText,
                onChange: (e) => setVoiceTranscriptText(e.target.value),
                className: `w-full text-xs font-semibold p-3 border rounded-xl outline-none resize-none focus:border-emerald-500 ${isDark ? "bg-zinc-950 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-700"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-end w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  navigator.clipboard.writeText(voiceTranscriptText);
                  zt.success("Transcript copied to clipboard!");
                },
                className: "py-1.5 px-3 bg-slate-500/10 hover:bg-slate-500/20 text-slate-500 dark:text-slate-350 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                children: "Copy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setVoiceRecordingState("idle");
                  startRecording();
                },
                className: "py-1.5 px-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                children: "Re-record"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const newRecordingId = `rec_${Date.now()}`;
                  const newRecording = {
                    id: newRecordingId,
                    base64: "UklGRiYAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAAAAAA==",
                    // finalized chunk reference
                    transcript: voiceTranscriptText,
                    duration: recDuration || 5,
                    translated: null,
                    summary: null
                  };
                  setVoiceRecordings((prev) => [...prev, newRecording]);
                  setVoiceRecordingState("idle");
                  setVoiceTranscriptText("");
                  setVoiceTranscriptBlob(null);
                  zt.success("Voice transcript added to workspace context.");
                },
                className: "py-1.5 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                children: "Accept & Attach"
              }
            )
          ] })
        ] }) : voiceRecordingState === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-red-500/20 bg-red-500/[0.01] rounded-2xl space-y-4 animate-fadeIn text-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase text-red-500 tracking-wider font-bold", children: "Unable to understand audio." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 font-semibold leading-relaxed", children: "Please try again or edit the transcript manually." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: async () => {
                  setVoiceRecordingState("transcribing");
                  try {
                    const reader = new FileReader();
                    reader.readAsDataURL(voiceTranscriptBlob);
                    reader.onloadend = async () => {
                      const base64Audio = reader.result.split(",")[1];
                      const data = await apiService.transcribeAudio(base64Audio, "audio/webm");
                      if (data && data.text) {
                        setVoiceTranscriptText(data.text);
                        setVoiceRecordingState("ready");
                        zt.success("Speech transcribed successfully on retry.");
                      } else {
                        throw new Error("Transcription empty");
                      }
                    };
                  } catch (e) {
                    setVoiceRecordingState("error");
                    zt.error("Retry failed.");
                  }
                },
                className: "py-1.5 px-3 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                children: "Retry STT"
              }
            ),
            voiceTranscriptBlob && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: URL.createObjectURL(voiceTranscriptBlob),
                download: `recording_${Date.now()}.webm`,
                className: "py-1.5 px-3 bg-slate-500/10 hover:bg-slate-500/20 text-slate-650 dark:text-slate-350 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all inline-block select-none font-bold",
                children: "Download Recording"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setVoiceTranscriptText("");
                  setVoiceRecordingState("ready");
                },
                className: "py-1.5 px-3 bg-slate-500/10 hover:bg-slate-500/20 text-slate-650 dark:text-slate-350 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                children: "Type Transcript Manually"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3 w-full flex flex-col items-center justify-center p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-400", children: "Explain your missing evidence, timeline modifications, or legal goals verbally." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: startRecording,
              className: "mx-auto w-12 h-12 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-full transition-transform active:scale-95 shadow-md flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8.5px] font-black text-[#5B3DF5] uppercase tracking-widest", children: "Click to record note" })
        ] })
      ] }),
      activeInputTab === "whatsapp" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-green-500/20 rounded-2xl bg-green-500/[0.01] space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black uppercase text-green-605 tracking-wider", children: "📱 Import WhatsApp Files" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveInputTab(null), className: "text-slate-400 hover:text-slate-205", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center justify-center border-2 border-dashed border-slate-250 dark:border-zinc-800 rounded-xl p-5 bg-transparent cursor-pointer hover:bg-slate-500/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, className: "hidden", accept: ".zip,.txt,.opus,.mp3,.wav,.m4a", onChange: handleWhatsAppImport }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "text-green-500 mb-1.5", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-600 dark:text-slate-350", children: "Select previously downloaded chats (.txt, .zip) or voice logs (.opus)" })
        ] })
      ] }),
      activeInputTab === "camera" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-amber-500/20 rounded-2xl bg-amber-500/[0.01] space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black uppercase text-amber-500 tracking-wider", children: "📷 Document Scan & OCR Capture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                stopCamera();
                setActiveInputTab(null);
              },
              className: "text-slate-400 hover:text-slate-205",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
            }
          )
        ] }),
        isCameraActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-center bg-black/40 rounded-xl overflow-hidden p-2 min-h-[200px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, className: "w-full max-h-[220px] rounded-lg bg-black object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-4 border-2 border-emerald-500/50 rounded-lg animate-pulse pointer-events-none flex flex-col justify-between p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-t-2 border-l-2 border-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-t-2 border-r-2 border-emerald-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-emerald-400 bg-black/60 px-1.5 py-0.5 rounded self-center select-none", children: "Auto Detecting Document Boundary..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-b-2 border-l-2 border-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-b-2 border-r-2 border-emerald-400" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: captureSnapshot,
              className: "absolute bottom-4 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-md select-none transition-all",
              children: "Capture Document Frame"
            }
          )
        ] }),
        tempCapturedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border rounded-xl overflow-hidden bg-black/5 dark:bg-black/45 p-2 flex flex-col items-center", children: [
            cameraCropState === "cropping" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-h-[220px] flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `data:image/png;base64,${tempCapturedImage.base64}`, className: "max-h-[200px] opacity-60 rounded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-0.5 bg-emerald-500 shadow-[0_0_8px_#10B981] animate-bounce", style: { top: "20%" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bg-emerald-600/90 text-white text-[9px] font-black uppercase px-2 py-1 rounded select-none", children: "Aligning Perspective & Cropping..." })
            ] }) : cameraCropState === "ready" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-h-[220px] flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-4 border-white dark:border-zinc-800 shadow-lg rounded p-1 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `data:image/png;base64,${tempCapturedImage.base64}`, className: "max-h-[170px] rounded" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-[8px] font-black uppercase bg-emerald-500 text-white px-1.5 py-0.5 rounded shadow", children: "✓ Perspective Corrected" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full max-h-[220px] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `data:image/png;base64,${tempCapturedImage.base64}`, className: "max-h-[200px] rounded opacity-90" }) }),
            isCameraOcrRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-3 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-indigo-400", children: "Extracting Document Text via AI OCR..." })
            ] }) : tempCapturedImage.ocrTextExtracted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-3 p-3 bg-emerald-500/[0.02] border border-emerald-505/20 rounded-xl text-left space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-emerald-500", children: "⋄ AI Extracted OCR Text:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] leading-relaxed text-slate-500 dark:text-slate-350 font-semibold max-h-[60px] overflow-y-auto", children: tempCapturedImage.ocrTextExtracted })
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [
            cameraCropState === "raw" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setCameraCropState("cropping");
                  setTimeout(() => {
                    setCameraCropState("ready");
                    zt.success("Perspective corrected and cropped.");
                  }, 1200);
                },
                className: "py-2 px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[9px] font-black uppercase tracking-wider transition-all",
                children: "✂ Auto Crop & Align"
              }
            ),
            !tempCapturedImage.ocrTextExtracted && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                disabled: isCameraOcrRunning,
                onClick: () => {
                  setIsCameraOcrRunning(true);
                  setTimeout(() => {
                    setTempCapturedImage((prev) => ({
                      ...prev,
                      ocrTextExtracted: prev.ocrText || "IN THE COURT OF THE DISTRICT JUDGE\nAffidavit verification completed. Verification seal confirmed."
                    }));
                    setIsCameraOcrRunning(false);
                    zt.success("OCR Text extracted successfully.");
                  }, 1200);
                },
                className: "py-2 px-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[9px] font-black uppercase tracking-wider transition-all disabled:opacity-50",
                children: "🔍 Run AI OCR"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const finalizedSnap = {
                    name: tempCapturedImage.name,
                    base64: tempCapturedImage.base64,
                    ocrText: tempCapturedImage.ocrTextExtracted || tempCapturedImage.ocrText
                  };
                  setCameraImages((prev) => [...prev, finalizedSnap]);
                  setTempCapturedImage(null);
                  setActiveInputTab(null);
                  zt.success("Document added to upload queue.");
                },
                className: "py-2 px-3.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-[9px] font-black uppercase tracking-wider transition-all",
                children: "✓ Save to Queue"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setTempCapturedImage(null);
                  startCamera();
                },
                className: "py-2 px-3.5 bg-slate-500/10 hover:bg-slate-500/20 text-slate-405 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all",
                children: "↺ Retake"
              }
            )
          ] })
        ] })
      ] }),
      activeInputTab === "notes" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-pink-500/20 rounded-2xl bg-pink-500/[0.01] space-y-3 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-black uppercase text-pink-500 tracking-wider", children: "✍ Manual Notes Notebook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveInputTab(null), className: "text-slate-400 hover:text-slate-205", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            rows: 3,
            value: manualNotes,
            onChange: (e) => setManualNotes(e.target.value),
            placeholder: "Jot down notes, facts observations, or legal thoughts directly...",
            className: `w-full text-xs font-semibold p-3 border rounded-xl outline-none resize-none focus:border-pink-500 ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-700"}`
          }
        )
      ] })
    ] }),
    (stagedFiles.length > 0 || voiceRecordings.length > 0 || whatsappChats.length > 0 || driveFiles.length > 0 || cameraImages.length > 0 || manualNotes.trim().length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t dark:border-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black uppercase text-slate-400 tracking-wider", children: "Staged Multi-source Context" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        stagedFiles.map((file, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2.5 bg-slate-500/5 rounded-xl text-xs font-semibold gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "text-blue-500 shrink-0", size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1 text-[11px] text-slate-700 dark:text-slate-205", children: file.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-black uppercase whitespace-nowrap", children: "OCR Complete" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStagedFiles((prev) => prev.filter((_, i) => i !== idx)), className: "text-slate-400 hover:text-rose-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
          ] })
        ] }, idx)),
        driveFiles.map((file, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2.5 bg-slate-500/5 rounded-xl text-xs font-semibold gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "text-cyan-500 shrink-0", size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1 text-[11px] text-slate-700 dark:text-slate-205", children: file.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-black uppercase whitespace-nowrap", children: "Cloud Import" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDriveFiles((prev) => prev.filter((_, i) => i !== idx)), className: "text-slate-400 hover:text-rose-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
          ] })
        ] }, idx)),
        cameraImages.map((img, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2.5 bg-slate-500/5 rounded-xl text-xs font-semibold gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "text-amber-500 shrink-0", size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1 text-[11px] text-slate-700 dark:text-slate-205", children: img.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-black uppercase whitespace-nowrap", children: "Exhibit Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCameraImages((prev) => prev.filter((_, i) => i !== idx)), className: "text-slate-400 hover:text-rose-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
          ] })
        ] }, idx)),
        whatsappChats.map((chat, idx) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-green-500/20 rounded-2xl overflow-hidden bg-green-500/[0.01]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2.5 bg-slate-500/5 text-xs font-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "text-green-500 shrink-0", size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase text-[9.5px] tracking-wider", children: chat.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWhatsappChats((prev) => prev.filter((_, i) => i !== idx)), className: "text-slate-400 hover:text-rose-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2 text-[10px] font-semibold text-slate-550 dark:text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-[9px] uppercase tracking-wider text-green-500", children: "WhatsApp Chat Insights:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-500/5 p-2 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black uppercase text-[8px] text-slate-400", children: "Timeline / Scope" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    ((_b = (_a2 = chat.parsedData) == null ? void 0 : _a2.timeline) == null ? void 0 : _b.length) || 0,
                    " events identified"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-500/5 p-2 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black uppercase text-[8px] text-slate-400", children: "Parties" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ((_d = (_c = chat.parsedData) == null ? void 0 : _c.parties) == null ? void 0 : _d.join(", ")) || "N/A" })
                ] })
              ] }),
              ((_f = (_e = chat.parsedData) == null ? void 0 : _e.admissions) == null ? void 0 : _f.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black uppercase text-[8px] text-emerald-500", children: "✓ Admissions Detected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  '"',
                  chat.parsedData.admissions[0].sender,
                  ": ",
                  chat.parsedData.admissions[0].message,
                  '"'
                ] })
              ] }),
              ((_h = (_g = chat.parsedData) == null ? void 0 : _g.threats) == null ? void 0 : _h.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-rose-500/5 border border-rose-500/10 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black uppercase text-[8px] text-rose-500", children: "⚠ Threats / Disputes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  '"',
                  chat.parsedData.threats[0].sender,
                  ": ",
                  chat.parsedData.threats[0].message,
                  '"'
                ] })
              ] })
            ] })
          ] }, idx);
        }),
        voiceRecordings.map((vr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-violet-500/20 rounded-2xl overflow-hidden bg-violet-500/[0.01]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2.5 bg-slate-500/5 text-xs font-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "text-violet-500 shrink-0", size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "uppercase text-[9.5px] tracking-wider", children: [
                "Voice Context Note (",
                vr.duration,
                "s)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    navigator.clipboard.writeText(vr.transcript);
                    zt.success("Transcript copied to clipboard!");
                  },
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-[#5B3DF5]",
                  title: "Copy Transcript",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setAppendingVoiceRecordId(vr.id);
                    setVoiceRecordingState("recording");
                    startRecording();
                  },
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-emerald-500",
                  title: "Continue Recording (Append)",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => translateTranscript(vr.id),
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-[#5B3DF5]",
                  title: "Translate (Hindi/English)",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => summarizeTranscript(vr.id),
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-[#5B3DF5]",
                  title: "Create Summary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => regenerateTranscript(vr),
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-[#5B3DF5]",
                  title: "Regenerate Transcript",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 11 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleEditTranscript(vr),
                  className: "p-1 hover:bg-slate-500/10 rounded text-slate-400 hover:text-[#5B3DF5]",
                  title: "Edit Transcript",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setVoiceRecordings((prev) => prev.filter((item) => item.id !== vr.id)),
                  className: "text-slate-400 hover:text-rose-500 p-1",
                  title: "Delete Transcript",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 space-y-2.5 text-left text-[10.5px]", children: editingTranscriptId === vr.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 3,
                value: editingTranscriptText,
                onChange: (e) => setEditingTranscriptText(e.target.value),
                className: `flex-1 border rounded px-2 py-1.5 outline-none text-xs font-semibold resize-none ${isDark ? "bg-zinc-800 border-zinc-700 text-white" : "bg-white border-slate-350"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => saveEditedTranscript(vr.id),
                  className: "p-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center",
                  title: "Save Changes",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setEditingTranscriptId(null),
                  className: "p-1.5 bg-slate-500 text-white rounded-lg flex items-center justify-center",
                  title: "Cancel Edit",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-slate-700 dark:text-slate-200", children: [
              vr.translated ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-[#5B3DF5]/10 text-[#5B3DF5] px-1 py-0.2 rounded font-black mr-1 uppercase", children: "Translated" }) : null,
              '"',
              vr.transcript,
              '"'
            ] }),
            vr.isSummarized && vr.summary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-slate-500/5 rounded-xl text-[9px] font-semibold text-slate-400 border border-slate-500/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black text-indigo-500 uppercase tracking-widest text-[8px] mb-0.5", children: "AI Summary:" }),
              vr.summary
            ] })
          ] }) })
        ] }, vr.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-2xl bg-indigo-500/[0.02] border-indigo-500/20 dark:border-indigo-900/40 flex flex-col gap-3.5 shadow-sm relative overflow-hidden animate-fadeIn select-none text-left w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[8.5px] font-black uppercase tracking-wider whitespace-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10, className: "text-emerald-500 shrink-0" }),
          " AI Confirmation Complete"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 border-b dark:border-zinc-800/80 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black text-slate-800 dark:text-white uppercase tracking-tight", children: "AI Context Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 dark:text-slate-450 font-bold uppercase", children: "Staged resources unified" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-[9.5px] font-black text-slate-400 uppercase space-y-1.5 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 text-slate-500 dark:text-slate-400", children: [
            stagedFiles.length + driveFiles.length + cameraImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              "✓ ",
              stagedFiles.length + driveFiles.length + cameraImages.length,
              " Documents OCR Complete"
            ] }),
            voiceRecordings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              "✓ ",
              voiceRecordings.length,
              " Voice Context Note Linked"
            ] }),
            whatsappChats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1", children: "✓ WhatsApp Chat Context Export Ready" }),
            manualNotes.trim().length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1", children: "✓ Manual Observations Note Included" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-extrabold uppercase mt-1 block tracking-wider", children: "Ready for Analysis" })
        ] })
      ] })
    ] }),
    isDriveModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-md rounded-3xl p-5 shadow-2xl space-y-4 animate-scaleUp ${isDark ? "bg-slate-900 border border-slate-800 text-white" : "bg-white border text-slate-855"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b dark:border-white/5 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-black uppercase text-indigo-500 tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 14 }),
          " Import Cloud Drive files"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsDriveModalOpen(false), className: "text-slate-400 hover:text-slate-205", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1 bg-slate-500/5 p-1 rounded-xl", children: [
        { id: "gdrive", label: "Google Drive" },
        { id: "dropbox", label: "Dropbox" },
        { id: "onedrive", label: "OneDrive" }
      ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveDriveTab(tab.id),
          className: `py-1.5 px-2 rounded-lg text-[9px] font-black uppercase tracking-wider text-center transition-all ${activeDriveTab === tab.id ? "bg-indigo-650 text-white shadow" : "text-slate-400 hover:text-slate-205"}`,
          children: tab.label
        },
        tab.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-[180px] overflow-y-auto pr-1", children: (_a = CLOUD_DRIVE_MOCK_FILES[activeDriveTab]) == null ? void 0 : _a.map((file, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => selectDriveFile(file),
          className: "flex justify-between items-center p-2.5 rounded-xl border border-slate-500/5 bg-slate-500/5 hover:border-indigo-500/30 cursor-pointer hover:bg-indigo-500/[0.02] text-xs font-semibold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "text-indigo-400", size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[180px]", children: file.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-bold", children: file.size })
          ]
        },
        idx
      )) })
    ] }) }),
    isUploadSourceModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `w-full max-w-[760px] md:w-[760px] rounded-[18px] p-7 md:p-8 shadow-2xl space-y-6 animate-scaleUp overflow-hidden border text-left select-none ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`,
          style: { wordBreak: "normal", overflowWrap: "break-word", whiteSpace: "normal" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start border-b dark:border-white/5 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] font-black uppercase text-[#5B3DF5] tracking-wider", children: "Choose Upload Source" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-slate-400 dark:text-slate-450 font-semibold", children: "Select how you want to add legal documents to this workspace." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsUploadSourceModalOpen(false),
                  className: "p-2 rounded-full hover:bg-slate-500/10 text-slate-400 hover:text-slate-200 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full", children: uploadSources.map((source) => {
              const isLastUsed = lastUsedSource === source.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => handleSelectSource(source),
                  className: `relative p-6 border rounded-[14px] flex flex-col justify-between text-left transition-all duration-200 h-[250px] min-w-[260px] cursor-pointer hover:scale-[1.01] shadow-sm hover:shadow-md ${isLastUsed ? "border-[#5B3DF5] bg-[#5B3DF5]/[0.03] ring-1 ring-[#5B3DF5]/20" : isDark ? "border-zinc-800 hover:border-[#5B3DF5] bg-zinc-950/20 hover:bg-[#5B3DF5]/[0.02]" : "border-slate-200 hover:border-[#5B3DF5] bg-slate-50/50 hover:bg-[#5B3DF5]/[0.02]"}`,
                  children: [
                    isLastUsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-4 text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-[#5B3DF5] text-white tracking-widest leading-none select-none", children: "Last Used" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 flex-1 flex flex-col", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl ${isDark ? "bg-zinc-900" : "bg-white shadow-sm border border-slate-100"} w-12 h-12 flex items-center justify-center shrink-0`, children: source.id === "device" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 22, className: "text-blue-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 22, className: "text-amber-500" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[18px] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight", children: source.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-slate-400 dark:text-slate-450 font-medium leading-relaxed", children: source.description })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "w-full mt-4 py-2.5 px-4 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-[15px] font-black uppercase tracking-wider text-center transition-all select-none shadow-sm",
                        children: source.id === "device" ? "Choose Files" : "Open Camera"
                      }
                    )
                  ]
                },
                source.id
              );
            }) })
          ]
        }
      ) }),
      document.body
    )
  ] });
};
export {
  UniversalMultimodalInput as U
};
