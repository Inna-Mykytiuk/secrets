'use client';

import React, { FC, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ServicesSlideInfoProps } from '@/types/types';
import SlideList from './SlideList';
import data from '@/data/common.json'

const SlideInfo: FC<ServicesSlideInfoProps> = ({ item, idx, activeSlide = 0, handleMenuButtonClick = () => { } }) => {

  const { id, img, promo, title, description } = item;
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  const calculatePaddingTop = (idx: number | undefined) => {
    if (idx !== undefined) {
      return windowWidth >= 1280 ? (idx <= 4 ? `${Number(idx) * 48}px` : `${Number(idx) * 40 + 26}px`) : '0px';
    }
    return '0px';
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);


  return (
    <div className='container'>
      <div className='w-full flex flex-col sm:flex-row mb-4 sm:mb-10 lg:mb-5'>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}

          className='title sm:leading-none lg:leading-none leading-[56px] self-center w-full sm:w-[483px] lg:w-[627px] '>{data.offer.title1}<span className='leading-none titleBold'>{data.offer.title2}</span>
        </motion.h2>
        <p className="my-0 h-full title text-end sm:text-start leading-none ">
          {id}
          <span className="opacity-20">{data.offer.number}</span>
        </p>
      </div>
      <div className='flex flex-col sm:flex-row'>
        <Image
          alt={title}
          src={img}
          width={280}
          height={213}
          className="mb-3 row-start-3 w-full h-full sm:w-[463px] sm:mb-0 sm:h-[370px] lg:w-[607px] lg:h-[429px]"
        />
        <div
          className={`flex sm:hidden promo self-end sm:self-start text-mainWhite text-xs font-extralight leading-6 mb-6 text-end`}
          style={{
            paddingTop: calculatePaddingTop(idx),
          }}
        >
          <p className='text-end'>{promo}</p>
        </div>
        <div className='w-full flex flex-col lg:flex-row sm:ml-5'>
          <SlideList
            activeSlide={activeSlide}
            onMenuButtonClick={handleMenuButtonClick}
          />
          <div className='flex flex-col w-full sm:w-[221px] lg:w-[293px] h-full justify-between'>
            <div
              className={`hidden sm:flex promo text-mainWhite text-xs font-extralight leading-6`}
              style={{
                paddingTop: calculatePaddingTop(idx),
              }}
            >
              <p>{promo}</p>
            </div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-mainWhite row-start-6 font-extralight text-sm sm:text-[13px] lg:text-lg sm:text-justify mt-auto sm:self-end leading-5 lg:leading-6 w-full sm:w-[221px] lg:w-[293px] ">
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SlideInfo;