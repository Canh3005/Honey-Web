import React, { useRef, useEffect, useState } from "react";

const FinalSection = () => {
  const sectionRef = useRef(null);
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

  // Xử lý phát/dừng audio khi scroll vào/ra section
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        // Đợi audio ready nếu chưa sẵn sàng
        if (!audioReady) {
          await new Promise((resolve) => {
            const checkReady = () => {
              if (audio.readyState >= 3) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
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
        // Retry sau 500ms nếu fail
        setTimeout(() => {
          audio.play().catch(e => console.log("Retry failed:", e));
        }, 500);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Scroll vào section -> phát audio từ đầu
          playAudio();
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
  }, [audioReady]);

  return (
    <div ref={sectionRef} className="h-screen flex flex-col items-center justify-center">
      <audio ref={audioRef} src="/THpage/voiceFinal.m4a" preload="auto" />
      <img
        src="/THpage/final.jpg"
        alt="final"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FinalSection;
