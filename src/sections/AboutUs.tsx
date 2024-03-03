'use client'
import React from 'react'
import { SelectedPage } from '@/types/types'

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section className='w-full h-full bg-cover bg-left bg-no-repeat bg-about p-[104px]'
      id="about"
    >
      <div className='container'>
        <div>
          <div className='flex flex-col max-w-full sm:items-start sm:flex-row'>
            <h2 className='w-full text-[40px] sm:text-[67px] lg:text-[98px] font-thin text-mainWhite tracking-[-1.6px] sm:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase leading-none'>Who <span className='text-[40px] sm:text-[67px] lg:text-[98px] font-medium'>We Are</span></h2>
            <div className='max-w-full sm:max-w-[221px] lg:max-w-[292px]'>
              <p className='text-mainWhite text-sm lg:text-base font-extralight leading-4 lg:leading-6 tracking-[1.26px] lg:tracking-[1.44px] max-w-full sm:max-w-[263px] lg:max-w-full pb-6 sm:p-0'>a team of enthusiasts who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>
              <p className='text-mainWhite text-sm lg:text-base font-extralight leading-4 lg:leading-6 tracking-[1.26px] lg:tracking-[1.44px] max-w-full sm:max-w-[263px] lg:max-w-full pb-6 sm:p-0'>We believe that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
            </div>
          </div>
          <div>
            <p>We use methods that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. </p>
            <div>
              <p>From vacationers</p>
              <p>to active travelers</p>
              <p>we have a tour for everyone.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutUs
