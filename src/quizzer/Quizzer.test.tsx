/*import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("There is a quizzer header", () => {
        render(<Quizzer />);
        const linkElement = screen.getByText(/Quizzer/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("There is an image of the sketch", () => {
        render(<Quizzer />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });
    test("There is a list of requirements", () => {
        render(<Quizzer />);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
        expect(list.children.length).toBeGreaterThanOrEqual(3);
    });
});
*/
