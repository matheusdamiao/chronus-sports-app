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
import HeroSectionHome from "./components/sections/homepage/heroSectionHome";


export const metadata = {
  title: "Chronus Sports",
};

export default function Page() {

  return (
   
    <div className="bg-[#010317] h-full lg:pt-10 relative flex flex-col">
      <MainMenu/>
      <HeroSectionHome/>
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
