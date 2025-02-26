
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-akama-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">
              AKAMA<span className="text-akama-purple">GROUPE</span>
            </h3>
            <p className="text-akama-light-gray max-w-md">
              AKAMA GROUPE, votre partenaire de confiance pour tous vos besoins en informatique, 
              télécommunications, imprimerie, formation et plus encore.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/history" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Historique
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Nos Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/organization" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Organisation
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/legal" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  Informations Légales
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Coordonnées</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-akama-purple mr-2 mt-1 flex-shrink-0" />
                <span className="text-akama-light-gray">Cocody Centre, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-akama-purple mr-2 flex-shrink-0" />
                <a href="tel:+22500000000" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  +225 00 00 00 00
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-akama-purple mr-2 flex-shrink-0" />
                <a href="mailto:contact@akamagroupe.com" className="text-akama-light-gray hover:text-akama-purple transition-colors">
                  contact@akamagroupe.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-akama-light-gray text-sm">
            &copy; {new Date().getFullYear()} AKAMA GROUPE SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
