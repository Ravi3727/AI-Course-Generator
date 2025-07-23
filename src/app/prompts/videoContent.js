
// Accept user raw prompt
// Add my prompt engineering design for making text content.
// call generater function to generate video content based on the prompt
// Return the generated video content


const videoPrompt = (syllabus) => {
    return `
You are an expert research assistant and media curator specializing in educational content for the topic of "".

## Context
- Course syllabus: "${syllabus}" 

## Task
Your task is to generate a highly effective and diverse YouTube search query strings for each topics mentioned in the syllabus that are relevant to the chapter titled "". These queries will be used programmatically with the YouTube API to find suitable educational videos.

## Query Requirements
The queries must be designed to find different types of video content to provide a rich learning experience. Generate one query for each of the following five content formats:
1.  **Beginner's Explanation:** A query to find a short, clear, introductory explainer or animated video (e.g., "photosynthesis explained for beginners animation").
2.  **Academic Lecture:** A query to find a more in-depth lecture or talk from a university professor or conference (e.g., "Dr. Robert Sapolsky lecture on stress neuroscience").
3.  **Practical Tutorial/Demonstration:** A query to find a hands-on tutorial, case study, or practical demonstration of the concept (e.g., "how to build a simple DC motor tutorial").
4.  **Documentary/Historical Context:** A query to find a short documentary or a video providing historical or real-world context (e.g., "the history of the ENIGMA machine documentary").
5.  **Expert Discussion:** A query to find a panel discussion, debate, or interview with experts in the field (e.g., "panel discussion on the ethics of gene editing").
6. **Visual Explanation:** also give the two youtube video urls for each topic in the syllabus.

## Output Format
The output must be a single, valid JSON object. Do not include any explanatory text or any content outside of the JSON structure. The JSON object should follow this schema:

{ "search_queries": }

    `
}

export default videoPrompt;