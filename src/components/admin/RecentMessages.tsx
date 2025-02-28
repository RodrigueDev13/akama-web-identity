
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Message = Tables<"messages"> & {
  created_at: string;
};

const RecentMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(4);

        if (error) {
          throw error;
        }

        setMessages(data as Message[]);
      } catch (err: any) {
        console.error("Erreur lors de la récupération des messages:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (isLoading) {
    return (
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Messages récents</h3>
        <div className="h-48 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-akama-purple"></div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Messages récents</h3>
        <div className="h-48 flex items-center justify-center">
          <p className="text-red-500">Erreur: Impossible de charger les messages</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Messages récents</h3>
      <div className="overflow-x-auto">
        {messages.length === 0 ? (
          <div className="h-48 flex items-center justify-center">
            <p className="text-gray-500">Aucun message pour le moment</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-left font-medium text-gray-500">Expéditeur</th>
                <th className="pb-3 text-left font-medium text-gray-500">Sujet</th>
                <th className="pb-3 text-left font-medium text-gray-500">Reçu</th>
                <th className="pb-3 text-left font-medium text-gray-500">Statut</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{message.name}</p>
                      <p className="text-sm text-gray-500">{message.email}</p>
                    </div>
                  </td>
                  <td className="py-4">{message.subject}</td>
                  <td className="py-4 text-sm text-gray-500">
                    {formatDistanceToNow(new Date(message.created_at), {
                      addSuffix: true,
                      locale: fr
                    })}
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      message.is_read 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {message.is_read ? "Lu" : "Non lu"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-4 text-right">
        <a href="/admin/messages" className="text-akama-purple hover:underline text-sm font-medium">
          Voir tous les messages →
        </a>
      </div>
    </Card>
  );
};

export default RecentMessages;
