import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/icons/logo.png'

const Logo = () => {
  return (
    <Link href='/' className='flex flex-col text-mainWhite text-sm font-normal tracking-wide font-karantina cursor-pointer'>
      <Image
        src={logo}
        alt='travel logo'
        width={100}
        height={100}
        loading='lazy'
        className='w-[59px] h-[21px]'
        aria-label="logo"
      />
      CarpTravel
    </Link>
  );
};

export default Logo;