import React from 'react'
import InputField from '../../InputField'
import ButtonDesignSystem from '../../Button'

const NewsLetterSection = () => {
  return (
    <div className='hidden lg:flex max-w-[900px] w-full mx-auto pt-32 py-24'>
        <div className='flex w-full h-[120px] justify-between border-b-[1px] border-primary-gray-800 mx-auto'>
            <div className='flex flex-col text-primary-base-white'>
                <h4 className='text-text-xl leading-text-xl font-bold'>Subscribe to our newsletter</h4>
                <p className='text-text-md leading-text-md font-thin'>Stay updated on all the news, releases, and tips.</p>
            </div>
            <div className='flex !flex-0 gap-spacing-2xl'>
                <InputField label='email' titulo='' placeholder='stevejobs@apple.com' className='bg-primary-gray-800' primary={'dark-with-bg'} sizes="md"/>
                <ButtonDesignSystem label="Subscribe"  buttonType={"primary"} normal={"lg"} className="self-start border-none lg:mt-[8px] mt-[20px]" />
            </div>
        </div>
    </div>
  )
}

export default NewsLetterSection
