import React from "react";

const StudySection = () => {
  return (
    <div>
      <div className="bg-black h-screen flex flex-col items-center">
        <div className="w-full h-3/5 flex items-center justify-center translate-y-20">
          <img
            src="/THpage/study1.jpeg"
            alt="Study"
            className="w-4/5 h-full object-cover"
          />
        </div>
        <p className="text-white text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[Itim] mt-25 max-w-[1400px] text-center px-10">
          Những ngày đầu tại Úc, Thu Hằng ngay lập tức phải đối mặt cú sốc hội
          nhập: không theo kịp tiếng Anh, trượt bài kiểm tra đầu tiên. Từ học
          sinh ưu tú từng tỏa sáng ở Olympia, cô trở thành một sinh viên lạc
          lõng nơi đất khách.
        </p>
      </div>
      <div className="h-screen flex flex-col items-center">
        <img
          src="/THpage/study.jpg"
          alt="Study"
          className="h-7/10 object-cover w-full"
        />
        <p className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-[Itim] max-w-[1600px] my-auto px-3 text-center">
          Thế nhưng chính lúc đó, cô hiểu rằng chiến thắng thật sự không nằm ở
          sân khấu, mà nằm ở khả năng đứng vững giữa một thế giới hoàn toàn mới.
          Hằng học lại từ đầu: cách ghi chép, hỏi bài, giao tiếp, thích nghi.
          Mỗi ngày một chút - như leo một ngọn núi không có khán giả cổ vũ.
        </p>
      </div>
    </div>
  );
};

export default StudySection;
