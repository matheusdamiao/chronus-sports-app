import React from 'react'
import categories from './../../../../../public/images/sports-categories.webp'
import categories2 from './../../../../../public/images/categories-ports-upgrade.webp'

import Image from 'next/image'

const SportsCategoriesSection = () => {
  return (
    <div className=' flex flex-col max-w-7xl w-full mx-auto lg:py-36 p-0'>
        <div className='relative'>
            <span className='bg-blue-blured'></span>
            <div className='pt-spacing-4xl lg:mt-[-50px] z-[9999] flex flex-col items-center justify-center gap-spacing-2xl'>
                <h2 className='lg:w-[35%] w-[70%] text-center mx-auto text-primary-base-white font-bold tracking-display text-display-sm leading-display-sm lg:text-display-lg lg:leading-display-lg '>
                    Athletes of all Sports <span className='bg-gradient-categories-title'> Categories </span> 
                </h2>
                <p className='lg:w-[50%] w-[80%] text-primary-gray-200 font-thin lg:text-text-md lg:leading-text-md text-text-lg leading-text-xl text-center'>Whatever your favorite sport, CHRONUS Sports is your destination to follow all athletes from every discipline, all in one place. Explore from Olympic athletes to emerging talents.</p>
            </div>
            <div className='flex pt-[36px] lg:justify-center  '>
                <div className='relative lg:w-[930px] lg:h-[147px] w-[546px] h-[90px] mx-auto'>
                   <Image src={categories2} alt=''   className='object-cover w-full' fill  />
                </div>
            </div>   
         </div>
      
    </div>
  )
}

export default SportsCategoriesSection
