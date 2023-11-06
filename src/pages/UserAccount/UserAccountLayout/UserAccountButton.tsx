/**
 * Компонент UserAccountButton, который отображает кнопку на основе предоставленных свойств.
 *
 * @component
 * @param {UserAccountButtonProps} props - Свойства компонента.
 * @returns {JSX.Element} Элемент кнопки с настраиваемыми стилями и функциональностью.
 */

type UserAccountButtonProps = {
  type: "button" | "reset" | "submit";
  text: string;
  handleOnClick?: () => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
};

export const UserAccountButton: React.FC<UserAccountButtonProps> = (props) => {
  const { type, text, handleOnClick, variant, disabled = false } = props;

  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={handleOnClick}
        className="w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] bg-lilackButton duration-300 border-2 rounded-3xl border-primary text-primary hover:bg-transparent"
        disabled={disabled}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={`w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] rounded-3xl border-2 hover:border-primary hover:bg-lilackButton hover:text-primary border-violetStroke text-violetStroke
      } duration-300`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
