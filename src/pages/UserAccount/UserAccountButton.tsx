type UserAccountButtonProps = {
  type: "button" | "reset" | "submit";
  text: string;
  color: string;
  transparent?: boolean;
};
export const UserAccountButton: React.FC<UserAccountButtonProps> = (props) => {
  const { type, text, color, transparent } = props;
  return (
    <button
      type={type}
      className={`w-[200px] h-10 flex items-center justify-center font-['Roboto_flex'] text-[20px] text-${color} bg-lilackButton rounded-3xl border-2 border-${color} ${
        transparent && "bg-transparent"
      }`}
    >
      {text}
    </button>
  );
};
