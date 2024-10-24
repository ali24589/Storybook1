import React from "react";

export interface ButtonProps {
    label :string,
    size?: 'small' | 'medium' | 'large' | 'extraLarge',
    backgroundColor?:string,
    color?:string,
    isDisabled?:boolean,
    onClick?: () => void,
    icon?: React.ElementType,
    variant?:'primary' | 'secondary' | 'delete',
    iconPosition?:'left' | 'right'
}