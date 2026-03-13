import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-rice.jpg";
import riceFieldsImg from "@/assets/rice-fields.jpg";
import basmatiImg from "@/assets/basmati-bowl.jpg";
import sellaImg from "@/assets/sella-rice.jpg";
import nonBasmatiImg from "@/assets/non-basmati-rice.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const highlights = [
  { icon: Award, title: "High Quality Basmati", desc: "Premium long-grain rice sourced from the finest Indian paddies" },
  { icon: Truck, title: "Reliable Global Shipping", desc: "Timely deliveries to ports worldwide with full documentation" },
  { icon: ShieldCheck, title: "Competitive Pricing", desc: "Direct from source pricing with transparent trade terms" },
  { icon: Globe, title: "Trusted Export Partner", desc: "Serving importers across 30+ countries with consistency" },
];

const featuredProducts = [
  { name: "1121 Steam Basmati", img: basmatiImg, grain: "8.30mm+", desc: "Premium extra-long grain" },
  { name: "1121 Sella Basmati", img: sellaImg, grain: "8.30mm+", desc: "Golden parboiled excellence" },
  { name: "Sona Masoori", img: nonBasmatiImg, grain: "5.2mm", desc: "Lightweight everyday rice" },
];

const destinations = [
  "UAE", "Saudi Arabia", "Iraq", "Kuwait", "Oman", "Qatar", "Bahrain",
  "Kenya", "Tanzania", "Nigeria", "South Africa",
  "UK", "Germany", "Netherlands", "Belgium",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium Basmati Rice" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
              Premium Indian Rice Exporter
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
              Supplying the World's Finest{" "}
              <span className="text-gold">Indian Rice</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
              Skybridge Global is a trusted exporter of premium Basmati and Non-Basmati rice, serving importers, wholesalers, and distributors across the Middle East, Africa, and Europe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-gold text-forest-dark font-semibold shadow-gold hover:opacity-90 transition-opacity"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-gold/40 font-semibold hover:bg-gold/10 transition-colors" style={{ color: 'hsl(40, 20%, 98%)' }}
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title="Your Trusted Rice Export Partner"
            description="We combine quality sourcing, competitive pricing, and reliable logistics to deliver premium Indian rice to global markets."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-xl bg-background border border-border hover:shadow-elevated transition-shadow group"
              >
                <div className="w-14 h-14 rounded-lg bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-colors">
                  <item.icon className="w-7 h-7 text-gold-dark group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img src={riceFieldsImg} alt="Indian Rice Fields" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-light text-gold-dark mb-4">
                About Skybridge Global
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bridging India's Finest Rice to the World
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With years of experience in the rice export industry, Skybridge Global has established itself as a reliable partner for importers and distributors worldwide. We source directly from India's premier rice-growing regions, ensuring every grain meets international quality standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to quality, transparency, and competitive pricing has earned us the trust of buyers across 30+ countries in the Middle East, Africa, and Europe.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Products"
            title="Premium Rice Varieties"
            description="We export a comprehensive range of Basmati and Non-Basmati rice varieties to meet diverse market requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-xl overflow-hidden shadow-elevated group hover:-translate-y-1 transition-transform"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-gold-light text-gold-dark font-medium">
                      Grain: {product.grain}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      Export Grade
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-forest text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Global Reach"
            title="Export Destinations"
            description="We supply premium Indian rice to importers and distributors across these key markets."
          />
          <motion.div {...fadeIn} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {destinations.map((dest) => (
              <span
                key={dest}
                className="px-5 py-2.5 rounded-full border border-border bg-background text-foreground text-sm font-medium hover:border-gold hover:bg-gold-light transition-colors cursor-default"
              >
                {dest}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={riceFieldsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
              Ready to Source Premium Indian Rice?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
              Get competitive pricing, reliable shipping, and export-grade quality. Contact us today for a detailed quote tailored to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-gold text-forest-dark font-semibold shadow-gold hover:opacity-90 transition-opacity"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-gold/40 font-semibold hover:bg-gold/10 transition-colors" style={{ color: 'hsl(40, 20%, 98%)' }}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
