import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const WHATSAPP_NUMBER = "919319904455";
const API_URL = "";
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", country: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          companyName: form.company || "N/A",
          country: form.country || "N/A",
          email: form.email,
          whatsapp: "N/A",
          riceType: "General Inquiry",
          packaging: "N/A",
          quantity: "N/A",
          destinationPort: "N/A",
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");

      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", company: "", country: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello Skybridge Global, I'm interested in sourcing Indian rice.");

  return (
    <Layout>
      <section className="py-32 bg-gradient-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">Contact Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: "hsl(40, 20%, 98%)" }}>Let's Do Business</h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsla(40, 20%, 98%, 0.8)" }}>Ready to source premium Indian rice? Get in touch with our export team for pricing, samples, and partnership opportunities.</p>
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
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your full name" maxLength={100} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Company name" maxLength={100} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" maxLength={255} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                      <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your country" maxLength={100} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your requirements — rice variety, quantity, destination, packaging preferences..." maxLength={2000} />
                  </div>
                  <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-gold text-forest-dark font-semibold shadow-gold hover:opacity-90 transition-opacity disabled:opacity-60">
                    {loading ? (<><span className="w-4 h-4 border-2 border-forest-dark/30 border-t-forest-dark rounded-full animate-spin" />Sending...</>) : (<><Send className="w-4 h-4" />Submit Inquiry</>)}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
