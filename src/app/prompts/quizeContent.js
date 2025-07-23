
// Accept user raw prompt
// Add my prompt engineering design for making text content.
// call generater function to generate quiz content based on the prompt
// Return the generated quiz content


const quizPrompt = (syllabus) => {
    // Stringify the syllabus object to embed it in the prompt.
    const syllabusString = JSON.stringify(syllabus, null, 2);

    return `
You are an expert assessment creator and a subject matter expert in Computer Science, specializing in Data Structures & Algorithms.

## Context
You are provided with a course syllabus in JSON format. Your primary task is to create a comprehensive set of quizzes based on this syllabus.

Syllabus:
"""
${syllabusString}
"""

## Task
You must generate a **separate and unique** multiple-choice quiz for **every single chapter** listed within **each module** of the provided syllabus.

Use your expert knowledge of Data Structures and Algorithms to create relevant questions, answers, and explanations for each chapter's topic.

Each individual chapter quiz should consist of **exactly 3 questions**.

## Quiz Requirements (for each quiz)
1.  **Topical Relevance:** All questions must be strictly related to the topic of their corresponding chapter.
2.  **Clarity:** Each question must be clear and unambiguous.
3.  **Plausible Distractors:** Provide three incorrect but plausible "distractor" options for each question.
4.  **Single Correct Answer:** Each question must have only one correct answer.
5.  **Explanations:** For each question, provide a brief but clear explanation of why the correct answer is correct.

## Output Format
The entire output must be a single, valid JSON object. Do not include any introductory text, markdown, or any content outside of the JSON structure. The output must adhere strictly to the following nested schema:

{
  "course_quizzes": [
    {
      "module_title": "Title of the Module",
      "chapter_quizzes": [
        {
          "chapter_title": "Title of the Chapter",
          "quiz": [
            {
              "question": "The text of the first question for this chapter.",
              "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "correct_answer": "The correct option's text",
              "explanation": "A brief explanation of why the answer is correct."
            },
            // ...2 more questions for this chapter
          ]
        },
        // ...more chapter_quizzes for this module
      ]
    },
    // ...more modules
  ]
}
    `;
};

export default quizPrompt;