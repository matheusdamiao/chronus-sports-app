import Image from 'next/image'
import React from 'react'
import glasses from './../../../../../public/images/glasses-sections-up.webp'
import ButtonDesignSystem from '../../Button'
import chevronPurple from './../../../../../public/icons/chevronPurple.svg'
import whiteMask from './../../../../../public/icons/whiteMask.svg'

const MultiSensorySection = () => {
  return (
    <div className='relative flex flex-col max-w-7xl w-full mx-auto lg:pb-24 p-0'>
        <div className='relative mx-auto'>  
            <span className='bg-glasses-blured bottom-0 '></span>
            <Image src={glasses} alt='' width={870}  className=' relative px-4' />
        </div>
        <div className='pt-spacing-4xl lg:pt-spacing-7xl z-[9999] flex flex-col items-center justify-center gap-spacing-2xl'>
            <h2 className='lg:w-[50%] w-[70%] text-center mx-auto text-primary-base-white font-bold tracking-display text-display-sm leading-display-sm lg:text-display-lg lg:leading-display-lg '>
            Have <span className='text-glasses-gradient'> Multi-sensory </span> Experiences
            </h2>
            <p className='lg:w-[50%] w-[80%] text-primary-gray-200 font-thin lg:text-text-md lg:leading-text-md text-text-lg leading-text-xl text-center'>Revolutionizing the way we experience sports, offering interactivity, statistics, and additional information during broadcasts.</p>
        </div>

        <div className='py-[55px] pb-[60px] lg:pb-[40px] lg:py-[70px] px-spacing-4xl flex lg:flex-wrap max-w-[950px] w-full lg:justify-center mx-auto gap-[45px] lg:gap-0 flex-wrap'>
            <div className='flex relative flex-col gap-spacing-md lg:w-[270px] lg:h-[222px] lg:pb-[40px] lg:items-center lg:justify-center lg:pr-[30px] '>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Clubes</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center lg:w-full w-[90%]'>We provide unique immersions for fans to experience the field and follow their team in an unprecedented way.</p>
                {/* division lines */}
                <div className="hidden lg:block absolute w-[1px] h-[222px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
                <div className="hidden lg:block absolute w-[870px] h-[1px] bg-gradient-to-r from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 bottom-0"></div>

            </div>
            <div className='flex flex-col gap-spacing-md lg:w-[270px] lg:h-[189px] lg:items-center lg:justify-center lg:mx-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'> Streaming </h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%] '>With our technology, broadcasting games becomes exclusive and unparalleled, offering unprecedented experiences to the audience.</p>
            </div>
            <div className='flex relative flex-col gap-spacing-md lg:w-[270px] lg:h-[189px] lg:items-center lg:pt-4 lg:pl-[30px]'>
                {/* division line */}
                <div className="hidden lg:block absolute w-[1px] h-[222px] bg-gradient-to-t from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 top-0"></div>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Federations</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center w-[90%]'> We support competitions with innovation in interaction, revenue, and greater fan engagement.</p>
            </div>
         </div>   
         <ButtonDesignSystem label='Discover Virtual Reality' className='w-[273px] mx-auto bg-button-purple border-none outline-1 outline outline-offset-0 outline-primary-base-white/[0.05] !text-primary-base-white' leftIcon={<Image src={whiteMask} alt='' width={20} height={20}/>}  rightIcon={<Image src={chevronPurple} alt=''  width={20} height={20} />} buttonType={'secondaryGray'} normal={'lg'}/>

    </div>
  )
}

export default MultiSensorySection
