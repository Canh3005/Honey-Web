import React from "react";

const SpeechBubble = ({ children, className = "", tailPosition = "bottom-left" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main bubble */}
      <div className="bg-white rounded-lg px-5 py-4 border-3 border-black relative">
        {children}
      </div>

      {/* Tail - SVG cho đuôi nhọn có viền */}
      {tailPosition === "bottom-left" && (
        <svg
          className="absolute -bottom-[24px] left-4"
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
        >
          <path
            d="M15 0 L20 28 L40 0"
            fill="white"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Che phần viền trên */}
          <rect x="14" y="0" width="26" height="4" fill="white" />
        </svg>
      )}

      {tailPosition === "bottom-right" && (
        <svg
          className="absolute -bottom-[24px] right-4"
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
        >
          <path
            d="M40 0 L20 28 L15 0"
            fill="white"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Che phần viền trên */}
          <rect x="14" y="0" width="26" height="4" fill="white" />
        </svg>
      )}

      {tailPosition === "top-left" && (
        <svg
          className="absolute -top-[24px] left-4"
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
        >
          <path
            d="M15 30 L20 2 L40 30"
            fill="white"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect x="14" y="26" width="26" height="4" fill="white" />
        </svg>
      )}

      {tailPosition === "top-right" && (
        <svg
          className="absolute -top-[24px] right-4"
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
        >
          <path
            d="M40 30 L20 2 L15 30"
            fill="white"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect x="14" y="26" width="26" height="4" fill="white" />
        </svg>
      )}
    </div>
  );
};

export default SpeechBubble;
