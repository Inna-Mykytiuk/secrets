'use client'

import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-scroll";
import Logo from "./Logo";
import MobileMenu, { MobileMenuProps } from "../MobileMenu/MobileMenu";


const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className='w-full pt-9 pb-9 sm:pt-[25px] sm:pb-[66px] lg:pt-6 lg:pb-[50px] absolute '>

      <div className='container'>
        <div className='flexBetween w-full gap-16'>
          <Logo />
          {isAboveMediumScreens ? (
            <div className='flexBetween'>
              <div className='flexCenter gap-6 md:gap-[56px] text-mainWhite textNormal tracking-normal'>
                <Link
                  to="about"
                  smooth={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className="navLink footer-link"
                >
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className="navLink footer-link"
                >
                  Services
                </Link>
                <Link
                  to="career"
                  smooth={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className="navLink footer-link"
                >
                  Career
                </Link>
                <Link
                  to="gallery"
                  smooth={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className="navLink footer-link"
                >
                  Gallery
                </Link>
                <Link
                  to="contacts"
                  smooth={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className="navLink footer-link"
                >
                  Contacts
                </Link>
              </div>
            </div>
          ) : (
            <button
              aria-label="toggle menu button open"
              className="text-mainWhite textNormal cursor-pointer block uppercase"
              onClick={handleOpen}
            >
              Menu
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isOpen && (
        <MobileMenu isOpen={isOpen} onClose={handleClose} />
      )}
    </nav>
  );
};

export default Navbar;