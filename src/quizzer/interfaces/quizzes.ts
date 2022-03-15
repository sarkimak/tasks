import { Question } from "./questions";

export interface Quiz {
    id: string;
    title: string;
    points: string;
    description: string;
    questions: Question[];
}
