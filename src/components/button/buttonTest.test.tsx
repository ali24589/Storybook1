import { render, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";

describe("Testing button component", () => {
  it.only("testing button with type button", () => {
    render(<Button label="Search" type="button" dataTestId={"button"} />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toHaveAttribute("label", "Search");
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toHaveAttribute("type", "button");
  });
  it("testing button with type submit", () => {
    render(
      <Button label="Submit" type="submit" dataTestId={"submit-button"} />
    );
    const buttonElement = screen.getByTestId("submit-button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
  it("testing button with type reset", () => {
    render(<Button label="Reset" type="reset" dataTestId={"reset-button"} />);
    const buttonElement = screen.getByTestId("reset-button");
    expect(buttonElement).toHaveAttribute("type", "reset");
  });
});
