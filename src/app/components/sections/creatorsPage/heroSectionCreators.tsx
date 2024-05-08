import Image from 'next/image'
import React from 'react'
import bgHero1 from './../../../../../public/images/creators-hero-1-desktop.webp'
import bgHero2 from './../../../../../public/images/creators-hero-2-desktop.webp'
import Link from 'next/link'
import ButtonDesignSystem from '../../Button'

const HeroSectionCreators = () => {
  return (
    <div className='relative w-full lg:h-[650px] h-[550px] overflow-hidden'>
       <Image src={bgHero1} alt='' width={460} height={681} className="left-[-80px] top-[-100px] absolute hidden lg:block"/>
       <Image src={bgHero2} alt='' width={460} height={681} className="right-[-103px] top-[-100px] absolute hidden lg:block"/>

      <span className="ellipse-partner-bg-overlay hidden lg:block overflow-hidden"></span>
      <span className="ellipse-creators-desktop hidden lg:block"></span>
      <span className="ellipse-creators-mobile lg:hidden block"></span>
      <div className="flex flex-col items-center w-full gap-spacing-xl lg:px-0 px-spacing-xl z-50 absolute lg:pt-20">
        <h1 className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto">When You Grow, We Grow</h1>
        <h4 className="mx-auto max-w-[530px] lg:text-text-md text-text-lg px-3 lg:px-0 font-thin text-primary-gray-200 text-center">Share free statistics with fans, offer licensed products, NFTs,and exclusive experiences through our Marketplace platform.</h4>
        <Link href='/register/details' className="cursor-pointer z-40"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center lg:mt-[8px] mt-[35px]" /></Link>
      </div>
    </div>
  )
}

export default HeroSectionCreators
