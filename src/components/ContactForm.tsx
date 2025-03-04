import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

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
      
      console.log("Sending form data to Supabase function:", dataToSend);
      
      // Use the Supabase function to send emails
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: dataToSend
      });
      
      if (error) {
        console.error("Supabase function error:", error);
        throw new Error("Échec de l'envoi du message");
      }
      
      console.log("Email sent successfully via Supabase function:", data);
      
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
