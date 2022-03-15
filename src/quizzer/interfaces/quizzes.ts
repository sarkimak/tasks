import { Question } from "./questions";

export interface Quiz {
    title: string;
    points: number;
    description: string;
    questions: Question[];
}
