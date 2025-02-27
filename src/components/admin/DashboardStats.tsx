
import { Card } from "@/components/ui/card";
import { Mail, FileText, UserCheck } from "lucide-react";

const DashboardStats = () => {
  // Données simulées pour le tableau de bord
  const stats = [
    {
      title: "Messages",
      value: 28,
      icon: <Mail className="h-8 w-8 text-akama-purple" />,
      change: "+12% cette semaine"
    },
    {
      title: "Publications",
      value: 14,
      icon: <FileText className="h-8 w-8 text-akama-red" />,
      change: "+3 ce mois-ci"
    },
    {
      title: "Visiteurs",
      value: 1254,
      icon: <UserCheck className="h-8 w-8 text-akama-blue" />,
      change: "+18% ce mois-ci"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-green-500 mt-2">{stat.change}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
