import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders the children correctly", () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));

    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled when disabled is true", () => {
    render(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>
    );
    expect(screen.getByText("Click me")).toBeDisabled();
  });

  it("should not call the onClick function when disabled", () => {
    const onClick = vi.fn();

    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByText("Click me"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
