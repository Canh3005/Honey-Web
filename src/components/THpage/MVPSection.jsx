import React from 'react'

const MVPSection = () => {
  return (
    <div className="h-screen bg-[url('/THpage/NoiseBG.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-x-hidden px-10">
      <div className="flex gap-20 mb-20">
        <img 
          src="/THpage/mvp1.jpg" 
          alt="MVP 1" 
          className="w-200 h-130 object-cover rounded-md shadow-xl"
        />
        <img 
          src="/THpage/mvp2.jpg" 
          alt="MVP 2" 
          className="w-200 h-130 object-cover rounded-md shadow-xl"
        />
      </div>
      
      <p className="text-center text-5xl font-['Itim'] text-gray-900 max-w-6xl leading-relaxed px-16">
        Năm năm sau, cô đứng ở vị trí mà mình từng mơ: Quán quân Đường lên đỉnh Olympia.
      </p>
    </div>
  )
}

export default MVPSection
