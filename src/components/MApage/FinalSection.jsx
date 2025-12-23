import React, { useRef, useEffect, useState } from 'react';

const FinalSection = () => {
  const sectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  // First section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Second section observer with video autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSecondVisible(true);
            // Auto-play video when section is visible
            if (videoRef.current) {
              videoRef.current.play().catch(err => console.log("Video autoplay failed:", err));
            }
          } else {
            // Pause video when section is not visible
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* First Page */}
      <div 
        ref={sectionRef}
        className="h-screen relative overflow-hidden bg-white"
      >
        {/* Main Content */}
        <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8 md:px-12 lg:px-16 py-12">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className={`w-full h-full max-h-[80vh] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <img
                src="/MApage/final.png"
                alt="Minh Anh thời kỳ chơi vơi"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex items-center justify-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Itim] mb-8 leading-tight text-black">
                Nhìn lại những năm tháng chơi vơi và những bài học từ thất bại
              </h2>

              {/* Content */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-[Itim] leading-relaxed">
                Ít ai biết rằng, trước khi có ngày hôm nay, Minh Anh từng có quãng thời gian chơi vơi và lạc lối. Hai năm đầu đại học, cô nghi ngờ rằng có phải mình đã lựa chọn sai lầm, không biết mình thật sự thích gì, không thể đặt bút viết thậm chí có lúc đã nghĩ đến việc dừng lại.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page - India Memories */}
      <div 
        ref={secondSectionRef}
        className="h-screen relative overflow-hidden bg-white"
      >
        <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12">
          {/* Quote Text */}
          <div className={`text-center mb-12 max-w-5xl transition-all duration-1000 ${
            isSecondVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-2xl md:text-3xl lg:text-4xl text-black font-[Itim] leading-relaxed">
              "Tất cả những điều mình học, dù nhỏ, đều góp phần tạo nên mình của hôm nay. Có thể ngày đó mình chưa tận dụng được hết, nhưng mỗi kỹ năng, mỗi bài học, đều là một bước đệm."
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full">
            {/* Image 1 */}
            <div className={`transition-all duration-1000 delay-300 ${
              isSecondVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src="/MApage/indian1.png"
                alt="India memory 1"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Video */}
            <div className={`transition-all duration-1000 delay-500 ${
              isSecondVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <video
                ref={videoRef}
                src="/MApage/indian2.mp4"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                loop
                playsInline
              />
            </div>

            {/* Image 3 */}
            <div className={`transition-all duration-1000 delay-700 ${
              isSecondVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src="/MApage/indian3.png"
                alt="India memory 3"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Page - Graduation & Future */}
      <div className="h-screen relative overflow-hidden bg-white">
        <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8 md:px-12 lg:px-16 py-12">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center">
            <div className="transition-all duration-1000">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[Itim] mb-8 leading-tight text-black">
                Tiếp tục mơ, tiếp tục viết, tiếp tục đi
              </h2>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-[Itim] leading-relaxed">
                  Giờ đây, Minh Anh vẫn đang tiếp tục hành trình của mình. Cô dự định học thạc sĩ và khám phá thêm nhiều quốc gia, và đặc biệt quan tâm đến việc doanh nghiệp địa phương có thể vươn ra toàn cầu như thế nào.
                </p>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-[Itim] leading-relaxed">
                  Dù đam mê và hướng đi khác nhau, cô vẫn chọn giữ niềm tin rằng:
                </p>

                {/* Quote */}
                <div className="pl-6 border-l-4 border-black">
                  <p className="text-xl md:text-2xl lg:text-3xl text-black font-[Itim] leading-relaxed italic">
                    "Chừng nào còn thở, là còn viết.<br />
                    Còn trẻ, là còn dám đi."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-full h-full max-h-[80vh] transition-all duration-1000">
              <img
                src="/MApage/graduation.png"
                alt="Minh Anh graduation"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalSection;