import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@//types/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  close: () => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  close
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;


  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-secondary500" : ""} 
    transition duration-300 ease-in-out hover:text-secondary500 `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        close();
      }}
    >
      {page}
    </AnchorLink>
  )
}

export default Link