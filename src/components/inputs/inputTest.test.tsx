import {  render,screen } from '@testing-library/react';
import Input from './input';
import Button from '../button/button';
import '@testing-library/jest-dom';

describe(('Testing input element'),()=>{
it('renders the input component and accept the input type based on type prop', () => {
  
  render(<Input type="text" dataTestId={'input_text'}/>);
  const inputElement = screen.getByTestId('input_text'); 
    // const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveAttribute('type', 'text');
  
})
it('renders the input component and accept the input type based on type prop', () => {
  
  render(<Input type="search" dataTestId={'input_search'}/>);
  const inputElement = screen.getByTestId('input_search'); 
  expect(inputElement).toHaveAttribute('type', 'search');
  
})
it('renders the input component and accept the input type based on type prop', () => {
  
  render(<Input type="number" dataTestId={'input_number'}/>);
  const inputElement = screen.getByTestId('input_number'); 
    // const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveAttribute('type', 'number');
  
})
it('renders the input component and accept the input type based on type prop', () => {
  
  render(<Input type="color" dataTestId={'input_color'}/>);
  const inputElement = screen.getByTestId('input_color'); 
    
  expect(inputElement).toHaveAttribute('type', 'color');
  
})

})


