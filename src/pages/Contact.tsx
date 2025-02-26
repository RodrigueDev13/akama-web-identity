
import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Contact";
  }, []);
  
  return (
    <PageLayout>
      {/* Header */}
      <section className="fullscreen-section pt-32 pb-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-akama-dark/80 to-akama-dark/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-white">
              Contactez-Nous
            </h1>
            <p className="text-white/80 text-lg">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
              N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="fullscreen-section py-12 md:py-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
            alt="Contact form background"
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <h2 className="text-2xl font-serif font-semibold text-akama-dark mb-6">
                  Nos Coordonnées
                </h2>
                
                <div className="glass p-6 rounded-xl shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-akama-purple/10 p-3 rounded-lg mr-4">
                      <MapPin size={24} className="text-akama-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-akama-dark">Adresse</h3>
                      <p className="text-akama-gray">
                        Cocody Centre, Abidjan<br />
                        Côte d'Ivoire<br />
                        Boîte Postale: BP XXXXX Abidjan
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-akama-purple/10 p-3 rounded-lg mr-4">
                      <Phone size={24} className="text-akama-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-akama-dark">Téléphone</h3>
                      <p className="text-akama-gray mb-1">
                        <a href="tel:+22500000000" className="hover:text-akama-purple transition-colors">
                          +225 00 00 00 00
                        </a>
                      </p>
                      <p className="text-akama-gray">
                        <a href="tel:+22500000000" className="hover:text-akama-purple transition-colors">
                          +225 00 00 00 00
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-akama-purple/10 p-3 rounded-lg mr-4">
                      <Mail size={24} className="text-akama-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-akama-dark">Email</h3>
                      <p className="text-akama-gray mb-1">
                        <a href="mailto:contact@akamagroupe.com" className="hover:text-akama-purple transition-colors">
                          contact@akamagroupe.com
                        </a>
                      </p>
                      <p className="text-akama-gray">
                        <a href="mailto:info@akamagroupe.com" className="hover:text-akama-purple transition-colors">
                          info@akamagroupe.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4 text-akama-dark">Notre Emplacement</h3>
                  <Map />
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={100}>
              <div className="glass p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-serif font-semibold text-akama-dark mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-akama-gray mb-6">
                  Complétez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
