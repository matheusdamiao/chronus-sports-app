'use client';
import React, { useRef } from "react";
import { VariantProps, cva } from 'class-variance-authority'
import tooltipImage from './../../../public/icons/tooltip.svg'
import tooltipError from './../../../public/icons/errorTooltip.svg'

import { useForm, SubmitHandler, UseFormRegister, useWatch } from "react-hook-form"
import Image from "next/image";
import { maskCurrencyBR, maskCurrencyUS } from "../utils/maksFunctions";

export const inputField = cva(
    'border-[1px] rounded-md border-primary-gray-300 w-full bg-primary-base-white shadow-input outline-none placeholder:text-primary-gray-500   focus:border-primary-brand-200',   
    {
        variants: {
            primary: {
                'default': ''
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
    }

  

      export const InputField = React.forwardRef<HTMLInputElement, InputProps>(
        ({className,
         label,
          leftIcon,
           leftSelect,
            rightIcon,
             hintText, 
             error, 
             rightSelect,
              placeholder,
               tooltip, 
               inputType = 'text',
                primary, 
                sizes,
                mask,
                 ...props }, ref) => {
    
                    React.useEffect(()=>{
                        console.log('tem erro', error)
                    },[error])



                    const maskValues = (e: React.ChangeEvent<HTMLInputElement>) => {
                        

                        if(mask === 'real'){
                            const {value} = e.target;
                            e.target.value = maskCurrencyBR(value);
                        }
                        if(mask === 'dolar'){
                            const {value} = e.target;
                            e.target.value = maskCurrencyUS(value);
                        }
                     }
                 
                  
            return (
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor={label} className="text-primary-gray-700 font-medium text-text-sm">{label}</label>
                    <div className={`relative  w-[343px] `}>

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
                        className={inputField({className: `${leftIcon ? 'pl-10': null} ${leftSelect ? 'pl-16': null} ${error ? '!border-primary-error-300 shadow-input-on-error' : ''}`, primary, sizes})} {...props} 
                        type={inputType ? inputType : 'text'} 
                        placeholder={placeholder}
                        name={label}
                        onChange={(e)=> {
                        maskValues(e)   
                        }}
                       
                          />
                        <div className="absolute right-[12px] top-[0.8rem] cursor-help">
                            <Image src={!error ? tooltipImage : tooltipError} alt='' width={16} height={16} className=""/>
                            {tooltip || tooltip && error }
                        </div>
                        {/* RIGHT ICONS and SELECT */}
                        <div className="absolute top-[0.7rem] right-[12px] ">
                            {rightIcon && rightIcon}
                        </div>
                        <div className="absolute top-[0.6rem] right-[10px] ">
                        {rightSelect && 
                           rightSelect
                        }
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