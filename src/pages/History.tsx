import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import TimelineItem from "@/components/TimelineItem";
const History = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Historique";
  }, []);
  return <PageLayout>
      {/* Hero Section */}
      <HeroSection title="Notre Histoire" subtitle="De AKAMA INFORMATIQUE à AKAMA GROUPE - Un parcours d'innovation et de croissance" backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" />
      
      {/* History Content */}
      <section className="section-padding bg-slate-200">
        <div className="container mx-auto bg-slate-200">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-10">
              <p className="mb-6 text-slate-900">
                L'histoire d'AKAMA GROUPE est celle d'une vision entrepreneuriale portée par de jeunes ingénieurs 
                talentueux et déterminés à créer des solutions technologiques innovantes en Côte d'Ivoire. 
                Ce qui a commencé comme une modeste entreprise de services informatiques s'est transformé en un 
                groupe diversifié couvrant de multiples secteurs d'activité.
              </p>
            </AnimatedSection>
            
            <div className="space-y-8">
              <TimelineItem year="2011" title="Création d'AKAMA INFORMATIQUE" description="Fondation de l'entreprise par un groupe de jeunes ingénieurs passionnés. Les premiers services se concentrent principalement sur les dépannages informatiques et l'assistance technique." />
              
              <TimelineItem year="2012-2013" title="Expansion des services" description="Élargissement progressif des activités avec l'ajout de nouveaux services comme la maintenance réseau, le développement web et la formation en informatique pour répondre à une demande croissante." />
              
              <TimelineItem year="2014" title="Diversification des activités" description="Introduction des services d'imprimerie et début des activités dans le domaine des télécommunications, marquant les premiers pas vers une diversification significative." />
              
              <TimelineItem year="2015" title="Croissance et reconnaissance" description="Période de forte croissance avec l'acquisition de nouveaux clients institutionnels et l'expansion de l'équipe technique. Reconnaissance croissante sur le marché local pour la qualité des services." />
              
              <TimelineItem year="2016" title="Transformation en AKAMA GROUPE SARL" description="Évolution juridique majeure avec la transformation en société à responsabilité limitée et la création d'AKAMA GROUPE, reflétant la diversification des activités et l'ambition de développement à plus grande échelle." />
              
              <TimelineItem year="2017-2019" title="Structuration et nouveaux services" description="Réorganisation interne avec la création de départements spécialisés et l'introduction de nouvelles offres : production audiovisuelle, études et conseils, activités dans le bâtiment et l'automobile." />
              
              <TimelineItem year="2020-Présent" title="Consolidation et innovation" description="Période de consolidation des acquis et d'innovation continue. Renforcement de l'expertise technique, développement de partenariats stratégiques et exploration de nouvelles opportunités de croissance." isLast={true} />
            </div>
            
            <AnimatedSection className="mt-12 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-red-700">Notre Vision</h3>
              <p className="mb-4 text-zinc-800">
                AKAMA GROUPE aspire à devenir un leader régional dans le domaine des services technologiques et 
                professionnels, en offrant des solutions innovantes qui contribuent au développement numérique 
                de la Côte d'Ivoire et de l'Afrique de l'Ouest.
              </p>
              
              <p className="text-zinc-800">
                Accompagner les entreprises et organisations dans leur transformation numérique en proposant des 
                services personnalisés, de haute qualité et adaptés aux réalités locales. Nous nous engageons à 
                créer de la valeur pour nos clients, nos employés et nos communautés à travers l'innovation et 
                l'excellence opérationnelle.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default History;