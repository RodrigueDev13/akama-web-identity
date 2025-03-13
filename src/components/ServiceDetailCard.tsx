
import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface ServiceDetailCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
}

const ServiceDetailCard = ({ 
  title, 
  description, 
  icon,
  image = "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1000&auto=format&fit=crop" 
}: ServiceDetailCardProps) => {
  return (
    <AnimatedSection>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-akama-red/30">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-3 bg-akama-red/10 p-2 rounded-md">
              {icon}
            </div>
            <h3 className="text-xl font-serif font-semibold text-akama-dark">{title}</h3>
          </div>
          <p className="text-akama-gray text-sm">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceDetailCard;
