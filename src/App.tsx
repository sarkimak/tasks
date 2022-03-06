import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    Sarah Kimak UD CISC275 with React Hooks and TypeScript
                </header>
                <h1>All About Bailey</h1>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            Meet my dog Bailey. She is almost six years old
                            retreiver. Bailey likes to:
                            <ul>
                                <li>Run around fields on Sunday Fun-day</li>
                                <li>Eat sticks, scrambled eggs and treats</li>
                                <li>Get pets and endless attention</li>
                            </ul>
                            <div
                                style={{
                                    border: "1px solid red",
                                    padding: "4px",
                                    width: "100px",
                                    height: "30px",
                                    backgroundColor: "#ff0000"
                                }}
                            >
                                rectangle!
                            </div>
                        </Col>
                        <Col>
                            <img
                                src="https://welovedoodles.com/wp-content/uploads/2021/03/Golden-Retriever-In-Virginia-225x300.jpg"
                                alt="A picture of Bailey."
                            />
                            <div
                                style={{
                                    border: "1px solid red",
                                    padding: "4px",
                                    width: "100px",
                                    height: "30px",
                                    backgroundColor: "#ff0000"
                                }}
                            >
                                rectangle!
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </>
    );
}

export default App;
