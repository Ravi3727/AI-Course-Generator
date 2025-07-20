const syllabusGeneratePrompt = (courseData) => {
    return `You are an expert curriculum developer and instructional designer, tasked with creating a comprehensive and logically structured syllabus for an online course.

Here is the user prompt: ${courseData}

Your task is to generate a complete course syllabus consisting of exactly 6 modules. Each module must contain between 3 and 5 chapters.

The structure of the course must follow a logical pedagogical progression:
1.  Module 1 must cover the most fundamental principles, definitions, and historical context.
2.  The intermediate modules (2-5) must build upon this foundation, introducing more complex concepts, theories, and methodologies in a sequential order.
3.  Module 6 must cover advanced topics, practical applications, future trends, or case studies related to the topic.

For each module, provide a descriptive title. For each chapter within a module, provide a concise and clear title that accurately reflects its content.

The final output must be a single, valid JSON object. Do not include any explanatory text, markdown formatting, or any content outside of the JSON structure. The JSON object should follow this schema:

{"course_title": "A Comprehensive Course on", "modules": []}`;
};

export default syllabusGeneratePrompt;
