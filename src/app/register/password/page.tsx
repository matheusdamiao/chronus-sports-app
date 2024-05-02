'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useId, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import ButtonDesignSystem from "src/app/components/Button";
import InputField from "src/app/components/InputField";
import { useFormStore } from "src/app/store/formStore";
import eyesCloed from './../../../../public/icons/eyesClosed.svg'
import spinner from './../../../../public/icons/spinner.svg'


type RegisterUserType = {
  fullName: string,
  email: string,
  documentNumber: string,
  gender: string,
  birthDate: string,
  phone: string,
  address: AddressType,
  favoriteSport: string,
  favoriteClub: string,
  password: string,
  acceptTermsUse: boolean,
  acceptPrivacyPolicy: boolean,
}

type AddressType = {
  street: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
  country: string,
  zipCode: string,
}


type IFormInput = {
  password: string;
  confirmPassword: string;
  termsOfUse: boolean;
  pagePolicies: boolean;
}

type ErrorType = {
  innerError: boolean,
  message: string,
  detail: string
}

export default function Page() {
  const formData = useFormStore((state)=> state);

  console.log(formData);

  const [isLoading, setIsLoading] = useState(false);
  const [hasValidLength, setHasValidLength] = useState(false); 
  const [hasCapitalLetter, setHasCapitalLetter] = useState(false);  
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);  
  const [blockError, setBlockError] = useState(false);
  const [blockRequirements, setBlockRequirements] = useState(false);

  function checkCapitalLetter(str: string) {
    return Array.from(str).some(char => char !== char.toLowerCase());
  }
  function checkValidLength(str: string) {
    return str.length >= 8 && str.length <= 20;
  }

  function checkSpecialCharacter(str: string) {
    const specialCharactersRegex = /[^a-zA-Z0-9]/;
    return specialCharactersRegex.test(str);
  }
  
  
  const {setDetails} = useFormStore();
  const router = useRouter()


  const { register, handleSubmit, setError, watch, formState: {errors} } = useForm<IFormInput>({mode: "onChange"})
 

  const password = watch('password');


  React.useEffect(() => {
    
    if(password && checkCapitalLetter(password)) {
      setHasCapitalLetter(true);
    }
    if(password  && !checkCapitalLetter(password)) {
      setHasCapitalLetter(false);
    }

    if(password && checkValidLength(password)){
      setHasValidLength(true);
    }
    if(password && !checkValidLength(password)){
      setHasValidLength(false);
    }

    if(password && checkSpecialCharacter(password)){
      setHasSpecialCharacter(true);
    }

    if(password && !checkSpecialCharacter(password)){
      setHasSpecialCharacter(false);  
    }

    if(password && checkCapitalLetter(password) && checkSpecialCharacter(password) && checkValidLength(password)){
      setBlockError(false);
    }

    // if(password && !checkCapitalLetter(password) || !checkSpecialCharacter(password) || !checkValidLength(password)){
    //   setBlockError(true);
    // }
    
  
  }, [password])


