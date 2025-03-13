
import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, FileText, Code, ShoppingBag } from "lucide-react";

const Organization = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Organisation";
  }, []);
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Notre Organisation"
        subtitle="Découvrez la structure interne d'AKAMA GROUPE et ses directions principales"
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* Organization Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <p className="text-akama-gray text-lg mb-6">
              AKAMA GROUPE est structuré autour de quatre directions principales, chacune ayant un rôle 
              stratégique dans la réalisation de notre mission. Cette organisation nous permet d'offrir 
              des services de qualité et de répondre efficacement aux besoins de nos clients.
            </p>
            <p className="text-akama-gray text-lg">
              Notre équipe est composée de professionnels qualifiés et passionnés, partageant les mêmes 
              valeurs d'excellence, d'innovation et d'engagement envers nos clients.
            </p>
          </AnimatedSection>
          
          {/* Organization Chart */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="relative p-8 border border-akama-purple/20 rounded-xl bg-gradient-to-b from-white to-akama-purple/5 shadow-sm mb-8">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-serif font-bold text-akama-dark mb-2">Direction Générale</h3>
                  <p className="text-akama-gray">Gestion stratégique et supervision des activités du groupe</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-purple/30 transition-all hover:shadow-md">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-purple/10 flex items-center justify-center">
                        <FileText size={28} className="text-akama-purple" />
                      </div>
                    </div>
                    <h4 className="text-xl font-medium text-center mb-3 text-akama-dark">Direction Administrative</h4>
                    <ul className="text-akama-gray space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Gestion financière par le CGA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Ressources humaines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Affaires juridiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Administration générale</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-purple/30 transition-all hover:shadow-md">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-purple/10 flex items-center justify-center">
                        <Code size={28} className="text-akama-purple" />
                      </div>
                    </div>
                    <h4 className="text-xl font-medium text-center mb-3 text-akama-dark">Direction IT 01</h4>
                    <ul className="text-akama-gray space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Développement logiciel</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Maintenance informatique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Solutions réseaux</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Imprimerie & production</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-purple/30 transition-all hover:shadow-md">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-purple/10 flex items-center justify-center">
                        <Users size={28} className="text-akama-purple" />
                      </div>
                    </div>
                    <h4 className="text-xl font-medium text-center mb-3 text-akama-dark">Direction IT 02</h4>
                    <ul className="text-akama-gray space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Formation technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Production audiovisuelle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Sécurité informatique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Innovations technologiques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-purple/30 transition-all hover:shadow-md">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-purple/10 flex items-center justify-center">
                        <ShoppingBag size={28} className="text-akama-purple" />
                      </div>
                    </div>
                    <h4 className="text-xl font-medium text-center mb-3 text-akama-dark">Direction Commerciale</h4>
                    <ul className="text-akama-gray space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Vente et location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Marketing et communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Service client</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-akama-purple mt-2 mr-2"></span>
                        <span>Développement commercial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Values Section */}
          <div>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-akama-dark mb-8">
                Nos Valeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                      alt="Innovation" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Innovation</h3>
                  <p className="text-akama-gray">
                    Nous recherchons constamment de nouvelles approches et solutions pour répondre aux défis 
                    technologiques en évolution rapide. L'innovation est au cœur de notre démarche, nous permettant 
                    d'anticiper les besoins futurs de nos clients.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop" 
                      alt="Excellence" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Excellence</h3>
                  <p className="text-akama-gray">
                    Nous nous engageons à fournir des services et produits de la plus haute qualité. 
                    Notre équipe poursuit l'excellence dans chaque aspect de son travail, garantissant 
                    la satisfaction de nos clients et partenaires.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" 
                      alt="Intégrité" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Intégrité</h3>
                  <p className="text-akama-gray">
                    Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations 
                    professionnelles. L'intégrité est fondamentale dans notre approche des affaires et dans 
                    la confiance que nous établissons avec nos clients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Organization;
