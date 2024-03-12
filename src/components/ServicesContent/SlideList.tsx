import React, { FC } from 'react';
import { TbDiamondsFilled } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/effect-fade';



interface SlideListProps {
  activeSlide: number;
  onMenuButtonClick: (index: number) => void;
}

const menuSlider: string[] = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

const SlideList: FC<SlideListProps> = ({ activeSlide, onMenuButtonClick }) => {
  return (

    <ul className=" w-full flex flex-col list-none p-0 gap-4 z-[100] lg:gap-6 mb-[25px] lg:mb-0">
      {menuSlider.map((item, idx) => (
        <li
          key={item + idx}
          className={`flex text-mainWhite items-center uppercase text-xl sm:text-[22px] lg:text-2xl font-extralight cursor-pointer leading-[17px] sm:leading-[18px] lg:leading-6
          ${idx === activeSlide
              ? 'opacity-100 font-medium'
              : 'opacity-50 hover:pl-1 hover:opacity-100 transition-all duration-500 easy-in-out focus:outline-none '
            }`}
        >
          <button
            aria-label="button toggle"
            type="button"
            className="flex items-center uppercase text-left"
            onClick={() => onMenuButtonClick(idx)}
          >
            <TbDiamondsFilled
              size={10}
              className={`mr-2 ${idx === activeSlide ? 'block opacity-100' : 'hidden'
                }`}
            />
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};


export default SlideList;