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
  ...props
}) => {
  const mode =
    variant === "primary"
      ? "storybook-button--primary"
      : `storybook-button--${variant}`;

  return (
    <>
      {isDisabled ? (
        <button
          type="button"
          disabled
          className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
            `storybook-button--${iconPosition}`,
          ].join(" ")}
          style={{ backgroundColor }}
          onClick={onClick}
          {...props}
        >
          {Icon && iconPosition === "left" && <Icon />}
          {label}
          {Icon && iconPosition === "right" && <Icon />}
        </button>
      ) : (
        <button
          type="button"
          className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
            `storybook-button--${iconPosition}`,
          ].join(" ")}
          style={{ backgroundColor }}
          onClick={onClick}
          {...props}
        >
          {Icon && iconPosition === "left" && <Icon />}
          {label}
          {Icon && iconPosition === "right" && <Icon />}
        </button>
      )}
    </>
  );
};

export default Button;
