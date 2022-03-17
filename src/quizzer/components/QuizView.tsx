import React from "react";
import { Quiz } from "../../interfaces/question.ts";
import { Button, Form } from "react-bootstrap";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <><div>
            <QuizList
                quizzes={quizzes} />
            <div>
                <StartQuizB currQ={currQ} setMode={setMode} />
                {"   "}
                <EdittQuizB currQ={currQ} setMode={setMode} />
            </div>
            <br></br>
            <p>{"Add Quiz"}</p>
        </div><NewQuizB setMode={setMode} /></>
        </div>
    </div>
    );
}