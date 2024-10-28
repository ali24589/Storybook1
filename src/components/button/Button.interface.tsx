import React from "react";

export interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large" | "extraLarge";
  backgroundColor?: string;
  color?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  icon?: React.ElementType;
  variant?: "primary" | "secondary" | "delete";
  iconPosition?: "left" | "right";
  dataTestId?: string;
}
