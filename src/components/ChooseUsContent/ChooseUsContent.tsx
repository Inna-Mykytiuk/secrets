import React from 'react'
import contentData from '../../data/career.json'

const ChooseUsContent = () => {
  return (
    <div className='flex flex-col sm:mr-6 lg:mr-6'>
      <h3 className='text-mainWhite hidden font-extralight lg:flex lg:text-4xl lg:leading-10 uppercase lg:ml-[143px] lg:mb-[45px]'>Why Us ?</h3>
      <ul className='flex flex-col gap-6 gap-y-4 mr-[90px] text-right sm:w-[230px] sm:float-left sm:gap-y-8 lg:w-full sm:mr-0 sm:mb-0'>
        {contentData.map((item, index) => (
          <li key={index} className='lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6'>
            <h4 className='textContent sm:mb-2 lg:mb-0 text-end gap-2'>{item.title}</h4>
            <p className='textContentXS text-end lg:text-start'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChooseUsContent
