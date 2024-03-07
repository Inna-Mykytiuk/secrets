import { CareerForm } from "../types/types";

export const CareerFormInfo: CareerForm = {
  description:
    "Don't miss your opportunity! Fill out the form right now and join our team!",
  formContent: {
    inputs: [
      {
        id: "career-name",
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
        id: "career-mail",
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
      {
        id: "career-position",
        type: "text",
        autoComplete: "on",
        placeholder: "Movie maker",
        aria: "Career position",
        error: null,
        required: false,
        label: "Position",
        formData: "position",
      },
      {
        id: "career-phone",
        type: "tel",
        autoComplete: "tel",
        placeholder: "(097) 12 34 567",
        aria: "Phone number",
        error: "Incorrect phone",
        required: true,
        pattern: /^[0-9\s()]+$/,
        minLength: 10,
        label: "Phone",
        formData: "phone",
      },
    ],
    textarea: {
      id: "career-message",
      autoComplete: "off",
      aria: "Text message",
      label: "Message",
      formData: "message",
    },
    policy: {
      text: "I confirm my consent to the processing of personal data.",
      error: "This checkbox is required",
      formData: "consent",
    },
  },
};
