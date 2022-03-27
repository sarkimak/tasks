import React from "react";
import { Question } from "../../interfaces/question";
import { ListGroup, Form, Container, Row, Col } from "react-bootstrap";

interface QuestionP {
    question: Question;
    setQuestion: (id: number, newQuestion: Question) => void;
}

export function EditQuestionName({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    name: event.target.value
                })
            }
        />
    );
}

export function EditQuestionDelete({
    question,
    setQ,
    questions
}: {
    question: Question;
    setQ: (questions: Question[]) => void;
    questions: Question[];
}): JSX.Element {
    return (
        <button
            onClick={() =>
                setQ(
                    questions.filter(
                        (questionF: Question): boolean =>
                            questionF.id !== question.id
                    )
                )
            }
        >
            Delete Question
        </button>
    );
}

export function EditQuestionBody({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.body}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    body: event.target.value
                })
            }
        />
    );
}

export function EditQuestionType({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.type}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    type: event.target.value
                })
            }
        />
    );
}

export function EditQuestionExpected({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.expected}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    expected: event.target.value
                })
            }
        />
    );
}

export function EditQuestionPoints({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.points}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    points: parseInt(event.target.value)
                })
            }
        />
    );
}

export function EditQuestionOptions({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Control
            value={question.options.toString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    options: event.target.value.split(",")
                })
            }
        />
    );
}

export function EditQuestionPub({
    question,
    setQuestion
}: QuestionP): JSX.Element {
    return (
        <Form.Check
            type="switch"
            id="is-pub-check"
            label="Published?"
            checked={question.published}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    published: event.target.checked
                })
            }
        />
    );
}

export function EditQuestions({
    questions,
    setQ
}: {
    questions: Question[];
    setQ: (questions: Question[]) => void;
}): JSX.Element {
    function setQuestion(id: number, newQuest: Question) {
        setQ(
            questions.map((question: Question) =>
                question.id === id ? newQuest : question
            )
        );
    }
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    as="li"
                    key={question.id}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <Container>
                            {/* Question Name */}
                            <Row>
                                <Col>
                                    <p>Question Name</p>
                                </Col>
                                <Col>
                                    <EditQuestionName
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionName>
                                </Col>
                            </Row>
                            {/* Question Body */}
                            <Row>
                                <Col>
                                    <p>Question Body</p>
                                </Col>
                                <Col>
                                    <EditQuestionBody
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionBody>
                                </Col>
                            </Row>
                            {/* Expected Question */}
                            <Row>
                                <Col>
                                    <p>Expected Answer to Question</p>
                                </Col>
                                <Col>
                                    <EditQuestionExpected
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionExpected>
                                </Col>
                            </Row>
                            {/* Question Type */}
                            <Row>
                                <Col>
                                    <p>Question Type</p>
                                </Col>
                                <Col>
                                    <EditQuestionType
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionType>
                                </Col>
                            </Row>
                            {/* Question Options */}
                            <Row>
                                <Col>
                                    <p>Question Options</p>
                                </Col>
                                <Col>
                                    <EditQuestionOptions
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionOptions>
                                </Col>
                            </Row>
                            {/* Question Points */}
                            <Row>
                                <Col>
                                    <p>Question Points</p>
                                </Col>
                                <Col>
                                    <EditQuestionPoints
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionPoints>
                                </Col>
                            </Row>
                            {/* Published Question */}
                            <Row>
                                <Col>
                                    <EditQuestionPub
                                        question={question}
                                        setQuestion={setQuestion}
                                    ></EditQuestionPub>
                                </Col>
                            </Row>
                            {/* Delete Question */}
                            <Row>
                                <Col>
                                    <EditQuestionDelete
                                        question={question}
                                        setQ={setQ}
                                        questions={questions}
                                    ></EditQuestionDelete>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
