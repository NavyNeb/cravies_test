import { flavoursPack } from "@/data/mockData";
import React from "react";
import { Button } from "../../ui/button";
import FlavourCard from "./FlavourCard";
import { Link } from "react-router-dom";

const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[13px] md:text-sm text-black-app">
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black-app shadow-[0_1px_0_0_rgba(0,0,0,0.15)]">
      <svg
        width="12"
        height="12"
        viewBox="0 0 20 20"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10.5l3 3 7-7"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    {children}
  </span>
);

export default function HeroSection() {
  return (
    <React.Fragment>
      <section className="relative flex flex-col justify-center isolate overflow-hidden bg-yellow-app pt-24">
        {/* Yellow background */}
        {/* <div className="absolute inset-0 bg-yellow" /> */}
        <div
          className="absolute bottom-0 -translate-x-2.5 translate-y-[260px] h-[100%] w-[100%] bg-white"
          style={{
            clipPath: "polygon(10% 0, 90% 0, 100% 60%, 0 60%)",
            borderRadius: 8,
          }}
        />
          {/* Content container */}
          <div className="relative w-full mx-auto px-4 pt-10 md:pt-16 md:pb-12 bg ">
            {/* Headline block with white pedestal shape */}
            <div className="relative mx-auto w-full">
              {/* white stepped pedestal behind heading */}

              <h1
                className="relative z-10 text-center font-wosker leading-[0.92] tracking-[0.8px] text-orange-app"
                style={{
                  fontSize: "clamp(32px, 8vw, 104px)",
                }}
              >
                <span className="bg-white px-4 py-2">TASTES BAD</span>
                <span className="block pt-6">FOR YOU. BUT ISN'T.</span>
              </h1>
            </div>

            {/* Feature bullets */}
            <div className="mt-4 flex items-center flex-wrap justify-center gap-5 md:mt-6">
              <CheckItem>Zero Sugar</CheckItem>
              <CheckItem>High in Protein</CheckItem>
              <CheckItem>Childhood Taste</CheckItem>
            </div>

            {/* CTA */}
            <Link to="/product-details" className="mt-6 flex justify-center md:mt-8">
              <Button>
                DÉCOUVRIR TASTIES
              </Button>
            </Link>

            {/* Trust row */}
            <div className="my-5 flex flex-col sm:flex-row items-center justify-center gap-2 md:my-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-flex size-6 items-center justify-center  bg-green-app"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.6 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-center text-[11px] font-extrabold tracking-[0.6px] text-[#0e0e0e] md:text-[12px]">
                RATED 4.9/5 BY 1,250+ • HAPPY CUSTOMERS
              </p>
            </div>
          </div>
      </section>
      <section className = "bg-white flex flex-col items-center product-container pb-24" >
        <img src="/images/cereals-bowl.png" alt="cereals" className="w-full h-[50%]" />
        <h2 className="font-wosker text-6.5xl text-center text-black-app pt-20 pb-12 uppercase" >
            Pick your flavour
        </h2>
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4 xl:gap-7 mb-10" >
            {
                flavoursPack.map((flavour) => (
                    <FlavourCard key={flavour.id} {...flavour} />
                ))
            }
        </div>
        <Button className="mx-auto text-center" >BUILD YOUR BUNDLE</Button>
      </section>
    </React.Fragment>
  );
}
