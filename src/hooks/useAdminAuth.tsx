
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminAuthenticated");
      setIsAuthenticated(adminAuth === "true");
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    navigate("/admin/login");
  };

  return { isAuthenticated, logout };
};
