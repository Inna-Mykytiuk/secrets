import React from "react";
import { ContactsInfo } from "@/data/contacts"
import { reformatPhoneNumber } from "@/data/changeFormat";

const ContactInfo: React.FC = () => {
  const { phone, email, socials } = ContactsInfo;

  return (
    <ul
      className="pb-3 ml-auto w-[280px] 
        sm:ml-[34px] sm:mr-auto sm:mb-16 sm:pb-0 
        sm:w-[525px] sm:h-[96px] sm:flex sm:flex-col sm:flex-wrap
        lg:m-0 lg:w-1/2 lg:h-auto lg:flex-nowrap "
    >

      <li className="mb-6 flex flex-row-reverse gap-5 lg:mb-16">
        <span
          className="textContentXS w-[81px] text-xs font-extralight leading-5 lg:mr-3 lg:w-[300px]"
        >
          {phone.name}
        </span>

        <span className="textContent w-[164px] flex flex-col text-right text-sm font-normal leading-6 sm:text-base sm:leading-6">
          {phone.contacts.map(contact =>
            <a
              href={`tel:${contact}`}
              rel="noopener noreferrer"
              target="_blank"
              key={contact}
            >
              {reformatPhoneNumber(contact)}
            </a>
          )}
        </span>
      </li>

      <li className="mb-[26px] flex flex-row-reverse gap-5 sm:mb-0 lg:mb-[124px]">
        <span className="textContentXS w-[81px] text-xs font-extralight leading-5 lg:mr-3 lg:w-[300px]">
          {email.name}
        </span>

        <span className="textContent text-right text-sm font-normal leading-6 sm:text-base sm:leading-6">
          {email.contacts.map(contact =>
            <a
              className="footer-link text-mainWhite text-sm sm:text-base lg:text-lg font-normal leading-5 lg:leading-6"
              href={`mailto:${contact}`}
              rel="noopener noreferrer"
              target="_blank"
              key={contact}
            >
              {contact}
            </a>
          )}
        </span>
      </li>

      <li className="flex gap-5 sm:ml-[90px] lg:flex-row-reverse">
        <span className="textContentXS w-[180px] text-right text-xs font-extralight leading-5 sm:w-auto lg:mr-3 lg:w-[300px] lg:text-left">
          {socials.name}
        </span>
        <ul className="w-[81px] text-sm font-normal leading-6 sm:text-base sm:leading-6 lg:text-end"
        >
          {socials.contacts.map(contact =>
            <li key={contact.title}>
              <a
                href={contact.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={contact.title}
                className="footer-link textContent border-b-[1px] border-transparent transition-all duration-200 ease-in"
              >
                {contact.title}
              </a>
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default ContactInfo
