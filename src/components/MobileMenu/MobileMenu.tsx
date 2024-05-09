import { Link } from "react-scroll";
import data from '@/data/common.json'

export interface MobileMenuProps {
  onClose: () => void;
  isOpen?: boolean;
}

const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {

  const links = data.links;

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
              {data.bntClose}
            </button>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center gap-12 text-lg h-full text-mainWhite ">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                smooth={true}
                href="#"
                ignoreCancelEvents={true}
                onClick={onClose}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;