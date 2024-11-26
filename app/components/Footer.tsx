import { RiFacebookLine, RiGithubFill, RiInstagramLine, RiTwitterXLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'
import Scrollup from './Scrollup';

const Footer = () => {
  return (
    <>
      <footer>
        <hr className='bg-bg w-full h-1' />

        <div className='py-8 main_container flex flex-col gap-5 md:flex-row md:justify-between items-center'>
          <div className='flex gap-3 justify-center md:order-2'>
            <div className='border-2 border-gray-200 w-10 h-10 rounded-full flex justify-center items-center group hover:bg-hightlight duration-300 transition-all hover:border-none'>
              <Link href='https://web.facebook.com/fazildev01/'><RiFacebookLine className='group-hover:text-black' /></Link>
            </div>
            <div className='border-2 border-gray-200 w-10 h-10 rounded-full flex justify-center items-center group hover:bg-hightlight duration-300 transition-all hover:border-none'>
              <Link href='https://www.instagram.com/fazildev'><RiInstagramLine className='group-hover:text-black' /></Link>
            </div>
            <div className='border-2 border-gray-200 w-10 h-10 rounded-full flex justify-center items-center group hover:bg-hightlight duration-300 transition-all hover:border-none'>
              <Link href='https://twitter.com/mohomedfazil_'><RiTwitterXLine className='group-hover:text-black' /></Link>
            </div>
            <div className='border-2 border-gray-200 w-10 h-10 rounded-full flex justify-center items-center group hover:bg-hightlight duration-300 transition-all hover:border-none'>
              <Link href='https://github.com/MohomedFazil'><RiGithubFill className='group-hover:text-black' /></Link>
            </div>
          </div>
          <p className='font-poppins text-sm text-center text-gray-300 order-1'>&copy; 2023-2024 All rights reserved to fazildev.</p>
        </div>
      </footer>
      <Scrollup />
    </>
  )
}

export default Footer