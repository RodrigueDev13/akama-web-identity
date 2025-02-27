
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
  isRead: boolean;
}

// Données simulées pour les messages récents
const mockMessages: Message[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    subject: "Informatique & Télécoms",
    message: "Bonjour, je souhaiterais obtenir plus d'informations sur vos services informatiques...",
    date: new Date(2023, 6, 15),
    isRead: true
  },
  {
    id: 2,
    name: "Marie Lambert",
    email: "marie.lambert@example.com",
    subject: "Formation",
    message: "Je cherche à former mon équipe de 10 personnes sur les dernières technologies...",
    date: new Date(2023, 6, 18),
    isRead: false
  },
  {
    id: 3,
    name: "Thomas Petit",
    email: "thomas.petit@example.com",
    subject: "Production audiovisuelle",
    message: "Nous aimerions discuter d'un projet de vidéo promotionnelle pour notre entreprise...",
    date: new Date(2023, 6, 20),
    isRead: false
  },
  {
    id: 4,
    name: "Sophie Martin",
    email: "sophie.martin@example.com",
    subject: "Imprimerie",
    message: "Pourriez-vous me faire un devis pour l'impression de 1000 brochures en couleur...",
    date: new Date(2023, 6, 22),
    isRead: true
  }
];

const RecentMessages = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Messages récents</h3>
      <div className="overflow-x-auto">
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
            {mockMessages.map((message) => (
              <tr key={message.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4">
                  <div>
                    <p className="font-medium">{message.name}</p>
                    <p className="text-sm text-gray-500">{message.email}</p>
                  </div>
                </td>
                <td className="py-4">{message.subject}</td>
                <td className="py-4 text-sm text-gray-500">
                  {formatDistanceToNow(message.date, {
                    addSuffix: true,
                    locale: fr
                  })}
                </td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    message.isRead 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {message.isRead ? "Lu" : "Non lu"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
