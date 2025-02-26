
import { ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({ year, title, description, icon, isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 animate-on-scroll">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-2.5 top-8 bottom-0 w-px bg-akama-light-gray/30"></div>
      )}
      
      {/* Circle */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-akama-purple bg-white shadow-md"></div>
      
      {/* Year */}
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-akama-purple/10 text-akama-purple mb-2">
        {year}
      </span>
      
      {/* Content */}
      <h3 className="text-xl font-serif font-semibold mb-2 text-akama-dark">{title}</h3>
      <p className="text-akama-gray">{description}</p>
    </div>
  );
};

export default TimelineItem;
