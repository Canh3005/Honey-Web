import React from "react";
const OlympiaSection1 = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col items-center bg-gray-100">
        <img
          className="h-[80vh] w-full object-cover"
          src="/THpage/bgOlympia1.png"
          alt="Olympia Background"
        />
        <p className="text-5xl font-[Itim] my-auto">
          Mình chưa từng nghĩ rằng sẽ trở nên nổi tiếng. Mình chỉ cố gắng làm
          tốt nhất có thể.”
        </p>
      </div>
      <img src="/THpage/flag.png" alt="Flag" className="h-screen object-cover" />
      <img src="/THpage/study1.jpeg" alt="Study" className="h-screen object-cover" />
    </div>
  );
};

export default OlympiaSection1;
