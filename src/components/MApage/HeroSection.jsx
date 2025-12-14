const HeroSection = () => {
  return (
    <div className="bg-[url('/MApage/bgChar.png')] h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="flex gap-20 items-center mt-15">
        {/* Left side - Avatar card */}
        <div className="flex flex-col items-center">
          <img
            src="/MApage/avt.png"
            alt="Minh Anh"
            className="w-140 animate-slide-left hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-4xl font-bold mt-25 text-gray-800 font-['Itim'] opacity-0 animate-fade-up delay-400">
            NGUYỄN MINH ANH
          </h2>
          <p className="text-3xl text-gray-700 font-['Itim'] opacity-0 animate-fade-up delay-600">
            (21 TUỔI)
          </p>
        </div>

        {/* Right side - Stats */}
        <div className="flex flex-col gap-6 -mt-20">
          {/* Sát thương */}
          <div className="opacity-0 animate-slide-right delay-200">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              SÁT THƯƠNG:
            </p>
            <div className="w-200 h-15 bg-white rounded-full overflow-hidden border-2 border-blue-300">
              <div className="h-full bg-[#90b6ee] rounded-full animate-fill-70 delay-800"></div>
            </div>
          </div>

          {/* HP */}
          <div className="opacity-0 animate-slide-right delay-400">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              HP:
            </p>
            <div className="w-200 h-15 bg-white rounded-full overflow-hidden border-2 border-blue-300">
              <div className="h-full bg-[#90b6ee] rounded-full animate-fill-90 delay-1000"></div>
            </div>
          </div>

          {/* Vũ khí */}
          <div className="opacity-0 animate-slide-right delay-600">
            <p className="text-3xl font-bold text-gray-800 font-['Itim'] mb-8">
              VŨ KHÍ:
            </p>
            <img
              src="/MApage/weapon.png"
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
                – Săn học bổng
              </li>
              <li className="hover:text-[#90b6ee] hover:translate-x-2 transition-all duration-300 cursor-default">
                – Phục hồi tinh thần sau thất bại
              </li>
              <li className="hover:text-[#90b6ee] hover:translate-x-2 transition-all duration-300 cursor-default">
                – Thích nghi môi trường mới
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
