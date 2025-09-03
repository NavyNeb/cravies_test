import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

/**
 * Pixel-oriented recreation of the comparison section (desktop + mobile).
 * - React + TypeScript + TailwindCSS
 * - Matches orange background, headline, dotted mobile container, grid/table, row rules, and footnote.
 */

// Swap with real asset URLs
const CRAVIES_IMG = "https://via.placeholder.com/150x180?text=Cravies";
const OTHER_1_IMG = "https://via.placeholder.com/130x160?text=Box+1";
const OTHER_2_IMG = "https://via.placeholder.com/120x140?text=Box+2";
const OTHER_3_IMG = "https://via.placeholder.com/120x60?text=Bar";

const ROWS = [
  { key: "protein", label: "PROTEIN", cravies: "11-12G", o1: "11-12G", o2: "11-12G", o3: "11-12G" },
  { key: "sugar", label: "SUGAR", cravies: "11-12G", o1: "11-12G", o2: "11-12G", o3: "11-12G" },
  { key: "calories", label: "CALORIES", cravies: "11-12G", o1: "11-12G", o2: "11-12G", o3: "11-12G" },
  { key: "netcarbs", label: "NET CARBS", cravies: "11-12G", o1: "11-12G", o2: "11-12G", o3: "11-12G" },
] as const;

export default function ComparisonTable() {
  return (
    <section className="w-full bg-[#E66C21]">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1200px] px-6 pb-12 pt-10 lg:block">
        {/* Heading */}
        <h2 className="mb-6 text-center font-black uppercase tracking-tight text-white leading-[1.05] text-[48px]">
          We'RE NOT THE SAME AS
          <br /> REGULAR CEREALS...
        </h2>

        <div className="rounded-[28px] bg-[#E66C21]">
          <div className="grid grid-cols-5 gap-6 text-white">
            {/* Column headers with product images */}
            <div />
            <div className="flex justify-center">
              <div className="relative -mt-10 w-[170px] rounded-[24px] bg-white px-5 pb-4 pt-6 text-center text-black shadow">
                <div className="mb-1 text-[12px] font-black tracking-wide">CRAVIES</div>
                <img src={CRAVIES_IMG} alt="Cravies" className="mx-auto h-[180px] w-auto object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <img src={OTHER_1_IMG} alt="Brand" className="h-[150px] w-auto object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={OTHER_2_IMG} alt="Brand" className="h-[120px] w-auto object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={OTHER_3_IMG} alt="Bar" className="h-[60px] w-auto object-contain" />
            </div>
          </div>

          {/* Table rows */}
          <div className="mt-2">
            {ROWS.map((r, i) => (
              <div key={r.key} className="grid grid-cols-5 items-center text-white">
                <div className="py-4 pr-6 text-right text-[14px] font-bold uppercase tracking-wide opacity-95">
                  {r.label}
                </div>
                <div className="py-4 text-center text-[14px] font-semibold">{r.cravies}</div>
                <div className="py-4 text-center text-[14px] font-semibold opacity-90">{r.o1}</div>
                <div className="py-4 text-center text-[14px] font-semibold opacity-90">{r.o2}</div>
                <div className="py-4 text-center text-[14px] font-semibold opacity-90 border-b border-white/60" style={{ borderBottomWidth: i === ROWS.length - 1 ? 0 : 1 }}>
                  {r.o3}
                </div>
                {/* row rule across full width */}
                <div className={`col-span-5 h-px bg-white/60 ${i === ROWS.length - 1 ? "hidden" : ""}`} />
              </div>
            ))}

            {/* Vegan row (icons) */}
            <div className="grid grid-cols-5 items-center text-white">
              <div className="py-4 pr-6 text-right text-[14px] font-bold uppercase tracking-wide">VEGAN</div>
              <div className="flex items-center justify-center py-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </span>
              </div>
              {[0, 1].map((k) => (
                <div key={k} className="flex items-center justify-center py-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#C33223]">
                    <XCircle className="h-6 w-6 text-white" />
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-center py-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </span>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="mx-auto mt-6 max-w-[880px] text-center text-[12px] text-white/90">
            Comparaison basée sur des produits courants (céréales et encas) disponibles en grandes surfaces. Données valides au 01/05/2025.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="mx-auto block max-w-[420px] px-3 pb-8 pt-8 lg:hidden">
        <h2 className="mb-3 text-left font-black uppercase tracking-tight text-white leading-[1.02] text-[30px]">
          We're not the same as
          <br /> regular cereals...
        </h2>

        <div className="rounded-[12px] border border-dashed border-white/60 p-3">
          {/* Pill product card */}
          <div className="mx-auto -mt-10 mb-2 w-[170px] rounded-[20px] bg-white px-5 pb-3 pt-5 text-center text-black shadow">
            <div className="mb-1 text-[12px] font-black tracking-wide">CRAVIES</div>
            <img src={CRAVIES_IMG} alt="Cravies" className="mx-auto h-[150px] w-auto object-contain" />
          </div>

          {/* Two-column mini table */}
          <div className="grid grid-cols-3 items-stretch overflow-hidden rounded-md text-white">
            <div className="col-span-1 text-right pr-2">
              {ROWS.map((r, i) => (
                <div key={r.key} className={`py-3 text-[12px] font-bold uppercase ${i < ROWS.length - 1 ? "border-b border-white/50" : ""}`}>{r.label}</div>
              ))}
              <div className="py-3 text-[12px] font-bold uppercase">VEGAN</div>
            </div>
            <div className="col-span-1 bg-[#D85F18]">
              {ROWS.map((r, i) => (
                <div key={r.key} className={`py-3 text-center text-[12px] font-semibold ${i < ROWS.length - 1 ? "border-b border-white/50" : ""}`}>{r.cravies}</div>
              ))}
              <div className="flex items-center justify-center py-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
              </div>
            </div>
            <div className="col-span-1">
              {ROWS.map((r, i) => (
                <div key={r.key} className={`py-3 text-center text-[12px] font-semibold ${i < ROWS.length - 1 ? "border-b border-white/50" : ""}`}>{r.o1}</div>
              ))}
              <div className="flex items-center justify-center py-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#C33223]">
                  <XCircle className="h-5 w-5 text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar accent (bottom) */}
        <div className="mt-4 h-1 w-full rounded-full bg-white/40">
          <div className="h-1 w-1/3 rounded-full bg-[#2D7F5C]" />
        </div>

        <p className="mt-4 text-[11px] leading-snug text-white/90">
          Comparaison basée sur des produits courants (céréales et encas) disponibles en grandes surfaces. Données valides au 01/05/2025.
        </p>
      </div>
    </section>
  );
}
