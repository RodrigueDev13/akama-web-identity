
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler une vérification d'identifiants admin
    // Dans un cas réel, cela devrait être vérifié via une API sécurisée
    if (credentials.email === "admin@akamagroupe.com" && credentials.password === "admin123") {
      setTimeout(() => {
        // Stocker l'état de connexion dans localStorage
        localStorage.setItem("adminAuthenticated", "true");
        
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'espace administrateur.",
          variant: "default",
        });
        
        navigate("/admin/dashboard");
        setIsSubmitting(false);
      }, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: "Échec de connexion",
          description: "Email ou mot de passe incorrect.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }, 1000);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-akama-dark mb-1">
          Email d'administrateur
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={credentials.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
          placeholder="admin@akamagroupe.com"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-akama-dark mb-1">
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={credentials.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
          placeholder="••••••••"
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-3 bg-akama-purple text-white rounded-lg transition-all hover:bg-akama-purple/90 focus:outline-none focus:ring-2 focus:ring-akama-purple/50 disabled:opacity-70 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connexion en cours...
            </>
          ) : (
            "Se connecter"
          )}
        </button>
      </div>
    </form>
  );
};

export default AdminLoginForm;
