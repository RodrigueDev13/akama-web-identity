import { useEffect } from "react";
import PageLayout from "@/layout/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
const Legal = () => {
  useEffect(() => {
    document.title = "AKAMA GROUPE | Informations Légales";
  }, []);
  return <PageLayout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-akama-light to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-akama-dark">
              Informations Légales
            </h1>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Legal Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-red-800">
                  AKAMA GROUPE SARL
                </h2>
                <div className="space-y-4 text-akama-gray">
                  <p>
                    <strong className="text-akama-dark">Forme juridique :</strong> Société à Responsabilité Limitée (SARL)
                  </p>
                  <p>
                    <strong className="text-akama-dark">Date de création :</strong> 2016 (transformation d'AKAMA INFORMATIQUE créée en 2011)
                  </p>
                  <p>
                    <strong className="text-akama-dark">Siège social :</strong> Cocody Centre, Abidjan, Côte d'Ivoire
                  </p>
                  <p>
                    <strong className="text-akama-dark">Adresse postale :</strong> BP XXXXX Abidjan
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-red-800">
                Mentions Légales
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Propriété intellectuelle</h3>
                  <p className="text-akama-gray mb-3">
                    L'ensemble des éléments constituant le site web d'AKAMA GROUPE SARL (textes, graphismes, logos, 
                    images, photographies, vidéos) sont la propriété exclusive de la société ou de ses partenaires. 
                    Toute reproduction, représentation, modification, publication ou adaptation est interdite sans 
                    l'accord préalable écrit d'AKAMA GROUPE SARL.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Protection des données personnelles</h3>
                  <p className="text-akama-gray mb-3">
                    Conformément à la législation en vigueur, AKAMA GROUPE SARL s'engage à respecter la vie privée 
                    des utilisateurs et à protéger les informations personnelles collectées. Les données recueillies 
                    via le formulaire de contact sont utilisées uniquement dans le cadre de la relation client et ne 
                    sont en aucun cas cédées à des tiers sans votre consentement.
                  </p>
                  <p className="text-akama-gray mb-3">
                    Vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant, 
                    que vous pouvez exercer en nous contactant via le formulaire de contact ou par email.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Limitation de responsabilité</h3>
                  <p className="text-akama-gray mb-3">
                    AKAMA GROUPE SARL s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations 
                    diffusées sur son site web. Toutefois, la société ne peut garantir l'exactitude, la précision ou 
                    l'exhaustivité des informations mises à disposition.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3 text-akama-dark">Compétence juridictionnelle</h3>
                  <p className="text-akama-gray mb-3">
                    Tout litige relatif à l'utilisation du site web d'AKAMA GROUPE SARL est soumis à la loi ivoirienne. 
                    Les tribunaux d'Abidjan sont seuls compétents pour connaître de tout litige.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default Legal;