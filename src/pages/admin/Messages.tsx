
import { useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import MessagesList from "@/components/admin/MessagesList";

const AdminMessages = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Administration - Messages";
  }, []);
  
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Gestion des Messages</h1>
        <MessagesList />
      </div>
    </AdminLayout>
  );
};

export default AdminMessages;
