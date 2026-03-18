import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-forest text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            Skybridge<span className="text-gold"> Global</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium Indian rice exporter supplying Basmati and Non-Basmati rice to global markets across UAE, Middle East, Africa, and Europe.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/packaging", label: "Packaging" },
              { to: "/export-logistics", label: "Export & Logistics" },
              { to: "/quality", label: "Quality Assurance" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Our Products</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <span>1121 Basmati Rice</span>
            <span>1509 Basmati Rice</span>
            <span>Pusa Basmati Rice</span>
            <span>IR64 Non-Basmati</span>
            <span>Sona Masoori Rice</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="mailto:info@skybridgeglobal.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 shrink-0" />
              info@skybridgeglobal.com
            </a>
            <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 shrink-0" />
              +91 93199 04455
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Skybridge Global. All rights reserved. | Premium Indian Rice Exporter</p>
      </div>
    </div>
  </footer>
);

export default Footer;
