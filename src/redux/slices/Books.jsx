import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const QuizAsync = createAsyncThunk(
    'quiz/AllQuestion',
    async () => {
        return await getAllQuiz();
    }
) 

const initialState = {
    userName:''
}
const quizSlice = createSlice({
    name:'book',
    initialState,
    reducers:{
     handleUserName:(state,action) => {
        state.userName = action.payload
     }
    },
    extraReducers:(builder) => {
        builder
        .addCase(QuizAsync.pending,(state)=> {
            state.loading = true
        })
        .addCase(QuizAsync.fulfilled,(state,action)=> {
            state.loading = false;
            let tenQuestionIndex = [];
            while(tenQuestionIndex.length < 10) {
                const randomIndex = Math.floor(Math.random()*action.payload.length);
                if(!tenQuestionIndex.includes(randomIndex)) tenQuestionIndex.push(randomIndex);
            }
            const randomData =  tenQuestionIndex.map(index => action.payload[index]);
            const newAnswers = randomData.map(item =>(
                {
                    ...item,
                    stylishs:item.body.split('\n').map((sty,index) =>(
                        {
                            id:index,
                            answer:sty,
                            isActive:false
                        }
                    )),
                    correctAnswer:Math.floor(Math.random()*4),
                    userAnswer:null,
                }
            ))
            state.answers = newAnswers;
        })
        .addCase(QuizAsync.rejected,(state)=> {
            state.loading = true
        })
    }
})

export default quizSlice.reducer;
export const { handleUserName, handleChangeAnswer, resetAnswer, handleQuizCompleted, quizTimer,handleChangeQuestion } = quizSlice.actions;