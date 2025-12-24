import React from "react";
const OlympiaSection1 = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <img
        className="h-[80vh] w-full object-cover"
        src="/THpage/bgOlympia.png"
        alt="Olympia Background"
      />
      <p className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[Itim] my-auto px-20 text-center">
        Nhưng chiến thắng ấy cũng mang đến một điều khác: Sự nổi tiếng và Áp lực
        <br />
        Niềm vui đăng quang vì thế bỗng trở nên… không trọn vẹn.
      </p>
    </div>
  );
};

export default OlympiaSection1;
