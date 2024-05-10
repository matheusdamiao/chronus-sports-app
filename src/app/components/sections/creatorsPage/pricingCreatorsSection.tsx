'use client';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import React, { useState } from 'react'
import ButtonDesignSystem from '../../Button';
import lightningOrange from './../../../../../public/icons/lightning-orange.svg'
import check from './../../../../../public/icons/check-orange.svg'
import checkPink from './../../../../../public/icons/check-pink.svg'

import lightningPink from './../../../../../public/icons/lightning-pink.svg'

import Image from 'next/image';

const PricingCreatorsSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
    <div className='flex flex-col lg:pt-[200px] pt-[100px] h-full text-primary-base-white'>
         <div className='flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[570px] mx-auto'>
            <h2 className='text-display-sm leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Plans & Pricing</h2>
            <h3 className='tracking-wide text-text-lg lg:text-text-md text-primary-gray-200 text-center w-full inline-flex font-thin leading-text-lg'>Chronus Sports is your opportunity to own, sell, and trade official digital collectible NFTs of the world&apos;s best professional athletes.</h3>
        </div>
        <div className='flex items-center justify-center gap-spacing-lg mx-auto pt-[40px]'>
          <p className={`${isAnnual ? 'text-primary-base-white': 'text-primary-gray-400'}`}>Annual</p>
          <motion.div className={`${isAnnual ? 'bg-secondary-orange-500' : '!bg-secondary-pink-500'} toggle-creators-pricing-wrapper block relative w-full`} onClick={()=> setIsAnnual(!isAnnual)}>
            <motion.span variants={toggleVariants}  transition={{ type: "spring", bounce: 0.25 }} animate={isAnnual ? 'open' : 'closed'} className='w-[20px] h-[20px] flex-shrink-0 absolute bg-primary-base-white rounded-full'></motion.span>
          </motion.div>
          <p className={`${!isAnnual ? 'text-primary-base-white': 'text-primary-gray-400'}`}>Monthly</p>
        </div>

        <div className={`flex items-center justify-center lg:pt-[65px] gap-[30px] top-0 relative ${isAnnual ? 'lg:h-[500px] h-[900px]': 'lg:h-[500px] h-[800px]'} `}>
            <AnimatePresence>

            {isAnnual && 
              <motion.div
              className='flex items-center justify-center lg:flex-row flex-col lg:w-[600px] w-full flex-wrap absolute lg:px-0 px-4 pb-[150px] top-[50px]'
              key={1}
              variants={modalVariants}
              initial='closed'
              animate='open'
              exit='exit'
              transition={{ type: "spring", bounce: 0.25 }}
              >
                <motion.div
                  className='lg:w-[290px] w-full lg:h-[380px] h-full  '>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col lg:items-center lg:justify-center'>
                      <div className='flex flex-col w-[30px] h-[30px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={lightningOrange} alt='' width={15} height={15}/>
                      </div>
                      <h4 className='text-secondary-orange-500 first-letter:font-semibold text-text-xs leading-text-xs pt-[10px]'>Free Pass</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$0</h3>
                      <p className='text-primary-gray-400 text-text-2xs leading-text-2xs  pt-[5px]'>Lifetime access.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='mt-[20px] py-[7px] font-semibold text-text-2xs leading-text-2xs px-[11px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                  </div>
                </motion.div>

                <motion.div
                  className='lg:w-[290px] w-full lg:h-[380px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col lg:items-center lg:justify-center'>
                      <div className='flex flex-col w-[30px] h-[30px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={lightningOrange} alt='' width={15} height={15}/>
                      </div>
                      <h4 className='text-secondary-orange-500 font-semibold text-text-xs leading-text-xs pt-[10px]'>Most Popular</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$10</h3>
                      <p className='text-primary-gray-400 text-text-2xs leading-text-2xs pt-[5px]'>Billed annually.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='mt-[20px] !font-semibold py-[7px] text-text-2xs leading-text-2xs px-[11px] !rounded-sm border-none !text-primary-brand-900 !bg-secondary-orange-500 w-full'/>

                  </div>
                </motion.div>

              </motion.div>
            } 
          </AnimatePresence>
          <AnimatePresence>
            {!isAnnual &&
              <motion.div
              initial={{opacity: '0', x: '-10px'}}
              animate={{opacity: '1', x: '0px'}}  
              exit={{opacity: '0', x: '-10px'}}
              transition={{ type: "spring", bounce: 0.25, duration: '1' }}
              className='flex items-center justify-center flex-wrap lg:flex-row flex-col  max-w-[1170px] lg:px-0 px-4 gap-[30px] pb-[150px] absolute top-[50px]'
                >
                
                <motion.div
                  className='lg:w-[290px] w-full lg:h-[380px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col lg:items-center lg:justify-center'>
                      <div className='flex flex-col w-[30px] h-[30px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={lightningPink} alt='' width={15} height={15}/>
                      </div>
                      <h4 className='text-secondary-pink-500 font-semibold text-text-xs leading-text-xs pt-[10px]'>Most Popular</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$1</h3>
                      <p className='text-primary-gray-400 text-text-2xs leading-text-2xs pt-[5px]'>Billed annually.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-2xs leading-text-2xs'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='mt-[20px] !font-semibold py-[7px] text-text-2xs leading-text-2xs px-[11px] !rounded-sm border-none  !bg-secondary-pink-500 w-full'/>

                  </div>
                </motion.div>

                <motion.div
                  className='lg:w-[290px] w-full lg:h-[380px] h-full  '>
                  <div className='flex flex-col h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col lg:items-center lg:justify-center'>
                      <div className='flex flex-col w-[30px] h-[30px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={lightningPink} alt='' width={15} height={15}/>
                      </div>
                      <h4 className='text-secondary-pink-500  font-semibold text-text-xs leading-text-xs pt-[10px]'>Monthly</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>Contact Us</h3>
                      <p className='text-primary-gray-400 text-text-2xs leading-text-2xs  pt-[5px]'>Get the answers you need quickly via email. Our team is here for you!</p>
                    </div>

                    
                    <ButtonDesignSystem label='Contact Us' buttonType={'primary'} className='mt-[44px] py-[7px] font-semibold text-text-2xs leading-text-2xs px-[11px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                  </div>
                </motion.div>





              </motion.div>
            }
          </AnimatePresence>
          
        </div>
    </div>
  )
}

export default PricingCreatorsSection
