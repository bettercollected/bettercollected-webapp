import { createSlice } from '@reduxjs/toolkit';

export interface formResponseTabState {
    selected: any;
}

const initialState: formResponseTabState = {
    selected: 'Questions'
};

export const formResponseTabSlice = createSlice({
    name: 'formResponseTab',
    initialState,
    reducers: {
        tabSelector(state, action) {
            state.selected = action.payload;
        }
    }
});

export const formResponseTabActions = formResponseTabSlice.actions;
export default formResponseTabSlice.reducer;
