import React from "react";
import { CheckIcon, X } from "lucide-react";
import SectionContainer from "@/components/common/SectionContainer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ROWS } from "@/data/mockData";
import { motion } from "framer-motion";
import { classNames } from "@/lib/utils";

export default function ComparisonTableSection() {
  const [curr, setCurr] = React.useState("row2");
  return (
    <SectionContainer
      bgColor="var(--orange-app)"
      txtColor="#fff"
      title=" We'RE NOT THE SAME AS REGULAR CEREALS..."
      className="product-container"
    >
      {/* Desktop */}
      <ScrollArea className="min-w-4xl max-w-[1200px] mx-auto">
        <div className="mx-auto px-6 pb-12 pt-10 md:overflow-x-auto">
          <div className="rounded-[28px]">
            <div className="grid grid-cols-5  gap-0 text-white">
              {/* Column headers with product images */}
              {ROWS.map((r) => (
                <motion.div
                  key={r.key}
                  onClick={() => {
                    if (r.key !== "row") {
                      setCurr(r.key);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="flex flex-col w-full relative overflow-y-visible "
                >
                  {
                    <div className="relative z-10 -mt-10 w-[100%] h-[180px] rounded-[24px] px-5 pb-4 pt-6 text-center text-black">
                      <div className="mb-1 text-base tracking-wide font-bold">
                        {r.label || ""}
                      </div>
                      {r.image && (
                        <img
                          src={r.image}
                          alt="Cravies"
                          className="mx-auto h-[100px] w-auto object-contain"
                        />
                      )}
                    </div>
                  }

                  <div className="relative z-10">
                    {r.values.map((value, j) => (
                      <div
                        key={value + j}
                        style={{
                          color: `${
                            r.key === curr ? "var(--black-app)" : "#fff"
                          }`,
                        }}
                        className={classNames(
                          "relative py-4 text-center text-[14px] font-semibold border-b  z-10",
                          r.key === curr ? "border-black-app" : "border-white"
                        )}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                  <div className="relative z-10">
                    {r.key === "row2" && (
                      <div className="flex items-center justify-center py-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#019C45] text-white">
                          <CheckIcon className="h-6 w-6" />
                        </span>
                      </div>
                    )}
                    {r.key === "row3" && (
                      <div className="flex items-center justify-center py-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#F20000]">
                          <X className="h-6 w-6 text-white" />
                        </span>
                      </div>
                    )}
                    {r.key === "row4" && (
                      <div className="flex items-center justify-center py-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#F20000]">
                          <X className="h-6 w-6 text-white" />
                        </span>
                      </div>
                    )}
                    {r.key === "row5" && (
                      <div className="flex items-center justify-center py-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#019C45] text-white">
                          <CheckIcon className="h-6 w-6" />
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Highlight background for the selected column */}
                  {r.key === curr && (
                    <motion.div
                      layoutId="box"
                      aria-hidden="true"
                      className="absolute bg-white h-[108%] bottom-0 w-full z-[0] rounded-[20px]"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* Progress bar accent (bottom) */}
      <div className="inline-block mt-4 h-1 w-full rounded-full bg-yellow-app md:hidden">
        <div className="h-1 w-1/3 rounded-full bg-black-app" />
      </div>

      {/* Footnote */}
      <p className="mx-auto mt-6 max-w-[880px] text-center text-base text-white">
        Comparaison basée sur des produits courants (céréales et encas)
        disponibles en grandes surfaces. Données valides au 01/05/2025.
      </p>
    </SectionContainer>
  );
}
