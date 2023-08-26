'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { SignInButton, SignUpButton } from "@clerk/nextjs"


const LandingPage = () => {

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar')!.style.top = "0";
      } else {
        document.getElementById('navbar')!.style.top = '-100px'
      }
      
      prevScrollpos = currentScrollPos;
    }
  }, [])

  return (
    <div className='flex justify-center items-center'>
      <div className='flex w-full lg:w-5/6 3xl:w-[1800px] flex-col items-center justify-center px-5'>

        {/* navbar section */}
        <nav className='fixed top-0 sm:my-5 my-2 w-[95%] lg:w-5/6 3xl:w-[1800px] flex justify-between sm:h-[60px] h-[50px] rounded-lg bg-blue-500 text-white items-center sm:p-5 p-2 duration-[300ms]' id='navbar'>
          <div>
            <Link href="/">Logo</Link>
          </div>
          <div className='flex gap-2'>
            <SignInButton afterSignInUrl='/dashboard' mode='modal'>
              <p className='bg-white text-black sm:py-2 sm:px-3 p-1 text-[0.75rem] sm:text-[1rem] rounded-md cursor-pointer'>Sign In</p>
            </SignInButton>
              <SignUpButton afterSignInUrl='/dashboard' mode='modal'>
                <p className='bg-white text-black sm:py-2 sm:px-3 p-1 text-[0.75rem] sm:text-[1rem] rounded-md cursor-pointer'>Sign Up</p>
              </SignUpButton>
          </div>
        </nav>
        <div className='h-[50px] sm:h-[60px] sm:my-5 my-2'>

        </div>

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