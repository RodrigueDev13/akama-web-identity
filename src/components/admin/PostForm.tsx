
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PostFormProps {
  isOpen: boolean;
  onClose: () => void;
  onPostCreated: () => void;
  editPost?: {
    id: string;
    title: string;
    content: string;
    category: string;
    status: string;
  } | null;
}

const PostForm = ({ isOpen, onClose, onPostCreated, editPost = null }: PostFormProps) => {
  const [title, setTitle] = useState(editPost?.title || "");
  const [content, setContent] = useState(editPost?.content || "");
  const [category, setCategory] = useState(editPost?.category || "");
  const [status, setStatus] = useState(editPost?.status || "draft");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !category.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (editPost) {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update({
            title,
            content,
            category,
            status,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editPost.id);
        
        if (error) throw error;
        
        toast({
          title: "Publication modifiée",
          description: "La publication a été mise à jour avec succès.",
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts')
          .insert({
            title,
            content,
            category,
            status,
          });
        
        if (error) throw error;
        
        toast({
          title: "Publication créée",
          description: "La publication a été créée avec succès.",
        });
      }
      
      // Reset form and notify parent
      setTitle("");
      setContent("");
      setCategory("");
      setStatus("draft");
      onPostCreated();
      onClose();
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement de la publication.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{editPost ? "Modifier la publication" : "Nouvelle publication"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de la publication"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Catégorie (ex: Actualités, Informatique, Formation...)"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contenu de la publication..."
              rows={8}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Statut</Label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
            </select>
          </div>
          
          <DialogFooter className="mt-6 gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="bg-akama-purple hover:bg-akama-purple/90"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? "Enregistrement..." 
                : editPost 
                  ? "Mettre à jour" 
                  : "Créer"
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostForm;
