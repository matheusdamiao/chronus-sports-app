import Image from 'next/image'
import React from 'react'
import logoDesktop from './../../../public/images/logo-main-menu-desktop.png'
import logoMobile from './../../../public/images/logo-main-menu-mobile.png'

const MainMenu = () => {
  return (
    <div className='h-[80px] w-full bg-transparent absolute top-0 z-[99999] '>
       <div className='max-w-7xl w-full px-spacing-xl lg:px-spacing-4xl py-[24px] lg:py-[18px] mx-auto'> 
          <Image src={logoDesktop} alt='' className='hidden lg:block'/>
          <Image src={logoMobile} alt='' width={43} height={43} className='lg:hidden block'/>  

       </div>
    </div>
  )
}

export default MainMenu
