import React from "react";
import { Card, CardContent } from "../../../ui/card";

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const CraviesCarouselCard: React.FC<Props> = ({
  id,
  image,
  description,
  name,
}) => {
  return (
    <Card className="py-0 h-[400px] md:h-[450px]">
      <CardContent className="px-0">
        {/* Image */}
        <div className="h-[200px] md:h-[225px] overflow-hidden">
          <img
            src={image}
            alt={description}
            className="w-full h-full object-cover"
            style={{
              backgroundColor:
                id === 1 ? "#D4B896" : id === 2 ? "#8B4513" : "#FF8C42",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4 h-1/2 flex flex-col border-t-[3px] flex-1 border-black-app">
          <h5 className="text-3xl font-wosker text-black-app m-0">{name}</h5>
          <p className="text-base mb-2 text-ellipsis ">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CraviesCarouselCard;
