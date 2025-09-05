import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavLinks = () => {

    const [selectedLink, setSelectedLink] = useState<string>('shop')
    const { pathname } = useLocation();
    const isProductPage = pathname.includes('product-details');
    const links = [
        { name: 'Shop', value: 'shop', current: selectedLink === 'shop' },
        { name: 'Build your bundle', value: 'bundles', current: selectedLink === 'bundles' },
        { name: 'About Us', value: 'about', current: selectedLink === 'about' }
      ]

  return (
    <ul className='hidden items-center gap-8 w-full md:flex' >
     {links.map((link) => (
          <motion.li
            key={link.name}
            aria-current={link.current ? 'page' : undefined}
            onClick={() => setSelectedLink(link.value)}
            style={{ color: isProductPage ? '#fff' : 'var(--black-app)' }}
            className='rounded-md py-1.5 text-base font-bold relative flex items-center justify-center cursor-pointer'
          >
            <span className='relative z-[1]' >{link.name}</span>
            {
                link.current && (
                    <motion.span style={{ backgroundColor: isProductPage ? '#fff' : 'var(--black-app)' }} layoutId='box' aria-hidden="true" className='absolute h-1 w-full bottom-0 z-[0] ' />
                )
            }
          </motion.li>
        ))}
</ul>
  )
}

export default NavLinks