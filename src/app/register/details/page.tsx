'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useId, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import AsyncSelect from 'react-select/async';
import ButtonDesignSystem from "src/app/components/Button";
import InputField from "src/app/components/InputField";
import { useFormStore } from "src/app/store/formStore";
import { maskBirthday, maskBrazilianPhoneNumber2, maskCPF, maskUSPhoneNumber } from "src/app/utils/maksFunctions";


type IFormInput = {
  email: string,
  name: string;
  phoneType: string;
  gender: OptionsType;
  favoriteSport: OptionsType;
  birthday: string;
  phone: string;
  heartTeam: OptionsType;
  document: string
}

type OptionsType = {
  value: string,
  label: string
}



export default function Page() {
  const [teams, setTeams] = useState([]);

  const router = useRouter();
  const {formData: storeFormData, setDetails} = useFormStore();


  const { register, handleSubmit, control, setValue, watch, formState: {errors}}  = useForm<IFormInput>({mode: 'all', defaultValues: {
    favoriteSport: storeFormData.favoriteSport,
    name: storeFormData.name,
    birthday: storeFormData.birthday,
    document: storeFormData.document,
    email: storeFormData.email,
    heartTeam: storeFormData.heartTeam,
    phone: storeFormData.phone,
    phoneType: storeFormData.phoneType,
    gender: storeFormData.gender,
  }})
  const id = useId();
  const id2 = useId();
  const id3 = useId();


  const birthday = watch('birthday');
  const phone = watch('phone');
  const phoneType = watch('phoneType');
  

  useEffect(()=>{
    if(birthday !== ''){
    const birthMasked = maskBirthday(String(birthday));
    setValue('birthday', birthMasked);
    }


    if(phone !== '' && phoneType === 'BR'){
      const phoneMasked = maskBrazilianPhoneNumber2(String(phone));
      setValue('phone', phoneMasked);
      }
    if(phone !== '' && phoneType === 'US'){
        const phoneMasked = maskUSPhoneNumber(String(phone));
        setValue('phone', phoneMasked);
      }

    
    


  },[birthday, phone, phoneType, setValue])
  

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    setDetails({
      birthday: data.birthday,
      document: data.document,
      gender: data.gender,
      email: data.email,
      favoriteSport: data.favoriteSport,
      heartTeam: data.heartTeam,
      name: data.name,
      phone: data.phone,
      phoneType: data.phoneType
    });
    
    router.push('/register/address');
    
  }


  const mapResponseToValuesAndLabels = (data: any) => ({
    value: data.title,
    label: data.title,
  });


  const mapResponseToValuesAndLabelsTeams = (data: any) => ({
    value: data.name,
    label: data.name,
  });

  const genderOptions = async(inputValue: string) => {
    const data = await fetch('https://domains.api.core.chronus-sports.biss.com.br/api/v1/gender')
      .then((response) => response.json())
      .then((response) => response.data.response.map(mapResponseToValuesAndLabels))
      .then((final) =>
        final.filter((i: any) => i.label.toLowerCase().includes(inputValue.toLowerCase()))
      );
    return data;
    }
    

    const teamsOptions = async(inputValue: string) => {
      const data = await fetch('https://domains.api.core.chronus-sports.biss.com.br/api/v1/Team')
        .then((response) => response.json())
        .then((response) => response.data.response.map(mapResponseToValuesAndLabelsTeams))
        .then((final) =>
          final.filter((i: any) => i.label.toLowerCase().includes(inputValue.toLowerCase()))
        );
        console.log(data);
      return data;
      }  
  

      const sportsOptions = async(inputValue: string) => {
        const data = await fetch('https://domains.api.core.chronus-sports.biss.com.br/api/v1/modality')
          .then((response) => response.json())
          .then((response) => response.data.response.map(mapResponseToValuesAndLabels))
          .then((final) =>
            final.filter((i: any) => i.label.toLowerCase().includes(inputValue.toLowerCase()))
          );
          console.log(data);
        return data;
        }  

      


  return (
    <div className="flex flex-col items-center lg:pt-[88px]">
      <div className="flex flex-col items-center gap-spacing-3xl">
           <div className='hidden lg:block w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'> 
                    {/*  user icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1227_27312)">
                        <path d="M8.66669 7.58333C8.66669 8.73261 9.12323 9.83481 9.93589 10.6475C10.7485 11.4601 11.8507 11.9167 13 11.9167C14.1493 11.9167 15.2515 11.4601 16.0642 10.6475C16.8768 9.83481 17.3334 8.73261 17.3334 7.58333C17.3334 6.43406 16.8768 5.33186 16.0642 4.5192C15.2515 3.70655 14.1493 3.25 13 3.25C11.8507 3.25 10.7485 3.70655 9.93589 4.5192C9.12323 5.33186 8.66669 6.43406 8.66669 7.58333Z" stroke='#FFFF'  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.5 22.75V20.5833C6.5 19.4341 6.95655 18.3319 7.7692 17.5192C8.58186 16.7065 9.68406 16.25 10.8333 16.25H15.1667C16.3159 16.25 17.4181 16.7065 18.2308 17.5192C19.0435 18.3319 19.5 19.4341 19.5 20.5833V22.75" stroke='#FFFF' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1227_27312">
                        <rect width="26" height="26" fill='white'/>
                        </clipPath>
                        </defs>
                    </svg>
            </div>
            <h2 className="text-primary-base-white lg:text-display-sm font-semibold lg:leading-display-sm text-display-xs leading-display-xs text-center ">Enter your details</h2>
      </div>

      <form className="pt-spacing-4xl flex flex-col px-4 gap-spacing-2xl w-full max-w-[360px] "  onSubmit={handleSubmit(onSubmit)}>

          <InputField 
              // className="bg-transparent border-[#292E38]"
              primary={"dark"}
              placeholder="Insert your name"
              titulo="Full Name"
              label="name"
              sizes={'sm'}
              {...register('name', {
              required: 'Add your name',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigo'
              }} )}           
              
              error={errors.name}
          />

            <InputField 
                className="bg-transparent"
                placeholder="olivia@untitledui.com"
                label="email"
                titulo="Email"
                sizes={'sm'}
                primary={'dark'}
                {...register('email', { 
                  required: "Add your e-mail",
                  pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'E-mail format is not correct'
                } },
                
              )}
                error={errors.email}
                hintText="Don't worry. We wont' send any spam."
              
            />

          <InputField 
              className=""
              primary={"dark"}
              titulo="CPF or DNI (foreigner)" 
              placeholder="Insert your document"
              label="document"
              sizes={'sm'}
              {...register('document', {
              required: 'Add your document or ID',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigo'
              },}
              
              )}
              error={errors.document}
          />

          <div className="flex flex-col gap-[6px]">
            <label className="text-primary-gray-700 font-medium text-text-sm">Sex</label>
            <Controller 
                control={control}
                name="gender"
                rules={{
                  required: 'Need to choose one option'
                }}            
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <AsyncSelect
                    instanceId={id3}
                    onChange={onChange}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderWidth: '1px',
                        borderColor: "none",
                        backgroundColor: 'transparent',
                        outline: '0',
                        border: state.isFocused ? '1px solid #85A5EB' : errors.favoriteSport ? '1px solid #FDA29B': '1px solid #292E38',
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
                      input: (baseStyles, state) =>({
                        ...baseStyles,
                        color: '#FFFF'
                      }),
                        menuList: (baseStyles, state) =>({
                          ...baseStyles,
                          border: '1px solid #D0D5DD',
                        // backgroundColor: state.focusedOption ? 'red' : 'transparent',
                        }),
                        singleValue: (baseSyles, state) => ({
                          ...baseSyles,
                          color: '#FFFF'
                        }),
                       option: (baseStyles, state) => ({
                        ...baseStyles,
                          
                          backgroundColor: state.isFocused ? '#85A5EB' : 'transparent',
                          color: state.isSelected ? '#101828' : '#475467',
                          fontWeight: state.isSelected ? '600' : '400'
                      })
                    }}
                    onBlur={onBlur}
                    cacheOptions
                    defaultOptions
                    defaultValue={value}
                    loadOptions={genderOptions}
                  />
                )}
                />
                    {errors.gender && <small className="text-primary-error-500 mt-0">{errors.gender.message}</small>}
           </div>

           <InputField 
              primary={"dark"}
              placeholder="DD/MM/YYYY"
              titulo='Date of Birthday'
              label="birthday"
              mask='birthday'
              sizes={'sm'}
              {...register('birthday', {
              required: 'Add your birthday',
              minLength: {
              value: 4,
              message: 'Pelo menos 4 digitos, amigão'
              },}
              
              )}
              error={errors.birthday}
          />


            <InputField 
                placeholder="(21) 99493-3029"
                label="phone"
                className="!border-[#292E38]"
                primary={'dark'}
                titulo="Phone"
                // mask={watch("phoneType", 'BR')}
                sizes={'sm'}
                {...register('phone', {
                  required: 'Add your phone number.',
                  minLength: {
                  value: 5,
                  message: 'Precisa adicionar seu número inteiro!'
                }})}          
                error={errors.phone}
                // hintText="This is a hint text to help user."
                leftSelect={<select defaultValue={'BR'} className="bg-[#0B111D]" {...register("phoneType")}> 
                              <option value="BR">BR</option> 
                              <option value="US">US</option> 
                            </select>} 
           />


          <div className="flex flex-col gap-[6px]">
            <label className="text-primary-gray-700 font-medium text-text-sm">Favorite Sport</label>
            <Controller 
                control={control}
                name="favoriteSport"
                rules={{
                  required: 'Need to choose one option'
                }}            
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <AsyncSelect
                    instanceId={id2}
                    onChange={onChange}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderWidth: '1px',
                        backgroundColor: 'transparent',
                        outline: '0',
                        border: state.isFocused ? '1px solid #85A5EB' : errors.favoriteSport ? '1px solid #FDA29B': '1px solid #292E38',
                        borderRadius: '8px',
                        "&:hover": {
                          borderColor: "none"
                        },

                        boxShadow: state.isFocused ? '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(45, 109, 233, 0.14)' : '0' ,
                      }),
                      input: (baseStyles, state) =>({
                        ...baseStyles,
                        color: '#FFFF'
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
                        singleValue: (baseSyles, state) => ({
                          ...baseSyles,
                          color: '#FFFF'
                        }),
                       option: (baseStyles, state) => ({
                        ...baseStyles,
                          backgroundColor: state.isFocused ? '#85A5EB' : 'transparent',
                          color: state.isSelected ? '#101828' : '#475467',
                          fontWeight: state.isSelected ? '600' : '400'
                      })
                    }}
                    cacheOptions
                    defaultOptions
                    defaultValue={value}
                    loadOptions={sportsOptions}
                  />
                )}
                />
                    {errors.favoriteSport && <small className="text-primary-error-500 mt-0">{errors.favoriteSport.message}</small>}
           </div>


           <div className="flex flex-col gap-[6px]">
            <label className="text-primary-gray-700 font-medium text-text-sm">Heart Team</label>
            <Controller 
                control={control}
                name="heartTeam"
                rules={{
                  required: 'Need to choose one option'
                }}            
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <AsyncSelect
                    instanceId={id}
                    onChange={onChange}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderWidth: '1px',
                        backgroundColor: 'transparent',
                        outline: '0',
                        border: state.isFocused ? '1px solid #85A5EB' : errors.heartTeam ? '1px solid #FDA29B': '1px solid #292E38',
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
                      input: (baseStyles, state) =>({
                        ...baseStyles,
                        color: '#FFFF'
                      }),
                        menuList: (baseStyles, state) =>({
                          ...baseStyles,
                          border: '1px solid #D0D5DD',
                        // backgroundColor: state.focusedOption ? 'red' : 'transparent',
                        }),
                        singleValue: (baseSyles, state) => ({
                          ...baseSyles,
                          color: '#FFFF'
                        }),
                       option: (baseStyles, state) => ({
                        ...baseStyles,
                          backgroundColor: state.isFocused ? '#85A5EB' : 'transparent',
                          color: state.isSelected ? '#101828' : '#475467',
                          fontWeight: state.isSelected ? '600' : '400'
                      })
                    }}
                    cacheOptions
                    defaultOptions
                    defaultValue={value}
                    loadOptions={teamsOptions}
                  />
                )}
                />
                    {errors.heartTeam && <small className="text-primary-error-500 mt-0">{errors.heartTeam.message}</small>}
           </div>

           <ButtonDesignSystem label="Continue" className="w-full !border-none !outline-none rounded-[8px]" normal={'lg'} buttonType={"primary"} />       
      </form>

      <div className='items-center justify-between text-[#84888E] w-full pt-10 px-8 flex lg:hidden'>
            <a href='/termos_de_uso.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Termos e Condições</a>
            <a href='/politica_de_privacidade.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Política de Privacidade</a>

       </div>          
    </div>
   
  );
}