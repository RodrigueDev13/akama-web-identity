
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-akama-light to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-akama-dark">
              Contactez-Nous
            </h1>
            <p className="text-akama-gray text-lg">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
              N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <h2 className="text-2xl font-serif font-semibold text-akama-dark mb-6">
                  Nos Coordonnées
                </h2>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-akama-red/10 p-3 rounded-lg mr-4">
                      <MapPin size={24} className="text-akama-red" />
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
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-akama-red/10 p-3 rounded-lg mr-4">
                      <Phone size={24} className="text-akama-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-akama-dark">Téléphone</h3>
                      <p className="text-akama-gray mb-1">
                        <a href="tel:+22500000000" className="hover:text-akama-red transition-colors">
                          +225 00 00 00 00
                        </a>
                      </p>
                      <p className="text-akama-gray">
                        <a href="tel:+22500000000" className="hover:text-akama-red transition-colors">
                          +225 00 00 00 00
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-akama-red/10 p-3 rounded-lg mr-4">
                      <Mail size={24} className="text-akama-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-akama-dark">Email</h3>
                      <p className="text-akama-gray mb-1">
                        <a href="mailto:contact@akamagroupe.com" className="hover:text-akama-red transition-colors">
                          contact@akamagroupe.com
                        </a>
                      </p>
                      <p className="text-akama-gray">
                        <a href="mailto:info@akamagroupe.com" className="hover:text-akama-red transition-colors">
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
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
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
