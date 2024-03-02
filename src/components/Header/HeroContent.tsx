import React from 'react'

const HeroContent = () => {
  return (
    <div className='container'>
      <div className='flex justify-between pb-[80px]'>
        <div className='flexColumn max-w-[426px] lg:max-w-[646px]'>
          <h1 className='text-[67px] lg:text-[98px] font-thin text-mainWhite tracking-[-2.68px] lg:tracking-[-3.92px] uppercase pb-[148px]'><span className='text-[67px] lg:text-[98px] font-medium'>Uncover</span> Carpathian’s Secrets</h1>
          <p className='text-mainWhite text-sm lg:text-base font-extralight leading-4 lg:leading-6 tracking-[1.26px] lg:tracking-[1.44px] max-w-[263px] lg:max-w-full'>Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        </div>
        <div className='flexColumn max-w-[230px]  lg:max-w-[305px]'>
          <div className='flex flex-col'>
            <p className='text-[67px] lg:text-[98px] font-thin text-mainWhite uppercase tracking-[3.9px] lg:tracking-[0.9px]'><span className='text-[67px] lg:text-[98px] font-medium'>7</span>DAYS</p>
            <p className='text-base font-300 text-mainWhite tracking-[21.9px] lg:tracking-[32.9px] mt-[-25px] uppercase'>JOURNEY</p>
          </div>
          <div>
            <p>We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
            </p>
            <button type='button'>JOIN NOW</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeroContent
