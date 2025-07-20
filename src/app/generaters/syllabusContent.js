


// take ready prompt from prompts files, 
// Call AI API and use it to generate text content based on the user's input
// return the generated text content

import syllabusGeneratePrompt  from '../prompts/syllabusContent';
import {callAIToGenerateContent} from './callToAI';



export async function generateSyllabusContent(prompt) {
    // console.log('Generating syllabus content for prompt:', prompt);
    const syllabusPrompt =  syllabusGeneratePrompt(prompt);
    // console.log('Ready Prompt for Syllabus:', syllabusPrompt);
    const syllabusContent = await callAIToGenerateContent(syllabusPrompt);
    // console.log('Generated Syllabus Content:', syllabusContent);

    return syllabusContent;
}