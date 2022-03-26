import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quizzer/components/QuizList";
import quest from "./data/quizquestions.json";
import { Button } from "react-bootstrap";
import { AddQuizModal } from "../quizzer/components/AddQuizModal";

const QUIZZES = quest.map(
    (quiz): Quiz => ({
        ...quiz,
        open: false
    })
);
export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const CloseAddModal = () => setShowAddModal(false);
    const SShowAddModal = () => setShowAddModal(true);

    //function editQuiz

    //function deleteQuiz

    //function addQuiz
    
    return (
        <div>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={SShowAddModal}
                >
                    Add New Movie
                </Button>
                <AddQuizModal
                    show={showAddModal}
                    handleClose={CloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuizModal>
            </div>
        </div>
    );
}