
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface AdminProtectedRouteProps {
  children: ReactNode;
}

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const { isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);

  // Si l'état d'authentification est toujours en cours de vérification
  if (isAuthenticated === null) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin h-10 w-10 border-4 border-akama-purple/20 rounded-full border-t-akama-purple"></div>
      </div>
    );
  }

  // Si l'utilisateur est authentifié, afficher le contenu protégé
  return isAuthenticated ? <>{children}</> : null;
};

export default AdminProtectedRoute;
