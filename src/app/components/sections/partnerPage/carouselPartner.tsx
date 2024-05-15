'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import carousel1 from './../../../../../public/images/partnerss-carousel-1.webp'
import carousel2 from './../../../../../public/images/partnerss-carousel-2.webp'
import carousel3 from './../../../../../public/images/partnerss-carousel-3.webp'
import carouselmob1 from './../../../../../public/images/caroussel-partner-mob-1.webp'
import carouselmob2 from './../../../../../public/images/caroussel-partner-mob-2.webp'
import carouselmob3 from './../../../../../public/images/caroussel-partner-mob-3.webp'


import { AnimatePresence, motion } from 'framer-motion';
import useWindowDimensions from 'src/app/utils/useWindowDimensions';


const CarouselPartner = () => {
  
  const [isFirstPicture, setIsFirstPicture] = useState(true)  
  const [isSecondPicture, setIsSecondPicture] = useState(false);
  const [isThirdPicture, setIsThirdPicture] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const modalVariants = {
    open: { opacity: 1},
    closed: { opacity: 0.2},
    exit: {opacity: 0}
  }

  let size = useWindowDimensions();

  useEffect(()=>{
    if(size){

        if (size.width > 1000) {
          setIsMobile(false);
          
        }
  
        if(size.width < 1000){
          setIsMobile(true);
        }
        }

   // eslint-disable-next-line
  },[size])


const [carouselTimeout, setCarouselTimeout] = useState<NodeJS.Timeout | undefined>(undefined);
const [currentId, setCurrentId] = useState<number>(0)

const handleCarouselImages = (id: number | null = null) => {
    // Clear any previous timeouts to prevent overlapping delays
    clearTimeout(carouselTimeout);

    // Calculate the next ID for automatic transitioning
    let nextId: number = 1;

    if (id !== null) {
        // If an ID is provided, use it for manual transition
        nextId = id;
        console.log(nextId);
    } else {
        // If no ID is provided, calculate the next ID for automatic transitioning
        nextId = currentId % 3 + 1; 
        console.log(nextId);
    }


    // Update the current ID
    setCurrentId(nextId);

    // Set a timeout for the next automatic transition
    const timeout = setTimeout( async () => {
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for the transition to complete
        handleCarouselImages(nextId % 3 + 1); 
    }, 5000); // Adjust the delay time between transitions (in milliseconds)

    // Store the timeout ID in state
    setCarouselTimeout(timeout);

    // Update the carousel state based on the current ID
    switch (nextId) {
        case 1:
            setIsFirstPicture(true);
            setIsSecondPicture(false);
            setIsThirdPicture(false);
            break;
        case 2:
            setIsSecondPicture(true);
            setIsFirstPicture(false);
            setIsThirdPicture(false);
            break;
        case 3:
            setIsThirdPicture(true);
            setIsFirstPicture(false);
            setIsSecondPicture(false);
            break;
        default:
            break;
    }
};

 // Start automatic transitioning when the component mounts
 useEffect(() => {

    handleCarouselImages();
 // eslint-disable-next-line  
 }, []);


 const handleImageClick = (id: number) => {

    clearTimeout(carouselTimeout);
    // Trigger manual transition with the clicked image ID
    handleCarouselImages(id);
  
};


  const progressBarVariation = {
    visible: { width: '72px'},
    shrink: {width: '43px'}
  }

  const progressLightBar = {
    full: ()=> ({
      width: '72px',
      transition: {
        duration: '5',
      },
      
    }),
    zero: ()=> ({
      width: '0%',
      transition: {
        duration: '0'
      },
      boxShadow: 'none',
      background: 'none',
    })
  }

  return (
    <div className='lg:h-full w-full pt-[70px] pb-[20px] overflow-y-hidden'>
        <h2 className='lg:text-display-md lg:leading-display-md  text-display-sm leading-display-sm font-bold text-center pb-[57px] text-primary-base-white z-[888] relative'> <span className='gradient-carrousel-title'>Resources</span>  for all <br /> areas of expertise</h2>
        {!isMobile && 
          <div className='hidden lg:flex mx-auto w-full items-center justify-center relative h-[400px]'>
            <AnimatePresence>
                {isFirstPicture && !isSecondPicture && !isThirdPicture &&
                
                <motion.div
                    key={1}
                    variants={modalVariants}
                    initial='closed'
                    animate='open'
                    style={{position: 'absolute', width: '940px', height: '600px'}}
                    exit='exit'
                    transition={{duration: 0.8}}
                    className='flex items-center justify-center'>
                    <Image src={carousel1} alt='' width={940} height={573} className='z-20 flex-0 flex-shrink-0 flex-grow-0 absolute'/>
                    <span className='ellipse-carousel-1'></span>
                </motion.div>}
            

                {isSecondPicture && !isFirstPicture && !isThirdPicture &&
                
                <motion.div
                      key={2}
                      variants={modalVariants}
                      initial='closed'
                      animate='open'
                      style={{position: 'absolute', width: '940px', height: '600px'}}
                      exit='exit'
                     transition={{duration: 0.8}}
                      className='flex items-center justify-center'>
                    <Image src={carousel2} alt='' width={940} height={573}  className=' absolute flex-0 flex-shrink-0 flex-grow-0  z-20 '/>
                    <span className='ellipse-carousel-1'></span>
                </motion.div>}


                {isThirdPicture && !isFirstPicture && !isSecondPicture &&
            
                <motion.div
                     key={3}
                     variants={modalVariants}
                     initial='closed'
                     animate='open'
                     exit='exit'
                     transition={{duration: 0.8}}
                     style={{position: 'absolute', width: '940px', height: '600px'}}
                    className='flex items-center justify-center'>
                    <Image src={carousel3} alt='' width={940} height={573} className='mx-auto z-20'/>
                    <span className='ellipse-carousel-1'></span>
                </motion.div>}
           </AnimatePresence>            
          </div>}
        {!isMobile &&  
        <div className='hidden lg:block'>
            <div className='z-40 mt-12 w-[182px] h-[4px] flex items-center justify-center mx-auto gap-3'>
             
              
                <motion.div
                  variants={progressBarVariation}
                  animate={`${isFirstPicture ? 'visible': 'shrink'}`}
                  transition={{duration: 1}}
                  className={`bg-primary-gray-600 rounded-xs w-[43px] h-full z-[999]`}>

                  <motion.div
                    variants={progressLightBar}
                    initial='false'
                    animate={`${isFirstPicture ? 'full': 'zero'}`}
                    className={ `gradient-progress-bar h-full w-0 z-50 shadow-none`} >
                    </motion.div>   
                </motion.div>
           

                <motion.div 
                  variants={progressBarVariation}
                  animate={`${isSecondPicture ? 'visible': 'shrink'}`}
                  transition={{duration: 1}}
                  className={`bg-primary-gray-600 rounded-xs w-[43px] h-full z-[999]`}>

                  <motion.div
                    variants={progressLightBar}
                    initial='false'
                    animate={`${isSecondPicture ? 'full': 'zero'}`}
                    className={ `gradient-progress-bar h-full w-0 z-50 shadow-none`} >
                  </motion.div>   


                
                </motion.div>
             
                <motion.div

                  variants={progressBarVariation}
                  animate={`${isThirdPicture ? 'visible': 'shrink'}`}
                  transition={{duration: 1}}
                  className={`bg-primary-gray-600 rounded-xs w-[43px] h-full z-[999]`}>

                  <motion.div
                    variants={progressLightBar}
                    initial='false'
                    animate={`${isThirdPicture ? 'full': 'zero'}`}
                    className={ `gradient-progress-bar h-full w-0 z-50 bg-none shadow-none`}>
                  </motion.div>   
                </motion.div>
             

           
               
            </div>
            <div className='flex max-w-[1000px] items-center justify-center mx-auto pt-[30px] h-[190px]'>
                <div onClick={()=> handleImageClick(1)} className={`${!isFirstPicture && 'opacity-40'} cursor-pointer flex flex-col pt-[30px] relative items-center justify-center gap-2 pr-[30px] w-[290px] flex-0 flex-grow-0 flex-shrink-0`}>
                    <h4 className='text-primary-base-white text-text-md leading-text-md font-bold'>Athlete</h4>
                    <p className='text-primary-gray-200 text-center'>We provide unique immersions for fans to experience the field and follow their team in an unprecedented way.</p>
                    {/* divison line */}
                    <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] right-0 top-0"></div>
               
                </div>
                    
                <div onClick={()=> handleImageClick(2)} className={`${!isSecondPicture && 'opacity-40'} cursor-pointer flex flex-col pt-[30px] relative items-center justify-center gap-2 mx-[30px] w-[290px] flex-0 flex-grow-0 flex-shrink-0`}>
                    <h4 className='text-primary-base-white text-text-md leading-text-md font-bold'>Clubs & Federations</h4>
                    <p className='text-primary-gray-200 text-center'> We support competitions with innovation in interaction, revenue, and greater fan engagement.</p>
                    
                </div>

                <div onClick={()=> handleImageClick(3)} className={`${!isThirdPicture && 'opacity-40'} cursor-pointer flex flex-col pt-[30px] relative items-center justify-center gap-2 pl-[30px] w-[290px] flex-0 flex-grow-0 flex-shrink-0`}>
                     {/* divison line */}
                  <div className="hidden lg:block absolute w-[1px] h-[186px] bg-gradient-to-b from-[#FFFF]/[.20] opacity-20 to-[#FFFF]/[.05] left-0 top-0"></div>
                    
                    <h4 className='text-primary-base-white text-text-md leading-text-md font-bold'> Professionals</h4>
                    <p className='text-primary-gray-200 text-center'>With our platform, broadcasting games becomes exclusive and unparalleled, offering unprecedented experiences to the audience.</p>
                 
                </div>

            </div>
        </div>
        }
        {isMobile &&
        <div className='w-full h-full'>
            {/* <h3 className='px-[28px] max-w-[590px] text-text-lg font-thin leading-text-lg text-center mx-auto text-primary-gray-200'>Discover our key advantages and become a part of the most comprehensive and diverse sports platform in the world.</h3> */}
            
            <div className='px-spacing-xl mx-auto h-full flex flex-col  relative'>
              <Image src={carouselmob3} alt='' className='z-20 w-full '/>
              <span className='ellipse-carousel-1'></span>
              <div className='flex flex-col pt-[24px] gap-2 w-full'>
                    <h4 className='font-bold text-text-md leading-text-md text-primary-base-white'>Athlete</h4>
                    <p className='font-thin text-text-md leading-text-md text-primary-gray-200'>We provide unique immersions for fans to experience the field and follow their team in an unprecedented way.</p>
              </div>
            </div>


            <div className='px-spacing-xl mx-auto h-full flex flex-col pt-[55px] relative'>
              <Image src={carouselmob2} alt='' className='z-20 w-full '/>
              <span className='ellipse-carousel-1'></span>
              <div className='flex flex-col pt-[24px] gap-2 w-full'>
                    <h4 className='font-bold text-text-md leading-text-md text-primary-base-white'>Clubs & Federations</h4>
                    <p className='font-thin text-text-md leading-text-md text-primary-gray-200'>We support competitions with innovation in interaction, revenue, and greater fan engagement.</p>
              </div>
            </div>


            <div className='px-spacing-xl mx-auto h-full flex flex-col pt-[55px] relative'>
              <Image src={carouselmob1} alt='' className='z-20 w-full '/>
              <span className='ellipse-carousel-1'></span>
              <div className='flex flex-col pt-[24px] gap-2 w-full'>
                    <h4 className='font-bold text-text-md leading-text-md text-primary-base-white'>Professionals</h4>
                    <p className='font-thin text-text-md leading-text-md text-primary-gray-200'>With our platform, broadcasting games becomes exclusive and unparalleled, offering unprecedented experiences to the audience.</p>
              </div>
            </div>
           
        </div>    
        }
    </div>
  )
}

export default CarouselPartner
