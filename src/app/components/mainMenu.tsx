'use client';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logoDesktop from './../../../public/images/logos-chronos/logo-desktop-horizontal-text.svg'
import logoMobile from './../../../public/images/logos-chronos/logo-menu-mobile-simple.svg'
import Link from 'next/link';
import ButtonDesignSystem from './Button';
import useWindowDimensions from '../utils/useWindowDimensions';
import dots from './../../../public/images/dots.svg'
import eyesClosed from './../../../public/icons/eyesClosed.svg'
import google from './../../../public/icons/google.svg'
import facebook from './../../../public/icons/facebook.svg'
import { AnimatePresence, motion } from 'framer-motion'
import InputField from './InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import spinner from './../../../public/icons/spinner.svg'


type IFormInput = {
  email: string;
  password: string;
}

const MainMenu = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoginPage, setLoginPage] = useState(false);
  const [isMobileMenuOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  let size = useWindowDimensions()

  const modalRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, setError, setValue, formState: {errors}} = useForm<IFormInput>({mode: 'all'})

  useEffect(() => {
      if(size){

      if (size.width > 1000) {
        setIsOpen(false);
        setLoginPage(false);
      }

      if(size.width < 1000){
        setIsLoginModalOpen(false);
      }
      }


      //  Fecha o modal quando clicado fora

      function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
         setIsLoginModalOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
    
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

  }, [size, isLoginModalOpen]);


  const handleLoginPage = () => {
    setIsOpen(!isMobileMenuOpen);
    setLoginPage(!isLoginPage);
  }


  const handleMenuMobile = () =>{
    setIsOpen(!isMobileMenuOpen)
    if(isLoginPage){
      setLoginPage(false);
    }
  }

  const modalVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "50%" },
    exit: {opacity: 0, x: '20%'}
  }

  const handleLoginModal = () =>{
    setIsLoginModalOpen(!isLoginModalOpen)
  }


 
  
    
    
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    setIsLoading(true);


    const bodyRequest = {
        email: data.email,
        password: data.password
    }

    try {
        const loginUser = await fetch("https://customers.api.core.chronus-sports.biss.com.br/api/v1/Authentication", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyRequest)
        })
        
        if(loginUser.status === 200){
            const responseData = await loginUser.json();
          console.log('deu certo!', loginUser);
          console.log('veio jwt!', responseData.token);   
          
          setIsLoading(false);
          alert('Bem-vindo a Chronos!')
          setValue('email', '');
          setValue('password', '');

        } else {
                setIsLoading(false);

                setError('password', {
                  message: 'Credenciais erradas. Tente novamente'
                })
              
        }
  
        // console.log('veio algo', data);
        
      } catch (error) {
        setIsLoading(false);

        console.log('deu erro', error);
        setError('password', {
          message: "Algo de errado ocorreu. Tente novamente"
        })
      }


  }



  return (
    <div className='h-[80px] w-full bg-transparent absolute top-0 z-[99999]'>
      <div className='z-[88888] relative max-w-7xl w-full px-spacing-xl lg:px-spacing-4xl py-[24px] lg:py-[18px] mx-auto flex justify-between'> 
          
          <div className='w-full flex gap-[40px]'>
            <Image src={logoDesktop} alt='' width={188} height={32} className='hidden lg:block'/>
            <Image src={logoMobile} alt='' width={43} height={43} className='lg:hidden block'/>  
          
          
            <ul className='items-center gap-spacing-4xl hidden lg:flex'>
              <li>
                <Link href='#' className='text-primary-base-white font-medium'> Home</Link>
              </li>
              <li>
                <Link href='#'  className='text-primary-base-white font-medium'> Clients</Link>
              </li>
              <li>
                <Link href='#'  className='text-primary-base-white font-medium'>Creators</Link>
              </li>
              <li>
                <Link href='#'  className='text-primary-base-white font-medium'>Partners</Link>
              </li>
              <li>
                <Link href='#'  className='text-primary-base-white font-medium'> Pricing</Link>
              </li>
            </ul>
          </div>
          <div className='lg:flex hidden relative'>
           <Link href='/register/details'><ButtonDesignSystem label='Sign Up' className='text-primary-base-white border-none' normal={'lg'} buttonType={'linkColor'} /> </Link>
            <ButtonDesignSystem label='Login' onClick={()=> handleLoginModal()} leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <g clipPath="url(#clip0_2158_17040)">
                    <path d="M19.3994 7C20.3039 8.50118 20.6903 10.2578 20.4994 12V13C20.4982 14.0529 20.7741 15.0875 21.2994 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.50098 11C8.50098 9.93913 8.9224 8.92172 9.67255 8.17157C10.4227 7.42143 11.4401 7 12.501 7C13.5618 7 14.5793 7.42143 15.3294 8.17157C16.0795 8.92172 16.501 9.93913 16.501 11V12C16.501 14.1637 17.2028 16.269 18.501 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 11V13C12.4968 15.8594 13.3693 18.6512 15 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.50098 15C8.74568 17.0898 9.3549 19.1206 10.301 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.39945 19.0003C4.7247 16.7306 4.42079 14.3669 4.49945 12.0003V11.0003C4.49561 9.59419 4.86247 8.21188 5.56305 6.99269C6.26364 5.77349 7.27319 4.76049 8.48999 4.05576C9.70679 3.35103 11.0878 2.97947 12.494 2.97852C13.9001 2.97756 15.2817 3.34725 16.4994 4.05033" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                <defs>
                <clipPath id="clip0_2158_17040">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                  </svg>
                } 
                normal={'lg'}
                className='border-none'
                buttonType={'primary'}
            />
            <AnimatePresence>
              {isLoginModalOpen &&
                <motion.div
                  ref={modalRef}
                  key='modal'
                  variants={modalVariants}
                  initial='closed'
                  animate='open'
                  exit='exit'
                  className='h-[460px] w-[350px] bg-primary-base-white absolute top-[60px] right-0 px-spacing-3xl py-spacing-3xl rounded-md'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
                      <InputField 
                          className="text-primary-gray-700"
                          labelColor='text-primary-gray-700'
                          placeholder="Insira seu e-mail"
                          label="email"
                          titulo="Email"
                          sizes={'sm'}
                          primary={'default'}
                          {...register('email', { 
                            required: "Add your e-mail",
                            pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: 'E-mail format is not correct'
                          } },
                          
                        )}
                        error={errors.email}
                      />
                      <InputField 
                        className="bg-transparent border-[#292E38]"
                        primary={'default'}
                        labelColor='text-primary-gray-700'
                        placeholder="*************"
                        titulo="Senha"
                        label="password"
                        inputType="password"
                        sizes={'sm'}
                        {...register('password', {
                        required: true,
                        minLength: {
                          value: 8,
                          message: ''
                        },
                        maxLength: {
                          value: 20,
                          message: ''              }
                        } )}           
                        rightIcon={<Image src={eyesClosed} alt='' width={25} height={25} />}
                        error={errors.password}
                        />
                      <div className='flex flex-col gap-spacing-3xl'>
                        <Link href='#' className='text-right text-primary-brand-700 font-semibold text-text-sm'>Forgot password?</Link>
                        <div className='flex flex-col gap-spacing-xl'>
                          <ButtonDesignSystem label='Sign In'  buttonType={'primary'} normal={'lg'} className='w-full !rounded-md' rightIcon={isLoading && <Image className="animate-spin" width={20} height={20} src={spinner} alt="Loading icon"/>}/>
                          <ButtonDesignSystem normal={'lg'} buttonType={"secondaryGray"} leftIcon={<Image src={google} alt='' />}  className="border-[#292E38] gap-spacing-lg !bg-transparent w-full !rounded-[8px]" label="Sign In with Google" />         
                        </div>
                      </div>
                      <small className=' text-center pt-spacing-lg text-primary-gray-600 text-text-sm'> Don&apos;t have an account? <span className='text-primary-brand-700 font-semibold'>Sign up</span></small>
              
                    </form>

                </motion.div>
              }
            </AnimatePresence>
          </div>
          <div onClick={()=> handleMenuMobile()} className={`${isMobileMenuOpen ? 'bg-[#31344C]': 'bg-primary-brand-500'} transition-colors  lg:hidden w-[44px] h-[44px] !flex-shrink-0 rounded-full  flex items-center justify-center gap-1 flex-col`}>
              <span className={`${isMobileMenuOpen ? 'translate-y-[3px] rotate-45 !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-primary-base-white block rounded-lg `}> </span>
              <span className={`${isMobileMenuOpen ? 'hidden' : ''} w-[14px] h-[2px] bg-primary-base-white block rounded-lg !flex-shrink-0`}> </span>
              <span className={`${isMobileMenuOpen ? 'translate-y-[-3px] rotate-[-45deg] !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-primary-base-white block rounded-lg `}> </span>
          </div>
      </div>
      {isMobileMenuOpen ? 
        <div className='absolute top-0 translate-x-[0px] duration-700 transition-all bg-primary-gray-900 w-full h-[530px]'>
          <ul className='pt-[95px] flex flex-col gap-2'>
            <li className='py-spacing-lg px-spacing-xl w-full'>
              <Link href='#' className='text-primary-base-white font-semibold '>Home</Link>
            </li>
            <li className='py-spacing-lg px-spacing-xl w-full'>
              <Link href='#' className='text-primary-base-white font-semibold'>Clients</Link>
            </li>
            <li className='py-spacing-lg px-spacing-xl w-full'>
              <Link href='#' className='text-primary-base-white font-semibold' >Creators</Link>
            </li>
            <li className='py-spacing-lg px-spacing-xl w-full'>
              <Link href='#' className='text-primary-base-white font-semibold'>Partners</Link>
            </li>
            <li className='py-spacing-lg px-spacing-xl w-full'>
              <Link href='#' className='text-primary-base-white font-semibold'>Pricing</Link>
            </li>
          </ul>

          <div className='flex flex-col gap-3 px-spacing-xl py-spacing-3xl border-t-[1px] border-[#31344C] mt-spacing-3xl'>
            <a onClick={()=>handleLoginPage()}>
             <ButtonDesignSystem normal={'lg'} buttonType={"primary"} className="border-none w-full !rounded-[8px]" 
                      leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <g clipPath="url(#clip0_2158_17040)">
                                      <path d="M19.3994 7C20.3039 8.50118 20.6903 10.2578 20.4994 12V13C20.4982 14.0529 20.7741 15.0875 21.2994 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M8.50098 11C8.50098 9.93913 8.9224 8.92172 9.67255 8.17157C10.4227 7.42143 11.4401 7 12.501 7C13.5618 7 14.5793 7.42143 15.3294 8.17157C16.0795 8.92172 16.501 9.93913 16.501 11V12C16.501 14.1637 17.2028 16.269 18.501 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M12.5 11V13C12.4968 15.8594 13.3693 18.6512 15 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M8.50098 15C8.74568 17.0898 9.3549 19.1206 10.301 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M5.39945 19.0003C4.7247 16.7306 4.42079 14.3669 4.49945 12.0003V11.0003C4.49561 9.59419 4.86247 8.21188 5.56305 6.99269C6.26364 5.77349 7.27319 4.76049 8.48999 4.05576C9.70679 3.35103 11.0878 2.97947 12.494 2.97852C13.9001 2.97756 15.2817 3.34725 16.4994 4.05033" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                  <defs>
                                  <clipPath id="clip0_2158_17040">
                                  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                  </clipPath>
                                  </defs>
                                    </svg>
                                } 
                        label="Login" />
            </a>  
            <Link href='register/details'>          
              <ButtonDesignSystem normal={'lg'} buttonType={'secondaryGray'} label='Sign Up' className='w-full border-none !text-primary-base-white !bg-[#31344C] !rounded-[8px]' />
            </Link> 
          </div>
        </div>
        : 
        <div className={` transition-all absolute top-0 translate-x-[-1000px] duration-700 w-full  h-[80svh]`}>
        </div>}
       {isLoginPage && !isMobileMenuOpen ? 
        <div className='bg-[#0B111D] h-[130svh] absolute flex items-center justify-center top-0 w-full text-primary-base-white'>
          <div className='absolute top-0 h-[500px] w-full z-10'>
            <Image src={dots} alt='' />
            <Image src={dots} alt=''  />
          </div>
          <div className='px-4 pt-[142px] z-[999] h-full absolute w-full'>
            <h3 className='text-display-xs leading-display-xs w-10/12 mx-auto font-semibold text-primary-base-white text-center'>Faça login na sua conta Chronus Sports</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-spacing-4xl w-full'>
              <div className='flex flex-col gap-4'>
                <InputField 
                    placeholder="Insira seu e-mail"
                    label="email"
                    titulo="Email"
                    sizes={'sm'}
                    primary={'dark'}
                    {...register('email', { 
                      required: "Add your e-mail",
                      pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: 'E-mail format is not correct'
                    } },
                    
                  )}
                  error={errors.email}
                />
                <InputField 
                  primary={"big-dark"}
                  placeholder="*************" 
                  titulo="Senha"
                  label="password"
                  inputType="password"
                  sizes={'sm'}
                  {...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: 'Senha inválida'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Senha inválida'              }
                  } )}           
                  rightIcon={<Image src={eyesClosed} alt='' width={25} height={25} />}
                  error={errors.password}
                  />
              </div>  
              <div className='flex justify-between py-spacing-3xl'>
                <div className='flex items-center gap-2'> 
                  <input type="checkbox" name="" id="" />
                  <small className='text-[#84888E]'>Lembre de mim</small>
                </div>
                <a href="" className='text-primary-base-white text-text-sm font-semibold'> Recuperar senha</a>
              </div>
              <div className='flex flex-col gap-spacing-xl'>
                <ButtonDesignSystem type='submit' normal={'lg'} buttonType={"primary"} className="border-none w-full !rounded-[8px]" label="Entrar" rightIcon={isLoading && <Image className="animate-spin" width={20} height={20} src={spinner} alt="Loading icon"/>} />         
                <ButtonDesignSystem normal={'lg'} buttonType={"primary"} leftIcon={<Image src={google} alt='' />}  className="border-[#292E38] gap-spacing-lg  w-full !bg-[#0B111D] !rounded-[8px]" label="Entrar com Google" />         
                <ButtonDesignSystem normal={'lg'} buttonType={"primary"} leftIcon={<Image src={facebook} alt='' />} className="border-[#292E38] gap-spacing-lg w-full !bg-[#0B111D] !rounded-[8px]" label="Entrar com Facebook" />         
              </div>
            </form>

            <small className='text-[#84888E] flex items-center justify-center w-full text-text-sm text-center gap-1 pt-spacing-4xl'>  Não tem uma conta? <Link href='/register/details' className='text-primary-base-white'> Cadastre-se</Link></small>  
            <div className='flex items-center justify-center text-[#84888E] flex-wrap gap-2 pt-spacing-8xl pb-4'>
                <a href='/termos_de_usp.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Termos e Condições</a>
                -
                <a href='/politica_de_privacidade.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Política de Privacidade</a>
            </div>       
          </div>
        </div>
        :
        null
        }

    </div>
  )
}

export default MainMenu
