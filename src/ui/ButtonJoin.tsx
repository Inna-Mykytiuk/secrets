// Import necessary libraries and images
'use client';

import Image from 'next/image';
import Link from 'next/link';

import { animateScroll } from "react-scroll"
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import desktopLeft from '../../public/icons/desktop-left.svg?url';
import desktopRight from '../../public/icons/desktop-right.svg?url';
import tabletLeft from '../../public/icons/tablet-left.svg?url';
import tabletRight from '../../public/icons/tablet-right.svg?url';
import mobileLeft from '../../public/icons/mobile-left.svg?url';
import mobileRight from '../../public/icons/mobile-right.svg?url';

type ImageType = string | { default: string; url: string };

// Define the ButtonJoin component
const ButtonJoin = () => {
  const [leftImage, setLeftImage] = useState<ImageType>(desktopLeft);
  const [rightImage, setRightImage] = useState<ImageType>(desktopRight);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });

  useEffect(() => {
    let imageSize;
    if (isMobile) {
      imageSize = 'mobile';
      setLeftImage(mobileLeft);
      setRightImage(mobileRight);
    } else if (isTablet) {
      imageSize = 'tablet';
      setLeftImage(tabletLeft);
      setRightImage(tabletRight);
    } else {
      imageSize = 'desktop';
      setLeftImage(desktopLeft);
      setRightImage(desktopRight);
    }
  }, [isMobile, isTablet]);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLDivElement;

    if (section) {
      const sectionTop = section.offsetTop;
      animateScroll.scrollTo(sectionTop, {
        duration: 1500,
        smooth: "easeOutCubic",
      })
    }
  }

  const handleButtonClick = () => {
    scrollToSection('contacts');
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`w-full uppercase text-white text-lg lg:text-[32px] font-bold h-[53px] lg:h-[71px] leading-[48px] sm:leading-none lg:leading-none px-[64px] flexCenter bg-light1 relative hover:bg-light2 focus:bg-light2 py-[18px] sm:py-[14px] lg:py-[16px] transition duration-300 ease-in-out outline-none focus:outline-none`}
    >
      <Image
        src={(typeof leftImage === 'object' && (leftImage as { default: string; url: string }).url) || (leftImage as string)}
        alt={`left part of border`}
        width={100}
        height={100}
        className="absolute top-0 left-0 h-[53px] sm:w-[35px] lg:w-[44px] w-[42px] sm:h-[50px] lg:h-[71px]"
      />
      Join Now
      <Image
        src={(typeof rightImage === 'object' && (rightImage as { default: string; url: string }).url) || (rightImage as string)}
        alt={`right part of border`}
        width={100}
        height={100}
        className="absolute top-0 right-0 h-[53px] sm:w-[35px] lg:w-[44px] w-[42px] sm:h-[50px] lg:h-[71px]"
      />
    </button>
  );
};

// Export the ButtonJoin component
export default ButtonJoin;
