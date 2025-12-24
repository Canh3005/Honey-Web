import React, { useRef, useEffect, useState } from "react";

const FinalSection = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
          setIsVisible(true);
          // Scroll vào section -> phát audio từ đầu
          playAudio();
        } else {
          // Scroll ra khỏi section -> dừng audio
          audio.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Section chiếm ít nhất 30% viewport
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
    <div ref={sectionRef} className="h-screen relative overflow-hidden bg-white">
      <audio ref={audioRef} src="/THpage/voiceFinal.m4a" preload="auto" />
      
      {/* Main Content */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-8 md:px-12 lg:px-16 py-12">
        {/* Left Side - Image */}
        <div className="relative flex items-center justify-center">
          <div className={`w-full h-full max-h-[80vh] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <img
              src="/THpage/final.jpg"
              alt="Thu Hằng"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Itim] mb-15 leading-tight text-black tracking-wide whitespace-nowrap">
              Học cách tin vào chính mình
            </h2>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-[Itim] leading-relaxed">
                Nhìn lại hành trình đã qua, Thu Hằng cho rằng mọi gập ghềnh đều có ý nghĩa. Bởi chính thử thách giúp mỗi người hiểu rõ mình có thể đi xa đến đâu.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-[Itim] leading-relaxed">
                Chiến thắng lớn nhất, theo cô, không nằm ở danh hiệu, mà ở việc vẫn tiếp tục bước đi khi niềm tin vào bản thân lung lay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
