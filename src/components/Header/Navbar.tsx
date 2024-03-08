import { SelectedPage } from "@//types/types";
import Link from "./Links";

import useMediaQuery from "../../hooks/useMediaQuery";
import { useToggle } from "@//hooks/useToggle";
import Logo from "./Logo";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const { isOpen, toggle, close } = useToggle(false);

  return (
    <nav className='w-full pt-[36px] pb-[36px] sm:pt-[25px] sm:pb-[66px] lg:pt-[24px] lg:pb-[50px] absolute '>

      <div className='container'>
        <div className='flexBetween w-full gap-16'>
          {/* LEFT SIDE */}
          <Logo />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className='flexBetween'>
              <div className='flexCenter gap-[24px] md:gap-[56px] text-white textNormal tracking-normal'>
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Link
                  page="Career"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Link
                  page="Gallery"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
                <Link
                  page="Contacts"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  close={close}
                />
              </div>
            </div>
          ) : (
            <button
              aria-label="toggle menu button open"
              className=" text-white textNormal cursor-pointer block uppercase"
              onClick={toggle}
            >
              Menu
            </button>
          )}
        </div>
      </div>


      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isOpen && (
        <div
          className="fixed right-0 bottom-0 z-40 h-full w-full bg-backdrop backdrop-blur-xl"
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end pt-[43px] pr-[20px]">
            <button
              aria-label="toggle menu button close"
              className=" text-white textNormal cursor-pointer block uppercase"
              onClick={toggle}
            >
              Close
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="mx-auto flex flex-col items-center justify-center gap-12 text-lg h-full text-white ">
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Link
              page="Career"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Link
              page="Gallery"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              close={close}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;