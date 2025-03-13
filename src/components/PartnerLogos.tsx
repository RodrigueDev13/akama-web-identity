import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AnimatedSection from "./AnimatedSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const logos = [{
  id: 1,
  name: "Partner 1",
  url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=400&auto=format&fit=crop"
}, {
  id: 2,
  name: "Partner 2",
  url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop"
}, {
  id: 3,
  name: "Partner 3",
  url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop"
}, {
  id: 4,
  name: "Partner 4",
  url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop"
}, {
  id: 5,
  name: "Partner 5",
  url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop"
}];
const PartnerLogos = () => {
  const [api, setApi] = useState<any>(null);
  const autoplayPlugin = React.useMemo(() => Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  }), []);
  return <section className="section-padding rounded bg-slate-200">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-akama-dark">
            ILS NOUS FONT CONFIANCE
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <Carousel setApi={setApi} opts={{
          align: "start",
          loop: true,
          dragFree: true,
          direction: "rtl" // Pour défiler de droite à gauche
        }} plugins={[autoplayPlugin]} className="w-full">
            <CarouselContent className="-ml-1">
              {logos.map(logo => <CarouselItem key={logo.id} className="pl-4 md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center h-24 p-4 bg-slate-200">
                      <img src={logo.url} alt={`${logo.name} logo`} className="h-full w-auto object-scale-down" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>;
};
export default PartnerLogos;