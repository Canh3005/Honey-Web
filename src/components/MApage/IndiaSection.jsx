import React, { useRef, useEffect, useState } from 'react';

const IndiaSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div 
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-white"
    >
      {/* Main Content */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8 md:px-12 lg:px-16 py-12">
        {/* Left Side - Title */}
        <div className="flex items-center justify-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Itim] mb-6 leading-tight text-black">
              <p>Quyết định lớn nhất:</p> <p> Một mình đến Ấn Độ</p>
            </h2>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex items-center justify-center">
          <div className={`w-full h-full max-h-[80vh] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <img
              src="/MApage/india.png"
              alt="Minh Anh ở Ấn Độ"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaSection;
