import React from "react";
import { Quiz } from "../interfaces/quizzes";
import { Stack } from "react-bootstrap";
import { QuizView } from "./QuizView";

export function QuizList({
    quizzes,
    deleteQuiz,
    editQuiz
}: {
    quizzes: Quiz[];
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newMovie: Quiz) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quizzes: Quiz) => (
                <div key={quizzes.title} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quizzes}
                        deleteQuiz={deleteQuiz}
                        editQuiz={editQuiz}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
