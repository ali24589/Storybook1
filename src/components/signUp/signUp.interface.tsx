export interface SignUpProps {
  nameType: "text";
  passwordType: "password";
  namePlaceholder?: "Enter your full name"
  passwordPlaceholder?:'Enter the password'
  buttonType?: "submit";
  btnLabel: "sign Up";
  onChange?:()=>void;
  onClick?:()=>void
  nameValue?:string
}
