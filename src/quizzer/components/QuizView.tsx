import React from "react";
import { Quiz } from "../../interfaces/quiz";
import { Button, Form } from "react-bootstrap";
import { ScriptElementKindModifier } from "typescript";

function QuizList({
    quizzes,
    currQ,
    setCurrQ
}: {
    quizzes: Quiz[];
    currQ: Quiz;
    setCurrQ: (newQuiz: Quiz) => void;
}): JSX.Element {
    function changeCurrQ(event: React.ChangeEvent<HTMLSelectElement>) {
        const id = parseInt(event.target.value);
        console.log(id);
        console.log(quizzes[id]);
        setCurrQ(quizzes[id]);
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

function StartQuizB({
    setMode,
    currQ
}: {
    setMode: (newMode: string) => void;
    currQ: Quiz;
}): JSX.Element {
    return (
        <Button disabled={isNaN(currQ.id)} onClick={() => setMode("start")}>
            Start Quiz
        </Button>
    );
}

function EdittQuizB({
    setMode,
    currQ
}: {
    setMode: (newMode: string) => void;
    currQ: Quiz;
}): JSX.Element {
    return (
        <Button disabled={isNaN(currQ.id)} onClick={() => setMode("edit")}>
            Edit Quiz
        </Button>
    );
}

function NewQuizB({
    setMode
}: {
    setMode: (newMode: string) => void;
}): JSX.Element {
    return <Button onClick={() => setMode("new")}>+ Add Quiz</Button>;
}

/*export function QuizView({
    setMode,
    quizzes,
    currQ,
    setCurrQ
}: {
    setMode: (newMode: string) => void;
    quizzes: Quiz[];
    currQ: Quiz;
    setCurrQ: (newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <div>
            <h6> Choose A Quiz! </h6>
            <QuizList
                quizzes={quizzes}
                currQ={currQ}
                setCurrQ={setCurrQ} 
            />
            <div>
                <StartQuizB currQ={currQ} setMode={setMode} />
                {"   "}
                <EdittQuizB currQ={currQ} setMode={setMode} />
            </div>
            <br></br>
            <p>{"Add Quiz"}</p>
            </div>
                <NewQuizB setMode={setMode} />
            </div>
        </div>
    );
}
*/
