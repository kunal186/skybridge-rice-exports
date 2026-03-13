import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-light text-gold-dark mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
