export type QuestionType = "multiple_choice_question" | "short_answer_question";
export interface Question {
    id: number;
    name: string;
    body: string;
    type: QuestionType;
    options: string[];
    expected: string;
    points: number;
    published: boolean;
}
