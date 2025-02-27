
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminSidebar from "@/components/AdminSidebar";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <AdminProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </AdminProtectedRoute>
  );
};

export default AdminLayout;
