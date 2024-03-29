'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ChooseUsContent from '../components/ChooseUsContent/ChooseUsContent';
import ChooseUsForm from '../components/ChooseUsContent/ChooseUsForm';


const Career = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

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
        className="w-full bg-cover bg-top bg-repeat sm:bg-no-repeat bg-chooseUsMob sm:bg-chooseUsTab lg:bg-chooseUsDesk sm:py-[64px] lg:py-[104px] py-[55px] "
      >
        <div
          className="container"
        >
          <div className='flex flex-col '>
            <div className='flex flex-col items-end sm:flex-row sm:justify-between mb-8 sm:mb-3 lg:mb-6'>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='w-full sm:w-auto title sm:leading-none leading-[56px] mb-6 sm:mb-0 sm:items-center self-center'>Choose  <span className='leading-none titleBold'>Us</span></motion.h2>
              <p className='w-[179px] text-start paragraph sm:w-[221px] lg:w-[293px] sm:text-justify  ml-auto sm:ml-0'>
                Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.
              </p>
            </div>
            <h2 className='flex lg:hidden text-mainWhite text-3xl font-extralight uppercase leading-none ml-[100px] sm:ml-[80px] mb-9 sm:mb-14'>Why Us ?</h2>
          </div>

          <div className='flex flex-col sm:flex-row'>
            <ChooseUsContent />

            {!isMobile && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ChooseUsForm />
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {isMobile && (
        <section
          id="career"
          className="career career-mob relative bg-cover bg-no-repeat bg-top bg-chooseUsMob py-[55px] "
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

