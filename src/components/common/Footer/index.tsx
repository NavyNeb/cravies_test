import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, ListFilterIcon } from "lucide-react";
import React, { useMemo, useState } from "react";


export default function CraviesFooterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const valid = useMemo(() => /.+@.+\..+/.test(email), [email]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (valid) {
      setStatus("ok");
      console.log("Subscribed:", email);
    } else {
      setStatus("err");
    }
  }

  return (
    <footer className="w-full p-4">
      <Card className="bg-yellow-app ">
        <CardContent>
          {/* Cravies Logo */}
          <img
            src="/cravies_logo.svg"
            className="w-[95%] mx-auto h-auto object-cover"
          />
          {/* Instagram button */}
          <Button className="text-lg sm:text-[24px] text-white" >
            <ListFilterIcon className="size-6 mx-2.5 hidden sm:block" />
            FOLLOW US ON INSTAGRAM
          </Button>

          {/* CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 place-items-start gap-6 pt-10 md:grid-cols-12 md:gap-8 md:pt-16">
            {/* Left cluster (button + about + columns) */}
            <div className="md:col-span-7">
              <div className="mt-5 grid grid-cols-2 gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
                {/* About */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="mb-2 text-[30px] sm:text-[32px] font-wosker tracking-wide">
                    ABOUT US
                  </h3>
                  <p className="max-w-[280px] text-[12px] leading-snug">
                    We used to eat cereal.
                    <br />
                    Then we became adults. Big mistake.
                    <br />
                    So we fixed cereal. Now everything’s fine.
                    <br />
                    Probably.
                  </p>
                </div>

                {/* Shop */}
                <div>
                  <h3 className="mb-2 text-[30px] sm:text-[32px] font-wosker tracking-wide">
                    SHOP
                  </h3>
                  <ul className="space-y-1 text-[12px]">
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        Choco Boom
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        Peanut Crazy
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        Honey Crunch
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        Cookie N’Cream
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Help */}
                <div>
                  <h3 className="mb-2 text-[30px] sm:text-[32px] font-wosker tracking-wide">
                    HELP
                  </h3>
                  <ul className="space-y-1 text-[12px]">
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        My subscription
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline-offset-2 hover:underline"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom legal links (mobile & desktop left) */}
              <div className="mt-6 hidden gap-4 text-[11px] md:flex">
                <a href="#" className="hover:underline">
                  Terms
                </a>
                <span className="opacity-60">|</span>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
                <span className="opacity-60">|</span>
                <a href="#" className="hover:underline">
                  Legal Info
                </a>
              </div>
            </div>

            {/* Right cluster (newsletter) */}
            <div className="row-start-1 md:row-start-auto md:col-span-5 md:pl-6">
              <div className=" md:ml-auto">
                <h3
                  className="mb-3 max-w-[320px] text-[26px] sm:text-[32px] font-wosker uppercase leading-7 tracking-wide text-orange-app"
                >
                  OUR EMAILS ARE ALL CEREAL,
                  WITH A BIT OF
                  EMOTIONAL SUPPORT
                </h3>

                <form onSubmit={onSubmit} className="flex items-center gap-2">
                  <div className="flex h-[56px] w-full items-center rounded-lg border-2 border-black-app bg-white px-3 text-[12px] shadow-[0_4px_0_#00000022] focus-within:ring-2 focus-within:ring-black/20">
                    <input
                      aria-label="Email address"
                      className="mr-2 w-full bg-transparent outline-none placeholder:text-black/50"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="grid size-10 place-items-center rounded-[12px] border-black-app bg-black-app text-white transition hover:brightness-95"
                      aria-label="Submit email"
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                {status !== "idle" && (
                  <p
                    className={`mt-2 text-[11px] ${
                      status === "ok" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {status === "ok"
                      ? "Thanks! You’re on the list."
                      : "Please enter a valid email."}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile legal */}
            <div className="-mt-2 flex gap-4 text-[11px] md:hidden">
              <a href="#" className="hover:underline">
                Terms
              </a>
              <span className="opacity-60">|</span>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
              <span className="opacity-60">|</span>
              <a href="#" className="hover:underline">
                Legal Info
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
