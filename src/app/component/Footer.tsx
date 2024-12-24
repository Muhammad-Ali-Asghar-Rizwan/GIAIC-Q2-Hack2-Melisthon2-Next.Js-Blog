import Image from 'next/image'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-zinc-800" >
      <footer className='max-w-7xl mx-auto  h-28 flex flex-col md:flex md:flex-row items-center  justify-between md:py-0 py-3  px-5'>
        <div className='flex items-center  gap-5'>
          <Image src="/images/my 3.jpg" alt="pic" width={100} height={100} className="w-16 h-16 rounded-[50%]"/>
          <div className="border-r-2 h-12 "></div>
          <p className='text-white font-mono'>© Made By Ali Asghar</p>
        </div>
        <div className='flex items-center justify-around gap-7'>
          <Link href="" className='bg-blue-700 text-white rounded-lg text-[35px]'><CiLinkedin/> </Link>
          <Link href="" className='text-[35px] bg-blue-700 text-white rounded-[50%]'>  <FaFacebook /></Link>
          <Link href="" className='text-[35px] bg-black text-white rounded-[50%]'> <VscGithub className=']'/> </Link>
          <Link href="" className='text-[35px]  text-red-700 rounded-l-lg   bg-white'><FaInstagramSquare />          </Link>

        </div>
      </footer>
    </div>
  )
}

export default Footer
