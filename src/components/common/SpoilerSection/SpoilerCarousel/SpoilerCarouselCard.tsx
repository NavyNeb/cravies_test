import { Play } from 'lucide-react'
import React from 'react'

type Props = {
    id: number;
    username: string;
    image: string;
    alt: string;
    bgColor: string;
}

const SpoilerCarouselCard: React.FC<Props> = ({ username, image, alt, bgColor }) => {
  return (
    <div className="relative group cursor-pointer mx-2">
    {/* Instagram-style card */}
    <div className="relative h-[450px] border-[3px] border-black-app bg-white rounded-3xl overflow-hidden shadow-lg">
      {/* Image container with gradient overlay */}
      <div className="relative h-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-20 z-10`}></div>
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black-app bg-opacity-50 rounded-full p-3">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      </div>
      
    </div>
      {/* Username */}
      <div className="mt-3">
        <p className="text-base font-bold text-white text-left">
          {username}
        </p>
      </div>
  </div>
  )
}

export default SpoilerCarouselCard