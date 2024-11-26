import React from 'react'
import { EDUCATION, EXPERIANCE } from '../constant'

const About = () => {
  return (
    <section className='py-24' id='about'>
      <div className='main_container'>
        <h2 className='font-title text-center text-4xl text-hightlight'>ABOUT</h2>
        <p className='font-title text-center text-lg'>My Education & Experiance</p>

        <div className='mt-10 grid gap-4 lg:grid-cols-2'>
          <div className=''>
            <h3 className='mb-5 text-xl lg:text-2xl'>EDUCATION</h3>
            <div className='grid gap-4'>
              {EDUCATION.map((link, i) => (
                <article className='bg-bg py-8 px-5 grid gap-3 rounded-xl group hover:bg-white duration-300 transition-colors' key={i}>
                  <h3 className='text-xl text-hightlight font-bold group-hover:text-black'>{link.title}</h3>
                  <label className='font-poppins text-lg group-hover:text-black'>{link.subtitle}</label>
                  <p className='font-poppins group-hover:text-slate-400 text-slate-400 text-sm'>{link.descrption}</p>
                </article>
              ))}
            </div>
          </div>

          <div className=''>
            <h3 className='mb-5 text-xl lg:text-2xl'>EXPERIANCE</h3>
            <div className='grid gap-4'>
              {EXPERIANCE.map((link, i) => (
                <article className='bg-bg py-8 px-5 grid gap-3 rounded-xl group hover:bg-white duration-300 transition-colors' key={i}>
                  <h3 className='text-xl text-hightlight font-bold group-hover:text-black'>{link.title}</h3>
                  <label className='font-poppins text-lg group-hover:text-black'>{link.subtitle}</label>
                  <p className='font-poppins group-hover:text-slate-400 text-slate-400 text-sm'>{link.descrption}</p>
                </article>
              ))}
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About