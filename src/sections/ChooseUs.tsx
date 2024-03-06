import React from 'react'
import { SelectedPage } from '@/types/types'
import ChooseUsContent from '@/components/ChooseUsContent/ChooseUsContent'


type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}
const ChooseUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="chooseUs"
      className='w-full h-full bg-cover bg-center sm:bg-left bg-no-repeat bg-chooseUs py-[55px] sm:py-[64px] lg:py-[104px]  '
    >
      <div className='container'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-end sm:flex-row sm:justify-between mb-8 sm:mb-3 lg:mb-6'>
            <h2 className='w-full sm:w-auto title sm:leading-none leading-[56px] mb-6 sm:mb-0 sm:items-center self-center'>Choose  <span className='leading-none titleBold'>Us</span></h2>
            <p className='w-[179px] text-start paragraph sm:w-[221px] lg:w-[293px] sm:text-justify  ml-auto sm:ml-0'>
              Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.
            </p>
          </div>
          <h3 className='flex lg:hidden text-white text-3xl font-extralight uppercase leading-none ml-[100px] sm:ml-[80px] mb-9 sm:mb-14'>Why Us ?</h3>
        </div>
        <div>
          <ChooseUsContent />

          {/* <div>
            <p>Don't miss your opportunity!
              Fill out the form right now
              and join our team!
            </p>
            <div>
              <p></p>
              <p></p>
            </div>
            <div>
              <p>Confirm</p>
              <button type="button">Send</button>
            </div>
          </div> */}

        </div>

      </div>

    </section>
  )
}

export default ChooseUs
