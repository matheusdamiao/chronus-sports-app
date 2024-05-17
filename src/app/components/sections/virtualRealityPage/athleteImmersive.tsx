'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from './../../../../../public/images/virtual-reality-section-3.webp'


const AthleteImmersive = () => {

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
           <section ref={ref} className='lg:mt-[100px] my-[50px] h-full'>
                <motion.div
                    initial='hidden'
                    animate={animationControls}
                    transition={{delay: 0.5, duration: 1}}  
                    variants={TitleAnimation}
                    className='z-50  flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[700px] mx-auto'>
                    <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'> Enhancing <span className='bg-gradient-title-athlete-immersive'>Athlete Safety </span> with Immersive Technology </motion.h2>                
                </motion.div>
                <div className='relative flex items-center justify-center w-full lg:mt-[33px] mt-[20px] lg:mb-[70px] mb-[35px]'>
                   <Image src={img}  className='z-[80]' alt=''/>
                </div>
                <h3 className='px-4 lg:px-0  max-w-[582px] mx-auto w-full tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%]'> Learn how our technology uses tests and data to prevent injuries and protect athletes.</h3>
                <div className='px-[26px] lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-y-[45px] gap-x-[120px] mx-auto max-w-[1100px] py-[55px]'>
                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Immersive mixed reality </span> technology for injury prevention and athlete protection.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Utilization of IoT data </span>  for indicators guiding preventive measures, such as athlete removal when necessary.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Basic testing </span>, including squats, directional changes, and fatigue assessment.
                  </p>
                </div>
            </section>
  )
}

export default AthleteImmersive
