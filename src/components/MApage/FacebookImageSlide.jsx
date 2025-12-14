const FacebookImageSlide = ({ num, isActive, textContent }) => {
  return (
    <div
      className={`absolute inset-0 flex flex-col w-full h-full transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image */}
      <img
        src={`/MApage/${num}.png`}
        alt={`Facebook Group - ${num}`}
        className="w-full h-[80vh] object-cover"
      />

      {/* Text Overlay - sử dụng children để custom text cho từng slide */}
        <div className="h-[20vh] w-full bg-black flex items-center justify-center p-8 text-white text-4xl font-['Itim'] font-bold drop-shadow-lg text-center">
          {textContent}
        </div>
    </div>
  );
};

export default FacebookImageSlide;
