'use client';
import React, { useRef } from "react";
import { VariantProps, cva } from 'class-variance-authority';
import { animate } from "framer-motion";

export const button = cva(
    'border flex items-center justify-center text-nowrap self-start rounded-xl',   
    {
        variants: {
            buttonType: {
                primary: 'bg-primary-brand-500 shadow-xs disabled:text-primary-gray-400 hover:bg-primary-brand-600 transition-colors focus:ring-brand focus:ring-4 disabled:border-[1px] disabled:border-primary-gray-200 disabled:bg-primary-gray-100 font-semibold text-primary-base-white',
                secondaryGray: 'bg-primary-base-white shadow-xs font-semibold text-primary-gray-700 hover:bg-primary-gray-50 focus:ring-gray focus:ring-4 disabled:text-primary-gray-400 border-primary-gray-300 border-[1px]',
                secondaryColor: 'bg-primary-brand-50 shadow-xs border-primary-brand-300 border-[1px] font-semibold transition-colors text-primary-brand-600 hover:text-primary-brand-700 hover:bg-primary-brand-100 disabled:bg-primary-base-white disabled:border-primary-gray-200 disabled:text-primary-gray-400 focus:ring-brand focus:ring-4 ',
                tertiaryGray: '',
                tertiaryColor: '',
                linkGray: '',
                linkColor: '',
                destructivePrimary: 'bg-primary-error-600 hover:bg-primary-error-700 shadow-xs text-primary-base-white transition-colors focus:ring-error focus:ring-4 border-[1px] border-primary-error-600 disabled:bg-primary-gray-100 disabled:border-primary-gray-200 disabled:text-primary-gray-400',
            },
            normal: {
                sm: 'text-text-sm py-spacing-md px-spacing-lg gap-spacing-sm',
                md: 'text-text-sm py-[10px] px-[14px] gap-spacing-sm ',
                lg: 'text-text-md py-[10px] px-[16px] gap-[8px]',
                xl: 'text-text-md py-spacing-lg px-[18px] gap-[8px]',
                '2xl': 'text-text-lg py-spacing-xl px-[22px] gap-[12px]',
            },
            dotLeading: {
               sm:'text-text-sm !py-spacing-md !px-[14px] gap-spacing-md',
               md: 'text-text-sm py-[10px] px-4 gap-spacing-md',
               lg: 'text-text-md py-[10px] !px-[18px] gap-spacing-md',
               xl: 'text-text-md py-spacing-lg px-spacing-2xl gap-[8px]',
               '2xl': 'text-text-lg py-spacing-xl px-spacing-3xl gap-[12px]'
            },
            onlyIcon:{
               sm:'p-spacing-md',
               md: 'p-[10px]',
               lg: 'p-spacing-lg',
               xl: 'p-[14px]',
               '2xl': 'p-spacing-xl'
            },   
        },
        compoundVariants: [
            {
                buttonType: 'destructivePrimary',
                normal: 'lg',
            },
        ],
       
    }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
        leftIcon?: React.ReactNode;
        rightIcon?: React.ReactNode;
        label?: string;
        centralIcon?: React.ReactNode; 
    }


      export const ButtonDesignSystem = React.forwardRef<HTMLButtonElement, ButtonProps>(
        ({className, dotLeading, centralIcon, label, onlyIcon, leftIcon, rightIcon, buttonType = 'primary', normal, ...props }, ref) => {


            return (
                <button ref={ref} className={button({buttonType, normal, dotLeading, onlyIcon, className})} {...props} >
                        {label ? (
                            <>
                              {Boolean(leftIcon) && leftIcon}
                              {label}
                              {Boolean(rightIcon) && rightIcon}
                            </>
                        ) :
                            centralIcon
                        }

                </button>
            )
        },
        )
       
