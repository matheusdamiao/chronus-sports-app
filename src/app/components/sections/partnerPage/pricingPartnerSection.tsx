'use client';
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import ButtonDesignSystem from '../../Button';
import Image from 'next/image';
import check from './../../../../../public/icons/check-green.svg'
import checkOrange from './../../../../../public/icons/check-orange.svg'
import lightningGreen from './../../../../../public/icons/lightning-green.svg'
import lightningOrange from './../../../../../public/icons/lightning-orange.svg'
import cursorGreen from './../../../../../public/icons/cursor-green.svg'
import cursorOrange from './../../../../../public/icons/cursor-orange.svg'
import diamondGreen from './../../../../../public/icons/diamond-green.svg'
import diamondOrange from './../../../../../public/icons/diamond-orange.svg'
import mailGreen from './../../../../../public/icons/mail-green.svg'


const PricingPartnerSection = () => {
  const [isSubscription, setIsSubscription] = useState(true);
  const [isForProfessionals, setIsForProfessionals] = useState(true);
  

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
    <div className='flex flex-col lg:pt-[200px] py-[100px] h-full text-primary-base-white'>
         <div className='flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[570px] mx-auto'>
            <h2 className='text-display-sm leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>Plans & Pricing</h2>
            <h3 className='tracking-wide text-text-lg lg:text-text-md text-primary-gray-200 text-center w-full inline-flex font-thin leading-text-lg'>Chronus Sports is your opportunity to own, sell, and trade official digital collectible NFTs of the world&apos;s best professional athletes.</h3>
        </div>

        {/* toggle buttons */}
        <div className='flex items-center justify-center mx-auto gap-5 flex-wrap mt-[40px]'>
            <div className='flex items-center justify-center gap-spacing-lg mx-auto '>
              <p className={`${isSubscription ? 'text-primary-base-white': 'text-primary-gray-400'}`}>Subscription</p>
              <motion.div className={ ` bg-primary-gray-300 toggle-creators-pricing-wrapper block relative w-full`} onClick={()=> setIsSubscription(!isSubscription)}>
                <motion.span variants={toggleVariants}  transition={{ type: "spring", bounce: 0.25 }} animate={isSubscription ? 'open' : 'closed'} className='w-[20px] h-[20px] flex-shrink-0 absolute bg-primary-base-white shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] rounded-full'></motion.span>
              </motion.div>
            <p className={`${!isSubscription ? 'text-primary-base-white': 'text-primary-gray-400'}`}> Percentage</p>
            </div>

            <span className='h-[24px] w-[1px] bg-primary-base-white/15 z-50'></span>  
            <div className='flex sm:items-center justify-center gap-spacing-lg mx-auto '>
              <p className={`${isForProfessionals ? 'text-primary-base-white': 'text-primary-gray-400'}`}>For Professionals</p>
              <motion.div className={`${isForProfessionals ? 'bg-secondary-green-400' : 'bg-secondary-orange-500'} toggle-creators-pricing-wrapper block relative w-full`} onClick={()=> setIsForProfessionals(!isForProfessionals)}>
                <motion.span variants={toggleVariants}  transition={{ type: "spring", bounce: 0.25 }} animate={isForProfessionals ? 'open' : 'closed'} className='w-[20px] h-[20px] flex-shrink-0 absolute bg-primary-base-white rounded-full'></motion.span>
              </motion.div>
            <p className={`${!isForProfessionals ? 'text-primary-base-white': 'text-primary-gray-400'} self-end`}>For Athletes<span className='hidden sm:inline'>, Clubs</span> <br className='block sm:hidden'/> and Federations</p>
            </div>
        </div>

        <div className={`flex items-center justify-center pt-[73px] gap-[30px] relative ${isSubscription ? 'lg:h-[300px] h-[750px] sm:h-[500px]': 'lg:h-[300px]  h-[1900px]'} ${!isSubscription && isForProfessionals && 'h-[700px]'} ${!isSubscription && !isForProfessionals ? 'xl:!h-[350px] lg:h-[800px] min-[730px]:h-[1200px] min-[700px]:h-[1450px] h-[2000px]' : ''} `}>
            <AnimatePresence>

                {isSubscription && isForProfessionals && 
                  <motion.div
                    className='flex items-center justify-center lg:flex-row flex-wrap w-full absolute lg:px-0 px-4 pb-[150px] top-[50px]'
                    key={1}
                    variants={modalVariants}
                    initial='closed'
                    animate='open'
                    exit='exit'
                    transition={{ type: "spring", bounce: 0.25 }}
                    >

                    <motion.div
                      className='max-w-[335px] w-full lg:h-[426px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-green-100 items-center justify-center'>
                            <Image src={cursorGreen} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-green-400 font-semibold text-text-xs leading-text-xs pt-[10px]'>Basic</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>U$2</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={check} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={check} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={check} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={check} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={check} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none bg-secondary-green-400 hover:bg-secondary-green-500 focus:ring-secondary-green-700 w-full'/>

                      </div>
                    </motion.div>

                    <motion.div
                      className='max-w-[335px] w-full lg:h-[426px] h-full rounded-[8px] '>
                      <div className='flex flex-col  h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-green-100 items-center justify-center'>
                            <Image src={mailGreen} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-green-400 font-semibold text-text-xs leading-text-xs pt-[10px]'>Annual Plans</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>Contact Us</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs text-center w-[80%] pt-[5px]'>Interested in other prices? Get in touch to negotiate annual pricing plans.</p>
                        </div>
                        <ButtonDesignSystem label='Contact Us' buttonType={'primary'} className='py-[10px] mt-[22px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/10 hover:bg-primary-base-white/5 focus:ring-primary-gray-800 w-full'/>


                      </div>
                    </motion.div>
                    
                  </motion.div>
                  } 
                  {isSubscription && !isForProfessionals &&
                    <motion.div
                    className='flex items-center justify-center lg:flex-row flex-col flex-wrap w-full absolute lg:px-0 px-4 pb-[150px] top-[50px]'
                    key={4}
                    variants={modalVariants}
                    initial='closed'
                    animate='open'
                    exit='exit'
                    transition={{ type: "spring", bounce: 0.25 }}
                    >

                      <motion.div
                        className='max-w-[335px] w-full lg:h-[426px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                        <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                          <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                              <Image src={cursorOrange} alt='' width={20} height={20}/>
                            </div>
                            <h4 className='text-secondary-orange-500 font-semibold text-text-xs leading-text-xs pt-[10px]'>Basic</h4>
                            <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>U$200</h3>
                            <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                          </div>

                          <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>20GB individual data </p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                            </div>
                          </div>
                          <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !text-primary-base-white !bg-secondary-orange-500 focus:ring-secondary-orange-700 w-full'/>

                        </div>
                      </motion.div>

                      <motion.div
                        className='max-w-[335px] w-full lg:h-[426px] h-full rounded-[8px]'>
                        <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                          <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                              <Image src={diamondOrange} alt='' width={20} height={20}/>
                            </div>
                            <h4 className='text-secondary-orange-500 font-semibold text-text-xs leading-text-xs pt-[10px]'>Pro</h4>
                            <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>U$900</h3>
                            <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                          </div>

                          <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                              <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                                <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                              </div>
                              <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                            </div>
                          </div>
                          <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/10 hover:bg-primary-base-white/5 focus:ring-primary-gray-800 w-full'/>

                        </div>
                     </motion.div>
                    </motion.div>
                  }
                
            </AnimatePresence>
          
          <AnimatePresence>
            {!isSubscription && !isForProfessionals &&
              <motion.div
              initial={{opacity: '0', x: '-10px'}}
              animate={{opacity: '1', x: '0px'}}  
              exit={{opacity: '0', x: '-10px'}}
              transition={{ type: "spring", bounce: 0.25, duration: '1' }}
              className='flex  items-center justify-center flex-wrap lg:flex-row w-full  lg:px-0 px-4 pb-[150px] absolute top-[50px]'
                >
               
                  {/*//////////////// card 1 //////////////////*/}
                  <motion.div
                      className='lg:w-[255px] max-w-[335px] w-full lg:h-[426px] h-full'>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500  font-semibold text-text-sm leading-text-sm pt-[10px]'>Beginner</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>50-50%</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Billed annually.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                      </div>
                    </motion.div>

                    {/* //////////////////card 2 ///////////////////// */}

                    <motion.div
                      className='lg:w-[255px] max-w-[335px] w-full lg:h-[426px] h-full'>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>Featured</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>60-40%</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Billed every 2 years.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className=' py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                      </div>
                    </motion.div>
             
                    {/*////////////// card 3 //////////////////*/}
                

                    <motion.div
                      className='lg:w-[255px] max-w-[335px] w-full lg:h-[426px] h-full'>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>MVP</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>70-30%</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Billed every 3 years.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className=' py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                      </div>
                    </motion.div>

                    {/* ///////////  card 4  ///////////////*/}

                    <motion.div
                      className='lg:w-[255px] max-w-[335px] w-full lg:h-[426px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>All-Stars</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>80-20%</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs  pt-[5px]'>Billed every 4 years.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-orange-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className=' !font-bold py-[10px] text-text-md leading-text-md px-[16px] !rounded-sm border-none !text-primary-base-white !bg-secondary-orange-500 focus:ring-secondary-orange-700 w-full'/>

                      </div>
                    </motion.div>
              

                    {/* ///////// card 5 ////////////*/}

                    <motion.div
                      className='lg:w-[255px] max-w-[335px] w-full lg:h-[426px] h-full '>
                      <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>Hall of Fame</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>90-10%</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Billed every 5 years.</p>
                        </div>

                        <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>20GB individual data</p>
                          </div>

                          <div className='flex gap-2 items-center'>
                            <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                              <Image src={checkOrange} alt='' width={7.56} height={6.62}/>
                            </div>
                            <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                          </div>
                        </div>
                        <ButtonDesignSystem label='Get Started' buttonType={'primary'} className=' py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                      </div>
                    </motion.div>

                    {/* card for tablet only */}
                    <motion.div
                      className='max-w-[335px] min-[700px]:block xl:hidden hidden w-full self-start lg:h-[426px] h-full '>
                      <div className='flex flex-col h-full px-[20px] py-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                          <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-orange-100 items-center justify-center'>
                            <Image src={lightningOrange} alt='' width={20} height={20}/>
                          </div>
                          <h4 className='text-secondary-orange-500 font-semibold text-text-sm leading-text-sm pt-[10px]'>Annual Plans</h4>
                          <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>Contact Us</h3>
                          <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Interested in other prices? Get in touch to negotiate annual pricing plans.</p>
                        </div>
                        <ButtonDesignSystem label='Contact Us' buttonType={'primary'} className='mt-[22px] py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/5 w-full'/>

                      </div>
                    </motion.div>

              </motion.div>
            }
            {!isSubscription && isForProfessionals &&
              <motion.div
                className='flex items-center justify-center lg:flex-row flex-col flex-wrap w-full absolute lg:px-0 px-4 pb-[150px] top-[50px]'
                key={7}
                variants={modalVariants}
                initial='closed'
                animate='open'
                exit='exit'
                transition={{ type: "spring", bounce: 0.25 }}
                >

                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px] h-full bg-gradient-bg-pricing-cards rounded-[8px] border-primary-base-white/5 border-[1px]'>
                  <div className='flex flex-col justify-between h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-green-100 items-center justify-center'>
                        <Image src={diamondGreen} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-green-400 font-semibold text-text-xs leading-text-xs pt-[10px]'>Pro</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>70-30%</h3>
                      <p className='text-primary-gray-400 text-text-xs leading-text-xs pt-[5px]'>Monthly billing.</p>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px] pb-[25px]'>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Access to all basic features</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic reporting and analytics</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Up to 10 individual users</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>20GB individual data </p>
                      </div>

                      <div className='flex gap-2 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full flex items-center justify-center bg-secondary-green-100 flex-0'>
                          <Image src={check} alt='' width={7.56} height={6.62}/>
                        </div>
                        <p className='text-text-sm leading-text-sm font-thin'>Basic chat and email support</p>
                      </div>
                    </div>
                    <ButtonDesignSystem label='Get Started' buttonType={'primary'} className='py-[10px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none bg-secondary-green-400 hover:bg-secondary-green-500 focus:ring-secondary-green-700 w-full'/>

                  </div>
                </motion.div>

                <motion.div
                  className='max-w-[335px] w-full lg:h-[426px] h-full rounded-[8px] '>
                  <div className='flex flex-col  h-full px-[20px] py-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col w-[40px] h-[40px] rounded-full bg-secondary-green-100 items-center justify-center'>
                        <Image src={mailGreen} alt='' width={20} height={20}/>
                      </div>
                      <h4 className='text-secondary-green-400 font-semibold text-text-xs leading-text-xs pt-[10px]'>Annual Plans</h4>
                      <h3 className='text-display-sm leading-display-sm text-primary-base-white font-semibold pt-[5px]'>Contact Us</h3>
                      <p className='text-primary-gray-400 text-text-xs leading-text-xs text-center w-[80%] pt-[5px]'>Interested in other prices? Get in touch to negotiate annual pricing plans.</p>
                    </div>
                    <ButtonDesignSystem label='Contact Us' buttonType={'primary'} className='py-[10px] mt-[22px] font-semibold text-text-md leading-text-md px-[16px] !rounded-sm border-none !bg-primary-base-white/10 hover:bg-primary-base-white/5 focus:ring-primary-gray-800 w-full'/>


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
