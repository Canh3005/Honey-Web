import React from "react";
const OlympiaSection1 = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <img
        className="h-[70vh] w-full object-cover"
        src="/THpage/bgOlympia1.png"
        alt="Olympia Background"
      />
      <p className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[Itim] my-auto px-8 text-center">
        "Mình chưa từng nghĩ rằng sẽ trở nên nổi tiếng. Mình chỉ cố gắng làm tốt
        nhất có thể."
        <br />
        Sau cuộc thi, Hằng biết mình cần học cách để đối diện với áp lực từ dư luận và sau chiến thắng là cả một hành trình dài phía trước.
      </p>
    </div>
  );
};

export default OlympiaSection1;
