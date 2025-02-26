
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-akama-purple/10 text-akama-purple p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-akama-dark">{title}</h3>
      <p className="text-akama-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
