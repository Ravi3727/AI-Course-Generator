


// take ready prompt from prompts files, 
// Call AI API and use it to generate quiz content based on the user's input
// return the generated quiz content



import  quizPrompt  from '../prompts/quizeContent';
import {callAIToGenerateContent} from './callToAI';

export async function getQuizeses(syllabus) {
    const readyPrompt = quizPrompt(syllabus);
    const quizeses = await callAIToGenerateContent(readyPrompt);

    // console.log('Generated videoUrls :', videoUrls);
    return quizeses;
}