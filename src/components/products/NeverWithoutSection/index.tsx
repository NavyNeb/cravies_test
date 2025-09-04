import type { Badge } from "@/types";
import BadgeCard from "./BadgeCard";
import SectionContainer from "@/components/common/SectionContainer";

const Stroke = "#2b2b2b";

const IconDNA = (
  <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
    <g fill="none" stroke={Stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c8 8 16 8 24 0M20 54c8-8 16-8 24 0" />
      <path d="M20 22c8 8 16 8 24 0M20 42c8-8 16-8 24 0" />
      <path d="M20 10v44M44 10v44" />
    </g>
  </svg>
)

const IconDrop = (
  <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
    <g fill="none" stroke={Stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8C24 20 16 28 16 36a16 16 0 1032 0c0-8-8-16-16-28z"/>
    </g>
  </svg>
)

const IconCube = (
  <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
    <g fill="none" stroke={Stroke} strokeWidth="3" strokeLinejoin="round">
      <path d="M32 6l22 12v28L32 58 10 46V18z"/>
      <path d="M54 18L32 30 10 18"/>
      <path d="M32 30v28"/>
    </g>
  </svg>
)

const IconBeaker = (
  <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
    <g fill="none" stroke={Stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 8h20"/>
      <path d="M26 8v12L12 54a4 4 0 003.7 6h32.6A4 4 0 0052 54L38 20V8"/>
      <path d="M20 40c8 8 16-8 24 0"/>
    </g>
  </svg>
)

const BADGES: Badge[] = [
  {
    titleTop: "PALM OIL?",
    titleBottom: "NOPE.",
    bg: "var(--orange-app)",
    shadow: "#c35b22",
    icon: IconDNA,
  },
  {
    titleTop: "ARTIFICIAL COLORS?",
    titleBottom: "NEVER HEARD OF ’EM.",
    bg: "var(--green-app)",
    shadow: "#2b8a56",
    icon: IconDrop,
  },
  {
    titleTop: "ADDED SUGAR?",
    titleBottom: "NOT IN OUR CEREAL.",
    bg: "var(--yellow-app)",
    shadow: "#c7a40c",
    icon: IconCube,
  },
  {
    titleTop: "SKETCHY",
    titleBottom: "SWEETENERS?\nBIG NO.",
    bg: "var(--rose-app)",
    shadow: "#d07fa1",
    icon: IconBeaker,
  },
  {
    titleTop: "GMOS?",
    titleBottom: "NOT INVITED.",
    bg: "var(--brown-app)",
    shadow: "#8e6f4f",
    icon: IconDNA,
  },
]

export default function NeverWithoutSection() {
  return (
    <SectionContainer title="CRAVIES NEVER MAKES THE BOWL WITHOUT…" className="w-full product-container">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8">
              {BADGES.map((b, i) => (
                <BadgeCard key={i} b={b} idx={i} />
              ))}
            </div>
    </SectionContainer>
  )
}
