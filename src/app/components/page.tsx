'use client'
import Image from "next/image";
import { ButtonDesignSystem } from "./Button";
import placeHolderWhite from './../../../public/icons/placeholder-white.svg'
import placeHolderGray from './../../../public/icons/placeholder-gray.svg'
import placeHolderBlack from './../../../public/icons/placeholder-black.svg'
import placeHolderBlue from './../../../public/icons/placeholder-blue.svg'

import dotWhite from './../../../public/icons/dot-white.svg'
import dotGreen from './../../../public/icons/dot-green.svg'
import dotGray from './../../../public/icons/dot-gray.svg'
import InputField from "./InputField";

import email from './../../../public/icons/email.svg'
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React, { useId } from "react";
import ReactSelect from "react-select";


type IFormInput = {
  currency: string,
  Email: string,
  Name: string;
  Preço: string;
  Phone: string;
  phoneType: string;
  favoriteSport: string;
}


const selectOptions = [
  { value: 'soccer', label: 'Soccer' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'baseball', label: 'Baseball' }
]

export default function Page() {

  const { register, handleSubmit, getValues, control, watch, formState: {errors} } = useForm<IFormInput>({mode: 'all'})
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
  console.log(data);

    
    
  } 


  React.useEffect(()=>{
    console.log(getValues('currency'))
    const moeda = watch('currency');
    console.log(moeda);
  },[])
  

  
  return (
    <>
    <h1 className="w-full m-auto flex items-center justify-center text-display-lg px-6 pt-16 lg:text-display-xl">All Design System Components </h1>
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



      <div className="flex gap-10 lg:px-0 px-6  flex-wrap pt-20" >

    
          <form  onSubmit={handleSubmit(onSubmit)}>

             <div className="flex flex-col gap-4">
                <p className="mb-6">Input Field Components</p>

                <InputField 
                placeholder="Olivia da Silva"
                label="Name"
                sizes={'sm'}
                {...register('Name', {
                  required: 'Add your name',
                  minLength: {
                  value: 4,
                  message: 'Pelo menos 4 digitos, amigo'
                },}
              
              )}
                error={errors.Name}
                />
                
                <InputField 
                placeholder="olivia@untitledui.com"
                label="Email"
                sizes={'sm'}
                {...register('Email', { 
                  required: "Add your e-mail",
                  pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'E-mail format is not correct'
                } },
                
              )}
                error={errors.Email}
                hintText="Don't worry. We wont' send any spam."
                leftIcon={<Image src={email.src} alt='icon' width={20} height={20}/>} 
                />

                <InputField 
                placeholder="(21) 99493-3029"
                label="Phone"
                mask={watch("phoneType", 'BR')}
                sizes={'sm'}
                {...register('Phone', {
                  required: 'Add your phone number.',
                  minLength: {
                  value: 5,
                  message: 'Precisa adicionar seu número inteiro!'
                }})}          
                error={errors.Phone}
                // hintText="This is a hint text to help user."
                leftSelect={<select defaultValue={'BR'} {...register("phoneType")}> 
                              <option value="BR">BR</option> 
                              <option value="US">US</option> 
                            </select>} 
                />

               <InputField 
                placeholder="43.000"
                label="Preço"
                mask={watch("currency", 'real')}
                sizes={'sm'}
                {...register('Preço', {
                  required: 'Please, add some value.',
                  minLength: {
                  value: 4,
                  message: 'Pelo menos 4 digitos, amigo'
                },})}
                error={errors.Preço}
                leftSelect={<select defaultValue={'real'} {...register("currency")}> 
                              <option value="real">R$</option> 
                              <option value="dolar">$</option> 
                             </select>} 
                />


                <Controller 
                control={control}
                name="favoriteSport"
                rules={{
                  required: 'Need to choose one option'
                }}            
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <ReactSelect
                    instanceId={useId()}
                    onChange={onChange}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderWidth: '1px',
                        outline: '0',
                        border: state.isFocused ? '1px solid #85A5EB' : errors.favoriteSport ? '1px solid #FDA29B': '1px solid #D0D5DD',
                        borderRadius: '8px',
                        "&:hover": {
                          borderColor: "none"
                        },

                        boxShadow: state.isFocused ? '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(45, 109, 233, 0.14)' : '0' ,
                      }),
                      valueContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        minHeight: '40px'
                      }),
                        menuList: (baseStyles, state) =>({
                          ...baseStyles,
                          border: '1px solid #D0D5DD',
                        // backgroundColor: state.focusedOption ? 'red' : 'transparent',
                        }),
                       option: (baseStyles, state) => ({
                        ...baseStyles,
                          
                          backgroundColor: state.isFocused ? '#85A5EB' : 'transparent',
                          color: state.isSelected ? '#101828' : '#475467',
                          fontWeight: state.isSelected ? '600' : '400'
                      })
                    }}
                    onBlur={onBlur}
                    options={selectOptions}
                  />
                )}
                />
                    {errors.favoriteSport && <small className="text-primary-error-500 mt-0">{errors.favoriteSport.message}</small>}
                

                <input type="submit"/>  
             </div>
           </form>
      </div>
     
    </div>
    </>
  );
}
