'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import heroDesktop from './../../../../../public/images/hero-home-desk.webp'
import heroMobile from './../../../../../public/images/home-mobile-up.webp'
import ButtonDesignSystem from '../../Button'
import { motion} from 'framer-motion'

const HeroSectionHome = () => {

  const TitleAnimation = {
    hidden: {
      opacity: 0, y: '80px',
    },
    show: {
      opacity: 1, y: '0'
    }
  }

  return (
    <>
      <span className="ellipse hidden lg:block"></span>
      <span className="ellipse-mobile lg:hidden block"></span>
      <motion.div 
        className="flex flex-col items-center w-full gap-spacing-xl px-spacing-xl">
        <motion.h1  initial='hidden'  animate='show' variants={TitleAnimation} transition={{duration: 0.8}} className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto">Welcome to the Largest Sports Platform in the World!</motion.h1>
        <motion.h4 initial='hidden'  animate='show'  variants={TitleAnimation} transition={{duration: 1}} className="mx-auto max-w-[530px] lg:text-text-md text-text-lg px-3 lg:px-0 font-thin text-primary-gray-200 text-center">CHRONUS Sports is your gateway to the most comprehensive, diverse, and exciting sports content platform in the World.</motion.h4>
        <motion.div  initial='hidden'  animate='show'  variants={TitleAnimation} transition={{duration: 1.2, stiffness: 500}}><Link href='/register/details' className="cursor-pointer z-40"> <ButtonDesignSystem label="Register now" buttonType={"primary"} normal={"lg"} className="border-none self-center lg:mt-[8px] mt-[35px]" /></Link></motion.div>
      </motion.div>
      <div className="lg:mx-auto lg:max-h-[890px] relative lg:mb-[75px] lg:mt-[100px]">
        <span className="blur-desktop-bg-hero-home absolute lg:block hidden"></span>
        <Image src={heroDesktop} priority alt='' width={1146} height={453.45} className="relative z-20 hidden lg:block flex-0"/>
        <div className="w-full h-[330px] mt-[60px] pb-[50px]  lg:py-0 lg:hidden relative flex items-center justify-center">
           <span className="blur-mobile-bg-hero-home absolute lg:hidden"></span>
           <Image src={heroMobile} priority alt='' className="max-w-[500px] w-full block lg:hidden z-[99]"/>
        </div>
      </div>
    </>
  )
}

export default HeroSectionHome
