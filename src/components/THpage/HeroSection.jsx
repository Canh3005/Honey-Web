import { useState } from 'react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[url('/MApage/bgChar.png')] h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-x-hidden">
      <div className="flex gap-30 items-center mt-15 w-full max-w-screen-xl px-8">
        {/* Left side - Avatar card */}
        <div className="flex flex-col items-center">
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
                className="absolute w-80 h-110 object-cover rounded-[40px] [backface-visibility:hidden]"
              />
              
              {/* Back - Avatar */}
              <img
                src="/THpage/avtTH.png"
                alt="Thu Hằng Avatar"
                className="absolute w-80 h-110 object-contain rounded-[40px] [backface-visibility:hidden] [transform:rotateY(180deg)]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mt-10 text-gray-800 font-['Itim'] opacity-0 animate-fade-up delay-400 whitespace-nowrap">
            NGUYỄN THỊ THU HẰNG
          </h2>
          <p className="text-3xl text-gray-700 font-['Itim'] opacity-0 animate-fade-up delay-600">
            (23 TUỔI)
          </p>
        </div>

        {/* Right side - Stats */}
        <div className="flex flex-col gap-6 -mt-20">
          {/* Sát thương */}
          <div className="opacity-0 animate-slide-right delay-200">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              SÁT THƯƠNG:
            </p>
            <div className="w-[min(800px,90vw)] h-15 bg-white rounded-full overflow-hidden border-2 border-blue-300">
              <div className="h-full bg-[#90b6ee] rounded-full animate-fill-90 delay-800"></div>
            </div>
          </div>

          {/* HP */}
          <div className="opacity-0 animate-slide-right delay-400">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              HP:
            </p>
            <div className="w-[min(800px,90vw)] h-15 bg-white rounded-full overflow-hidden border-2 border-blue-300">
              <div className="h-full bg-[#90b6ee] rounded-full animate-fill-70 delay-1000"></div>
            </div>
          </div>

          {/* Vũ khí */}
          <div className="opacity-0 animate-slide-right delay-600">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              VŨ KHÍ:
            </p>
            <img
              src="/THpage/weapon.png"
              alt="Weapon"
              className="w-50 animate-float hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>

          {/* Kỹ năng */}
          <div className="opacity-0 animate-slide-right delay-800">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-2">
              KỸ NĂNG:
            </p>
            <ul className="text-3xl text-gray-700 font-['Itim'] italic">
              <li className="hover:text-[#90b6ee] hover:translate-x-2 transition-all duration-300 cursor-default">
                – Tư duy nhanh
              </li>
              <li className="hover:text-[#90b6ee] hover:translate-x-2 transition-all duration-300 cursor-default">
                – Thích nghi môi trường mới
              </li>
              <li className="hover:text-[#90b6ee] hover:translate-x-2 transition-all duration-300 cursor-default">
                – Tự lập
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
