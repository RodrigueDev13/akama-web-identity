
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Edit, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: string;
  title: string;
  category: string;
  status: string;
  created_at: string | null;
  content: string;
}

const RecentPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  const fetchRecentPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);
      
      if (error) {
        console.error('Error fetching recent posts:', error);
        return;
      }
      
      setPosts(data || []);
    } catch (error) {
      console.error('Error:', error);
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
            {loading ? (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Chargement des publications...
                </td>
              </tr>
            ) : posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Aucune publication récente
                </td>
              </tr>
            ) : (
              posts.map((post) => (
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
                    {post.created_at && formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: fr
                    })}
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Link to={`/admin/posts?edit=${post.id}`} className="p-1 hover:bg-gray-100 rounded">
                        <Edit size={18} className="text-akama-purple" />
                      </Link>
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
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
      <div className="mt-4 text-right">
        <Link to="/admin/posts" className="text-akama-purple hover:underline text-sm font-medium">
          Voir toutes les publications →
        </Link>
      </div>
    </Card>
  );
};

export default RecentPosts;
