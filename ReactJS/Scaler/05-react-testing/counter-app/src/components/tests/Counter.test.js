import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter component test cases", () => {

    test("Initial State check", () => {

        // Action
        render(<Counter />)

        // Arrange for assertions
        const counterText = screen.getByText("Count is 0");
        const incrementButton = screen.getByText("Increment");
        const decrementButton = screen.getByText("Decrement");

        // Assertions
        expect(counterText).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();

        // Logic of your test

    });

    test("Increment button click", () => {

        // Action
        render(<Counter />)

        // Arrange for assertions
        const counterText = screen.getByText("Count is 0");
        const incrementButton = screen.getByText("Increment");

        // Assertions
        expect(counterText).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();

        // Logic of your test
        fireEvent.click(incrementButton);
        expect(screen.getByText("Count is 1")).toBeInTheDocument();

    });

    test("Decrement button click", () => {

        // Action
        render(<Counter />)

        // Arrange for assertions
        const counterText = screen.getByText("Count is 0");
        const decrementButton = screen.getByText("Decrement");

        // Assertions
        expect(counterText).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();

        // Logic of your test
        fireEvent.click(decrementButton);
        expect(screen.getByText("Count is -1")).toBeInTheDocument();

    });
})