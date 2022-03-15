import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import quest from "./quizzer/data/quizquestions.json";
import { Quiz } from "./quizzer/interfaces/quizzes";
import { QuizList } from "./quizzer/components/QuizList";

/*function App(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);

    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            Quiz.map(
                (quizzes: Quiz): Quiz => (quizzes.id === id ? newQuiz : quizzes)
            )
        );
    }

    function deleteQuiz(id: string) {
        setQuizzes(
            quizzes.filter((quizzes: Quiz): boolean => quizzes.id !== id)
        );
    }
*/
    return (
        <div className="App">
            <header className="App-header">Quizzer</header>
            <Quizzer></Quizzer>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <hr></hr>Sketch<hr></hr>
            <div className="sketch_img">
                <img src={require("./sketch.png")} />
            </div>
            <hr></hr>List of Completed Requirements<hr></hr>
            <ul>
                <li>Application is Sketched: Y Tested: N</li>
                <li>Quizzes are Visible: Y Tested: N</li>
                <li>Quizzes have Questions: Y Tested: N</li>
                <li>Short Answer and Multiple Choice: Y Tested: N</li>
                <li>Check Correctness: Y Tested: N</li>
                <li>Sum Points: Y Tested: N</li>
                <li>Clear Answers: Y Tested: N</li>
                <li>Publish Questions: Y Tested: N</li>
                <li>Filter Questions: Y Tested: N</li>
                <li>Edit Questions: Y Tested: N</li>
                <li>Add Questions: Y Tested: N</li>
                <li>Delete Questions: Y Tested: N</li>
                <li>Reorder Questions: Y Tested: N</li>
                <li>Add Quizzes: Y Tested: N</li>
                <li>Delete Quizzes: Y Tested: N</li>
            </ul>
        </div>
    );
}

export default App;
