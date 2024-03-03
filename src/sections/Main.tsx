'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Header/Navbar'
import { SelectedPage } from '../types/types'
import HeroContent from '../components/Header/HeroContent'
import AboutUs from './AboutUs'


const Main = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.About
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.About);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div
        // className='w-full h-full bg-cover bg-center bg-no-repeat bg-hero'
        className='w-full h-full bg-cover bg-center bg-no-repeat bg-picture'
      // className='heroSection'
      // style={{
      //   background: 'linear-gradient(to right, rgba(2, 15, 8, 0.50), transparent)',
      // }}
      // style={{
      //   background: `url('../../src/assets/images/contactUs.jpg')`,
      // }}
      // style={{
      //   backgroundImage: `url(../assets/images/sections/hero.png)`,
      //   width: '100%',
      //   height: '100%',
      // }}

      >
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
        <HeroContent />

      </div >
      <AboutUs setSelectedPage={setSelectedPage} />
    </>
  )
}

export default Main
