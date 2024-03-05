'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import SlideList from './SlideList';
import { ServicesSlideInfoProps } from '@/types/types';



const SlideInfo: FC<ServicesSlideInfoProps> = ({ item, idx, activeSlide = 0, handleMenuButtonClick = () => { } }) => {

  const { id, img, promo, title, description } = item;
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  const calculatePaddingTop = (idx: number | undefined) => {
    if (idx !== undefined) {
      return windowWidth >= 1280 ? (idx <= 4 ? `${Number(idx) * 48}px` : `${Number(idx) * 40 + 26}px`) : '0px';
    }
    return '0px';
  };

  // Update window width on resize
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
      <div className='w-full flex flex-col sm:flex-row'>
        <h2 className='title sm:leading-none lg:leading-none leading-[56px] self-center w-full sm:w-[543px] lg:w-[627px] '>We <span className='leading-none titleBold'>Offer</span>
        </h2>
        <p className="my-0 h-full title">
          {id}
          <span className="opacity-20">/05</span>
        </p>
      </div>
      <div className='flex'>
        <Image
          alt={title}
          src={img}
          width={280}
          height={213}
          className="mb-3 row-start-3 w-full sm:mb-0 sm:h-[370px]  lg:h-[429px]"
        />
        <div className='w-full flex flex-col lg:flex-row sm:ml-5'>
          <SlideList
            activeSlide={activeSlide}
            onMenuButtonClick={handleMenuButtonClick}
          />
          <div className='flex flex-col w-full sm:w-[221px] lg:w-[293px] h-full justify-between'>
            <div
              className={`flex promo text-mainWhite text-xs font-extralight leading-6`}
              style={{
                paddingTop: calculatePaddingTop(idx),
              }}
            >
              <p>{promo}</p>
            </div>
            <p className="text-white row-start-6 font-extralight text-sm sm:text-[13px] lg:text-lg sm:text-justify mt-auto sm:row-start-4 sm:col-start-2 sm:self-end lg:row-start-3 lg:col-start-3 leading-5 lg:leading-6">
              {description}
            </p>
          </div>
        </div>


      </div>

    </div>
  );
};


export default SlideInfo;