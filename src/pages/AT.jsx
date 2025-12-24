import { useRef, useEffect, useState } from "react";
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
  const crySectionRef = useRef(null);
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  // Preload và track audio ready state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setAudioReady(true);
    };

    const handleError = (e) => {
      console.error("Audio loading error:", e);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    // Force load audio
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Xử lý phát/dừng audio khi scroll vào/ra vùng CrySection + MentalHealthChart
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        // Đợi audio ready nếu chưa sẵn sàng
        if (!audioReady) {
          await new Promise((resolve) => {
            const checkReady = () => {
              if (audio.readyState >= 3) {
                resolve();
              } else {
                setTimeout(checkReady, 100);
              }
            };
            checkReady();
          });
        }

        audio.currentTime = 0;
        await audio.play();
      } catch (err) {
        console.log("Audio play failed:", err);
        setTimeout(() => {
          audio.play().catch(e => console.log("Retry failed:", e));
        }, 500);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Scroll vào vùng cry sections -> phát audio
          playAudio();
        } else {
          // Scroll ra khỏi vùng -> dừng audio
          audio.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger khi 10% vùng hiển thị
    });

    if (crySectionRef.current) {
      observer.observe(crySectionRef.current);
    }

    return () => {
      if (crySectionRef.current) {
        observer.unobserve(crySectionRef.current);
      }
      if (audio) {
        audio.pause();
      }
    };
  }, [audioReady]);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <audio ref={audioRef} src="/ATpage/cry.mp3" preload="auto" />
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
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
      
      {/* Wrapper cho CrySection và MentalHealthChart để audio phát liên tục */}
      <div ref={crySectionRef}>
        <CrySection />
        <MentalHealthChart className="h-screen" />
      </div>
      
      <CharacterNavigator />
    </div>
  );
};

export default AT;

