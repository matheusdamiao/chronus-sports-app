'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useId } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import ButtonDesignSystem from "src/app/components/Button";
import InputField from "src/app/components/InputField";
import { useFormStore } from "src/app/store/formStore";


type IFormInput = {
  CEP: string;
  Estate: string;
  District: string;
  Street: string;
  number: string;
}


const selectOptions = [
  { value: 'masculine', label: 'Masculine' },
  { value: 'feminine', label: 'Feminine' },
 
]

const favoriteSports = [
  { value: 'basketball', label: 'Basketball' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'volleyball', label: 'Volleyball' },
]


const heartTeams = [
  { value: 'corinthians', label: 'Corinthians' },
  { value: 'são paulo', label: 'São Paulo' },
  { value: 'fluminense', label: 'Fluminense' },
  { value: 'flamengo', label: 'Flamengo' },
]







export default function Page() {



  const {formData: storeFormData, setDetails} = useFormStore();
  const router = useRouter()


  const { register, handleSubmit, control, setValue, watch, formState: {errors, defaultValues: formData} } = useForm<IFormInput>({mode: 'all'})
  const id = useId();
  const id2 = useId();
  const id3 = useId();




  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    setDetails({
        CEP: data.CEP,
        Estate: data.Estate,
        District: data.District,
        Street: data.Street,
        number: data.number,
    });
    
    router.push('/register/password')

  }




  return (
    <div className="flex flex-col items-center lg:pt-[88px]">
      <div className="flex flex-col items-center gap-spacing-3xl">
           <div className='hidden lg:block w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'> 
                  {/*  home icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1224_23267)">
                            <path d="M5.41667 13H3.25L13 3.25L22.75 13H20.5833" stroke='#FFFF' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.41669 13V20.5833C5.41669 21.158 5.64496 21.7091 6.05129 22.1154C6.45762 22.5217 7.00872 22.75 7.58335 22.75H18.4167C18.9913 22.75 19.5424 22.5217 19.9488 22.1154C20.3551 21.7091 20.5834 21.158 20.5834 20.5833V13" stroke='#FFFF' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.75 22.75V16.25C9.75 15.6754 9.97827 15.1243 10.3846 14.718C10.7909 14.3116 11.342 14.0834 11.9167 14.0834H14.0833C14.658 14.0834 15.2091 14.3116 15.6154 14.718C16.0217 15.1243 16.25 15.6754 16.25 16.25V22.75" stroke='#FFFF' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1224_23267">
                            <rect width="26" height="26" stroke='#FFFF'/>
                            </clipPath>
                        </defs>
                    </svg>
            </div>
            <h2 className="text-primary-base-white lg:text-display-sm font-semibold lg:leading-display-sm text-display-xs leading-display-xs text-center ">Enter your address</h2>
      </div>


      <form className="pt-spacing-4xl flex flex-col gap-spacing-2xl w-full !max-w-[360px]"  onSubmit={handleSubmit(onSubmit)}>

          <InputField 
              className="bg-transparent border-[#292E38]"
              primary={"dark"}
              placeholder="00000-000"
              titulo="CEP"
              label="CEP"
              sizes={'sm'}
              {...register('CEP', {
              required: 'Add your zip code',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigo'
              }} )}           
              
              error={errors.CEP}
          />

            <InputField 
                className="bg-transparent"
                placeholder="Santa Catarina - Florianópolis"
                label="Estate"
                titulo="Estate - City"
                sizes={'sm'}
                primary={'dark'}
                {...register('Estate', { 
                  required: "Add your residential estate and city",
                } )
                } 
                error={errors.Estate}
                hintText="Don't worry. We wont' send any spam."
              
            />

          <InputField 
              className=""
              primary={"dark"}
              titulo="District" 
              placeholder="Itacorubi"
              label="District"
              sizes={'sm'}
              {...register('District', {
              required: 'Add your residential district',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigo'
              }
            }
              
              )}
              error={errors.District}
          />

            <div className="flex gap-5">

                <InputField 
                    primary={"dark"}
                    placeholder="St. Sete de Setembro"
                    titulo='Street'
                    label="Street"
                    className="w-full"
                    sizes={'sm'}
                    {...register('Street', {
                    required: 'Add your street name',
                    minLength: {
                    value: 4,
                    message: 'Pelo menos 4 digitos, amigão'
                    },}
                    
                    )}
                    error={errors.Street}
                />


                  <InputField 
                      placeholder="620"
                      label="number"
                      primary={'small-dark'}
                      titulo="Number"
                      sizes={'sm'}
                      {...register('number', {
                        required: 'Add your number',
                        pattern: {
                          value: /.*\d.*/,
                          message: 'At least one number'
                        }
                      })
                      }          
                      error={errors.number}
                      // hintText="This is a hint text to help user."
                  />
            </div>

  

           <ButtonDesignSystem label="Continue" className="w-full !border-none !outline-none rounded-[9px]" normal={'lg'} buttonType={"primary"} />       
      </form>

    </div>
   
  );
}