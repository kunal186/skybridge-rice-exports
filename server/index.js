import express from "express";
import cors from "cors";
import { Resend } from "resend";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors({
  origin: ['https://skybridge-rice-exports.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    country TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    rice_type TEXT NOT NULL,
    packaging TEXT NOT NULL,
    quantity TEXT NOT NULL,
    destination_port TEXT NOT NULL,
    price_term TEXT,
    target_price TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log("✅ Database connected");

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/quote", async (req, res) => {
  const { fullName, companyName, country, email, whatsapp, riceType, packaging, quantity, destinationPort, priceTerm, targetPrice, message } = req.body;

  const required = { fullName, companyName, country, email, whatsapp, riceType, packaging, quantity, destinationPort };
  for (const [key, value] of Object.entries(required)) {
    if (!value || !String(value).trim()) {
      return res.status(400).json({ error: `Field '${key}' is required.` });
    }
  }

  let quoteId;
  try {
    const result = await pool.query(
      `INSERT INTO quotes (full_name, company_name, country, email, whatsapp, rice_type, packaging, quantity, destination_port, price_term, target_price, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id`,
      [fullName, companyName, country, email, whatsapp, riceType, packaging, quantity, destinationPort, priceTerm || null, targetPrice || null, message || null]
    );
    quoteId = result.rows[0].id;
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ error: "Database error." });
  }

  try {
    await resend.emails.send({
      from: "Skybridge Website <noreply@skybridgeglobal.in>",
      to: ["contact@skybridgeglobal.in"],
      replyTo: email,
      subject: `New Quote #${quoteId} — ${fullName} | ${riceType} | ${country}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0c97f;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1a3c2e,#2d5a40);padding:28px 24px;text-align:center;">
            <h1 style="color:#e0c97f;margin:0;font-size:22px;">New Quote Request</h1>
            <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px;">Skybridge Global — Inquiry #${quoteId}</p>
          </div>
          <div style="padding:28px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${[
                ["Full Name", fullName], ["Company", companyName], ["Country", country],
                ["Email", email], ["WhatsApp", whatsapp], ["Rice Type", riceType],
                ["Packaging", packaging], ["Quantity", quantity], ["Destination Port", destinationPort],
                ...(priceTerm ? [["Price Term", priceTerm]] : []),
                ...(targetPrice ? [["Target Price", targetPrice]] : []),
                ...(message ? [["Message", message]] : []),
              ].map(([label, val], i) => `
                <tr style="background:${i % 2 === 0 ? "#fff" : "#f8f6f0"};">
                  <td style="padding:10px 12px;color:#888;width:38%;border-bottom:1px solid #f0ede4;">${label}</td>
                  <td style="padding:10px 12px;font-weight:600;color:#1a1a1a;border-bottom:1px solid #f0ede4;">${val}</td>
                </tr>
              `).join("")}
            </table>
          </div>
          <div style="background:#f5f0e8;padding:14px;text-align:center;">
            <p style="margin:0;color:#999;font-size:12px;">Quote #${quoteId} · Skybridge Global · ${new Date().toUTCString()}</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email error:", err);
  }

  return res.json({ success: true, id: quoteId });
});

app.get("/api/quotes", async (req, res) => {
  const result = await pool.query("SELECT * FROM quotes ORDER BY created_at DESC");
  res.json(result.rows);
});

app.get("/", (req, res) => res.json({ status: "ok", service: "Skybridge API" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Skybridge backend running on port ${PORT}`));
