
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    otherSubject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data to send
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject === 'Autre' ? formData.otherSubject : formData.subject,
        message: formData.message,
      };
      
      console.log("Sending form data to SendGrid:", dataToSend);
      
      // Create a SendGrid email payload
      const sendgridPayload = {
        personalizations: [
          {
            to: [{ email: "contact@akamagroupe.com" }],
            subject: `Nouveau message: ${dataToSend.subject}`
          }
        ],
        from: { email: "noreply@akamagroupe.com", name: "Formulaire Site Web" },
        reply_to: { email: dataToSend.email, name: dataToSend.name },
        content: [
          {
            type: "text/html",
            value: `
              <h2>Nouveau message depuis le formulaire de contact</h2>
              <p><strong>Nom:</strong> ${dataToSend.name}</p>
              <p><strong>Email:</strong> ${dataToSend.email}</p>
              <p><strong>Sujet:</strong> ${dataToSend.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${dataToSend.message.replace(/\n/g, '<br>')}</p>
            `
          }
        ]
      };
      
      // Send to SendGrid API via CORS proxy
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer SG.YOUR_SENDGRID_API_KEY" // Remplacez par votre clé API SendGrid
        },
        body: JSON.stringify(sendgridPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error("SendGrid API error:", errorData);
        throw new Error("Échec de l'envoi du message");
      }
      
      console.log("Email sent successfully via SendGrid");
      
      // Send confirmation email to the user
      const confirmationPayload = {
        personalizations: [
          {
            to: [{ email: dataToSend.email }]
          }
        ],
        from: { email: "noreply@akamagroupe.com", name: "AKAMA GROUPE" },
        subject: "Confirmation de votre message - AKAMA GROUPE",
        content: [
          {
            type: "text/html",
            value: `
              <h3>Bonjour ${dataToSend.name},</h3>
              <p>Nous avons bien reçu votre message concernant <strong>"${dataToSend.subject}"</strong>.</p>
              <p>Notre équipe va l'examiner et vous répondra dans les plus brefs délais.</p>
              <p>Cordialement,<br>L'équipe AKAMA GROUPE</p>
            `
          }
        ]
      };
      
      // Send confirmation email
      await fetch("https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer SG.YOUR_SENDGRID_API_KEY" // Remplacez par votre clé API SendGrid
        },
        body: JSON.stringify(confirmationPayload)
      });
      
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        otherSubject: "",
        message: ""
      });
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-akama-dark mb-1">
            Nom complet
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-akama-dark mb-1">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
            placeholder="votre-email@exemple.com"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="subject" className="text-sm font-medium text-akama-dark mb-1">
          Sujet
        </Label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
        >
          <option value="">Sélectionner un sujet</option>
          <option value="Informatique & Télécoms">Informatique & Télécoms</option>
          <option value="Imprimerie">Imprimerie</option>
          <option value="Formation">Formation</option>
          <option value="Production audiovisuelle">Production audiovisuelle</option>
          <option value="Etudes et conseils">Etudes et conseils</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      
      {formData.subject === 'Autre' && (
        <div>
          <Label htmlFor="otherSubject" className="text-sm font-medium text-akama-dark mb-1">
            Précisez le sujet
          </Label>
          <Input
            id="otherSubject"
            name="otherSubject"
            type="text"
            required={formData.subject === 'Autre'}
            value={formData.otherSubject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors"
            placeholder="Veuillez préciser le sujet de votre demande"
          />
        </div>
      )}
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-akama-dark mb-1">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-akama-purple/30 focus:border-akama-purple transition-colors resize-none"
          placeholder="Votre message ici..."
        />
      </div>
      
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-black hover:bg-black/90 text-white"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
