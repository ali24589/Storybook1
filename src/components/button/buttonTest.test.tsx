import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";

describe("Testing button component", () => {
  it("testing button with type button", () => {
    // const handleClick = jest.fn();
    
    render(<Button label='Search' isDisabled={true} type="button" dataTestId={"button"} />);
   
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveAttribute("type", "button");
     expect(buttonElement).toHaveTextContent("Search");
    // expect(buttonElement).toHaveAttribute("isDisabled", true);
    // fireEvent.click(buttonElement);
    // expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("testing button with type submit", () => {
   
    render(
      <Button label="Submit" type="submit"  dataTestId={"submit-button"} />
    );
    const buttonElement = screen.getByTestId("submit-button");
    
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveTextContent("Submit");
  });
  it("testing button with type reset", () => {
    render(<Button label="Reset" type="reset" dataTestId={"reset-button"} />);
    const buttonElement = screen.getByTestId("reset-button");
    expect(buttonElement).toHaveAttribute("type", "reset");
  });
});
