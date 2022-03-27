import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
    addPoints,
    points
}: {
    options: string[];
    expectedAnswer: string;
    addPoints: (addedP: number) => void;
    points: number;
}): JSX.Element {
    const [ans, setAns] = useState<string>(options[0]);
    const [lastCorrect, setLastCorr] = useState<boolean>(false);

    function updateAns(event: ChangeEvent) {
        setAns(event.target.value);
        if (event.target.value !== expectedAnswer) {
            if (lastCorrect === true) {
                addPoints(-points);
                setLastCorr(false);
            }
        }
        if (event.target.value === expectedAnswer) {
            setLastCorr(true);
            addPoints(points);
        }
    }

    return (
        <div>
            <h6>Multiple Choice Question</h6>
            <Form.Label> Choose an Answer:</Form.Label>
            <Form.Select value={ans} onChange={updateAns}>
                {options.map(
                    (dropOption: string): JSX.Element => (
                        <option key={dropOption} value={dropOption}>
                            {dropOption}
                        </option>
                    )
                )}
            </Form.Select>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
