type Props = {
  placeholder: string,
  isRequired: boolean,
  name: string,
  type: string,
  className: string,
  value: string | undefined,
  onChange: (event: any) => void,
  autocomplete?: string,
}

export const CustomInput: React.FC<Props> = ({ type, className, placeholder, name, value, onChange, isRequired, autocomplete }) => {
  return (
    <>
      <input 
        type={type} 
        className={`relative w-full py-5 px-3 bg-transparent outline-none shadow-none text-sm translate-x-2 duration-500 z-10 border-none ${className}`} 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        autoComplete={autocomplete ? autocomplete : ''}
      />
      <i className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-md overflow-hidden duration-500 pointer-events-none"></i>
    </>
  )
}
