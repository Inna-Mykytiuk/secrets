'use client';

import { useState, useEffect } from 'react';
import { SelectedPage } from '@/types/types'

import ChooseUsContent from '@/components/ChooseUsContent/ChooseUsContent';
import ChooseUsForm from '@/components/ChooseUsContent/ChooseUsForm';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Career: React.FC<Props> = ({ setSelectedPage }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);


  // tracking window size for changing orientation on mobile devices
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //  device check
  useEffect(() => {
    if (windowWidth && windowWidth >= 768) {
      setIsMobile(false);
    }

    if (windowWidth && windowWidth < 768) {
      setIsMobile(true);
    }
  }, [windowWidth]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <section
        id="career"
        className="w-full bg-cover bg-top bg-repeat sm:bg-no-repeat bg-chooseUs sm:py-[64px] lg:py-[104px] py-[55px] "
      >
        <div
          className="container"
        >
          <div className='flex flex-col '>
            <div className='flex flex-col items-end sm:flex-row sm:justify-between mb-8 sm:mb-3 lg:mb-6'>
              <h2 className='w-full sm:w-auto title sm:leading-none leading-[56px] mb-6 sm:mb-0 sm:items-center self-center'>Choose  <span className='leading-none titleBold'>Us</span></h2>
              <p className='w-[179px] text-start paragraph sm:w-[221px] lg:w-[293px] sm:text-justify  ml-auto sm:ml-0'>
                Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.
              </p>
            </div>
            <h3 className='flex lg:hidden text-white text-3xl font-extralight uppercase leading-none ml-[100px] sm:ml-[80px] mb-9 sm:mb-14'>Why Us ?</h3>
          </div>

          <div className='flex flex-col sm:flex-row'>
            <ChooseUsContent />

            {!isMobile && (
              <div
                className=""
              >
                <ChooseUsForm />
              </div>
            )}
          </div>
        </div>
      </section>
      {isMobile && (
        <section
          id="career"
          className="career career-mob relative bg-cover bg-no-repeat bg-top bg-chooseUs py-[55px] "
        >
          <div className="container">
            <ChooseUsForm />
          </div>
        </section>
      )}
    </>
  );
};

export default Career;

