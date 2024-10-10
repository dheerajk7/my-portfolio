import { ButtonTypes } from "./types";

function Button({
  children,
  variant,
  outline,
  handleClick,
  rounded,
  buttonClasses
}: ButtonTypes) {
  let buttonClassNames = "py-0.75 px-2 ";
  if (variant === "active") {
    buttonClassNames += "bg-orange text-white";
  }
  if (rounded) {
    buttonClassNames += " rounded-3xl";
  }
  buttonClassNames += " " + buttonClasses;
  return (
    <button className={buttonClassNames} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
