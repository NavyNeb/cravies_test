import React from "react";
import { Card, CardContent, CardFooter } from "../../../ui/card";

type Props = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  bullets: string[];
};

const CraviesCarouselCard: React.FC<Props> = ({
  bullets,
  id,
  image,
  imageAlt,
  subtitle,
  title,
}) => {
  return (
    <Card style={{  
        rotate: id === 1 ? "-2deg" : id === 2 ? "3deg" : "1.5deg",
    }} className="py-0 h-[400px] md:h-[450px]">
      <CardContent className="px-0">
        {/* Image */}
        <div className="h-[200px] md:h-[225px] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{
              backgroundColor:
                id === 1 ? "#D4B896" : id === 2 ? "#8B4513" : "#FF8C42",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4 h-1/2 flex flex-col border-t-[3px] border-black-app">
          <h5 className="text-3xl font-wosker text-black-app m-0">{title}</h5>
          <p className="text-base mb-2 ">{subtitle}</p>
          <ul className="space-y-[0.55px]">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-base flex items-start">
                <span className="text-black-app mr-2">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CraviesCarouselCard;
