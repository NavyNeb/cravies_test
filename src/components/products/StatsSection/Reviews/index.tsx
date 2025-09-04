import { Button } from "@/components/ui/button";
import { REVIEWS } from "@/data/mockData";
import { ChevronDown, ListFilter } from "lucide-react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="w-full flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <Button className="inline-flex h-[56px] items-center gap-3 ">
              <ListFilter className="size-6" /> <span>Filter</span>
            </Button>
          </div>

          <div className="flex flex-col ">
            <Button className="inline-flex h-[56px] items-center gap-1 bg-orange-app ">
              Write a review
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-black-app text-base text-left mt-6">6 reviews</div>
        <div className="text-black-app inline-flex items-center justify-end gap-2 text-base text-right mt-6">
          <span className="font-medium">Sort</span>
          <span className="inline-flex items-center">
            Photos & Videos <ChevronDown className="h-4 w-4" />{" "}
          </span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-4 space-y-8">
        {REVIEWS.map((r) => (
          <ReviewCard key={r.id} {...r} />
        ))}
      </div>

      {/* See more */}
      <div className="mt-10 flex justify-center">
        <Button >
          See more reviews
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
