import Image from 'next/image'
import React from 'react'
import track from './../../../../../public/images/track-athlete.webp'
import bg from './../../../../../public/images/bg-vectors-track-section.webp'

const TrackPerformanceSection = () => {
  return (
    <div className='relative flex flex-col max-w-7xl w-full mx-auto py-24'>
  
        <span className='bg-blured-trackPerformanceSection'></span>
        <div className='pt-spacing-4xl lg:mt-[-50px] z-[9999] flex flex-col items-center justify-center gap-spacing-2xl'>
            <h2 className='lg:w-[50%] w-[70%] text-center mx-auto text-primary-base-white font-bold tracking-display text-display-sm leading-display-sm lg:text-display-lg lg:leading-display-lg '>
            Track Your Athlete&apos;s <span className='text-gradient-title'> Performance </span> 
            </h2>
            <p className='lg:w-[50%] w-[80%] text-primary-gray-200 font-thin lg:text-text-md lg:leading-text-md text-text-lg leading-text-xl text-center'>Track your favorite athlete&apos;s performance with dynamic Cards and see their evolution each season.</p>
        </div>
        <div className='flex lg:justify-center mt-[-30px] px-4 pt-10 '>
           
               <Image src={track} alt='' className='z-[888]'  />
            

        </div>   
        <Image src={bg} alt='' className='z-[88] absolute top-[170px] right-[150px]' />
        <div className='py-[55px] lg:py-[70px] px-spacing-4xl flex lg:flex-wrap max-w-[950px] w-full lg:justify-center mx-auto gap-[45px] lg:gap-0 flex-wrap'>
            <div className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pr-[30px] '>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Immersive mixed Reality</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-thin lg:text-center lg:w-[80%] w-[90%]'>Technology for injury prevention and athlete protection.</p>
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

export default TrackPerformanceSection
