import Image from "next/image";
import { ButtonDesignSystem } from "./components/Button";
import placeHolderWhite from './../../public/icons/placeholder-white.svg'
import placeHolderGray from './../../public/icons/placeholder-gray.svg'
import placeHolderBlack from './../../public/icons/placeholder-black.svg'
import placeHolderBlue from './../../public/icons/placeholder-blue.svg'

import dotWhite from './../../public/icons/dot-white.svg'
import dotGreen from './../../public/icons/dot-green.svg'
import dotGray from './../../public/icons/dot-gray.svg'





export const metadata = {
  title: "Chronus Sports",
};

export default function Page() {

  
  return (
    <>
    <div className="bg-primary-gray-900 h-[100svh] py-10 relative flex">
      <span className="ellipse"></span>
      <div className="flex flex-col items-center w-full gap-spacing-xl px-spacing-xl">
        <h1 className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto">Welcome to the Largest Sports Platform in the World!</h1>
        <h4 className="mx-auto max-w-[530px] text-text-md font-regular text-primary-gray-200 text-center">CHRONUS Sports is your gateway to the most comprehensive, diverse, and exciting sports content platform in the World.</h4>
      </div>
    </div>
    <div className="h-full flex flex-col items-center justify-center py-24 flex-wrap">

      <div className="flex gap-10 lg:px-0 px-6  flex-wrap">
    
        <div className="flex flex-col">
          <p className="mb-6">Primary Buttons Default Icons</p>
          <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='primary' normal={'sm'} leftIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='primary' normal={'md'} leftIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='primary' normal={'lg'} leftIcon={<Image  src={placeHolderWhite.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='primary' normal={'xl'} leftIcon={<Image  src={placeHolderWhite.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='primary' normal={'2xl'} leftIcon={<Image  src={placeHolderWhite.src} alt='' width={24} height={24}/>} rightIcon={<Image src={placeHolderWhite.src} alt='' width={24} height={24}/>}/>
          <ButtonDesignSystem disabled label="Button CTA" className="my-2" buttonType='primary' normal={'2xl'} leftIcon={<Image  src={placeHolderGray.src} alt='' width={24} height={24}/>} rightIcon={<Image src={placeHolderGray.src} alt='' width={24} height={24}/>}/>
        </div>

        
        <div className="flex flex-col">
          <p className="mb-6">Primary Buttons with a Dot Leading</p>

          <ButtonDesignSystem label="Button CTA" className="my-2" buttonType='primary' dotLeading={"sm"} leftIcon={<Image src={dotWhite.src} alt='' width={10} height={10}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2" buttonType='primary'  dotLeading={"md"} leftIcon={<Image src={dotWhite.src} alt='' width={10} height={10}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2" buttonType='primary' dotLeading={"lg"} leftIcon={<Image src={dotWhite.src} alt='' width={10} height={10}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2" buttonType='primary' dotLeading={"xl"} leftIcon={<Image src={dotWhite.src} alt='' width={10} height={10}/>}/>
          <ButtonDesignSystem label="Button CTA" className="my-2" buttonType='primary' dotLeading={"2xl"} leftIcon={<Image src={dotWhite.src} alt='' width={10} height={10}/>}/>
          <ButtonDesignSystem disabled label="Button CTA" className="my-2" dotLeading={"2xl"} leftIcon={<Image src={dotGray.src} alt='' width={10} height={10}/>}/>

        </div>

        <div className="flex flex-col">
          <p className="mb-6">Primary Buttons Only Icon</p>


          <ButtonDesignSystem className="my-2"  onlyIcon={"sm"} centralIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem  className="my-2" onlyIcon={"md"} centralIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem  className="my-2" onlyIcon={"lg"} centralIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem  className="my-2" onlyIcon={"xl"} centralIcon={<Image src={placeHolderWhite.src} alt='' width={20} height={20}/>}/>
          <ButtonDesignSystem  className="my-2" onlyIcon={"2xl"} centralIcon={<Image src={placeHolderWhite.src} alt='' width={24} height={24}/>}/>
          <ButtonDesignSystem  disabled className="my-2" onlyIcon={"2xl"} centralIcon={<Image src={placeHolderGray.src} alt='' width={24} height={24}/>}/>

        </div>

      </div>


      <div className="flex gap-10 lg:px-0 px-6  flex-wrap pt-20">

          <div className="flex flex-col">
             <p className="mb-6">Secondary Gray Buttons Default</p>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'sm'} leftIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'md'} leftIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'lg'} leftIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'xl'} leftIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'2xl'} leftIcon={<Image src={placeHolderBlack.src} alt='' width={24} height={24}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={24} height={24}/>}/>
             <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' normal={'2xl'} leftIcon={<Image src={placeHolderGray.src} alt='' width={24} height={24}/>} rightIcon={<Image src={placeHolderGray.src} alt='' width={24} height={24}/>}/>
          
          </div>

          <div className="flex flex-col">
             <p className="mb-6">Secondary Gray Buttons with a Dot Leading</p>
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'sm'} leftIcon={<Image src={dotGreen.src} alt='' width={10} height={10}/>} />
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'md'} leftIcon={<Image src={dotGreen.src} alt='' width={10} height={10}/>} />
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'lg'} leftIcon={<Image src={dotGreen.src} alt='' width={10} height={10}/>} />
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'xl'} leftIcon={<Image src={dotGreen.src} alt='' width={10} height={10}/>} />
             <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'2xl'} leftIcon={<Image src={dotGreen.src} alt='' width={10} height={10}/>} />
             <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0" buttonType='secondaryGray' dotLeading={'2xl'} leftIcon={<Image src={dotGray.src} alt='' width={10} height={10}/>} />

          </div>
          
          <div className="flex flex-col">
             <p className="mb-6">Secondary Gray Buttons Only Icon</p>
             <ButtonDesignSystem  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'sm'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'md'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'lg'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'xl'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'2xl'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>
             <ButtonDesignSystem disabled  className="my-2 flex-shrink-0" buttonType='secondaryGray' onlyIcon={'2xl'} centralIcon={<Image  src={placeHolderBlack.src} alt='' width={20} height={20}/>} rightIcon={<Image src={placeHolderBlack.src} alt='' width={20} height={20}/>}/>

          </div>

         
      </div>


      <div className="flex gap-10 lg:px-0 px-6  flex-wrap pt-20" >


            <div className="flex flex-col">
               <p className="mb-6">Secondary Color Button Default</p>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'sm'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderBlue.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'md'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderBlue.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'lg'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderBlue.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderBlue.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderBlue.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderGray.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderGray.src} alt='' width={20} height={20}/>}/>
 
            </div>


            <div className="flex flex-col">
               <p className="mb-6">Secondary Color Buttons with a Dot Leading</p>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'sm'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>} />
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'md'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>} />
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'lg'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'xl'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>} />
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'2xl'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>} />
               <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='secondaryColor' dotLeading={'2xl'} leftIcon={<Image alt='' src={ dotGreen.src} width={10} height={10}/>} />
 
            </div>


            <div className="flex flex-col">
               <p className="mb-6">Secondary Color Buttons Only Icon</p>
               <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'sm'}  centralIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'md'}  centralIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'lg'} centralIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'xl'}  centralIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'2xl'}  centralIcon={<Image src={ placeHolderBlue.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem disabled  className="my-2 flex-shrink-0 group" buttonType='secondaryColor' onlyIcon={'2xl'} centralIcon={<Image src={ placeHolderGray.src} alt='' width={20} height={20}/>}/>
 
            </div>

      </div>

      <div className="flex gap-10 lg:px-0 px-6  flex-wrap pt-20" >

              <div className="flex flex-col">
                <p className="mb-6">Button Destructive Primary Default</p>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'sm'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'md'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'lg'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
               <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderGray.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderGray.src} alt='' width={20} height={20}/>}/>


              </div>


              <div className="flex flex-col">
                <p className="mb-6">Button Destructive Primary Default</p>
                <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' dotLeading={'sm'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ dotWhite.src} width={10} height={10}/>} />
                <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'md'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
                <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'lg'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
                <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
                <ButtonDesignSystem label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderWhite.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>
                <ButtonDesignSystem disabled label="Button CTA" className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' normal={'2xl'} leftIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={ placeHolderGray.src} width={20} height={20}/>} rightIcon={<Image src={ placeHolderWhite.src} alt='' width={20} height={20}/>}/>

              </div>

              <div className="flex flex-col">
                <p className="mb-6">Button Destructive Primary Default</p>
                <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'sm'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderWhite.src} width={20} height={20}/>} />
                <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'md'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderWhite.src} width={20} height={20}/>} />
                <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'lg'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderWhite.src} width={20} height={20}/>} />
                <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'xl'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderWhite.src} width={20} height={20}/>} />
                <ButtonDesignSystem  className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'2xl'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderWhite.src} width={20} height={20}/>} />
                <ButtonDesignSystem disabled className="my-2 flex-shrink-0 group" buttonType='destructivePrimary' onlyIcon={'2xl'} centralIcon={<Image alt='' className="group-hover:stroke-primary-brand-700 " src={placeHolderGray.src} width={20} height={20}/>} />

              </div>  
      </div>
     
    </div>
    </>
  );
}
