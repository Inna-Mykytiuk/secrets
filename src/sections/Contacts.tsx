import React from 'react'
import { motion } from "framer-motion";
import { SelectedPage } from '@/types/types'
import ContactInfo from '../components/Contacts/ContactInfo'
import ContactForm from '../components/Contacts/ContactsForm'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}
const Contacts: React.FC<Props> = () => {
  return (
    <section
      className=' w-full h-full bg-cover bg-center sm:bg-left bg-no-repeat bg-contactUsMob sm:bg-contactUsTab lg:bg-contactUsDesk py-[55px] sm:py-[64px] lg:py-[104px] '
      id="contacts"
    >
      <div className='container'>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}

          className='title sm:leading-none leading-[56px] mb-8 lg:mb-[71px]'>Contact <span className='leading-none titleBold'>Us</span></motion.h2>
        <div className='lg:flex'>
          <ContactInfo />
          <ContactForm />
        </div>

      </div>

    </section>
  )
}

export default Contacts
