import { useRef, useEffect } from "react";

const VideoSection = ({ scrollContainerRef }) => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 0.3; // 30% volume
      video.muted = true; // Mặc định tắt tiếng
      video.pause(); // Mặc định pause
    }
  }, []);

  // Reset video khi scroll ra khỏi section
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isInView) {
        // Scroll ra khỏi section -> reset video
        video.currentTime = 0;
        video.muted = true;
        video.pause();
      } else {
        // Scroll vào section -> play video
        video.muted = false;
        video.play();
      }
    };

    const container = scrollContainerRef?.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  return (
    <div ref={sectionRef} className="h-[100vh] w-full relative overflow-hidden">
      <video
        ref={videoRef}
        src="/MApage/vidMA.mp4"
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default VideoSection
