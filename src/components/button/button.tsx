import React from "react";
import { ButtonProps } from "./Button.interface";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  label,
  size,
  backgroundColor,
  onClick,
  isDisabled,
  variant,
  iconPosition,
  icon: Icon,
  dataTestId,
  type,
  ...props
}) => {
  const mode =
    variant === "secondary"
      ? "storybook-button--secondary"
      : `storybook-button--${variant}`;

  return (
    <>
      
        <button
          type={type}
          disabled={isDisabled}
          className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
            `storybook-button--${iconPosition}`,
          ].join(" ")}
          style={{ backgroundColor }}
          onClick={onClick}
          {...props}
          data-testId={dataTestId}
        >
          {Icon && iconPosition === "left" && <Icon />}
          {label}
          {Icon && iconPosition === "right" && <Icon />}
        </button>
      
        
    </>
  );
};

export default Button;
