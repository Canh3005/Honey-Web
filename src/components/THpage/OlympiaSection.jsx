import React from "react";
const OlympiaSection1 = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <img
        className="h-[80vh] w-full object-cover"
        src="/THpage/bgOlympia.png"
        alt="Olympia Background"
      />
      <p className="text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-[Itim] my-auto px-20 text-center">
        Nhưng chiến thắng ấy cũng mang đến một điều khác: Sự nổi tiếng và Áp lực
        <br />
        Niềm vui đăng quang vì thế bỗng trở nên… không trọn vẹn.
      </p>
    </div>
  );
};

export default OlympiaSection1;
