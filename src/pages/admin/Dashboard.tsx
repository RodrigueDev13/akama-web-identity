
import { useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import DashboardStats from "@/components/admin/DashboardStats";
import RecentMessages from "@/components/admin/RecentMessages";
import RecentPosts from "@/components/admin/RecentPosts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Administration - Tableau de bord";
  }, []);
  
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <Link to="/admin/posts">
            <Button className="bg-black hover:bg-black/90">
              <Plus className="mr-2 h-4 w-4 text-white" />
              <span className="text-white font-medium">Nouvelle publication</span>
            </Button>
          </Link>
        </div>
        
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
