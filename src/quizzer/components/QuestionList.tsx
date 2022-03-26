import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    addPoints,
    showUnpub
}: {
    questions: Question[];
    addPoints: (addedP: number) => void;
    showUnpub: boolean;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        addPoints={addPoints}
                        showUnpub={showUnpub}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}