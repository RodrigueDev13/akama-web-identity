
import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Code, Users, ShoppingBag, Lightbulb, Award, ShieldCheck } from "lucide-react";

const Organization = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Organisation";
  }, []);
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Notre Organisation"
        subtitle="Découvrez la structure et les valeurs fondamentales d'AKAMA GROUPE"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* Organization Content */}
      <section className="section-padding bg-akama-light">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-akama-dark">
              Structure Organisationnelle
            </h2>
            <p className="text-akama-gray max-w-3xl mx-auto">
              AKAMA GROUPE s'organise autour de départements spécialisés permettant d'offrir 
              une gamme complète de services à nos clients tout en maintenant un niveau d'expertise élevé.
            </p>
          </AnimatedSection>
          
          {/* Organizational Chart */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-center mb-10">
                  <div className="text-center p-6 rounded-xl bg-akama-red/10 border border-akama-red/20 max-w-xs">
                    <h3 className="text-xl font-serif font-semibold text-akama-red mb-2">Direction Générale</h3>
                    <p className="text-akama-gray">Supervision stratégique et coordination globale des activités</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-red/30 transition-all hover:shadow-md">
                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                        alt="Direction Administrative" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                        <FileText size={28} className="text-akama-red" />
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-akama-dark text-center mb-3">
                      Direction Administrative
                    </h4>
                    <ul className="text-akama-gray space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Gestion administrative et financière</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ressources humaines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Comptabilité et facturation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Affaires juridiques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-red/30 transition-all hover:shadow-md">
                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop" 
                        alt="Direction IT 01" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                        <Code size={28} className="text-akama-red" />
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-akama-dark text-center mb-3">
                      Direction IT - Développement
                    </h4>
                    <ul className="text-akama-gray space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Développement web et mobile</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Solutions logicielles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Intégration de systèmes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Innovation technologique</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-red/30 transition-all hover:shadow-md">
                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581092921461-39b9feb08924?q=80&w=1000&auto=format&fit=crop" 
                        alt="Direction IT 02" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                        <Users size={28} className="text-akama-red" />
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-akama-dark text-center mb-3">
                      Direction IT - Infrastructure
                    </h4>
                    <ul className="text-akama-gray space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Réseaux et télécommunications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Sécurité informatique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maintenance et support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Solutions cloud</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-akama-red/30 transition-all hover:shadow-md">
                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                        alt="Direction Commerciale" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                        <ShoppingBag size={28} className="text-akama-red" />
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-akama-dark text-center mb-3">
                      Direction Commerciale
                    </h4>
                    <ul className="text-akama-gray space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ventes et développement commercial</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Marketing et communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Relations clients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Gestion des projets spéciaux</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Company Values */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-akama-dark">
              Nos Valeurs
            </h2>
            <p className="text-akama-gray max-w-3xl mx-auto">
              Les valeurs qui guident chacune de nos actions et décisions, constituant 
              le fondement de notre culture d'entreprise et de notre engagement envers nos clients.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:border-akama-red/30 transition-all hover:shadow-md">
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1677098544904-9063a4c51255?q=80&w=1000&auto=format&fit=crop" 
                    alt="Innovation" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center my-4">
                  <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                    <Lightbulb size={28} className="text-akama-red" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-akama-dark text-center mb-3">
                  Innovation
                </h3>
                <p className="text-akama-gray text-center">
                  Nous encourageons constamment la créativité et la recherche de nouvelles solutions, 
                  adoptant les technologies émergentes pour proposer des services à la pointe de l'innovation.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:border-akama-red/30 transition-all hover:shadow-md">
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop" 
                    alt="Excellence" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center my-4">
                  <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                    <Award size={28} className="text-akama-red" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-akama-dark text-center mb-3">
                  Excellence
                </h3>
                <p className="text-akama-gray text-center">
                  Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos services, 
                  visant toujours l'excellence opérationnelle et la satisfaction totale du client.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:border-akama-red/30 transition-all hover:shadow-md">
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1000&auto=format&fit=crop" 
                    alt="Intégrité" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center my-4">
                  <div className="w-16 h-16 rounded-full bg-akama-red/10 flex items-center justify-center">
                    <ShieldCheck size={28} className="text-akama-red" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-akama-dark text-center mb-3">
                  Intégrité
                </h3>
                <p className="text-akama-gray text-center">
                  Nous agissons avec transparence et honnêteté dans toutes nos relations professionnelles, 
                  respectant nos engagements et plaçant l'éthique au cœur de nos décisions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-akama-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Rejoignez notre équipe
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              AKAMA GROUPE est toujours à la recherche de talents passionnés pour renforcer ses équipes.
              Découvrez nos opportunités de carrière et devenez membre de notre famille.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-akama-red text-white font-medium transition-all hover:bg-akama-red/90 hover:shadow-lg hover:shadow-akama-red/20 hover:-translate-y-1"
            >
              Nous contacter
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Organization;
