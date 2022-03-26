import React, { useState } from "react";
import { Quiz } from "../../interfaces/quiz";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { QuestionList } from "./QuestionList";
import { EditQuiz } from "./EditQuiz";

function QuizList({
    quiz,
    editQuiz,
    deleteQuiz

}: {
    quiz: Quiz[];
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
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
            setQ={setQ}
            questions={questions}
        ></QuizEditor>
    ) : (
            <Container>
                <Row>
                    <Col>
                        <h3>{quiz.title}</h3>
                    </Col>
                </Row>
            </Container>
    )

function StartQuizB({
    setMode,
    currQ
}: {
    setMode: (newMode: string) => void;
    currQ: Quiz;
}): JSX.Element {
    return (
        <Button disabled={isNaN(currQ.id)} onClick={() => setMode("start")}>
            Start Quiz
        </Button>
    );
}