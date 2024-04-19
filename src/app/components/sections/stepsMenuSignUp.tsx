'use client';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

type PropTypes = {
    urls: string
}

const StepsMenuSignUp = () => {
    const pathName =  usePathname();
    console.log(pathName);

    let urls: string = 'a'
   
  return (
    <div className='pt-spacing-6xl mt-spacing-9xl w-full flex lg:flex-col justify-center px-[45px] lg:pl-[30px] z-[999] gap-[30px] lg:gap-[40px] font-sans'>

            {/* step one */}
            <Link className='flex gap-spacing-xl ' href='/register/details'>
                <div className='w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'> 
                    
                    {/*  user icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1227_27312)">
                        <path d="M8.66669 7.58333C8.66669 8.73261 9.12323 9.83481 9.93589 10.6475C10.7485 11.4601 11.8507 11.9167 13 11.9167C14.1493 11.9167 15.2515 11.4601 16.0642 10.6475C16.8768 9.83481 17.3334 8.73261 17.3334 7.58333C17.3334 6.43406 16.8768 5.33186 16.0642 4.5192C15.2515 3.70655 14.1493 3.25 13 3.25C11.8507 3.25 10.7485 3.70655 9.93589 4.5192C9.12323 5.33186 8.66669 6.43406 8.66669 7.58333Z" stroke={`${pathName.includes('details') ? '#FFFF': '#54565A'} `}  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.5 22.75V20.5833C6.5 19.4341 6.95655 18.3319 7.7692 17.5192C8.58186 16.7065 9.68406 16.25 10.8333 16.25H15.1667C16.3159 16.25 17.4181 16.7065 18.2308 17.5192C19.0435 18.3319 19.5 19.4341 19.5 20.5833V22.75" stroke={`${pathName.includes('details') ? '#FFFF': '#54565A'} `} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1227_27312">
                        <rect width="26" height="26" fill={`${pathName.includes('details') ? 'white': '#54565A'}`}/>
                        </clipPath>
                        </defs>
                    </svg>
                    {/*  line */}
                    <span className='w-[25px] h-[1.5px] bg-[#2F333D] left-[52px] lg:left-[12px] bottom-[23px] z-40 absolute lg:bottom-[-20px] block lg:rotate-90 '></span>

                </div>

                <div className='hidden flex-col gap-[2px] lg:flex'>
                    <h2 className={`${pathName.includes('details') ? 'text-primary-base-white' : 'text-[#84888E]' } text-text-md font-semibold `}>Enter your details</h2>
                    <h3 className={`${pathName.includes('details') ? 'text-[#94969D]' : 'text-[#54565A]' } `}>Provide your general details</h3>
                </div>
            </Link>

           

            {/* step two */}
            <Link className='flex gap-spacing-xl ' href='/register/address'> 
                <div className='w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'>
                    
                    {/*  home icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1224_23267)">
                            <path d="M5.41667 13H3.25L13 3.25L22.75 13H20.5833" stroke={`${pathName.includes('address') ? '#FFFF': '#54565A'} `} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.41669 13V20.5833C5.41669 21.158 5.64496 21.7091 6.05129 22.1154C6.45762 22.5217 7.00872 22.75 7.58335 22.75H18.4167C18.9913 22.75 19.5424 22.5217 19.9488 22.1154C20.3551 21.7091 20.5834 21.158 20.5834 20.5833V13" stroke={`${pathName.includes('address') ? '#FFFF': '#54565A'} `} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.75 22.75V16.25C9.75 15.6754 9.97827 15.1243 10.3846 14.718C10.7909 14.3116 11.342 14.0834 11.9167 14.0834H14.0833C14.658 14.0834 15.2091 14.3116 15.6154 14.718C16.0217 15.1243 16.25 15.6754 16.25 16.25V22.75" stroke={`${pathName.includes('address') ? '#FFFF': '#54565A'} `} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1224_23267">
                            <rect width="26" height="26" stroke={`${pathName.includes('address') ? '#FFFF': '#54565A'} `}/>
                            </clipPath>
                        </defs>
                    </svg>
                    
                    {/*  line */}
                    <span className='w-[25px] h-[1.5px] bg-[#2F333D] left-[51.2px] lg:left-[12px] bottom-[23px] z-40 absolute lg:bottom-[-20px] block lg:rotate-90 '></span>
                  
                </div>

                <div className='hidden flex-col gap-[2px] lg:flex'>
                    <h2 className={`${pathName.includes('address') ? 'text-primary-base-white' : 'text-[#84888E]' } text-text-md font-semibold `}>Enter your address</h2>
                    <h3 className={`${pathName.includes('address') ? 'text-[#94969D]' : 'text-[#54565A]' } `}>Provide your residence address </h3>
                </div>
            </Link>


            {/* step three */}
            <Link className='flex gap-spacing-xl ' href='/register/password'> 
                <div className='w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'>
                    
                    {/*  password icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1224_23274)">
                            <path d="M17.9346 4.16329L21.8368 8.06545C22.1262 8.35488 22.3558 8.69848 22.5125 9.07666C22.6692 9.45483 22.7498 9.86016 22.7498 10.2695C22.7498 10.6788 22.6692 11.0842 22.5125 11.4623C22.3558 11.8405 22.1262 12.1841 21.8368 12.4735L18.9735 15.3368C18.6841 15.6263 18.3405 15.8559 17.9623 16.0125C17.5841 16.1692 17.1788 16.2498 16.7695 16.2498C16.3601 16.2498 15.9548 16.1692 15.5766 16.0125C15.1984 15.8559 14.8548 15.6263 14.5654 15.3368L14.2393 15.0107L7.13483 22.1152C6.77486 22.4751 6.29966 22.6968 5.79258 22.7414L5.603 22.75H4.33333C4.06799 22.75 3.81188 22.6526 3.6136 22.4763C3.41531 22.2999 3.28863 22.057 3.25758 21.7935L3.25 21.6667V20.397C3.25012 19.8884 3.42922 19.3959 3.75592 19.006L3.88483 18.8652L4.33333 18.4167H6.5V16.25H8.66667V14.0834L10.9893 11.7607L10.6633 11.4346C10.3738 11.1452 10.1442 10.8016 9.9875 10.4234C9.83084 10.0452 9.75021 9.63991 9.75021 9.23058C9.75021 8.82124 9.83084 8.41591 9.9875 8.03774C10.1442 7.65957 10.3738 7.31596 10.6633 7.02654L13.5265 4.16329C13.8159 3.87382 14.1595 3.6442 14.5377 3.48754C14.9159 3.33088 15.3212 3.25024 15.7305 3.25024C16.1399 3.25024 16.5452 3.33088 16.9234 3.48754C17.3016 3.6442 17.6452 3.87382 17.9346 4.16329Z" stroke={`${pathName.includes('password') ? '#FFFF' : '#54565A'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.25 9.75H16.26" stroke="#54565A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1224_23274">
                            <rect width="26" height="26" fill={`${pathName.includes('password') ? 'white': '#54565A'}`}/>
                            </clipPath>
                        </defs>
                    </svg>
                    
                    {/*  line */}
                    <span className='w-[25px] h-[1.5px] bg-[#2F333D] left-[52px] lg:left-[12px] bottom-[23px] z-40 absolute lg:bottom-[-20px] block lg:rotate-90 '></span>


                </div>

                <div className='hidden flex-col gap-[2px] lg:flex'>
                    <h2 className={`${pathName.includes('password') ? 'text-primary-base-white' : 'text-[#84888E]' } text-text-md font-semibold `}>Choose a password</h2>
                    <h3 className={`${pathName.includes('password') ? 'text-[#94969D]' : 'text-[#54565A]' } `}>Choose a secure password</h3>
                </div>
            </Link>





            
            {/* step four */}
            <div className='flex gap-spacing-xl '> 
                <div className='w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'>
                    
                    {/*  letter icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke='black'>
                        <path d="M2.16669 7.58337L11.012 13.7751C11.7283 14.2765 12.0864 14.5272 12.476 14.6243C12.8201 14.7101 13.18 14.7101 13.5241 14.6243C13.9136 14.5272 14.2718 14.2765 14.988 13.7751L23.8334 7.58337M7.36669 21.6667H18.6334C20.4535 21.6667 21.3636 21.6667 22.0588 21.3125C22.6703 21.0009 23.1675 20.5037 23.4791 19.8922C23.8334 19.197 23.8334 18.2869 23.8334 16.4667V9.53337C23.8334 7.7132 23.8334 6.80312 23.4791 6.1079C23.1675 5.49638 22.6703 4.99919 22.0588 4.6876C21.3636 4.33337 20.4535 4.33337 18.6334 4.33337H7.36669C5.54652 4.33337 4.63643 4.33337 3.94122 4.6876C3.32969 4.99919 2.8325 5.49638 2.52092 6.1079C2.16669 6.80312 2.16669 7.7132 2.16669 9.53337V16.4667C2.16669 18.2869 2.16669 19.197 2.52092 19.8922C2.8325 20.5037 3.32969 21.0009 3.94122 21.3125C4.63643 21.6667 5.54652 21.6667 7.36669 21.6667Z" stroke={`${pathName.includes('confirm') ? 'white': '#54565A'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                </div>

                <div className='hidden flex-col gap-[2px] lg:flex'>
                    <h2 className={`${pathName.includes('confirm') ? 'text-primary-base-white' : 'text-[#84888E]' } text-text-md font-semibold `}>Confirm your account</h2>
                    <h3 className={`${pathName.includes('confirm') ? 'text-[#94969D]' : 'text-[#54565A]' } `}>Send the code that will arrive in your email</h3>
                </div>
            </div>

            
         
        
    </div>
  )
}

export default StepsMenuSignUp


