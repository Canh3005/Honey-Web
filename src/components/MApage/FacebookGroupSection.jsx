import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";

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
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

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

  return (
    <div
      ref={sectionRef}
      className="h-[100vh] w-full relative overflow-hidden"
    >
      {[1, 2, 3, 4].map((num) => (
        <img
          key={num}
          src={`/MApage/${num}.png`}
          alt={`Facebook Group - ${num}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            currentImage === num ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

    </div>
  );
});

FacebookGroupSection.displayName = "FacebookGroupSection";

export default FacebookGroupSection;
