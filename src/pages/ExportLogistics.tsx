import { motion } from "framer-motion";
import { Ship, FileText, Anchor, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import shippingImg from "@/assets/shipping-port.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const tradeTerms = [
  { term: "FOB", full: "Free On Board", desc: "We handle everything up to loading the goods onto the vessel at the port of origin. Buyer arranges ocean freight and insurance." },
  { term: "CIF", full: "Cost, Insurance & Freight", desc: "We manage the complete shipment including ocean freight and insurance to the destination port. Ideal for buyers who prefer door-to-port delivery." },
  { term: "CNF", full: "Cost & Freight", desc: "We cover the cost of goods and freight to the destination port. Buyer arranges insurance separately." },
];

const ports = [
  { name: "Mundra Port", location: "Gujarat, India", desc: "India's largest private port, strategically located for Middle East and Africa routes." },
  { name: "Nhava Sheva (JNPT)", location: "Maharashtra, India", desc: "India's busiest container port, excellent connectivity to Europe and global markets." },
];

const docs = [
  "Commercial Invoice", "Packing List", "Bill of Lading", "Certificate of Origin",
  "Phytosanitary Certificate", "Fumigation Certificate", "Quality/Weight Certificate", "Insurance Certificate (CIF)",
];

const ExportLogistics = () => (
  <Layout>
    <section className="relative py-32">
      <div className="absolute inset-0">
        <img src={shippingImg} alt="Shipping Port" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            Export & Logistics
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
            Global Shipping Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
            Reliable logistics from India's major ports to your destination, with complete export documentation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Trade Terms */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Trade Terms" title="Flexible Shipping Options" description="We offer multiple Incoterms to suit your procurement preferences." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tradeTerms.map((item, i) => (
            <motion.div key={item.term} {...fadeIn} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-background border border-border hover:shadow-elevated transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                <Ship className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">{item.term}</h3>
              <p className="text-accent font-medium text-sm mb-3">{item.full}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Ports */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Loading Ports" title="Shipping from India's Major Ports" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ports.map((port, i) => (
            <motion.div key={port.name} {...fadeIn} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-card border border-border shadow-elevated">
              <Anchor className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{port.name}</h3>
              <p className="text-accent text-sm font-medium mb-2">{port.location}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{port.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Documentation */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Documentation" title="Complete Export Documentation" description="We handle all necessary export documents for smooth customs clearance at your port." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {docs.map((doc, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
              <FileText className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground text-sm">{doc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ExportLogistics;
