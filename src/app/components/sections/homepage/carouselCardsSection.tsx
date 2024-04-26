'use client';
import React, { useEffect } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import maradona from './../../../../../public/images/cards-athletes/card-maradona.webp'
import camara from './../../../../../public/images/cards-athletes/card-camara.webp'
import ferreira from './../../../../../public/images/cards-athletes/card-ferreira.webp'
import guido from './../../../../../public/images/cards-athletes/card-guido.webp'
import hulk from './../../../../../public/images/cards-athletes/card-hulk.webp'
import moser from './../../../../../public/images/cards-athletes/card-moser.webp'
import santos from './../../../../../public/images/cards-athletes/card-santos.webp'
import sobral from './../../../../../public/images/cards-athletes/card-sobral.webp'
import Image from 'next/image';
import AutoScroll from "embla-carousel-auto-scroll";


const CarouselCardsSection = () => {

    const cards = [
        maradona,
        camara,
        ferreira,
        guido,
        hulk,
        moser,
        santos,
        sobral,
    ]

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'}, [
        AutoScroll({stopOnInteraction: false, speed: 1.5})
    ]);

    useEffect(() => {
        if (emblaApi) console.log(emblaApi.slidesNotInView())
      }, [emblaApi])

  return (
    <div className='w-full h-full relative py-[50px] overflow-hidden'>
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
        <div className='pt-spacing-4xl lg:mt-[-50px] z-[9999] flex flex-col items-center justify-center gap-spacing-2xl'>
            <h2 className='lg:w-[35%] w-[70%] text-center mx-auto text-primary-base-white font-bold tracking-display text-display-sm leading-display-sm lg:text-display-lg lg:leading-display-lg '>
                Your <span className='bg-gradient-title'>favorite </span> athletes are here
            </h2>
            <p className='lg:w-[30%] w-[80%] text-primary-gray-200 font-thin lg:text-text-md lg:leading-text-md text-text-lg leading-text-xl text-center'>Collect the Cards of your favorite athletes and clubs and track their statistics.</p>
        </div>
        <div className='py-[55px] lg:py-[70px] px-spacing-4xl flex lg:flex-wrap max-w-[950px] w-full lg:justify-center mx-auto gap-[45px] lg:gap-0 flex-wrap'>
            <div className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pr-[30px] '>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Collect history</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center lg:w-[80%] w-[90%]'>Cards especiais e raros de atletas e clubes exclusivos.</p>
                {/* division lines */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
                <div className="hidden lg:block absolute w-[870px] h-[1px] bg-gradient-to-r from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 bottom-0"></div>

            </div>
            <div className='flex flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:mx-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'> Utilization of IoT Data </h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%] '>Indicators guiding preventive measures, such as athlete removal when necessary.</p>
            </div>
            <div className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pl-[30px]'>
                {/* division line */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-t from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 top-0"></div>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Basic Testing</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%]'>Including squats, directional changes, and fatigue assessment.</p>
            </div>
         </div>   
    </div>
  )
}

export default CarouselCardsSection