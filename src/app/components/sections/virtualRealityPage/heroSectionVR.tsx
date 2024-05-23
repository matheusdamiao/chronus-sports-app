'use client'
import React from 'react'
import { motion} from 'framer-motion'
import bgImage from './../../../../../public/images/image-bg-virtual-reality-2.webp'
import Image from 'next/image'

const HeroSectionVR = () => {

    const TitleAnimation = {
        hidden: {
          opacity: 0, y: '80px',
        },
        show: {
          opacity: 1, y: '0'
        }
      }

  return (
    <section className="relative lg:pt-10 z-20 lg:pb-5 overflow-y-hidden">
            <span className="bg-blured-hero-vr"/>
            <motion.h1  initial='hidden'  animate='show' variants={TitleAnimation} transition={{duration: 0.8}} className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto"> Be Part of the Future <br /> of Sports </motion.h1>
            <motion.h4 initial='hidden'  animate='show'  variants={TitleAnimation} transition={{duration: 1}} className="mx-auto max-w-[530px] lg:text-text-md text-text-lg px-3 lg:px-0 pt-5 lg:pt-5 font-thin text-primary-gray-200 text-center"> We&apos;re revolutionizing how you experience sports, offering interactivity, statistics, and additional information during games. </motion.h4>
            <motion.div initial='hidden'  animate='show'  variants={TitleAnimation} transition={{duration: 1.2}} className="relative flex items-center justify-center">
                <Image src={bgImage} width={821.25} height={361.68} alt='' className="z-[30]"/>
                <span className="bg-blured-hero-image"></span>
            </motion.div>
    </section> 
  )
}

export default HeroSectionVR
