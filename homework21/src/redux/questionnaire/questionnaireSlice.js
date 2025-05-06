import { createSlice } from "@reduxjs/toolkit";
import questions from "./questions";

const initialState = {
    questions,
    answers: [],
    result: null,
};

const questionaireSlice = createSlice({
    name: "questionnaire",
    initialState,
    reducers: {
        answerToQuestion: (state, action) => {
            const { questionId, selectedOptionIndex } = action.payload;
            const existingAnswerIndex = state.answers.findIndex(a => a.questionId === questionId);

            if (existingAnswerIndex !== -1) {
                state.answers[existingAnswerIndex].selectedOptionIndex = selectedOptionIndex;
            } else {
                state.answers.push({ questionId, selectedOptionIndex });
            }
        },
        submitAnswers: (state) => {
            let res = 0;
            state.answers.forEach(answer => {
                const question = state.questions.find(q => q.id === answer.questionId);
                if (question.options[answer.selectedOptionIndex]?.isCorrect) {
                    res += 1;
                }
            });
            state.result = res;
        },
        resetQuiz: (state) => {
            state.answers = [];
            state.result = null;
        },
    }
});

export const { answerToQuestion, submitAnswers, resetQuiz } = questionaireSlice.actions;
export default questionaireSlice.reducer;