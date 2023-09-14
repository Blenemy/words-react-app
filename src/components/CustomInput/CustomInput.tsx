import { useState } from "react";

type Props = {
  classname?: string;
  placeholder: string;
  name: string;
  type: string;
  required: boolean;
  value: string | undefined;
  onChangeHandler: any;
  autoComplete: string;
  error?: string;
};

export const CustomInput: React.FC<Props> = ({
  classname,
  placeholder,
  name,
  type,
  required,
  value,
  onChangeHandler,
  autoComplete,
  error,
}) => {
  const [placeholderColor, setPlaceholderColor] = useState("");
  const currentColor = error ? "border-red-400" : "";

  const handleOnFocus = () => {
    setPlaceholderColor("placeholder:text-violetStroke");
  };

  const handleOnBlur = () => {
    setPlaceholderColor("");
  };

  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      className={`border-b ${currentColor} ${placeholderColor}  focus:outline-none px-4 py-2 w-[424px] ${classname}`}
      required={required}
      value={value}
      onChange={onChangeHandler}
      autoComplete={autoComplete}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
};
