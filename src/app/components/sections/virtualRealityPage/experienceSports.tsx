'use client'
import { motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from './../../../../../public/images/virtual-reality-section-4.webp'


const ExperienceSports = () => {

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
           <section ref={ref} className='lg:mt-[100px]'>
                <motion.div
                    initial='hidden'
                    animate={animationControls}
                    transition={{delay: 0.5, duration: 1}}  
                    variants={TitleAnimation}
                    className='z-50  flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[550px] mx-auto'>
                    <motion.h2 className='text-display-sm text-primary-base-white leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Experience <span className='bg-gradient-title-experience-sports'>Sports</span> Like Never Before </motion.h2>                
                </motion.div>
                <div className='relative flex items-center justify-center w-full mt-[43px]'>
                    <span className='bg-blured-experience-sports '/>
                    <Image src={img} className='w-full z-20 ' alt=''/>
                </div>
                <h3 className='px-[30px] lg:px-0 pt-[30px] lg:mt-[70px] max-w-[582px] w-full mx-auto tracking-wide text-text-lg leading-text-lg lg:leading-display-xs lg:text-display-xs text-primary-gray-200 text-center lg:w-[90%] '> Explore advancements in the sports experience, from consuming content to training athletes and analyzing performance.</h3>
                <div className='px-[26px] lg:px-0 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-y-[45px] lg:gap-y-[73px] gap-x-[120px] mx-auto max-w-[1100px] py-[50px] lg:py-[100px]'>
                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Ampliação da experiência </span> esportiva com imersão em diversos aspectos.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Avanços notáveis </span>,  desde o consumo de conteúdo até análises de desempenho.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Revolução na vivência </span> esportiva com tecnologia de imersão em realidade mista.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Interação, estatísticas</span>  e informações adicionais em transmissões esportivas.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Experiências únicas </span>  ao assistir a ação de novas perspectivas com câmeras inovadoras.
                  </p>

                  <p className='lg:max-w-[282px] w-full text-text-md leading-text-md text-[#B4BCD0]'>
                    <span className='text-primary-base-white'> Melhorias significativas </span> na experiência dos espectadores.
                  </p>
                </div>
            </section>
  )
}

export default ExperienceSports