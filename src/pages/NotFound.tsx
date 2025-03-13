
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-akama-light to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-akama-red mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-akama-dark mb-4">Page introuvable</h2>
        <p className="text-akama-gray mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-akama-red text-white font-medium transition-all hover:bg-akama-red/90 hover:shadow-lg hover:shadow-akama-red/20"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
