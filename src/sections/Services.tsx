'use client';

import React, { useEffect, useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';

import SlideInfo from '../components/ServicesContent/SlideInfo';
import services from '../data/services.json'


const Services = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = (slideIndex: number) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };

  return (
    <section
      className="bg-opacity-75 relative"
      id="services"
    >
      <Swiper
        effect={'fade'}
        onSwiper={(s: any) => setSwiper(s)}
        modules={[EffectFade]}
        slidesPerView={1}
      >
        {services.map(item => {
          const { id, bg } = item;
          return (
            <div key={id} className="bg-black">
              <SwiperSlide
                key={id}
                className="bg-cover bg-center bg-opacity-75 py-[54px] sm:py-[64px] lg:py-[104px]"
                style={{
                  background: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.75)),url(${bg}) center / cover no-repeat`,
                }}
              >
                <SlideInfo item={item} idx={swiper?.activeIndex} activeSlide={activeSlide} handleMenuButtonClick={handleMenuButtonClick} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;