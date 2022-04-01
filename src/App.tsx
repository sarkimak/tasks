import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Quizzer</header>
            <Quizzer></Quizzer>
            <hr></hr>Sketch<hr></hr>
            <div className="sketch_img">
                <img src={require("./sketch.png")} />
            </div>
            <hr></hr>List of Completed Requirements:<hr></hr>
            <ul>
                <li>Application is Sketched: Y </li>
                <li>Quizzes are Visible: Y Tested: Y</li>
                <li>Quizzes have Questions: Y Tested: Y</li>
                <li>
                    Short Answer and Multiple Choice: Y Tested: Yes in indv
                    files
                </li>
                <li>Check Correctness: Y Tested: N</li>
                <li>Sum Points: Y Tested: Y</li>
                <li>Clear Answers: Y Tested: N</li>
                <li>Publish Questions: Y Tested: Test written, but fails?</li>
                <li>Filter Questions: Y Tested: Test written, but fails?</li>
                <li>Edit Questions: Y Tested: Y</li>
                <li>Add Questions: Y Tested: Y</li>
                <li>Delete Questions: Y Tested: Y</li>
                <li>
                    Reorder Questions: commented out code, cannot get it to work
                    Tested: N
                </li>
                <li>Add Quizzes: Y Tested: Y</li>
                <li>Delete Quizzes: Y Tested: Y</li>
            </ul>
        </div>
    );
}

export default App;
