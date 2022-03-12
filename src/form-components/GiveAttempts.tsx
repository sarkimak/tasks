import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq. setAttemptsReq] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId=requestedAttempts">
        </div>
    );
}
