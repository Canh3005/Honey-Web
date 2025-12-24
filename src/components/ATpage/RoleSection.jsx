import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import RoleImageSlide from './RoleImageSlide';

// Preload tất cả ảnh
const imageUrls = ['role1.png', 'role2.png', 'role3.png', 'role4.png'].map(
  (name) => `/ATpage/${name}`
);

const RoleSection = forwardRef(({ scrollContainerRef }, ref) => {
  const [currentImage, setCurrentImage] = useState(1);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const currentImageRef = useRef(currentImage);
  const text = ["Phạm Anh Thư cùng lúc đảm nhận nhiều vai trò trong môi trường đại học. Ở mỗi vị trí, cô thể hiện một cá tính khác nhau, tạo nên một hình ảnh đa chiều giữa nhịp sống học đường.", "Ở giảng đường, Anh Thư là một sinh viên lặng lẽ, tập trung vào học tập và kỷ luật bản thân, quen với áp lực và những đêm dài hoàn thành công việc. Cô ít nói về khó khăn, chọn cách tự chịu và tự vượt qua, coi nỗ lực là điều hiển nhiên của một người đi học.", "Còn khi chỉ có mình và màn hình sáng khuya, Anh Thư trở lại là một người trẻ bình thường: biết mệt, biết chậm lại, và biết thừa nhận giới hạn của bản thân. Chính những khoảnh khắc riêng tư ấy giúp cô giữ được sự cân bằng, để ngày mai lại tiếp tục đảm nhận tốt những vai trò của mình.", "Khi khoác màu áo Đoàn, Anh Thư trở thành người đứng ở tuyến đầu trách nhiệm, gánh vác việc chung, luôn cố gắng vững vàng để người khác yên tâm dựa vào. Trong vai trò ấy, Anh Thư học cách đặt tập thể lên trước cảm xúc cá nhân, dù đôi lúc chính mình cũng cần được lắng nghe."];
  const position = ["top-10","top-10 left-10", "top-10 right-10", "top-5"];

  // Preload ảnh khi component mount
  useEffect(() => {
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Sync ref với state
  useEffect(() => {
    currentImageRef.current = currentImage;
  }, [currentImage]);

  // Expose sectionRef to parent
  useImperativeHandle(ref, () => sectionRef.current);

  // Xử lý scroll để chuyển ảnh
  useEffect(() => {
    const setScrollLock = scrollContainerRef?.setScrollLock;
    let unlockTimeoutId = null;

    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // Section đang trong view (chiếm phần lớn màn hình)
      const isInView =
        rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isInView) {
        // // Không trong view, unlock scroll
        // if (setScrollLock) setScrollLock(false);
        return;
      }

      const current = currentImageRef.current;

      // Đang trong view và chưa ở ảnh biên -> lock scroll
      if ((e.deltaY > 0 && current < 4) || (e.deltaY < 0 && current > 1)) {
        // Clear any pending unlock
        if (unlockTimeoutId) {
          clearTimeout(unlockTimeoutId);
          unlockTimeoutId = null;
        }
        if (setScrollLock) setScrollLock(true);

        if (!isScrollingRef.current) {
          isScrollingRef.current = true;

          if (e.deltaY > 0 && current < 4) {
            const newImage = current + 1;
            currentImageRef.current = newImage;
            setCurrentImage(newImage);
          } else if (e.deltaY < 0 && current > 1) {
            const newImage = current - 1;
            currentImageRef.current = newImage;
            setCurrentImage(newImage);
          }

          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        }
      } else {
        // Đang ở ảnh biên và scroll ra ngoài -> delay unlock để transition hoàn tất
        if (!unlockTimeoutId) {
          unlockTimeoutId = setTimeout(() => {
            if (setScrollLock) setScrollLock(false);
            unlockTimeoutId = null;
          }, 300);
        }
      }
    };

    const container = scrollContainerRef?.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      // Clear pending timeout
      if (unlockTimeoutId) {
        clearTimeout(unlockTimeoutId);
      }
      // Reset scroll lock khi unmount
      if (setScrollLock) setScrollLock(false);
    };
  }, [scrollContainerRef]);

  return (
    <div ref={sectionRef} className="h-[100vh] w-full relative overflow-hidden">
      <RoleImageSlide imageName="role1.png" isActive={currentImage === 1} text={text[0]} position={position[0]} style={{width: "50%"}} />
      <RoleImageSlide imageName="role2.png" isActive={currentImage === 2} text={text[1]} position={position[1]} />
      <RoleImageSlide imageName="role3.png" isActive={currentImage === 3} text={text[2]} position={position[2]} />
      <RoleImageSlide imageName="role4.png" isActive={currentImage === 4} text={text[3]} position={position[3]} />
    </div>
  );
});

RoleSection.displayName = 'RoleSection';

export default RoleSection;
