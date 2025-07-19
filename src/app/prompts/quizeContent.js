
// Accept user raw prompt
// Add my prompt engineering design for making text content.
// call generater function to generate quiz content based on the prompt
// Return the generated quiz content



const quizPrompt = (courseData) => {
    `
You are an expert assessment creator and subject matter expert in "". Your task is to create a multiple-choice quiz to test a student's comprehension of a provided text.

## Context
The quiz must be based *solely* on the content of the following explanatory text. All questions, correct answers, and explanations must be derived directly from this material. Do not use any external knowledge.

Explanatory Text:
"""
${courseData.chapterText}
"""

## Task
Generate a quiz consisting of exactly 5 multiple-choice questions based on the provided text.

## Quiz Requirements
1.  **Question Clarity:** Each question must be clear, concise, and unambiguous.
2.  **Plausible Distractors:** For each question, provide three incorrect "distractor" options. These distractors must be plausible and related to the topic but demonstrably false according to the provided text.
3.  **Single Correct Answer:** Each question must have only one correct answer.
4.  **Explanations:** For each question, provide a brief explanation for why the correct answer is correct, citing the reasoning from the provided text. This turns the quiz into a learning tool.

## Output Format
The entire output must be a single, valid JSON object. Do not include any introductory text, markdown, or any content outside of the JSON structure. Adhere strictly to the following schema, including all specified keys:

{ "quiz": }
    `
}