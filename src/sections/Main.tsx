'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Header/Navbar'
import { SelectedPage } from '../types/types'
import HeroContent from '../components/Header/HeroContent'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import Services from './Services'
import ChooseUs from './ChooseUs'


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
      <div className='w-full h-full bg-cover bg-center bg-no-repeat bg-hero'>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
        <HeroContent />
      </div >
      <AboutUs setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <ChooseUs setSelectedPage={setSelectedPage} />
    </>
  )
}

export default Main
