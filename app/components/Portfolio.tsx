import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PORTFOLIO } from '../constant'
import { RiLinksLine } from '@remixicon/react'

const Portfolio = () => {
  return (
    <section className='py-24' id='portfolio'>
      <div className='main_container'>
        <h2 className='font-title text-center text-4xl text-hightlight'>PORTFOLIO</h2>
        <p className='font-title text-center text-lg'>My Recent Projects</p>

        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {PORTFOLIO.reverse().slice(0, 3).map((link, i) => (
            <article className='bg-bg rounded-xl' key={i}>
              <div className='overflow-hidden rounded-xl'>
                <Image src={link.path} width={0} height={0} sizes='100vw' alt='projects' className='w-full h-auto rounded-t-xl hover:scale-105 duration-300 transition-all' />
              </div>

              <div className='px-5 py-7 grid gap-3'>
                <h3 className='text-hightlight text-xl'>{link.title}</h3>
                <p className='font-poppins text-sm text-gray-300'>{link.description}</p>
                <div>
                  <Link href={link.link} className='hover:text-hightlight inline-flex items-center gap-2'><RiLinksLine size={15} /> View Website</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='flex justify-end mt-6'>
          <Link href='/portfolio' className='hover:underline underline-offset-4'>see more</Link>
        </div>

      </div>
    </section>
  )
}

export default Portfolio