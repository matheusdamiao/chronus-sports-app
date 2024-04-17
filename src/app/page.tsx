import React from "react";





export const metadata = {
  title: "Chronus Sports",
};


export default function Page() {


  
  return (
    <>
    <div className="bg-[#010317] h-[100svh] py-10 relative flex">
      <span className="ellipse"></span>
      <div className="flex flex-col items-center w-full gap-spacing-xl px-spacing-xl">
        <h1 className="font-sans pt-spacing-10xl bg-transparent text-primary-base-white font-semibold text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl tracking-display text-center max-w-[992px] m-0 mx-auto">Welcome to the Largest Sports Platform in the World!</h1>
        <h4 className="mx-auto max-w-[530px] text-text-md font-regular text-primary-gray-200 text-center">CHRONUS Sports is your gateway to the most comprehensive, diverse, and exciting sports content platform in the World.</h4>
      </div>
    </div>
    
     
   
    </>
  );
}
