import React from "react";
import { Publish } from "../interfaces/published";

export function PublishStatus({
    published
}: {
    published: Publish;
}): JSX.Element {
    return (
        <div>
            <em>{published.pub ? "Published" : "Not published"}</em>
        </div>
    );
}
