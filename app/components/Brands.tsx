import Image from 'next/image'
import React from 'react'
import { BRANDS } from '../constant'

const Brands = () => {
  return (
    <section className='py-24'>
      <div className='main_container'>
        <h2 className='font-title text-center text-4xl text-hightlight'>BRANDS</h2>
        <p className='font-title text-center text-lg'>BRANDS THAT I COLLABORATE WITH</p>

        <div className='mt-20 grid grid-cols-4 items-center gap-3 lg:gap-28'>
          {BRANDS.map((link, i) => (
            <Image src={link.path} key={i} width={0} height={0} sizes='100vw' alt='logo' unoptimized className='w-full h-auto opacity-50 hover:opacity-100 duration-300 transition-opacity' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands