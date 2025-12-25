import { useState } from 'react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[url('/MApage/bgChar.png')] min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-x-hidden py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full max-w-[1400px] px-6 md:px-12">
        {/* Left side - Avatar card */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div 
            className="relative w-80 h-110 animate-slide-left"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className={`relative w-full h-full transition-transform duration-700 ${
                isHovered ? '[transform:rotateY(180deg)]' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front - Real Photo */}
              <img
                src="/THpage/realAvt.png"
                alt="Thu Hằng Real"
                className="absolute w-80 h-110 object-cover rounded-[40px] [backface-visibility:hidden] shadow-2xl"
              />
              
              {/* Back - Avatar */}
              <img
                src="/THpage/avtTH.png"
                alt="Thu Hằng Avatar"
                className="absolute w-80 h-110 object-contain rounded-[40px] [backface-visibility:hidden] [transform:rotateY(180deg)]"
              />
            </div>
          </div>
        </div>

        {/* Right side - Profile Information */}
        <div className="flex-[2] opacity-0 animate-slide-right delay-200">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#90b6ee]/30 hover:border-[#90b6ee]/50 transition-all duration-500">
            {/* Name and Status */}
            <div className="mb-8 pb-6 border-b-2 border-gray-200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-['Itim'] mb-4 leading-tight">
                Nguyễn Thị Thu Hằng
              </h1>
              <p className="text-2xl md:text-3xl text-[#90b6ee] font-['Itim'] font-semibold">
                Cử nhân Đại học Swinburne
              </p>
            </div>

            {/* Milestones */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#90b6ee] rounded-full animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Itim']">
                  Dấu mốc tiêu biểu
                </h2>
              </div>
              
              <ul className="space-y-5">
                <li className="flex gap-4 group">
                  <span className="text-[#90b6ee] text-2xl font-bold mt-1 group-hover:scale-125 transition-transform duration-300">✦</span>
                  <p className="text-xl md:text-2xl text-gray-700 font-['Itim'] leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Nhà vô địch Đường lên đỉnh Olympia 2020
                  </p>
                </li>
                <li className="flex gap-4 group">
                  <span className="text-[#90b6ee] text-2xl font-bold mt-1 group-hover:scale-125 transition-transform duration-300">✦</span>
                  <p className="text-xl md:text-2xl text-gray-700 font-['Itim'] leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Học bổng toàn phần Đại học Swinburne (Melbourne, Úc)
                  </p>
                </li>
                <li className="flex gap-4 group">
                  <span className="text-[#90b6ee] text-2xl font-bold mt-1 group-hover:scale-125 transition-transform duration-300">✦</span>
                  <p className="text-xl md:text-2xl text-gray-700 font-['Itim'] leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Tự lập học tập, làm việc và khởi sự kinh doanh nhỏ tại Melbourne
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
