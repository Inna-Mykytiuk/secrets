"use client"

import React from 'react'
import ButtonJoin from '@//ui/ButtonJoin'

const HeroContent = () => {
  return (
    <div className='container'>
      <div className=' sm:flex-row flex flex-col justify-between py-[55px] sm:py-[64px] lg:py-[104px]'>
        <div className='sm:hidden flex flex-col text-end pb-6'>
          <p className='text-[37px] font-thin text-mainWhite uppercase tracking-[1.665px] '><span className='text-[37px] font-medium'>7</span>DAYS</p>
          <p className='text-xs font-light text-mainWhite tracking-[9px] mt-[-15px] uppercase'>JOURNEY</p>
        </div>
        <div className='flexColumn max-w-full sm:max-w-[426px] lg:max-w-[646px]'>
          <h1 className='title pb-6  sm:pb-[148px]'><span className='titleBold'>Uncover</span> Carpathian’s Secrets</h1>
          <p className='text-mainWhite text-sm lg:text-base font-extralight leading-4 lg:leading-6 tracking-[1.26px] lg:tracking-[1.44px] max-w-full sm:max-w-[263px] lg:max-w-full pb-6 sm:p-0'>Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        </div>
        <div className='flexColumn max-w-full sm:max-w-[230px]  lg:max-w-[305px]'>
          <div className='hidden sm:flex sm:flex-col'>
            <p className='text-[67px] lg:text-[98px] font-thin text-mainWhite uppercase tracking-[3.9px] lg:tracking-[0.9px]'><span className='text-[67px] lg:text-[98px] font-medium'>7</span>DAYS</p>
            <p className='text-base font-300 text-mainWhite tracking-[21.9px] lg:tracking-[32.9px] mt-[-25px] uppercase'>JOURNEY</p>
          </div>
          <div>
            <p className='text mb-6 sm:mb-7'>We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
            </p>
            <ButtonJoin />
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeroContent
