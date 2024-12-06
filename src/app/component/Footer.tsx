import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-stone-500" >
      <footer className='max-w-7xl mx-auto  h-28 flex flex-col md:flex md:flex-row items-center  justify-between md:py-0 py-3  px-5'>
        <div className='flex items-center  gap-5'>
          <Image src="/images/my 3.jpg" alt="pic" width={100} height={100} className="w-16 h-16 rounded-[50%]"/>
          <div className="border-r-2 h-12 "></div>
          <p className='text-white font-mono'>© Made By Ali Asghar</p>
        </div>
        <div className='flex items-center justify-around gap-7'>
          <Link href="" className='text-blue-700'><Linkedin/> </Link>
          <Link href="" className='text-blue-900'><Facebook/> </Link>
          <Link href="" className=''><Github/> </Link>
          <Link href="" className='text-blue-300'><Twitter/> </Link>

        </div>
      </footer>
    </div>
  )
}

export default Footer
