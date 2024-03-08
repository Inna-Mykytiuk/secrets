"use client"

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
import { motion } from "framer-motion";

import { FormData } from "@/types/types";
import { ContactFormInfo } from "@/data/contacts";

import FormButton from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";
import React from "react";

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormData>();

  useFormPersist("contactFormData", {
    watch,
    setValue,
  });

  const { formContent: { inputs, textarea } } = ContactFormInfo;

  const onSubmit = (data: FormData) => {
    reset();
    toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
  }

  return (
    <motion.form
      className="flex flex-col sm:flex-row sm:gap-5 lg:w-1/2 lg:flex-col lg:gap-10"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Contact"
      noValidate
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-5">
        {inputs.map(inputInfo =>
          <div className="mb-6 flex flex-col relative lg:mb-0" key={inputInfo.id}>
            <FormInput
              inputInfo={inputInfo}
              inputStyles="lg:w-[293px]"
              register={register}
              errors={errors}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <FormTextArea
          textarea={textarea}
          textAreaStyles="mb-4 min-h-[193px] sm:w-[463px] sm:min-h-[221px] lg:w-[607px] lg:min-h-[174px] lg:mb-6"
          register={register}
        />
        <FormButton
          aria-label="Button send"
          btnStyles="text-mainWhite lg:mr-2"
        />
      </div>
    </motion.form>
  )
}

export default ContactForm