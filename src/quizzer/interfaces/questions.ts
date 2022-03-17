export type QuestionType = "multiple_choice_question" | "short_answer_question";
export interface Question {
    id: number;
    name: string;
    body: string;
    type: QuestionType;
    options: string[];
    points: number;
    published: boolean;
}
