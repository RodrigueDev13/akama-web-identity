
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminLoginForm from "@/components/AdminLoginForm";

const AdminLogin = () => {
  const { isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "AKAMA GROUPE | Administration - Connexion";
    
    // Si l'administrateur est déjà connecté, rediriger vers le tableau de bord
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-akama-dark mb-2">
            AKAMA GROUPE
          </h1>
          <p className="text-akama-gray">Espace Administrateur</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-2xl font-serif font-semibold text-akama-dark mb-6">
            Connexion
          </h2>
          
          <AdminLoginForm />
          
          <div className="mt-6 text-center text-sm text-akama-gray">
            <p>Identifiants par défaut pour la démonstration :</p>
            <p className="mt-1">Email: admin@akamagroupe.com</p>
            <p>Mot de passe: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
