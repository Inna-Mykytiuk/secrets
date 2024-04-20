"use client"

import React from 'react';
import { motion } from "framer-motion";
import ButtonJoin from '../../ui/ButtonJoin';
import hero from "@/data/hero.json";

const HeroContent = () => {

  return (
    <div className='container'>
      <div className=' sm:flex-row flex flex-col justify-between pb-[55px] pt-[104px] sm:pb-[64px] sm:pt-[122px] lg:pb-[104px] lg:pt-[130px]'>
        <div className='sm:hidden flex flex-col text-end pb-6'>
          <p className='text-[37px] font-thin text-mainWhite uppercase tracking-[1.665px]'><span className='text-[37px] font-medium'>{hero.title}</span>{hero.title1}</p>
          <p className='text-xs font-light text-mainWhite tracking-[9px] mt-[-15px] uppercase'>{hero.title2}</p>
        </div>
        <div className='flexColumn max-w-full sm:max-w-[426px] lg:max-w-[646px]'>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className='title pb-6  sm:pb-[148px]'><span className='titleBold'>{hero.title3}</span>{hero.title4}</motion.h1>
          <p className='text-mainWhite text-sm lg:text-base font-extralight leading-4 lg:leading-6 tracking-[1.26px] lg:tracking-[1.44px] max-w-full sm:max-w-[263px] lg:max-w-full pb-6 sm:p-0'>{hero.cities}</p>
        </div>
        <div className='flexColumn max-w-full sm:max-w-[230px]  lg:max-w-[305px]'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}

            className='hidden sm:flex sm:flex-col'>
            <p className='text-[67px] lg:text-[98px] font-thin text-mainWhite uppercase tracking-[3.9px] lg:tracking-[0.9px]'><span className='text-[67px] lg:text-[98px] font-medium'>{hero.title}</span>{hero.title1}</p>
            <p className='text-base font-light text-mainWhite tracking-[21.9px] lg:tracking-[32.9px] mt-[-25px] uppercase'>{hero.title2}</p>
          </motion.div>
          <div>
            <p className='text mb-6 sm:mb-7'>{hero.description}</p>
            <ButtonJoin />
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeroContent
