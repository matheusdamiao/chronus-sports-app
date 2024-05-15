'use client';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import React, { useState } from 'react'
import ButtonDesignSystem from '../../Button';
import lightningOrange from './../../../../../public/icons/lightning-orange.svg'
import check from './../../../../../public/icons/check-orange.svg'
import checkPink from './../../../../../public/icons/check-pink.svg'
import lightningPink from './../../../../../public/icons/lightning-pink.svg'
import asterixOrange from './../../../../../public/icons/asterisk-orange.svg'
import diamondPink from './../../../../../public/icons/diamond-pink.svg'
import diamondOrange from './../../../../../public/icons/diamond-orange.svg'
import mailPink from './../../../../../public/icons/mail-pink.svg'


import Image from 'next/image';

const PricingCreatorsSection = () => {
  const [isFree, setIsFree] = useState(true);

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
          <p className={`${isFree ? 'text-primary-base-white': 'text-primary-gray-400'}`}>Free</p>
          <motion.div className={`${isFree ? 'bg-secondary-orange-500' : '!bg-secondary-pink-500'} toggle-creators-pricing-wrapper block relative w-full`} onClick={()=> setIsFree(!isFree)}>
            <motion.span variants={toggleVariants}  transition={{ type: "spring", bounce: 0.25 }} animate={isFree ? 'open' : 'closed'} className='w-[20px] h-[20px] flex-shrink-0 absolute bg-primary-base-white rounded-full'></motion.span>
          </motion.div>
          <p className={`${!isFree ? 'text-primary-base-white': 'text-primary-gray-400'}`}>Premium</p>
        </div>

        <div className={`flex items-center justify-center lg:pt-[65px] gap-[30px] top-0 relative ${isFree ? 'lg:h-[500px] h-[900px]': 'lg:h-[500px] h-[800px]'} `}>
            <AnimatePresence>

            {isFree && 
              <motion.div
              className='flex items-center justify-center lg:flex-row flex-col lg:w-[670px] w-full flex-wrap absolute lg:px-0 px-4 pb-[150px] top-[50px]'
              key={1}
              variants={modalVariants}
              initial='closed'
              animate='open'
              exit='exit'
              transition={{ type: "spring", bounce: 0.25 }}
              >
                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px] h-full'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={asterixOrange} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-orange-500 first-letter:font-semibold text-text-sm leading-text-sm pt-[10px]'>Free Pass</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$0</h3>
                      <p className='text-primary-gray-400 text-text-xs leading-text-xs  pt-[5px]'>Lifetime access.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                  </div>
                </motion.div>

                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px] h-full  bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={diamondOrange} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>Premium</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$1</h3>
                      <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='!font-semibold py-[10px] text-text-md leading-text-md px-[16px] !rounded-sm border-none !text-primary-base-white !bg-secondary-orange-500 w-full'/>

                  </div>
                </motion.div>

              </motion.div>
            } 
          </AnimatePresence>
          <AnimatePresence>
            {!isFree &&
              <motion.div
              initial={{opacity: '0', x: '-10px'}}
              animate={{opacity: '1', x: '0px'}}  
              exit={{opacity: '0', x: '-10px'}}
              transition={{ type: "spring", bounce: 0.25, duration: '1' }}
              className='flex items-center justify-center flex-wrap lg:flex-row flex-col lg:w-[670px] lg:gap-0 lg:px-0 px-4 gap-[30px] pb-[150px] absolute top-[50px]'
                >
                
                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={diamondPink} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-pink-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>Premium</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>$1</h3>
                      <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>20GB individual data each user</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                          <Image src={checkPink} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='!font-semibold py-[10px] text-text-md leading-text-md px-[16px] !rounded-sm border-none  !bg-secondary-pink-500 w-full'/>

                  </div>
                </motion.div>

                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px]  h-full  '>
                  <div className='flex flex-col h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                        <Image src={mailPink} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-pink-500  font-semibold text-text-sm leading-text-sm pt-[10px]'>Annual Plans</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>Contact Us</h3>
                      <p className='text-primary-gray-400 text-text-sm leading-text-sm font-thin text-center  pt-[5px]'>Interested in other prices? Get in touchto negotiate annual pricing plans.</p>
                    </div>

                    
                    <ButtonDesignSystem label='Contact Us' buttonType={'primary'} className='mt-[22px] py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

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
