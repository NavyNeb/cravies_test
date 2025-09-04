import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ, PACKS } from "@/data/mockData";
import { useMemo, useState } from "react";
import RatingStars from "../../StatsSection/RatingStatsSummary/RatingStars";
import FlavoursSection from "./FlavoursSection";
import FrequencySection from "./FrequencySection";
import PacksSection from "./PacksSection";

// Helper types
export type PackSize = "4" | "6" | "8";

export type FlavorKey = "choco" | "cookies" | "peanut" | "honey";

const Divider = () => <div className="my-3 h-px w-full bg-black/10" />;

export default function VarietyPackComponent() {
  const [pack, setPack] = useState<PackSize>("4");
  const [flavors, setFlavors] = useState<Record<FlavorKey, number>>({
    choco: 0,
    cookies: 0,
    peanut: 0,
    honey: 0,
  });
  const [isMember, setIsMember] = useState(true);
  const [frequency, setFrequency] = useState<number>(30);
  const [applyDiscount, setApplyDiscount] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const totalBoxes = useMemo(
    () => Object.values(flavors).reduce((a, b) => a + b, 0),
    [flavors]
  );
  const selectedPack = useMemo(() => PACKS.find((p) => p.id === pack)!, [pack]);

  // Price model
  const basePrice = selectedPack.price;
  const memberDiscountPct = isMember && applyDiscount ? 0.2 : 0; // 20% off recurring
  const totalPrice = useMemo(() => {
    let p = basePrice;
    // @ts-ignore
    if (isMember) p -= 8; // @ts-ignore
    p = Math.max(0, p * (1 - memberDiscountPct)); // @ts-ignore
    return parseFloat(p.toFixed(2));
  }, [basePrice, isMember, memberDiscountPct]);

  function bumpFlavor(key: FlavorKey, delta: 1 | -1) {
    setFlavors((prev) => {
      const limit = Number(pack);
      const next = {
        ...prev,
        [key]: Math.max(0, (prev[key] ?? 0) + delta),
      } as Record<FlavorKey, number>;
      const sum = Object.values(next).reduce((a, b) => a + b, 0);
      if (sum > limit) return prev; // enforce box limit
      return next;
    });
  }

  function handlePackChange(next: PackSize) {
    setPack(next);
    // Trim flavors beyond new limit
    setFlavors((prev) => {
      const order: FlavorKey[] = ["choco", "cookies", "peanut", "honey"];
      let allowed = Number(next);
      const nextMap: Record<FlavorKey, number> = {
        choco: 0,
        cookies: 0,
        peanut: 0,
        honey: 0,
      };
      for (const k of order) {
        if (allowed <= 0) break;
        const take = Math.min(prev[k], allowed);
        nextMap[k] = take;
        allowed -= take;
      }
      return nextMap;
    });
  }

  return (
    <div className="">
      <Card>
        <CardContent>
          {/* Rating */}
          <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-1 text-base uppercase text-black-app">
            <RatingStars value={4.9} size={12} />
            <span className="ml-1 font-bold">
              Rated 4.9/5 by 1,250+ happy customers
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-1 text-[56px] font-wosker ">
            VARIETY PACK
          </h3>
          <p className="mb-3 mt-1 text-lg text-black-app leading-7">
            We take the cereals you loved as a kid and give them a healthy
            reboot – same great taste, none of the junk.
          </p>

          {/* Section: Pick your pack */}
          <PacksSection pack={pack} handlePackChange={handlePackChange} />

          {/* Section: Pick your flavours */}
          <FlavoursSection
            flavors={flavors}
            // @ts-ignore
            bumpFlavor={bumpFlavor}
            pack={pack}
            totalBoxes={totalBoxes}
          />

          {/* Section: Frequency */}
          <FrequencySection
            isMember={isMember}
            setIsMember={setIsMember}
            frequency={frequency}
            setFrequency={setFrequency}
            applyDiscount={applyDiscount}
            setApplyDiscount={setApplyDiscount}
          />

          <Divider />

          {/* Add to cart */}
          <div className="flex items-center gap-2">
            <Button className="flex items-center justify-between w-full">
              <span className="block">ADD TO CART</span>
              <span className="block font-bold text-2xl">{"$29,00"}</span>
            </Button>
          </div>

          {/* Pills */}
          <div className="my-5 grid grid-cols-3 gap-2">
            {[
              { label: "Ingredients" },
              { label: "Who is it for?" },
              { label: "Unboxing" },
            ].map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-2 bg-white px-2 py-1 text-[11px] font-semibold"
              >
                <div className="h-[92px] w-[92px] flex items-center justify-center rounded-full bg-white border-[3px] border-black-app">
                  <img
                    src="/images/cheesy-cravies.jpg"
                    className="h-[95%] w-[95%] rounded-full"
                    alt=""
                  />
                </div>
                <span className="text-center text-xs text-black-app">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-3">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {FAQ.map((item, idx) => {
                return (
                  <AccordionItem key={idx} value={`item-${idx + 1}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base text-left text-black-app ">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
