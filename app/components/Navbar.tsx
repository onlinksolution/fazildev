'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NAVLINK } from '../constant'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import { cn } from '../lib/utils'

const Navbar = () => {

  const [navBar, setNavBar] = useState(false)

  const toggleMenuShow = () => {
    const menu = document.getElementById('menu-bar');
    menu?.classList.remove("max-md:right-full");
    menu?.classList.add("max-md:right-0");
  }

  const toggleMenuHide = () => {
    const menu = document.getElementById('menu-bar');
    menu?.classList.remove("max-md:right-0");
    menu?.classList.add("max-md:right-full");
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <header className={cn('w-full fixed top-0 left-0 py-4 z-40 transition-all duration-500', navBar ? 'bg-white' : 'bg-transparent')}>
      <nav className='main_container h-[3rem] flex justify-between items-center'>
        <Link href=''>
          <Image src={cn(navBar ? '/fazildev-black.png' : '/fazildev-white.png')} width={150} height={20} alt='logo' />
        </Link>

        <div className='max-md:fixed max-md:top-0 max-md:right-full max-md:bg-black max-md:w-full max-md:h-screen max-md:flex max-md:justify-center max-md:items-center max-md:flex-col duration-300 transition-all' id='menu-bar'>
          <ul className='flex flex-col gap-6 max-md:text-center md:flex-row lg:gap-10'>
            {NAVLINK.map((link, i) => (
              <li key={i}><Link className={cn('max-md:text-white font-poppins text-2xl md:text-xl link', navBar ? 'md:text-black' : 'md:text-white')} href={link.link} onClick={toggleMenuHide}>{link.label}</Link></li>
            ))}
          </ul>

          <RiCloseLine size={30} className='text-white absolute top-10 right-10 md:hidden' onClick={toggleMenuHide} />
        </div>

        <div className='md:hidden'>
          <RiMenuLine className={cn(navBar ? 'text-black' : 'text-white')} onClick={toggleMenuShow} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar