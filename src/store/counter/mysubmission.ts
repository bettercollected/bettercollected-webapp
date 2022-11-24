import { createSlice } from '@reduxjs/toolkit';

export interface mySubmissionState {
    isMysubmission: boolean;
    isForm: boolean;
}

const initialState: mySubmissionState = {
    isMysubmission: false,
    isForm: true
};

export const mySubmissionSlice = createSlice({
    name: 'mySubmission',
    initialState,
    reducers: {
        // ismysubmission(state){
        //     // state.isMysubmission= ! state.isMysubmission
        //     if(state.isMysubmission==false){
        //         state.isMysubmission = true;
        //     }
        // },
        // isform(state){
        //     // state.isMysubmission= ! state.isMysubmission
        //     if(state.isForm==true){
        //         state.isForm = false;
        //     }
        // }
        formHandler(state) {
            if (state.isForm == false) {
                state.isForm = true;
                state.isMysubmission = false;
            }
        },
        mysubmissionHandler(state) {
            if (state.isMysubmission == false) {
                state.isMysubmission = true;
                state.isForm = false;
            }
        }
    }
});

export const mySubmissionActions = mySubmissionSlice.actions;
export default mySubmissionSlice.reducer;
