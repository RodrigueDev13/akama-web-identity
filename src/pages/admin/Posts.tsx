
import { useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import PostsList from "@/components/admin/PostsList";

const AdminPosts = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Administration - Publications";
  }, []);
  
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Gestion des Publications</h1>
        <PostsList />
      </div>
    </AdminLayout>
  );
};

export default AdminPosts;
