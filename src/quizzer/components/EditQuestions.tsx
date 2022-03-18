import React from "react";
import { Question, QuestionType } from "../../interfaces/question";
import { Quiz } from "../../interfaces/quiz";
import { Button, Form } from "react-bootstrap";

const BLANK_QUESTION: Question = {
    id: 0,
    name: "New Question",
    body: "",
    type: "short_answer_question" as QuestionType,
    options: [],
    expected: "",
    points: 0,
    published: false
};

/*export function EditQuestions({
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails
}: {
    questions: Question[];
    setQuestions: (newQuest: Question[]) => void;
    quizDetails: Quiz;
    setQuizDetails: (newQuizDetails: Quiz) => void;
}): JSX.Element {
    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }
    function addQuestion(id: number) {
        setQuestions([...questions, { ...BLANK_QUESTION, id: id + 1 }]);
        setQuizDetails({
            ...quizDetails,
            maxQ: id + 1
        });
    }
}
*/
