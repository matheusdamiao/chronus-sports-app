'use client';
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import card1 from './../../../../../public/images/cards-athletes/Frame-34886.webp'
import card2 from './../../../../../public/images/cards-athletes/Frame-34888.webp'
import card3 from './../../../../../public/images/cards-athletes/Frame-34889.webp'
import card4 from './../../../../../public/images/cards-athletes/Frame-34890.webp'
import card5 from './../../../../../public/images/cards-athletes/Frame-34891.webp'
import card6 from './../../../../../public/images/cards-athletes/Frame-34892.webp'
import card7 from './../../../../../public/images/cards-athletes/Frame-35027.webp'


import Image from 'next/image';
import AutoScroll from "embla-carousel-auto-scroll";
import { useAnimation, useInView, motion } from 'framer-motion';


const CarouselCardsSection = () => {

    const cards = [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
    ]

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'}, [
        AutoScroll({stopOnInteraction: false, speed: 1.5})
    ]);

    // useEffect(() => {
    //     if (emblaApi) console.log(emblaApi.slidesNotInView())
    //   }, [emblaApi])

    //   animation
      const ref = useRef<HTMLDivElement>(null)

      const isView = useInView(ref);
      const animationControls = useAnimation();
    
      const TitleAnimation = {
        hidden: {
          opacity: 0, y: '120px',
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
    <div className='w-full h-full relative pt-[50px]'>
        <span className='bg-gradient-carousel'></span>
       
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {cards.map((v, index) => (
                    <div className="embla__slide " key={index} >
                        <Image src={v} alt="" className='lg:hover:scale-125 hover:scale-110 transition-transform'/>
                    </div>
                ))}
                </div>
            </div>
        </section>
        <motion.div
         initial='hidden'
         animate={animationControls}
         transition={{delay: 0.2, duration: 1}}
         variants={TitleAnimation}
         ref={ref} className='pt-spacing-4xl lg:mt-[-100px] z-[9999] flex flex-col items-center justify-center gap-spacing-2xl'>
            <h2 className='w-full text-center mx-auto text-primary-base-white font-bold tracking-display text-display-sm leading-display-sm lg:text-display-lg lg:leading-display-lg '>
                Your <span className='bg-gradient-title'>favorite </span> athletes <br/> are here
            </h2>
            <p className='lg:w-[30%] xl:w-[30%] sm:w-[50%] w-[70%] text-primary-gray-200 font-thin lg:text-text-md lg:leading-text-md text-text-lg leading-text-xl text-center'>Collect the Cards of your favorite athletes and clubs and track their statistics.</p>
        </motion.div>

        {/* text cards */}
        <div className='py-[55px] lg:py-[70px] px-spacing-4xl flex lg:flex-wrap max-w-[950px] w-full lg:justify-center mx-auto gap-[45px] lg:gap-0 flex-wrap'>
            <motion.div
                 initial='hidden'
                 variants={{
                 hidden: {opacity: 0, y: '20px'},
                 show: {opacity: 1, y: 0,}
                 }}
                 animate={animationControls}
                 transition={{delay: 0.8, duration: 1}} className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pr-[30px] '>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Collect history</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center lg:w-[80%] w-[90%]'>Cards especiais e raros de atletas e clubes exclusivos.</p>
                {/* division lines */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
                <div className="hidden lg:block absolute w-[870px] h-[1px] bg-gradient-to-r from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 bottom-0"></div>

            </motion.div>
            <motion.div
                 initial='hidden'
                 variants={{
                 hidden: {opacity: 0, y: '20px'},
                 show: {opacity: 1, y: 0,}
                 }}
                 animate={animationControls}
                 transition={{delay: 1, duration: 1}} className='flex flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:mx-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'> Utilization of IoT Data </h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%] '>Indicators guiding preventive measures, such as athlete removal when necessary.</p>
            </motion.div>
            <motion.div
             initial='hidden'
             variants={{
             hidden: {opacity: 0, y: '20px'},
             show: {opacity: 1, y: 0,}
             }}
             animate={animationControls}
             transition={{delay: 1.2, duration: 1}}
             className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pl-[30px]'>
                {/* division line */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-t from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 top-0"></div>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Basic Testing</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%]'>Including squats, directional changes, and fatigue assessment.</p>
            </motion.div>
         </div>   
    </div>
  )
}

export default CarouselCardsSection
