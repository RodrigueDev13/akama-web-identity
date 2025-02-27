
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Edit, Trash2, Search, Filter, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  status: "published" | "draft";
  date: Date;
  author: string;
}

// Données simulées pour les publications
const initialPosts: Post[] = [
  {
    id: 1,
    title: "Lancement de notre nouvelle offre de services cloud",
    content: "AKAMA Groupe est fier d'annoncer le lancement de sa nouvelle offre de services cloud, dédiée aux entreprises de toutes tailles. Cette solution complète comprend le stockage sécurisé, la sauvegarde automatique et la synchronisation entre appareils.",
    category: "Informatique & Télécoms",
    status: "published",
    date: new Date(2023, 6, 10),
    author: "Admin AKAMA"
  },
  {
    id: 2,
    title: "Formation en cybersécurité pour les entreprises",
    content: "Face à l'augmentation des cyberattaques, AKAMA Groupe propose désormais des formations en cybersécurité destinées aux employés et dirigeants d'entreprise. Découvrez comment protéger efficacement vos données et votre infrastructure informatique.",
    category: "Formation",
    status: "published",
    date: new Date(2023, 6, 12),
    author: "Admin AKAMA"
  },
  {
    id: 3,
    title: "Nouvelle imprimante 3D pour prototypage rapide",
    content: "Notre département d'imprimerie s'équipe d'une nouvelle imprimante 3D de dernière génération, permettant la réalisation rapide de prototypes pour nos clients. Cette technologie révolutionnaire offre une précision inégalée et des délais raccourcis.",
    category: "Imprimerie",
    status: "draft",
    date: new Date(2023, 6, 15),
    author: "Admin AKAMA"
  },
  {
    id: 4,
    title: "Notre expertise en production audiovisuelle",
    content: "Découvrez l'étendue de notre expertise en production audiovisuelle : réalisation de spots publicitaires, vidéos corporate, captations d'événements et bien plus encore. Nos équipes qualifiées vous accompagnent de la conception à la diffusion.",
    category: "Production audiovisuelle",
    status: "draft",
    date: new Date(2023, 6, 18),
    author: "Admin AKAMA"
  },
  {
    id: 5,
    title: "Séminaire sur l'intelligence artificielle dans les entreprises",
    content: "AKAMA Groupe organise un séminaire sur l'intégration de l'intelligence artificielle dans les processus d'entreprise. Venez découvrir comment l'IA peut transformer votre activité et améliorer votre productivité.",
    category: "Formation",
    status: "published",
    date: new Date(2023, 6, 22),
    author: "Admin AKAMA"
  }
];

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const { toast } = useToast();

  const categories = [...new Set(posts.map(post => post.category))];

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Publication supprimée",
      description: "La publication a été supprimée avec succès.",
      variant: "default",
    });
  };

  const handleChangeStatus = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, status: post.status === "published" ? "draft" : "published" } 
        : post
    ));
    
    const targetPost = posts.find(post => post.id === id);
    const newStatus = targetPost?.status === "published" ? "brouillon" : "publiée";
    
    toast({
      title: "Statut modifié",
      description: `La publication est maintenant en ${newStatus}.`,
      variant: "default",
    });
  };

  // Filtrer les publications en fonction de la recherche et des filtres
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || post.status === filterStatus;
    const matchesCategory = filterCategory === "all" || post.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Publications</h2>
        <button className="flex items-center px-4 py-2 bg-akama-purple text-white rounded-lg hover:bg-akama-purple/90 transition-colors">
          <Plus size={18} className="mr-2" />
          Nouvelle publication
        </button>
      </div>
      
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Rechercher une publication..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-akama-purple/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="flex gap-3">
            <select
              className="bg-white border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-akama-purple/30"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as "all" | "published" | "draft")}
            >
              <option value="all">Tous les statuts</option>
              <option value="published">Publié</option>
              <option value="draft">Brouillon</option>
            </select>
            
            <select
              className="bg-white border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-akama-purple/30"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-left font-medium text-gray-500">Titre</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Catégorie</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Statut</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Date</th>
                <th className="py-3 px-4 text-left font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-gray-500">
                    Aucune publication trouvée
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="max-w-md">
                        <p className="font-medium">{post.title}</p>
                        <p className="text-sm text-gray-500 mt-1 truncate">{post.content}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">{post.category}</td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleChangeStatus(post.id)}
                        className={`px-2 py-1 text-xs rounded-full ${
                          post.status === "published" 
                            ? "bg-green-100 text-green-800 hover:bg-green-200" 
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {post.status === "published" ? "Publié" : "Brouillon"}
                      </button>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      {formatDistanceToNow(post.date, {
                        addSuffix: true,
                        locale: fr
                      })}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button 
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Modifier"
                        >
                          <Edit size={18} className="text-akama-purple" />
                        </button>
                        <button 
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Supprimer"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 size={18} className="text-akama-red" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PostsList;
