import React from 'react'
import { SelectedPage } from '@/types/types'
import ContactInfo from '@/components/Contacts/ContactInfo'
import ContactForm from '@/components/Contacts/ContactsForm'

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}
const Contacts = ({ setSelectedPage }: Props) => {
  return (
    <section
      className=' w-full h-full bg-cover bg-center sm:bg-left bg-no-repeat bg-contactUs py-[55px] sm:py-[64px] lg:py-[104px] '
      id="contacts"
    >
      <div className='container'>
        <h2 className='title sm:leading-none leading-[56px] mb-8 lg:mb-[71px]'>Contact <span className='leading-none titleBold'>Us</span></h2>
        <div className='lg:flex'>
          <ContactInfo />
          <ContactForm />
        </div>

      </div>

    </section>
  )
}

export default Contacts
