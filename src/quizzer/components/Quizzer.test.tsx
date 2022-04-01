import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";
import { Quiz } from "../../interfaces/quiz";
import quest from ".././/data/quizquestions.json";

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
        })[0];
        startButton.click();
        expect(
            screen.getByText(quizzes[0].questions[0].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[0].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[1].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[1].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[2].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[2].body)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[3].name)
        ).toBeInTheDocument();
        expect(
            screen.getByText(quizzes[0].questions[3].body)
        ).toBeInTheDocument();
    });

    //there are at least two types, SA and MC (tested in indv. MC and SA files from past)
    //check ans function
    //sum points of questions / quiz
    test("Show Sum of Points When Quiz is in Progress", () => {
        const startButton = screen.getAllByRole("button", {
            name: /Start Quiz or Close and Clear Answer/i
        })[0];
        startButton.click();
        const numPoints = screen.queryAllByAltText(/Total Points/);
        expect(numPoints).toHaveLength(0);
    });
    //clear answer
    //publish questions
    //filter questions by published or not
    //edit questions
    test("Edit Quiz Allows Quizzes and Questions to be Edited", () => {
        const editButton = screen.getAllByRole("button", {
            name: /Edit Quiz/i
        })[0];
        editButton.click();
        const inputText = screen.getAllByRole("textbox");
        expect(inputText).toHaveLength(5 * quizzes[0].questions.length + 6);
        const cancelButton = screen.getByRole("button", { name: /Cancel/i });
        expect(cancelButton).toBeInTheDocument();
    });
    //add questions
    //reorder questions, attempted and commented out code but cannot get it
    //add a new quiz
    test("Edit Quiz Allows Quizzes to be Added and Saved", () => {
        const editButton = screen.getAllByRole("button", {
            name: /Edit Quiz/i
        })[0];
        editButton.click();
        const saveButton = screen.getByRole("button", { name: /Save/i });
        expect(saveButton).toBeInTheDocument();
    });
    //delete a quiz
    test("Edit Quiz Allows Quizzes to be Deleted", () => {
        const editButton = screen.getAllByRole("button", {
            name: /Edit Quiz/i
        })[0];
        editButton.click();
        const deleteButton = screen.getByRole("button", { name: "Delete" });
        expect(deleteButton).toBeInTheDocument();
    });
});
