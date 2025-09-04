import SectionContainer from "@/components/common/SectionContainer";
import RatingStatsSummary from "./RatingStatsSummary";
import Reviews from "./Reviews";


// ---------- Main Component ----------
export default function StatsSection() {

  return (
    <SectionContainer title="100% de clients satisfaits, et vous ?">
      <div className="mx-auto product-container">      

        {/* Summary + Actions */}
        <div className="mt-4 sm:mt-8 grid grid-cols-1">
          {/* Stats */}
         <RatingStatsSummary />

          {/* Reviews header actions */}
         <Reviews />
        </div>
      </div>
    </SectionContainer>
  );
}
