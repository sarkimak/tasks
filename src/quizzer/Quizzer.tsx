import React from "react";
import { Quiz } from "../interfaces/quizzes";
import { Question, QuestionType } from "../interfaces/questions";
import quest from "./data/quizquestions.json";

const QUIZZES: Quiz[] = quest.map(
    (quizzes): Quiz => ({
        ...quizzes,
        questions: quizzes.questions.map(
            (questions): Question ({
                ...questions,
                type: questions.type as QuestionType
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
    return <h3>Quizzer</h3>;
}
