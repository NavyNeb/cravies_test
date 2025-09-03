import React from 'react'

type Props = {
    className?: string
    children?: React.ReactNode
    title?: string
    bgColor?: string
    txtColor?: string
}

const SectionContainer: React.FC<Props> = ({ bgColor, children, className, title, txtColor }) => {
  return (
    <section style={{ backgroundColor: bgColor || '#fff' }} className={` border-t-[3px] border-black-app py-24 ${className}`} >
        {title && <h2 style={{ color: txtColor || `var(--black-app)` }} className="font-wosker text-6.5xl text-center pb-12 px-3  uppercase leading-none" >
            {title}
        </h2>}
        {children}
    </section>
  )
}

export default SectionContainer