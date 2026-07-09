import jsPDF from "jspdf";

export type DocKind = "notice" | "judgment" | "letter";

export type LegalDocData = {
  firmName: string;
  firmTagline?: string;
  reference?: string;
  caseNumber?: string;
  court?: string;
  recipient: string;
  address?: string;
  subject?: string;
  body: string;
  place?: string;
  date: string;
  signatory?: string;
  signatoryTitle?: string;
};

const TITLES: Record<DocKind, string> = {
  notice: "LEGAL NOTICE",
  judgment: "JUDGMENT",
  letter: "FORMAL LETTER",
};

export function generateLegalPdf(kind: DocKind, data: LegalDocData) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 56;
  let y = margin;

  // Firm header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(11, 31, 77);
  doc.text(data.firmName, pageW / 2, y, { align: "center" });
  y += 18;
  if (data.firmTagline) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(data.firmTagline, pageW / 2, y, { align: "center" });
    y += 12;
  }
  doc.setDrawColor(201, 162, 39);
  doc.setLineWidth(0.8);
  doc.line(margin, y + 4, pageW - margin, y + 4);
  y += 28;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(11, 31, 77);
  doc.text(TITLES[kind], pageW / 2, y, { align: "center" });
  y += 26;

  // Reference block
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  const refLines: string[] = [];
  if (data.reference || data.caseNumber) refLines.push(`Ref / Case No.: ${data.reference ?? data.caseNumber}`);
  if (data.court) refLines.push(`Court: ${data.court}`);
  refLines.push(`Date: ${data.date}`);
  if (data.place) refLines.push(`Place: ${data.place}`);
  for (const line of refLines) { doc.text(line, margin, y); y += 14; }
  y += 8;

  // Recipient
  doc.setFont("helvetica", "bold");
  doc.text("To:", margin, y); y += 14;
  doc.setFont("helvetica", "normal");
  doc.text(data.recipient, margin, y); y += 14;
  if (data.address) {
    const addrLines = doc.splitTextToSize(data.address, pageW - margin * 2);
    doc.text(addrLines, margin, y);
    y += addrLines.length * 14;
  }
  y += 10;

  if (data.subject) {
    doc.setFont("helvetica", "bold");
    const subj = `Subject: ${data.subject}`;
    const subjLines = doc.splitTextToSize(subj, pageW - margin * 2);
    doc.text(subjLines, margin, y);
    y += subjLines.length * 14 + 6;
  }

  // Body
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const paragraphs = data.body.split(/\n\s*\n/);
  for (const p of paragraphs) {
    const wrapped = doc.splitTextToSize(p.trim(), pageW - margin * 2);
    for (const line of wrapped) {
      if (y > pageH - margin - 100) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += 15;
    }
    y += 8;
  }

  // Signature
  y = Math.max(y, pageH - margin - 90);
  if (y > pageH - margin - 90) { doc.addPage(); y = margin; }
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Sincerely,", margin, y); y += 40;
  doc.setDrawColor(80, 80, 80);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + 200, y);
  y += 14;
  doc.setFont("helvetica", "bold");
  doc.text(data.signatory || "_____________________", margin, y); y += 12;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90, 90, 90);
  if (data.signatoryTitle) doc.text(data.signatoryTitle, margin, y);

  // Footer
  const footer = `${data.firmName} — Generated ${new Date().toLocaleString()}`;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text(footer, pageW / 2, pageH - 24, { align: "center" });

  const safe = (s: string) => s.replace(/[^a-z0-9-_]+/gi, "_").slice(0, 40);
  const name = `${TITLES[kind]}_${safe(data.reference || data.recipient || "document")}.pdf`;
  doc.save(name);
}
