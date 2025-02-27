
import { useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import DashboardStats from "@/components/admin/DashboardStats";
import RecentMessages from "@/components/admin/RecentMessages";
import RecentPosts from "@/components/admin/RecentPosts";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Administration - Tableau de bord";
  }, []);
  
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentMessages />
          <RecentPosts />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
