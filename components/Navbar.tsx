import React, { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {

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
    <nav className='fixed top-0 sm:my-5 my-2 w-[95%] lg:w-5/6 3xl:w-[1800px] flex justify-between sm:h-[60px] h-[50px] rounded-lg bg-blue-500 text-white items-center sm:p-5 p-2 duration-[300ms]' id='navbar'>
          <div>
            <Link href="/">Logo</Link>
          </div>
          <div className='flex gap-2'>
            <Link href='/dashboard'>Dashboard</Link>
          </div>
        </nav>
  )
}

export default Navbar