import React from "react";
import { Question } from "../interfaces/questions";
import { ListGroup } from "react-bootstrap";

export function QuestionsList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {questions.map((questions: Question) => (
                <ListGroup.Item
                    as="li"
                    key={questions.order}
                    className="d-flex align-items-start"
                ></ListGroup.Item>
            ))}
        </ListGroup>
    );
}
