import React from "react";
import LocationPin from "./LocationPin";
import SpeechBubble from "./SpeechBubble";

const LocationPinWithBubble = ({
  color = "#F5A623",
  size = 60,
  isActive = false,
  bubbleContent = [],
  title = "",
  titlePosition = "bottom", // "top" hoặc "bottom"
  bubblePosition = "right", // "right" hoặc "left"
  className = "",
  style = {},
  onClick = () => {},
}) => {
  return (
    <div
      className={`cursor-pointer relative ${className}`}
      style={{
        ...style,
        width: size,
        height: size * 1.33,
      }}
      onClick={onClick}
    >
      {/* Title phía trên */}
      {titlePosition === "top" && (
        <p
          className={`absolute text-center font-['Itim'] font-bold text-gray-800 text-2xl whitespace-nowrap left-1/2 -translate-x-1/2`}
        >
          {title || <span>&nbsp;</span>}
        </p>
      )}

      {/* SpeechBubble - luôn render, chỉ ẩn/hiện bằng visibility */}
      {bubbleContent.length > 0 && (
        <SpeechBubble
          tailPosition={bubblePosition === "left" ? "bottom-right" : "bottom-left"}
          className={`absolute z-30 whitespace-nowrap pointer-events-none bottom-7 ${bubblePosition === "left" ? 'right-1/2 -translate-x-45' : 'left-1/2 -translate-x-6'} ${isActive ? 'visible' : 'invisible'}`}
        >
          <ul className="font-['Itim'] text-gray-800 text-md list-disc pl-4 space-y-1">
            {bubbleContent.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </SpeechBubble>
      )}

      <LocationPin
        color={color}
        size={size}
        className="hover:scale-110 transition-transform duration-300"
      />

      {/* Title phía dưới */}
      {titlePosition === "bottom" && (
        <p
          className={`absolute text-center font-['Itim'] font-bold text-gray-800 text-2xl whitespace-nowrap left-1/2 -translate-x-1/2 top-60`}
        >
          {title || <span>&nbsp;</span>}
        </p>
      )}
    </div>
  );
};

export default LocationPinWithBubble;
