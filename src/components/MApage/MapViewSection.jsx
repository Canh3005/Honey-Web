import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MapViewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const mapData = [
    {
      image: '/MApage/Map1.jpg',
      title: 'HỌC BỔNG TOÀN PHẦN',
      subtitle: 'UYLS MALAYSIA 2024',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      url: 'https://universalyouthmovement.org/'
    },
    {
      image: '/MApage/Map2.jpg',
      title: 'HỌC BỔNG TOÀN PHẦN',
      subtitle: 'ISCOSME INDONESIA 2024',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
      url: 'https://www.diald.nu.ac.th/download/scholarship/20240325-Muhammadiyan-University-Yogyakarta-Indonesia.pdf'
    },
    {
      image: '/MApage/Map3.jpg',
      title: 'HỌC BỔNG TRẠI HÈ',
      subtitle: 'TẠI GIANG TÂY, TRUNG QUỐC 2024',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      url: 'https://studyinchina.io/hoc-bong/hoc-bong-tinh-giang-tay'
    },
    {
      image: '/MApage/Map4.jpg',
      title: 'HỌC BỔNG TRẠI ĐÔNG',
      subtitle: 'TẠI HÀNG CHÂU, TRUNG QUỐC 2024',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      url: 'https://studyinchina.io/hoc-bong/chuong-trinh-trai-dong-quoc-te'
    }
  ];

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Itim] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Hành Trình Khám Phá
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium font-[Itim]">
            Bốn điểm đến đáng nhớ trong hành trình học bổng
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl w-full max-h-[60vh]">
          {mapData.map((map, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                activeIndex === index ? 'ring-4 ring-offset-4 ring-purple-500' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
              onClick={() => navigate(map.url)}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={map.image}
                  alt={`${map.title} ${map.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                {/* Colored Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${map.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${map.color} mb-3 transform transition-all duration-300 group-hover:scale-105`}>
                  <span className="text-white text-xs md:text-sm font-bold tracking-wide">
                    #{index + 1}
                  </span>
                </div>
                
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold font-[Itim] mb-2 transform transition-all duration-300 group-hover:translate-x-2">
                  {map.title}
                </h3>
                
                <p className="text-gray-200 text-sm md:text-base lg:text-lg font-medium font-[Itim] transform transition-all duration-300 group-hover:translate-x-2">
                  {map.subtitle}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold font-[Itim] mr-2">Xem chi tiết</span>
                  <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${map.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Indicator */}
        <div className="flex gap-3 mt-8 md:mt-12">
          {mapData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-12 bg-gradient-to-r from-purple-600 to-pink-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View map ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MapViewSection;