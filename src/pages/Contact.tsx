import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_NUMBER = "919319904455";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const riceTypes = [
  "1121 Steam Basmati",
  "1121 Sella Basmati (Golden)",
  "1509 Steam Basmati",
  "1509 Sella Basmati",
  "Pusa Basmati",
  "Sugandha Steam",
  "Sugandha Sella",
  "Sona Masoori",
  "IR-64 Parboiled",
  "IR-64 Raw",
  "Other (mention in message)",
];

const packagingOptions = [
  "25 kg PP Bag",
  "50 kg PP Bag",
  "5 kg Consumer Pack",
  "10 kg Consumer Pack",
  "1 kg / 2 kg Retail Pack",
  "Jute Bag",
  "Custom / Private Label",
];

const priceTerms = ["FOB", "CIF", "CNF", "CFR", "EXW"];

const initialForm = {
  fullName: "",
  companyName: "",
  country: "",
  email: "",
  whatsapp: "",
  riceType: "",
  packaging: "",
  quantity: "",
  destinationPort: "",
  priceTerm: "",
  targetPrice: "",
  message: "",
};

const inputCls =
  "w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
    {children}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: [string, string][] = [
      ["fullName", "Full Name"],
      ["companyName", "Company Name"],
      ["country", "Country"],
      ["email", "Email"],
      ["whatsapp", "WhatsApp Number"],
      ["riceType", "Rice Type"],
      ["packaging", "Packaging"],
      ["quantity", "Quantity Required"],
      ["destinationPort", "Destination Port"],
    ];

    for (const [field, label] of requiredFields) {
      if (!form[field as keyof typeof form].trim()) {
        toast.error(`Please fill in: ${label}`);
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");

      setSubmittedEmail(form.email);
      setSubmitted(true);
      setForm(initialForm);
      toast.success("Quote request submitted! We'll respond within 24 hours.");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Skybridge Global, I'm interested in sourcing Indian rice. Please share your product catalog and pricing."
  );

  return (
    <Layout>
      <section className="py-32 bg-gradient-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: "hsl(40, 20%, 98%)" }}>
              Let's Do Business
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsla(40, 20%, 98%, 0.8)" }}>
              Ready to source premium Indian rice? Get in touch with our export team for pricing, samples, and partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <a href="mailto:contact@skybridgeglobal.in" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-colors">
                      <Mail className="w-5 h-5 text-gold-dark group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Email</div>
                      <div className="text-muted-foreground text-sm">contact@skybridgeglobal.in</div>
                    </div>
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-colors">
                      <Phone className="w-5 h-5 text-gold-dark group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">WhatsApp / Phone</div>
                      <div className="text-muted-foreground text-sm">+91 93199 04455</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Location</div>
                      <div className="text-muted-foreground text-sm">India</div>
                    </div>
                  </div>
                </div>
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <div className="bg-background border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground text-sm mb-3">What happens next?</h4>
                <ol className="space-y-2 text-sm text-muted-foreground list-none">
                  {["We review your requirements", "Our team prepares a custom quote", "You receive pricing within 24 hours"].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold-light text-gold-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-background border border-border rounded-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you! Our team will get back to you within 24 hours at{" "}
                      <span className="font-medium text-foreground">{submittedEmail}</span>.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-card transition-colors">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">Get My Best Price</h3>
                    <p className="text-muted-foreground text-sm mb-6">Fill in the details below and we'll send you a tailored quote.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Full Name *"><input type="text" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your full name" maxLength={100} className={inputCls} /></Field>
                        <Field label="Company Name *"><input type="text" value={form.companyName} onChange={(e) => set("companyName", e.target.value)} placeholder="Your company" maxLength={100} className={inputCls} /></Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Country *"><input type="text" value={form.country} onChange={(e) => set("country", e.target.value)} placeholder="Your country" maxLength={100} className={inputCls} /></Field>
                        <Field label="Email *"><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="your@email.com" maxLength={255} className={inputCls} /></Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="WhatsApp Number *"><input type="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+971 50 123 4567" maxLength={20} className={inputCls} /></Field>
                        <Field label="Rice Type *">
                          <select value={form.riceType} onChange={(e) => set("riceType", e.target.value)} className={inputCls}>
                            <option value="">Select rice variety</option>
                            {riceTypes.map((r) => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Packaging *">
                          <select value={form.packaging} onChange={(e) => set("packaging", e.target.value)} className={inputCls}>
                            <option value="">Select packaging</option>
                            {packagingOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </Field>
                        <Field label="Quantity Required *"><input type="text" value={form.quantity} onChange={(e) => set("quantity", e.target.value)} placeholder="e.g. 1 x 20ft Container (25 MT)" maxLength={100} className={inputCls} /></Field>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Destination Port *"><input type="text" value={form.destinationPort} onChange={(e) => set("destinationPort", e.target.value)} placeholder="e.g. Jebel Ali, Dubai" maxLength={100} className={inputCls} /></Field>
                        <Field label="Price Term (FOB / CIF / CNF)">
                          <select value={form.priceTerm} onChange={(e) => set("priceTerm", e.target.value)} className={inputCls}>
                            <option value="">Select price term</option>
                            {priceTerms.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </Field>
                      </div>
                      <Field label="Target Price (optional)"><input type="text" value={form.targetPrice} onChange={(e) => set("targetPrice", e.target.value)} placeholder="e.g. USD 850 / MT" maxLength={100} className={inputCls} /></Field>
                      <Field label="Additional Message"><textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={4} placeholder="Any special requirements, certifications needed, or questions..." maxLength={2000} className={`${inputCls} resize-none`} /></Field>
                      <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-gold text-forest-dark font-semibold shadow-gold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? (<><span className="w-4 h-4 border-2 border-forest-dark/30 border-t-forest-dark rounded-full animate-spin" />Sending...</>) : (<><Send className="w-4 h-4" />Get My Best Price</>)}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
