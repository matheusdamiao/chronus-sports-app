'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import face1 from './../../../../../public/images/faces-virtual-reality/face-1.webp'
import face2 from './../../../../../public/images/faces-virtual-reality/face-2.webp'
import face3 from './../../../../../public/images/faces-virtual-reality/face-3.webp'
import face4 from './../../../../../public/images/faces-virtual-reality/face-4.webp'
import face5 from './../../../../../public/images/faces-virtual-reality/face-5.webp'
import face6 from './../../../../../public/images/faces-virtual-reality/face-6.webp'
import face7 from './../../../../../public/images/faces-virtual-reality/face-7.webp'
import face8 from './../../../../../public/images/faces-virtual-reality/face-8.webp'
import face9 from './../../../../../public/images/faces-virtual-reality/face-9.webp'
import face10 from './../../../../../public/images/faces-virtual-reality/face-10.webp'
import face11 from './../../../../../public/images/faces-virtual-reality/face-11.webp'
import face12 from './../../../../../public/images/faces-virtual-reality/face-12.webp'
import face13 from './../../../../../public/images/faces-virtual-reality/face-13.webp'
import face14 from './../../../../../public/images/faces-virtual-reality/face-14.webp'

import vr from './../../../../../public/images/faces-virtual-reality/vr-chronus.webp'

const FacesVirtualReality = () => {


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
            className='z-50  flex flex-col items-center justify-center px-[28px] gap-[21px] mx-auto'>
            <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'> Your <span className='bg-gradient-title-faces'> Virtual Avatar</span>, <br className='lg:hidden block' /> Your Way  </motion.h2>                
            <h3 className='lg:px-0 pt-[20px]  max-w-[720px] w-full mx-auto tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%] '> Create a customized avatar with your face, choose clothing and accessories, including wheelchairs and prosthetics.</h3>
        </motion.div>
        <div className='relative flex items-center justify-center flex-col mt-[70px] w-full'>
            <span className='bg-blured-faces-virtual-reality top-6' />
            <div className='flex gap-[18px] z-40 '>
                <Image src={face1} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face2} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face3} className='flex-0 grow-0 lg:w-[160px] w-[51px]'  alt=''/>
                <Image src={face4} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face5} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
            </div>

            <div className='flex gap-[18px] z-40'>

                <Image src={face6}  className='flex-0 grow-0 lg:w-[160px] w-[51px]'alt=''/>
                <Image src={face7} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>

                 <Image src={vr}  className='flex-0 lg:w-[322px] w-[103.96px]' alt=''/>    

                <Image src={face8} className='flex-0 grow-0 flex-shrink-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face9} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
               
            </div>


            <div className='flex gap-[18px] z-40'>
                <Image src={face10} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face11} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face12} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face13} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
                <Image src={face14} className='flex-0 grow-0 lg:w-[160px] w-[51px]' alt=''/>
            </div>
        </div>
    </section>
  )
}

export default FacesVirtualReality
