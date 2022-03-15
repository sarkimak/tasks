import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <hr></hr>Sketch<hr></hr>
            <div className="sketch_img">
                <img src={require("./sketch.png")} />
            </div>
            <hr></hr>List of Completed Requirements<hr></hr>
        </div>
    );
}

export default App;
