import React from "react";
import { useTexts } from "./langagueSwitch";
import "./localizedText.css"

function LocalizedText({ textKey }) {
    const text = useTexts(textKey);
    return `${text}`;
}

export default LocalizedText;