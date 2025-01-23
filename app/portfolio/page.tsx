import React from 'react'
import { PORTFOLIO } from '../constant'
import Image from 'next/image'
import { RiLinksLine } from '@remixicon/react'
import Link from 'next/link'
import { ArrowBigLeftDash } from 'lucide-react'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <div className="top-0 z-[-2] h-screen w-full fixed bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className='py-24'>
        <div className='main_container'>
          <div className='mb-10'>
            <Link href='/' className='inline-flex items-center gap-3 hover:underline hover:underline-offset-4'><ArrowBigLeftDash size={20} /> Home</Link>
          </div>

          <h2 className='font-title text-center text-4xl text-hightlight'>PORTFOLIO</h2>
          <p className='font-title text-center text-lg'>My Recent Projects</p>

          <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {PORTFOLIO.reverse().map((link, i) => (
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
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page