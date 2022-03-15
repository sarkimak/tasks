import { Publish } from "./published";

export interface Question {
    name: string;
    body: string;
    points: number;
    published: Publish;
}
