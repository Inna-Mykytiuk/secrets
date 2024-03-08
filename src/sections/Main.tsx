'use client'

import { useState, useEffect } from 'react'
import { SelectedPage } from '@/types/types'
import Navbar from '../components/Header/Navbar'
import HeroContent from '../components/Header/HeroContent'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import Services from './Services'
import ChooseUs from './ChooseUs'
import Contacts from './Contacts'


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
      <ChooseUs setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <Contacts setSelectedPage={setSelectedPage} />
    </>
  )
}

export default Main
