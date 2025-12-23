import React, { useRef, useEffect, useState } from "react";
import RoadWithPins from "../RoadWithPins.jsx";

const pinsData = [
  {
    color: "#F5A623",
    title: <>HỌC BỔNG TOÀN PHẦN<br />UYLS MALAYSIA 2024</>,
    bubbleContent: [
      "HỘI NGHỊ LÃNH ĐẠO THANH NIÊN QUỐC TẾ",
      "TỶ LỆ CHỌN ~5-10%",
      "CHỌN LỌC QUA CV + THƯ ĐỘNG LỰC"
    ]
  },
  {
    color: "#E53935",
    title: <>HỌC BỔNG TOÀN PHẦN<br />ISCOSME INDONESIA 2024</>,
    bubbleContent: [
      "CHƯƠNG TRÌNH GIAO LƯU HỌC THUẬT QUỐC TẾ",
      "TỶ LỆ CHỌN ~10-15%",
      "CHẤM HỒ SƠ + BÀI LUẬN"
    ]
  },
  {
    color: "#43A047",
    title: <>HỌC BỔNG TRẠI HÈ TẠI GIANG<br />TÂY, TRUNG QUỐC 2024</>,
    bubbleContent: [
      "GIAO LƯU VĂN HOÁ - HỌC THUẬT",
      "TỶ LỆ CHỌN ~15-20%",
      "ƯU TIÊN SONG NGỮ"
    ]
  },
  {
    color: "#1E88E5",
    title: <>HỌC BỔNG TRẠI ĐÔNG "NHỊP<br />CẦU HÁN NGỮ" TẠI HÀNG CHÂU,<br />TRUNG QUỐC 2024</>,
    bubbleContent: [
      "TRẠI GIAO LƯU TIẾNG TRUNG",
      "TỶ LỆ CHỌN <10%",
      "PHỎNG VẤN + TEST NGÔN NGỮ"
    ]
  }
];

const RoadMapSection = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  // Preload và track audio ready state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setAudioReady(true);
    };

    const handleError = (e) => {
      console.error("Audio loading error:", e);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    // Force load audio
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Xử lý phát/dừng audio khi scroll vào/ra section
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        // Đợi audio ready nếu chưa sẵn sàng
        if (!audioReady) {
          await new Promise((resolve) => {
            const checkReady = () => {
              if (audio.readyState >= 3) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
                resolve();
              } else {
                setTimeout(checkReady, 100);
              }
            };
            checkReady();
          });
        }

        audio.currentTime = 0;
        await audio.play();
      } catch (err) {
        console.log("Audio play failed:", err);
        // Retry sau 500ms nếu fail
        setTimeout(() => {
          audio.play().catch(e => console.log("Retry failed:", e));
        }, 500);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Scroll vào section -> phát audio từ đầu
          playAudio();
        } else {
          // Scroll ra khỏi section -> dừng audio
          audio.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Section chiếm ít nhất 10% viewport
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Dừng audio khi unmount
      if (audio) {
        audio.pause();
      }
    };
  }, [audioReady]);

  return (
    <div ref={sectionRef} className="bg-[url(/MApage/bgMap.png)] h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-end justify-center">
      <audio ref={audioRef} src="/MApage/voiceMap.m4a" preload="auto" />
      <RoadWithPins
        className="w-full max-w-[1500px] h-full lg:translate-y-5"
        pins={pinsData}
        characterSrc="/MApage/bot.png"
      />
    </div>
  );
};

export default RoadMapSection;
