import React, { useState } from 'react'
import ButtonDesignSystem from '../Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFormStore } from 'src/app/store/formStore'
import { useRouter } from 'next/navigation'
import InputField from '../InputField'
import eyesClosed from './../../../../public/icons/eyesClosed.svg'
import google from './../../../../public/icons/google.svg'
import facebook from './../../../../public/icons/facebook.svg'
import Image from 'next/image'
import spinner from './../../../../public/icons/spinner.svg'

type ILoginInput = {
    email: string,
    password: string,
  }

const Login = () => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, control, setError, setValue, watch, formState: {errors} } = useForm<ILoginInput>({mode: 'onSubmit'})

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {

    setIsLoading(true);

    const bodyRequest = {
        email: data.email,
        password: data.password
    }

    try {
        const loginUser = await fetch("https://customers.api.core.chronus-sports.biss.com.br/api/v1/Authentication", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyRequest)
        })
        
        if(loginUser.status === 200){
            const responseData = await loginUser.json();
          console.log('deu certo!', loginUser);
          console.log('veio jwt!', responseData.token);    
          alert('Bem-vindo a Chronos!')
          setValue('email', '');
          setValue('password', '');
          setIsLoading(false);

        } else {
                setIsLoading(false);
                setError('password', {
                  message: 'Credenciais erradas. Tente novamente'
                })
          
              
        }
  
        // console.log('veio algo', data);
        
      } catch (error) {
        setIsLoading(false);
        console.log('deu erro', error);
        setError('password', {
          message: "Algo de errado ocorreu. Tente novamente"
        })
      }

    
  } 


  return (
            <div className='flex flex-col w-full pt-spacing-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                    <div className='flex flex-col w-full gap-spacing-2xl'>
                        <InputField 
                                className="bg-transparent"
                                placeholder="Insira seu e-mail"
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
                        />
                        <InputField 
                            className="bg-transparent border-[#292E38]"
                            primary={"big-dark"}
                            placeholder="*************"
                            titulo="Senha"
                            label="password"
                            inputType="password"
                            sizes={'sm'}
                            {...register('password', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: ''
                            },
                            maxLength: {
                                value: 20,
                                message: ''              }
                            } )}           
                            rightIcon={<Image src={eyesClosed} alt='' width={25} height={25} />}
                            error={errors.password}
                        />
                    </div>    
                          
                
                    <div className='flex justify-between py-spacing-3xl'>
                        <div className='flex items-center gap-2'> 
                          <input type="checkbox" name="" id="" />
                          <small className='text-[#84888E]'>Lembre de mim</small>
                        </div>
                        <a href="" className='text-primary-base-white text-text-sm font-semibold'> Recuperar senha</a>
                    </div>
                    <div className='flex flex-col gap-spacing-xl'>
                        <ButtonDesignSystem type='submit' normal={'lg'} buttonType={"primary"} className="border-none w-full !rounded-[8px]" label="Entrar"  rightIcon={isLoading && <Image className="animate-spin" width={20} height={20} src={spinner} alt="Loading icon"/>}/>         
                        <ButtonDesignSystem normal={'lg'} buttonType={"primary"} leftIcon={<Image src={google} alt='' />}  className="border-[#292E38] gap-spacing-lg  w-full !bg-[#0B111D] !rounded-[8px]" label="Entrar com Google" />         
                        <ButtonDesignSystem normal={'lg'} buttonType={"primary"} leftIcon={<Image src={facebook} alt='' />} className="border-[#292E38] gap-spacing-lg w-full !bg-[#0B111D] !rounded-[8px]" label="Entrar com Facebook" />         
                    </div>

                </form>   
            </div>
  )
}

export default Login