React.useEffect(()=>{
  if(password){
    setBlockRequirements(true);
  } else{
    setBlockRequirements(false)
  }

},[password])




  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);

    if(password !== '' && !hasCapitalLetter || !hasSpecialCharacter || !hasValidLength ){
      setIsLoading(false);
      setError('password', {
        message: 'Senha fraca'
      })
      return setBlockError(true);
    }


    if(data.password !== data.confirmPassword){
      setIsLoading(false);
      return setError('confirmPassword', {
        message: 'Senha não confere. '
      })
    }

    setDetails({
        password: data.password,
        acceptTermsUse: data.termsOfUse,
        acceptPrivacyPolicy: data.pagePolicies,
    });

    const formatedDate = formData.formData.birthday.split('/').reverse().join('/');
    const birthDate = new Date(formatedDate).toISOString()


    const bodyRequest: RegisterUserType = {
      fullName: formData.formData.name,
      email: formData.formData.email,
      documentNumber: formData.formData.document,
      gender: formData.formData.gender.value,
      birthDate: birthDate,
      phone: formData.formData.phone,
      address: {
        street: formData.formData.Street,
        number: formData.formData.number,
        complement: formData.formData.number,
        neighborhood: formData.formData.District,
        city: formData.formData.Estate,
        state: formData.formData.Estate,
        country: formData.formData.phoneType,
        zipCode: formData.formData.CEP
      },
      favoriteClub: formData.formData.heartTeam.value,
      favoriteSport: formData.formData.favoriteSport.value,
      password: formData.formData.password,
      acceptTermsUse: formData.formData.acceptTermsUse,
      acceptPrivacyPolicy: formData.formData.acceptPrivacyPolicy,
    }

    try {
      const registerUser = await fetch("https://customers.api.core.chronus-sports.biss.com.br/api/v1/customer", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
      })
      
      const data = await registerUser.json();
      console.log(data);

      if (data.statusCode === 400){
        setIsLoading(false);
        let customError = data.error as ErrorType;
        alert(`Erro no cadastro: ${customError.detail}`)
        setError('password', {
          message: 'Algo de errado ocorreu. Tente novamente'
        })
      } 

      if(data.statusCode === 201){
        setIsLoading(false);
        console.log('deu certo!', data);
        // router.push('/confirm')

      }

      console.log('veio algo', data);
      
    } catch (error) {
      console.log('deu erro', error);
      setIsLoading(false);
      setError('password', {
        message: "Algo de errado ocorreu. Tente novamente"
      })
    }
    
    
  
  }



  return (
    <div className="flex flex-col lg:pt-[88px] h-min-[100svh] h-full">
      <div className="flex flex-col items-center gap-spacing-3xl">
           <div className='hidden lg:block w-[50px] max-h-[49px] pl-[11px] pb-[12px] pt-[11px] pr-[11px] border-[#2F333D] relative rounded-[11px] border-[1px]'> 
                  {/*  password icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_1224_23274)">
                            <path d="M17.9346 4.16329L21.8368 8.06545C22.1262 8.35488 22.3558 8.69848 22.5125 9.07666C22.6692 9.45483 22.7498 9.86016 22.7498 10.2695C22.7498 10.6788 22.6692 11.0842 22.5125 11.4623C22.3558 11.8405 22.1262 12.1841 21.8368 12.4735L18.9735 15.3368C18.6841 15.6263 18.3405 15.8559 17.9623 16.0125C17.5841 16.1692 17.1788 16.2498 16.7695 16.2498C16.3601 16.2498 15.9548 16.1692 15.5766 16.0125C15.1984 15.8559 14.8548 15.6263 14.5654 15.3368L14.2393 15.0107L7.13483 22.1152C6.77486 22.4751 6.29966 22.6968 5.79258 22.7414L5.603 22.75H4.33333C4.06799 22.75 3.81188 22.6526 3.6136 22.4763C3.41531 22.2999 3.28863 22.057 3.25758 21.7935L3.25 21.6667V20.397C3.25012 19.8884 3.42922 19.3959 3.75592 19.006L3.88483 18.8652L4.33333 18.4167H6.5V16.25H8.66667V14.0834L10.9893 11.7607L10.6633 11.4346C10.3738 11.1452 10.1442 10.8016 9.9875 10.4234C9.83084 10.0452 9.75021 9.63991 9.75021 9.23058C9.75021 8.82124 9.83084 8.41591 9.9875 8.03774C10.1442 7.65957 10.3738 7.31596 10.6633 7.02654L13.5265 4.16329C13.8159 3.87382 14.1595 3.6442 14.5377 3.48754C14.9159 3.33088 15.3212 3.25024 15.7305 3.25024C16.1399 3.25024 16.5452 3.33088 16.9234 3.48754C17.3016 3.6442 17.6452 3.87382 17.9346 4.16329Z" stroke="#FFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.25 9.75H16.26" stroke="#54565A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1224_23274">
                            <rect width="26" height="26" fill='#FFFF'/>
                            </clipPath>
                        </defs>
                    </svg>
            </div>
            <h2 className="text-primary-base-white lg:text-display-sm font-semibold lg:leading-display-sm text-display-xs leading-display-xs text-center ">Choose a password</h2>
      </div>


      <form className="pt-spacing-4xl flex flex-col gap-spacing-2xl w-full px-spacing-xl"  onSubmit={handleSubmit(onSubmit)}>
          
          <InputField 
              className="bg-transparent border-[#292E38]"
              primary={"big-dark"}
              placeholder="*************"
              titulo="Password"
              label="password"
              inputType="password"
              sizes={'sm'}
              {...register('password', {
              // required: true,
              // minLength: {
              //   value: 8,
              //   message: ''
              // },
              // maxLength: {
              //   value: 20,
              //   message: ''              }
              } )}           
              rightIcon={<Image src={eyesCloed} alt='' width={25} height={25} />}
              error={errors.password}
          />
          {/* {blockError ? <small className="text-primary-error-500">Atenção aos requisitios para sua senha</small> : ''} */}
          <div className={`${blockRequirements ? 'flex' : 'hidden'} ${!blockError ? 'bg-primary-gray-800': 'bg-primary-error-800'} h-[120px] w-full flex-col px-spacing-xl rounded-[6px] `}>
            <div className="flex gap-[10px] pb-spacing-md pt-spacing-xl items-center">
              {hasValidLength ?
              <span className="border-primary-brand-500 bg-primary-brand-500 border-[2px] rounded-[4px] w-[16px] h-[16px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> :
              <span className="border-primary-gray-700 border-[1px] rounded-[4px] w-[16px] h-[16px] "></span>
              }
              <p className="text-primary-gray-300 text-text-xs">8-20 characters</p>
            </div>
            
            <div className="flex gap-[10px] py-spacing-md items-center">
              {hasCapitalLetter ?
              <span className="border-primary-brand-500 bg-primary-brand-500 border-[2px] rounded-[4px] w-[16px] h-[16px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> :
              <span className="border-primary-gray-700 border-[1px] rounded-[4px] w-[16px] h-[16px] "></span>
              }
              
              <p className="text-primary-gray-300 text-text-xs">At least one capital letter</p>
            </div>

            <div className="flex gap-[10px] pb-spacing-xl pt-spacing-md items-center">
             {hasSpecialCharacter ?
              <span className="border-primary-brand-500 bg-primary-brand-500 border-[2px] rounded-[4px] w-[16px] h-[16px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span> :
              <span className="border-primary-gray-700 border-[1px] rounded-[4px] w-[16px] h-[16px] "></span>
              }
              <p className="text-primary-gray-300 text-text-xs">At least one special character: #!$&@</p>
            </div>
          </div>
          

          <InputField 
              className="bg-transparent border-[#292E38]"
              primary={"big-dark"}
              placeholder="*************"
              inputType="password"
              titulo="Confirm password" 
              label="confirmPassword"
              sizes={'sm'}
              {...register('confirmPassword', {
                required: "Confirme sua senha",
                } )}  
              rightIcon={<Image src={eyesCloed} alt='' width={25} height={25} />}
              error={errors.confirmPassword}
          />
  
          <div className="flex w-full flex-col">
            <div className="flex gap-[6px]">
              <input type="checkbox" id="" 
              {...register('termsOfUse',
                {
                  required: 'Aceite nossos termos'
                }
              )}
              />
              <p className="text-[#84888E] text-text-sm font-medium">I declare that I have read and accept the <span className="text-primary-base-white underline">Terms of Use</span></p>
            </div>
            {errors.termsOfUse && <small className="text-primary-error-500">{errors.termsOfUse.message}</small>}
          </div> 

          <div className="flex w-full flex-col">
            <div className="flex gap-[6px]">
              <input type="checkbox" id="" 
              {...register('pagePolicies',
                {
                  required: 'Aceite nossos termos'
                }
              )}
              />
              <p className="text-[#84888E] text-text-sm font-medium">I declare that I have read and accept the <span className="text-primary-base-white underline">Page Policies</span></p>
            </div>
            {errors.pagePolicies && <small className="text-primary-error-500">{errors.pagePolicies.message}</small>}
          </div>  

           <ButtonDesignSystem type="submit" label="Finalize" rightIcon={isLoading && <Image className="animate-spin" width={20} height={20} src={spinner} alt="Loading icon"/>} className="w-full !border-none !outline-none rounded-[8px]" normal={'lg'} buttonType={"primary"} />       
      </form>


      <div className='lg:hidden flex items-center justify-between text-[#84888E] w-full pt-10 px-8'>
            <a href='/termos_de_uso.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Termos e Condições</a>
            <a href='/politica_de_privacidade.pdf' target='_blank' className='text-[13px] underline text-nowrap'> Política de Privacidade</a>

       </div>               
    </div>
   
  );
}