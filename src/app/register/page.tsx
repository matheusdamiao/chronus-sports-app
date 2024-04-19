import Image from "next/image";
import React from "react";
import bg from './../../../public/images/dots.svg'
import StepsMenuSignUp from "../components/sections/stepsMenuSignUp";
import { headers } from 'next/headers';
import { useRouter } from "next/navigation";


export const metadata = {
  title: "New Account - Chronus Sports",
};

export default function Page() {



  return (
    <div>hello</div>
    // <div className="grid grid-cols-6 ">
    //   <div className="col-span-2 bg-[#161B26]">
    //     <StepsMenuSignUp/> 
    //   </div>
    //   <div className="col-span-4 bg-[#0B111D] h-[100svh] w-full py-10 relative flex items-center justify-center">
    //     <Image src={bg} alt='' className="absolute top-0 right-0 left-0 mx-auto" />
    //     <span className="ellipseSignUpPages"></span>


      
    //   </div>
    //   <div className="flex flex-ite">
      
    //   </div>
    // </div>
  );
}


