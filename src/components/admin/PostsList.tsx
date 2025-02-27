
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Edit, Trash2, Search, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PostForm from "./PostForm";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  status: string;
  created_at: string | null;
  updated_at: string | null;
  author_id: string | null;
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching posts:', error);
        toast({
          title: "Erreur",
          description: "Impossible de récupérer les publications.",
          variant: "destructive",
        });
        return;
      }
      
      setPosts(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la récupération des publications.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting post:', error);
        toast({
          title: "Erreur",
          description: "Impossible de supprimer la publication.",
          variant: "destructive",
        });
        return;
      }
      
      // Mettre à jour l'état local
      setPosts(posts.filter(post => post.id !== id));
      
      toast({
        title: "Publication supprimée",
        description: "La publication a été supprimée avec succès.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression de la publication.",
        variant: "destructive",
      });
    }
  };

  const handleChangeStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    
    try {
      const { error } = await supabase
        .from('posts')
        .update({ status: newStatus })
        .eq('id', id);
      
      if (error) {
        console.error('Error updating post status:', error);
        toast({
          title: "Erreur",
          description: "Impossible de modifier le statut de la publication.",
          variant: "destructive",
        });
        return;
      }
      
      // Mettre à jour l'état local
      setPosts(posts.map(post => 
        post.id === id ? { ...post, status: newStatus } : post
      ));
      
      const statusText = newStatus === "published" ? "publiée" : "brouillon";
      
      toast({
        title: "Statut modifié",
        description: `La publication est maintenant en ${statusText}.`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification du statut.",
        variant: "destructive",
      });
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setIsFormOpen(true);
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setIsFormOpen(true);
  };

  // Extraire les catégories uniques
  const categories = [...new Set(posts.map(post => post.category))];

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
        <button 
          className="flex items-center px-4 py-2 bg-akama-purple text-white rounded-lg hover:bg-akama-purple/90 transition-colors"
          onClick={handleNewPost}
        >
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
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-gray-500">
                    Chargement des publications...
                  </td>
                </tr>
              ) : filteredPosts.length === 0 ? (
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
                        onClick={() => handleChangeStatus(post.id, post.status)}
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
                      {post.created_at && formatDistanceToNow(new Date(post.created_at), {
                        addSuffix: true,
                        locale: fr
                      })}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button 
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Modifier"
                          onClick={() => handleEditPost(post)}
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
      
      <PostForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onPostCreated={fetchPosts}
        editPost={editingPost}
      />
    </div>
  );
};

export default PostsList;
