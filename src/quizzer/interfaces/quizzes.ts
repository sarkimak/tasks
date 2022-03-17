import { Question } from "./questions";

export interface Quiz {
    id: number;
    title: string;
    points: number;
    description: string;
    maxQ: number;
    questions: Question[];
}
