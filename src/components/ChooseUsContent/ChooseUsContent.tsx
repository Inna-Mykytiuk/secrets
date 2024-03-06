import React from 'react'
import contentData from '../../data/career.json'

const ChooseUsContent = () => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-white hidden font-extralight lg:flex lg:text-4xl lg:leading-10 uppercase lg:ml-[95px] lg:mb-[45px]'>Why Us ?</h3>
      <ul className='flex flex-col gap-6
       gap-y-4 mr-[90px] text-right sm:w-[14.0625rem] sm:float-left sm:mr-[28px] sm:gap-y-6 lg:w-3/6 
      '>
        {contentData.map((item, index) => (
          <li key={index} className='lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6'>
            <h4 className='textContent text-end gap-2'>{item.title}</h4>
            <p className='textContentXS text-end lg:text-start'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChooseUsContent
