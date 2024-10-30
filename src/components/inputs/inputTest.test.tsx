import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./input";
import "@testing-library/jest-dom";

describe("Testing input element", () => {
  // Testing the variants of input
  describe("testing types of Input component", () => {
    test("testing text Input ", () => {
      render(<Input type="text" dataTestId="input-text" />);
      const inputElement = screen.getByTestId("input-text");
      expect(inputElement).toHaveAttribute("type", "text");
    });
    test("testing search Input ", () => {
      render(<Input type="search" dataTestId="input-search" />);
      const inputElement = screen.getByTestId("input-search");
      expect(inputElement).toHaveAttribute("type", "search");
    });
    test("testing color Input ", () => {
      render(<Input type="color" dataTestId="input-color" />);
      const inputElement = screen.getByTestId("input-color");
      expect(inputElement).toHaveAttribute("type", "color");
    });
    test("testing date Input ", () => {
      render(<Input type="date" dataTestId="input-date" />);
      const inputElement = screen.getByTestId("input-date");
      expect(inputElement).toHaveAttribute("type", "date");
    });
    test("testing time Input ", () => {
      render(<Input type="time" dataTestId="input-time" />);
      const inputElement = screen.getByTestId("input-time");
      expect(inputElement).toHaveAttribute("type", "time");
    });
    test("testing tel Input ", () => {
      render(<Input type="tel" dataTestId="input-tel" />);
      const inputElement = screen.getByTestId("input-tel");
      expect(inputElement).toHaveAttribute("type", "tel");
    });
    test("testing number Input ", () => {
      render(<Input type="number" dataTestId="input-Plain" />);
      const inputElement = screen.getByTestId("input-Plain");
      expect(inputElement).toHaveAttribute("type", "number");
    });
    test("testing range Input ", () => {
      render(<Input type="range" dataTestId="input-range" />);
      const inputElement = screen.getByTestId("input-range");
      expect(inputElement).toHaveAttribute("type", "range");
    });
  });

  //testing placeholder of input 
  test('testing placeolder of input',()=>{
    render(<Input type="number" dataTestId="input-placeholder"/>)
    const inputElement=screen.getByPlaceholderText('Enter number')
    expect(inputElement).toBeInTheDocument()

  })

  //testing enabling and disabling of input

  describe('testing enabling and disabling of input',()=>{
    test('testing enabled input',()=>{
      render(<Input type="search" isDisabled={false} dataTestId="input-enabled"/>)
      const inputElement=screen.getByTestId('input-enabled')
      expect(inputElement).toBeEnabled()
    })

    test('testing disabled input',()=>{
      render(<Input type="search" isDisabled={true} dataTestId="input-disabled"/>)
      const inputElement=screen.getByTestId('input-disabled')
      expect(inputElement).toBeDisabled()
    })
  })

  //testing onchange of input
  test('testing onchange of input',()=>{
    const handleChange = jest.fn()
    render(<Input type="tel" onChange={handleChange} dataTestId="input-onchange"/>)
    const inputElement=screen.getByTestId('input-onchange')
    fireEvent.change(inputElement,{target:{value:'123'}})
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  //testing variants of input
  describe('testing variants of input',()=>{
    test('testing Plain input',()=>{
      render(<div><Input type="text" variants="Plain" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputVariants-Plain')
    })
    test('testing Rounded input',()=>{
      render(<div><Input type="text" variants="Rounded" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputVariants-Rounded')
    })
  })

  //testing states of input
  describe('testing states of input',()=>{
    test('testing Normal state of input',()=>{
      render(<div><Input type="text" states="Normal" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputStates-Normal')
    })
    test('testing Hover state of input',()=>{
      render(<div><Input type="text" states="Hover" dataTestId=""/></div>)
      screen.debug()
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputStates-Hover')
    })
    test('testing Focus state of input',()=>{
      render(<div><Input type="text" states="Focus" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputStates-Focus')
    })
    test('testing Error state of input',()=>{
      render(<div><Input type="text" states="Error" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputStates-Error')
    })
    test('testing Valid state of input',()=>{
      render(<div><Input type="text" states="Valid" dataTestId=""/></div>)
      const containerElement=screen.getByTestId('container-div')
      expect(containerElement).toHaveClass('inputStates-Valid')
    })
  })
});
