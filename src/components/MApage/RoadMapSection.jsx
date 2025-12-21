import RoadWithPins from "../RoadWithPins.jsx";

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

const RoadMapSection = () => {
  return (
    <div className="bg-[url(/MApage/bgMap.png)] h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center">
      <RoadWithPins
        className="w-full max-w-[1500px] h-full lg:translate-x-10"
        pins={pinsData}
        characterSrc="/MApage/bot.png"
      />
    </div>
  );
};

export default RoadMapSection;
