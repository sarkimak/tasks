import { Question } from "./questions";

export interface Quiz {
    id: string;
    title: string;
    points: number;
    description: string;
    questions: Question[];
}
