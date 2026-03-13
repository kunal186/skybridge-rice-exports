import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import riceFieldsImg from "@/assets/rice-fields.jpg";
import qualityImg from "@/assets/quality-lab.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Users, value: "500+", label: "Satisfied Buyers" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const values = [
  "Direct sourcing from premium Indian rice mills",
  "Stringent multi-stage quality control processes",
  "Competitive FOB and CIF pricing",
  "Timely shipments with full export documentation",
  "Private labeling and custom packaging",
  "Dedicated account managers for every client",
  "Long-term partnership approach",
  "Compliance with international food safety standards",
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 bg-gradient-forest">
      <div className="absolute inset-0 opacity-15">
        <img src={riceFieldsImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
            Skybridge Global
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
            A trusted name in Indian rice exports, connecting the world's finest rice to global markets with quality, consistency, and integrity.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <SectionHeading badge="Our Story" title="Built on Trust, Driven by Quality" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Skybridge Global was founded with a clear mission: to bridge the gap between India's rich agricultural heritage and the growing global demand for premium rice. We work directly with rice mills across India's premier rice-growing regions — Punjab, Haryana, and Uttar Pradesh — to source the finest Basmati and Non-Basmati rice varieties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team brings deep expertise in international trade, food quality management, and logistics. We understand the specific requirements of importers in the Middle East, Africa, and Europe, and we tailor our offerings accordingly — from grain specifications to packaging and documentation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Skybridge Global, we don't just export rice. We build lasting partnerships with our buyers, providing consistent quality, competitive pricing, and reliable supply chain management that our clients can depend on, shipment after shipment.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <img src={qualityImg} alt="Quality Control" className="rounded-2xl shadow-elevated w-full h-[450px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card shadow-elevated"
            >
              <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Commitment"
          title="What Sets Us Apart"
          description="Our commitment to excellence extends across every aspect of our operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
