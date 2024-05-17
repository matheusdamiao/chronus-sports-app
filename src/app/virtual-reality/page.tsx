import Image from "next/image";
import MainMenu from "../components/mainMenu";
import dots from './../../../public/images/dots-virtual-reality.svg'
import PartnerSection from "../components/sections/homepage/partnerSection";
import DiveIntoTheGame from "../components/sections/virtualRealityPage/diveIntoTheGame";
import HeroSectionVR from "../components/sections/virtualRealityPage/heroSectionVR";
import GameNewPerspective from "../components/sections/virtualRealityPage/gameNewPerspective";
import AthleteImmersive from "../components/sections/virtualRealityPage/athleteImmersive";
import ExperienceSports from "../components/sections/virtualRealityPage/experienceSports";
import GlassesSection from "../components/sections/virtualRealityPage/glassesSection";
import FacesVirtualReality from "../components/sections/virtualRealityPage/facesVirtualReality";
import FooterSection from "../components/sections/homepage/footerSection";
import CtaSection from "../components/sections/homepage/ctaSection";
  

  export default function Page() {

  

    return(
        <div className="bg-[#010317] h-full w-full  relative flex flex-col">
            <Image src={dots} alt='' className="w-full object-cover lg:h-[600px] h-[400px] mx-auto z-10  absolute"/>
            <MainMenu/>
            <HeroSectionVR/>
            <PartnerSection/>
            <DiveIntoTheGame/>
            <GameNewPerspective/>
            <AthleteImmersive/>
            <ExperienceSports/>
            <GlassesSection/>
            <FacesVirtualReality/>
            <CtaSection/>
            <FooterSection class="!mt-[150px]"/>
        </div>
    )
  }