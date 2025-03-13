import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, Printer, GraduationCap, Video, LineChart, Users } from "lucide-react";
const Index = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Accueil";
  }, []);
  return <PageLayout>
      {/* Hero Section */}
      <HeroSection title={<>Bienvenue chez <span className="text-akama-red">AKAMA GROUPE</span></>} subtitle="Nous accompagnons votre transformation numérique avec des solutions adaptées à vos besoins" buttonLabel="Découvrir nos services" buttonLink="#services" />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-slate-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection>
                <h2 className="section-title mb-6">À propos d'AKAMA GROUPE</h2>
                <p className="mb-4 text-gray-800">
                  AKAMA GROUPE est une entreprise dynamique née de la transformation d'AKAMA INFORMATIQUE en 2016. 
                  Notre mission est de fournir des services de qualité dans divers domaines : informatique, 
                  télécommunications, imprimerie, formation et bien plus encore.
                </p>
                <p className="mb-6 text-gray-800">
                  Fondée par de jeunes ingénieurs en 2011, notre société a évolué pour devenir un acteur 
                  incontournable du secteur technologique en Côte d'Ivoire, offrant des solutions innovantes 
                  et adaptées aux besoins de nos clients.
                </p>
                <Link to="/history" className="inline-flex items-center text-akama-red font-medium hover:underline">
                  En savoir plus sur notre histoire
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection delay={200}>
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="AKAMA GROUPE Team" className="rounded-xl shadow-lg" />
                  <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-akama-dark font-serif font-medium">
                      Fondée en <span className="text-akama-red font-bold">2011</span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Highlight Section */}
      <section id="services" className="section-padding bg-slate-200">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-akama-red/10 text-akama-red">
              Nos Expertises
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-akama-dark">
              Découvrez Nos Services
            </h2>
            <p className="text-akama-gray max-w-2xl mx-auto">
              AKAMA GROUPE propose une large gamme de services adaptés à vos besoins professionnels, 
              de l'informatique à la production audiovisuelle.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Informatique & Télécoms" description="Solutions informatiques, maintenance, réseaux, sécurité et développement web pour optimiser votre infrastructure." icon={<Monitor size={24} />} delay={100} />
            
            <ServiceCard title="Imprimerie" description="Services d'impression professionnels : tampons, photocopies, impressions variées pour tous vos documents." icon={<Printer size={24} />} delay={200} />
            
            <ServiceCard title="Formation" description="Formations spécialisées en réseaux, maintenance, logiciels et design graphique pour développer vos compétences." icon={<GraduationCap size={24} />} delay={300} />
            
            <ServiceCard title="Production Audiovisuelle" description="Création de contenu audiovisuel de qualité pour vos besoins professionnels et marketing." icon={<Video size={24} />} delay={400} />
            
            <ServiceCard title="Études et Conseils" description="Audits, consultations et recommandations stratégiques pour optimiser vos processus et technologies." icon={<LineChart size={24} />} delay={500} />
            
            <ServiceCard title="Autres Prestations" description="Services variés incluant bâtiment, location/vente de voitures et autres solutions sur mesure." icon={<Users size={24} />} delay={600} />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center px-6 py-3 rounded-lg bg-akama-red text-white font-medium transition-all hover:bg-akama-red/90 hover:shadow-lg hover:shadow-akama-red/20">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-white bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment 
              AKAMA GROUPE peut vous accompagner dans vos projets.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-akama-red text-white font-medium transition-all hover:bg-akama-red/90 hover:shadow-lg hover:shadow-akama-red/20 hover:-translate-y-1">
              Nous contacter
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>;
};
export default Index;