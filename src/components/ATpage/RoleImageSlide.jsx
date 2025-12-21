const RoleImageSlide = ({ imageName, isActive }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={`/ATpage/${imageName}`}
        alt={imageName}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RoleImageSlide;
