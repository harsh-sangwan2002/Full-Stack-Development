import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("Counter renders with 0 default value", () => {
    render(<App />)
    expect(screen.getByText(/Count is: 0/i)).toBeInTheDocument();
})

test("Counter renders 1 on click of +", () => {
    render(<App />)
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton)
    expect(screen.getByText(/Count is: 1/i)).toBeInTheDocument();
})

test("Counter renders 0 on click of -", () => {
    render(<App />)
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton)
    expect(screen.getByText(/Count is: -1/i)).toBeInTheDocument();
}
)

test("Counter renders 0 on click of - and +", () => {
    render(<App />)
    const decrementButton = screen.getByText("-");
    const incrementButton = screen.getByText("+");
    fireEvent.click(decrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText(/Count is: 0/i)).toBeInTheDocument();
}
)

test("Counter renders 0 on click of - and + and -", () => {
    render(<App />)
    const decrementButton = screen.getByText("-");
    const incrementButton = screen.getByText("+");
    fireEvent.click(decrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(decrementButton)
    expect(screen.getByText(/Count is: -1/i)).toBeInTheDocument();
}
)