'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Button from './Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import data from '../../data/gallery.json'

const GallerySlider = () => {
  return (
    <div className="relative mx-auto px-[20px] sm:w-[768px] sm:px-[32px] lg:w-[1280px] lg:px-0 smOnly:max-w-[480px]">
      <Swiper
        className="gallery h-[609px] sm:h-[295px] lg:h-[430px]"
        wrapperTag="ul"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'vertical'}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        speed={800}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {data.slides.map(({ img, alt }, index) => (
          <SwiperSlide tag="li" key={index} className="gallery-slider">
            {({ isActive }) => (
              <div
                className={`image-wrapper  relative h-[187px] transition-all duration-700 ease-[cubic-bezier(.57,.21,.69,1.25)]
                ${isActive
                    ? 'before:hidden sm:h-[294px] sm:w-[415px] lg:h-[429px] lg:w-[606px] opacity-1'
                    : ' sm:h-[87px] sm:w-[121px] lg:h-[225px] lg:w-[313px] smOnly:before:hidden opacity-0.5'
                  }  `}
              >
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
                  quality={90}
                  priority
                  className="object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="absolute bottom-0 z-10 sm:left-[75px] sm:flex sm:gap-[459px] lg:left-[235px] 
      lg:gap-[651px] smOnly:hidden"
      >
        <Button
          aria-label="Button previous"
          className="text-white button-prev text-[33px] font-thin" label="back" type="button" />

        <Button
          aria-label="Button next"
          className="text-white button-next text-[33px] font-thin" label="next" type="button" />
      </div>
    </div>
  );
};

export default GallerySlider;