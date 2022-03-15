import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("There is a quizzer header", () => {
    render(<App />);
    const linkElement = screen.getByText(/Quizzer/i);
    expect(linkElement).toBeInTheDocument();
});
test("There is an image of the sketch", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
});

test("There is a list of requirements", () => {
    render(<App />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.children.length).toBeGreaterThanOrEqual(3);
});
