import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MEMBERSHIP_FREQUENCIES } from "@/data/mockData";
import React from "react";
import PromoTags from "./PromoTags";
import Radio from "./Radio";
import SectionLabel from "./SectionLabel";

type Props = {
  isMember: boolean;
  setIsMember: (isMember: boolean) => void;
  frequency: number;
  setFrequency: (frequency: number) => void;
  applyDiscount: boolean;
  setApplyDiscount: (apply: boolean) => void;
};

const FrequencySection: React.FC<Props> = ({
  isMember,
  setIsMember,
}) => {
  return (
    <React.Fragment>
      <SectionLabel index={3} title="PICK YOUR FREQUENCY" className="mt-3" />

      <div className="space-y-4">
        {/* Member option */}
        <div
          className={`rounded-xl border-[3px] p-2 ${
            isMember ? " border-black-app" : " border-[#D1D1D1]"
          }`}
        >
          <div className="flex flex-col items-start  sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2">
              <button onClick={() => setIsMember(true)} className="contents">
                <Radio checked={isMember} />
              </button>
              <span className="text-lg font-bold tracking-wide">
                CRAVES MEMBER
              </span>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="mr-1 text-base font-normal leading-7 line-through">
                68,00€
              </span>

              <span className="mr-1 text-lg text-green-app font-bold leading-7">
                49€
              </span>

              <Badge className=" bg-green-app px-1 rounded-[4px]">
                <span className="text-xs text-white font-bold">-20%</span>
              </Badge>
            </div>
          </div>
          <div className="mt-2 gap-2 w-full">
            <Select>
              <SelectTrigger className="min-w-full relative">
                <SelectValue
                  className="text-base text-black-app font-medium w-[90%]"
                  placeholder="Select a period"
                />
                <Badge className="hidden absolute inset-x-6/8 right-2 bg-orange-app px-1 sm:block rounded-[4px]">
                  <span className="font-bold text-xs text-white" >RECOMMENDED</span>
                </Badge>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {MEMBERSHIP_FREQUENCIES.map((f) => (
                    <SelectItem key={f.value} value={f.value}>
                      {f.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <PromoTags />
          </div>
        </div>

        {/* Non-member */}
        <button
          onClick={() => setIsMember(false)}
          className={`flex w-full items-center gap-3 rounded-xl border-[3px] p-2 text-left h-16${
            !isMember ? " border-black-app" : " border-[#D1D1D1]"
          }`}
        >
          <Radio checked={!isMember} />
          <span className="flex-1 text-[12px] font-extrabold tracking-wide">
            NON-MEMBER
          </span>
          <p className="text-lg font-bold">33€</p>
        </button>
      </div>
    </React.Fragment>
  );
};

export default FrequencySection;
