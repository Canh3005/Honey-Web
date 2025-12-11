import React from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import RoadWithPins from "../components/RoadWithPins.jsx";

const MA = () => {
  const scrollContainerRef = useSmoothScroll(1000);

  // Dữ liệu các pin trên đường
  const pinsData = [
    {
      color: "#F5A623",
      title: <>HỌC BỔNG TOÀN PHẦN<br />UYLS MALAYSIA 2024</>,
      bubbleContent: [
        "HỘI NGHỊ LÃNH ĐẠO THANH NIÊN QUỐC TẾ",
        "TỶ LỆ CHỌN ~5-10%",
        "CHỌN LỌC QUA CV + THƯ ĐỘNG LỰC"
      ]
    },
    {
      color: "#E53935",
      title: <>HỌC BỔNG TOÀN PHẦN<br />ISCOSME INDONESIA 2024</>,
      bubbleContent: [
        "CHƯƠNG TRÌNH GIAO LƯU HỌC THUẬT QUỐC TẾ",
        "TỶ LỆ CHỌN ~10-15%",
        "CHẤM HỒ SƠ + BÀI LUẬN"
      ]
    },
    {
      color: "#43A047",
      title: <>HỌC BỔNG TRẠI HÈ TẠI GIANG<br />TÂY, TRUNG QUỐC 2024</>,
      bubbleContent: [
        "GIAO LƯU VĂN HOÁ - HỌC THUẬT",
        "TỶ LỆ CHỌN ~15-20%",
        "ƯU TIÊN SONG NGỮ"
      ]
    },
    {
      color: "#1E88E5",
      title: <>HỌC BỔNG TRẠI ĐÔNG "NHỊP<br />CẦU HÁN NGỮ" TẠI HÀNG CHÂU,<br />TRUNG QUỐC 2024</>,
      bubbleContent: [
        "TRẠI GIAO LƯU TIẾNG TRUNG",
        "TỶ LỆ CHỌN <10%",
        "PHỎNG VẤN + TEST NGÔN NGỮ"
      ]
    }
  ];

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px) rotate(-90deg); }
          to { opacity: 1; transform: translateX(0) rotate(-90deg); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fillBar {
          from { width: 0%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fill-70 { animation: fillBar 1.5s ease-out forwards; width: 70%; }
        .animate-fill-90 { animation: fillBar 1.5s ease-out forwards; width: 90%; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>

      <div className="bg-[url('/MApage/bgChar.png')] h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="flex gap-20 items-center mt-15">
          {/* Left side - Avatar card */}
          <div className="flex flex-col items-center">
            <img
              src="/MApage/avt.png"
              alt="Minh Anh"
              className="w-200 animate-slide-left hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-4xl font-bold mt-20 text-gray-800 font-['Itim'] opacity-0 animate-fade-up delay-400">
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
              <ul className="text-2xl text-gray-700 font-['Itim'] italic">
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
      <div className="bg-white h-[100vh] flex items-center justify-center">
        <p className="w-1/2 text-5xl text-gray-800 font-['Itim'] leading-relaxed">
          Nhìn vào danh sách học bổng quốc tế dày đặc trong năm 2024, ít ai ngờ
          rằng Nguyễn Minh Anh - cô sinh viên Quản trị kinh doanh nhỏ bé, từng
          có thời gian stress đến mức không thể đặt bút viết nổi lại có thể đi
          xa đến thế.
        </p>
      </div>
      <div className="bg-[url(/MApage/bgMap.png)] h-[100vh] bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center">
        <RoadWithPins
          className="w-[1700px] h-full"
          pins={pinsData}
          characterSrc="/MApage/bot.svg"
        />
      </div>
    </div>
  );
};

export default MA;
