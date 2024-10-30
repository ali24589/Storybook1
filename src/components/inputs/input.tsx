import React from "react";
import { InputProps } from "./input.interface";
import "./input.css";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = `Enter ${type}`,
  variants = "Plain",
  states = "Normal",
  icon: Icon,
  iconPosition = "End",
  onChange,
  isDisabled = false,
  dataTestId,
}) => {
  const inputVariants =
    variants === "Plain" ? "inputVariants-Plain" : `inputVariants-${variants}`;
  const inputStates =
    states === "Normal" ? "inputStates-Normal" : `inputStates-${states}`;

  return (
    <>
      <div
        className={["input", inputVariants, inputStates].join(" ")}
        data-testId="container-div"
      >
        {Icon && iconPosition === "Start" && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
          data-testId={dataTestId}
        />
        {Icon && iconPosition === "End" && <Icon />}
      </div>
    </>
  );
};

export default Input;
