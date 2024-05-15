import Image from "next/image";
import MainMenu from "../components/mainMenu";
import logoMobile from './../../../public/images/logos-chronos/logo-menu-mobile-simple.svg'
import bookIcon from './../../../public/icons/book-open.svg'
import cubeIcon from './../../../public/icons/cube-01.svg'
import chatIcon from './../../../public/icons/message-chat-circle.svg'
import handIcon from './../../../public/icons/waving-hand.svg'

import bg from './../../../public/images/dots.svg'
import InputField from "../components/InputField";
import ButtonDesignSystem from "../components/Button";
import FooterSection from "../components/sections/homepage/footerSection";
import Link from "next/link";


export default function Page() {
    return (
        <div className="flex flex-col">
            <MainMenu/>
            <div className="px-4 lg:px-0 flex flex-col items-center h-full relative pt-14">
                <Image src={bg} alt='' className="absolute w-[996px] h-[700px] top-[-120px] right-0 left-0 mx-auto lg:block hidden"/>
                <span className="lg:w-[996px] lg:h-[594px] top-0 absolute hidden lg:block mx-auto bg-[radial-gradient(44.41%_69.89%_at_50%_8.52%,rgba(1,3,23,0.00)_21.16%,#010317_99.26%)] "></span>
            </div>
            <div className="px-4 lg:px-0 flex flex-col h-full mt-[55px] items-center justify-center gap-6 z-50 ">
               <Image src={logoMobile} alt='' width={50} height={50} className='z-20 hidden lg:block'/>  
               <h2 className="text-display-md leading-display-md text-primary-base-white font-semibold flex gap-2">&quot;Hello, stranger.” <Image src={handIcon} width={44} height={44} alt='' className="z-30 rotate-hand transition-transform"/></h2>
               <p className=" z-30  max-w-[559px]  w-full text-center text-primary-gray-300 text-text-md leading-text-md">Thank you for your interest in registering with us. To continue with your registration, please leave your best e-mail address so that we can contact you and request the necessary information. A page dedicated to the registration of non-Brazilian users will soon be available.</p>
               <p className="pt-[20px]  max-w-[559px] z-30 w-full text-center text-primary-gray-300 text-text-md leading-text-md">We look forward to hearing from you. A big hug from the Mooh team!</p>
            </div>
            <div className="px-4 lg:px-0 max-w-[559px] w-full gap-5 mt-[48px] mx-auto flex lg:flex-nowrap lg:flex-row flex-col flex-wrap z-40 ">
                <InputField label='email' titulo='Email' placeholder='stevejobs@apple.com' primary={'dark-subscribe-foreigner'} sizes="md"/>
                <ButtonDesignSystem label="Send"  buttonType={"primary"} normal={"lg"} className="px-[18px] lg:w-[101px] w-full lg:self-end border-none !rounded-md lg:mt-[8px]" />
            </div>
            <div className="px-4 lg:px-8 mt-[64px] max-w-[559px] mx-auto w-full  ">
                 <span className="bg-primary-gray-800 h-[1px] lg:w-[560px] w-[90%] absolute mx-auto left-0 right-0"></span>
                 <div className="mt-[64px] flex flex-col">
                    <h3 className="text-display-xs font-semibold leading-display-xs  pb-[40px] text-primary-base-white">Want to explore further?</h3>
                    <div className="flex flex-col gap-5">
                        <Link href='/' className="flex gap-5 cursor-pointer">
                            <div className="border-primary-gray-800 flex items-center justify-center bg-primary-gray-900 rounded-lg w-[48px] h-[48px]">
                                <Image src={bookIcon} className="flex-0 grow-0 flex-shrink-0" alt='' width={24} height={24} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-text-xl leading-text-xl text-primary-base-white font-semibold">Main page</h4>
                                <p className="text-primary-gray-300 text-text-md leading-text-md font-thin">Return to the main page.</p>
                            </div>
                        </Link>
                        <span className="bg-primary-gray-800 h-[1px] w-full"></span>
                    </div>

                    <div className="flex flex-col gap-5 mt-[20px]">
                        <Link href='/termos_de_uso.pdf' target='_blank' className="flex gap-5">
                            <div className="border-primary-gray-800 flex items-center justify-center bg-primary-gray-900 rounded-lg w-[48px] h-[48px]">
                                <Image src={cubeIcon} className="flex-0 grow-0 flex-shrink-0" alt='' width={24} height={24} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-text-xl leading-text-xl text-primary-base-white font-semibold">Documentation</h4>
                                <p className="text-primary-gray-300 text-text-md leading-text-md font-thin">Read our Terms and Conditions.</p>
                            </div>
                        </Link>
                        <span className="bg-primary-gray-800 h-[1px] w-full"></span>
                    </div>

                    <div className="flex flex-col gap-5 mt-[20px]">
                        <div className="flex gap-5">
                            <div className="border-primary-gray-800 flex items-center justify-center bg-primary-gray-900 rounded-lg w-[48px] h-[48px]">
                                <Image src={chatIcon} className="flex-0 grow-0 flex-shrink-0" alt='' width={24} height={24} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-text-xl leading-text-xl text-primary-base-white font-semibold">Chat to us</h4>
                                <p className="text-primary-gray-300 text-text-md leading-text-md font-thin">Can&apos;t find what you&apos;re looking for? <br /> Email us: <a href="mailto:contato@moohtech.com" className="text-primary-brand-400 underline">contato@moohtech.com</a></p>
                            </div>
                        </div>
                        <span className="bg-primary-gray-800 h-[1px] w-full"></span>
                    </div>
                 </div>   
            </div>
            <div className="lg:mt-[50px] mt-0">
              <FooterSection class="!mt-[100px]" />
            </div>
        </div>
    )
}