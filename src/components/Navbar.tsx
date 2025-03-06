
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavItem = ({
    to,
    label
  }: {
    to: string;
    label: string;
  }) => <NavLink to={to} className={({
    isActive
  }) => `relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-akama-red ${isActive ? "text-akama-red" : "text-akama-dark"}`} onClick={() => setIsMenuOpen(false)}>
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-akama-red transition-all duration-300 group-hover:w-full" />
    </NavLink>;

  return <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-transparent rounded-none">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b5eeb353-031e-443a-8aad-38972cf669c3.png" 
            alt="AKAMA GROUPE Logo" 
            className="h-8 w-auto" 
            style={{ filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.1))" }}
          />
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem to="/" label="Accueil" />
          <NavItem to="/history" label="Historique" />
          <NavItem to="/services" label="Nos Services" />
          <NavItem to="/organization" label="Organisation" />
          <NavItem to="/contact" label="Contact" />
          <NavItem to="/legal" label="Informations Légales" />
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-akama-dark" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`} style={{
      top: "60px"
    }}>
        <nav className="flex flex-col items-center justify-center space-y-6 h-full">
          <NavItem to="/" label="Accueil" />
          <NavItem to="/history" label="Historique" />
          <NavItem to="/services" label="Nos Services" />
          <NavItem to="/organization" label="Organisation" />
          <NavItem to="/contact" label="Contact" />
          <NavItem to="/legal" label="Informations Légales" />
        </nav>
      </div>
    </header>;
};

export default Navbar;
