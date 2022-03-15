import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { QuestionsList } from "./QuestionsList";
import { Quiz } from "../interfaces/quizzes";
import { QuizEditor } from "./QuizEditor";

export function QuizView({
    quiz,
    editQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <p>{quiz.description}</p>
                    <QuestionsList questions={quiz.questions}></QuestionsList>
                </Col>
            </Row>
        </Container>
    );
}
