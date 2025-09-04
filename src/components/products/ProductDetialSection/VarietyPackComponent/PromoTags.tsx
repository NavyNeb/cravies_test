import React from 'react';
import { Check } from 'lucide-react';

const PromoTags = () => {
  const features = [
    "Cancel anytime",
    "Free delivery",
    "20% off all recurring orders"
  ];

  return (
      <div className="max-w-full mx-auto my-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:flex-wrap text-wrap text-sm space-y-2.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="bg-black rounded-full p-1 flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-black-app text-[14px] font-medium whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PromoTags;