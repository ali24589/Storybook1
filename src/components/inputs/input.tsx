import React from "react";
import { InputProps } from "./input.interface";
import "./input.css";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  variants = "Plain",
  states = "Normal",
  icon: Icon,
  iconPosition = "End",
  onChange,
  isDisabled = false,
}) => {
  
  const buttonVariants =
    variants === "Plain"
      ? "buttonVariants-Plain"
      : `buttonVariants-${variants}`;
  const buttonStates =
    states === "Normal" ? "buttonStates-Normal" : `buttonStates-${states}`;
   

  return (
    <>
      
      <div className={['input',buttonVariants, buttonStates].join(" ")}>
        {Icon && iconPosition === "Start" && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
        />
        {Icon && iconPosition === "End" && <Icon />}
      </div>
    </>
  );
};

export default Input;
