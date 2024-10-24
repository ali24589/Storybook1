export interface InputProps {
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  
  variants?: "Rounded" | "Plain";
  states?: 'Normal'|"Focus" | "Hover" | "Error" | "Valid";
  icon?: React.ElementType;
  iconPosition?: "Start" | "End";
  onChange?: () => void;
  isDisabled?: boolean;
  placeholder?: string;
  
}
