'use client';
import React, { useRef } from "react";
import { VariantProps, cva } from 'class-variance-authority'
import tooltipImage from './../../../public/icons/tooltip.svg'
import tooltipError from './../../../public/icons/errorTooltip.svg'
import Image from "next/image";
import { maskBrazilianPhoneNumber, maskBrazilianPhoneNumber2, maskCurrencyBR, maskCurrencyUS, maskUSPhoneNumber2 } from "../utils/maksFunctions";

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
                        console.log('tem mask', mask)
                    },[mask])



                    const maskValues = (e: React.ChangeEvent<HTMLInputElement>) => {
                        
                        console.log(e.target.value);

                        if(mask === 'real'){
                            console.log('real');
                            const {value} = e.target;
                            return e.target.value = maskCurrencyBR(value);
                        }
                        if(mask === 'dolar'){
                            console.log('dolar');

                            const {value} = e.target;
                           return  e.target.value = maskCurrencyUS(value);
                        }

                        if(mask === 'BR'){
                          

                            const {value} = e.target;
                            console.log(value);
                           return  e.target.value = maskBrazilianPhoneNumber2(value);
                        }

                        if(mask === 'US'){
                            console.log('US');

                            const {value} = e.target;
                            console.log(value);
                           return  e.target.value = maskUSPhoneNumber2(value);
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