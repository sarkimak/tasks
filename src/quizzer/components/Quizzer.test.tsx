import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";
import { Quiz } from "../../interfaces/quiz";
import quest from ".././/data/quizquestions.json";
import userEvent from "@testing-library/user-event";

const quizzes = quest.map(
    (quiz): Quiz => ({
        ...quiz,
        open: false,
        id: 0
    })
);
describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    //quizzes are visible
    test("The Quizzes Display", () => {
        expect(screen.getByText(quizzes[0].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[0].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].description)).toBeInTheDocument();
        expect(screen.queryAllByText("Number of Questions: 3")).toHaveLength(1);
        expect(screen.queryAllByText("Number of Questions: 4")).toHaveLength(1);
    });
    //quizzes have questions
    test("The Questions Display at Start Quiz", () => {
        const startButton = screen.getAllByRole("button", {
            name: /Start Quiz or Close and Clear Answer/i
        });
        expect(startButton).toHaveLength(2);
    });

    //there are at least two types, SA and MC (tested in indv. MC and SA files from past)
    //check ans function
    //sum points of questions / quiz
    //clear answer
    //publish questions
    //filter questions by published or not
    //edit questions
    //add questions
    //reorder questions, attempted and commented out code but cannot get it
    //add a new quiz
    //delete a quiz
});
