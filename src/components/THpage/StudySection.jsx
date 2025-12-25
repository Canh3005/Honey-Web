import React from "react";

const StudySection = () => {
  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section - Left */}
          <div className="flex items-center justify-center">
            <p className="text-white text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-[Itim] text-center lg:text-left leading-relaxed">
              Chiếc vòng nguyệt quế năm ấy là tấm vé đưa Hằng đến Úc - với học bổng toàn phần của Đại học Swinburne.
              <br /><br />
              Ở một nơi hoàn toàn xa lạ, Thu Hằng phải đối diện với môi trường sống và học tập mới, nơi cô phải bước ra khỏi vùng an toàn của chính mình để học cách hòa nhập.
            </p>
          </div>

          {/* Image Section - Right */}
          <div className="flex items-center justify-center">
            <img
              src="/THpage/university.png"
              alt="University"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center">
        <img
          src="/THpage/study.jpg"
          alt="Study"
          className="h-7/10 object-cover w-full"
        />
        <p className="text-[18px] sm:text-[20px] md:text-[26px] lg:text-[28px] font-[Itim] max-w-[1600px] my-auto text-center">
          Thế nhưng chính trong những khoảnh khắc ngồi trò chuyện cùng những người bạn mới nơi đất nước xa lạ, Hằng dần nhận ra rằng chiến thắng thật sự không nằm ở ánh đèn sân khấu, mà ở khả năng hòa nhập và đứng vững giữa một thế giới hoàn toàn khác.
          Cô bắt đầu học lại từ những điều nhỏ nhất: cách ghi chép, cách hỏi bài, cách giao tiếp và thích nghi – từng ngày một, lặng lẽ nhưng bền bỉ, như leo một ngọn núi không cần tiếng vỗ tay.
        </p>
      </div>
    </div>
  );
};

export default StudySection;
