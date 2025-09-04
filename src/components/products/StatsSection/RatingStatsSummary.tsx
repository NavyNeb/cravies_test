import RatingRow from "./RatingStatsSummary/RatingRow";
import RatingStars from "./RatingStatsSummary/RatingStars";

const RatingStatsSummary = () => {
  const total = 6;
  const ratings = { 5: 6, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>;
  const avg = 5.0;

  return (
    <div className="border-b border-gray-200 mb-3 pb-3">
      <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:gap-16" > 
      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold">{avg.toFixed(1)}</span>
        <RatingStars value={5} size={22} />
        <span className="text-sm text-gray-600">Based on {total} reviews</span>
      </div>

      {/* Would recommend */}
      <div className=" text-sm text-gray-900 font-semibold hidden md:block">
        100% would recommend this product
      </div>

      </div>
      <div className="mt-4 space-y-2 max-w-md">
        <RatingRow label={5} count={ratings[5]} total={total} active />
        <RatingRow label={4} count={ratings[4]} total={total} />
        <RatingRow label={3} count={ratings[3]} total={total} />
        <RatingRow label={2} count={ratings[2]} total={total} />
        <RatingRow label={1} count={ratings[1]} total={total} />
      </div>

      <div className="mt-2 flex items-center justify-end gap-2 text-xs text-gray-500">
        <span>Powered by</span>
        <span className="inline-flex items-center gap-1 font-medium text-gray-700">
          <img src="/okendo.svg" className="inline-block h-4 w-4 rounded-sm" />{" "}
          Okendo
        </span>
      </div>

      {/* Mobile: recommend text */}
      <div className="mt-3 text-sm text-gray-900 font-semibold md:hidden">
        100% would recommend this product
      </div>

      
    </div>
  );
};

export default RatingStatsSummary;
