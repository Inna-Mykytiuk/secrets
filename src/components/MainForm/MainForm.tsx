"use client";

import 'react-toastify/dist/ReactToastify.css';
import data from '@/data/common.json'

const MainForm = () => {
  return (
    <div className='flex flex-col w-[290px]'>
      <p className="ml-auto mb-9 w-[179px] paragraph sm:ml-0 sm:mb-7 sm:w-[221px] lg:w-[234px] ">{data.mainFormText}
      </p>
      <form className='flex flex-col'>
        <div className='flex flex-col'>
          <label>{data.formLabel}</label>
          <input />
        </div>
      </form>

    </div>
  )
}

export default MainForm
