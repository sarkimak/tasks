import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { QuestionsList } from "./QuestionsList";
import { Quiz } from "../interfaces/quizzes";
import { QuizEditor } from "./QuizEditor";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newMovie: Quiz) => void;
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
            deleteQuiz={deleteQuiz}
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
