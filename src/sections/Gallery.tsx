'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { SelectedPage } from '../types/types'
import GallerySlider from '../components/GallerySlider/Slider';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Gallery: React.FC<Props> = ({ setSelectedPage }) => {

  return (

    <section id="gallery"
      className='gallery-main relative z-10 w-full h-full bg-cover bg-left bg-no-repeat bg-ourGallery py-[55px] sm:py-[64px] lg:py-[104px]'>
      <div className="container">
        <h2 className='title z-10 relative sm:leading-none leading-[56px] mb-[23px] lg:mb-[15px] sm:mb-[65px] text-start sm:text-center lg:text-start'>Our <span className='leading-none titleBold'>Gallery</span></h2>
      </div>
      <GallerySlider />
    </section>

  )
}

export default Gallery;
