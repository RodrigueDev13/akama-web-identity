
import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Monitor, 
  Printer, 
  GraduationCap, 
  Video, 
  LineChart, 
  ShoppingBag, 
  Zap, 
  Tablet, 
  BookOpen, 
  Wrench, 
  Building, 
  Car 
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Nos Services";
  }, []);
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Nos Services"
        subtitle="Découvrez l'ensemble des solutions et prestations proposées par AKAMA GROUPE"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* Services Introduction */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-akama-gray text-lg">
              AKAMA GROUPE offre une gamme complète de services professionnels pour répondre à vos besoins
              variés. Notre approche multidisciplinaire nous permet de vous proposer des solutions intégrées,
              adaptées à vos exigences spécifiques.
            </p>
          </AnimatedSection>
          
          {/* Informatique & Télécoms */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="flex items-center mb-6">
                <Monitor size={28} className="text-akama-purple mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-akama-dark">
                  Informatique & Télécoms
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Réseaux & Infrastructure</h3>
                  <p className="text-akama-gray">
                    Conception, installation et maintenance de réseaux informatiques sécurisés.
                    Mise en place d'infrastructures serveurs et solutions cloud.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Maintenance Informatique</h3>
                  <p className="text-akama-gray">
                    Services de diagnostic, réparation et entretien préventif pour vos équipements.
                    Support technique et assistance aux utilisateurs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Développement Web</h3>
                  <p className="text-akama-gray">
                    Création de sites web, applications métier et solutions e-commerce.
                    Optimisation SEO et maintenance de plateformes existantes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Sécurité Informatique</h3>
                  <p className="text-akama-gray">
                    Protection de vos données et infrastructures contre les menaces numériques.
                    Audits de sécurité et mise en place de solutions adaptées.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Télécommunications</h3>
                  <p className="text-akama-gray">
                    Solutions de téléphonie IP et VoIP pour entreprises.
                    Installation et configuration de systèmes de communication unifiée.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Logiciels Spécialisés</h3>
                  <p className="text-akama-gray">
                    Implémentation et personnalisation de logiciels métier.
                    Solutions ERP, CRM et gestion documentaire.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Imprimerie */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="flex items-center mb-6">
                <Printer size={28} className="text-akama-purple mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-akama-dark">
                  Imprimerie
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Impression Numérique</h3>
                  <p className="text-akama-gray">
                    Impression haute qualité de documents professionnels et marketing.
                    Supports variés et finitions personnalisées.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Fabrication de Tampons</h3>
                  <p className="text-akama-gray">
                    Création de tampons personnalisés pour entreprises et administrations.
                    Options de tampons automatiques, bois ou mécaniques.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Photocopies</h3>
                  <p className="text-akama-gray">
                    Services de reproduction de documents en noir et blanc ou couleur.
                    Options grand volume et différents formats disponibles.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Formation */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="flex items-center mb-6">
                <GraduationCap size={28} className="text-akama-purple mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-akama-dark">
                  Formation
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Formations Techniques</h3>
                  <p className="text-akama-gray">
                    Programmes de formation en réseaux, maintenance et administration systèmes.
                    Certifications techniques reconnues.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Logiciels et Applications</h3>
                  <p className="text-akama-gray">
                    Maîtrise des logiciels bureautiques, professionnels et créatifs.
                    Formation adaptée aux besoins spécifiques de votre équipe.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Design et Création</h3>
                  <p className="text-akama-gray">
                    Formations en design graphique, web design et outils créatifs.
                    Développement de compétences multimédia.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Autres Services */}
          <div>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-akama-dark mb-8">
                Autres Prestations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Video size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Production Audiovisuelle</h3>
                  <p className="text-akama-gray">
                    Création de contenu vidéo professionnel pour entreprises.
                    Services de montage, post-production et animation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <LineChart size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Études et Conseils</h3>
                  <p className="text-akama-gray">
                    Audits informatiques et analyses stratégiques.
                    Recommandations et accompagnement dans votre transformation digitale.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Building size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Services Bâtiment</h3>
                  <p className="text-akama-gray">
                    Interventions et prestations dans le secteur du bâtiment.
                    Solutions adaptées aux besoins de votre entreprise.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Car size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Location/Vente de Véhicules</h3>
                  <p className="text-akama-gray">
                    Services de location et vente de véhicules professionnels.
                    Options flexibles adaptées à vos besoins.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <ShoppingBag size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Vente de Matériel</h3>
                  <p className="text-akama-gray">
                    Fourniture d'équipements informatiques et bureautiques de qualité.
                    Conseil personnalisé pour vos achats professionnels.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Wrench size={24} className="text-akama-purple mb-3" />
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Services Sur Mesure</h3>
                  <p className="text-akama-gray">
                    Solutions personnalisées pour répondre à vos besoins spécifiques.
                    Accompagnement de projets spéciaux et innovations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-akama-purple/10">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-akama-dark">
              Besoin d'un service spécifique ?
            </h2>
            <p className="text-akama-gray mb-8">
              Nos équipes sont à votre disposition pour discuter de vos besoins particuliers et vous proposer des solutions adaptées.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-lg bg-akama-purple text-white font-medium transition-all hover:bg-akama-purple/90 hover:shadow-lg hover:shadow-akama-purple/20"
            >
              Demander un devis
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
