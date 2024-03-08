'use client'
import React from 'react'
import { SelectedPage } from '../types/types'

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section
      className=' w-full h-full bg-cover bg-center sm:bg-left bg-no-repeat bg-aboutMob1 sm:bg-about py-[55px] sm:py-[64px] lg:py-[104px]  lg:bg-about'
      id="about"
    >
      <div className='container'>
        <div>
          <div className='flex flex-col max-w-full sm:items-start sm:flex-row mb-10 lg:mb-[72px] relative'>
            <div className='flex flex-col h-full justify-between'>
              <h2 className='title sm:leading-none leading-[56px] mb-2 sm:mb-auto sm:mr-[76px] lg:mr-6'>Who <span className='leading-none titleBold'>We Are</span></h2>
              <div className='hidden lg:hidden sm:flex w-full sm:w-[180px] lg:w-[296px] justify-end lg:justify-start'>
                <div className='flex flex-col w-[218px] absolute bottom-0 left-0'>
                  <p className='text-white text-base font-normal leading-5 uppercase text-start'>From vacationers</p>
                  <p className='text-white text-base font-normal leading-5 uppercase text-end'>to active travelers</p>
                  <p className='text-white text-base font-extralight leading-6 text-start tracking-[-0.14px] lg:tracking-[2.1px]'>we have a tour for everyone.</p>
                </div>
              </div>
            </div>
            <div className='max-w-[180px] sm:max-w-[221px] lg:max-w-[292px] flexColumn gap-6'>
              <p className='text'><b>a team of enthusiasts</b> who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>
              <p className='text'><b>We believe</b> that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-row sm:flex-row lg:justify-between justify-start sm:justify-end'>
            <p className='text sm:max-w-[463px] lg:max-w-[605px] '><b>We use methods</b> that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. </p>
            <div className='sm:hidden lg:flex flex w-full sm:w-[180px] lg:w-[296px] justify-end lg:justify-start mb-10 lg:mb-0'>
              <div className='flex flex-col  w-[180px] lg:w-[296px]'>
                <p className='text-white text-sm lg:text-lg font-normal leading-5 uppercase text-start'>From vacationers</p>
                <p className='text-white text-sm lg:text-lg font-normal leading-5 uppercase text-end'>to active travelers</p>
                <p className='text-white text-sm lg:text-lg font-extralight leading-6 text-start tracking-[-0.14px] lg:tracking-[2.1px]'>we have a tour for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutUs
