import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Droplets, ScanLine, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import qualityImg from "@/assets/quality-lab.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const processes = [
  { icon: Microscope, title: "Lab Testing", desc: "Every batch is tested in accredited laboratories for purity, moisture content, grain length, aroma, and presence of foreign matter." },
  { icon: Droplets, title: "Moisture Control", desc: "Rigorous moisture monitoring throughout storage and packaging to maintain optimal grain quality and prevent spoilage." },
  { icon: ScanLine, title: "Grain Sorting", desc: "Advanced color sorting and grading machines ensure uniform grain quality, removing discolored, broken, or immature grains." },
  { icon: ShieldCheck, title: "Export Standards", desc: "All products comply with FSSAI, ISO, and destination country import regulations. We provide all required quality certificates." },
  { icon: Award, title: "Certifications", desc: "Our mill partners maintain HACCP, ISO 22000, and BRC certifications, ensuring world-class food safety standards." },
];

const standards = [
  "FSSAI Compliance",
  "APEDA Registered",
  "ISO 22000 Certified Mills",
  "HACCP Standards",
  "BRC Certified Partners",
  "Phytosanitary Compliance",
  "Destination-specific labeling standards",
  "Fumigation as per ISPM-15",
];

const Quality = () => (
  <Layout>
    <section className="py-32 bg-gradient-forest">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            Quality Assurance
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
            Uncompromising Quality
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
            From farm to port, every step is monitored to deliver rice that meets the highest international standards.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeIn}>
            <img src={qualityImg} alt="Quality Lab" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <SectionHeading badge="Our Process" title="Multi-Stage Quality Control" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quality is not just a promise at Skybridge Global — it's embedded in every stage of our operations. From the moment rice arrives at our processing facility to the final containerized shipment, we implement multiple quality checkpoints to ensure consistency and excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our quality team works with accredited testing laboratories and uses advanced sorting technology to guarantee that every consignment meets your specifications and the import requirements of your country.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((item, i) => (
            <motion.div key={item.title} {...fadeIn} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-background border border-border hover:shadow-elevated transition-shadow">
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Certifications" title="International Standards & Compliance" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {standards.map((s, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground text-sm font-medium">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Quality;
