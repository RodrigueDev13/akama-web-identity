
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

// Type simplifié pour les messages (sans référence à Supabase)
type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

// Données fictives de messages pour la démo
const mockMessages: Message[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    subject: "Informatique & Télécoms",
    message: "Je souhaite obtenir plus d'informations sur vos services informatiques.",
    is_read: true,
    created_at: new Date(Date.now() - 3600000).toISOString() // 1 heure avant
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@example.com",
    subject: "Formation",
    message: "Quelles formations proposez-vous dans le domaine du design ?",
    is_read: false,
    created_at: new Date(Date.now() - 86400000).toISOString() // 1 jour avant
  },
  {
    id: "3",
    name: "Pierre Leroy",
    email: "pierre.leroy@example.com",
    subject: "Production audiovisuelle",
    message: "Pouvez-vous me faire un devis pour un projet vidéo ?",
    is_read: false,
    created_at: new Date(Date.now() - 172800000).toISOString() // 2 jours avant
  },
  {
    id: "4",
    name: "Sophie Petit",
    email: "sophie.petit@example.com",
    subject: "Etudes et conseils",
    message: "J'aimerais discuter d'un partenariat potentiel.",
    is_read: true,
    created_at: new Date(Date.now() - 259200000).toISOString() // 3 jours avant
  }
];

const RecentMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler un chargement des données
    const loadMessages = () => {
      setTimeout(() => {
        setMessages(mockMessages);
        setIsLoading(false);
      }, 1000);
    };

    loadMessages();
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
