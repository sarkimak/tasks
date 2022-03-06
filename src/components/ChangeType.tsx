import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setqType] = useState<QuestionType>("short_answer_question");
    const changeState = () => {
        if (qType === "short_answer_question") {
            setqType("multiple_choice_question");
        } else {
            setqType("short_answer_question");
        }
    };
    return (
        <div>
            <Button onClick={changeState}>Change Type</Button>
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
