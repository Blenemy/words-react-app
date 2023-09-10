type Props = {
  classname?: string,
  placeholder: string,
  name: string,
  type: string,
  required: boolean,
  value: string | undefined,
  onChangeHandler: any
  autoComplete: string,
}


export const CustomInput: React.FC<Props> = ({ classname, placeholder, name, type, required, value, onChangeHandler, autoComplete }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      className={`border-b border-violetStroke focus:outline-none px-4 py-2 w-[424px] ${classname}`}
      required={required}
      value={value}
      onChange={onChangeHandler}
      autoComplete={autoComplete}
    />
  )
}