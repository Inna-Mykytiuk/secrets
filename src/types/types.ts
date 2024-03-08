import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

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

export type FormContent = {
  inputs: InputInfo[];
  textarea: TextAreaInfo;
  policy?: CareerPolicy;
};

export type FormData = {
  name: string;
  email: string;
  position?: string;
  phone?: string;
  message: string;
  consent?: boolean;
};

export type FormDataOptions =
  | "name"
  | "email"
  | "position"
  | "phone"
  | "message"
  | "consent";

export type InputInfo = {
  id: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  aria: string;
  error: string | null;
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  label: string;
  formData: FormDataOptions;
};

export type InputOptions = {
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
};

export type TextAreaInfo = {
  id: string;
  autoComplete: string;
  aria: string;
  label: string;
  formData: FormDataOptions;
};

export type CareerBenefit = {
  name: string;
  description: string;
};

export type CareerData = {
  sectionTitle: SectionTitle;
  description: string;
  subtitle: string;
  benefits: CareerBenefit[];
};

export type SectionTitle = {
  main: string;
  accent: string;
};

export type CareerPolicy = {
  text: string;
  error: string;
  formData: FormDataOptions;
};

export type CareerForm = {
  description: string;
  formContent: FormContent;
};

export type FormInputProps = {
  inputInfo: InputInfo;
  inputStyles?: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export type FormTextAreaProps = {
  textarea: TextAreaInfo;
  textAreaStyles: string;
  register: UseFormRegister<FormData>;
};

export type FormPolicyProps = {
  policy: CareerPolicy;
  register: UseFormRegister<FormData>;
};

export type Contact = {
  name: string;
  contacts: string[];
};

export type Social = {
  title: string;
  link: string;
};

export type Socials = {
  name: string;
  contacts: Social[];
};

export type ContactData = {
  phone: Contact;
  email: Contact;
  socials: Socials;
};

export type ContactForm = {
  formContent: FormContent;
};
