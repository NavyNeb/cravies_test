import { CheckCircle2, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import React from 'react';
import RatingStars from '../RatingStatsSummary/RatingStars';
import Avatar from './Avatar';

type Props = {
    id: string;
    name: string;
    initials: string;
    title: string;
    body: string;
    rating: number;
    daysAgo: number;
    verified: boolean;
    recommends: boolean;
}

const ReviewCard: React.FC<Props> = ({ body, daysAgo, id, initials, name, recommends, rating, title, verified }) => {
  return (
    <article key={id} className="rounded-2xl">
    <div className="grid grid-cols-12 gap-5">
      {/* Author card (left) */}
      <div className="col-span-12 sm:col-span-4 md:col-span-3 border-[3px] p-4 md:p-5 border-black-app rounded-[14px]">
        <div className="flex items-center gap-3">
          <Avatar initials={initials} />
          <div>
            <div className="font-bold text-[#2C3E50] leading-tight text-xs">
              {name}
            </div>
            {verified && (
              <div className="mt-0.5 inline-flex items-center gap-1 text-xs font-bold text-green-app">
                Verified Buyer <CheckCircle2 className="h-4 w-4 text-white fill-green-app" />
              </div>
            )}
          </div>
        </div>
            {recommends && (
              <div className="mt-2 flex items-center gap-1 text-base text-[#2C3E50]">
                  <ThumbsUpIcon className="h-3.5 w-3.5 text-white fill-green-app" /> I recommend
                  this product
              </div>
            )}
      </div>

      {/* Body */}
      <div className="col-span-12 sm:col-span-8 md:col-span-9 flex flex-col justify-between ">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <RatingStars value={rating} />
            <h3 className="mt-1 text-sm font-semibold">{title}</h3>
            <p className="mt-1 text-[17px] text-[#2C3E50] max-w-prose">
              {body}
            </p>
          </div>
          <div className="text-base text-[#676986] whitespace-nowrap md:pl-4">
            {daysAgo} days ago
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 text-base text-[#676986]">
          <span>Was this helpful?</span>
          <button className="rounded-lg text-lg inline-flex items-center gap-1 px-2 py-1"><ThumbsUpIcon
            className={`shrink-0 fill-[#676986] text-[#676986] `}
            width={14}
            height={14}
          /> 0</button>
          <button className="rounded-lg text-lg inline-flex items-center gap-1 px-2 py-1"><ThumbsDownIcon
            className={`shrink-0 fill-[#676986] text-[#676986] `}
            width={14}
            height={14}
          /> 0</button>
        </div>
      </div>
    </div>
  </article>
  )
}

export default ReviewCard