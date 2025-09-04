import type { Badge } from '@/types'
import StrikeIcon from './StrikeIcon'
import { classNames } from '@/lib/utils'

type Props = { b: Badge, idx: number }

function BadgeCard({ b, idx }: Props ) {
    return (
      <div className={classNames(
        "flex flex-col items-center gap-2 text-center",
        idx === 4 ? "col-span-full md:col-span-1" : ""
      )}>
        <div
          className="relative grid size-[140px] place-items-center rounded-full border-[3px] border-black-app sm:size-[201px]"
          style={{ backgroundColor: b.bg, // @ts-ignore
           }}
          aria-hidden
        >
          <StrikeIcon>{b.icon}</StrikeIcon>
        </div>
        <div className="w-[160px] text-center text-[18px] font-bold leading-4 tracking-wide text-[#2b2b2b]">
          <div>{b.titleTop}</div>
          {b.titleBottom.split("\n").map((ln, i) => (
            <div key={i}>{ln}</div>
          ))}
        </div>
      </div>
    )
  }

export default BadgeCard