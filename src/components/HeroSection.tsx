
import { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  backgroundImage?: string;
  overlayColor?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  overlayColor = "from-akama-dark/80 to-akama-dark/60",
  buttonLabel,
  buttonLink,
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="AKAMA GROUPE background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full border border-akama-purple/50 bg-akama-purple/10 text-akama-purple backdrop-blur-sm">
              AKAMA GROUPE SARL
            </div>
          </div>
          
          <h1 className="animate-fade-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance">
            {title}
          </h1>
          
          <p className="animate-fade-in opacity-0 text-lg md:text-xl text-white/80 max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
            {subtitle}
          </p>
          
          {buttonLabel && buttonLink && (
            <div className="animate-fade-in opacity-0 pt-4" style={{ animationDelay: "0.9s" }}>
              <a
                href={buttonLink}
                className="inline-flex items-center px-6 py-3 rounded-full bg-akama-purple text-white font-medium transition-all hover:bg-akama-purple/90 hover:shadow-lg hover:shadow-akama-purple/20 hover:-translate-y-1"
              >
                {buttonLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
