import React, { useState } from "react";
import { Quiz } from "../../interfaces/quiz";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Question } from "../../interfaces/question";
import { EditQuestions } from "./EditQuestions";
import { AddQuestionModal } from "./AddQuestionModal";

export function EditQuiz({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz,
    setQ,
    questions
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: number, newQuiz: Quiz) => void;
    deleteQuiz: (id: number) => void;
    setQ: (questions: Question[]) => void;
    questions: Question[];
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const CloseAddModal = () => setShowAddModal(false);
    const SShowAddModal = () => setShowAddModal(true);

    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            description: description,
            questions: questions
        });
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }
    function addQuestion(newQuest: Question) {
        const exists = questions.find(
            (question: Question): boolean => question.id === newQuest.id
        );
        if (exists === undefined) {
            setQ([...questions, newQuest]);
        }
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
                    <Form.Group controlId="formQuizDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Questions */}
                    <EditQuestions
                        questions={questions}
                        setQ={setQ}
                    ></EditQuestions>
                    {/* Create New Question Modal */}
                    <div>
                        <Button
                            variant="success"
                            className="me-4"
                            onClick={SShowAddModal}
                        >
                            Add a Question
                        </Button>
                        <AddQuestionModal
                            show={showAddModal}
                            handleClose={CloseAddModal}
                            addQuestion={addQuestion}
                        ></AddQuestionModal>
                    </div>
                    {/* Save and Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Add a Question
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.id)}
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
