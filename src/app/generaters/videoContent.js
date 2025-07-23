


// take ready prompt from prompts files, 
// Call YT API and use it to generate video content based on the user's input
// return the generated quiz content



import  videoPrompt  from '../prompts/videoContent';
import {callAIToGenerateContent} from './callToAI';

export async function getVideoUrls(syllabus) {

    const readyPrompt = videoPrompt(syllabus);
    const videoUrls = await callAIToGenerateContent(readyPrompt);

    // console.log('Generated videoUrls :', videoUrls);
    return videoUrls;
}