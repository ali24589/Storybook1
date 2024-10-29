import React from "react";

export interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large" | "extraLarge";
  isDisabled?: boolean;
  onClick?: () => void;
  icon?: React.ElementType;
  variant?: "primary" | "secondary" | "delete";
  iconPosition?: "left" | "right";
 testId?: string;
 className?:string;
}
