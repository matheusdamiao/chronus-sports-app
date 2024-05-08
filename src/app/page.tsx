import React from "react";
import ButtonDesignSystem from "./components/Button";
import Link from "next/link";
import Image from "next/image";
import heroDesktop from './../../public/images/hero-home-desk.webp'
import heroMobile from './../../public/images/home-mobile-up.webp'

import MainMenu from "./components/mainMenu";
import PartnerSection from "./components/sections/homepage/partnerSection";
import FunctionalitiesSection from "./components/sections/homepage/FunctionalitiesSection";
import CarouselCardsSection from "./components/sections/homepage/carouselCardsSection";
import SportsCategoriesSection from "./components/sections/homepage/sportsCategoriesSection";
import TrackPerformanceSection from "./components/sections/homepage/trackPerformanceSection";
import MultiSensorySection from "./components/sections/homepage/multiSensorySectiont";
import CtaSection from "./components/sections/homepage/ctaSection";
import NewsLetterSection from "./components/sections/homepage/newsLetterSection";
import FooterSection from "./components/sections/homepage/footerSection";


export const metadata = {
  title: "Chronus Sports",
};

export default function Page() {

  return (
   
    <div className="bg-[#010317] h-full lg:pt-10 relative flex flex-col">
      <MainMenu/>
      <span className="ellipse hidden lg:block"></span>
      <span className="ellipse-mobile lg:hidden block"></span>
      <div className="flex flex-col items-center w-full gap-spacing-xl px-spacing-xl">
        <h1 className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto">Welcome to the Largest Sports Platform in the World!</h1>
        <h4 className="mx-auto max-w-[530px] lg:text-text-md text-text-lg px-3 lg:px-0 font-thin text-primary-gray-200 text-center">CHRONUS Sports is your gateway to the most comprehensive, diverse, and exciting sports content platform in the World.</h4>
        <Link href='/register/details' className="cursor-pointer z-40"> <ButtonDesignSystem label="Register now" buttonType={"primary"} normal={"lg"} className="border-none self-center lg:mt-[8px] mt-[35px]" /></Link>
      </div>
      <div className="lg:mx-auto lg:max-h-[890px] relative lg:mb-[75px] lg:mt-[100px]">
        <span className="blur-desktop-bg-hero-home absolute lg:block hidden"></span>
        <Image src={heroDesktop} priority alt='' width={1146} height={453.45} className="relative z-20 hidden lg:block flex-0"/>
        <div className="w-full h-[330px] mt-[60px] pb-[50px]  lg:py-0 lg:hidden relative flex items-center justify-center">
           <span className="blur-mobile-bg-hero-home absolute lg:hidden"></span>
           <Image src={heroMobile} priority alt='' className="max-w-[500px] w-full block lg:hidden z-[99]"/>
        </div>
      </div>
      <PartnerSection/>
      <FunctionalitiesSection/>
      <CarouselCardsSection/>
      <SportsCategoriesSection/>
      <TrackPerformanceSection/>
      <MultiSensorySection/>
      <CtaSection/>
      <NewsLetterSection/>
      <FooterSection/>
      
    </div>
   
    
  );
}
