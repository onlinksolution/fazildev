import { RiArrowRightLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
      <div className='main_container h-full md:h-screen flex items-center max-lg:mt-5'>
        <div className='mt-[5rem] grid md:grid-cols-2 items-center'>
          <div className='py-10 flex flex-col gap-6 lg:gap-10'>
            <h2 className='text-3xl text-white uppercase lg:text-5xl leading-tight'>I'm a<span className='text-hightlight'> web Developer </span> <br />
              based in sri lanka</h2>
            <p className='lg:text-xl'>Hey, my name is <span className='text-hightlight'>Mohomed Fazil</span>, I like to craft solid and <br /> scalable frontend & backend products with <br /> great user experiences.</p>
            <div className='mt-5'>
              <Link href='/portfolio' className='bg-hightlight text-black py-3 px-4 rounded-xl border-2 border-hightlight inline-flex items-center gap-2 group transition-transform duration-500 hover:bg-black hover:text-hightlight'>Expolore My Projects <RiArrowRightLine className='group-hover:translate-x-2' /></Link>
            </div>

          </div>
          <div className='flex justify-center max-md:mt-10'>
            <div className='max-md:w-5/6'>
              <video className="pointer-events-none"
                autoPlay muted loop playsInline={true}>
                <source src='hero-video-1.mp4' type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero