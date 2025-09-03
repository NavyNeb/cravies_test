import React from "react";
import { Star, CheckCircle2, Filter, Pencil, ChevronDown } from "lucide-react";

// ---------- Types ----------
type Review = {
  id: string;
  name: string;
  initials: string;
  title: string;
  body: string;
  rating: number; // 1-5
  daysAgo: number;
  verified?: boolean;
  recommends?: boolean;
};

// ---------- Mock Data (match screenshots) ----------
const reviews: Review[] = [
  {
    id: "1",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
  {
    id: "2",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
  {
    id: "3",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
  {
    id: "4",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
  {
    id: "5",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
  {
    id: "6",
    name: "Tristan T.",
    initials: "TT",
    title: "YUM!!!",
    body:
      "My little boy loves it, good to see a fruity flavour again",
    rating: 5,
    daysAgo: 6,
    verified: true,
    recommends: true,
  },
];

// ---------- UI Helpers ----------
function RatingStars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`shrink-0 ${i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          width={size}
          height={size}
        />
      ))}
    </div>
  );
}

function RatingRow({ label, count, total, active = false }: { label: number; count: number; total: number; active?: boolean }) {
  const pct = Math.round((count / Math.max(1, total)) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 text-sm font-medium text-gray-700">{label}</div>
      <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full ${active ? "bg-yellow-400" : "bg-gray-300"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="w-8 text-right text-sm text-gray-600">{count}</div>
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-700 font-semibold">
      {initials}
    </div>
  );
}

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${className}`}>{children}</span>
  );
}

// ---------- Main Component ----------
export default function ReviewsSection() {
  const total = 6;
  const ratings = { 5: 6, 4: 0, 3: 0, 2: 0, 1: 0 } as Record<number, number>;
  const avg = 5.0;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 lg:px-6">
        {/* Heading */}
        <div className="text-center pt-6 sm:pt-10">
          <h2 className="mx-auto max-w-4xl font-black uppercase tracking-tight text-2xl sm:text-3xl md:text-5xl leading-tight">
            <span className="align-middle">% DE CLIENTS SATISFAITS, ET VOUS ?</span>
          </h2>
        </div>

        {/* Summary + Actions */}
        <div className="mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Stats */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold">{avg.toFixed(1)}</span>
              <RatingStars value={5} size={22} />
              <span className="text-sm text-gray-600">Based on {total} reviews</span>
            </div>

            {/* Would recommend */}
            <div className="mt-3 text-sm text-gray-900 font-semibold hidden md:block">100% would recommend this product</div>

            <div className="mt-4 space-y-2">
              <RatingRow label={5} count={ratings[5]} total={total} active />
              <RatingRow label={4} count={ratings[4]} total={total} />
              <RatingRow label={3} count={ratings[3]} total={total} />
              <RatingRow label={2} count={ratings[2]} total={total} />
              <RatingRow label={1} count={ratings[1]} total={total} />
            </div>

            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <span>Powered by</span>
              <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                <span className="inline-block h-4 w-4 rounded-sm bg-gray-800" /> Okendo
              </span>
            </div>

            {/* Mobile: recommend text */}
            <div className="mt-3 text-sm text-gray-900 font-semibold md:hidden">100% would recommend this product</div>

            <div className="mt-4 flex gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white shadow hover:brightness-105 transition">
                <Filter className="h-4 w-4" /> Filters
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-white shadow hover:brightness-105 transition">
                <Pencil className="h-4 w-4" /> Write a review
              </button>
            </div>
          </div>

          {/* Right: Reviews header actions (desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="flex items-center justify-between">
              <div className="hidden lg:block w-24" />
              <div className="ml-auto flex items-center gap-3 text-sm text-gray-700">
                <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-2">
                  Photos & Videos <ChevronDown className="h-4 w-4" />
                </button>
                <div className="text-gray-500">Sort</div>
                <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-2">
                  Photos & Videos <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="mt-4 space-y-4">
              {reviews.map((r) => (
                <article key={r.id} className="rounded-2xl border p-4 md:p-5">
                  <div className="grid grid-cols-12 gap-3">
                    {/* Author card (left) */}
                    <div className="col-span-12 sm:col-span-4 md:col-span-3">
                      <div className="flex items-center gap-3">
                        <Avatar initials={r.initials} />
                        <div>
                          <div className="font-semibold text-gray-900 leading-tight">{r.name}</div>
                          {r.verified && (
                            <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-emerald-600">
                              <CheckCircle2 className="h-4 w-4" /> Verified Buyer
                            </div>
                          )}
                          {r.recommends && (
                            <div className="mt-2">
                              <Pill className="border-emerald-200 bg-emerald-50 text-emerald-700">
                                <CheckCircle2 className="h-3.5 w-3.5" /> I recommend this product
                              </Pill>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="col-span-12 sm:col-span-8 md:col-span-9">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <RatingStars value={r.rating} />
                          <h3 className="mt-1 text-sm font-semibold">{r.title}</h3>
                          <p className="mt-1 text-sm text-gray-700 max-w-prose">{r.body}</p>
                        </div>
                        <div className="text-xs text-gray-500 whitespace-nowrap md:pl-4">{r.daysAgo} days ago</div>
                      </div>

                      <div className="mt-3 flex items-center gap-3 text-sm text-gray-700">
                        <span>Was this helpful?</span>
                        <button className="rounded-lg border px-2 py-1">+ 0</button>
                        <button className="rounded-lg border px-2 py-1">- 0</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* See more */}
            <div className="mt-5 flex justify-center">
              <button className="rounded-xl bg-green-700 px-5 py-3 text-white font-semibold shadow hover:brightness-105">See more reviews</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
