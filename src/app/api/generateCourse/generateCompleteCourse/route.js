


// Call backend API -> generateQuize, generateText, generateVideo by passing the user prompt
// then return the whole generated content in a structured format

import axios from 'axios';


export async function generateSyllabus(prompt) {
    const syllabusResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/generateSyllabus',
        { prompt }
    );
    console.log('Generated Syllabus Content:', syllabusResponse.data);
    if (syllabusResponse.status !== 200) {
        throw new Error('Failed to generate text content');
    }
    return syllabusResponse.data;
}



export async function generateTextContent(prompt,syllabus) {
    const textResponse = await axios.post(
        'http://localhost:3000/api/generateCourse/generateTextContent',
        { prompt , syllabus } 
    );
    if (textResponse.status !== 200) {
        throw new Error('Failed to generate text content');
    }
    return textResponse.data;
}





export async function POST(request) {
    const { prompt } = await request.json();
    // console.log('Received prompt:', prompt);

    const syllabusContent = await generateSyllabus(prompt);
    // console.log('Generated Syllabus Content from generate complete course :', syllabusContent);



    const textContent = await generateTextContent(prompt,syllabusContent);
    // console.log('Generated Text Content from generate complete course :', textContent);

    
    const response = {
        text: `Generated content based on the prompt: ${prompt}`,
        status: 'success',
        data: {
            syllabus: syllabusContent,
            textContent: textContent
        }
    };

    return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}