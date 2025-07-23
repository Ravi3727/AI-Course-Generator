


import {getVideoUrls} from "../../../generaters/videoContent";


export async function POST(request) {
    const {syllabus } = await request.json();

    if (!syllabus) {
        return new Response(JSON.stringify({ error: 'Prompt/syllabus is required' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
    try {
        const videoUrls = await getVideoUrls(syllabus);
        // console.log('Generated Text Content:', textContent);


        return new Response(JSON.stringify(videoUrls), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });


    } catch (error) {
        console.error('Error generating videoUrls :', error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
