import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/types";


type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary500 text-md font-bold px-10 py-2 hover:bg-secondGreen hover:text-mainWhite transition duration-300 ease-in-out outline-none focus:outline-none focus:bg-secondGreen focus:text-mainWhite"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href={`#${SelectedPage.Contacts}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;