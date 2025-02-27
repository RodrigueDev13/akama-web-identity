
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Edit, Trash2 } from "lucide-react";

interface Post {
  id: number;
  title: string;
  category: string;
  status: "published" | "draft";
  date: Date;
}

// Données simulées pour les publications récentes
const mockPosts: Post[] = [
  {
    id: 1,
    title: "Lancement de notre nouvelle offre de services cloud",
    category: "Informatique & Télécoms",
    status: "published",
    date: new Date(2023, 6, 10)
  },
  {
    id: 2,
    title: "Formation en cybersécurité pour les entreprises",
    category: "Formation",
    status: "published",
    date: new Date(2023, 6, 12)
  },
  {
    id: 3,
    title: "Nouvelle imprimante 3D pour prototypage rapide",
    category: "Imprimerie",
    status: "draft",
    date: new Date(2023, 6, 15)
  },
  {
    id: 4,
    title: "Notre expertise en production audiovisuelle",
    category: "Production audiovisuelle",
    status: "draft",
    date: new Date(2023, 6, 18)
  }
];

const RecentPosts = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Publications récentes</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 text-left font-medium text-gray-500">Titre</th>
              <th className="pb-3 text-left font-medium text-gray-500">Catégorie</th>
              <th className="pb-3 text-left font-medium text-gray-500">Statut</th>
              <th className="pb-3 text-left font-medium text-gray-500">Date</th>
              <th className="pb-3 text-left font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 font-medium">{post.title}</td>
                <td className="py-4">{post.category}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    post.status === "published" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {post.status === "published" ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">
                  {formatDistanceToNow(post.date, {
                    addSuffix: true,
                    locale: fr
                  })}
                </td>
                <td className="py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit size={18} className="text-akama-purple" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash2 size={18} className="text-akama-red" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right">
        <a href="/admin/posts" className="text-akama-purple hover:underline text-sm font-medium">
          Voir toutes les publications →
        </a>
      </div>
    </Card>
  );
};

export default RecentPosts;
