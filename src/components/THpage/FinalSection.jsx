import React, { useRef, useEffect } from "react";

const FinalSection = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  // Xử lý phát/dừng audio khi scroll vào/ra section
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Scroll vào section -> phát audio từ đầu
          audio.currentTime = 0;
          audio.play().catch((err) => {
            console.log("Audio play failed:", err);
          });
        } else {
          // Scroll ra khỏi section -> dừng audio
          audio.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Section chiếm ít nhất 10% viewport
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Dừng audio khi unmount
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-screen flex flex-col items-center justify-center">
      <audio ref={audioRef} src="/THpage/voiceFinal.m4a" preload="auto" />
      <img
        src="/THpage/final.webp"
        alt="final"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FinalSection;
