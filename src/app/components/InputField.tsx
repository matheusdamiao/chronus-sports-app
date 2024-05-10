'use client';
import React, { useRef, useState } from "react";
import { VariantProps, cva } from 'class-variance-authority'
import tooltipImage from './../../../public/icons/tooltip.svg'
import tooltipError from './../../../public/icons/errorTooltip.svg'
import Image from "next/image";
import eyesOpen from './../../../public/icons/eyesOpen.svg'
import { maskBirthday, maskBrazilianPhoneNumber, maskBrazilianPhoneNumber2, maskCurrencyBR, maskCurrencyUS, maskUSPhoneNumber2 } from "../utils/maksFunctions";

export const inputField = cva(
    'border-[1px] rounded-md  w-full bg-[transparent] shadow-input outline-none placeholder:text-primary-gray-500   focus:border-primary-brand-200',   
    {
        variants: {
            primary: {
                'default': 'border-primary-gray-300 ',
                'dark': 'border-[#292E38] bg-transparent ', 
                'small-dark': 'flex-grow-0 flex-0 !max-w-[100px] w-full border-[#292E38] bg-transparent',
                'big-dark': 'border-[#292E38] bg-transparent',
                'dark-with-bg': 'border-[#292E38] bg-primary-gray-800 text-primary-gray-600',
                'dark-subscribe-foreigner': 'lg:w-[440px] !bg-[#0B111D] placeholder:text-primary-gray-700 text-primary-gray-25 border-[#292E38]'
            },
            sizes:{
               sm:'py-spacing-md px-[12px]',
               md: 'p-[10px]',
            },   
        },
        compoundVariants: [
           
        ],
       
    }
)

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputField> {
        leftIcon?: React.ReactNode;
        leftSelect?: React.ReactNode;
        rightIcon?: React.ReactNode;
        inputType?: string;
        rightSelect?: React.ReactNode;
        label: string;
        tooltip?: React.ReactNode;
        hintText?: string;
        error?: any; 
        placeholder?: string;
        mask?: string,
        titulo: string,
        labelColor?: string;
    }

  

      export const InputField = React.forwardRef<HTMLInputElement, InputProps>(
        ({className,label, leftIcon, leftSelect, rightIcon, hintText, error, labelColor,
             titulo, rightSelect, placeholder, tooltip, inputType = 'text',
                primary, sizes, mask, ...props }, ref) => {


                    const [isHidden, setIsHidden] = useState(true);
                    const [isPassword, setIsPassword] = useState(false);

                    // console.log(inputType);
                    const changeFormat = () =>{
                        if(inputType === 'password') {
                            setIsHidden(!isHidden);
                            inputType = 'text'
                            // console.log(inputType);
                        } else{
                            setIsHidden(!isHidden);
                            inputType = 'password'
                        }
                    }


                    // const maskValues = (e: React.ChangeEvent<HTMLInputElement>) => {
                        
                    //     // console.log(e.target.value);


                        

                    //     if(mask === 'birthday') {
                    //         const {value } = e.target;
                    //         return e.target.value = maskBirthday(value);
                    //     }

                    //     if(mask === 'real'){
                    //         // console.log('real');
                    //         const {value} = e.target;
                    //         return e.target.value = maskCurrencyBR(value);
                    //     }
                    //     if(mask === 'dolar'){
                    //         // console.log('dolar');

                    //         const {value} = e.target;
                    //        return  e.target.value = maskCurrencyUS(value);
                    //     }

                    //     if(mask === 'BR'){
                          

                    //         const {value} = e.target;
                    //         // console.log(value);
                    //        return  e.target.value = maskBrazilianPhoneNumber2(value);
                    //     }

                    //     if(mask === 'US'){
                    //         // console.log('US');

                    //         const {value} = e.target;
                    //         // console.log(value);
                    //        return  e.target.value = maskUSPhoneNumber2(value);
                    //     }
                    //  }
                 
                  
            return (
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor={label} className={`${labelColor ? `text-${labelColor}` : 'text-[#84888E]'} font-medium text-text-sm `}>{titulo}</label>
                    <div className={`relative  `}>
                   
                        {/* LEFT ICONS and SELECT */}
                        <div className="absolute top-[0.7rem] left-[12px] ">
                            {leftIcon && leftIcon}
                        </div>
                        <div className="absolute top-[0.6rem] left-[10px] ">
                        {leftSelect && 
                           leftSelect
                        }
                        </div>
                      
                        <input
                        ref={ref}
                        id={label}
                        
                        className={inputField({className: `${leftIcon ? 'pl-10': null} ${leftSelect ? 'pl-16': null} ${error ? '!border-primary-error-300 shadow-input-on-error' : ''} pr-9`, primary, sizes})} {...props} 
                        type={inputType === 'password' ? isHidden ? 'password' : 'text' : 'text'} 
                        placeholder={placeholder}
                        name={label}
                       
                          />
                        <div className="absolute right-[12px] top-[0.8rem] cursor-help">
                            {/* {inputType === 'password' ? null : !error ? '' : ''  } */}
                            {tooltip || tooltip && error }
                        </div>
                        {/* RIGHT ICONS and SELECT */}
                        <div onClick={()=> changeFormat()} className="hover:cursor-pointer absolute top-[0.7rem] right-[12px] ">
                             {rightIcon && !inputType ? rightIcon : isHidden ? rightIcon : <Image src={eyesOpen} alt='' width={24} height={24}/>}
                        </div>
                        <div className="absolute top-[0.6rem] right-[10px] ">
                            {rightSelect && rightSelect}
                        </div>
                    </div>
                    {hintText && <small className="text-primary-gray-600 text-text-sm">{hintText}</small>}
                    {error && <small className="text-primary-error-500">{error.message}</small>}

                </div>
            )
        },
        )

InputField.displayName = "InputField";

export default InputField;