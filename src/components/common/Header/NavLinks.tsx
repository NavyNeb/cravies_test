import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavLinks = () => {

    const [selectedLink, setSelectedLink] = useState<string>('shop')

    const links = [
        { name: 'Shop', value: 'shop', current: selectedLink === 'shop' },
        { name: 'Build your bundle', value: 'bundles', current: selectedLink === 'bundles' },
        { name: 'About Us', value: 'about', current: selectedLink === 'about' }
      ]

  return (
    <ul className='flex items-center gap-8 w-full' >
     {links.map((link) => (
          <motion.li
            key={link.name}
            aria-current={link.current ? 'page' : undefined}
            onClick={() => setSelectedLink(link.value)}
            className='rounded-md py-1.5 text-base font-bold relative flex items-center justify-center'
          >
            <span className='relative z-[1]' >{link.name}</span>
            {
                link.current && (
                    <motion.span layoutId='box' aria-hidden="true" className='absolute bg-black-app h-1 w-full bottom-0 z-[0] ' />
                )
            }
          </motion.li>
        ))}
</ul>
  )
}

export default NavLinks