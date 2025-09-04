import React from 'react'

type Props = { initials: string }

function Avatar({ initials }: Props) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-700 font-semibold">
        {initials}
      </div>
    );
  }
export default Avatar