import { RiCodeSSlashLine, RiPencilRuler2Line, RiSmartphoneLine, RiWebhookLine } from '@remixicon/react'
import React from 'react'

const Services = () => {
  return (
    <section className='py-24' id='services'>
      <div className='main_container'>
        <h2 className='font-title text-center text-4xl text-hightlight'>SERVICES</h2>
        <p className='font-title text-center text-lg'>SERVICES THAT I PROVIDE</p>

        <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <article className='bg-bg py-16 px-8 rounded-xl group hover:bg-hightlight duration-700 transition-all'>
            <div>
              <RiPencilRuler2Line className='bg-hightlight rounded-full w-14 h-14 p-2 group-hover:bg-black group-hover:text-hightlight text-black' />
              <div className='mt-5 grid gap-4'>
                <h3 className='font-poppins text-xl font-bold group-hover:text-black'>Graphic Designing</h3>
                <p className='group-hover:text-black'>With industry-leading tools and one-click transformations, Photoshop is the first choice for digital image editing and graphic design.</p>
              </div>
            </div>
          </article>

          <article className='bg-bg py-16 px-8 rounded-xl group hover:bg-hightlight duration-700 transition-all'>
            <div>
              <RiWebhookLine className='bg-hightlight rounded-full w-14 h-14 p-2 group-hover:bg-black group-hover:text-hightlight text-black' />
              <div className='mt-5 grid gap-4'>
                <h3 className='font-poppins text-xl font-bold group-hover:text-black'>Web Development</h3>
                <p className='group-hover:text-black'>Passionate about web development and excited to learn more. Developed and maintained web applications using PHP, Next JS, HTML5, CSS3, Tailwind CSS, MySQL database.</p>
              </div>
            </div>
          </article>

          <article className='bg-bg py-16 px-8 rounded-xl group hover:bg-hightlight duration-700 transition-all'>
            <div>
              <RiSmartphoneLine className='bg-hightlight rounded-full w-14 h-14 p-2 group-hover:bg-black group-hover:text-hightlight text-black' />
              <div className='mt-5 grid gap-4'>
                <h3 className='font-poppins text-xl font-bold group-hover:text-black'>Mobile Development</h3>
                <p className='group-hover:text-black'>I'm specialize in creating high-performance, cross-platform mobile applications using React Native.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services