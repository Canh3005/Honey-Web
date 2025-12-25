import React from "react";

const BookSection = () => {
  return (
    <section className="relative h-screen bg-[url('/THpage/bgBook.png')] bg-cover bg-center">
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
              max-w-[25rem] md:max-w-[30rem] lg:max-w-[36rem]
              text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px]
              leading-snug
              text-justify
              pt-16 sm:pt-0
            "
          >
            Thu Hằng của những năm còn bé yêu thích những khoảng thời gian cùng gia đình quây quần xem chương trình <span className="italic">Đường lên đỉnh Olympia</span>.
            Lần cô thấy người anh cùng quê mang cầu truyền hình về Ninh Bình, điều đó thôi thúc Hằng có những khát khao trong tự tâm để Hằng khi mới học lớp 7. Kể từ khi ấy, trên bàn học của Hằng luôn có tờ giấy viết lên mục tiêu rằng mình sẽ “Vô địch Olympia”.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
