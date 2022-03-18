/*import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";
import quest from "./data/quizquestions.json";

const QUIZZES: Quiz[] = quest.map(
    (quiz): Quiz => ({
        ...quiz,
        questions: quiz.questions.map(
            (question): Question => ({
                ...question,
                type: question.type as QuestionType
            })
        )
    })
);

const NEW_QUIZ: Quiz = {
    id: 10,
    title: "New Blank Quiz",
    points: 0,
    description: "",
    maxQ: 0,
    questions: []
};

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    return <h3>Quizzer</h3>;
}
*/
