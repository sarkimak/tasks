import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    description: string;
    open: boolean;
    questions: Question[];
}
