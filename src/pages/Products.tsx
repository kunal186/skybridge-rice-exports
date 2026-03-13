import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import basmatiImg from "@/assets/basmati-bowl.jpg";
import sellaImg from "@/assets/sella-rice.jpg";
import nonBasmatiImg from "@/assets/non-basmati-rice.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface ProductSpec {
  name: string;
  img: string;
  grainLength: string;
  moisture: string;
  broken: string;
  packaging: string;
  description: string;
}

const basmatiProducts: ProductSpec[] = [
  { name: "1121 Steam Basmati", img: basmatiImg, grainLength: "8.30mm+ (avg)", moisture: "≤ 12.5%", broken: "≤ 1%", packaging: "5kg, 10kg, 25kg, 50kg PP/Non-woven bags", description: "The most sought-after extra-long grain basmati rice. Known for its exceptional aroma, elongation upon cooking, and fluffy texture. Ideal for biryani and pilaf dishes." },
  { name: "1121 Sella Basmati", img: sellaImg, grainLength: "8.30mm+ (avg)", moisture: "≤ 13%", broken: "≤ 1%", packaging: "5kg, 10kg, 25kg, 50kg PP/Non-woven bags", description: "Parboiled golden basmati with superior nutritional retention. Grains remain separate after cooking, making it perfect for commercial and retail markets." },
  { name: "1121 Raw Basmati", img: basmatiImg, grainLength: "8.30mm+ (avg)", moisture: "≤ 12%", broken: "≤ 1%", packaging: "5kg, 10kg, 25kg, 50kg PP/Non-woven bags", description: "Unprocessed raw basmati with natural aroma and the longest elongation ratio. Premium choice for discerning buyers seeking authentic basmati quality." },
  { name: "1509 Basmati Rice", img: basmatiImg, grainLength: "7.50mm+ (avg)", moisture: "≤ 12.5%", broken: "≤ 2%", packaging: "5kg, 10kg, 25kg, 50kg PP/Non-woven bags", description: "An excellent quality basmati variety offering great value. Long grain with good aroma and cooking properties, popular in Middle Eastern markets." },
  { name: "Pusa Basmati Rice", img: basmatiImg, grainLength: "7.0mm+ (avg)", moisture: "≤ 12.5%", broken: "≤ 2%", packaging: "5kg, 10kg, 25kg, 50kg PP/Non-woven bags", description: "A versatile basmati variety with consistent quality and appealing aroma. Widely exported for both retail and food service applications." },
];

const nonBasmatiProducts: ProductSpec[] = [
  { name: "IR64 Rice", img: nonBasmatiImg, grainLength: "6.0mm (avg)", moisture: "≤ 14%", broken: "≤ 5%", packaging: "25kg, 50kg PP bags", description: "India's most widely exported non-basmati parboiled rice. Excellent for everyday consumption, popular across African and Asian markets." },
  { name: "Sona Masoori Rice", img: nonBasmatiImg, grainLength: "5.2mm (avg)", moisture: "≤ 13%", broken: "≤ 3%", packaging: "5kg, 10kg, 25kg PP bags", description: "Lightweight, aromatic medium-grain rice from South India. Low glycemic index, ideal for daily meals and health-conscious consumers." },
  { name: "PR11 Rice", img: nonBasmatiImg, grainLength: "6.5mm (avg)", moisture: "≤ 14%", broken: "≤ 5%", packaging: "25kg, 50kg PP bags", description: "Long-grain parboiled rice with good cooking quality. Cost-effective option for bulk buyers and institutional markets." },
  { name: "Long Grain White Rice", img: nonBasmatiImg, grainLength: "6.6mm+ (avg)", moisture: "≤ 14%", broken: "≤ 5%", packaging: "25kg, 50kg PP bags", description: "Versatile long-grain white rice suitable for diverse cuisines. Consistent quality for both retail and food manufacturing sectors." },
];

const ProductCard = ({ product, index }: { product: ProductSpec; index: number }) => (
  <motion.div
    {...fadeIn}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card rounded-xl overflow-hidden border border-border shadow-elevated hover:-translate-y-1 transition-transform"
  >
    <div className="h-48 overflow-hidden">
      <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Grain Length</span>
          <span className="font-medium text-foreground">{product.grainLength}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Moisture</span>
          <span className="font-medium text-foreground">{product.moisture}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Broken %</span>
          <span className="font-medium text-foreground">{product.broken}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Packaging</span>
          <span className="font-medium text-foreground text-right max-w-[60%]">{product.packaging}</span>
        </div>
      </div>
      <Link
        to="/contact"
        className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
      >
        Request Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const Products = () => (
  <Layout>
    <section className="py-32 bg-gradient-forest">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            Our Products
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(40, 20%, 98%)' }}>
            Premium Rice Varieties
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsla(40, 20%, 98%, 0.8)' }}>
            Export-grade Basmati and Non-Basmati rice sourced from India's finest growing regions.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Basmati */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Basmati Rice" title="Premium Basmati Varieties" description="Extra-long grain, aromatic rice varieties known worldwide for superior quality and taste." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basmatiProducts.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Non-Basmati */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Non-Basmati Rice" title="Quality Non-Basmati Range" description="Versatile rice varieties for everyday consumption, food manufacturing, and institutional markets." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonBasmatiProducts.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
