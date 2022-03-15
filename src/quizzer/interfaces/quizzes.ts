import { Question } from "./questions";

export interface Quiz {
    title: string;
    points: string;
    description: string;
    questions: Question[];
}
