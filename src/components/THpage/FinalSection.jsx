import React, { useRef, useEffect, useState } from "react";

const FinalSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý animation khi scroll vào section
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-screen relative overflow-hidden bg-white">
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

