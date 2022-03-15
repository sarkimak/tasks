import { Publish } from "./published";

export interface Question {
    order: number;
    body: string;
    points: number;
    published: Publish;
}
