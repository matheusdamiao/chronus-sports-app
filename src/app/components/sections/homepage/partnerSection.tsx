import React from 'react'
import fpf from './../../../../../public/images/logos-partners/fpf.svg'
import abrafarma from './../../../../../public/images/logos-partners/abrafarma.svg'
import cbf from './../../../../../public/images/logos-partners/cbf.svg'
import sac from './../../../../../public/images/logos-partners/sac2.svg'
import inovabra from './../../../../../public/images/logos-partners/inovabra.svg'
import paguemenos from './../../../../../public/images/logos-partners/pague.svg'  
import websummit from './../../../../../public/images/logos-partners/websummit.svg'
import f1 from './../../../../../public/images/logos-partners/f1.svg'
import businessfrance from './../../../../../public/images/logos-partners/business_france.svg'

import Image from 'next/image'

const PartnerSection = () => {
  return (
    <div className='max-w-7xl w-full m-auto lg:pt-0 lg:pb-[100px] pt-[30px] pb-[100px] lg:px-0 px-4'>
      <h3 className='text-text-md text-primary-gray-200 text-center pb-[50px] px-spacing-5xl lg:px-0 w-[85%] mx-auto lg:w-full'>Join the world&apos;s best companies and be part of the future of Sports.</h3>
      <div className='lg:flex hidden flex-wrap items-center justify-center max-w-[890px] mx-auto gap-[50px] mix-blend-luminosity opacity-40'>
      {/* desktop order */}
        <div className='flex flex-wrap items-center justify-center gap-[52px] lg:gap-[141px]'>
          <Image src={abrafarma} alt='logo' width={73.74} height={45.34} className=''/>
          <Image src={fpf} alt='logo' width={48.557} height={48.557} className=' mx-auto '/>
          <Image src={cbf} alt='logo' width={35.58} height={48.83} className=' mx-auto'/>
          <Image src={sac} alt='logo' width={40.655} height={49.537} className=''/>
          <Image src={inovabra} alt='logo' width={95.415} height={38.802} className=' w-[95px]'/>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[52px] lg:gap-[141px] '>
          <Image src={paguemenos} alt='logo' width={84.123} height={23.047} className=''/>
          <Image src={websummit} alt='logo' className='' width={63.542} height={32.07}/>
          <Image src={f1} alt='logo' width={80.357} height={20.089} className=''/>
          <Image src={businessfrance} alt='logo' className='' width={48.183} height={30.022}/>
        </div>   
      </div>
    {/* mobile order */}
      <div className='flex lg:hidden flex-wrap items-center justify-center max-w-[890px] mx-auto gap-[50px] mix-blend-luminosity opacity-40'>
        <div className='flex flex-wrap items-center justify-center gap-[52px] lg:gap-[141px]'>
          <Image src={abrafarma} alt='logo' width={73.74} height={45.34} className='grayscale'/>
          <Image src={fpf} alt='logo' width={48.557} height={48.557} className='grayscale mx-auto '/>
          <Image src={cbf} alt='logo' width={35.58} height={48.83} className='grayscale mx-auto'/>
          <Image src={sac} alt='logo' width={40.655} height={49.537} className='grayscale'/>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[52px] lg:gap-[141px]'>
          <Image src={businessfrance} alt='logo' className='grayscale' width={48.183} height={30.022}/>
          <Image src={inovabra} alt='logo' width={95.415} height={38.802} className='grayscale w-[95px]'/>
          <Image src={paguemenos} alt='logo' width={84.123} height={23.047} className='grayscale-[50%] ' />
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[52px] lg:gap-[141px]'>
          <Image src={websummit} alt='logo' className='grayscale' width={63.542} height={32.07}/>
          <Image src={f1} alt='logo' width={80.357} height={20.089} className='grayscale'/>
        </div>   
      </div>
      
    </div>
  )
}

export default PartnerSection

