import React from 'react'

type Props = { children: React.ReactNode; className?: string }

function Pill({ children, className = "" }: Props) {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${className}`}>{children}</span>
    );
  }
  

export default Pill