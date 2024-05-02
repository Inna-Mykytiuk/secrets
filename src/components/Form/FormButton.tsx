import React from "react";
import data from '@/data/common.json'

const FormButton: React.FC<{ btnStyles: string }> = ({
  btnStyles
}) => {
  return (
    <button
      type="submit"
      className={`${btnStyles} ml-auto uppercase text-3xl font-medium leading-8 opacity-80 outline-none focus:outline-none hover:opacity-100 transition-opacity ease-in duration-300`}
    >
      {data.btnText}
    </button>
  )
}

export default FormButton