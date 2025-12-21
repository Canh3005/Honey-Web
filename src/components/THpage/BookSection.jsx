import React from "react";

const BookSection = () => {
  return (
    <section className="relative min-h-screen bg-[url('/THpage/bgBook.png')] bg-cover bg-center">
      {/* overlay optional cho dễ đọc chữ (bỏ nếu không cần) */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto min-h-screen max-w-[1200px] px-4 sm:px-6 lg:px-10">
        {/* Khối text */}
        <div className="flex min-h-screen items-start sm:items-center">
          <p
            className="
            -translate-x-45
              font-[Itim] text-white
              w-full
              max-w-[25rem] md:max-w-[30rem] lg:max-w-[30rem]
              text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[44px]
              leading-snug
              text-justify
              pt-16 sm:pt-0
            "
          >
            Thu Hằng - cô bé năm nào ngồi trong lớp 7, ôm quyển vở toán lem nhem
            mực, ngước lên màn hình xem Olympia mà tim đập thình thịch. Mỗi lần thấy
            các anh chị bấm chuông thật tự tin, Hằng lại lẩm bẩm một mình: “Sau này…
            mình cũng sẽ đứng ở đó.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
