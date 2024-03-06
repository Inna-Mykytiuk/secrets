import { CareerForm } from "../types/types";

// export const CareerInfo: CareerData = {
//   sectionTitle: {
//     main: "Choose ",
//     accent: "us",
//   },
//   description:
//     "Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.",
//   subtitle: "Why us ?",
//   benefits: [
//     {
//       name: "Professional development",
//       description:
//         "We offer growth opportunities and a creative environment to nurture your talents.",
//     },
//     {
//       name: "Teamwork",
//       description:
//         "Join our close-knit family, where support and inspiration abound.",
//     },
//     {
//       name: "Stimulating work environment",
//       description:
//         "Flexibility and remote options for a comfortable experience.",
//     },
//     {
//       name: "Exciting challenges",
//       description:
//         "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
//     },
//   ],
// };

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
