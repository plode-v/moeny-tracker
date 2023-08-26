'use client'
import React from 'react'
import Navbar from '../components/Navbar'


const LandingPage = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex w-full lg:w-5/6 3xl:w-[1800px] flex-col items-center justify-center px-5'>

        {/* navbar section */}
        <Navbar />
        <div className='h-[50px] sm:h-[60px] sm:my-5 my-2' />

        {/* hero banner section */}
        <section className='grid grid-cols-3 w-full h-[400px]' id='hero-banner'>
          <div className='col-span-2 border'>
            left
          </div>
          <div className='col-span-1 border'>
            right
          </div>
        </section>

        {/* partners section */}
        <section id='partners' className='h-[500px] border w-full'>
          <div>partners/tech stacks</div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage