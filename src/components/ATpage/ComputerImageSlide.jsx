const ComputerImageSlide = ({ imageName, isActive, text }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
        }`}
    >
      <img
        src={`/ATpage/${imageName}`}
        alt={imageName}
        className="w-full h-full object-cover"
      />
      {text && <p className="absolute top-0 left-0 right-0 text-center text-black font-[Itim] text-5xl p-10">{text}</p>}
    </div>
  );
};

export default ComputerImageSlide;
