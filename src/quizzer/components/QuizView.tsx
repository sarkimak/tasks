import React, { useState } from "react";
import { Quiz } from "../../interfaces/quiz";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { QuestionList } from "./QuestionList";
import { EditQuiz } from "./EditQuiz";

export function QuizView({
    quiz,
    editQuiz,
    deleteQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    const [questions, setQ] = useState<Question[]>(quiz.questions);
    const [points, setP] = useState<number>(0);
    const [visible, setV] = useState<boolean>(false);
    const [editing, setE] = useState<boolean>(false);
    const [showUnpub, setShowUnpub] = useState<boolean>(true);

    function flipShowUnpub(): void {
        setShowUnpub(!showUnpub);
    }

    function flipV(): void {
        setV(!visible);
    }

    function addPoints(addedP: number) {
        setP(points + addedP);
    }

    function changeEditing() {
        setE(!editing);
    }

    return editing ? (
        <EditQuiz
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
            setQ={setQ}
            questions={questions}
        ></EditQuiz>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                </Col>
            </Row>
            <Row>
                <p>{quiz.description}</p>
                <p>Number of Questions: {quiz.questions.length}</p>
            </Row>
            <Row>
                <Button onClick={flipV}>Start Quiz</Button>
                <Button onClick={changeEditing}> Edit Quiz</Button>
            </Row>
            {visible && (
                <Row>
                    <p>
                        Total Points: {points}, Out of Possible: {quiz.points}
                    </p>
                    <Button onClick={flipShowUnpub}>
                        Filter Questions by Published/Unpublished
                    </Button>
                    <QuestionList
                        questions={questions}
                        addPoints={addPoints}
                        showUnpub={showUnpub}
                    ></QuestionList>
                </Row>
            )}
        </Container>
    );
}
