'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonDesignSystem from "src/app/components/Button";
import InputField from "src/app/components/InputField";
import { useFormStore } from "src/app/store/formStore";


type IFormInput = {
  confirmCode: '',
}

export default function Page() {


  const data = useFormStore((state)=> state);
  
  
  const {setDetails} = useFormStore();
  const router = useRouter()


  const { register, handleSubmit, control, setError, setValue, watch, formState: {errors, defaultValues: formData} } = useForm<IFormInput>({mode: 'all'})
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {


    setDetails({
        password: data.confirmCode,
        
    });
    router.push('/register/password')

  }


  return (
    <div className="flex flex-col lg:pt-[88px] h-[80svh] ">
      <div className="flex flex-col items-center gap-spacing-3xl">
           <div className='hidden lg:block w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'> 
                 {/*  letter icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke='black'>
                        <path d="M2.16669 7.58337L11.012 13.7751C11.7283 14.2765 12.0864 14.5272 12.476 14.6243C12.8201 14.7101 13.18 14.7101 13.5241 14.6243C13.9136 14.5272 14.2718 14.2765 14.988 13.7751L23.8334 7.58337M7.36669 21.6667H18.6334C20.4535 21.6667 21.3636 21.6667 22.0588 21.3125C22.6703 21.0009 23.1675 20.5037 23.4791 19.8922C23.8334 19.197 23.8334 18.2869 23.8334 16.4667V9.53337C23.8334 7.7132 23.8334 6.80312 23.4791 6.1079C23.1675 5.49638 22.6703 4.99919 22.0588 4.6876C21.3636 4.33337 20.4535 4.33337 18.6334 4.33337H7.36669C5.54652 4.33337 4.63643 4.33337 3.94122 4.6876C3.32969 4.99919 2.8325 5.49638 2.52092 6.1079C2.16669 6.80312 2.16669 7.7132 2.16669 9.53337V16.4667C2.16669 18.2869 2.16669 19.197 2.52092 19.8922C2.8325 20.5037 3.32969 21.0009 3.94122 21.3125C4.63643 21.6667 5.54652 21.6667 7.36669 21.6667Z" stroke='white' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
            </div>
            <h2 className="text-primary-base-white lg:text-display-sm font-semibold lg:leading-display-sm text-display-xs leading-display-xs text-center ">Confirm your account</h2>
      </div>


      <form className="pt-spacing-4xl px-4 flex flex-col gap-spacing-2xl w-full !max-w-[385px]"  onSubmit={handleSubmit(onSubmit)}>

          <InputField 
              className="bg-transparent border-[#292E38]"
              primary={"big-dark"}
              placeholder="_ _ _ _ _ _ _ _ "
              titulo="Enter the code we sent to your email"
              label="confirmCode"
              sizes={'sm'}
              {...register('confirmCode', {
              required: 'Please, add a valid code',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigo'
              }} )}           
          
              error={errors.confirmCode}
          />

          
           <ButtonDesignSystem label="Confirm" className="w-full !border-none !outline-none rounded-[9px]" normal={'lg'} buttonType={"primary"} />       
      </form>

    </div>
   
  );
}