'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from './../../../../../public/images/virtual-reality-section-1.webp'


const DiveIntoTheGame = () => {

    const ref = useRef<HTMLDivElement>(null)
    const isView = useInView(ref);
    const animationControls = useAnimation();
  
    const TitleAnimation = {
      hidden: {
        opacity: 0, y: '80px',
      },
      show: {
        opacity: 1, y: '0'
      }
    }

    useEffect(()=>{
        if(isView){
            animationControls.start('show')
        }
   // eslint-disable-next-line
    },[isView])


  return (
           <section ref={ref} className='mt-[100px]'>
                <motion.div
                    initial='hidden'
                    animate={animationControls}
                    transition={{delay: 0.5, duration: 1}}  
                    variants={TitleAnimation}
                    className='z-50  flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[580px] mx-auto'>
                    <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'><span className='bg-gradient-title-dive-into-game'>Dive into the Game</span> Anytime, Anywhere</motion.h2>                
                </motion.div>
                <Image src={img} className='w-full lg:mt-[-20px] mt-[20px] ' alt=''/>
                <h3 className='px-[30px]  lg:mt-[-90px] max-w-[582px] w-full mx-auto tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%] font-thin'> CHRONUS Sports VR brings the game to your home, providing real-time statistics and an immersive experience for remote fans.</h3>
                <div className='px-[26px] lg:px-0 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-y-[45px] lg:gap-y-[73px] gap-x-[120px] mx-auto max-w-[1100px]  py-[100px]'>
                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> We offer a comprehensive </span> solution that prioritizes both fan safety and immersive experience.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Enjoy an immersive experience </span>  and real-time statistics from the comfort of your home.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> We enhance </span> the stadium environment, making it enjoyable and healthier for attending fans.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> CHRONUS Sports VR </span> is dedicated to ensuring that safety is as important as fun.
                  </p>


                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Be part of a revolution </span> in the way we experience sports, with safety and immersion for everyone.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> We provide  </span>  a unique experience to all fans, whether they are at the stadium or at home.
                  </p>
                </div>
            </section>
  )
}

export default DiveIntoTheGame
