const Button = ({
  children,
  onClick,
  disabled,
  variant = "primary",
  size,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-[7px] flex justify-center items-center px-4 font-medium ${
        size === "sm" ? "h-[32px] text-xs" : "h-[44px] text-sm"
      } ${
        variant === "primary"
          ? "bg-purple text-white"
          : variant === "secondary"
          ? "bg-lightPurple text-purple"
          : variant === "italics-blur"
          ? "font-nunito bg-onion bg-opacity-[0.2] text-white"
          : ""
      }  ${className} ${disabled && "bg-opacity-[0.4]"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
