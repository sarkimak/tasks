import { questions } from "./questions";

export interface quizzes {
    title: string;
    points: number;
    description: string;
    questions: questions[];
}
