


// take ready prompt from prompts files, 
// Call AI API and use it to generate text content based on the user's input
// return the generated text content

import  textPrompt  from '../prompts/textContent';
import {callAIToGenerateContent} from './callToAI';



export async function generateTextContent(prompt, syllabus) {

    const readyPrompt = textPrompt(prompt, syllabus);
    const textcontent = await callAIToGenerateContent(readyPrompt);

    // console.log('Generated Text Content:', textcontent);
    return textcontent;
}