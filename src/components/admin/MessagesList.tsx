
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Eye, Trash2, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
  isRead: boolean;
}

// Données simulées pour les messages
const initialMessages: Message[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    subject: "Informatique & Télécoms",
    message: "Bonjour, je souhaiterais obtenir plus d'informations sur vos services informatiques et les solutions que vous proposez pour les PME. Notre entreprise cherche à moderniser son infrastructure.",
    date: new Date(2023, 6, 15),
    isRead: true
  },
  {
    id: 2,
    name: "Marie Lambert",
    email: "marie.lambert@example.com",
    subject: "Formation",
    message: "Je cherche à former mon équipe de 10 personnes sur les dernières technologies web. Pouvez-vous me donner des informations sur vos programmes de formation et les tarifs associés?",
    date: new Date(2023, 6, 18),
    isRead: false
  },
  {
    id: 3,
    name: "Thomas Petit",
    email: "thomas.petit@example.com",
    subject: "Production audiovisuelle",
    message: "Nous aimerions discuter d'un projet de vidéo promotionnelle pour notre entreprise. Il s'agirait d'une vidéo de 2-3 minutes présentant nos activités et nos valeurs.",
    date: new Date(2023, 6, 20),
    isRead: false
  },
  {
    id: 4,
    name: "Sophie Martin",
    email: "sophie.martin@example.com",
    subject: "Imprimerie",
    message: "Pourriez-vous me faire un devis pour l'impression de 1000 brochures en couleur, format A4 recto-verso? C'est pour un événement qui aura lieu dans deux mois.",
    date: new Date(2023, 6, 22),
    isRead: true
  },
  {
    id: 5,
    name: "Paul Renard",
    email: "paul.renard@example.com",
    subject: "Etudes et conseils",
    message: "Nous sommes à la recherche d'un consultant pour nous aider à effectuer une étude de marché dans le secteur technologique. Quels sont vos services dans ce domaine?",
    date: new Date(2023, 6, 25),
    isRead: true
  },
  {
    id: 6,
    name: "Isabelle Blanc",
    email: "isabelle.blanc@example.com",
    subject: "Informatique & Télécoms",
    message: "Bonjour, nous rencontrons des problèmes avec notre réseau informatique et cherchons une entreprise pour un diagnostic et une maintenance régulière. Pouvez-vous nous aider?",
    date: new Date(2023, 6, 28),
    isRead: false
  },
  {
    id: 7,
    name: "Michel Leroy",
    email: "michel.leroy@example.com",
    subject: "Autre",
    message: "Je souhaiterais en savoir plus sur votre entreprise et les perspectives de collaboration. Pourriez-vous me contacter pour discuter de possibilités de partenariat?",
    date: new Date(2023, 7, 1),
    isRead: false
  }
];

const MessagesList = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "read" | "unread">("all");
  const { toast } = useToast();

  const handleViewMessage = (message: Message) => {
    // Marquer le message comme lu
    if (!message.isRead) {
      const updatedMessages = messages.map(m => 
        m.id === message.id ? { ...m, isRead: true } : m
      );
      setMessages(updatedMessages);
    }
    setSelectedMessage(message);
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
    toast({
      title: "Message supprimé",
      description: "Le message a été supprimé avec succès.",
      variant: "default",
    });
  };

  // Filtrer les messages en fonction de la recherche et du filtre de statut
  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === "all") return matchesSearch;
    if (filterStatus === "read") return matchesSearch && message.isRead;
    if (filterStatus === "unread") return matchesSearch && !message.isRead;
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
            {filteredMessages.length === 0 ? (
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
                      } ${!message.isRead ? "font-medium" : ""}`}
                      onClick={() => handleViewMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`text-sm ${!message.isRead ? "font-semibold" : ""}`}>
                            {message.name}
                            {!message.isRead && (
                              <span className="ml-2 inline-block w-2 h-2 bg-akama-purple rounded-full"></span>
                            )}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{message.email}</p>
                          <p className="text-sm mt-1 truncate">{message.subject}</p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {formatDistanceToNow(message.date, {
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
                      {formatDistanceToNow(selectedMessage.date, {
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
