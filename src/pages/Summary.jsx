import { useSmoothScroll } from "../hooks/useSmoothScroll";
import CharacterNavigator from "../components/CharacterNavigator";
import { useRef, useEffect, useState } from "react";

const Summary = () => {
  const scrollContainerRef = useSmoothScroll(1000);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const characters = [
    {
      name: 'Anh Thư',
      realImage: '/ATpage/realAvt.png',
      image: '/ATpage/avtAT.png',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-400'
    },
    {
      name: 'Minh Anh',
      realImage: '/MApage/realAvt.png',
      image: '/MApage/avt.png',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-400'
    },
    {
      name: 'Thu Hằng',
      realImage: '/THpage/realAvt.png',
      image: '/THpage/avtTH.png',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        
        /* 3D Flip Card Styles */
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 9999px;
          overflow: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div 
        ref={sectionRef}
        className="h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-3xl"></div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-20 py-12">
          
          {/* Title */}
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Itim] text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 text-center pb-2 leading-tight">
              Tổng Kết Hành Trình
            </h1>
          </div>

          {/* Main Image */}
          <div className={`mb-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-rose-400/40 to-purple-400/40 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src="/SummaryPage/sum.png"
                  alt="Tổng kết hành trình"
                  className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className={`text-center max-w-5xl mt-4 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold font-[Itim] leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600">
              Khi hành trình khép lại, điều còn lại không phải là danh hiệu, mà là những bài học từ mỗi lần vấp ngã. 
              Bởi thành công không chỉ nằm ở đích đến, mà ở cách con người kiên trì bước tiếp qua những thử thách trên đường đi.
            </p>
          </div>

        </div>
      </div>

      <CharacterNavigator />
    </div>
  );
};

export default Summary;
