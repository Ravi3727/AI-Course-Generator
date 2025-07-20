


import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});


export async function callAIToGenerateContent(readyPrompt) {
    // console.log("Ready Prompt: ", readyPrompt);
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: readyPrompt,
    });
    // console.log("AI course content:", response.text);
    return response.text;
}