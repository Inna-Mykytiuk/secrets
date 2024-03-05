export enum SelectedPage {
  // Home = "home",
  About = "about",
  Services = "services",
  Career = "career",
  Gallery = "gallery",
  Contacts = "contacts",
}

export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  aria?: string;
};

export type GalleryNavProps = {
  swiperReady: boolean;
  prevBtnRef: React.RefObject<HTMLButtonElement>;
  nextBtnRef: React.RefObject<HTMLButtonElement>;
};

export interface ServicesSlideInfoProps {
  item: {
    id: string;
    img: string;
    promo: string;
    title: string;
    description: string;
  };
  idx?: number;
  activeSlide?: number;
  handleMenuButtonClick?: (slideIndex: number) => void;
}
