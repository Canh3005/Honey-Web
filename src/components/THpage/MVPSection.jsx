import React from "react";

const MVPSection = () => {
  return (
    <section className="h-screen bg-[url('/THpage/NoiseBG.png')] bg-cover bg-center overflow-x-hidden overflow-y-hidden">
      <div className="mx-auto flex min-h-screen max-w-8xl flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-10">
        {/* Images */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-16 mb-10 md:mb-16">
          <img
            src="/THpage/mvp1.jpg"
            alt="MVP 1"
            className="w-full aspect-[16/10] object-cover rounded-md shadow-xl"
          />
          <img
            src="/THpage/mvp2.jpg"
            alt="MVP 2"
            className="w-full aspect-[16/10] object-cover rounded-md shadow-xl"
          />
        </div>

        {/* Text */}
        <p className="text-center font-['Itim'] text-gray-900 max-w-4xl leading-relaxed px-2 sm:px-6 text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px]">
          Năm năm sau, cô đứng ở vị trí mà mình từng mơ: Quán quân Đường lên đỉnh Olympia.
        </p>
      </div>
    </section>
  );
};

export default MVPSection;
