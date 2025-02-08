
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-semibold text-brand-600">
            Marmitex Express
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#menu">Cardápio</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-600" />
            ) : (
              <Menu className="h-6 w-6 text-brand-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>
                Cardápio
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contato
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
