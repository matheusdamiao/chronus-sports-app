'use client';
import React from 'react'
import ButtonDesignSystem from '../../Button'
import Image from 'next/image'
import partnerHeart from './../../../../../public/icons/partnerHeart.svg'
import at from './../../../../../public/icons/at.svg'
import chevronGreen from './../../../../../public/icons/chevronGreen.svg'
import chevronBlue from './../../../../../public/icons/chevronBlue.svg'
import image1 from './../../../../../public/images/desktop-image-upgrade-section-1.webp'
import image2 from './../../../../../public/images/desktop-image-upgrade-section-2.webp'


const FunctionalitiesSection = () => {
  return (
    <div className='py-[50px] lg:pt-[100px] flex flex-col text-primary-base-white'>
        <div className='flex flex-col items-center justify-center px-[28px] gap-[21px] lg:max-w-[580px] mx-auto'>
            <h2 className='text-display-sm leading-display-sm tracking-display lg:text-display-lg font-bold lg:leading-display-lg text-center w-full'>The most <span className='complete'>complete</span><br /> sports platform</h2>
            <h3 className='tracking-wide text-text-lg lg:text-text-md text-primary-gray-200 text-center w-[90%] lg:w-full font-thin leading-text-lg'>Discover our key advantages and become a part of the most comprehensive and diverse sports platform in the world.</h3>
        </div>
   
        <div className='py-[55px] lg:py-[73px] px-spacing-4xl flex lg:flex-wrap max-w-[950px] w-full lg:justify-center mx-auto gap-[45px] lg:gap-0 flex-wrap'>
            <div className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pr-[30px] '>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Immersive mixed Reality</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-regular lg:text-center lg:w-[80%] w-[90%]'>Technology for injury prevention and athlete protection.</p>
                {/* division lines */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
                <div className="hidden lg:block absolute w-[870px] h-[1px] bg-gradient-to-r from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 bottom-0"></div>

            </div>
            <div className='flex flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:mx-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'> Utilization of IoT Data </h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-regular lg:text-center w-[90%] '>Indicators that guide preventive measures, hiring and team management</p>
            </div>
            <div className='flex relative flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:pl-[30px]'>
                {/* division line */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-t from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 top-0"></div>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Professional Management</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-regular lg:text-center w-[90%]'>Have greater financial and strategic control of the club.</p>
            </div>
            <div className='flex relative flex-col gap-spacing-md lg:w-[300px] lg:h-[189px] lg:items-center lg:justify-center lg:px-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Centralization of data</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-regular lg:text-center w-[90%]'>Follow your favorite athletes and clubs with all the news and updates dedicated to them.</p>
                {/* division line */}
                <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-t from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
            </div>
            <div className='flex flex-col gap-spacing-md lg:w-[250px] lg:h-[189px] lg:items-center lg:justify-center lg:mx-[30px]'>
                <h4 className='text-primary-base-white font-bold text-text-md leading-text-md'>Self-employed professionals</h4>
                <p className='text-primary-gray-200 text-text-md leading-text-md font-regular lg:text-center lg:w-[80%] w-[90%]'>Encontre profissionais especilizados em todas as áreas e contrate-os. </p>
            </div>
        </div>


        {/* CARDS */}
        <div className='flex flex-wrap sm:justify-center gap-spacing-xl max-w-[950px] lg:mx-auto'>
            <div className='hover:translate-y-[-5px] transition-transform lg:mx-0 mx-4 relative pl-[30px] lg:pl-[42px] pt-[38px] w-full sm:w-[359px] lg:w-[427px] overflow-hidden h-[479px] rounded-4xl border-[1px] border-solid border-[#1E1B3A] bg-gradient-card'>
                <div className='flex flex-col gap-spacing-2xl'>
                    <ButtonDesignSystem label='Become a Partner' className='w-[230px] bg-gradient-button-green border-none outline-1 outline outline-offset-0 outline-primary-base-white/[0.05] !text-primary-base-white' leftIcon={<Image src={partnerHeart} alt='' width={20} height={20}/>}  rightIcon={<Image src={chevronGreen} alt=''  width={20} height={20} />} buttonType={'secondaryGray'} normal={'lg'}/>
                    <p className='w-[260px] text-text-md leading-text-md font-thin'>We are a partner you can trust. Join us and expand your career.</p>
                </div>
                <div className='absolute bottom-[-15px] lg:left-9 left-6'>
                    <div className='relative w-[464.15px] h-[322.61px]'>
                        <Image src={image1} alt='' fill/>
                    </div>
                </div>
            </div>
            <div className='hover:translate-y-[-5px] transition-transform lg:mx-0 mx-4 relative pl-[30px] lg:pl-[42px] pt-[38px] w-full sm:w-[359px] lg:w-[427px] h-[479px] overflow-hidden rounded-4xl border-[1px] border-solid border-[#1E1B3A] bg-gradient-card'>
                <div className='flex flex-col gap-spacing-2xl'>
                    <ButtonDesignSystem label='Become a Creator' className='w-[230px] bg-gradient-button-orange border-none outline-1 outline outline-offset-0 outline-primary-base-white/[0.05] !text-primary-base-white' leftIcon={<Image src={at} alt='' width={20} height={20}/>}  rightIcon={<Image src={chevronBlue} alt=''  width={20} height={20} />} buttonType={'secondaryGray'} normal={'lg'}/>
                    <p className='w-[260px] text-text-md leading-text-md font-thin'>Connect your fans to you and get paid fairly for it.</p>
                </div>  
                <div className='absolute bottom-[-15px] lg:left-9 left-6'>
                    <div className='relative w-[464.15px] h-[322.61px] '>
                        <Image src={image2} alt='' fill/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FunctionalitiesSection
