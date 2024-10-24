import React from "react";
import { InputProps } from "./input.interface";
import "./input.css";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  variants = "Plain",
  states = "Normal",
  icon: Icon,
  iconPosition='End',
  onChange,
  isDisabled = false,
}) => {
  const buttonType = type === "text" ? "buttonType-text" : `buttonType-${type}`;
  const buttonVariants =
    variants === "Plain"
      ? "buttonVariants-Plain"
      : `buttonVariants-${variants}`;
  const buttonStates =
    states === "Normal" ? "buttonStates-Normal" : `buttonStates-${states}`;
    

  return (
    <>
      <label className="text-green-500">{type}</label>
      <div >
        {Icon && iconPosition === "Start" && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
          className={[buttonType, buttonVariants, buttonStates].join(" ")}
        />
        {Icon && iconPosition === "End" && <Icon />}
      </div>
    </>
  );
};

export default Input;
