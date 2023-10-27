import { HTMLAttributes, useState } from "react";

/**
 * Компонент для кастомного ввода.
 *
 * @param {string} classname - Классы для стилизации компонента.
 * @param {string} placeholder - Текст внутри поля ввода.
 * @param {string} name - Имя поля ввода.
 * @param {string} type - Тип поля ввода (например, "text" или "password").
 * @param {boolean} required - Обязательное ли поле ввода.
 * @param {(string | undefined | number)} value - Значение поля ввода.
 * @param {Function} onChangeHandler - Обработчик события изменения значения поля ввода.
 * @param {string} autoComplete - Автозаполнение для поля ввода.
 * @param {string} error - Ошибка (если есть).
 * @returns {JSX.Element} - JSX элемент с кастомным полем ввода.
 */

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  classname?: string;
  placeholder: string;
  name: string;
  type: string;
  required?: boolean;
  value: string | undefined | number;
  onChangeHandler: any;
  autoComplete: string;
  error?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  classname,
  placeholder,
  name,
  type,
  required,
  value,
  onChangeHandler,
  autoComplete,
  error,
  ...props
}): JSX.Element => {
  const [placeholderColor, setPlaceholderColor] = useState("");
  const [borderOnFocus, setBorderOnFocus] = useState("");
  const currentColor = error ? "border-red-400" : "";

  const handleOnFocus = () => {
    setPlaceholderColor("placeholder:text-violetStroke");
    setBorderOnFocus("border-violetStroke");
  };

  const handleOnBlur = () => {
    setPlaceholderColor("");
    setBorderOnFocus("");
  };

  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      className={`border-b ${currentColor} ${placeholderColor} ${borderOnFocus} placeholder:font-medium focus:outline-none px-4 py-2 w-full ${classname} font-['Roboto_flex']`}
      required={required}
      value={value}
      onChange={onChangeHandler}
      autoComplete={autoComplete}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...props}
    />
  );
};
