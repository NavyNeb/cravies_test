import React from "react";
import SectionLabel from "./SectionLabel";
import { PACKS } from "@/data/mockData";
import type { PackSize } from ".";
import { classNames } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  pack: PackSize;
  handlePackChange: (packSize: PackSize) => void;
};

const PacksSection: React.FC<Props> = ({ handlePackChange, pack }) => {
  return (
    <React.Fragment>
      <SectionLabel index={1} title="PICK YOUR PACK" />
      <div className="space-y-4">
        {PACKS.map((p) => {
          const checked = pack === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handlePackChange(p.id as PackSize)}
              className={classNames(
                "flex flex-col w-full h-fit sm:flex-row sm:h-[104px] sm:items-center sm:justify-between rounded-xl border-[3px] pl-2 pt-2 pr-5 pb-2  text-left transition relative",
                checked
                  ? "border-black-app bg-[#FBF3E4] shadow"
                  : "border-[#D1D1D1] bg-white"
              )}
            >
              {/* thumb */}
              <div className="flex h-full gap-3 items-center justify-center">
                <div
                  className={classNames(
                    "flex h-[88px] w-[88px] items-center justify-center rounded-[16px]",
                    checked ? "bg-white" : "bg-[#ECECEC"
                  )}
                >
                  <img
                    src={p.image}
                    className="h-[60px] w-[60px] object-cover "
                    alt={p.title}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-lg font-bold tracking-wide">
                      {p.title}
                    </span>
                    <div className="mt-0.5 text-[14px] font-normal text-black-app">
                      $1.19/serving
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:hidden">
                {p.old_price && (
                  <span className="mr-1 text-base font-normal leading-7 line-through">
                    ${p.old_price}
                  </span>
                )}
                {p.price && (
                  <span className="mr-1 text-lg text-green-app font-bold leading-7">
                    {p.price}
                  </span>
                )}
                {p.reduction && (
                  <Badge className=" bg-green-app px-1 rounded-[4px]">
                    <span className="text-xs text-white font-bold">
                      {p.reduction}
                    </span>
                  </Badge>
                )}
              </div>
                  {p.desc && (
                    <Badge className="absolute inset-x-3/7 -top-3 bg-orange-app px-1 rounded-[4px]">
                      {p.desc}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                {p.old_price && (
                  <span className="mr-1 text-base font-normal leading-7 line-through">
                    ${p.old_price}
                  </span>
                )}
                {p.price && (
                  <span className="mr-1 text-lg text-green-app font-bold leading-7">
                    {p.price}
                  </span>
                )}
                {p.reduction && (
                  <Badge className=" bg-green-app px-1 rounded-[4px]">
                    <span className="text-xs text-white font-bold">
                      {p.reduction}
                    </span>
                  </Badge>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PacksSection;
