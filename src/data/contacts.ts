import { ContactData, ContactForm } from "../types/types";

export const ContactsInfo: ContactData = {

  phone: {
    name: "Phone number",
    contacts: ["+380981234567", "+380731234567"],
  },
  email: {
    name: "E-mail",
    contacts: ["support@carptravel.com"],
  },
  socials: {
    name: "Follow us",
    contacts: [
      {
        title: "facebook",
        link: "https://www.facebook.com/",
      },
      {
        title: "instagram",
        link: "https://www.instagram.com/",
      },
      {
        title: "youtube",
        link: "https://www.youtube.com/",
      },
      {
        title: "tiktok",
        link: "https://tiktok.com/",
      },
    ],
  },
};

export const ContactFormInfo: ContactForm = {
  formContent: {
    inputs: [
      {
        id: "contact-name",
        type: "text",
        autoComplete: "name",
        placeholder: "John Smith",
        aria: "Name",
        error: "Incorrect name",
        required: true,
        label: "Full name",
        formData: "name",
      },
      {
        id: "contact-mail",
        type: "email",
        autoComplete: "email",
        placeholder: "johnsmith@email.com",
        aria: "Email",
        error: "Invalid email",
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        label: "E-mail",
        formData: "email",
      },
    ],
    textarea: {
      id: "contact-message",
      autoComplete: "off",
      aria: "Text message",
      label: "Message",
      formData: "message",
    },
  },
};
