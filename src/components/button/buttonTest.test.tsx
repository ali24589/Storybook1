import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";
import { IoMdAdd } from "react-icons/io";

describe("Testing button component", () => {
  //testing label of button
  test("testing abel of button", () => {
    render(<Button label="Click Me" testId="btn-labeled" />);
    const buttonElement = screen.getByTestId("btn-labeled");
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  //testing size of button

  describe("testing size of button component", () => {
    test("testing small button ", () => {
      render(<Button label="Click me" size="small" testId="btn-small" />);
      const buttonElement = screen.getByTestId("btn-small");
      expect(buttonElement).toHaveClass("button-small");
    });
    test("testing medium button ", () => {
      render(<Button label="Click me" size="medium" testId="btn-medium" />);
      const buttonElement = screen.getByTestId("btn-medium");
      expect(buttonElement).toHaveClass("button-medium");
    });
    test("testing large button ", () => {
      render(<Button label="Click me" size="large" testId="btn-large" />);
      const buttonElement = screen.getByTestId("btn-large");
      expect(buttonElement).toHaveClass("button-large");
    });
    test("testing extraLarge button ", () => {
      render(<Button label="Click me" size="extraLarge" testId="btn-extraLarge" />);
      const buttonElement = screen.getByTestId("btn-extraLarge");
      expect(buttonElement).toHaveClass("button-extraLarge");
    });
  });

  //testing type of button

  describe("testing type of button component", () => {
    test("testing default button ", () => {
      render(<Button label="Click me" type="button" testId="btn-default" />);
      const buttonElement = screen.getByTestId("btn-default");
      expect(buttonElement).toHaveAttribute('type',"button");
    });
    
    test("testing type submit button ", () => {
      render(<Button label="Click me" type="submit" testId="btn-submit" />);
      const buttonElement = screen.getByTestId("btn-submit");
      expect(buttonElement).toHaveAttribute('type',"submit");
    });
    test("testing type reset button ", () => {
      render(<Button label="Click me" type="reset" testId="btn-reset" />);
      const buttonElement = screen.getByTestId("btn-reset");
      expect(buttonElement).toHaveAttribute('type',"reset");
    });
  });

  //testing the enabling of button

  describe("testing enabled or disabled button component", () => {
    test("testing disabled button ", () => {
      render(<Button label="Click me" isDisabled={true} testId="btn-disabled" />);
      const buttonElement = screen.getByTestId("btn-disabled");
      expect(buttonElement).toBeDisabled();
      screen.debug()
    });
    
    test("testing enabled button ", () => {
      render(<Button label="Click me"  testId="btn-enabled" />);
      const buttonElement = screen.getByTestId("btn-enabled");
      expect(buttonElement).toBeEnabled();
      screen.debug()
    });
  });

  // testing onclick function of button

  test('testing onclick funtion of button',()=>{
    const handleClick=jest.fn()
    render(<Button label="Click me" testId="btn-clicked" onClick={handleClick}/>)
    const buttonComponent=screen.getByTestId('btn-clicked')
    fireEvent.click(buttonComponent)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // testing variants of button

  describe("testing variants of button component", () => {
    test("testing primary button ", () => {
      render(<Button label="Click me" variant="primary" testId="btn-primary" />);
      const buttonElement = screen.getByTestId("btn-primary");
      expect(buttonElement).toHaveClass("button-primary");
    });
    
    test("testing variants secondary button ", () => {
      render(<Button label="Click me" variant="secondary" testId="btn-secondary" />);
      const buttonElement = screen.getByTestId("btn-secondary");
      expect(buttonElement).toHaveClass("button-secondary");
    });
    test("testing variants delete button ", () => {
      render(<Button label="Click me" variant="delete" testId="btn-delete" />);
      const buttonElement = screen.getByTestId("btn-delete");
      expect(buttonElement).toHaveClass("button-delete");
    });

  });

  //testing icon position

  describe("testing icon position of button", () => {
    test("testing leftIcon button ", () => {
      render(<Button label="Click me" iconPosition="left" testId="btn-leftIcon" />);
      const buttonElement = screen.getByTestId("btn-leftIcon");
      expect(buttonElement).toHaveClass("button-left");
    });
    test("testing rightIcon button ", () => {
      render(<Button label="Click me" iconPosition="right" testId="btn-rightIcon" />);
      const buttonElement = screen.getByTestId("btn-rightIcon");
      expect(buttonElement).toHaveClass("button-right");
    });
  });

  //testing iconed button
  test('testing iconed button',()=>{
    render(<Button label='Click Me' icon={IoMdAdd} iconPosition="left"  testId="btn-icon" />)
    screen.debug()
    const buttonElement=screen.getByTestId('btn-icon')
    expect(buttonElement).toHaveTextContent('Click Me')
     const iconElement=screen.getByTestId('icon')
     expect(iconElement).toBeInTheDocument()
     expect(buttonElement).toContainElement(iconElement)

  })
});
