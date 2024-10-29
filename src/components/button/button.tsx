import React from "react";
import { ButtonProps } from "./Button.interface";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  label='button',
  size='small',
  onClick,
  isDisabled=false,
  variant='primary',
  iconPosition='left',
  icon: Icon,
  testId,
  type='button',
  className,
  ...props
}) => {
  const mode =
    variant === "secondary"
      ? "button-secondary"
      : `button-${variant}`;

  return (
    <>
      <button
         type={type}
      
        disabled={isDisabled}
        
        className={[
          "button",
          `button-${size}`,
          mode,
          `button-${iconPosition}`,
          className && className
        ].join(" ")}
        onClick={onClick}
        data-testid={testId}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon data-testId='icon' />}
        {label}
        {Icon && iconPosition === "right" && <Icon data-testId='icon' />}
      </button>
    </>
  );
};

export default Button;
