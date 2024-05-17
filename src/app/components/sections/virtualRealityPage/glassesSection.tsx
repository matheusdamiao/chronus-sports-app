'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from './../../../../../public/images/glasses-sections-up.webp'

const GlassesSection = () => {

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
           <section ref={ref} className='lg:mt-[100px] flex flex-col my-[50px]'>
                <motion.div
                    initial='hidden'
                    animate={animationControls}
                    transition={{delay: 0.5, duration: 1}}  
                    variants={TitleAnimation}
                    className='z-50 order-2 lg:order-1 pt-[20px] lg:pt-0 flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[590px] mx-auto'>
                    <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Creating a <span className='bg-gradient-title-glasses'> Fan-Friendly</span> Stadium Environment </motion.h2>                
                </motion.div>
                <div className='px-[16px] order-1 lg:order-2 relative flex items-center justify-center w-full mt-[43px]'>
                     <span className='bg-glasses-blured bottom-0 '></span>
                    <Image src={img} width={870} className='z-20 ' alt=''/>
                </div>
                <h3 className='px-[30px] order-3 lg:px-0 pt-[30px] lg:mt-[70px] max-w-[582px] w-full mx-auto tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%] '> We enhance the stadium experience, making it more enjoyable and healthyfor fans.</h3>
                <div className='order-4 px-[26px] lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-y-[45px] gap-x-[120px] mx-auto max-w-[1100px] py-[50px] lg:py-[100px]'>
                  <p className='lg:max-w-[480px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Digital Engagement </span> and Fan Interaction Strategies, including exclusive content, promotions, and interactive experiences during broadcasts.
                  </p>

                  <p className='lg:max-w-[480px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Implementation of Security </span> and Transparency Technologies in sports broadcasts to prevent game manipulation.
                  </p>

                </div>
            </section>
  )
}

export default GlassesSection