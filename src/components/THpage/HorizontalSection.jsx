import React, { useRef, useEffect, useState } from 'react';

const HorizontalSection = () => {
  const containerRef = useRef(null);
  const [, setIsScrolling] = useState(false);

  // Danh sách ảnh
  const images = Array.from({ length: 9 }, (_, i) => `/THpage/horizontal-scroll/h${i + 1}.jpg`);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      // Dừng audio khi unmount
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const containerRect = container.getBoundingClientRect();
      
      // Kiểm tra section có trong viewport không
      const isInView = containerRect.top <= 100 && containerRect.bottom >= 0;

      if (!isInView) return;

      const scrollContent = container.querySelector('.scroll-content');
      const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth;
      const currentScrollLeft = scrollContent.scrollLeft;

      // Thêm tolerance để xử lý floating point
      const tolerance = 5;
      const atStart = currentScrollLeft <= tolerance;
      const atEnd = currentScrollLeft >= maxScrollLeft - tolerance;

      // Nếu scroll xuống (deltaY > 0)
      if (e.deltaY > 0) {
        // Chỉ cho phép scroll trang xuống khi đã ở cuối hoàn toàn
        if (atEnd) {
          // Cho phép scroll xuống trang tiếp
          return;
        } else {
          // Chặn và scroll ngang
          e.preventDefault();
          e.stopPropagation();
          scrollContent.scrollLeft += e.deltaY;
          setIsScrolling(true);
        }
      }
      // Nếu scroll lên (deltaY < 0)
      else if (e.deltaY < 0) {
        // Chỉ cho phép scroll trang lên khi đã ở đầu hoàn toàn
        if (atStart) {
          // Cho phép scroll lên trang trước
          return;
        } else {
          // Chặn và scroll ngang về trái
          e.preventDefault();
          e.stopPropagation();
          scrollContent.scrollLeft += e.deltaY;
          setIsScrolling(true);
        }
      }
    };

    // Thêm event listener với passive: false để có thể preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-white"
    >
      {/* Audio element */}
      <audio ref={audioRef} src="/THpage/voiceHorizon.m4a" preload="auto" />
      <div className="w-full h-full py-10">
        <div div className="px-8 w-full h-full">
          <div
            className="scroll-content overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            <div className="grid grid-flow-col auto-cols-max gap-12 p-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="group relative w-100 h-120 rounded-2xl overflow-hidden hover:transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalSection;
