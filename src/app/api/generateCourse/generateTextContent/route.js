


import {generateTextContent} from "../../../generaters/textContent";


export async function POST(request) {
    const { prompt,syllabus } = await request.json();

    if (!prompt || !syllabus) {
        return new Response(JSON.stringify({ error: 'Prompt/syllabus is required' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
    try {
        const textContent = await generateTextContent(prompt,syllabus);
        // console.log('Generated Text Content:', textContent);


        return new Response(JSON.stringify(textContent), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });


    } catch (error) {
        console.error('Error generating text content:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
