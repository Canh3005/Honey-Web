const RoleImageSlide = ({ imageName, isActive, text, position }) => {
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
      {text && <p className={`absolute ${position} text-center text-2xl font-bold p-4 border-4 border-black bg-white font-[Itim] text-black w-[400px] rounded-2xl`}>{text}</p>}
    </div>
  );
};

export default RoleImageSlide;
