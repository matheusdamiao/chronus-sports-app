import { Metadata } from 'next';
import StepsMenuSignUp from '../components/sections/stepsMenuSignUp';
import Image from 'next/image';
import bg from './../../../public/images/dots.svg'
import logo from './../../../public/images/logo-chronus-sports-and-name-white.svg'
import Link from 'next/link';


export const metadata: Metadata = {
    title: 'Create Account - Chronus Sports',
    description: 'The world largest sports plataform',
  }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div className="flex lg:flex-row flex-col relative lg:h-[1200px] h-full ">
        <div className='absolute text-primary-warning-25 h-spacing-9xl z-[9999] lg:pl-spacing-4xl py-spacing-3xl px-spacing-xl lg:pt-spacing-4xl
         w-full'  >
          <Link href='/'><Image src={logo} width={120} height={33} alt=''/></Link>
        </div>
        <div className="col-span-2 bg-[#0B111D]  lg:bg-[#161B26] lg:max-w-[450px] w-full z-[999]">
          <StepsMenuSignUp/> 
        </div>
        <div className="col-span-4 bg-[#0B111D] h-full w-full lg:py-10 pt-6 relative flex justify-center">
          <Image src={bg} alt='' className="absolute top-0 right-0 left-0 mx-auto lg:block hidden" />
          <span className="ellipseSignUpPages lg:block hidden"></span>


          <div className='text-primary-base-white z-10 pb-36  w-full max-w-[382px]'>{children}</div>
          
        </div>
        <Image src={bg} alt='' className="absolute top-[-100px] h-[600px] w-full right-0 left-0 mx-auto lg:hidden" />

       
      </div>

    
  );
}
