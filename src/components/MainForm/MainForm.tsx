"use client";

import 'react-toastify/dist/ReactToastify.css';

const MainForm = () => {
  return (
    <div className='flex flex-col w-[290px]'>
      <p className="ml-auto mb-9 w-[179px] paragraph sm:ml-0 sm:mb-[28px] sm:w-[221px] lg:w-[234px] ">Don't miss your opportunity! Fill out the form right now and join our team!
      </p>
      <form className='flex flex-col'>
        <div className='flex flex-col'>
          <label>Full name</label>
          <input />
        </div>
      </form>

    </div>
  )
}

export default MainForm
