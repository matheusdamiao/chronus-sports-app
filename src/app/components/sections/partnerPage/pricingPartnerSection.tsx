'use client';
import { AnimatePresence, motion } from 'framer-motion'
import { transform } from 'next/dist/build/swc';
import Link from 'next/link';
import React, { useState } from 'react'
import ButtonDesignSystem from '../../Button';

const PricingPartnerSection = () => {
  const [isShare, setIsShare] = useState(true);
  const [isSubscription, setIsSubscription] = useState(false);

  const toggleVariants = {
    open: { transform: 'translateX(0px)' },
    closed: {  transform: 'translateX(20px)' },
  }

  const modalVariants = {
    open: { opacity: '1',  x: '0px' },
    closed: { opacity: '0', x: '10px' },
    exit: { opacity: '0', x: '-10px'}
  }

  return (
    <div className='flex flex-col py-[100px] h-full text-primary-base-white'>
         <div className='flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[570px] mx-auto'>
            <h2 className='text-display-sm leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Plans & Pricing</h2>
            <h3 className='tracking-wide text-text-lg lg:text-text-md text-primary-gray-200 text-center w-full inline-flex font-thin leading-text-lg'>Chronus Sports is your opportunity to own, sell, and trade official digital collectible NFTs of the world's best professional athletes.</h3>
        </div>
        <div className='flex items-center justify-center gap-spacing-lg mx-auto pt-[40px]'>
          <p>Share</p>
          <motion.div className={`${!isShare && 'toggle-subscription'} toggle-wrapper block relative w-full`} onClick={()=> setIsShare(!isShare)}>
            <motion.span variants={toggleVariants}  transition={{ type: "spring", bounce: 0.25 }} animate={isShare ? 'open' : 'closed'} className='w-[20px] h-[20px] flex-shrink-0 absolute bg-primary-base-white rounded-full'></motion.span>
          </motion.div>
          Subscription
        </div>

        <div className={`flex items-center justify-center pt-[73px] gap-[30px] relative ${isShare ? 'lg:h-[300px] h-[900px]': 'lg:h-[700px] h-[1600px]'} `}>
            <AnimatePresence>

            {isShare && 
              <motion.div
              className='flex items-center justify-center lg:flex-row flex-col flex-wrap gap-[30px] absolute lg:px-0 px-4 pb-[150px] top-[100px]'
              key={1}
              variants={modalVariants}
              initial='closed'
              animate='open'
              exit='exit'
              transition={{ type: "spring", bounce: 0.25 }}
              >
                <motion.div
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>Beginner</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>75-25</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>per year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>

                <motion.div
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg border-[#F92C5D] border-[1px] '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>Featured</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>85-15</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 3 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none focus:ring-secondary-pink-500 bg-secondary-pink-500 hover:bg-secondary-pink-700 border-secondary-pink-500 self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>

                <motion.div
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>MVP</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>90-10</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 5 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>
              </motion.div>
            } 
          </AnimatePresence>
          <AnimatePresence>
            {!isShare &&
              <motion.div
              initial={{opacity: '0', x: '-10px'}}
              animate={{opacity: '1', x: '0px'}}  
              exit={{opacity: '0', x: '-10px'}}
              transition={{ type: "spring", bounce: 0.25, duration: '1' }}
              className='flex items-center justify-center flex-wrap lg:flex-row flex-col  max-w-[1170px] lg:px-0 px-4 gap-[30px] pb-[150px] absolute top-[100px]'
                >
                <motion.div
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>Beginner</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>50-50</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>per year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>

                <motion.div
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>Featured</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>60-40</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 2 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none focus:ring-secondary-pink-500 bg-secondary-pink-500 hover:bg-secondary-pink-700 border-secondary-pink-500 self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>

                <motion.div
                  key={6}
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>MVP</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>70-30</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 3 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center w-full lg:w-[126px] h-[44px]" /> </Link>

                  </div>
                </motion.div>


                <motion.div
                  key={7}
                  className='lg:w-[770px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pb-2 pricing-cards-bg border-[#30D89B] border-[1px] '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>All-Stars</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>80-20</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 4 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[708px] w-[80%] h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="bg-secondary-green-500 border-none focus:ring-secondary-green-600 hover:bg-secondary-green-700 self-center lg:w-[126px] w-full h-[44px]" /> </Link>

                  </div>
                </motion.div>


                <motion.div
                  key={8}
                  className='lg:w-[370px] w-full lg:h-[358px] h-[315px] px-[30px] pt-[24px] pricing-cards-bg '>
                  <div className='flex flex-col font-semibold text-[32px] leading-display-md'>
                    <h3>Hall of Fame</h3>
                    <div className='pt-[17px] flex items-center'> 
                      <h4 className='text-[32px] font-medium'>90-10</h4><span className='font-medium text-text-xl leading-text-xl'>%</span><small className='text-primary-gray-400 text-text-sm leading-text-sm pl-[7px]'>every 5 year</small>
                    </div>
                    <h5 className='text-text-md leading-text-md font-thin pt-2 text-primary-gray-200'>Explore the platform and power small, personal projects.</h5>
                    <span className='lg:w-[308px] w-full h-[1px] bg-[#332F5C] mt-[23px] mb-[30px]'></span>
                    <Link href='/register/details' className="cursor-pointer z-40 flex-0 flex-grow-0 flex-shrink-0"> <ButtonDesignSystem label="Get Started" buttonType={"primary"} normal={"lg"} className="border-none self-center lg:w-[126px] w-full h-[44px]" /> </Link>

                  </div>
                </motion.div>
              </motion.div>
            }
          </AnimatePresence>
          
        </div>
    </div>
  )
}

export default PricingPartnerSection
