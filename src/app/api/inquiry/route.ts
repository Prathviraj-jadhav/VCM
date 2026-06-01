import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Unified Interface for incoming submissions
interface InquiryPayload {
  type: "project" | "careers" | "ugc" | "contact";
  data: any;
}

export async function POST(request: Request) {
  try {
    const body: InquiryPayload = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Invalid submission data" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const submissionId = `inq_${Math.random().toString(36).substring(2, 9)}`;

    // Prepare human-readable text and HTML blocks
    let subject = "";
    let plainText = "";
    let htmlContent = "";

    if (type === "project") {
      subject = `New Project Inquiry: ${data.name} (${data.company || "N/A"})`;
      plainText = `
Hi Vibe Create Media Team,

A new project inquiry has been received through the website.

--- PROJECT BRIEF DETAILS ---
* Services Needed: ${Array.isArray(data.services) ? data.services.join(", ") : data.services || "N/A"}
* Business Stage: ${data.businessStage || "N/A"}
* Biggest Challenge: ${data.biggestChallenge || "N/A"}
* Monthly Budget: ${data.budget || "N/A"}
* Timeline to Start: ${data.timeline || "N/A"}
* Preferred Call Time (IST): ${data.callTime || "N/A"}

--- CLIENT CONTACT INFO ---
* Name: ${data.name}
* Email: ${data.email}
* Phone: ${data.phone}
* Company Name: ${data.company || "N/A"}

--- ADDITIONAL NOTES ---
${data.message || "No additional notes provided."}

Submitted: ${timestamp}
Inquiry ID: ${submissionId}
      `.trim();

      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #FFD400; background: #000; padding: 15px; margin-top: 0; border-radius: 8px 8px 0 0;">New Project Inquiry</h2>
          <div style="padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; background: #fafafa;">
            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px; margin-top: 0;">Project Brief</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Services Needed:</td><td>${Array.isArray(data.services) ? data.services.join(", ") : data.services || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Business Stage:</td><td>${data.businessStage || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Biggest Challenge:</td><td>${data.biggestChallenge || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Monthly Budget:</td><td>${data.budget || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Timeline:</td><td>${data.timeline || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Call Time:</td><td>${data.callTime || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Contact Info</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${data.company || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Additional Notes</h3>
            <p style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">${data.message || "No additional notes provided."}</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888; margin-bottom: 0;">Submission Timestamp: ${timestamp} | Inquiry ID: ${submissionId}</p>
          </div>
        </div>
      `;
    } else if (type === "careers") {
      subject = `Job Application: ${data.name} - ${data.position}`;
      plainText = `
Hi Vibe Create Media Team,

A new job application has been submitted through the careers section of the website.

--- POSITION & EXPERIENCE ---
* Position Applied For: ${data.position}
* Experience Level: ${data.experience || "N/A"}
* Current/Last Role: ${data.currentRole || "N/A"}
* Notice Period: ${data.noticePeriod || "N/A"}

--- APPLICANT CONTACT INFO ---
* Name: ${data.name}
* Email: ${data.email}
* Phone: ${data.phone}
* Portfolio / LinkedIn URL: ${data.portfolio || "N/A"}

--- COVER NOTE ---
${data.coverNote || "No cover note provided."}

Submitted: ${timestamp}
Inquiry ID: ${submissionId}
      `.trim();

      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #FFD400; background: #000; padding: 15px; margin-top: 0; border-radius: 8px 8px 0 0;">New Job Application</h2>
          <div style="padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; background: #fafafa;">
            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px; margin-top: 0;">Application Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Position:</td><td>${data.position}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Experience:</td><td>${data.experience || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Current/Last Role:</td><td>${data.currentRole || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Notice Period:</td><td>${data.noticePeriod || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Contact & Links</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Portfolio/LinkedIn:</td><td>${data.portfolio ? `<a href="${data.portfolio}" target="_blank">${data.portfolio}</a>` : "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Cover Note</h3>
            <p style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">${data.coverNote || "No cover note provided."}</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888; margin-bottom: 0;">Submission Timestamp: ${timestamp} | Inquiry ID: ${submissionId}</p>
          </div>
        </div>
      `;
    } else if (type === "ugc") {
      subject = `New UGC Project Brief: ${data.name} (${data.company || "N/A"})`;
      plainText = `
Hi Vibe Create Media Team,

A new UGC (User Generated Content) project brief has been received.

--- UGC PROJECT BRIEF ---
* Content Category: ${data.category || "N/A"}
* Budget Range: ${data.budget || "N/A"}
* Video Count: ${data.videoCount || "N/A"}
* Delivery Timeline: ${data.timeline || "N/A"}
* Voiceover Required?: ${data.voiceover || "N/A"}
* Editing Required?: ${data.editing || "N/A"}

--- CONTACT INFO ---
* Name: ${data.name}
* Email: ${data.email}
* Phone: ${data.phone}
* Company: ${data.company || "N/A"}

--- ADDITIONAL NOTES ---
${data.message || "No additional notes provided."}

Submitted: ${timestamp}
Inquiry ID: ${submissionId}
      `.trim();

      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #FFD400; background: #000; padding: 15px; margin-top: 0; border-radius: 8px 8px 0 0;">New UGC Project Brief</h2>
          <div style="padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; background: #fafafa;">
            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px; margin-top: 0;">Brief Specifications</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Content Category:</td><td>${data.category || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Budget Range:</td><td>${data.budget || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Video Count:</td><td>${data.videoCount || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Timeline:</td><td>${data.timeline || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Voiceover Required:</td><td>${data.voiceover || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Editing Required:</td><td>${data.editing || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${data.company || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">UGC Goals & Description</h3>
            <p style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">${data.message || "No additional details provided."}</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888; margin-bottom: 0;">Submission Timestamp: ${timestamp} | Inquiry ID: ${submissionId}</p>
          </div>
        </div>
      `;
    } else {
      // type === "contact"
      subject = `Quick Contact Inquiry: ${data.name}`;
      plainText = `
Hi Vibe Create Media Team,

A quick contact inquiry has been submitted through the main contact page.

--- CONTACT ENQUIRY ---
* Name: ${data.name}
* Email: ${data.email}
* Service of Interest: ${data.service || "N/A"}

--- MESSAGE ---
${data.message || "No message provided."}

Submitted: ${timestamp}
Inquiry ID: ${submissionId}
      `.trim();

      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #FFD400; background: #000; padding: 15px; margin-top: 0; border-radius: 8px 8px 0 0;">Quick Contact Inquiry</h2>
          <div style="padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; background: #fafafa;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Service of Interest:</td><td>${data.service || "N/A"}</td></tr>
            </table>

            <h3 style="border-bottom: 2px solid #FFD400; padding-bottom: 5px;">Message Details</h3>
            <p style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">${data.message || "No details provided."}</p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888; margin-bottom: 0;">Submission Timestamp: ${timestamp} | Inquiry ID: ${submissionId}</p>
          </div>
        </div>
      `;
    }

    // Prepare backup record for local public/inquiries.json
    const newRecord = {
      id: submissionId,
      timestamp,
      type,
      data,
    };

    // Failsafe 1: Log to stdout so the hosting service (like Vercel) captures the lead details
    console.log(`[INQUIRY RECORDED] ID: ${submissionId} | Type: ${type}`);
    console.log(JSON.stringify(newRecord, null, 2));

    // Failsafe 2: Write to local JSON file inside public/inquiries.json (mainly for local development)
    try {
      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const filePath = path.join(publicDir, "inquiries.json");
      let existingRecords: any[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const fileData = fs.readFileSync(filePath, "utf-8");
          existingRecords = fileData ? JSON.parse(fileData) : [];
          if (!Array.isArray(existingRecords)) {
            existingRecords = [];
          }
        } catch (e) {
          console.error("Failed to parse public/inquiries.json, resetting to empty array:", e);
        }
      }
      existingRecords.push(newRecord);
      fs.writeFileSync(filePath, JSON.stringify(existingRecords, null, 2), "utf-8");
      console.log(`[LOCAL SAVED] Inquiry appended successfully to public/inquiries.json`);
    } catch (fsErr) {
      console.error("Local file writing failsafe failed:", fsErr);
    }

    // Now attempt Nodemailer SMTP delivery if credentials are provided
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      console.log(`[SMTP CONFIG FOUND] Constructing nodemailer transporter...`);
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: parseInt(smtpPort, 10) === 465, // True for port 465, false for other ports (587, etc.)
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailFrom = process.env.SMTP_FROM || smtpUser;
      const mailTo = process.env.SMTP_TO || "growth@vibecreatemedia.com";

      await transporter.sendMail({
        from: `"Vibe Create Media Portal" <${mailFrom}>`,
        to: mailTo,
        replyTo: data.email || undefined,
        subject: subject,
        text: plainText,
        html: htmlContent,
      });

      console.log(`[EMAIL SENT] Inquiry mail delivered successfully to ${mailTo}`);
      return NextResponse.json({
        success: true,
        message: "Inquiry received and email sent successfully.",
        id: submissionId,
      });
    } else {
      console.log(
        `[SMTP CONFIG INCOMPLETE] Operating in Fallback Mode. credentials missing. logged to file/stdout.`
      );
      return NextResponse.json({
        success: true,
        message: "Inquiry received in fallback mode (logged to server).",
        id: submissionId,
      });
    }
  } catch (error: any) {
    console.error("Critical error in inquiry API route handler:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message || "" },
      { status: 500 }
    );
  }
}
