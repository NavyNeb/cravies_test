import React from 'react'

function StrikeIcon({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative grid place-items-center">
        {children}
        {/* strike-through */}
        <span className="absolute h-[3px] w-16 rotate-[-25deg] rounded bg-[#2b2b2b]" />
      </div>
    )
  }

export default StrikeIcon