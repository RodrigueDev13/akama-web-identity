
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Mail, FileText, LogOut } from "lucide-react";

const AdminSidebar = () => {
  const { logout } = useAdminAuth();
  const location = useLocation();

  const navItems = [
    {
      name: "Tableau de bord",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <Mail size={20} />
    },
    {
      name: "Publications",
      path: "/admin/posts",
      icon: <FileText size={20} />
    }
  ];

  return (
    <div className="bg-akama-dark text-white min-h-screen w-64 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">AKAMA Admin</h2>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 hover:bg-akama-purple/20 transition-colors ${
                  location.pathname === item.path ? "bg-akama-purple/30 border-r-4 border-akama-purple" : ""
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={logout}
          className="flex items-center px-4 py-2 w-full text-left hover:bg-akama-purple/20 rounded transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
