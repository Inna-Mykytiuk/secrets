import { Link } from "react-scroll";

export interface MobileMenuProps {
  onClose: () => void;
  isOpen?: boolean;
}

const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {

  return (
    <>
      {isOpen && (
        <div
          className="fixed right-0 bottom-0 z-40 h-full w-full bg-backdrop backdrop-blur-xl"
        >
          <div className="flex justify-end pt-[43px] pr-[20px]">
            <button
              aria-label="toggle menu button close"
              className="text-mainWhite textNormal cursor-pointer block uppercase"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center gap-12 text-lg h-full text-mainWhite ">
            <Link
              to="about"
              smooth={true}
              href="#"
              ignoreCancelEvents={true}
              onClick={onClose}
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              href="#"
              ignoreCancelEvents={true}
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              to="career"
              smooth={true}
              href="#"
              ignoreCancelEvents={true}
              onClick={onClose}
            >
              Career
            </Link>
            <Link
              to="gallery"
              smooth={true}
              href="#"
              ignoreCancelEvents={true}
              onClick={onClose}
            >
              Gallery
            </Link>
            <Link
              to="contacts"
              smooth={true}
              href="#"
              ignoreCancelEvents={true}
              onClick={onClose}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;