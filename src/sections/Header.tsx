import React from 'react'
import Navbar from '../components/Header/Navbar'
import HeroContent from '../components/Header/HeroContent'

const Header = () => {
  return (
    <header className='w-full h-full bg-cover bg-center bg-no-repeat bg-heroMob sm:bg-heroTab lg:bg-heroDesk'>
      <Navbar />
      <HeroContent />
    </ header>
  )
}

export default Header
