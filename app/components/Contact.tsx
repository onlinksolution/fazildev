import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='py-20' id='contact'>
      <div className='main_container'>
        <div className='bg-bg py-20 px-10 rounded-xl text-center grid gap-8 md:grid-cols-3 items-center'>
          <h2 className='text-hightlight text-3xl'>Start a project</h2>
          <p className='font-poppins text-sm text-gray-300'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
          <div>
            <Link href='mailto:contact.mhdfazil@gmail.com' className='border-2 border-hightlight py-3 px-4 rounded-xl hover:text-black hover:bg-hightlight duration-300 transition-all hover:font-bold'>Let's do this</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact