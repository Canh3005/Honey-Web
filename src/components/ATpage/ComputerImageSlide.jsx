import { useEffect, useRef } from 'react';

const ComputerImageSlide = ({ imageName, isActive, text, shouldStopAudio = false }) => {
  const audioRef = useRef(null);

  // Phát sound effect khi computer.gif được hiển thị
  useEffect(() => {
    const audio = audioRef.current;
    
    if (isActive && imageName === 'computer.gif' && audio && !shouldStopAudio) {
      audio.currentTime = 0;
      audio.play().catch(err => console.log("Audio play failed:", err));
    }
  }, [isActive, imageName, shouldStopAudio]);

  // Dừng audio khi shouldStopAudio = true (section ra khỏi viewport)
  useEffect(() => {
    const audio = audioRef.current;
    
    if (shouldStopAudio && audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [shouldStopAudio]);

  // Dừng audio khi không active hoặc component unmount
  useEffect(() => {
    const audio = audioRef.current;
    
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  // Dừng audio ngay lập tức khi slide không còn active
  useEffect(() => {
    const audio = audioRef.current;
    
    if (!isActive && audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Sound effect cho computer.gif */}
      {imageName === 'computer.gif' && (
        <audio ref={audioRef} src="/ATpage/computerNoti.mp3" preload="auto" />
      )}
      
      <img
        src={`/ATpage/${imageName}`}
        alt={imageName}
        className="w-full h-full object-cover"
      />
      {text && <p className="absolute top-0 left-0 right-0 text-center text-black font-[Itim] text-5xl p-5">{text}</p>}
    </div>
  );
};

export default ComputerImageSlide;


