"use client"

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';

import { FormData } from "@/types/types";
import { CareerFormInfo } from "@/data/career";

import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";
import FormPolicy from "../Form/FormPolicy";
import FormButton from "../Form/FormButton";
import React from "react";

export const ChooseUsForm: React.FC = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormData>();

  useFormPersist("careerFormData", {
    watch,
    setValue,
  });

  const { description, formContent: { inputs, textarea, policy } } = CareerFormInfo;

  const onSubmit = (data: FormData) => {
    reset();
    toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
  }

  return (
    <>
      <p
        className="ml-auto text-mainWhite mb-9 w-[179px] text-sm font-extralight leading-5 sm:ml-0 sm:mb-7 sm:w-[221px] sm:text-[13px] sm:leading-5 lg:mb-3.5 lg:w-[234px] lg:text-lg lg:leading-6"
      >
        {description}
      </p>

      <form
        className="flex flex-col sm:w-[464px] sm:grid sm:grid-cols-2 sm:gap-x-7 lg:w-[606px]"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Career"
        noValidate
      >
        <div className="flex flex-col">

          {inputs.map(inputInfo =>
            <div className="mb-4 flex flex-col relative sm:mb-4 lg:mb-[26px]" key={inputInfo.id}>
              <FormInput
                inputInfo={inputInfo}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>

        <div className="mb-4 flex flex-col sm:mb-0">
          <FormTextArea
            textarea={textarea}
            textAreaStyles="min-h-[196px] sm:min-h-[244px] lg:w-[292px] lg:min-h-[274px]"
            register={register}
          />
        </div>

        {policy &&
          <FormPolicy
            policy={policy}
            register={register}

          />
        }

        <FormButton
          aria-label="Button send"
          btnStyles=" text-mainWhite mt-4 sm:m-0 lg:text-[32px] justify-self-end"
        />

      </form>
    </>
  )
}

export default ChooseUsForm