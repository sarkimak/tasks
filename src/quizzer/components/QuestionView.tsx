import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { ShortAnswer } from "./ShortAnswer";

export function QuestionView({
    question,
    addPoints,
    showUnpub
}: {
    question: Question;
    addPoints: (addedP: number) => void;
    showUnpub: boolean;
}): JSX.Element {
    return question.published || showUnpub ? (
        <Container>
            <Row>
                <Col>
                    <h3>{question.name}</h3>
                </Col>
            </Row>
            <Row>
                <p>Points: {question.points}</p>
                <h4>{question.body}</h4>
            </Row>
            <Row>
                {question.type === "multiple_choice" ? (
                    <MultipleChoiceQuestion
                        options={question.options}
                        expectedAnswer={question.expected}
                        addPoints={addPoints}
                        points={question.points}
                    ></MultipleChoiceQuestion>
                ) : (
                    <ShortAnswer
                        expectedAnswer={question.expected}
                        addPoints={addPoints}
                        points={question.points}
                    ></ShortAnswer>
                )}
            </Row>
        </Container>
    ) : (
        <div></div>
    );
}
