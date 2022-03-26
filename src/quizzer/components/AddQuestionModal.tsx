import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../../interfaces/question";

export function AddQuestionModal({
    show,
    handleClose,
    addQuestion
}: {
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuestion: Question) => void;
}) {
    const [id, setId] = useState<number>(3);

    function saveChanges() {
        addQuestion({
            id: id,
            name: "",
            body: "",
            type: "",
            options: [],
            expected: "",
            points: 0,
            published: false
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formQuestionId" as={Row}>
                    <Form.Label column sm={3}>
                        Question ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Question
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
