import React from "react";
import MainMenu from "../components/mainMenu";
import Image from "next/image";
import shirt from './../../../public/icons/shirt-1.svg'
import visualize from './../../../public/icons/visualize.svg'
import medal from './../../../public/icons/medal.svg'
import partnerHeart from './../../../public/icons/heart-partner.svg'
import PartnerSection from "../components/sections/homepage/partnerSection";
import CarouselPartner from "../components/sections/partnerPage/carouselPartner";
import PricingPartnerSection from "../components/sections/partnerPage/pricingPartnerSection";
import CtaSection from "../components/sections/homepage/ctaSection";
import FooterSection from "../components/sections/homepage/footerSection";
import HeroSectionPartner from "../components/sections/partnerPage/heroSectionPartner";


export const metadata = {
  title: "Partners",
};

export default function Page() {

  return (
    <div className="bg-[#010317] h-full relative flex flex-col">
      <MainMenu/>
      <HeroSectionPartner/>
      <section className="max-w-4xl w-full mx-auto lg:pb-12 lg:justify-center lg:flex lg:px-0 px-[26px] lg:flex-nowrap grid grid-cols-2 gap-[30px] lg:gap-[58px] mt-[-50px] z-50">
        <div className="flex flex-col">
          <div className="lg:inline-flex flex lg:flex-row flex-col lg:items-center  gap-2">
            <Image src={shirt} alt='' className="flex-grow-0 flex-shrink-0 flex-0 self-start mt-1 " />
            <p className="text-primary-base-white text-text-md leading-text-md">Access athletes from</p>
          </div>
          <p className="text-primary-base-white text-text-md leading-text-md">all sports disciplines.</p>
        </div>

        <div className="flex flex-col">
          <div className="lg:inline-flex flex lg:flex-row  flex-col lg:items-center  gap-2">
            <Image src={visualize} alt='' className="flex-grow-0 flex-shrink-0 flex-0 self-start mt-1 " />
            <p className="text-primary-base-white text-text-md leading-text-md">Visualize ecosystems</p>
          </div>
          <p className="text-primary-base-white text-text-md leading-text-md">of professional athletes.</p>
        </div>

        <div className="flex flex-col order-4 lg:order-3">
          <div className="lg:inline-flex flex lg:flex-row  flex-col lg:items-center  gap-2">
            <Image src={medal} alt='' className="flex-grow-0 flex-shrink-0 flex-0 self-start mt-1 " />
            <p className="text-primary-base-white text-text-md leading-text-md">Consume only</p>
          </div>
          <p className="text-primary-base-white text-text-md leading-text-md">high-quality content.</p>
        </div>

        <div className="flex flex-col order-3 lg:order-4">
          <div className="lg:inline-flex flex lg:flex-row  flex-col lg:items-center  gap-2">
            <Image src={partnerHeart} alt='' className="flex-grow-0 flex-shrink-0 flex-0 self-start mt-1 " />
            <p className="text-primary-base-white text-text-md leading-text-md">Be part of an</p>
          </div>
          <p className="text-primary-base-white text-text-md leading-text-md">enriching community.</p>
        </div>
      </section>
      <section className="pt-[70px]">
        <PartnerSection/>
      </section>
      <CarouselPartner/>
      <PricingPartnerSection/>
      <div className="lg:mt-[100px] lg:mb-[100px] h-full">
        <CtaSection/>
      </div>
      <FooterSection/>
    </div>
  );
}