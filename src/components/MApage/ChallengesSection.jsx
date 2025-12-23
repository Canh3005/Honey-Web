import React, { useRef, useEffect, useState } from 'react';

const challengesData = [
  {
    image: "/MApage/pic1.svg",
    text: "Rào cản ngôn ngữ khiến mọi giao tiếp đều phụ thuộc vào cử chỉ và công cụ dịch thuật. Đây là thách thức lớn trong sinh hoạt hàng ngày."
  },
  {
    image: "/MApage/pic2.svg",
    text: "Thời tiết khắc nghiệt và đồ ăn cay buộc cơ thể thích nghi liên tục. Môi trường sống mới tạo áp lực thể chất rõ rệt."
  },
  {
    image: "/MApage/pic3.svg",
    text: "Thiếu định vị và kết nối, việc di chuyển trở nên khó khăn. Mọi quyết định đều dựa vào trực giác."
  },
  {
    image: "/MApage/pic4.svg",
    text: "Cảm giác cô đơn và khác biệt văn hóa trở thành thử thách tâm lý. Hành trình rèn luyện sự độc lập và bản lĩnh cá nhân."
  }
];

const ChallengesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-x-hidden overflow-y-hidden"
      style={{ backgroundImage: "url('/MApage/bgPic.png')" }}
    >
      <div className="flex gap-20 px-20 mt-20">
        {challengesData.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center max-w-[350px] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* Image container */}
            <div className="w-[300px] h-[300px] cursor-pointer hover:scale-110 transition-transform duration-500">
              <img
                src={item.image}
                alt={`Challenge ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <p className="mt-8 text-center text-gray-800 font-['Itim'] text-3xl leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSection;
