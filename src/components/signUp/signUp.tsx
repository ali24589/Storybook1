import React, { useState } from "react";
import { SignUpProps } from "./signUp.interface";

const SignUp: React.FC<SignUpProps> = ({
  nameType = "text",
  passwordType,
  buttonType = "submit",
  namePlaceholder = "Enter your full name",
  btnLabel,
  passwordPlaceholder = "Enter the password",
  onChange,
  onClick,
  nameValue,
}) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordLength, setIsPasswordLength] = useState<boolean>(false);
  const passwordRegEx: RegExp =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/;
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (password.length + 1 === 8) {
      setIsPasswordLength(true);
    } else setIsPasswordLength(false);
  };

  console.log(password.length);
  

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h1>Sign Up</h1>
        <input
          type={nameType}
          placeholder={namePlaceholder}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          style={{
            padding: "8px",
            outline: "none",
            width: "23%",
            border: "1px solid black",
          }}
        />
        <div
          style={{
            width: "23%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
            
              <input
                type={passwordType}
                onChange={(e) => {
                  handlePassword(e);
                }}
                placeholder={passwordPlaceholder}
                value={password}
                style={{
                  padding: "8px",
                  outline: "none",
                  width: "100%",
                  border: "1px solid black",
                }}
              />
              {!isPasswordLength && 
              <p style={{ color: "red", alignSelf: "flex-start" }}>
                Password must be 8 characters
              </p>}
        </div>
        <button
          type={buttonType}
          onClick={onClick}
          style={{
            padding: "8px",
            width: "25%",
            backgroundColor: "#029CFD",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            border: "none",
            borderRadius: "2px",
          }}
        >
          {btnLabel}
        </button>
      </div>
    </>
  );
};

export default SignUp;
