import Link from 'next/link'
import React from 'react'
import logoDesktop from './../../../../../public/images/logos-chronos/logo-desktop-horizontal-text.svg'
import brazilIcon from './../../../../../public/icons/brazil.svg'

import Image from 'next/image'
import ButtonDesignSystem from '../../Button'

interface ClassesType {
  class?: string
}

const FooterSection = (props: ClassesType) => {
  return (
    <>
      <div className={`grid lg:grid-cols-5 grid-cols-2 w-full max-w-[940px] mx-auto gap-spacing-4xl lg:gap-spacing-3xl px-spacing-4xl lg:mt-0 mt-[200px] ${props.class} pb-16 border-b-[1px] border- border-primary-gray-800`}>
        <div className='flex flex-col gap-spacing-xl w-[150px]'>
          <h4 className='text-primary-base-white/[0.20] lg:text-primary-gray-400 text-text-md leading-text-md font-regular'> Produtos</h4>
          <ul className='flex flex-col gap-spacing-lg'>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Our Clubs</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Our Athlets</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Marketplace I</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Marketplace II</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>News</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>News</Link></li>
          </ul>
        </div>

        <div className='flex flex-col gap-spacing-xl  w-[150px]'>
          <h4 className='lg:text-primary-gray-400 text-primary-base-white/[0.20] text-text-md leading-text-md font-regular'> Recursos</h4>
          <ul className='flex flex-col gap-spacing-lg'>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Academy</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Education</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Health</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Social Scope</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Carbon Free</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Support</Link></li>
          </ul>
        </div>

        <div className='flex flex-col gap-spacing-xl  w-[150px]'>
          <h4 className='lg:text-primary-gray-400 text-primary-base-white/[0.20] text-text-md leading-text-md font-regular'> Conta</h4>
          <ul className='flex flex-col gap-spacing-lg'>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Login</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Register</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Clients</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Creators</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Partners</Link></li>
          </ul>
        </div>

        <div className='flex flex-col gap-spacing-xl  w-[150px]'>
          <h4 className='lg:text-primary-gray-400 text-primary-base-white/[0.20] text-text-md leading-text-md font-regular'> Redes</h4>
          <ul className='flex flex-col gap-spacing-lg'>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Twitter</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>LinkedIn</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Facebook</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Instagram</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>TikTok</Link></li>
          </ul>
        </div>

        <div className='flex flex-col gap-spacing-xl  w-[150px]'>
          <h4 className='lg:text-primary-gray-400 text-primary-base-white/[0.20] text-text-md leading-text-md font-regular'> Institucional</h4>
          <ul className='flex flex-col gap-spacing-lg'>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>About</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>FAQ</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Privacy</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Terms of Service</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Code of Conduct</Link></li>
              <li> <Link href='#' className='text-primary-base-white text-text-md leading-text-md'>Disposal Contract</Link></li>
          </ul>
        </div>


      </div>
      <div className='lg:px-0 px-spacing-xl py-spacing-4xl lg:flex-nowrap flex-wrap-reverse mb-4 w-full max-w-[940px] mx-auto flex items-center justify-between lg:gap-0 gap-[30px]'>
        <Image src={logoDesktop} width={188} height={32} alt=''/>
        <p className='text-primary-base-white text-text-md leading-text-md font-medium '>
          © 2023 Chronus Sports - <br className='lg:hidden block'/>Powered By <a href="https://www.moohtech.com/" target='_blank' className='text-secondary-cyan-400'>Mooh!Tech</a>
        </p>
        <ButtonDesignSystem className='bg-primary-gray-800 border-none py-[11px] text-text-xs px-[20px] hover:bg-primary-gray-900 !gap-[10px] !text-primary-base-white rounded-[40px]'  normal={'lg'}  leftIcon={<Image src={brazilIcon} width={24} height={24} alt=''/>} label='Português' buttonType={'secondaryGray'} />
      </div>
    </>
  )
}

export default FooterSection
