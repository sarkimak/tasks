import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");

    const updateAns = (e: ChangeEvent) => {
        setAns(e.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>What is the Answer?</Form.Label>
                <Form.Control
                    type="text"
                    value={ans}
                    onChange={updateAns}
                ></Form.Control>
            </Form.Group>
            <p>{ans === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
