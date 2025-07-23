



// Accept user raw prompt
// Add my prompt engineering design for making a quiz (import from prompt engineering file)
// Call another function to generate a quiz based on the prompt
// Return the generated quiz

// send this user prompt to the prompt engineering file.
// It will add the necessary prompt engineering design 
// and return a quize 
// then this file returns prompt engineering result to the frontend.









import {getQuizeses} from "../../../generaters/quizeContent";


export async function POST(request) {
    const {syllabus } = await request.json();

    if (!syllabus) {
        return new Response(JSON.stringify({ error: 'Prompt/syllabus is required' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
    try {
        const quizeses = await getQuizeses(syllabus);
        // console.log('Generated Text Content:', textContent);


        return new Response(JSON.stringify(quizeses), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });


    } catch (error) {
        console.error('Error generating generateQuize :', error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}



