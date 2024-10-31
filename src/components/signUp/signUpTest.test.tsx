import SignUp from "./signUp"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";

describe('testing sign up form',()=>{
    
        test(('testing the fields'),()=>{
            render(<SignUp nameType='text'passwordType="password" namePlaceholder='Enter your full name' passwordPlaceholder='Enter the password' btnLabel="sign Up" />)
            const nameComponent=screen.getByTestId('input-name')
            const passwordComponent=screen.getByTestId('input-password')
            const namePlaceholder=screen.getByPlaceholderText('Enter your full name')
            const passwordPlaceholder=screen.getByPlaceholderText('Enter the password')
            const buttonComponent=screen.getByTestId('btn-signUp')
            expect(nameComponent).toHaveAttribute('type','text') 
            expect(passwordComponent).toHaveAttribute('type','password')
            expect(namePlaceholder).toBeInTheDocument()
            expect(passwordPlaceholder).toBeInTheDocument()
            expect(buttonComponent).toHaveTextContent('sign Up')
        })
})