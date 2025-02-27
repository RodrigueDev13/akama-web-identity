
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Eye, Trash2, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string | null;
  is_read: boolean | null;
}

const MessagesList = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "read" | "unread">("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Erreur",
          description: "Impossible de récupérer les messages.",
          variant: "destructive",
        });
        return;
      }
      
      setMessages(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la récupération des messages.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewMessage = async (message: Message) => {
    // Marquer le message comme lu dans la base de données si ce n'est pas déjà le cas
    if (!message.is_read) {
      try {
        const { error } = await supabase
          .from('messages')
          .update({ is_read: true })
          .eq('id', message.id);
        
        if (error) {
          console.error('Error updating message status:', error);
          toast({
            title: "Erreur",
            description: "Impossible de marquer le message comme lu.",
            variant: "destructive",
          });
          return;
        }
        
        // Mettre à jour l'état local
        setMessages(messages.map(m => 
          m.id === message.id ? { ...m, is_read: true } : m
        ));
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de la mise à jour du message.",
          variant: "destructive",
        });
      }
    }
    setSelectedMessage(message);
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting message:', error);
        toast({
          title: "Erreur",
          description: "Impossible de supprimer le message.",
          variant: "destructive",
        });
        return;
      }
      
      // Mettre à jour l'état local
      setMessages(messages.filter(message => message.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
      
      toast({
        title: "Message supprimé",
        description: "Le message a été supprimé avec succès.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du message.",
        variant: "destructive",
      });
    }
  };

  // Filtrer les messages en fonction de la recherche et du filtre de statut
  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === "all") return matchesSearch;
    if (filterStatus === "read") return matchesSearch && message.is_read === true;
    if (filterStatus === "unread") return matchesSearch && message.is_read === false;
    return matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card className="p-4">
          <div className="mb-4 flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-akama-purple/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="ml-2 relative">
              <select
                className="appearance-none bg-white border rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-akama-purple/30"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as "all" | "read" | "unread")}
              >
                <option value="all">Tous</option>
                <option value="read">Lus</option>
                <option value="unread">Non lus</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
            {loading ? (
              <div className="text-center py-8 text-gray-500">
                Chargement des messages...
              </div>
            ) : filteredMessages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Aucun message trouvé
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {filteredMessages.map((message) => (
                  <li key={message.id} className="py-3">
                    <button
                      className={`w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                        selectedMessage?.id === message.id ? "bg-gray-50" : ""
                      } ${!message.is_read ? "font-medium" : ""}`}
                      onClick={() => handleViewMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`text-sm ${!message.is_read ? "font-semibold" : ""}`}>
                            {message.name}
                            {!message.is_read && (
                              <span className="ml-2 inline-block w-2 h-2 bg-akama-purple rounded-full"></span>
                            )}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{message.email}</p>
                          <p className="text-sm mt-1 truncate">{message.subject}</p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {message.created_at && formatDistanceToNow(new Date(message.created_at), {
                            addSuffix: true,
                            locale: fr
                          })}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="p-6 h-full">
          {selectedMessage ? (
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold">{selectedMessage.subject}</h2>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span className="mr-4">De: {selectedMessage.name} &lt;{selectedMessage.email}&gt;</span>
                    <span>
                      {selectedMessage.created_at && formatDistanceToNow(new Date(selectedMessage.created_at), {
                        addSuffix: true,
                        locale: fr
                      })}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Trash2 size={20} className="text-akama-red" />
                </button>
              </div>
              
              <div className="border-t pt-6">
                <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <button className="px-4 py-2 bg-akama-purple text-white rounded-lg hover:bg-akama-purple/90 transition-colors">
                  Répondre par email
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12 text-gray-500">
              <Eye size={48} className="mb-4 text-gray-300" />
              <p className="text-lg">Sélectionnez un message pour le consulter</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default MessagesList;
