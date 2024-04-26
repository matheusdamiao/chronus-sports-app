import React from 'react'
import ButtonDesignSystem from '../../Button'
import Link from 'next/link'
import logo from './../../../../../public/images/logo-cta-section.svg'
import bg from './../../../../../public/images/bg-cta-section.webp'
import Image from 'next/image'

const CtaSection = () => {
  return (
    <div className='relative flex flex-col max-w-7xl lg:h-[600px] h-full w-full mx-auto py-24'>
      <div className='absolute lg:top-[150px] top-[150px] bg-[#010317] right-0 left-0 mx-auto  lg:h-[554px] w-full h-full'>
        <div className='relative w-full h-full '>
          <Image src={bg} alt='' className='bg-[#010317] object-cover' fill/>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center lg:gap-4'>
       
        <Image src={logo} alt='' className='lg:w-[125px] w-[100px] z-[88]'  />
        <h2 className='z-[999] lg:w-[50%] lg:text-display-xl lg:leading-display-xl w-[70%] text-display-md leading-display-md tracking-display text-primary-base-white font-bold text-center'>Be part of the Future of Sports.</h2>
        <Link href='/register/details' className="lg:pt-4 cursor-pointer z-40"> <ButtonDesignSystem label="Register now" buttonType={"primary"} normal={"lg"} className="border-none self-center lg:mt-[8px] mt-[20px]" /></Link>
      </div>
    </div>
  )
}

export default CtaSection
