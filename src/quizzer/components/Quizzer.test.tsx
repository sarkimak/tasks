import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";
import { Quiz } from "../../interfaces/quiz";
import quest from ".././/data/quizquestions.json";
import userEvent from "@testing-library/user-event";

const quizzes = quest.map(
    (quiz): Quiz => ({
        ...quiz,
        open: false
    })
);

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzes Display", () => {
        expect(screen.getByText(quizzes[0].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[0].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].description)).toBeInTheDocument();
        const numberOfQuestionText = screen.queryAllByText(
            "Number of Questions: 3"
        );
        expect(numberOfQuestionText).toHaveLength(2);
    });
    test("Expand Button", () => {
        const
    })