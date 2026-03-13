import { motion } from "framer-motion";
import { Package, Tag, Check } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import riceBagsImg from "@/assets/rice-bags.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const packagingOptions = [
  { weight: "5 kg", type: "Non-woven / PP Bag", best: "Retail / Supermarket" },
  { weight: "10 kg", type: "Non-woven / PP Bag", best: "Retail / Grocery" },
  { weight: "25 kg", type: "PP Woven Bag", best: "Wholesale / HoReCa" },
  { weight: "50 kg", type: "PP Woven Bag", best: "Bulk / Industrial" },
];

const features = [
  "Food-grade PP and non-woven bag materials",
  "Custom printing with your brand logo and design",
  "Moisture-resistant inner lining",
  "Tamper-evident sealing",
  "Multi-color gravure printing available",
  "Private label and OEM packaging",
  "Compliance with import country regulations",
  "Barcode and nutritional info printing",
];

const Packaging = () => (
  <Layout>
    <section className="py-32 bg-gradient-forest">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            Packaging
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
            Packaging Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
            Professional packaging options with private labeling available for all markets.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <img src={riceBagsImg} alt="Rice Packaging" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <SectionHeading badge="Options" title="Packaging Sizes" center={false} />
            <div className="space-y-4">
              {packagingOptions.map((opt) => (
                <div key={opt.weight} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border">
                  <div className="w-14 h-14 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                    <Package className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{opt.weight}</div>
                    <div className="text-sm text-muted-foreground">{opt.type} • Best for: {opt.best}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Private Labeling"
          title="Custom Branding & Packaging"
          description="We offer comprehensive private labeling services so you can sell under your own brand."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-light text-gold-dark">
            <Tag className="w-5 h-5" />
            <span className="font-semibold text-sm">Private labeling available for orders of 1 container (25 MT) or more</span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Packaging;
