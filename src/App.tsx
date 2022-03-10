import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

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
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
