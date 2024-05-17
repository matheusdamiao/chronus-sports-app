'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from './../../../../../public/images/virtual-reality-section-2.webp'


const GameNewPerspective = () => {

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
           <section ref={ref} className='lg:my-[100px] my-[50px] h-full'>
                <motion.div
                    initial='hidden'
                    animate={animationControls}
                    transition={{delay: 0.5, duration: 1}}  
                    variants={TitleAnimation}
                    className='z-50  flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[580px] mx-auto'>
                    <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Games from a <span className='bg-gradient-title-game-perspective'> <br />New Perspective</span>  </motion.h2>                
                </motion.div>
                <div className='relative flex items-center justify-center w-full lg:mt-[33px] mt-[20px] lg:mb-[70px] mb-[35px]'>
                    <span className='bg-blured-game-perspective-section z-10'  />
                   <Image src={img}  className=' z-[80] ' alt=''/>
                </div>
                <h3 className='px-4 lg:px-0  max-w-[582px] mx-auto w-full tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%]'> Experience an unprecedented view of sports with innovative camera settings that offer unique perspectives.</h3>
                
            </section>
  )
}

export default GameNewPerspective
