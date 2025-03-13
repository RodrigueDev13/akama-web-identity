import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDetailCard from "@/components/ServiceDetailCard";
import { Monitor, Printer, GraduationCap, Video, LineChart, Users, Truck, Network, HardDrive, Globe, PanelLeft, MessagesSquare } from "lucide-react";
const Services = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Services";
  }, []);
  return <PageLayout>
      {/* Hero Section */}
      <HeroSection title="Nos Services" subtitle="Découvrez l'éventail complet de solutions proposées par AKAMA GROUPE" backgroundImage="https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=2070&auto=format&fit=crop" />
      
      {/* Services Content */}
      <section className="section-padding bg-slate-200">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-akama-dark">
              Solutions Complètes et Personnalisées
            </h2>
            <p className="text-akama-gray max-w-3xl mx-auto">
              AKAMA GROUPE propose une large gamme de services adaptés aux besoins des entreprises 
              et des particuliers. Notre équipe d'experts vous accompagne dans tous vos projets.
            </p>
          </AnimatedSection>
          
          {/* First Services Section - IT */}
          <div className="mb-20">
            <AnimatedSection>
              <h3 className="text-2xl font-serif font-semibold mb-8 text-akama-dark inline-block px-3 py-1 rounded-lg bg-akama-red/10 text-akama-red">
                Informatique & Télécoms
              </h3>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceDetailCard title="Réseaux & Sécurité" description="Installation, configuration et maintenance de réseaux informatiques. Mise en place de solutions de sécurité adaptées à vos besoins pour protéger vos données et systèmes." icon={<Network className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1486551937199-baf066858de7?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Maintenance Informatique" description="Services complets de maintenance préventive et corrective pour tous vos équipements informatiques. Dépannage rapide et efficace sur site ou à distance." icon={<HardDrive className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Développement Web" description="Conception et développement de sites internet, applications web et plateformes e-commerce personnalisés et optimisés pour répondre à vos objectifs." icon={<Globe className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Solutions Cloud" description="Migration et gestion de vos infrastructures dans le cloud. Optimisation des ressources et réduction des coûts grâce à des solutions adaptées à vos besoins." icon={<Monitor className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Systèmes d'Information" description="Audit, conception et mise en place de systèmes d'information performants. Intégration de solutions logicielles adaptées à votre secteur d'activité." icon={<PanelLeft className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Téléphonie & VoIP" description="Installation et maintenance de systèmes de téléphonie IP. Solutions de communications unifiées pour améliorer la productivité et réduire les coûts." icon={<MessagesSquare className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop" />
            </div>
          </div>
          
          {/* Second Services Section - Other Services */}
          <div>
            <AnimatedSection>
              <h3 className="text-2xl font-serif font-semibold mb-8 text-akama-dark inline-block px-3 py-1 rounded-lg bg-akama-red/10 text-akama-red">
                Autres Services
              </h3>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceDetailCard title="Imprimerie" description="Services d'impression professionnels pour tous vos documents. Réalisation de tampons, affiches, flyers, brochures, cartes de visite et bien plus encore." icon={<Printer className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1602628500546-3c95f0fde865?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Formation" description="Formations spécialisées en informatique, réseaux, maintenance, logiciels et design graphique. Programmes adaptés aux besoins spécifiques de votre entreprise." icon={<GraduationCap className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1562516710-59c668f7e851?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Production Audiovisuelle" description="Création de contenu audiovisuel de qualité pour vos besoins professionnels. Réalisation de vidéos promotionnelles, films corporate et animations." icon={<Video className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1601039829851-130abb83e4ed?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Études et Conseils" description="Services de conseil en transformation numérique, optimisation des processus et intégration technologique. Audits et recommandations stratégiques." icon={<LineChart className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Ressources Humaines" description="Recrutement spécialisé en IT, formation et développement des compétences. Solutions de gestion des ressources humaines adaptées à votre structure." icon={<Users className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" />
              
              <ServiceDetailCard title="Logistique" description="Services de transport et logistique pour vos équipements informatiques. Solutions de stockage et gestion de parc matériel sécurisées et fiables." icon={<Truck className="text-akama-red" size={28} />} image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 text-white bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos projets.
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-akama-red text-white font-medium transition-all hover:bg-akama-red/90 hover:shadow-lg hover:shadow-akama-red/20 hover:-translate-y-1">
              Demander un devis
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>;
};
export default Services;