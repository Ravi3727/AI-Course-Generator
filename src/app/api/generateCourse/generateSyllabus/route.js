

//  Genrate Syllabus from promt getting user input




import {generateSyllabusContent} from "../../../generaters/syllabusContent";


export async function POST(request) {
    const { prompt } = await request.json();
    // console.log('Received prompt on generateSyllabus route:', prompt);
    if (!prompt) {
        return new Response(JSON.stringify({ error: 'Prompt is required' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
    try {

        const syllabusContent = await generateSyllabusContent(prompt);
        // console.log('Generated syllabus Content:', syllabusContent);

        return new Response(JSON.stringify(syllabusContent), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });

        
    } catch (error) {
        console.error('Error generating syllabus content:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
