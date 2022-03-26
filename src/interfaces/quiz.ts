import { Question } from "./question";

export interface Quiz {
    title: string;
    description: string;
    questions: Question[];
    open: boolean;
    id: number;
}
