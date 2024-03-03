'use client'
import React from 'react'
import btn from '../assets/icons/desktop-left.svg?url'
import Btn from '../assets/icons/desktop-left.svg'
import Image from 'next/image'



const Button = () => {
  return (
    <div>
      {/* <Btn claName="w-[40px] h-[40px]" /> */}
      <Image src={btn} alt='btn' />
    </div>
  )
}

export default Button
