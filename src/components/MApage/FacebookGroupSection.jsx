import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import FacebookImageSlide from "./FacebookImageSlide";

// Preload tất cả ảnh
const imageUrls = [1, 2, 3, 4].map((num) => `/MApage/${num}.png`);

const FacebookGroupSection = forwardRef(({ scrollContainerRef }, ref) => {
  const [currentImage, setCurrentImage] = useState(1);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const currentImageRef = useRef(currentImage);

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
        // Không trong view, unlock scroll
        if (setScrollLock) setScrollLock(false);
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
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      // Clear pending timeout
      if (unlockTimeoutId) {
        clearTimeout(unlockTimeoutId);
      }
      // Reset scroll lock khi unmount
      if (setScrollLock) setScrollLock(false);
    };
  }, [scrollContainerRef]);

  const textContent = ["Niềm đam mê viết lách đến với Minh Anh một cách rất tự nhiên, từ những ngày còn rất sớm, khi con chữ không chỉ là công cụ diễn đạt, mà là nơi cô gửi gắm cảm xúc, suy nghĩ và cả những điều khó gọi tên trong cuộc sống.", "Xuất phát từ mong muốn có một không gian riêng để được viết, được chia sẻ mà không bị phán xét, Minh Anh đã lập nên một nhóm nhỏ trên Facebook và đặt tên là “Còn thở là còn viết”", "Một cái tên mộc mạc, giản dị, nhưng chứa đựng tinh thần bền bỉ của những người yêu chữ: chỉ cần còn sống, còn cảm xúc, thì vẫn còn điều để viết.", "Từ một góc nhỏ dành cho vài người bạn có chung niềm yêu thích, đến nay “Còn thở là còn viết” đã phát triển thành một cộng đồng hơn 77.000 thành viên. Nơi đây trở thành điểm hẹn của những người yêu con chữ, thích chia sẻ những mảnh ghép đời sống" ]

  return (
    <div ref={sectionRef} className="h-[100vh] w-full relative overflow-hidden">
      <FacebookImageSlide num={1} isActive={currentImage === 1} textContent={textContent[0]} />

      <FacebookImageSlide num={2} isActive={currentImage === 2} textContent={textContent[1]} />

      <FacebookImageSlide num={3} isActive={currentImage === 3} textContent={textContent[2]} />

      <FacebookImageSlide num={4} isActive={currentImage === 4} textContent={textContent[3]} />
    </div>
  );
});

FacebookGroupSection.displayName = "FacebookGroupSection";

export default FacebookGroupSection;
