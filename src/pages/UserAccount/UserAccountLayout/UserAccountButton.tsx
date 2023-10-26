type UserAccountButtonProps = {
  type: "button" | "reset" | "submit";
  text: string;
  borderColor: string;
  backgroundColor: string;
  handleOnClick?: () => void;
  hoverText?: string;
  hoverBorder?: string;
  hoverBackground?: string;
};
export const UserAccountButton: React.FC<UserAccountButtonProps> = (props) => {
  const {
    type,
    text,
    borderColor,
    handleOnClick,
    backgroundColor,
    hoverText,
    hoverBorder,
    hoverBackground,
  } = props;

  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={`w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] text-${borderColor} bg-${backgroundColor} rounded-3xl border-2 border-${borderColor} hover:text-${hoverText} hover:border-${hoverBorder} hover:bg-${hoverBackground}
      } duration-300`}
    >
      {text}
    </button>
  );
};
