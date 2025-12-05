import React from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Page1 = () => {
  const scrollContainerRef = useSmoothScroll(1000); // 1000ms = 1 giây

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll">
      <div className="bg-gradient-to-b from-neutral-200 to-neutral-300 h-[50vh] flex items-start justify-center">
        <img src="page1/title.svg" alt="title" className="h-40 mt-20" />
      </div>
      <div className="bg-gradient-to-b from-neutral-300 to-black h-[150vh] items-center justify-center flex">
        <div className="font-['Itim'] text-white pr-100 pl-100 text-5xl mt-80">
          <p>
            Giữa những ngày trẻ đầy tiếng ồn, bon chen và deadline dí sát gáy,
            luôn có những người chọn đi chậm hơn một nhịp - không ồn ào, chỉ âm
            thầm bước tiếp dù có lúc mệt đến mức muốn dừng lại.
          </p>
          <br />
          <p>
            Mạnh mẽ không phải là không ngã, mà là dám đứng lên sau mỗi lần muốn
            bỏ cuộc.
          </p>
        </div>
      </div>
      <div className="bg-black h-screen flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl font-['Itim'] font-bold mb-12">
          HÃY CHỌN NHÂN VẬT ĐỂ BẮT ĐẦU HÀNH TRÌNH
        </h2>

        <img src="/page1/arrow-down.svg" alt="arrow" className="w-16 mb-16 animate-bounce" />

        <div className="flex gap-12 items-end">
          <div className="flex flex-col items-center">
            <div className="bg-neutral-300 w-64 h-96 rounded-3xl flex items-center justify-center mb-6">
              <p className="text-green-500 text-xl font-bold">ẢNH MINH HỌA</p>
            </div>
            <h3 className="text-white text-3xl font-['Itim'] font-bold">
              MINH ANH
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-neutral-300 w-64 h-96 rounded-3xl flex items-center justify-center mb-6">
              <p className="text-green-500 text-xl font-bold">ẢNH MINH HỌA</p>
            </div>
            <h3 className="text-white text-3xl font-['Itim'] font-bold">
              THU HẰNG
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-neutral-300 w-64 h-96 rounded-3xl flex items-center justify-center mb-6">
              <p className="text-green-500 text-xl font-bold">ẢNH MINH HỌA</p>
            </div>
            <h3 className="text-white text-3xl font-['Itim'] font-bold">
              ANH THƯ
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
