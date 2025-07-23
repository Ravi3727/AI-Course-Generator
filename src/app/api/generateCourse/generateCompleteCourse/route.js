


// Call backend API -> generateQuize, generateText, generateVideo by passing the user prompt
// then return the whole generated content in a structured format

import axios from 'axios';


function cleanAndParseJSONBlock(text) {
    try {
        const cleaned = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleaned);
    } catch (err) {
        console.error('Failed to parse JSON block:', err);
        return null;
    }
}

export async function generateSyllabus(prompt) {
    const syllabusResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/generateSyllabus',
        { prompt }
    );
    // console.log('Generated Syllabus Content:', syllabusResponse.data);
    if (syllabusResponse.status !== 200) {
        throw new Error('Failed to generate text content');
    }
    return syllabusResponse.data;
}



export async function generateTextContent(prompt, syllabus) {
    const textResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/generateTextContent',
        { prompt, syllabus }
    );
    if (textResponse.status !== 200) {
        throw new Error('Failed to generate text content');
    }
    // return cleanAndParseJSONBlock(textResponse.data);
    return textResponse.data;
}

// Video url on topics course.

export async function getVideoUrls(syllabus) {
    const videoResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/getVideoUrls',
        { syllabus }
    );
    // console.log('Generated Syllabus Content:', videoResponse.data);
    if (videoResponse.status !== 200) {
        throw new Error('Failed to generate video content');
    }
    return cleanAndParseJSONBlock(videoResponse.data);
}


export async function generateQuizeses(syllabus){
    const quizeResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/generateQuizes',
        { syllabus }
    );
    // console.log('Generated Quizes Content:', quizeResponse.data);
    if (quizeResponse.status !== 200) {
        throw new Error('Failed to generate quiz content');
    }
    // return cleanAndParseJSONBlock(quizeResponse.data);
    return quizeResponse.data;
}




export async function POST(request, response) {
    const { prompt } = await request.json();
    // console.log('Received prompt:', prompt);

    const syllabusContent = await generateSyllabus(prompt);
    const structuredSyllabus =  cleanAndParseJSONBlock(syllabusContent);
    // console.log('Generated Syllabus Content from generate complete course :', syllabusContent);



    const textContent = await generateTextContent(prompt,syllabusContent);
    // console.log('Generated Text Content from generate complete course :', textContent);

    const videoUrls = await getVideoUrls(syllabusContent);
    // console.log('Generated Video URLs from generate complete course :', videoUrls);


    const quizeContent = await generateQuizeses(syllabusContent);
    const structuredQuize = cleanAndParseJSONBlock(quizeContent);
    // console.log('Generated Quizes Content from generate complete course :', quizeContent);


    return new Response(
        JSON.stringify({
            message: `Generated content based on the prompt: ${prompt}`,
            success: true,
            course: {
                syllabus: structuredSyllabus,
                textContent: textContent,
                videoContent: videoUrls,
                quizeContent : structuredQuize,
            },
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    );
}