import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [att, setAtt] = useState<number>(4);
    const [prog, setProg] = useState<boolean>(false);

    return (
        <div>
            <p>{att}</p>
            <Button
                onClick={() => {
                    setAtt((prevAtt) => prevAtt - 1);
                    setProg(true);
                }}
                disabled={prog || att <= 0}
            >
                Start Quiz
                </Button>
                <Button onClick={() => {setProg(true)}>
                Stop Quiz
                </Button>
                <Button onClick={() => {setAtt(prevAtt) => prevAtt + 1 }
                disabled=(prog)
                >
                Mulligan
            </Button>
        </div>
    );
}
