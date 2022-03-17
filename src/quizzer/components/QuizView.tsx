import React from "react";
import { Quiz } from "../../interfaces/quiz";
import { Button, Form } from "react-bootstrap";

function QuizList({
    quizzes,
    currQ,
    setCurrQ
}: {
    quizzes: Quiz[];
    currQ: Quiz;
    setCurrQ: (newQuiz: Quiz) => void;
}): JSX.Element {
    function changeCurrQ(event: React.ChangeEvent<HTMLSelectElement>){
        const id = parseInt(event.target.value);
    }

return (
    <div>
        <Form.Group controlId="quizList">
            <Form.Select value={currQ.id} onChange={changeCurrQ}>
                {quizzes.map(
                    (q: Quiz): JSX.Element => (
                        <option key={q.id} value={q.id}>
                                {q.title}
                            </option>
                    )
                )}
                </Form.Select>
            </Form.Group>
            <p>{currQ.points}</p>
            <p>{currQ.description}</p>
            </div>
);
                    }

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