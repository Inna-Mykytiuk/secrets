const FormButton: React.FC<{ btnStyles: string }> = ({
  btnStyles
}) => {
  return (
    <button
      type="submit"
      className={`${btnStyles} ml-auto uppercase text-3xl font-medium leading-8 opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300`}
    >
      Send
    </button>
  )
}

export default FormButton