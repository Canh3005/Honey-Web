import React from "react";

const CrySection = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <img
        src="ATpage/cry.png"
        alt="Cry"
        className="w-full h-full object-cover"
      />
      <p className="absolute top-30 right-15 text-5xl font-[Itim] px-4 text-center text-white w-150">
        "Có giai đoạn mình mệt đến mức không muốn làm gì nữa. Mọi thứ đến cùng
        lúc - học, việc lớp, việc trường."
      </p>
    </div>
  );
};

export default CrySection;
