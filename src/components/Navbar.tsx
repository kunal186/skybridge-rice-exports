import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/packaging", label: "Packaging" },
  { to: "/export-logistics", label: "Export & Logistics" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl lg:text-2xl font-bold text-primary">
            Skybridge<span className="text-gradient-gold"> Global</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-gold text-primary-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Request Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-accent ${
                    location.pathname === link.to ? "text-accent" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-gradient-gold text-primary-foreground font-semibold text-sm mt-2"
              >
                <Phone className="w-4 h-4" />
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
