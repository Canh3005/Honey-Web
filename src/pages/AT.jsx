import { useSmoothScroll } from "../hooks/useSmoothScroll";
import {
  HeroSection,
  IntroSection,
  ComputerSection,
  RoleSection,
  CrySection,
  MentalHealthChart,
} from "../components/ATpage";
import CharacterNavigator from "../components/CharacterNavigator";

const AT = () => {
  const scrollContainerRef = useSmoothScroll(1000);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px) rotate(-90deg); }
          to { opacity: 1; transform: translateX(0) rotate(-90deg); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fillBar {
          from { width: 0%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fill-70 { animation: fillBar 1.5s ease-out forwards; width: 70%; }
        .animate-fill-80 { animation: fillBar 1.5s ease-out forwards; width: 80%; }
        .animate-fill-90 { animation: fillBar 1.5s ease-out forwards; width: 90%; }
        .animate-fill-100 { animation: fillBar 1.5s ease-out forwards; width: 100%; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>

      <HeroSection />
      <IntroSection />
      <ComputerSection scrollContainerRef={scrollContainerRef} />
      <RoleSection scrollContainerRef={scrollContainerRef} />
      <CrySection />
      <MentalHealthChart className="h-screen" />
      <CharacterNavigator />
    </div>
  );
};

export default AT;
