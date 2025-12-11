import React from "react";

const LocationPin = ({ color = "#F5A623", size = 60, className = "" }) => {
  const height = (size * 80) / 60;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 60 80"
      fill="none"
      className={className}
    >
      <path
        d="M30 0C13.4 0 0 13.4 0 30C0 52.5 30 80 30 80C30 80 60 52.5 60 30C60 13.4 46.6 0 30 0Z"
        fill={color}
      />
      <circle cx="30" cy="28" r="12" fill="white" />
    </svg>
  );
};

export default LocationPin;
