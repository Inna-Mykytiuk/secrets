import { FormInputProps, InputOptions } from '../../types/types'

const FormInput: React.FC<FormInputProps> = ({
  inputInfo,
  inputStyles,
  register,
  errors
}) => {
  const options: InputOptions = {
    required: inputInfo.required,
    pattern: inputInfo.pattern,
    minLength: inputInfo.minLength
  }

  return (
    <>
      <label
        htmlFor={inputInfo.id}
        className={`label ${inputStyles} ${inputInfo.id === 'career-phone' ? 'phone-label' : ''}`}
      >
        {inputInfo.label}
      </label>

      <input
        id={inputInfo.id}
        type={inputInfo.type}
        autoComplete={inputInfo.autoComplete}
        placeholder={inputInfo.placeholder}
        aria-label={inputInfo.aria}
        className={`input ${inputStyles} ${errors[inputInfo.formData] ? 'invalid-input' : ''} ${inputInfo.id === 'career-phone' ? 'phone' : ''}`}
        {...register(inputInfo.formData, options)}
      />

      {inputInfo.required && errors[inputInfo.formData] && (
        <div className="validation-error bottom-0">
          {inputInfo.error}
        </div>
      )}
    </>
  );
};

export default FormInput