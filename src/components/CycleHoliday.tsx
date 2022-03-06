import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // Chron: Fourth of July 🇺🇸, My Birthday 🌴, Halloween 🎃, Thanksgiving 🍂, Christmas 🎄
    // Alpha: Christmas 🎄, Fourth of July 🇺🇸, Halloween 🎃, My Birthday 🌴, Thanksgiving 🍂
    const [currH, setH] = useState<string>("🇺🇸");

    const chron: Record<string, string> = {
        "🇺🇸": "🌴",
        "🌴": "🎃",
        "🎃": "🍂",
        "🍂": "🎄",
        "🎄": "🇺🇸"
    };
    const alpha: Record<string, string> = {
        "🎄": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🌴",
        "🌴": "🍂",
        "🍂": "🎄"
    };
    return (
        <div>
            <p>Holiday: {currH}</p>
            <div>
                <Button onClick={() => setH((prevH) => alpha[prevH])}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setH((prevH) => chron[prevH])}>
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
