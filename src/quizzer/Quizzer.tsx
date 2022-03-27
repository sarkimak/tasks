import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quizzer/components/QuizList";
import quest from "./data/quizquestions.json";
import { Button } from "react-bootstrap";
import { AddQuizModal } from "../quizzer/components/AddQuizModal";

const QUIZZES = quest.map(
    (quiz): Quiz => ({
        ...quiz,
        open: false,
        id: 0
    })
);
export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const CloseAddModal = () => setShowAddModal(false);
    const SShowAddModal = () => setShowAddModal(true);

    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    function addQuiz(newQuiz: Quiz) {
        const exisitng = quizzes.find(
            (quiz: Quiz): boolean => quiz.id === newQuiz.id
        );
        if (exisitng === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

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
                    Add New Quiz
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
