import { useNavigate, useLocation } from 'react-router-dom';

const CharacterNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const characters = [
    {
      id: 'AT',
      name: 'Anh Thư',
      path: '/at',
      image: '/ATpage/avtAT.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'MA',
      name: 'Minh Anh',
      path: '/ma',
      image: '/MApage/avt.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'TH',
      name: 'Thu Hằng',
      path: '/th',
      image: '/THpage/avtTH.png',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      // Nếu đang ở trang hiện tại, scroll lên đầu
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {characters.map((character, index) => {
        const isActive = location.pathname === character.path;
        
        return (
          <div
            key={character.id}
            className="relative group"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                {character.name}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Character Circle */}
            <button
              onClick={() => handleNavigate(character.path)}
              className={`
                relative w-16 h-16 rounded-full overflow-hidden
                transition-all duration-300 ease-out
                ${isActive ? 'ring-white ring-offset-4 ring-offset-transparent scale-110' : 'hover:scale-110'}
                group-hover:shadow-2xl
                cursor-pointer
              `}
              aria-label={`Navigate to ${character.name}`}
            >
              {/* Gradient Border */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${character.color}
                ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-100'}
                transition-opacity duration-300
              `}></div>
              
              {/* Image Container */}
              <div className="absolute inset-1 rounded-full overflow-hidden bg-transparent">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 -rotate-90 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              )}
            </button>

            {/* Glow Effect */}
            <div className={`
              absolute inset-0 rounded-full bg-gradient-to-br ${character.color}
              opacity-0 group-hover:opacity-50 blur-xl
              transition-opacity duration-300 -z-10
            `}></div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fixed {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CharacterNavigator;
