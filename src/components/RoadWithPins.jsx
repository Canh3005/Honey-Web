import { useState, useRef, useEffect } from "react";
import Road from "./Road";
import LocationPinWithBubble from "./LocationPinWithBubble";

const RoadWithPins = ({
  className = "",
  pins = [],
  characterSrc = "/MApage/bot.png",
  onComplete = () => {},
}) => {
  const [currentStopIndex, setCurrentStopIndex] = useState(-1);
  const [isMoving, setIsMoving] = useState(false);
  const [characterPos, setCharacterPos] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const roadRef = useRef(null);

  // Các điểm dừng của nhân vật theo % của path (0-100)
  const stopPercents = [0, 11, 36, 61, 86];

  // Vị trí các pin (tự định nghĩa, không phụ thuộc vào path)
  const pinPositions = [
    { left: 11, top: 45, titlePosition: "bottom" },
    { left: 36, top: 9, titlePosition: "top" },
    { left: 61, top: 28, titlePosition: "bottom" },
    { left: 86, top: -9, titlePosition: "top" },
  ];

  // Tính vị trí ban đầu của nhân vật khi Road mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      if (roadRef.current) {
        const initialPos = roadRef.current.getPercentPositionAtPercent(stopPercents[0]);
        setCharacterPos(initialPos);
        setIsReady(true);
      }
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // Cập nhật vị trí nhân vật khi di chuyển
  useEffect(() => {
    if (roadRef.current && currentStopIndex >= -1) {
      const targetPercent = stopPercents[currentStopIndex + 1] || stopPercents[0];
      const pos = roadRef.current.getPercentPositionAtPercent(targetPercent);
      setCharacterPos(pos);
    }
  }, [currentStopIndex]);

  // Pin đang active
  const activePinIndex = !isMoving && currentStopIndex >= 0 ? currentStopIndex : null;

  // Xử lý click vào pin để di chuyển đến đó
  const handlePinClick = (pinIndex) => {
    if (isMoving) return;
    if (pinIndex === currentStopIndex) return; // Đã ở vị trí này rồi

    setIsMoving(true);
    setTimeout(() => {
      setCurrentStopIndex(pinIndex);
      setIsMoving(false);
      if (pinIndex >= pins.length - 1) {
        onComplete();
      }
    }, 1000);
  };

  const isComplete = currentStopIndex >= pins.length - 1;

  return (
    <div className={`relative ${className} h-[100vh]`}>
      {/* Hướng dẫn */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg z-20">
        <p className="font-['Itim'] text-gray-800 text-2xl text-red-600 font-bold">
          {isComplete ? "ĐÃ HOÀN THÀNH HÀNH TRÌNH!" : "CLICK VÀO PIN ĐỂ DI CHUYỂN"}
        </p>
      </div>

      {/* Character - chỉ hiển thị khi đã tính xong vị trí */}
      {isReady && characterPos && (
        <img
          src={characterSrc}
          alt="Character"
          className="h-24 z-20 absolute transition-all duration-1000 ease-in-out"
          style={{
            left: `${characterPos.x}%`,
            top: `${characterPos.y}%`,
            transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
          }}
        />
      )}

      {/* Pins */}
      {pins.map((pin, index) => {
        const position = pinPositions[index] || {};
        return (
          <LocationPinWithBubble
            key={index}
            className="absolute cursor-pointer"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            color={pin.color}
            size={pin.size || 60}
            isActive={activePinIndex === index}
            bubbleContent={pin.bubbleContent}
            title={pin.title}
            titlePosition={position.titlePosition}
            onClick={() => handlePinClick(index)}
          />
        );
      })}

      {/* Road */}
      <Road ref={roadRef} className="w-full" />
    </div>
  );
};

export default RoadWithPins;
