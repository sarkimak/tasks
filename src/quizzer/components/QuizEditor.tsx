import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quizzes";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);
    const [points, setPoints] = useState<string>(quiz.points.toString);

    function save() {
        editQuiz(quiz.title, {
            ...quiz,
            title: title,
            description: description,
            points: points
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group controlId="formMovieDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Points */}
                    <Form.Group controlId="formPoints" as={Row}>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setPoints(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.title)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
